import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '../ui/carousel';
import { Button } from '../ui/button';
import { Reveal } from '../ui/Reveal';
import { products, type Product } from '../../data/content';

import monumentImg from '../../assets/products/monument.jpg';
import urnImg from '../../assets/products/urn.jpg';
import nichesImg from '../../assets/products/niches.jpg';
import landscapeImg from '../../assets/products/landscape.jpg';
import screensImg from '../../assets/products/screens-angels.jpg';

const IMAGES: Record<Product['imageKey'], string> = {
  monument: monumentImg,
  urn: urnImg,
  niches: nichesImg,
  landscape: landscapeImg,
  screens: screensImg,
};

export function Products() {
  const [api, setApi] = useState<CarouselApi>();
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
      setCurrent(api.selectedScrollSnap());
    };
    update();
    api.on('select', update);
    return () => {
      api.off('select', update);
    };
  }, [api]);

  return (
    <section id="products" className="border-t border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-site px-6 lg:px-10">
        <Reveal as="div" className="mb-12 md:mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">{products.eyebrow}</p>
            <h2 className="mt-5 display display-tight text-foreground text-[clamp(2.2rem,4.4vw,3.6rem)] leading-[1.05]">
              {products.title}
            </h2>
          </div>
          <p className="max-w-xs text-muted-foreground leading-relaxed md:text-right">
            {products.tag}
          </p>

          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => api?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Предыдущий слайд"
              className="disabled:pointer-events-auto rounded-full"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => api?.scrollNext()}
              disabled={!canNext}
              aria-label="Следующий слайд"
              className="disabled:pointer-events-auto rounded-full"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <Carousel
          setApi={setApi}
          opts={{
            breakpoints: { '(max-width: 768px)': { dragFree: true } },
            align: 'start',
            slidesToScroll: 1,
          }}
        >
          <CarouselContent className="ml-0 2xl:ml-[max(2.5rem,calc(50vw-640px))] 2xl:mr-[max(0rem,calc(50vw-640px))] pl-6 md:pl-10">
            {products.items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-0 mr-5 lg:max-w-[380px]"
              >
                <a href="#contact" className="group block">
                  <div className="relative h-full min-h-[26rem] max-w-full overflow-hidden md:aspect-[5/4] lg:aspect-[16/9] bg-secondary">
                    <img
                      src={IMAGES[item.imageKey]}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-700 ease-smooth group-hover:scale-105"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_60%,rgba(0,0,0,0.85)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <h3 className="display text-xl md:text-2xl">{item.title}</h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/75">
                        {item.description}
                      </p>
                      <div className="mt-6 flex items-center text-xs uppercase tracking-wide2">
                        Обсудить
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" strokeWidth={1.7} />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-8 flex justify-center gap-2">
          {products.items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              aria-label={`Слайд ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === idx ? 'w-8 bg-foreground' : 'w-1.5 bg-foreground/20'
              }`}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
