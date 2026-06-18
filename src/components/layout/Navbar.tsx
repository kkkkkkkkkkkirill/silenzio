import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav } from '../../data/content';
import logo from '../../assets/silenzio-logo.svg';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ease-smooth
        ${scrolled ? 'bg-paper/85 backdrop-blur-md border-ink/10' : 'bg-paper/70 backdrop-blur-sm border-transparent'}`}
    >
      <nav className="max-w-site mx-auto flex items-center justify-between gap-6 px-5 md:px-8 h-[68px]" aria-label="главная навигация">
        <a href="#top" className="flex items-center" aria-label="silenzio">
          <img src={logo} alt="silenzio" className="h-[18px] md:h-[22px] w-auto select-none" draggable={false} />
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {nav.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[12.5px] tracking-wide2 uppercase text-ink/75 hover:text-ink transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+79990000000"
          className="hidden md:inline-flex items-center text-[12.5px] tracking-wide2 uppercase text-ink/80 hover:text-ink transition-colors"
        >
          +7 999 000-00-00
        </a>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'закрыть меню' : 'открыть меню'}
          aria-expanded={open}
          className="lg:hidden w-10 h-10 inline-flex items-center justify-center text-ink"
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </nav>

      {/* Мобильное меню */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-smooth border-t ${
          open ? 'max-h-[420px] opacity-100 border-ink/10' : 'max-h-0 opacity-0 border-transparent'
        }`}
      >
        <ul className="max-w-site mx-auto px-5 py-4 flex flex-col gap-1 bg-paper">
          {nav.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-2 py-3 text-[15px] text-ink/80 hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="tel:+79990000000"
              onClick={() => setOpen(false)}
              className="block px-2 py-3 text-[15px] font-medium text-ink"
            >
              +7 999 000-00-00
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
