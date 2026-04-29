/**
 * Serverless function — creates a Stripe Checkout Session for the cart.
 *
 * Deployment:
 *   • Vercel:  drop this file as `api/create-checkout-session.ts` (no extra
 *              config). Vercel will route POST /api/create-checkout-session
 *              to it automatically.
 *   • Netlify: rename to `netlify/functions/create-checkout-session.ts` and
 *              adapt the handler signature (event/context → Request/Response
 *              is similar to below).
 *
 * Required env vars (set them in your hosting dashboard):
 *   STRIPE_SECRET_KEY=sk_test_...
 *   PUBLIC_SITE_URL=https://your-domain.com
 */
import Stripe from "stripe";

type CheckoutPayload = {
  items: {
    productId: string;
    nameAr: string;
    nameEn: string;
    image?: string;
    qty: number;
    /** Unit amount in halalas (smallest SAR unit, 1 SAR = 100 halalas). */
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

export const config = { runtime: "nodejs" };

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    return new Response(
      "Missing STRIPE_SECRET_KEY environment variable on the server.",
      { status: 500 },
    );
  }

  let payload: CheckoutPayload;
  try {
    payload = (await req.json()) as CheckoutPayload;
  } catch {
    return new Response("Invalid JSON body", { status: 400 });
  }

  if (!payload?.items?.length) {
    return new Response("Cart is empty", { status: 400 });
  }

  const stripe = new Stripe(secret, { apiVersion: "2024-06-20" });

  const origin =
    process.env.PUBLIC_SITE_URL ??
    req.headers.get("origin") ??
    "http://localhost:5173";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    customer_email: payload.customer.email,
    line_items: payload.items.map((i) => ({
      quantity: i.qty,
      price_data: {
        currency: "sar",
        unit_amount: i.unitAmount,
        product_data: {
          name: i.nameAr,
          description: i.nameEn,
          images: i.image ? [absoluteUrl(i.image, origin)] : undefined,
          metadata: { productId: i.productId },
        },
      },
    })),
    metadata: {
      fullName: payload.customer.fullName,
      phone: payload.customer.phone,
      city: payload.customer.city,
      address: payload.customer.address,
      notes: payload.customer.notes ?? "",
    },
    success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/checkout/cancel`,
  });

  return new Response(
    JSON.stringify({ url: session.url, sessionId: session.id }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
}

function absoluteUrl(maybeRelative: string, origin: string) {
  if (/^https?:\/\//i.test(maybeRelative)) return maybeRelative;
  return `${origin}${maybeRelative.startsWith("/") ? "" : "/"}${maybeRelative}`;
}
