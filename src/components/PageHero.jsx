import Link from "next/link";
import Image from "next/image";
import {
  Box, PenTool, Cog, Truck, Users, ShieldCheck, FileText,
  Lightbulb, PencilRuler, Check, Tag, Boxes, BadgeCheck, Headset,
  Megaphone, TrendingUp
} from "lucide-react";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import { Fragment } from "react";

const ICON_MAP = {
  box: Box,
  pen: PenTool,
  gear: Cog,
  truck: Truck,
  users: Users,
  shield: ShieldCheck,
  file: FileText,
  lightbulb: Lightbulb,
  ruler: PencilRuler,
  check: Check,
  tag: Tag,
  boxes: Boxes,
  badgeCheck: BadgeCheck,
  headset: Headset,
  megaphone: Megaphone,
  trending: TrendingUp,
};

/**
 * Shared page hero — home-page visual language: navy bg, right-aligned
 * image, gradient scrim, breadcrumb, tag bar, big headline with colored
 * highlight, dual CTAs and a feature badge strip with thin dividers.
 */
export default function PageHero({
  breadcrumbs = [],
  tag,
  title,
  titleHighlight,
  description,
  primaryCta,
  secondaryCta,
  bgImage,
  badges = [],
  badgesInline = false,
  minHeight = "min-h-[420px] lg:min-h-[calc(100vh-70px)]",
  imageOpacity = "opacity-60",
  imageWrapperClassName = "absolute inset-0 z-0",
  titleClassName = "max-w-3xl",
  highlightBlock = false,
  highlightFirst = false,
  className = "",
}) {
  return (
    <section className={`relative bg-brand-navy text-white overflow-hidden flex items-center ${minHeight} ${className}`}>
      {bgImage && (
        <div className={imageWrapperClassName}>
          <Image
            src={bgImage}
            alt=""
            fill
            sizes="100vw"
            preload
            className={`object-cover object-right ${imageOpacity}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-hero-scrim via-brand-hero-scrim/20 to-transparent" />
        </div>
      )}

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 pt-10 pb-5 w-full">
        {breadcrumbs.length > 0 && (
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

        {tag && (
          <p className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-4 flex items-center">
            <span className="w-6 h-[1.5px] bg-white mr-3"></span> {tag}
          </p>
        )}

        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${titleClassName} leading-[1.08] tracking-tight drop-shadow-lg`}>
          {highlightFirst && titleHighlight ? (
            <>
              <span className="text-brand-accent-light">{title}</span>{" "}
              <span className="text-white">{titleHighlight}</span>
            </>
          ) : (
            <>
              {title}{" "}
              {titleHighlight && (
                <span className={`text-brand-accent-light ${highlightBlock ? "block" : ""}`}>
                  {titleHighlight}
                </span>
              )}
            </>
          )}
        </h1>

        {description && (
          <p className="max-w-2xl text-lg lg:text-xl text-gray-200 mb-8 drop-shadow-md">
            {description}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap gap-4 mb-16">
            {primaryCta && (
              <PrimaryButton href={primaryCta.href} label={primaryCta.label} size="lg" />
            )}
            {secondaryCta && (
              <SecondaryButton href={secondaryCta.href} label={secondaryCta.label} size="lg" />
            )}
          </div>
        )}

        {badges.length > 0 && (
          <div
            className={`flex flex-wrap items-center gap-y-4 text-sm font-semibold text-gray-100 border-t border-white/10 pt-10 ${
              badgesInline ? "gap-x-6 lg:flex-nowrap lg:justify-between lg:gap-x-0" : "gap-x-8"
            }`}
          >
            {badges.map((feat, idx) => {
              const imgIcon = feat.iconUrl || (typeof feat.icon === "string" ? feat.icon : null);
              const Icon = typeof feat.icon === "string" ? null : feat.icon || ICON_MAP[feat.iconType] || null;
              return (
                <Fragment key={feat.label || idx}>
                  <div className="flex items-center gap-3 drop-shadow-md">
                    <div className="w-11 h-11 rounded-full border border-brand-accent-light/50 bg-brand-accent-light/10 flex items-center justify-center flex-shrink-0">
                      {imgIcon ? (
                        <Image
                          src={imgIcon}
                          alt={feat.label}
                          width={20}
                          height={20}
                          className="w-5 h-5 max-w-full max-h-full object-contain"
                        />
                      ) : (
                        Icon && <Icon className="size-5 lg:size-6 text-brand-accent-light" strokeWidth={1.6} />
                      )}
                    </div>
                    <span
                      className={`tracking-wide whitespace-nowrap ${
                        badgesInline ? "text-xs sm:text-sm" : "text-xs sm:text-sm lg:text-base"
                      }`}
                    >
                      {feat.label}
                    </span>
                  </div>
                  {idx < badges.length - 1 && (
                    <span className="h-5 w-[1.5px] bg-white/80 hidden sm:inline-block" aria-hidden="true" />
                  )}
                </Fragment>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
