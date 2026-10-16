import Link from "next/link";
import LeadCtaBanner from "../shared/LeadCtaBanner";
import { SecondaryCtaButton, CallCtaButton, WhatsAppIcon } from "../shared/CtaButtons";

export default function IndustrialBottomBanner() {
  return (
    <LeadCtaBanner
      eyebrow="LET'S WORK TOGETHER"
      title="Have an Industrial Lighting Requirement?"
      description="Whether you need a single product or lighting for a complete project, our team is ready to help."
      bgImage="/images/solutions/industrial-footer-dock-clean.png"
      bgImageClassName="absolute inset-0 bg-cover bg-right bg-no-repeat pointer-events-none opacity-85"
      scrimClassName="absolute inset-0 bg-gradient-to-r from-[#002855] via-[#002855]/95 md:via-[#002855]/75 to-transparent pointer-events-none"
      actions={
        <>
          <SecondaryCtaButton
            href="/contact"
            label="Get a Project Quote"
            className="rounded-lg px-6 py-3.5"
          />
          <Link
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-blue hover:bg-brand-blue-hover text-white px-5 py-3.5 rounded-lg font-semibold text-xs sm:text-sm transition-all inline-flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366] fill-current" />
            <span>WhatsApp Us</span>
          </Link>
          <CallCtaButton className="rounded-lg backdrop-blur-sm" />
        </>
      }
    />
  );
}
