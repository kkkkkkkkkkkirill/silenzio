import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { hero, meta } from '../../data/content';
import granitePoster from '../../assets/hero/granite-loop.jpg';
import graniteVideo from '../../assets/hero/granite-loop.mp4';

/**
 * Hero — кинематографичный тёмный экран. Фон — зацикленное видео
 * полированных «экранов» из гранит-каталога (локальный файл, чтобы
 * не зависеть от CloudFront). Поверх — затемнение для читаемости.
 *
 * Без округлостей и без правых cards/marquee — только текст и три
 * базовых цифры внизу, как просил заказчик.
 */

const STATS = [
  { value: '15+', label: 'лет работы' },
  { value: '24/7', label: 'на связи' },
  { value: '0',   label: 'посредников' },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative w-full bg-foreground text-background overflow-hidden isolate min-h-[100svh] flex flex-col"
    >
      <style>{`
        @keyframes silenzioFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .silenzio-fade { animation: silenzioFadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both; }
        .hero-stone { filter: grayscale(1) contrast(1.2) brightness(1.1); }
        @media (prefers-reduced-motion: reduce) {
          .silenzio-fade { animation: none; }
        }
      `}</style>

      {/* Background poster (для мгновенной отрисовки до загрузки видео) */}
      <img
        src={granitePoster}
        alt=""
        aria-hidden="true"
        className="hero-stone absolute inset-0 z-0 h-full w-full object-cover"
        draggable={false}
      />

      {/* Background video.
          onCanPlay принудительно вызывает play() — гарантирует
          автостарт даже если браузер заблокировал autoplay-атрибут */}
      <video
        src={graniteVideo}
        poster={granitePoster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onCanPlay={(e) => {
          const v = e.currentTarget;
          if (v.paused) v.play().catch(() => {});
        }}
        className="hero-stone absolute inset-0 z-[1] h-full w-full object-cover"
      />

      {/* Затемняющий overlay (для контраста текста) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2]"
        style={{
          background:
            'linear-gradient(180deg, rgba(26,24,21,0.65) 0%, rgba(26,24,21,0.30) 35%, rgba(26,24,21,0.45) 70%, rgba(26,24,21,0.85) 100%)',
        }}
      />

      {/* Контент */}
      <div className="relative z-10 mx-auto w-full max-w-site flex-1 flex flex-col px-5 pt-28 pb-14 sm:px-6 md:pt-36 md:pb-20 lg:px-10">
        <div className="max-w-[820px]">

          {/* Кикер — без рамки, просто текст */}
          <p
            className="silenzio-fade inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide4 text-background/75"
            style={{ animationDelay: '80ms' }}
          >
            <Sparkles className="w-3.5 h-3.5 text-background/65" strokeWidth={1.6} />
            {hero.eyebrow} · {meta.since}
          </p>

          {/* Heading */}
          <h1
            className="silenzio-fade mt-8 md:mt-10 display display-tight text-background text-[clamp(56px,10vw,148px)] leading-[0.92]"
            style={{ animationDelay: '180ms' }}
          >
            Память
            <br />
            <span className="italic text-background/55">в </span>
            тишине
          </h1>

          {/* Description */}
          <p
            className="silenzio-fade mt-8 max-w-xl text-[15px] sm:text-[17px] text-background/72 leading-relaxed"
            style={{ animationDelay: '300ms' }}
          >
            <span className="italic text-background">il silenzio</span> — {hero.description}
          </p>

          {/* CTA */}
          <div
            className="silenzio-fade mt-10 flex flex-col sm:flex-row gap-3"
            style={{ animationDelay: '440ms' }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-background px-8 py-4 text-[13px] font-semibold uppercase tracking-wide2 text-foreground transition-opacity hover:opacity-90"
            >
              Связаться
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.8} />
            </a>
            <a
              href={meta.phoneHref}
              className="group inline-flex items-center justify-center gap-2 border border-background/25 bg-background/[0.04] px-8 py-4 text-[13px] font-semibold uppercase tracking-wide2 text-background backdrop-blur-sm transition-colors hover:bg-background/10 hover:border-background/40"
            >
              <Phone className="w-4 h-4" strokeWidth={1.6} />
              {meta.phone}
            </a>
          </div>
        </div>

        {/* Stats — три цифры внизу, без линии и без glass-обвязки */}
        <div
          className="silenzio-fade mt-auto pt-20 md:pt-28 grid grid-cols-3 max-w-[640px] gap-x-8 gap-y-4"
          style={{ animationDelay: '560ms' }}
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="display text-background text-3xl md:text-4xl leading-none">{s.value}</p>
              <p className="mt-2 text-[11px] sm:text-[12px] uppercase tracking-wide3 text-background/55">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
