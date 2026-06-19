import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Holding } from './components/sections/Holding';
import { Services } from './components/sections/Services';
import { Products } from './components/sections/Products';
import { Process } from './components/sections/Process';
import { Why } from './components/sections/Why';
import { Contact } from './components/sections/Contact';

export function App() {
  return (
    <div className="min-h-dvh bg-background">
      <Navbar />
      <main>
        <Hero />
        <Holding />
        <Services />
        <Products />
        <Process />
        <Why />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
