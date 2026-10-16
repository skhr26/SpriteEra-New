import Eyebrow from "./Eyebrow";
import { SecondaryCtaButton, WhatsAppIcon } from "./CtaButtons";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-brand-navy-dark text-white overflow-hidden border-t border-blue-900/40">
      {/* Background with modern lighting architectural backdrop & deep blue overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-right md:bg-center pointer-events-none opacity-40 mix-blend-luminosity"
        style={{ backgroundImage: `url('/images/why-vajra-bg.jpg')` }}
      />
      {/* Radiant blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark via-brand-navy/90 to-brand-navy-dark pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 pt-14 md:pt-16 pb-6">
        {/* Top CTA Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-blue-400/20">
          {/* Left Text */}
          <div className="max-w-xl">
            <Eyebrow label="LET'S WORK TOGETHER" dark barClassName="w-6" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
              Have a Lighting Requirement?
            </h2>
            <p className="text-blue-100/80 text-xs sm:text-sm leading-relaxed max-w-lg">
              Whether you need a single product or lighting for a complete project, our team is ready to help.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col gap-3.5 w-full sm:w-auto">
            {/* Top Row: Primary CTA & Talk to Team */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
              <SecondaryCtaButton
                href="/contact"
                label="Get a Project Quote"
                className="w-full sm:w-auto justify-center px-6 py-2.5"
              />

              <a
                href="/contact"
                className="w-full sm:w-auto bg-brand-navy-pill/60 hover:bg-brand-navy-pill text-white border border-blue-400/40 hover:border-blue-400 px-6 py-2.5 rounded-md font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Talk to Our Team</span>
                <svg className="w-3.5 h-3.5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </a>
            </div>

            {/* Bottom Row: Split WhatsApp & Call Now Pill Button */}
            <div className="w-full bg-brand-navy-pill/60 border border-blue-400/40 rounded-md flex items-center divide-x divide-blue-400/30 overflow-hidden text-xs sm:text-sm font-semibold">
              {/* WhatsApp Us */}
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 flex items-center justify-center gap-2 text-white hover:bg-blue-900/40 transition-colors"
              >
                {/* WhatsApp Vector Icon */}
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 fill-current" />
                <span>WhatsApp Us</span>
              </a>

              {/* Call Now */}
              <a
                href="tel:+919999999999"
                className="flex-1 py-2.5 px-4 flex items-center justify-center gap-2 text-white hover:bg-blue-900/40 transition-colors"
              >
                {/* Telephone Vector Icon */}
                <svg className="w-4 h-4 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
