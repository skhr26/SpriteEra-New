import Link from "next/link";
import { ArrowRight, Download, Phone } from "lucide-react";
import EnquiryTrigger from "./enquiry/EnquiryTrigger";

/**
 * Shared CTA buttons — colors come from brand tokens in globals.css.
 * Sizes follow the home page scale (text-sm lg:text-base, px-6 py-3).
 * Override size via className when needed.
 */

export function WhatsAppIcon({ className = "w-4 h-4 text-emerald-400 fill-current" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

function isEnquiryHref(href) {
  if (!href) return false;
  return (
    href === "/contact" ||
    href === "#quote" ||
    (href.startsWith("#") && /enquiry/i.test(href))
  );
}

function CtaLink({ href, external = false, download = false, className = "", children }) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  if (download) {
    return (
      <a href={href} download className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

/** Solid brand-blue button (primary actions).
 *  size="lg" renders a more prominent variant used in page heroes. */
export function PrimaryButton({ href, label, className = "", arrow = true, type = null, onClick = null, size = "md", enquiry = false, source }) {
  const cls = `${size === "lg"
    ? "px-7 py-3.5 text-sm md:text-base font-semibold"
    : "px-6 py-3 text-sm lg:text-base font-medium"
    } bg-brand-blue hover:bg-brand-blue-hover text-white rounded lg:rounded-md transition shadow-lg inline-flex items-center gap-1.5 cursor-pointer ${className}`;
  if (enquiry || isEnquiryHref(href)) {
    return (
      <EnquiryTrigger source={source} className={cls}>
        <span>{label}</span>
        {arrow && <ArrowRight className="size-5.5" strokeWidth={1.5} />}
      </EnquiryTrigger>
    );
  }
  if (!href) {
    return (
      <button type={type || "button"} onClick={onClick} className={cls}>
        <span>{label}</span>
        {arrow && <ArrowRight className="size-5.5" strokeWidth={1.5} />}
      </button>
    );
  }
  return (
    <CtaLink href={href} className={cls}>
      <span>{label}</span>
      {arrow && <ArrowRight className="size-5.5" strokeWidth={1.5} />}
    </CtaLink>
  );
}

/** White button (secondary actions, on dark or colored backgrounds) */
export function SecondaryButton({ href, label, className = "", size = "md", download = false, icon = null, enquiry = false, source }) {
  const cls = `${size === "lg"
    ? "px-7 py-3.5 text-sm md:text-base font-semibold"
    : "px-6 py-3 text-sm lg:text-base font-medium"
    } bg-white hover:bg-gray-100 text-brand-navy rounded lg:rounded-md transition shadow-lg inline-flex items-center gap-1.5 cursor-pointer ${className}`;
  if (enquiry || isEnquiryHref(href)) {
    return (
      <EnquiryTrigger source={source} className={cls}>
        <span>{label}</span>
        {icon || <ArrowRight className="size-5.5" strokeWidth={1.5} />}
      </EnquiryTrigger>
    );
  }
  return (
    <CtaLink
      href={href}
      download={download}
      className={cls}
    >
      <span>{label}</span>
      {icon || <ArrowRight className="size-5.5" strokeWidth={1.5} />}
    </CtaLink>
  );
}

/** Translucent navy ghost button (footer / dark banner secondary actions) */
export function GhostButton({ href, label, icon = null, external = false, download = false, className = "", enquiry = false, source }) {
  const cls = `bg-brand-navy-pill/60 hover:bg-brand-navy-pill text-white border border-blue-400/40 hover:border-blue-400 px-6 py-2.5 rounded-md font-semibold text-xs sm:text-sm lg:text-base transition-all inline-flex items-center justify-center gap-2 cursor-pointer ${className}`;
  if (enquiry || isEnquiryHref(href)) {
    return (
      <EnquiryTrigger source={source} className={cls}>
        {icon}
        <span>{label}</span>
      </EnquiryTrigger>
    );
  }
  return (
    <CtaLink
      href={href}
      external={external}
      download={download}
      className={cls}
    >
      {icon}
      <span>{label}</span>
    </CtaLink>
  );
}

export function WhatsAppButton({ href = "https://wa.me/919999999999", label = "WhatsApp Us", className = "" }) {
  return (
    <GhostButton href={href} external label={label} icon={<WhatsAppIcon className="w-4 h-4 text-emerald-400 fill-current" />} className={className} />
  );
}

export function CallButton({ href = "tel:+919999999999", label = "Call Now", className = "" }) {
  return (
    <GhostButton
      href={href}
      label={label}
      className={className}
      icon={<Phone className="w-4 h-4 text-sky-300" strokeWidth={2} />}
    />
  );
}

export function CatalogueButton({ href = "/catalogue.pdf", label = "Download Catalogue", className = "" }) {
  return (
    <GhostButton href={href} download label={label} icon={<Download className="w-4 h-4 text-blue-200" strokeWidth={2} />} className={className} />
  );
}
