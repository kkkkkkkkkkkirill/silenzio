import { Reveal } from '../ui/Reveal';
import { services } from '../../data/content';

/**
 * Couture-list: каждая услуга — строка во всю ширину. Слева большой
 * serif-заголовок, справа sans-описание. Тонкая линия снизу.
 * Без нумераторов и eyebrow внутри — только название.
 */
export function Services() {
  return (
    <section id="services" className="bg-paper px-5 md:px-10 py-36 md:py-56">
      <div className="max-w-site mx-auto">
        <Reveal as="div" className="mb-20 md:mb-28 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="display display-tight text-ink leading-[1.0] text-[clamp(2.4rem,5.6vw,5rem)] max-w-[18ch]">
            услуги
            <span className="block italic text-ink/50">il silenzio</span>
          </h2>
          <p className="eyebrow md:max-w-[16ch] md:text-right">
            {services.items.length} направлений · полный цикл
          </p>
        </Reveal>

        <ul className="border-t border-ink/15">
          {services.items.map((s) => (
            <Reveal key={s.title} as="li" className="border-b border-ink/15 group">
              <div className="grid grid-cols-12 gap-6 md:gap-10 items-baseline py-9 md:py-12 transition-colors duration-500 group-hover:text-ink/55">
                <h3 className="col-span-12 md:col-span-7 display display-tight text-ink text-[34px] md:text-[56px] leading-[1.04] group-hover:text-ink transition-colors">
                  {s.title}
                </h3>
                <p className="col-span-12 md:col-span-5 text-[14px] md:text-[15px] leading-relaxed text-ink/65 font-light max-w-[42ch] md:pl-4">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
