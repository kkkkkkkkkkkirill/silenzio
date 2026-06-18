import { Reveal } from '../ui/Reveal';
import { services } from '../../data/content';

export function Services() {
  return (
    <section id="services" className="bg-paper px-5 md:px-8 py-28 md:py-40">
      <div className="max-w-site mx-auto">
        <Reveal as="div" className="mb-16 md:mb-24 grid grid-cols-12 gap-6 md:gap-10 items-end">
          <p className="col-span-12 md:col-span-3 eyebrow">{services.eyebrow}</p>
          <h2 className="col-span-12 md:col-span-9 display text-ink leading-[1.04] tracking-tight2 text-[clamp(2.2rem,5.4vw,4.4rem)] max-w-[22ch]">
            {services.title}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14 md:gap-y-20">
          {services.items.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80} as="article" className="relative">
              <div className="hair-line mb-6" />
              <p className="font-mono text-[11px] tracking-wide4 uppercase text-ink/40 mb-4">
                {String(i + 1).padStart(2, '0')} / {String(services.items.length).padStart(2, '0')}
              </p>
              <h3 className="display text-ink text-[28px] md:text-[32px] leading-[1.12] tracking-tight2 mb-4 max-w-[18ch]">
                {s.title}
              </h3>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-ink/65 font-light max-w-[42ch]">
                {s.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
