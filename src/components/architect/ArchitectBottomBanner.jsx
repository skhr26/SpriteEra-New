import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { WhatsAppButton, CallButton, CatalogueButton } from "../Buttons";

export default function ArchitectBottomBanner({ data }) {
  if (!data) return null;
  const {
    title = "Let's Design Better Spaces Together",
    description = "Connect with our team for product support, technical information or project collaboration.",
    bgImage = "/images/architect/architect-footer-banner.jpg"
  } = data;

  return (
    <footer className="relative bg-brand-navy text-white overflow-hidden border-t border-blue-900/40">
      {/* Background Architectural Photo */}
      <Image
        src={bgImage}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover object-right md:object-center pointer-events-none opacity-60"
      />
      {/* Smooth navy gradient so the copy stays readable on the left */}
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

        {/* Action Buttons — single row */}
        <div className="flex flex-wrap md:flex-nowrap items-center gap-3 mt-7">
          <a
            href="#enquiry"
            className="bg-white hover:bg-gray-100 text-brand-navy px-5 py-3 rounded lg:rounded-md text-sm lg:text-base font-medium transition shadow-lg inline-flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Connect With Us</span>
            <ArrowRight className="size-5.5 text-brand-blue" strokeWidth={1.5} />
          </a>

          <CatalogueButton className="px-5" />
          <WhatsAppButton className="px-5" />
          <CallButton className="px-5" />
        </div>
      </div>
    </footer>
  );
}
