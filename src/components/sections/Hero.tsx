import { ArrowRight, ArrowDown } from 'lucide-react';
import { hero, meta } from '../../data/content';

/**
 * Hero без фото — типографическая композиция.
 * Слева — заголовок крупным serif и текст. По краям — служебные
 * микро-метки (нумератор, регион, режим). Никаких изображений,
 * градиентов или геометрии — только воздух и шрифт.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full bg-paper text-ink flex flex-col"
    >
      <div className="h-[68px] shrink-0" aria-hidden="true" />

      <div className="flex-1 max-w-site w-full mx-auto px-5 md:px-8 grid grid-cols-12 gap-6">
        {/* левая узкая колонка — нумератор и режим работы */}
        <div className="col-span-12 md:col-span-2 flex md:flex-col justify-between md:justify-between pt-8 md:pt-16 pb-8 md:pb-16">
          <p className="eyebrow">00 · 06</p>
          <p className="eyebrow md:writing-vertical hidden md:block">
            {meta.city}
          </p>
        </div>

        {/* центральная — заголовок */}
        <div className="col-span-12 md:col-span-8 flex flex-col justify-center py-12 md:py-0">
          <p className="eyebrow mb-7">{hero.kicker}</p>

          <h1 className="display text-ink leading-[0.95] tracking-tight2 text-[clamp(56px,11vw,168px)]">
            {hero.title.split('\n').map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-10 max-w-[52ch] text-ink/65 text-[15px] md:text-[17px] leading-relaxed font-light">
            {hero.description}
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <a
              href={hero.primaryCta.href}
              className="group inline-flex items-center gap-2 bg-ink text-paper rounded-full px-7 py-3.5 text-[12px] uppercase tracking-wide2 font-medium hover:bg-ink/85 transition-colors duration-300"
            >
              {hero.primaryCta.label}
              <ArrowRight size={14} strokeWidth={1.7} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 text-ink/75 hover:text-ink rounded-full px-5 py-3.5 text-[12px] uppercase tracking-wide2 transition-colors duration-300"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        {/* правая узкая колонка — телефон и подпись */}
        <div className="col-span-12 md:col-span-2 flex md:flex-col items-end md:items-end justify-between md:justify-between pt-8 md:pt-16 pb-8 md:pb-16">
          <a
            href={`tel:${meta.phone.replace(/[^+\d]/g, '')}`}
            className="eyebrow !text-ink hover:opacity-60 transition-opacity"
          >
            {meta.phone}
          </a>
          <p className="eyebrow text-right">il silenzio</p>
        </div>
      </div>

      <div className="max-w-site w-full mx-auto px-5 md:px-8 pb-8 md:pb-12">
        <div className="hair-line mb-5" />
        <div className="flex items-center justify-between text-ink/55">
          <span className="eyebrow">прокрутите</span>
          <ArrowDown size={14} strokeWidth={1.4} className="animate-bounce" />
          <span className="eyebrow">{meta.since}</span>
        </div>
      </div>
    </section>
  );
}
