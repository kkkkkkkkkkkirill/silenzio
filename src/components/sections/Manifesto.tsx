import { Reveal } from '../ui/Reveal';
import { manifesto } from '../../data/content';

export function Manifesto() {
  return (
    <section id="about" className="relative bg-ink text-paper px-5 md:px-8 py-28 md:py-40">
      <div className="max-w-site mx-auto grid grid-cols-12 gap-6 md:gap-10">
        <Reveal as="div" className="col-span-12 md:col-span-3">
          <p className="eyebrow !text-paper/55">{manifesto.eyebrow}</p>
        </Reveal>

        <Reveal delay={120} as="div" className="col-span-12 md:col-span-9">
          <h2 className="display text-paper leading-[1.02] tracking-tight2 text-[clamp(2.4rem,6vw,4.6rem)] max-w-[18ch]">
            {manifesto.title.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          <div className="mt-10 space-y-6 max-w-[60ch]">
            {manifesto.paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] md:text-[17px] leading-relaxed text-paper/75 font-light">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
