import { Reveal } from '../ui/Reveal';
import { manifesto } from '../../data/content';

export function Manifesto() {
  return (
    <section id="about" className="relative bg-ink text-paper px-5 md:px-8 py-28 md:py-40">
      <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <Reveal as="div" className="md:col-span-4">
          <p className="eyebrow !text-paper/55">{manifesto.eyebrow}</p>
        </Reveal>

        <Reveal delay={120} as="div" className="md:col-span-8">
          <h2 className="display text-paper text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.05] tracking-tight2 max-w-[20ch]">
            {manifesto.title}
          </h2>
          <div className="mt-9 space-y-5 max-w-[60ch]">
            {manifesto.paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] md:text-[17px] leading-relaxed text-paper/80 font-light">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
