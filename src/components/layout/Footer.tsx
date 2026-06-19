import { nav, footer } from '../../data/content';
import logo from '../../assets/silenzio-logo.svg';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-site px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <img src={logo} alt="SILENZIO" className="h-4 w-auto invert" draggable={false} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
              {footer.tagline}
            </p>
          </div>

          <nav aria-label="Навигация в подвале">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} SILENZIO. Все права защищены.</p>
          <p className="italic">il silenzio — память в тишине</p>
        </div>
      </div>
    </footer>
  );
}
