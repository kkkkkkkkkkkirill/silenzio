import { ArrowRight } from 'lucide-react';
import { hero, meta } from '../../data/content';

/**
 * Hero как обложка манифеста: одна крупная типографика, одна подпись курсивом,
 * одна кнопка. Никаких боковых служебных колонок и счётчиков прокрутки.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full bg-paper text-ink flex flex-col"
    >
      <div className="h-[68px] shrink-0" aria-hidden="true" />

      <div className="flex-1 max-w-site w-full mx-auto px-5 md:px-10 flex flex-col justify-end pb-16 md:pb-24">
        {/* служебная строка-кикер: дом / год / город */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 md:mb-12">
          <span className="eyebrow">ритуальный дом</span>
          <span className="hair-line w-12 !bg-ink/40 !h-px shrink-0" aria-hidden="true" />
          <span className="eyebrow">{meta.since}</span>
          <span className="hair-line w-12 !bg-ink/40 !h-px shrink-0" aria-hidden="true" />
          <span className="eyebrow">{meta.city}</span>
        </div>

        {/* главный заголовок */}
        <h1 className="display display-tight text-ink leading-[0.88] text-[clamp(64px,14vw,196px)] max-w-[18ch]">
          {hero.title.split('\n').map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h1>

        {/* italic-подпись */}
        <p className="display italic text-ink/70 mt-10 md:mt-12 text-[clamp(20px,2.4vw,32px)] leading-[1.3] max-w-[40ch]">
          il silenzio — достоинство, забота и порядок в трудный момент.
        </p>

        {/* единственная кнопка */}
        <div className="mt-12 md:mt-16">
          <a
            href={hero.primaryCta.href}
            className="group inline-flex items-center gap-3 text-ink hover:text-ink/70 transition-colors duration-300"
          >
            <span className="display italic text-[20px] md:text-[24px]">связаться с домом</span>
            <ArrowRight size={20} strokeWidth={1.5} className="transition-transform duration-500 group-hover:translate-x-1.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
