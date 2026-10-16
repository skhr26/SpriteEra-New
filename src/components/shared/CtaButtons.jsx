"use client";

import Link from "next/link";
import { ArrowRight, Download, Phone } from "lucide-react";

/**
 * Shared CTA button primitives.
 * Replaces the ~9 copy-pasted blue/white/ghost <Link>/<a> + ArrowRight
 * blocks and the 3x duplicated WhatsApp SVG path.
 */

export function WhatsAppIcon({ className = "w-4 h-4 text-[#25D366] fill-current" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

const SIZE_MAP = {
  md: "px-6 py-3 text-xs sm:text-sm",
  lg: "px-7 py-3.5 text-sm md:text-base",
};

function BaseCtaLink({ href, label, className = "", icon, external = false, download = false }) {
  if (!href || !label) return null;

  const content = (
    <>
      <span>{label}</span>
      {icon}
    </>
  );

  const cls = `transition-all inline-flex items-center gap-2 whitespace-nowrap ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    );
  }

  if (download) {
    return (
      <a href={href} download className={cls}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}

/** Solid brand-blue primary CTA (PageHero, Banners, Recommendation card, etc.) */
export function PrimaryCtaButton({ href, label, size = "md", className = "" }) {
  return (
    <BaseCtaLink
      href={href}
      label={label}
      className={`bg-brand-blue hover:bg-brand-blue-hover text-white rounded-md font-bold shadow-sm hover:shadow-md ${SIZE_MAP[size] || SIZE_MAP.md} ${className}`}
      icon={<ArrowRight className="w-4 h-4" strokeWidth={2} />}
    />
  );
}

/** White secondary CTA (PageHero secondary, side cards, quote buttons) */
export function SecondaryCtaButton({ href, label, size = "md", className = "" }) {
  return (
    <BaseCtaLink
      href={href}
      label={label}
      className={`bg-white hover:bg-gray-100 text-brand-navy rounded-md font-bold shadow-sm hover:shadow-md ${SIZE_MAP[size] || SIZE_MAP.md} ${className}`}
      icon={<ArrowRight className="w-4 h-4 text-brand-navy" strokeWidth={2} />}
    />
  );
}

/** Translucent dark-ghost CTA used on navy banners (WhatsApp / Call / catalogue) */
export function GhostDarkCtaButton({
  href,
  label,
  icon = null,
  external = false,
  download = false,
  className = "px-5 py-3.5 rounded-lg text-xs sm:text-sm font-semibold",
}) {
  return (
    <BaseCtaLink
      href={href}
      label={label}
      external={external}
      download={download}
      className={`bg-[#002855]/70 hover:bg-[#002855] text-white border border-blue-400/40 hover:border-blue-400 backdrop-blur-sm ${className}`}
      icon={icon}
    />
  );
}

export function WhatsAppCtaButton({ href = "https://wa.me/919999999999", label = "WhatsApp Us", className = "" }) {
  return (
    <GhostDarkCtaButton
      href={href}
      label={label}
      external
      className={`px-5 py-3.5 rounded-lg text-xs sm:text-sm font-semibold ${className}`}
      icon={<WhatsAppIcon />}
    />
  );
}

export function CallCtaButton({ href = "tel:+919999999999", label = "Call Now", className = "" }) {
  return (
    <GhostDarkCtaButton
      href={href}
      label={label}
      className={`px-5 py-3.5 rounded-lg text-xs sm:text-sm font-semibold ${className}`}
      icon={<Phone className="w-3.5 h-3.5 text-sky-300" strokeWidth={2} />}
    />
  );
}

export function DownloadCtaButton({ href = "/catalogue.pdf", label = "Download Catalogue", className = "" }) {
  return (
    <GhostDarkCtaButton
      href={href}
      label={label}
      download
      className={`px-4 sm:px-5 py-3 sm:py-3.5 rounded-lg text-xs sm:text-sm font-semibold ${className}`}
      icon={<Download className="w-4 h-4 text-blue-200" strokeWidth={2} />}
    />
  );
}

/** Small inline "Explore → / View Product →" card link (SolutionCard, ProductCard, architect categories, FAQ header) */
export function CardCtaLink({ href = "#", label = "Explore", className = "text-xs text-brand-blue hover:text-brand-blue-hover" }) {
  return (
    <Link
      href={href}
      className={`font-semibold inline-flex items-center gap-1.5 hover:gap-2 transition-all ${className}`}
    >
      <span>{label}</span>
      <ArrowRight className="w-4 h-4" strokeWidth={2} />
    </Link>
  );
}
