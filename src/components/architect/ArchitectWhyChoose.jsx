import Image from "next/image";
import { Lightbulb, PencilRuler, ShieldCheck, FileText } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { SecondaryButton } from "../Buttons";

const ICONS = {
  lightbulb: Lightbulb,
  "pencil-ruler": PencilRuler,
  "shield-check": ShieldCheck,
  "file-text": FileText,
};

export default function ArchitectWhyChoose({ data }) {
  if (!data) return null;
  const { tag, title, titleHighlight, description, features, sideCard } = data;

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full">
        <SectionHeading
          label={tag}
          title={`${title} `}
          highlight={titleHighlight}
          description={description}
          className="max-w-3xl mb-10"
        />

        {/* Main 2-Column Grid: 4 Feature Cards (Left) + Architectural Side Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: 4 Feature Cards (2x2 Grid) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
            {features.map((feat) => {
              const Icon = ICONS[feat.iconType] || Lightbulb;
              return (
                <div
                  key={feat.id}
                  className="h-full border border-gray-200/90 rounded-xl p-6 shadow-[0_0px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_5px_15px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-brand-light-bubble border border-blue-100 flex items-center justify-center text-brand-accent mb-4">
                      <Icon className="size-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base lg:text-lg font-bold text-brand-navy mb-2 min-h-[3rem] flex items-start leading-snug">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-[13px] lg:text-sm leading-snug mt-auto pt-2">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Architectural Visual Card with CTA */}
          {sideCard && (
            <div className="lg:col-span-4 relative rounded-xl overflow-hidden shadow-[0_0px_8px_rgba(0,0,0,0.06)] flex flex-col justify-end p-6 sm:p-8 min-h-[300px] group">
              <Image
                src={sideCard.image}
                alt={sideCard.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/60 to-transparent pointer-events-none" />

              <div className="relative z-10 text-white">
                <h3 className="text-xl sm:text-2xl lg:text-[28px] font-bold mb-2.5 tracking-tight leading-tight drop-shadow-lg">
                  {sideCard.title}
                </h3>
                <p className="text-gray-200 text-xs sm:text-sm leading-snug mb-6 drop-shadow-md">
                  {sideCard.description}
                </p>
                <SecondaryButton
                  href={sideCard.cta.href}
                  label={sideCard.cta.label}
                  className="py-2.5 text-xs sm:text-sm font-semibold"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
