import { Reveal } from '../ui/Reveal';
import { products } from '../../data/content';

/**
 * Лист продукции — тот же couture-приём, но другая компоновка:
 * заголовок продукции справа, описание слева. Создаёт контраст с
 * Services и убирает «одинаковые секции».
 */
export function Products() {
  return (
    <section id="products" className="bg-bone px-5 md:px-10 py-36 md:py-56 border-y border-ink/[0.06]">
      <div className="max-w-site mx-auto">
        <Reveal as="div" className="mb-20 md:mb-28 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <p className="eyebrow md:max-w-[16ch]">
            {products.items.length} категорий · по запросу подбираем индивидуально
          </p>
          <h2 className="display display-tight text-ink leading-[1.0] text-[clamp(2.4rem,5.6vw,5rem)] max-w-[18ch] md:text-right">
            продукция
            <span className="block italic text-ink/50">дома</span>
          </h2>
        </Reveal>

        <ul className="border-t border-ink/15">
          {products.items.map((p) => (
            <Reveal key={p.title} as="li" className="border-b border-ink/15 group">
              <div className="grid grid-cols-12 gap-6 md:gap-10 items-baseline py-9 md:py-12">
                <p className="col-span-12 md:col-span-5 text-[14px] md:text-[15px] leading-relaxed text-ink/65 font-light max-w-[42ch] order-2 md:order-1">
                  {p.description}
                </p>
                <h3 className="col-span-12 md:col-span-7 display display-tight text-ink text-[34px] md:text-[56px] leading-[1.04] md:text-right order-1 md:order-2">
                  {p.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal as="p" className="mt-14 max-w-[64ch] ml-auto text-right text-[12px] tracking-wide2 uppercase text-ink/45">
          подробные подборки и фотографии работ — по запросу.<br />
          координатор пришлёт варианты под пожелания семьи.
        </Reveal>
      </div>
    </section>
  );
}
