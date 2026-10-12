import { footerFeatures } from "../data/homeData";

export default function Footer() {
  return (
    <footer className="relative bg-[#022044] text-white overflow-hidden border-t border-blue-900/40">
      {/* Background with modern lighting architectural backdrop & deep blue overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-right md:bg-center pointer-events-none opacity-40 mix-blend-luminosity"
        style={{ backgroundImage: `url('/images/why-vajra-bg.jpg')` }}
      />
      {/* Radiant blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#012248] via-[#023572]/90 to-[#03234d] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 pt-14 md:pt-16 pb-6">
        {/* Top CTA Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-blue-400/20">
          {/* Left Text */}
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-widest text-[#4fa3ff] uppercase mb-2 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#4fa3ff]"></span>
              LET&apos;S WORK TOGETHER
            </p>
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
              <a
                href="/contact"
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#022d64] px-6 py-2.5 rounded-md font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Get a Project Quote</span>
                <span className="text-base leading-none">→</span>
              </a>

              <a
                href="/contact"
                className="w-full sm:w-auto bg-[#022754]/60 hover:bg-[#022754] text-white border border-blue-400/40 hover:border-blue-400 px-6 py-2.5 rounded-md font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Talk to Our Team</span>
                <svg className="w-3.5 h-3.5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </a>
            </div>

            {/* Bottom Row: Split WhatsApp & Call Now Pill Button */}
            <div className="w-full bg-[#022754]/60 border border-blue-400/40 rounded-md flex items-center divide-x divide-blue-400/30 overflow-hidden text-xs sm:text-sm font-semibold">
              {/* WhatsApp Us */}
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 flex items-center justify-center gap-2 text-white hover:bg-blue-900/40 transition-colors"
              >
                {/* WhatsApp Vector Icon */}
                <svg className="w-4 h-4 text-emerald-400 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
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

        {/* Bottom Feature Badges Bar */}
        <div className="pt-8 pb-3 flex flex-wrap items-center justify-between gap-6 text-sm text-blue-100 font-medium border-t border-blue-400/20 mt-2">
          {/* 1. Quick Response */}
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-sky-400 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="tracking-wide">Quick Response</span>
          </div>

          {/* 2. Application Guidance */}
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-sky-400 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="tracking-wide">Application Guidance</span>
          </div>

          {/* 3. Project Support */}
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-sky-400 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="tracking-wide">Project Support</span>
          </div>

          {/* 4. Pan India Supply */}
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-sky-400 stroke-current" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="tracking-wide">Pan India Supply</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
