import { Reveal } from '../ui/Reveal';
import { quote } from '../../data/content';

export function Quote() {
  return (
    <section className="bg-ink text-paper px-5 md:px-8 py-36 md:py-52">
      <Reveal as="div" className="max-w-[1000px] mx-auto text-center">
        <span className="eyebrow !text-paper/45 mb-9 block">il silenzio</span>
        <p className="display italic text-paper text-[clamp(1.7rem,4.2vw,3.2rem)] leading-[1.18] tracking-tight2">
          «{quote.text}»
        </p>
        <span className="mt-10 eyebrow !text-paper/45 block">{quote.attr}</span>
      </Reveal>
    </section>
  );
}
