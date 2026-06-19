import { Reveal } from '../ui/Reveal';
import { holding } from '../../data/content';

/**
 * Манифест дома + 3 направления холдинга. Структурно повторяет
 * концепт-зип, но визуально подтянул серый/курсив акценты.
 */
export function Holding() {
  return (
    <section id="holding" className="border-t border-border">
      <div className="mx-auto max-w-site px-6 py-20 md:py-28 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal as="div" className="lg:col-span-4">
            <p className="eyebrow">{holding.eyebrow}</p>
          </Reveal>

          <Reveal delay={120} as="div" className="lg:col-span-8">
            <p className="display text-foreground text-balance text-3xl leading-[1.25] md:text-4xl lg:text-[2.75rem]">
              {holding.manifesto.split('всё').map((part, i, arr) =>
                i < arr.length - 1
                  ? <span key={i}>{part}<span className="italic text-muted-foreground">всё</span></span>
                  : <span key={i}>{part}</span>,
              )}
            </p>
            <p className="mt-8 max-w-xl leading-relaxed text-muted-foreground">
              {holding.body}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-site border-t border-border px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {holding.divisions.map((d, i) => (
            <Reveal
              key={d.index}
              delay={i * 100}
              as="div"
              className={`flex flex-col py-12 md:py-16 ${
                i !== 0 ? 'border-t border-border md:border-l md:border-t-0' : ''
              } ${i === 1 ? 'md:px-10' : i === 2 ? 'md:pl-10' : 'md:pr-10'}`}
            >
              <span className="display text-2xl text-muted-foreground/60">{d.index}</span>
              <h3 className="mt-6 display text-2xl text-foreground">{d.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{d.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
