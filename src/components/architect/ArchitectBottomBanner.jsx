import Link from "next/link";
import { ArrowRight, Download, Phone } from "lucide-react";

export default function ArchitectBottomBanner({ data }) {
  if (!data) return null;
  const {
    title = "Let's Design Better Spaces Together",
    description = "Connect with our team for product support, technical information or project collaboration.",
    bgImage = "/images/architect/architect-footer-banner.jpg"
  } = data;

  return (
    <footer className="relative bg-[#002855] text-white overflow-hidden border-t border-blue-900/50">
      {/* Background Architectural Photo (Feathered clean villa on right) */}
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      {/* Soft gradient blend for small screens */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002855] via-[#002855]/95 md:via-[#002855]/70 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-14">
        {/* Left Column Content: Headline, Description & 4 Buttons Underneath */}
        {/* Left Column Content: Headline, Description & 4 Buttons Underneath */}
        <div className="max-w-3xl lg:max-w-4xl flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white tracking-tight leading-tight mb-2.5">
            {title}
          </h2>
          <p className="text-blue-100/90 text-xs sm:text-sm leading-relaxed mb-6 max-w-xl">
            {description}
          </p>

          {/* 4 Action Buttons strictly in a single horizontal line */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap lg:flex-nowrap">
            {/* 1. Connect With Us */}
            <Link
              href="#enquiry"
              className="bg-white hover:bg-slate-100 text-[#002855] px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg font-bold text-xs sm:text-sm transition-all shadow-md inline-flex items-center gap-2 whitespace-nowrap flex-shrink-0"
            >
              <span>Connect With Us</span>
              <ArrowRight className="w-4 h-4 text-[#002855]" strokeWidth={2.2} />
            </Link>

            {/* 2. Download Catalogue */}
            <a
              href="/catalogue.pdf"
              download
              className="bg-[#002855]/70 hover:bg-[#002855] text-white border border-blue-300/40 hover:border-blue-300 px-4 sm:px-5 py-3 sm:py-3.5 rounded-lg font-semibold text-xs sm:text-sm transition-all inline-flex items-center gap-2 backdrop-blur-sm whitespace-nowrap flex-shrink-0"
            >
              <span>Download Catalogue</span>
              <Download className="w-4 h-4 text-blue-200" strokeWidth={2} />
            </a>

            {/* 3. WhatsApp Us */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#002855]/70 hover:bg-[#002855] text-white border border-blue-300/40 hover:border-blue-300 px-4 sm:px-5 py-3 sm:py-3.5 rounded-lg font-semibold text-xs sm:text-sm transition-all inline-flex items-center gap-2 backdrop-blur-sm whitespace-nowrap flex-shrink-0"
            >
              <svg className="w-4 h-4 text-[#25D366] fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp Us</span>
            </a>

            {/* 4. Call Now */}
            <a
              href="tel:+919999999999"
              className="bg-[#002855]/70 hover:bg-[#002855] text-white border border-blue-300/40 hover:border-blue-300 px-4 sm:px-5 py-3 sm:py-3.5 rounded-lg font-semibold text-xs sm:text-sm transition-all inline-flex items-center gap-2 backdrop-blur-sm whitespace-nowrap flex-shrink-0"
            >
              <Phone className="w-4 h-4 text-sky-300" strokeWidth={2} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
