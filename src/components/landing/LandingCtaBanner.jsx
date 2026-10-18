import Image from "next/image";
import { PrimaryButton, SecondaryButton, WhatsAppButton, CallButton } from "../Buttons";

/**
 * Dark bottom CTA banner used as the page footer for landing pages.
 * Configure via data: { title, description, bgImage, primaryCta, secondaryCta }.
 */
export default function LandingCtaBanner({ data }) {
  if (!data) return null;
  const { title, description, bgImage, primaryCta, secondaryCta } = data;

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 py-14 md:py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm md:text-base lg:text-lg leading-snug text-gray-300">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap items-center gap-3 mt-7">
          <PrimaryButton href={primaryCta?.href || "#enquiry"} label={primaryCta?.label || "Request a Quote"} />
          <SecondaryButton href={secondaryCta?.href || "/contact"} label={secondaryCta?.label || "Talk to Our Team"} />
          <WhatsAppButton className="px-5" />
          <CallButton className="px-5" />
        </div>
      </div>
    </footer>
  );
}
