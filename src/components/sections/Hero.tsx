import { ArrowDown } from 'lucide-react';
import { hero, meta } from '../../data/content';

/**
 * Hero. На lg+: текст в левой колонке, занимает ~58% контейнера;
 * видео — absolute fill в правой половине viewport (w-[50vw]),
 * inset-y-0 right-0.
 */

const GRANITE_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4';

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-16 md:pt-20 bg-background"
    >
      {/* === Видео справа (только lg+) === */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[50vw] z-[1]">
        <video
          src={GRANITE_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="hero-stone block h-full w-full object-cover"
        />
        {/* мягкий переход в бежевый слева */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/10 to-transparent"
        />
        <p className="absolute bottom-6 right-6 eyebrow !text-foreground/55">{meta.city}</p>
      </div>

      {/* === Текст слева === */}
      <div className="relative z-[2] mx-auto max-w-site px-6 lg:px-10">
        <div className="max-w-[640px] py-16 md:py-24 lg:py-32 lg:pr-8">
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
      </div>

      {/* === Видео внизу на мобильной версии === */}
      <div className="relative h-[320px] w-full lg:hidden">
        <video
          src={GRANITE_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="hero-stone block h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-background/55 via-background/10 to-transparent" />
      </div>

      <style>{`
        .hero-stone { filter: grayscale(1) contrast(1.05) brightness(0.96); }
      `}</style>
    </section>
  );
}
