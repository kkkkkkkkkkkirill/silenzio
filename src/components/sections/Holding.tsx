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
          {/* Лого слева, по центру */}
          <div className="md:col-span-4 flex items-center justify-center bg-secondary/60 p-8 md:p-10 md:border-r border-border">
            <img
              src={logo}
              alt="SILENZIO"
              className="w-full max-w-[220px] md:max-w-[260px] h-auto select-none"
              draggable={false}
            />
          </div>

          {/* 3 направления */}
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3">
            {holding.divisions.map((d, i) => (
              <div
                key={d.index}
                className={`flex flex-col p-6 md:p-8 ${
                  i > 0 ? 'border-t md:border-t-0 md:border-l border-border' : ''
                }`}
              >
                <span className="display text-2xl text-muted-foreground/60">{d.index}</span>
                <h3 className="mt-5 display text-xl md:text-2xl text-foreground">{d.title}</h3>
                <p className="mt-3 text-[13px] md:text-[14px] leading-relaxed text-muted-foreground">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
