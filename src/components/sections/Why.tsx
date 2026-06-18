import { Reveal } from '../ui/Reveal';
import { why } from '../../data/content';

export function Why() {
  return (
    <section className="bg-bone border-y border-ink/[0.06] px-5 md:px-8 py-28 md:py-40">
      <div className="max-w-site mx-auto">
        <Reveal as="div" className="mb-14 md:mb-20 max-w-[40ch]">
          <p className="eyebrow mb-4">{why.eyebrow}</p>
          <h2 className="display text-ink text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.04] tracking-tight2">
            {why.title}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {why.items.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 80} as="article">
              <div className="hair-line mb-5" />
              <h3 className="display text-ink text-[26px] md:text-[30px] leading-[1.15] tracking-tight2 mb-3">
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
