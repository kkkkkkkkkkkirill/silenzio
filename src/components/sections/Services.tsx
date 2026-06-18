import { Reveal } from '../ui/Reveal';
import { services } from '../../data/content';

export function Services() {
  return (
    <section id="services" className="bg-paper px-5 md:px-8 py-28 md:py-40">
      <div className="max-w-site mx-auto">
        <Reveal as="div" className="mb-14 md:mb-20 max-w-[40ch]">
          <p className="eyebrow mb-4">{services.eyebrow}</p>
          <h2 className="display text-ink text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.04] tracking-tight2">
            {services.title}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-16">
          {services.items.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80} as="article" className="relative">
              <div className="hair-line mb-5" />
              <p className="text-[11px] tracking-wide4 uppercase text-ink/45 font-mono mb-3">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="display text-ink text-[26px] md:text-[30px] leading-[1.15] tracking-tight2 mb-3">
                {s.title}
              </h3>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-ink/65 font-light">
                {s.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
