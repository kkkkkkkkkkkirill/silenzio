import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Manifesto } from './components/sections/Manifesto';
import { Services } from './components/sections/Services';
import { Products } from './components/sections/Products';
import { Process } from './components/sections/Process';
import { Why } from './components/sections/Why';
import { Quote } from './components/sections/Quote';
import { Contact } from './components/sections/Contact';

export function App() {
  return (
    <div className="bg-paper text-ink min-h-screen selection:bg-ink selection:text-paper">
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <Products />
        <Process />
        <Why />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
