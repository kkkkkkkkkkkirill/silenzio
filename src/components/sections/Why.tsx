import { Reveal } from '../ui/Reveal';
import { why } from '../../data/content';
import atmosphere from '../../assets/hero/atmosphere-stone.jpg';

export function Why() {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <img
        src={atmosphere}
        alt=""
        className="-z-10 absolute inset-0 h-full w-full object-cover opacity-[0.08]"
        aria-hidden="true"
        draggable={false}
      />
      <div className="mx-auto max-w-site px-6 py-20 md:py-28 lg:px-10">
        <Reveal as="div" className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-wide4 text-primary-foreground/55">
            {why.eyebrow}
          </p>
          <p className="mt-8 display text-balance text-primary-foreground text-3xl leading-[1.3] md:text-4xl lg:text-[2.5rem]">
            {why.manifesto}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
          {why.reasons.map((r, i) => (
            <Reveal
              key={r.number}
              delay={i * 80}
              as="div"
              className="flex flex-col border-t border-primary-foreground/20 pt-6"
            >
              <span className="text-xs font-medium tracking-wide4 text-primary-foreground/50">{r.number}</span>
              <h3 className="mt-4 display text-2xl">{r.title}</h3>
              <p className="mt-3 leading-relaxed text-primary-foreground/70">{r.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
