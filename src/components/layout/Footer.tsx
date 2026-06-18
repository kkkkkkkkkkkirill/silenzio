import { footer, nav } from '../../data/content';
import logo from '../../assets/silenzio-logo.svg';

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="max-w-site mx-auto px-5 md:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7">
            <img src={logo} alt="silenzio" className="h-9 md:h-11 w-auto mb-7 select-none" draggable={false} />
            <p className="text-ink/65 text-[15px] leading-relaxed max-w-[58ch]">
              {footer.tagline}
            </p>
          </div>

          <div className="md:col-span-5">
            <p className="eyebrow mb-5">навигация</p>
            <ul className="flex flex-col gap-2.5">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[14px] text-ink/75 hover:text-ink transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hair-line my-12" />

        <div className="flex flex-col md:flex-row justify-between gap-3 text-[12px] text-ink/55">
          <p>{footer.copy}</p>
          <p className="tracking-wide3 uppercase text-ink/45">il silenzio · ritual house</p>
        </div>
      </div>
    </footer>
  );
}
