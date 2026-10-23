import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { Headset } from "lucide-react";
import { WhatsAppButton, CallButton } from "./Buttons";
import EnquiryTrigger from "./enquiry/EnquiryTrigger";

export default function Footer() {
  return (
    <footer id="quote" className="relative bg-brand-footer text-white overflow-hidden">
      {/* Background with modern lighting architectural backdrop & deep blue overlay */}
      <Image
        src="/images/why-vajra-bg.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover object-right md:object-center pointer-events-none opacity-40 mix-blend-luminosity"
      />
      {/* Radiant blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-footer via-brand-footer-mid/90 to-brand-footer-dark pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 pt-14 md:pt-16 pb-6">
        {/* Top CTA Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-blue-400/20">

          <SectionHeading
            label="LET'S WORK TOGETHER"
            title=" Have a Lighting Requirement? "
            description=" Whether you need a single product or lighting for a complete project, our team is ready to help."
            className="max-w-xl"
            dark
          />

          {/* Right Action Buttons */}
          <div className="flex flex-col gap-3.5 w-full sm:w-auto">
            {/* Top Row: Primary CTA & Talk to Team */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
              <EnquiryTrigger className="w-full sm:w-auto bg-white hover:bg-gray-100 text-brand-footer-text px-6 py-2.5 rounded-md font-bold text-xs sm:text-sm lg:text-base transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer">
                <span>Get a Project Quote</span>
                <span className="text-base leading-none">→</span>
              </EnquiryTrigger>

              <EnquiryTrigger className="w-full sm:w-auto bg-brand-navy-pill/60 hover:bg-brand-navy-pill text-white border border-blue-400/40 hover:border-blue-400 px-6 py-2.5 rounded-md font-semibold text-xs sm:text-sm lg:text-base transition-all flex items-center justify-center gap-2 cursor-pointer">
                <span>Talk to Our Team</span>
                <Headset className="size-5" strokeWidth={1.5} />
              </EnquiryTrigger>
            </div>

            {/* Bottom Row: Split WhatsApp & Call Now Pill Button */}
            <div className="w-full bg-brand-navy-pill/60 border border-blue-400/40 rounded-md flex items-center divide-x divide-blue-400/30 overflow-hidden text-xs sm:text-sm lg:text-base font-semibold">
              <WhatsAppButton className="flex-1 rounded-none border-0 py-2.5 px-4" />
              <CallButton className="flex-1 rounded-none border-0 py-2.5 px-4" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
