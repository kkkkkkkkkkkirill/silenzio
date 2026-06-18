import { Reveal } from '../ui/Reveal';
import { products } from '../../data/content';

import monument from '../../assets/products/monuments/item-07.jpg';
import urn from '../../assets/products/urns/urn-2.jpg';
import niche from '../../assets/products/niches/item-31.jpg';
import landscape from '../../assets/products/landscaping/item-35.jpg';

const IMAGES: Record<string, string> = {
  monument,
  urn,
  niche,
  landscape,
};

export function Products() {
  return (
    <section id="products" className="bg-bone px-5 md:px-8 py-28 md:py-40 border-y border-ink/[0.06]">
      <div className="max-w-site mx-auto">
        <Reveal as="div" className="mb-14 md:mb-20 max-w-[36ch]">
          <p className="eyebrow mb-4">{products.eyebrow}</p>
          <h2 className="display text-ink text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.04] tracking-tight2">
            {products.title}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {products.items.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 80} as="article" className="group">
              <div className="relative aspect-[4/5] bg-ink/5 overflow-hidden">
                <img
                  src={IMAGES[p.imageId]}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover grayscale-bw transition-transform duration-[1200ms] ease-smooth group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-7 flex items-baseline justify-between gap-6">
                <h3 className="display text-ink text-[26px] md:text-[34px] leading-[1.1] tracking-tight2">
                  {p.title}
                </h3>
                <span className="text-[11px] tracking-wide4 uppercase text-ink/45 font-mono shrink-0">
                  {String(i + 1).padStart(2, '0')} / 04
                </span>
              </div>
              <p className="mt-3 max-w-[50ch] text-[14px] md:text-[15px] leading-relaxed text-ink/65 font-light">
                {p.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="mt-14 max-w-[60ch] text-[13px] tracking-wide2 uppercase text-ink/45">
          подробный каталог гранита и фотографии работ — по запросу. координатор пришлёт подборку под ваш запрос.
        </Reveal>
      </div>
    </section>
  );
}
