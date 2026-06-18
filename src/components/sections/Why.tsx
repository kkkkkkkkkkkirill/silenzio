import { Reveal } from '../ui/Reveal';
import { why } from '../../data/content';

export function Why() {
  return (
    <section className="bg-paper px-5 md:px-8 py-28 md:py-40 border-t border-ink/[0.08]">
      <div className="max-w-site mx-auto">
        <Reveal as="div" className="mb-16 md:mb-24 grid grid-cols-12 gap-6 md:gap-10 items-end">
          <p className="col-span-12 md:col-span-3 eyebrow">{why.eyebrow}</p>
          <h2 className="col-span-12 md:col-span-9 display text-ink leading-[1.04] tracking-tight2 text-[clamp(2.2rem,5.4vw,4.4rem)] max-w-[22ch]">
            {why.title}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
          {why.items.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 80} as="article">
              <div className="hair-line mb-6" />
              <p className="font-mono text-[11px] tracking-wide4 uppercase text-ink/40 mb-4">
                {String(i + 1).padStart(2, '0')} / {String(why.items.length).padStart(2, '0')}
              </p>
              <h3 className="display text-ink text-[28px] md:text-[32px] leading-[1.12] tracking-tight2 mb-4 max-w-[18ch]">
                {w.title}
              </h3>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-ink/65 font-light max-w-[44ch]">
                {w.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
