import { ParallaxFeatureSection, type ParallaxFeatureItem } from '../ui/parallax-scroll-feature-section';
import { services } from '../../data/content';

import ceremony from '../../assets/services/ceremony.jpg';
import niches from '../../assets/services/niches.jpg';
import monuments from '../../assets/services/monuments.jpg';
import urns from '../../assets/services/urns.jpg';
import screens from '../../assets/services/screens.jpg';
import flowers from '../../assets/services/flowers.jpg';
import transport from '../../assets/services/transport.jpg';

const IMAGES: Record<string, string> = {
  '01': ceremony,
  '02': niches,
  '03': monuments,
  '04': urns,
  '05': screens,
  '06': flowers,
  '07': transport,
};

// Портретные сцены — высокий aspect; ландшафтные — широкий.
const ASPECT: Record<string, string> = {
  '01': '5/4',  // организация — landscape
  '02': '5/4',  // ниши — landscape
  '03': '4/5',  // памятники — portrait
  '04': '4/5',  // урны — portrait
  '05': '5/4',  // экраны — landscape
  '06': '5/4',  // цветы — landscape
  '07': '4/5',  // транспорт — portrait
};

export function Services() {
  const items: ParallaxFeatureItem[] = services.items.map((s, i) => ({
    id: s.index,
    index: s.index,
    title: s.title,
    description: s.description,
    imageUrl: IMAGES[s.index],
    imageAlt: s.title,
    reverse: i % 2 === 1,
    aspect: ASPECT[s.index],
  }));

  return (
    <section id="services" className="border-t border-border bg-background">
      <ParallaxFeatureSection
        items={items}
        intro={
          <>
            <p className="eyebrow">{services.eyebrow}</p>
            <h2 className="mt-5 display display-tight text-foreground text-balance text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[1.04] max-w-[18ch]">
              {services.title}
            </h2>
            <p className="mt-7 max-w-xl text-muted-foreground leading-relaxed">
              {services.tag}
            </p>
          </>
        }
      />
    </section>
  );
}
