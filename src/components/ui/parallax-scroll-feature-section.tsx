import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export interface ParallaxFeatureItem {
  id: string;
  index: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  reverse?: boolean;
}

interface Props {
  items: ParallaxFeatureItem[];
  intro?: ReactNode;
}

/**
 * Список feature-секций с парой «текст ↔ фото». Высота каждой секции
 * соразмерна контенту (без min-h-screen), между ними небольшие отступы
 * — секция читается как непрерывный лист.
 *
 * Анимация фото: scale 1.18 → 1 + blur 12 → 0 + opacity 0 → 1 на
 * прокрутке (классический «зум-in proceed»). Текст плавает чуть вверх.
 */
export function ParallaxFeatureSection({ items, intro }: Props) {
  return (
    <div className="relative">
      {intro && (
        <div className="relative w-full flex flex-col items-center justify-center px-6 pt-28 pb-16 md:pt-36 md:pb-20 text-center">
          {intro}
        </div>
      )}

      <div className="flex flex-col gap-8 md:gap-16 px-6 lg:px-10 pb-20 md:pb-32">
        {items.map((item) => (
          <ParallaxRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function ParallaxRow({ item }: { item: ParallaxFeatureItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'center 35%'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.55], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1.18, 1]);
  const blur = useTransform(scrollYProgress, [0, 0.55], [12, 0]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);
  const textY = useTransform(scrollYProgress, [0, 1], [24, -8]);

  return (
    <div
      ref={ref}
      className={`mx-auto max-w-site w-full grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center py-10 md:py-14 ${
        item.reverse ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      {/* TEXT */}
      <motion.div style={{ y: textY }} className="md:col-span-5 max-w-md">
        <p className="display text-3xl md:text-4xl text-muted-foreground/50">{item.index}</p>
        <h3 className="mt-5 display display-tight text-foreground text-[clamp(1.8rem,3.6vw,2.6rem)] leading-[1.08]">
          {item.title}
        </h3>
        <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
          {item.description}
        </p>
      </motion.div>

      {/* IMAGE */}
      <div className="md:col-span-7 w-full">
        <motion.div
          style={{ opacity, scale, filter }}
          className="relative w-full aspect-[5/4] overflow-hidden bg-secondary/60"
        >
          <img
            src={item.imageUrl}
            alt={item.imageAlt ?? item.title}
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />
        </motion.div>
      </div>
    </div>
  );
}
