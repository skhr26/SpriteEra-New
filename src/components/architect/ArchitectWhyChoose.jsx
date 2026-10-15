import Link from "next/link";
import { ArrowRight, Lightbulb, PencilRuler, ShieldCheck, FileText } from "lucide-react";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Eyebrow and Headline */}
      <div className="mb-10 max-w-3xl">
        {tag && (
          <p className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-2 flex items-center gap-2">
            <span className="w-5 h-px bg-brand-accent"></span>
            {tag}
          </p>
        )}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight mb-3">
          {title}{" "}
          {titleHighlight && <span className="text-brand-accent">{titleHighlight}</span>}
        </h2>
        {description && (
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Main 2-Column Grid: 4 Feature Cards (Left) + Architectural Side Card (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: 4 Feature Cards (2x2 Grid) */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((feat) => {
            const Icon = ICONS[feat.iconType] || Lightbulb;
            return (
              <div
                key={feat.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-accent mb-4">
                  <Icon className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-2">
                  {feat.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-auto">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Column: Architectural Visual Card with CTA */}
        {sideCard && (
          <div className="lg:col-span-4 relative rounded-2xl overflow-hidden shadow-sm flex flex-col justify-end p-6 sm:p-8 min-h-[300px]">
            {/* Background photo */}
            <img
              src={sideCard.image}
              alt={sideCard.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient scrim overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/95 via-brand-navy-dark/70 to-transparent pointer-events-none" />

            {/* Content on card */}
            <div className="relative z-10 text-white">
              <h3 className="text-xl sm:text-2xl font-extrabold mb-2.5 tracking-tight leading-tight">
                {sideCard.title}
              </h3>
              <p className="text-gray-200 text-xs sm:text-sm leading-relaxed mb-6">
                {sideCard.description}
              </p>
              <Link
                href={sideCard.cta.href}
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-brand-navy px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold transition shadow-sm"
              >
                <span>{sideCard.cta.label}</span>
                <ArrowRight className="w-4 h-4 text-brand-navy" strokeWidth={2} />
              </Link>
            </div>
          </div>
        )}
      </div>
      </div>
    </section>
  );
}
