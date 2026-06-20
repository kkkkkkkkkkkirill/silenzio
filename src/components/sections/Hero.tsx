import {
  ArrowRight,
  Phone,
  Sparkles,
  ShieldCheck,
  Crown,
  Users,
  Gem,
  Container as UrnIcon,
  Grid3x3,
  Flower2,
  Truck,
} from 'lucide-react';
import { hero, meta } from '../../data/content';
import heroPoster from '../../assets/hero/hero-granite.jpg';

/**
 * Hero на шаблоне «glassmorphism trust hero», адаптирован под
 * палитру silenzio (foreground/background токены) и шрифт Fraunces.
 *
 * Фон — зацикленное видео гранитной плиты (CloudFront, тот же
 * исходник, что в Stella/granit-katalog). Поверх — тёмный foreground
 * с тонкими стеклянными карточками статистики и маркизой направлений.
 */

const GRANITE_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4';

const DIRECTIONS = [
  { name: 'Памятники',     Icon: Gem },
  { name: 'Урны',          Icon: UrnIcon },
  { name: 'Цифровые экраны', Icon: Sparkles },
  { name: 'Колумбарий',    Icon: Grid3x3 },
  { name: 'Цветы',         Icon: Flower2 },
  { name: 'Транспорт',     Icon: Truck },
];

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-0.5 cursor-default">
      <span className="display text-xl text-background sm:text-2xl">{value}</span>
      <span className="mt-1 text-[10px] uppercase tracking-wide4 text-background/55 font-medium sm:text-[11px]">
        {label}
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative w-full bg-foreground text-background overflow-hidden isolate"
    >
      <style>{`
        @keyframes silenzioFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes silenzioMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .silenzio-fade { animation: silenzioFadeUp 0.85s cubic-bezier(0.22,1,0.36,1) both; }
        .silenzio-marquee { animation: silenzioMarquee 48s linear infinite; }
        .hero-stone { filter: grayscale(1) contrast(1.18) brightness(1.18); }
        @media (prefers-reduced-motion: reduce) {
          .silenzio-fade, .silenzio-marquee { animation: none; }
        }
      `}</style>

      {/* Background poster fallback (показывается пока видео грузится
          и если оно вдруг не отдалось — точно не «пусто») */}
      <img
        src={heroPoster}
        alt=""
        aria-hidden="true"
        className="hero-stone absolute inset-0 z-0 h-full w-full object-cover"
        draggable={false}
      />

      {/* Background video */}
      <video
        src={GRANITE_VIDEO}
        poster={heroPoster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="hero-stone absolute inset-0 z-[1] h-full w-full object-cover"
      />

      {/* Darkening overlay для читаемости текста + лёгкий vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2]"
        style={{
          background:
            'linear-gradient(180deg, rgba(26,24,21,0.55) 0%, rgba(26,24,21,0.30) 35%, rgba(26,24,21,0.50) 75%, rgba(26,24,21,0.92) 100%)',
        }}
      />

      {/* Warm-glow в правом-верхнем углу для атмосферы */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 z-[3] h-[640px] w-[640px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(244,242,238,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-28 pb-16 sm:px-6 md:pt-36 md:pb-24 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10 items-start">

          {/* === LEFT COLUMN === */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-2">

            {/* Badge */}
            <div className="silenzio-fade" style={{ animationDelay: '80ms' }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/5 px-3.5 py-1.5 backdrop-blur-md">
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide4 text-background/85 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-background/80" strokeWidth={1.6} />
                  Холдинг ритуальных услуг · {meta.since}
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1
              className="silenzio-fade display display-tight text-background text-[clamp(56px,9.5vw,128px)] leading-[0.92] tracking-[-0.025em]"
              style={{ animationDelay: '180ms' }}
            >
              Память
              <br />
              <span className="italic text-background/55">в </span>
              тишине
            </h1>

            {/* Description */}
            <p
              className="silenzio-fade max-w-xl text-[15px] sm:text-[17px] text-background/70 leading-relaxed"
              style={{ animationDelay: '300ms' }}
            >
              <span className="italic text-background">il silenzio</span> — {hero.description}
            </p>

            {/* CTA */}
            <div className="silenzio-fade flex flex-col sm:flex-row gap-3" style={{ animationDelay: '440ms' }}>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-[13px] font-semibold tracking-wide2 uppercase text-foreground transition-all hover:scale-[1.02] hover:bg-background/90 active:scale-[0.98]"
              >
                Связаться
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.8} />
              </a>
              <a
                href={meta.phoneHref}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-background/15 bg-background/5 px-8 py-4 text-[13px] font-semibold tracking-wide2 uppercase text-background backdrop-blur-sm transition-colors hover:bg-background/10 hover:border-background/25"
              >
                <Phone className="w-4 h-4" strokeWidth={1.6} />
                {meta.phone}
              </a>
            </div>
          </div>

          {/* === RIGHT COLUMN === */}
          <div className="lg:col-span-5 space-y-5 lg:mt-10">

            {/* Stats card */}
            <div
              className="silenzio-fade relative overflow-hidden rounded-3xl border border-background/12 bg-background/5 p-7 md:p-8 backdrop-blur-xl shadow-2xl"
              style={{ animationDelay: '540ms' }}
            >
              <div
                aria-hidden="true"
                className="absolute -mr-16 -mt-16 right-0 top-0 h-64 w-64 rounded-full bg-background/[0.04] blur-3xl pointer-events-none"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background/10 ring-1 ring-background/20">
                    <ShieldCheck className="h-6 w-6 text-background" strokeWidth={1.4} />
                  </div>
                  <div>
                    <div className="display text-3xl text-background">15+ лет</div>
                    <div className="text-sm text-background/55">непрерывной работы</div>
                  </div>
                </div>

                <div className="space-y-3 mb-7">
                  <div className="flex justify-between text-sm">
                    <span className="text-background/60">Полный цикл услуг</span>
                    <span className="text-background font-medium">100%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-background/10">
                    <div className="h-full w-[100%] rounded-full bg-gradient-to-r from-background to-background/55" />
                  </div>
                </div>

                <div className="h-px w-full bg-background/10 mb-6" />

                <div className="grid grid-cols-3 gap-4 text-center">
                  <StatItem value="24/7" label="на связи" />
                  <div className="w-px h-full bg-background/10 mx-auto" />
                  <StatItem value="100%" label="цикл" />
                  <div className="w-px h-full bg-background/10 mx-auto" />
                  <StatItem value="0" label="посредников" />
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-background/12 bg-background/5 px-3 py-1 text-[10px] font-medium tracking-wide3 uppercase text-background/85">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300/70 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    Принимаем заявки
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-background/12 bg-background/5 px-3 py-1 text-[10px] font-medium tracking-wide3 uppercase text-background/85">
                    <Crown className="w-3 h-3 text-amber-200" strokeWidth={1.6} />
                    Полный цикл
                  </div>
                </div>
              </div>
            </div>

            {/* Marquee card — направления холдинга */}
            <div
              className="silenzio-fade relative overflow-hidden rounded-3xl border border-background/12 bg-background/5 py-7 backdrop-blur-xl"
              style={{ animationDelay: '640ms' }}
            >
              <h3 className="mb-5 px-7 md:px-8 text-[11px] tracking-wide4 uppercase text-background/55 flex items-center gap-2">
                <Users className="w-3.5 h-3.5" strokeWidth={1.6} />
                Направления холдинга
              </h3>

              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage: 'linear-gradient(to right, transparent, black 14%, black 86%, transparent)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 14%, black 86%, transparent)',
                }}
              >
                <div className="silenzio-marquee flex gap-10 whitespace-nowrap px-6">
                  {[...DIRECTIONS, ...DIRECTIONS, ...DIRECTIONS].map((d, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 text-background/70 hover:text-background transition-colors cursor-default"
                    >
                      <d.Icon className="h-4 w-4" strokeWidth={1.4} />
                      <span className="text-[15px] font-medium tracking-tight">{d.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
