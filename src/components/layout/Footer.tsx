import { footer, meta } from '../../data/content';
import logo from '../../assets/silenzio-logo.svg';

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="max-w-site mx-auto px-5 md:px-10 pt-28 md:pt-36 pb-14">
        <div className="grid grid-cols-12 gap-y-14 gap-x-10">
          <div className="col-span-12 md:col-span-8">
            <img
              src={logo}
              alt="silenzio"
              className="h-12 md:h-20 w-auto mb-10 select-none"
              draggable={false}
            />
            <p className="display italic text-ink/65 text-[18px] md:text-[22px] leading-[1.4] max-w-[42ch]">
              {footer.tagline}
            </p>
          </div>

          <div className="col-span-12 md:col-span-4 md:text-right space-y-6">
            <div>
              <p className="eyebrow mb-2">телефон</p>
              <a
                href={`tel:${meta.phone.replace(/[^+\d]/g, '')}`}
                className="display text-ink text-[22px] md:text-[26px] tracking-editorial hover:opacity-60 transition-opacity"
              >
                {meta.phone}
              </a>
            </div>
            <div>
              <p className="eyebrow mb-2">почта</p>
              <a
                href={`mailto:${meta.email}`}
                className="display text-ink text-[18px] md:text-[22px] tracking-editorial hover:opacity-60 transition-opacity break-all"
              >
                {meta.email}
              </a>
            </div>
            <div>
              <p className="eyebrow mb-2">режим</p>
              <span className="display italic text-ink/65 text-[18px] md:text-[22px]">
                {meta.city}
              </span>
            </div>
          </div>
        </div>

        <div className="hair-line mt-16 mb-10" />

        <div className="flex flex-col md:flex-row justify-between gap-3 text-[11px] tracking-wide2 text-ink/45">
          <p>{footer.copy}</p>
          <p className="uppercase tracking-wide3">il silenzio · ritual house</p>
        </div>
      </div>
    </footer>
  );
}
