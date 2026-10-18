import Image from "next/image";
import SectionHeading from "../SectionHeading";

export default function IndustrialWhyChoose({ section, features }) {
  if (!section || !features) return null;
  const { tag, title, titleHighlight, description } = section;

  return (
    <section className="relative bg-brand-night text-white py-20 md:py-24 px-4 md:px-12 overflow-hidden">
      {/* Architectural background with illuminated building on the right */}
      <Image
        src="/images/why-vajra-bg.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover object-right pointer-events-none select-none"
      />
      {/* Deep navy gradient fading towards the building on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-night via-brand-night/90 md:via-brand-night/80 to-brand-night/30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          label={tag}
          title={`${title} `}
          highlight={titleHighlight}
          description={description}
          dark
          className="mb-16"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 lg:gap-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="group flex flex-col items-start">
                <div className="size-16 sm:size-18 rounded-full border border-white/25 bg-white/10 backdrop-blur-md flex items-center justify-center mb-5 transition-all group-hover:scale-110 shadow-[0_6px_24px_rgba(0,0,0,0.3)] group-hover:border-blue-400">
                  {Icon && <Icon className="size-7 text-white" strokeWidth={1.4} />}
                </div>
                <h3 className="font-medium text-base sm:text-lg text-white mb-1 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-tight">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
