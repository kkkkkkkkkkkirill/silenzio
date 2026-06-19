import { ContainerScroll } from '../ui/container-scroll-animation';
import { services } from '../../data/content';

/**
 * Услуги внутри ContainerScroll-планшета: при прокрутке планшет
 * раскрывается, внутри — сетка из 7 услуг в стиле «панель консоли».
 */
export function Services() {
  return (
    <section id="services" className="border-t border-border bg-card overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <p className="eyebrow !text-muted-foreground">{services.eyebrow}</p>
            <h2 className="mt-5 display display-tight text-foreground text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] max-w-[18ch] mx-auto">
              {services.title}
            </h2>
            <p className="mt-6 max-w-md mx-auto text-muted-foreground leading-relaxed">
              {services.tag}
            </p>
          </>
        }
      >
        <div className="h-full w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-[auto] border-l border-t border-border bg-background">
          {services.items.map((s) => (
            <article
              key={s.index}
              className="group flex flex-col gap-4 border-b border-r border-border p-4 md:p-6 transition-colors hover:bg-secondary"
            >
              <div className="flex items-center justify-between">
                <s.Icon className="size-5 md:size-6 text-foreground" strokeWidth={1.25} />
                <span className="display text-sm md:text-base text-muted-foreground/55">{s.index}</span>
              </div>
              <h3 className="display text-[15px] md:text-[19px] leading-[1.15] text-foreground">
                {s.title}
              </h3>
              <p className="text-[12px] md:text-[13px] leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </article>
          ))}
          {/* пустые ячейки — если в строке остался свободный слот */}
          {Array.from({ length: (4 - (services.items.length % 4)) % 4 }).map((_, i) => (
            <div key={`pad-${i}`} className="hidden lg:block border-b border-r border-border bg-card/30" />
          ))}
        </div>
      </ContainerScroll>
    </section>
  );
}
