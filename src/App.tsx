import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Locations />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
