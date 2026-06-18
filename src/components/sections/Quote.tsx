import { Reveal } from '../ui/Reveal';
import { quote } from '../../data/content';

/**
 * Кинокадр-цитата. Огромная фраза без кавычек, лежит на всю ширину
 * с переносами по смыслу. Тонкая подпись внизу.
 */
export function Quote() {
  return (
    <section className="bg-ink text-paper px-5 md:px-10 py-44 md:py-64">
      <Reveal as="div" className="max-w-site mx-auto">
        <p className="display italic text-paper leading-[1.0] text-[clamp(2.4rem,9vw,8rem)] max-w-[22ch]">
          тишина
          <br />
          <span className="text-paper/55">не пустота —</span>
          <br />
          это пространство,
          <br />
          в котором остаётся
          <br />
          память.
        </p>

        <div className="mt-16 md:mt-24 flex items-center gap-4">
          <span className="hair-line !bg-paper/30 w-16 shrink-0" aria-hidden="true" />
          <span className="eyebrow !text-paper/55">{quote.attr}</span>
        </div>
      </Reveal>
    </section>
  );
}
