import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductFeatureCardProps {
  Icon: LucideIcon;
  index: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  className?: string;
}

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' as const, bounce: 0.32, duration: 0.85 },
  },
};

export const ProductFeatureCard = React.forwardRef<HTMLDivElement, ProductFeatureCardProps>(
  ({ Icon, index, title, description, linkText = 'Обсудить', linkHref = '#contact', className }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-card p-7 shadow-sm md:p-8',
          'transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-lg',
          className,
        )}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.35 }}
        variants={cardVariants}
      >
        <div className="mb-7 flex items-center justify-between">
          <div className="flex size-16 items-center justify-center rounded-full bg-background border border-border md:size-20">
            <Icon className="size-7 text-foreground md:size-8" strokeWidth={1.2} />
          </div>
          <span className="display text-2xl text-muted-foreground/45 md:text-3xl">{index}</span>
        </div>

        <h3 className="display text-2xl text-foreground md:text-[28px] leading-[1.15]">{title}</h3>
        <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground md:text-[15px]">{description}</p>

        <a
          href={linkHref}
          className="group/link mt-auto pt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground"
        >
          {linkText}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" strokeWidth={1.6} />
        </a>
      </motion.div>
    );
  },
);
ProductFeatureCard.displayName = 'ProductFeatureCard';
