import Image from "next/image";
import {
  Gem, Cog, FileText, Factory, ShieldCheck, Headset, CheckCircle2
} from "lucide-react";
import SectionHeading from "../SectionHeading";

const ICONS = {
  diamond: Gem,
  cog: Cog,
  file: FileText,
  factory: Factory,
  shield: ShieldCheck,
  headset: Headset
};

/**
 * "Our strength" section: heading + optional side card, followed by a
 * two-column grid of numbered advantage cards with a supporting image.
 * data: { tag, title, titleHighlight, description, sideCard, items }
 */
export default function LandingAdvantageGrid({ data }) {
  if (!data) return null;
  const { tag, title, titleHighlight, titleSuffix, description, sideCard, items = [] } = data;

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-start mb-10">
          <SectionHeading
            label={tag}
            title={title}
            highlight={titleHighlight}
            titleSuffix={titleSuffix}
            description={description}
            className="lg:col-span-8 max-w-none"
          />

          {sideCard && (
            <div className="lg:col-span-4 bg-brand-surface-soft border border-blue-100 rounded-xl overflow-hidden flex shadow-[0_0px_8px_rgba(0,0,0,0.06)]">
              <div className="relative w-2/5 min-h-[9rem] flex-shrink-0">
                <Image
                  src={sideCard.image}
                  alt={sideCard.title}
                  fill
                  sizes="(max-width: 1024px) 40vw, 15vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-center">
                <h3 className="text-base lg:text-lg font-bold text-brand-navy leading-tight">
                  {sideCard.title}
                </h3>
                <p className="text-xs lg:text-sm text-gray-500 mt-2 leading-snug">
                  {sideCard.description}
                </p>
                <span className="block w-8 h-[2px] bg-brand-accent mt-3" aria-hidden="true" />
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {items.map((item) => {
            const Icon = ICONS[item.iconType] || Gem;
            return (
              <article
                key={item.id}
                className="border border-gray-200/90 rounded-xl bg-white p-5 sm:p-6 shadow-[0_0px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_5px_15px_rgb(0,0,0,0.12)] transition-shadow duration-300 flex flex-col sm:flex-row gap-5"
              >
                <div className="flex-1 min-w-0">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-brand-surface text-brand-accent text-xs font-bold mb-3">
                    {item.number}
                  </span>

                  <div className="flex items-start gap-3 mb-2">
                    <Icon
                      className="size-7 text-brand-accent flex-shrink-0 mt-0.5"
                      strokeWidth={1.6}
                    />
                    <div>
                      <h3 className="text-lg font-bold text-brand-navy leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-brand-accent leading-tight mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 leading-snug mb-3">{item.desc}</p>

                  <ul className="space-y-1.5">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                        <CheckCircle2
                          className="size-4 text-brand-accent flex-shrink-0 mt-0.5"
                          strokeWidth={1.8}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative w-full sm:w-[38%] h-48 sm:h-auto sm:min-h-[13rem] flex-shrink-0 rounded-lg overflow-hidden bg-brand-surface-soft">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 20vw"
                    className="object-cover"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
