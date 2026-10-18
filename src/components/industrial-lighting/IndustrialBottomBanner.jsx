import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { WhatsAppButton, CallButton } from "../Buttons";
import { Cog, ClipboardList, FileText, MapPin, ArrowRight } from "lucide-react";

const BADGE_ICONS = {
  gear: <Cog className="w-5 h-5" strokeWidth={1.8} />,
  clipboard: <ClipboardList className="w-5 h-5" strokeWidth={1.8} />,
  document: <FileText className="w-5 h-5" strokeWidth={1.8} />,
  pin: <MapPin className="w-5 h-5" strokeWidth={1.8} />
};

export default function IndustrialBottomBanner({ data }) {
  if (!data) return null;
  const { tag, title, description, quoteCta, whatsappHref, callHref, bgImage, badges } = data;

  return (
    <footer className="relative bg-brand-navy-deep text-white overflow-hidden border-t border-blue-900/40">
      {/* Loading dock background */}
      <Image
        src={bgImage}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover object-right md:object-right-bottom pointer-events-none opacity-80"
      />
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-deep via-brand-navy-deep/85 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 pt-14 md:pt-16 pb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-blue-400/20">
          {/* Left copy */}
          <SectionHeading
            label={tag}
            title={title}
            description={description}
            dark
            className="max-w-xl"
          />

          {/* Action buttons */}
          <div className="flex flex-col gap-3 w-full sm:w-auto">
            <a
              href={quoteCta.href}
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-brand-footer-text px-7 py-3 rounded-md text-sm lg:text-base font-medium transition md:shadow-lg flex items-center justify-center gap-2"
            >
              <span>{quoteCta.label}</span>
              <ArrowRight className="size-5.5" strokeWidth={1.5} />
            </a>

            <div className="flex flex-row items-center gap-2.5 w-full sm:w-auto">
              <WhatsAppButton
                href={whatsappHref}
                label="WhatsApp Us"
                className="flex-1 sm:flex-initial"
              />
              <CallButton
                href={callHref}
                className="flex-1 sm:flex-initial"
              />
            </div>
          </div>
        </div>

        {/* Bottom feature badges strip */}
        <div className="pt-8 pb-3 flex flex-wrap items-center justify-between gap-6 text-sm text-blue-100 font-medium border-t border-blue-400/20 mt-2">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-3">
              <div className="w-6 h-6 flex items-center justify-center text-blue-100">
                {BADGE_ICONS[b.icon]}
              </div>
              <span className="tracking-wide">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
