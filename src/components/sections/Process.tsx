import { Reveal } from '../ui/Reveal';
import { process } from '../../data/content';

/**
 * Горизонтальный editorial-ряд: 4 шага в 4 колонки, гигантские номера,
 * крошечные подписи. Никаких 12-col-eyebrow.
 */
export function Process() {
  return (
    <section id="process" className="bg-paper px-5 md:px-10 py-36 md:py-56">
      <div className="max-w-site mx-auto">
        <Reveal as="div" className="mb-20 md:mb-28">
          <h2 className="display display-tight text-ink leading-[1.0] text-[clamp(2.4rem,5.6vw,5rem)] max-w-[16ch]">
            процесс
            <span className="italic text-ink/50"> · от звонка до прощания</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 md:divide-x divide-ink/15">
          {process.steps.map((s, i) => (
            <Reveal key={s.no} delay={i * 90} as="article" className="md:px-6 first:md:pl-0 last:md:pr-0">
              <span className="display text-ink leading-none text-[clamp(72px,8vw,120px)] block">
                {s.no}
              </span>
              <h3 className="mt-7 md:mt-9 text-[14px] tracking-wide3 uppercase text-ink font-medium">
                {s.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink/65 font-light max-w-[28ch]">
                {s.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
