import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FeatureBadgesStrip from "./FeatureBadgesStrip";

export default function PageHero({
  breadcrumbs,
  tag,
  title,
  titleHighlight,
  titleHighlightClass = "text-brand-accent-light",
  titleSuffix,
  description,
  bgImage,
  primaryCta,
  secondaryCta,
  badges,
  centered = false,
  className = "",
}) {
  return (
    <section className={`relative bg-brand-navy-dark text-white overflow-hidden ${className}`}>
      {/* Background Image & Gradient Scrim */}
      {bgImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-right pointer-events-none opacity-80"
            style={{ backgroundImage: `url('${bgImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark via-brand-navy-dark/90 md:via-brand-navy-dark/60 to-transparent pointer-events-none" />
        </>
      )}

      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 ${
          centered ? "py-16 md:py-20 text-center" : "pt-6 pb-12 md:pb-16"
        }`}
      >
        {/* Optional Breadcrumb Navigation */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-xs text-gray-300/80 mb-6 font-medium">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <span key={idx} className="flex items-center gap-2">
                  {idx > 0 && <span className="text-gray-500 font-normal">›</span>}
                  {isLast ? (
                    <span className="text-white font-semibold">{crumb.name}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.name}
                    </Link>
                  )}
                </span>
              );
            })}
          </nav>
        )}

        {/* Hero Text Content */}
        <div className={centered ? "max-w-4xl mx-auto" : "max-w-2xl py-4 md:py-8"}>
          {tag && (
            <p
              className={`text-xs font-bold tracking-widest text-brand-accent-light uppercase mb-3 flex items-center gap-2 ${
                centered ? "justify-center" : ""
              }`}
            >
              <span className="w-5 h-0.5 bg-brand-accent-light"></span>
              {tag}
            </p>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-[1.08]">
            {title && <span>{title} </span>}
            {titleHighlight && (
              <span className={titleHighlightClass}>{titleHighlight}</span>
            )}
            {titleSuffix && <span> {titleSuffix}</span>}
          </h1>

          {description && (
            <p
              className={`text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed mb-8 drop-shadow-sm ${
                centered ? "max-w-2xl mx-auto text-gray-300" : "max-w-2xl font-normal"
              }`}
            >
              {description}
            </p>
          )}

          {/* Action Call to Actions */}
          {(primaryCta || secondaryCta) && (
            <div
              className={`flex flex-wrap items-center gap-4 ${
                centered ? "justify-center" : ""
              }`}
            >
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="bg-brand-blue hover:bg-brand-blue-hover text-white px-7 py-3.5 rounded-md font-bold text-sm md:text-base transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
                >
                  <span>{primaryCta.label}</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="bg-white hover:bg-gray-100 text-brand-navy px-7 py-3.5 rounded-md font-bold text-sm md:text-base transition-all shadow-sm hover:shadow-md inline-flex items-center gap-2"
                >
                  <span>{secondaryCta.label}</span>
                  <ArrowRight className="w-4 h-4 text-brand-navy" strokeWidth={2} />
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Feature Badges Strip */}
        {badges && badges.length > 0 && (
          <FeatureBadgesStrip items={badges} className="mt-8 pt-6 border-t border-white/10" />
        )}
      </div>
    </section>
  );
}
