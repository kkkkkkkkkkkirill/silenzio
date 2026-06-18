import { Reveal } from '../ui/Reveal';
import { products } from '../../data/content';

/**
 * Продукция без фотографий — типографический «лист дома».
 * Каждая категория — две колонки: крупный serif-заголовок слева,
 * описание sans справа, тонкая линия между строками.
 */
export function Products() {
  return (
    <section id="products" className="bg-bone border-y border-ink/[0.06] px-5 md:px-8 py-28 md:py-40">
      <div className="max-w-site mx-auto">
        <Reveal as="div" className="mb-16 md:mb-24 grid grid-cols-12 gap-6 md:gap-10 items-end">
          <p className="col-span-12 md:col-span-3 eyebrow">{products.eyebrow}</p>
          <h2 className="col-span-12 md:col-span-9 display text-ink leading-[1.04] tracking-tight2 text-[clamp(2.2rem,5.4vw,4.4rem)] max-w-[22ch]">
            {products.title}
          </h2>
        </Reveal>

        <div className="border-t border-ink/15">
          {products.items.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 80} as="div" className="border-b border-ink/15">
              <div className="grid grid-cols-12 gap-6 md:gap-10 items-baseline py-8 md:py-12">
                <span className="col-span-12 md:col-span-1 font-mono text-[11px] tracking-wide4 uppercase text-ink/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="col-span-12 md:col-span-5 display text-ink text-[30px] md:text-[44px] leading-[1.05] tracking-tight2">
                  {p.title}
                </h3>
                <p className="col-span-12 md:col-span-6 text-[14px] md:text-[16px] leading-relaxed text-ink/65 font-light max-w-[48ch]">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 max-w-[64ch] text-[12px] tracking-wide2 uppercase text-ink/45">
          подробные подборки и фотографии работ — по запросу. координатор подберёт варианты под пожелания семьи.
        </p>
      </div>
    </section>
  );
}
