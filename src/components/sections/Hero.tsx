import { ArrowRight, ArrowDown } from 'lucide-react';
import { hero } from '../../data/content';
import heroImg from '../../assets/hero/hero-gate.jpg';

export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      {/* фон */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center grayscale-soft"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      {/* виньетка для читаемости */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 35%, rgba(0,0,0,0.50) 75%, rgba(0,0,0,0.80) 100%)',
        }}
      />

      <div className="relative z-10 h-full w-full flex flex-col">
        <div className="h-[68px] shrink-0" aria-hidden="true" />

        <div className="flex-1 flex flex-col justify-center max-w-site w-full mx-auto px-5 md:px-8">
          <p className="eyebrow !text-white/65 mb-6">{hero.kicker}</p>

          <h1 className="display text-white text-[clamp(48px,9.5vw,148px)] leading-[1.02] tracking-tight2 max-w-[14ch]">
            {hero.title}
          </h1>

          <p className="mt-8 max-w-[54ch] text-white/85 text-[15px] md:text-[18px] leading-relaxed font-light">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center gap-2 bg-white text-ink rounded-full px-7 py-3.5 text-[13px] uppercase tracking-wide2 font-medium hover:bg-paper/90 transition-colors duration-300"
            >
              {hero.primaryCta.label}
              <ArrowRight size={15} strokeWidth={1.7} />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 border border-white/35 text-white rounded-full px-7 py-3.5 text-[13px] uppercase tracking-wide2 hover:bg-white/10 transition-colors duration-300"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex flex-col items-center gap-2 text-white/55">
          <span className="text-[10px] tracking-wide4 uppercase">il silenzio</span>
          <ArrowDown size={14} strokeWidth={1.5} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
