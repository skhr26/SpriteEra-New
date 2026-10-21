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
    <section className="w-full bg-white py-16 md:py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: heading + feature cards */}
        <div className={`${sideCard ? "lg:col-span-8" : "lg:col-span-12"} flex flex-col`}>
          <SectionHeading
            label={tag}
            title={`${title} `}
            highlight={titleHighlight}
            titleSuffix={titleSuffix}
            description={description}
            className={data.headingClass || "max-w-none mb-8"}
            titleSize={data.titleSize}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feat) => {
              const Icon = ICONS[feat.iconType] || Tag;
              return (
                <div
                  key={feat.id}
                  className="border border-gray-200/90 rounded-xl p-5 shadow-[0_0px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_5px_15px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-light-bubble border border-blue-100 flex items-center justify-center text-brand-accent mb-4">
                    <Icon className="size-6" strokeWidth={1.5} />
                  </div>
                  <h3
                    className={`text-base lg:text-lg font-bold text-brand-navy mb-2 ${
                      data.equalCards ? "min-h-[3.5rem]" : ""
                    }`}
                  >
                    {feat.title}
                  </h3>
                  <p
                    className={`text-gray-500 text-xs sm:text-[13px] lg:text-sm leading-snug ${
                      data.equalCards ? "" : "mt-auto"
                    }`}
                  >
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: optional side card */}
        {sideCard && (
          <div
            className={`lg:col-span-4 rounded-xl overflow-hidden shadow-[0_0px_8px_rgba(0,0,0,0.06)] flex flex-col ${
              darkSideCard
                ? "bg-brand-navy border border-blue-900/40"
                : "bg-brand-surface border border-blue-100"
            }`}
          >
            <div className="relative flex-1 min-h-[10rem]">
              <Image
                src={sideCard.image}
                alt={sideCard.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className={
                  sideCard.cover
                    ? `object-cover ${sideCard.position || ""}`
                    : `object-contain p-2 sm:p-3 ${sideCard.blend ? "mix-blend-multiply" : ""}`
                }
              />
            </div>
            <div className="p-6 sm:p-7">
              <h3
                className={`text-2xl sm:text-3xl font-bold mb-3 tracking-tight ${
                  darkSideCard ? "text-white" : "text-brand-navy"
                }`}
              >
                {sideCard.title}
              </h3>
              <p
                className={`text-base lg:text-lg leading-snug ${
                  darkSideCard ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {sideCard.description}
              </p>
              {sideCard.cta && (
                <div className="mt-5">
                  {darkSideCard ? (
                    <SecondaryButton href={sideCard.cta.href} label={sideCard.cta.label} size="lg" />
                  ) : (
                    <PrimaryButton href={sideCard.cta.href} label={sideCard.cta.label} size="lg" />
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
