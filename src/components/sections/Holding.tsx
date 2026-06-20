import { ContainerScroll } from '../ui/container-scroll-animation';
import { holding } from '../../data/content';
import logo from '../../assets/silenzio-logo.svg';

/**
 * «О холдинге» — манифест-заголовок + body над планшетом, внутри
 * планшета: слева крупное лого Silenzio (вертикально центрированное),
 * справа — 3 направления холдинга.
 */
export function Holding() {
  return (
    <section id="holding" className="border-t border-border bg-background overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 text-left">
            <div className="lg:col-span-4">
              <p className="eyebrow">{holding.eyebrow}</p>
            </div>
            <div className="lg:col-span-8">
              <p className="display text-foreground text-balance text-[clamp(1.8rem,3.6vw,2.75rem)] leading-[1.18]">
                {holding.manifesto.split('всё').map((part, i, arr) =>
                  i < arr.length - 1
                    ? <span key={i}>{part}<span className="italic text-muted-foreground">всё</span></span>
                    : <span key={i}>{part}</span>,
                )}
              </p>
              <p className="mt-7 max-w-xl leading-relaxed text-muted-foreground">
                {holding.body}
              </p>
            </div>
          </div>
        }
      >
        {/* Содержимое планшета: лого слева + 3 направления справа */}
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-12">

          {/* Лого слева, центрирован по вертикали, snipline снизу */}
          <div className="md:col-span-4 flex flex-col items-center justify-center gap-6 md:gap-8 bg-secondary/55 p-8 md:p-10 md:border-r border-border">
            <img
              src={logo}
              alt="SILENZIO"
              className="w-full max-w-[200px] md:max-w-[240px] h-auto select-none"
              draggable={false}
            />
            <div className="flex flex-col items-center gap-2.5">
              <span className="block h-px w-12 bg-foreground/25" aria-hidden="true" />
              <span className="eyebrow !text-muted-foreground">Холдинг с 2011</span>
            </div>
          </div>

          {/* 3 направления — каждая карточка распределяет контент сверху и снизу */}
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3">
            {holding.divisions.map((d, i) => (
              <article
                key={d.index}
                className={`relative flex flex-col justify-between p-7 md:p-9 ${
                  i > 0 ? 'border-t md:border-t-0 md:border-l border-border' : ''
                }`}
              >
                <header>
                  <span className="display text-3xl md:text-4xl text-muted-foreground/55">{d.index}</span>
                  <span className="block mt-5 h-px w-10 bg-foreground/20" aria-hidden="true" />
                  <h3 className="mt-5 display text-xl md:text-[26px] leading-[1.15] text-foreground">
                    {d.title}
                  </h3>
                </header>
                <p className="mt-6 text-[13px] md:text-[14px] leading-relaxed text-muted-foreground">
                  {d.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
