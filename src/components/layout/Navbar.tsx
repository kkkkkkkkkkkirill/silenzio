import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { nav, meta } from '../../data/content';
import logo from '../../assets/silenzio-logo.svg';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-6 md:h-20 lg:px-10">
        <a href="#top" className="flex items-center gap-3" aria-label="SILENZIO — на главную">
          <img src={logo} alt="SILENZIO" className="h-[14px] w-auto md:h-4" draggable={false} />
          <span className="hidden h-3 w-px bg-border sm:block" aria-hidden="true" />
          <span className="hidden text-[10px] font-medium uppercase tracking-wide4 text-muted-foreground sm:block">
            Холдинг
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Основная навигация">
          {nav.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-foreground/70 transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={meta.phoneHref}
            className="hidden items-center gap-2 text-sm font-medium tracking-tight text-foreground transition-opacity hover:opacity-70 lg:flex"
          >
            <Phone className="size-4" strokeWidth={1.5} />
            {meta.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center text-foreground md:hidden"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-16 z-40 flex flex-col bg-background md:hidden">
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
