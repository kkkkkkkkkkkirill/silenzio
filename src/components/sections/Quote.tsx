import { Reveal } from '../ui/Reveal';
import { quote } from '../../data/content';

export function Quote() {
  return (
    <section className="bg-ink text-paper px-5 md:px-8 py-32 md:py-44">
      <Reveal as="div" className="max-w-[1080px] mx-auto text-center">
        <p className="display italic text-paper text-[clamp(1.6rem,4vw,3rem)] leading-[1.18] tracking-tight2">
          «{quote.text}»
        </p>
        <p className="mt-8 eyebrow !text-paper/55">{quote.attr}</p>
      </Reveal>
    </section>
  );
}
