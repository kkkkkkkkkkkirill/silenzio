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
 * Parallax scroll-driven секция фич: каждая секция занимает весь
 * экран, текст и картинка ездят с разными translateY по прокрутке,
 * изображение «вскрывается» через clip-path inset.
 *
 * Хуки useScroll/useTransform вынесены в дочерний `Row`, чтобы не
 * вызывать их в map (Rules of Hooks).
 */
export function ParallaxFeatureSection({ items, intro }: Props) {
  return (
    <div className="relative">
      {intro && (
        <div className="relative w-full flex flex-col items-center justify-center px-6 pt-32 pb-24 md:pt-40 md:pb-32 text-center">
          {intro}
        </div>
      )}

      <div className="flex flex-col px-6 lg:px-10">
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
    offset: ['start end', 'center start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const clip = useTransform(scrollYProgress, [0, 0.6], ['inset(0 100% 0 0)', 'inset(0 0% 0 0)']);
  const translateText = useTransform(scrollYProgress, [0, 1], [-40, 30]);
  const translateImage = useTransform(scrollYProgress, [0, 1], [60, -30]);

  return (
    <div
      ref={ref}
      className={`min-h-[80svh] md:min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 py-20 ${
        item.reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* TEXT */}
      <motion.div style={{ y: translateText }} className="w-full md:max-w-md">
        <p className="display text-3xl md:text-5xl text-muted-foreground/55">{item.index}</p>
        <h3 className="mt-6 display display-tight text-foreground text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.06]">
          {item.title}
        </h3>
        <p className="mt-7 text-muted-foreground leading-relaxed max-w-md">
          {item.description}
        </p>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        style={{ opacity, clipPath: clip, y: translateImage }}
        className="relative w-full md:w-[480px] aspect-square overflow-hidden"
      >
        <img
          src={item.imageUrl}
          alt={item.imageAlt ?? item.title}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      </motion.div>
    </div>
  );
}
