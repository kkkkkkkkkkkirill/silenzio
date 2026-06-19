import { Reveal } from '../ui/Reveal';
import { process } from '../../data/content';

export function Process() {
  return (
    <section id="process" className="border-t border-border bg-card">
      <div className="mx-auto max-w-site px-6 py-20 md:py-28 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal as="div" className="lg:col-span-4">
            <p className="eyebrow">{process.eyebrow}</p>
            <h2 className="mt-5 display display-tight text-foreground text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05] max-w-[16ch]">
              {process.title}
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
              {process.body}
            </p>
          </Reveal>

          <ol className="lg:col-span-8">
            {process.steps.map((s, i) => (
              <Reveal
                key={s.number}
                as="li"
                delay={i * 90}
                className={`flex flex-col gap-4 py-8 sm:flex-row sm:items-baseline sm:gap-10 ${
                  i !== 0 ? 'border-t border-border' : ''
                }`}
              >
                <span className="display text-3xl text-muted-foreground/50 sm:w-20">{s.number}</span>
                <div className="sm:flex-1">
                  <h3 className="display text-2xl text-foreground">{s.title}</h3>
                  <p className="mt-2 max-w-md leading-relaxed text-muted-foreground">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
