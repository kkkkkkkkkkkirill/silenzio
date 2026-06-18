import { Reveal } from '../ui/Reveal';
import { manifesto } from '../../data/content';

/**
 * Asymmetric manifesto: heading в верхней-левой четверти, текст —
 * в нижней-правой, между ними воздух. Без 12-col-eyebrow-формулы.
 */
export function Manifesto() {
  return (
    <section id="about" className="relative bg-ink text-paper px-5 md:px-10 py-36 md:py-56">
      <div className="max-w-site mx-auto">
        <Reveal as="div" className="max-w-[20ch]">
          <h2 className="display display-tight text-paper leading-[1.0] text-[clamp(2.6rem,6.6vw,5.4rem)]">
            {manifesto.title.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
        </Reveal>

        <Reveal delay={150} as="div" className="mt-28 md:mt-48 ml-auto max-w-[58ch] md:pr-6">
          {manifesto.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`text-[16px] md:text-[19px] leading-relaxed text-paper/75 font-light ${
                i > 0 ? 'mt-7' : ''
              }`}
            >
              {p}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
