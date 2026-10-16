import Eyebrow from "./Eyebrow";
import { PrimaryCtaButton, SecondaryCtaButton } from "./CtaButtons";

export default function ProjectPlanningBanner({
  tag = "PROJECT SUPPORT",
  title = "Planning a Larger Project?",
  description = "Get in touch with our team for lighting design guidance, product selection, Dialux simulations, and customized project quotes.",
  points = [],
  image = "/images/solutions/industrial-planning.png",
  imageAlt = "Engineers planning lighting project",
  primaryCta = { label: "Get a Project Quote", href: "/contact" },
  secondaryCta = { label: "Talk to Our Team", href: "/contact" },
  className = "",
}) {
  return (
    <section className={`w-full bg-white py-16 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="bg-blue-50/70 rounded-2xl border border-blue-100 overflow-hidden shadow-sm flex flex-col lg:flex-row items-stretch justify-between">
        {/* Left Column: Heading, description & CTAs */}
        <div className="p-8 sm:p-10 lg:p-12 lg:max-w-md xl:max-w-lg flex flex-col justify-center flex-shrink-0">
          {tag && <Eyebrow label={tag} />}
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-navy mb-3.5 tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-8">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-3.5 mt-auto">
            {primaryCta && (
              <PrimaryCtaButton href={primaryCta.href} label={primaryCta.label} />
            )}
            {secondaryCta && (
              <SecondaryCtaButton
                href={secondaryCta.href}
                label={secondaryCta.label}
                className="border border-gray-300 font-semibold"
              />
            )}
          </div>
        </div>

        {/* Middle Column: Key Points in a Clean Vertical Stack with Authentic Icons */}
        {points && points.length > 0 && (
          <div className="px-8 pb-8 lg:py-12 lg:px-6 flex flex-col justify-center gap-4.5 flex-shrink-0">
            {points.map((pt, idx) => (
              <div key={idx} className="flex items-center gap-4 text-sm sm:text-base text-brand-navy font-semibold">
                <div className="w-10 h-10 rounded-full bg-brand-light-bubble border border-blue-200/60 shadow-[0_2px_8px_rgba(0,102,204,0.12)] flex items-center justify-center flex-shrink-0">
                  <img
                    src={`/images/solutions/plan-icon-${idx + 1}.png`}
                    alt=""
                    className="w-5 h-5 object-contain mix-blend-multiply"
                  />
                </div>
                <span className="leading-tight">{pt}</span>
              </div>
            ))}
          </div>
        )}

        {/* Right Column: Full-bleed image covering the complete right space with rounded corner */}
        {image && (
          <div className="lg:w-80 xl:w-96 flex-shrink-0 min-h-[260px] lg:min-h-full relative overflow-hidden m-4 lg:m-5 rounded-2xl shadow-sm">
            <img
              src={image}
              alt={imageAlt}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        )}
        </div>
      </div>
    </section>
  );
}
