import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function IndustrialBottomBanner() {
  return (
    <footer className="relative bg-[#002855] text-white overflow-hidden border-t border-blue-900/50">
      {/* Background Warehouse Loading Dock Photo */}
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat pointer-events-none opacity-85"
        style={{ backgroundImage: `url('/images/solutions/industrial-footer-dock-clean.png')` }}
      />
      {/* Deep Navy Gradient Scrim Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002855] via-[#002855]/95 md:via-[#002855]/75 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-14 md:py-16">
        {/* Main Content: Left text & Right action buttons */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left Text */}
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-widest text-brand-accent-light uppercase mb-2 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-brand-accent-light"></span>
              LET&apos;S WORK TOGETHER
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
              Have an Industrial Lighting Requirement?
            </h2>
            <p className="text-blue-100/85 text-xs sm:text-sm leading-relaxed max-w-lg">
              Whether you need a single product or lighting for a complete project, our team is ready to help.
            </p>
          </div>

          {/* Right Action Buttons in a single horizontal line */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* Primary Get a Project Quote Button */}
            <Link
              href="/contact"
              className="bg-white hover:bg-slate-100 text-[#002855] px-6 py-3.5 rounded-lg font-bold text-xs sm:text-sm transition-all shadow-md inline-flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Get a Project Quote</span>
              <ArrowRight className="w-4 h-4 text-[#002855]" strokeWidth={2.2} />
            </Link>

            {/* WhatsApp Us */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue hover:bg-brand-blue-hover text-white px-5 py-3.5 rounded-lg font-semibold text-xs sm:text-sm transition-all inline-flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
            >
              <svg className="w-4 h-4 text-[#25D366] fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp Us</span>
            </a>

            {/* Call Now */}
            <a
              href="tel:+919999999999"
              className="bg-[#002855]/70 hover:bg-[#002855] text-white border border-blue-400/40 hover:border-blue-400 px-5 py-3.5 rounded-lg font-semibold text-xs sm:text-sm transition-all inline-flex items-center justify-center gap-2 backdrop-blur-sm whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-sky-300" strokeWidth={2} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
