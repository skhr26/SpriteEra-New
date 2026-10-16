import Eyebrow from "./Eyebrow";

/**
 * LeadCtaBanner — shared navy bottom-CTA shell.
 * Unifies shared/Footer, industrial/IndustrialBottomBanner and
 * architect/ArchitectBottomBanner which were ~80% the same markup:
 * navy bg + right-aligned bg image + gradient scrim + left copy + right actions.
 *
 * Visuals are preserved via props: each caller passes its own bgImage,
 * paddings and action buttons; this component only removes the duplicated shell.
 */
export default function LeadCtaBanner({
  eyebrow = "LET'S WORK TOGETHER",
  title,
  description,
  bgImage,
  bgImageClassName = "absolute inset-0 bg-cover bg-right bg-no-repeat pointer-events-none",
  bgImageOpacity = "",
  scrimClassName = "absolute inset-0 bg-gradient-to-r from-[#002855] via-[#002855]/95 md:via-[#002855]/75 to-transparent pointer-events-none",
  sectionClassName = "relative bg-[#002855] text-white overflow-hidden border-t border-blue-900/50",
  innerClassName = "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-14 md:py-16",
  layoutClassName = "flex flex-col lg:flex-row lg:items-center justify-between gap-8",
  textClassName = "max-w-xl",
  titleClassName = "text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight",
  descriptionClassName = "text-blue-100/85 text-xs sm:text-sm leading-relaxed max-w-lg",
  actions = null,
  children = null,
}) {
  return (
    <footer className={sectionClassName}>
      {bgImage && (
        <div
          className={`${bgImageClassName} ${bgImageOpacity}`}
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
      )}
      <div className={scrimClassName} />

      <div className={innerClassName}>
        <div className={layoutClassName}>
          <div className={textClassName}>
            {eyebrow && <Eyebrow label={eyebrow} dark barClassName="w-6" />}
            {title && <h2 className={titleClassName}>{title}</h2>}
            {description && <p className={descriptionClassName}>{description}</p>}
          </div>

          {(actions || children) && (
            <div className="flex items-center gap-3 flex-wrap">
              {actions}
              {children}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
