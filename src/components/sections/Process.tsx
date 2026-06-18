import { Reveal } from '../ui/Reveal';
import { process } from '../../data/content';

export function Process() {
  return (
    <section id="process" className="bg-paper px-5 md:px-8 py-28 md:py-40">
      <div className="max-w-site mx-auto">
        <Reveal as="div" className="mb-16 md:mb-24 grid grid-cols-12 gap-6 md:gap-10 items-end">
          <p className="col-span-12 md:col-span-3 eyebrow">{process.eyebrow}</p>
          <h2 className="col-span-12 md:col-span-9 display text-ink leading-[1.04] tracking-tight2 text-[clamp(2.2rem,5.4vw,4.4rem)] max-w-[22ch]">
            {process.title}
          </h2>
        </Reveal>

        <ol className="border-t border-ink/15">
          {process.steps.map((s) => (
            <Reveal key={s.no} as="li" className="border-b border-ink/15">
              <div className="grid grid-cols-12 gap-6 md:gap-10 items-baseline py-10 md:py-14">
                <span className="col-span-12 md:col-span-2 display text-ink/20 text-[56px] md:text-[80px] leading-none">
                  {s.no}
                </span>
                <h3 className="col-span-12 md:col-span-4 display text-ink text-[28px] md:text-[36px] leading-[1.1] tracking-tight2">
                  {s.title}
                </h3>
                <p className="col-span-12 md:col-span-6 text-[14px] md:text-[16px] leading-relaxed text-ink/65 font-light max-w-[48ch]">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
