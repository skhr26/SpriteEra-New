import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SolutionOverview({ overview, className = "" }) {
  if (!overview) return null;

  return (
    <section className={`w-full bg-white py-16 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7">
            {overview.tag && (
              <p className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-2 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-brand-accent"></span>
                {overview.tag}
              </p>
            )}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
              {overview.title}{" "}
              {overview.titleHighlight && (
                <span>{overview.titleHighlight}</span>
              )}
            </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            {overview.description}
          </p>
          {overview.cta && (
            <Link
              href={overview.cta.href}
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-hover text-white px-6 py-3 rounded-md text-xs md:text-sm font-bold transition-all shadow-sm"
            >
              <span>{overview.cta.label}</span>
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          )}
        </div>

        {/* Right Column: Spaces Grid + Video Preview Card */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Application spaces - Circular symbol buttons with text outside */}
          {overview.spaces && overview.spaces.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {overview.spaces.map((sp) => (
                <div key={sp.id} className="flex flex-col items-center group cursor-pointer">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-[0_4px_18px_rgba(0,102,204,0.12)] border border-blue-100 flex items-center justify-center p-3.5 mb-2.5 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                    <img
                      src={`/images/solutions/${
                        sp.id === "factories"
                          ? "pure-space-factory.png"
                          : sp.id === "warehouses"
                          ? "pure-space-warehouse.png"
                          : sp.id === "workshops"
                          ? "pure-space-workshop.png"
                          : "pure-space-logistics.png"
                      }`}
                      alt={sp.label}
                      className="w-9 h-9 sm:w-11 sm:h-11 object-contain"
                    />
                  </div>
                  <span className="font-bold text-xs sm:text-sm text-brand-navy leading-tight mb-0.5">
                    {sp.label}
                  </span>
                  <span className="text-[11px] sm:text-xs text-gray-500 leading-tight">
                    {sp.sub}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Video / Visual Card */}
          {overview.videoCard && (
            <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer border border-gray-100">
              <img
                src="/images/solutions/industrial-video-clean.png"
                alt={overview.videoCard.title || "Solution Overview Video"}
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-blue-600 flex items-center justify-center shadow-md font-bold text-sm pl-0.5 group-hover:scale-110 transition-transform">
                    ▶
                  </div>
                  <div>
                    <h4 className="text-white text-xs sm:text-sm font-bold leading-tight">
                      {overview.videoCard.title}
                    </h4>
                    <p className="text-gray-300 text-[11px]">
                      {overview.videoCard.duration}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </section>
  );
}
