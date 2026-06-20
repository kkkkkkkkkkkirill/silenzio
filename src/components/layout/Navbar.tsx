import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { nav, meta } from '../../data/content';
import logo from '../../assets/silenzio-logo.svg';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // На тёмном Hero (вверху страницы) — светлый контент,
  // после прокрутки — тёмный по бежевому фону.
  const onDark = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-site items-center justify-between px-6 md:h-24 lg:px-10">
        <a href="#top" className="flex items-center gap-3 md:gap-4" aria-label="SILENZIO — на главную">
          <img
            src={logo}
            alt="SILENZIO"
            className={`h-6 md:h-7 w-auto select-none transition-[filter] duration-500 ${
              onDark ? 'invert brightness-110' : 'invert-0'
            }`}
            draggable={false}
          />
          <span
            className={`hidden h-4 w-px sm:block transition-colors duration-500 ${
              onDark ? 'bg-background/40' : 'bg-foreground/30'
            }`}
            aria-hidden="true"
          />
          <span
            className={`hidden text-[11px] md:text-[12px] font-semibold uppercase tracking-wide4 sm:block transition-colors duration-500 ${
              onDark ? 'text-background' : 'text-foreground'
            }`}
          >
            Холдинг
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Основная навигация">
          {nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-500 ${
                onDark
                  ? 'text-background/75 hover:text-background'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={meta.phoneHref}
            className={`hidden items-center gap-2 text-sm font-medium tracking-tight transition-opacity hover:opacity-70 lg:flex ${
              onDark ? 'text-background' : 'text-foreground'
            }`}
          >
            <Phone className="size-4" strokeWidth={1.5} />
            {meta.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`flex size-10 items-center justify-center md:hidden transition-colors duration-500 ${
              onDark ? 'text-background' : 'text-foreground'
            }`}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-20 z-40 flex flex-col bg-background md:hidden">
          <nav className="flex flex-col px-6" aria-label="Мобильная навигация">
            {nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-5 display text-2xl text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={meta.phoneHref}
            className="mx-6 mt-8 flex items-center justify-center gap-2 bg-primary py-4 text-sm font-medium text-primary-foreground"
          >
            <Phone className="size-4" strokeWidth={1.5} />
            {meta.phone}
          </a>
        </div>
      )}
    </header>
  );
}
