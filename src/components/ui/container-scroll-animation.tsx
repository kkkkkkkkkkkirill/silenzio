import React, { useRef } from 'react';
import { useScroll, useTransform, motion, type MotionValue } from 'framer-motion';

/**
 * Aceternity-style scroll-driven «tablet» reveal.
 * Заголовок едет вверх по мере прокрутки, под ним поворачивается и
 * раскрывается «планшет» — внутри произвольный child.
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
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const rotate = useTransform(scrollYProgress, [0, 1], [22, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [0.78, 0.96] : [1.06, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <div ref={containerRef} className={`relative flex items-center justify-center p-2 md:p-20 h-[58rem] md:h-[78rem] ${className}`}>
      <div className="w-full relative py-10 md:py-40" style={{ perspective: '1000px' }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
}

function Header({ translate, titleComponent }: { translate: MotionValue<number>; titleComponent: React.ReactNode }) {
  return (
    <motion.div style={{ translateY: translate }} className="max-w-5xl mx-auto text-center">
      {titleComponent}
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
      className="max-w-6xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border border-foreground/10 p-2 md:p-4 bg-card rounded-[28px]"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-background">
        {children}
      </div>
    </motion.div>
  );
}
