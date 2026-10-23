import Image from "next/image";
import {
  Tag, Boxes, Truck, Headset, Gem, Cog, FileText, ShieldCheck,
  Lightbulb, PencilRuler, Box, Users, Megaphone, TrendingUp
} from "lucide-react";
import SectionHeading from "../SectionHeading";
import { PrimaryButton, SecondaryButton } from "../Buttons";

const ICONS = {
  tag: Tag,
  boxes: Boxes,
  truck: Truck,
  headset: Headset,
  diamond: Gem,
  gear: Cog,
  file: FileText,
  shield: ShieldCheck,
  lightbulb: Lightbulb,
  ruler: PencilRuler,
  box: Box,
  users: Users,
  megaphone: Megaphone,
  trending: TrendingUp
};

/**
 * "Why choose" section: heading + 4 feature cards on the left,
 * optional product side card (with image, title, text and optional CTA) on the right.
 */
export default function LandingFeatureSupport({ data }) {
  if (!data) return null;
  const { tag, title, titleHighlight, titleSuffix, description, features, sideCard } = data;
  const darkSideCard = sideCard?.variant === "dark";

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: heading + feature cards */}
        <div className={`${sideCard ? "lg:col-span-8" : "lg:col-span-12"} flex flex-col justify-between`}>
          <SectionHeading
            label={tag}
            title={`${title} `}
            highlight={titleHighlight}
            titleSuffix={titleSuffix}
            description={description}
            className={data.headingClass || "max-w-none mb-6"}
            titleSize={data.titleSize}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch mt-auto">
            {features.map((feat) => {
              const Icon = ICONS[feat.iconType] || Tag;
              return (
                <div
                  key={feat.id}
                  className="h-full border border-gray-200/90 rounded-xl p-4 sm:p-5 shadow-[0_0px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_5px_15px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-full bg-brand-light-bubble border border-blue-100 flex items-center justify-center text-brand-accent mb-3 shrink-0">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-brand-navy mb-2 min-h-[2.75rem] flex items-start leading-snug">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-[13px] leading-snug mt-auto pt-1">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: optional side card (compact & shorter) */}
        {sideCard && (
          <div
            className={`lg:col-span-4 rounded-xl overflow-hidden shadow-[0_0px_8px_rgba(0,0,0,0.06)] flex flex-col justify-between h-full ${
              darkSideCard
                ? "bg-brand-navy border border-blue-900/40"
                : "bg-brand-surface border border-blue-100"
            }`}
          >
            <div className="relative h-44 sm:h-48 shrink-0">
              <Image
                src={sideCard.image}
                alt={sideCard.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className={
                  sideCard.cover
                    ? `object-cover ${sideCard.position || "object-center"}`
                    : `object-contain p-2 sm:p-3 ${sideCard.blend ? "mix-blend-multiply" : ""}`
                }
              />
            </div>
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3
                  className={`text-xl sm:text-2xl font-bold mb-2 tracking-tight ${
                    darkSideCard ? "text-white" : "text-brand-navy"
                  }`}
                >
                  {sideCard.title}
                </h3>
                <p
                  className={`text-sm sm:text-base leading-snug ${
                    darkSideCard ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {sideCard.description}
                </p>
              </div>
              {sideCard.cta && (
                <div className="mt-4">
                  {darkSideCard ? (
                    <SecondaryButton href={sideCard.cta.href} label={sideCard.cta.label} />
                  ) : (
                    <PrimaryButton href={sideCard.cta.href} label={sideCard.cta.label} />
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
