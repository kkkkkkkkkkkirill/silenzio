import { ArrowDown } from 'lucide-react';
import { hero, meta } from '../../data/content';
import heroImage from '../../assets/hero/hero-granite.jpg';

/**
 * Hero концепта: текст слева (eyebrow + большой 2-строчный заголовок +
 * описание + 2 CTA + статы), картинка справа с медленным «дыханием»
 * (subtle scale + opacity drift, как «дым над камнем» без видео).
 */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 md:pt-20">
      <div className="mx-auto grid max-w-site grid-cols-1 items-stretch gap-0 px-6 lg:grid-cols-12 lg:px-10">
        {/* Copy */}
        <div className="flex flex-col justify-center py-16 md:py-24 lg:col-span-7 lg:py-32 lg:pr-12">
          <p className="eyebrow reveal">{hero.eyebrow}</p>

          <h1 className="reveal mt-7 display display-tight text-foreground text-[clamp(56px,9vw,108px)] leading-[0.95]">
            Память
            <br />
            <span className="italic text-muted-foreground">в </span>
            тишине
          </h1>

          <p className="reveal mt-8 max-w-md leading-relaxed text-muted-foreground">
            <span className="italic text-foreground">il silenzio</span> — {hero.description}
          </p>

          <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-primary px-8 py-4 text-sm font-medium tracking-tight text-primary-foreground transition-opacity hover:opacity-90"
            >
              Связаться с нами
            </a>
            <a
              href="#holding"
              className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 text-sm font-medium tracking-tight text-foreground transition-colors hover:bg-secondary"
            >
              О холдинге
              <ArrowDown className="size-4" strokeWidth={1.5} />
            </a>
          </div>

          <dl className="reveal mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            {hero.stats.map((s) => (
              <div key={s.value}>
                <dt className="display text-3xl text-foreground">{s.value}</dt>
                <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.caption}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Image */}
        <div className="relative min-h-[360px] lg:col-span-5 lg:min-h-0">
          <div className="relative h-full w-full overflow-hidden lg:absolute lg:inset-0">
            <img
              src={heroImage}
              alt="Полированная гранитная плита в мягком свете"
              className="hero-breath absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent lg:bg-gradient-to-r lg:from-background lg:via-transparent lg:to-transparent" />
            {/* тонкая монохромная подпись справа снизу */}
            <p className="absolute bottom-6 right-6 hidden md:block eyebrow">{meta.city}</p>
          </div>

          <style>{`
            .hero-breath {
              animation: heroBreath 18s ease-in-out infinite;
              transform-origin: center;
            }
            @keyframes heroBreath {
              0%   { transform: scale(1.00); filter: brightness(1.00); }
              50%  { transform: scale(1.04); filter: brightness(1.04); }
              100% { transform: scale(1.00); filter: brightness(1.00); }
            }
            @media (prefers-reduced-motion: reduce) {
              .hero-breath { animation: none; }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
