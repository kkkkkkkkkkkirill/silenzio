import React, { useRef } from 'react';
import { useScroll, useTransform, motion, type MotionValue } from 'framer-motion';

/**
 * Aceternity-style scroll-driven «tablet» reveal.
 * Заголовок едет вверх по мере прокрутки, под ним раскрывается «планшет»
 * с произвольным содержимым.
 *
 * Адаптирован под палитру silenzio: внутренний слой — bg-card, рамка
 * по border-color, без агрессивных hex-цветов.
 */
export function ContainerScroll({
  titleComponent,
  children,
  className = '',
}: {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const rotate = useTransform(scrollYProgress, [0, 1], [22, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [0.78, 0.95] : [1.06, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center p-2 md:p-20 h-[58rem] md:h-[78rem] ${className}`}
    >
      <div className="w-full relative py-10 md:py-32" style={{ perspective: '1000px' }}>
        <Header translate={translate}>{titleComponent}</Header>
        <Card rotate={rotate} scale={scale} translate={translate}>
          {children}
        </Card>
      </div>
    </div>
  );
}

function Header({ translate, children }: { translate: MotionValue<number>; children: React.ReactNode }) {
  return (
    <motion.div style={{ translateY: translate }} className="max-w-6xl mx-auto px-5 md:px-8">
      {children}
    </motion.div>
  );
}

function Card({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000002a, 0 37px 37px #00000022, 0 84px 50px #00000016, 0 149px 60px #0000000a',
      }}
      className="max-w-6xl -mt-10 mx-auto h-[30rem] md:h-[40rem] w-full border-2 border-foreground/15 p-2 md:p-4 bg-foreground/[0.04] rounded-[24px]"
    >
      <div className="h-full w-full overflow-hidden rounded-[16px] bg-card md:p-6">
        {children}
      </div>
    </motion.div>
  );
}
