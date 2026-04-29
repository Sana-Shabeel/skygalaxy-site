/**
 * Stripe client helpers.
 *
 * Configure with these env vars (Vite exposes anything prefixed `VITE_`):
 *   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
 *   VITE_CHECKOUT_API=/api/create-checkout-session   (optional override)
 *
 * The actual Checkout Session is created on the server (see
 * `api/create-checkout-session.ts`) so the secret key never touches the
 * browser.
 */
import { loadStripe, type Stripe } from "@stripe/stripe-js";
import type { CartItem } from "../context/cart-types";

const PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as
  | string
  | undefined;

const CHECKOUT_API =
  (import.meta.env.VITE_CHECKOUT_API as string | undefined) ??
  "/api/create-checkout-session";

let stripePromise: Promise<Stripe | null> | null = null;

export function getStripe(): Promise<Stripe | null> {
  if (!PUBLISHABLE_KEY) return Promise.resolve(null);
  if (!stripePromise) stripePromise = loadStripe(PUBLISHABLE_KEY);
  return stripePromise;
}

export const stripeIsConfigured = Boolean(PUBLISHABLE_KEY);

export type CheckoutPayload = {
  items: {
    productId: string;
    nameAr: string;
    nameEn: string;
    image?: string;
    qty: number;
    /** Unit amount in SAR halalas (1 SAR = 100 halalas). */
    unitAmount: number;
  }[];
  customer: {
    fullName: string;
    email: string;
    phone: string;
    city: string;
    address: string;
    notes?: string;
  };
};

/**
 * Calls the serverless endpoint to create a Stripe Checkout Session
 * and redirects the browser to the hosted Stripe page.
 */
export async function startStripeCheckout(
  items: CartItem[],
  customer: CheckoutPayload["customer"],
) {
  if (!stripeIsConfigured) {
    throw new Error(
      "Stripe is not configured. Set VITE_STRIPE_PUBLISHABLE_KEY in your .env file.",
    );
  }

  const payload: CheckoutPayload = {
    customer,
    items: items
      .filter((i) => i.product.priceSar != null)
      .map((i) => ({
        productId: i.product.id,
        nameAr: i.product.nameAr,
        nameEn: i.product.nameEn,
        image: i.product.images[0],
        qty: i.qty,
        unitAmount: Math.round((i.product.priceSar as number) * 100),
      })),
  };

  const res = await fetch(CHECKOUT_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const msg = await res.text().catch(() => "");
    throw new Error(`فشل إنشاء جلسة الدفع. ${msg || ""}`.trim());
  }

  const { url, sessionId } = (await res.json()) as {
    url?: string;
    sessionId?: string;
  };

  if (url) {
    window.location.href = url;
    return;
  }

  // Fallback: if only a session id was returned, surface a clear error.
  // (Stripe.js no longer ships `redirectToCheckout` — the server should
  // always return a `url` for hosted Checkout.)
  if (sessionId) {
    // touch getStripe so it tree-shakes correctly when configured
    await getStripe();
    throw new Error(
      `الخادم أرجع معرّف الجلسة (${sessionId}) بدون رابط دفع. يرجى تحديث API لإرجاع session.url.`,
    );
  }

  throw new Error("لم يتم إرجاع رابط الدفع من الخادم.");
}
