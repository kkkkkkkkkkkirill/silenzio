import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { screens } from '../../data/content';

import loopVideo from '../../assets/screens/loop-candles.mp4';
import loopPoster from '../../assets/screens/loop-candles.jpg';
import previewIcons from '../../assets/screens/preview-icons.jpg';
import previewAngels from '../../assets/screens/preview-angels.jpg';
import previewNature from '../../assets/screens/preview-nature.jpg';
import previewCandles from '../../assets/screens/preview-candles.jpg';

const PREVIEWS = [
  { src: previewIcons, label: 'иконы' },
  { src: previewAngels, label: 'ангелы' },
  { src: previewNature, label: 'природа' },
  { src: previewCandles, label: 'свечи' },
];

export function Screens() {
  return (
    <section id="screens" className="relative bg-ink text-paper px-5 md:px-8 py-28 md:py-40 overflow-hidden">
      <div className="max-w-site mx-auto">
        <Reveal as="div" className="mb-12 md:mb-16 max-w-[44ch]">
          <p className="eyebrow !text-paper/55 mb-4">{screens.eyebrow}</p>
          <h2 className="display text-paper text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.04] tracking-tight2">
            {screens.title}
          </h2>
          <p className="mt-7 text-paper/75 text-[15px] md:text-[17px] leading-relaxed font-light">
            {screens.description}
          </p>
        </Reveal>

        {/* основное видео */}
        <Reveal>
          <div className="relative aspect-[16/9] w-full bg-black overflow-hidden border border-paper/10">
            <video
              src={loopVideo}
              poster={loopPoster}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover grayscale-bw"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.0) 60%, rgba(0,0,0,0.65) 100%)' }}
            />
            <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between gap-4">
              <span className="text-[11px] tracking-wide4 uppercase text-paper/80">демо-сценарий · свечи в зале</span>
              <a
                href={screens.cta.href}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 bg-paper text-ink rounded-full px-5 py-2.5 text-[12px] uppercase tracking-wide2 font-medium hover:bg-paper/90 transition-colors"
              >
                {screens.cta.label}
                <ArrowUpRight size={14} strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </Reveal>

        {/* пакеты */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
          {screens.packages.map((p, i) => (
            <Reveal key={p.id} delay={i * 90} as="article" className="border-t border-paper/15 pt-6">
              <div className="flex items-baseline justify-between mb-3">
                <p className="eyebrow !text-paper/60">{p.label}</p>
                <span className="text-[11px] tracking-wide4 uppercase text-paper/55 font-mono">{p.price}</span>
              </div>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-paper/75 font-light max-w-[40ch]">
                {p.text}
              </p>
            </Reveal>
          ))}
        </div>

        {/* превью «трояк» — четыре кадра */}
        <Reveal as="div" className="mt-16">
          <p className="eyebrow !text-paper/55 mb-5">визуальные ряды</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {PREVIEWS.map((p) => (
              <figure key={p.label} className="relative aspect-[16/10] overflow-hidden bg-black border border-paper/10">
                <img src={p.src} alt={p.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover grayscale-bw" />
                <figcaption className="absolute left-3 bottom-3 text-[10px] tracking-wide4 uppercase text-paper/85">
                  {p.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
