import { ProductFeatureCard } from '../ui/product-feature-card';
import { Reveal } from '../ui/Reveal';
import { services } from '../../data/content';

/**
 * Сетка ProductFeatureCard вместо предыдущего ContainerScroll-планшета.
 * Карточки появляются по очереди через framer-motion (spring + bounce).
 * Иконка lucide служит ключевым символом каждой услуги.
 */
export function Services() {
  return (
    <section id="services" className="border-t border-border bg-card">
      <div className="mx-auto max-w-site px-6 py-20 md:py-28 lg:px-10">
        <Reveal as="div" className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end mb-14 md:mb-20">
          <div className="lg:col-span-8">
            <p className="eyebrow">{services.eyebrow}</p>
            <h2 className="mt-5 display display-tight text-foreground text-balance text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.05]">
              {services.title}
            </h2>
          </div>
          <p className="max-w-xs leading-relaxed text-muted-foreground lg:col-span-4 lg:text-right">
            {services.tag}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {services.items.map((s) => (
            <ProductFeatureCard
              key={s.index}
              Icon={s.Icon}
              index={s.index}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
