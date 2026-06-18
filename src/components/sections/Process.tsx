import { Reveal } from '../ui/Reveal';
import { process } from '../../data/content';

export function Process() {
  return (
    <section id="process" className="bg-paper px-5 md:px-8 py-28 md:py-40">
      <div className="max-w-site mx-auto">
        <Reveal as="div" className="mb-14 md:mb-20 max-w-[40ch]">
          <p className="eyebrow mb-4">{process.eyebrow}</p>
          <h2 className="display text-ink text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.04] tracking-tight2">
            {process.title}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-16 gap-x-12">
          {process.steps.map((s, i) => (
            <Reveal key={s.no} delay={(i % 2) * 90} as="article" className="flex gap-6 md:gap-8">
              <span className="display text-ink/15 text-[64px] md:text-[80px] leading-none shrink-0">
                {s.no}
              </span>
              <div className="pt-2">
                <h3 className="display text-ink text-[26px] md:text-[32px] leading-[1.1] tracking-tight2 mb-3">
                  {s.title}
                </h3>
                <p className="text-[14px] md:text-[15px] leading-relaxed text-ink/65 font-light max-w-[44ch]">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
