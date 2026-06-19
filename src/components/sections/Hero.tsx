import { ArrowDown } from 'lucide-react';
import { hero, meta } from '../../data/content';

/**
 * Hero v0-концепта. Левая колонка — текст; правая — зацикленное
 * монохромное видео гранитной плиты (CloudFront-исходник, что
 * используется в каталоге granit-katalog).
 *
 * Анимация появления — pure CSS staggered `animate-reveal-up`,
 * без IntersectionObserver: для первой секции наблюдатель не успевает
 * сработать и блок оставался скрытым.
 */

const GRANITE_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 md:pt-20">
      <div className="mx-auto grid max-w-site grid-cols-1 items-stretch gap-0 px-6 lg:grid-cols-12 lg:px-10">
        {/* Copy */}
        <div className="flex flex-col justify-center py-16 md:py-24 lg:col-span-7 lg:py-32 lg:pr-12">
          <p className="eyebrow animate-reveal-up [animation-delay:80ms]">{hero.eyebrow}</p>

          <h1 className="mt-7 display display-tight text-foreground text-[clamp(56px,9vw,108px)] leading-[0.95] animate-reveal-up [animation-delay:180ms]">
            Память
            <br />
            <span className="italic text-muted-foreground">в </span>
            тишине
          </h1>

          <p className="mt-8 max-w-md leading-relaxed text-muted-foreground animate-reveal-up [animation-delay:320ms]">
            <span className="italic text-foreground">il silenzio</span> — {hero.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center animate-reveal-up [animation-delay:460ms]">
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

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8 animate-reveal-up [animation-delay:600ms]">
            {hero.stats.map((s) => (
              <div key={s.value}>
                <dt className="display text-3xl text-foreground">{s.value}</dt>
                <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.caption}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Video */}
        <div className="relative min-h-[360px] lg:col-span-5 lg:min-h-0">
          <div className="relative h-full w-full overflow-hidden lg:absolute lg:inset-0">
            <video
              src={GRANITE_VIDEO}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="hero-stone absolute inset-0 h-full w-full object-cover"
              aria-hidden="true"
            />
            {/* Лёгкая монохромная переслойка под бежевый общий тон */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-background/55 via-background/10 to-transparent lg:bg-gradient-to-r lg:from-background lg:via-transparent lg:to-transparent"
            />
            <p className="absolute bottom-6 right-6 hidden md:block eyebrow !text-foreground/55">
              {meta.city}
            </p>
          </div>

          <style>{`
            .hero-stone {
              filter: grayscale(1) contrast(1.05) brightness(0.96);
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
