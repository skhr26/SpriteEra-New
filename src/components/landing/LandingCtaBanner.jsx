import Image from "next/image";
import { Download } from "lucide-react";
import { PrimaryButton, SecondaryButton, WhatsAppButton, CallButton } from "../Buttons";

/**
 * Dark bottom CTA banner used as the page footer for landing pages.
 * Configure via data: { title, titleHighlight, titleSuffix, description, bgImage, primaryCta, secondaryCta }.
 */
export default function LandingCtaBanner({ data }) {
  if (!data) return null;
  const {
    tag, title, titleHighlight, titleSuffix, description, bgImage,
    primaryCta, secondaryCta, callFirst = false
  } = data;

  return (
    <footer className="relative bg-brand-navy text-white overflow-hidden border-t border-blue-900/40">
      <Image
        src={bgImage}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover object-right md:object-center pointer-events-none opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/40 md:to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-16">
        <div className="max-w-2xl">
          {tag && (
            <p className="text-xs font-bold tracking-widest text-brand-accent-light uppercase mb-3 flex items-center">
              <span className="w-5 h-[1.5px] bg-brand-accent-light mr-2"></span>
              {tag}
            </p>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold tracking-tight text-white">
            {title}
            {titleHighlight && (
              <span className="text-brand-accent-light">{titleHighlight}</span>
            )}
            {titleSuffix}
          </h2>
          <p className="mt-3 max-w-2xl text-sm md:text-base lg:text-lg leading-snug text-gray-300">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap items-center gap-3 mt-7">
          {primaryCta && (
            primaryCta.variant === "white" ? (
              <SecondaryButton href={primaryCta.href} label={primaryCta.label} />
            ) : (
              <PrimaryButton href={primaryCta.href} label={primaryCta.label} />
            )
          )}
          {secondaryCta && (
            <SecondaryButton
              href={secondaryCta.href}
              label={secondaryCta.label}
              download={secondaryCta.download}
              icon={secondaryCta.download ? <Download className="size-5.5" strokeWidth={1.5} /> : null}
            />
          )}
          {callFirst ? (
            <>
              <CallButton className="px-5" />
              <WhatsAppButton className="px-5" />
            </>
          ) : (
            <>
              <WhatsAppButton className="px-5" />
              <CallButton className="px-5" />
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
