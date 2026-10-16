import { PrimaryCtaButton } from "./CtaButtons";

export function ConsultationBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-12 mb-20 w-full">
      <div className="relative rounded-2xl overflow-hidden border border-blue-100 shadow-[0_4px_20px_rgba(0,102,204,0.06)] min-h-[300px] md:min-h-[340px] flex items-center bg-gradient-to-r from-brand-gradient-start via-brand-gradient-mid to-brand-gradient-end">
        {/* Full Banner Background Graphic: Right-aligned engineer with seamless blend */}
        <div className="absolute top-0 right-0 bottom-0 w-full md:w-3/5 lg:w-1/2 flex justify-end items-end pointer-events-none select-none">
          <img
            src="/images/consultation-engineer-feathered.png"
            alt="Need Help Choosing the Right Solution"
            className="h-full w-auto object-cover object-left md:object-right"
          />
        </div>

        {/* Soft gradient fill on the left to ensure crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gradient-start via-brand-gradient-mid/95 md:via-brand-gradient-mid/80 to-transparent max-w-2xl pointer-events-none" />

        {/* Banner Content */}
        <div className="relative z-10 max-w-lg md:max-w-xl px-8 md:px-12 py-10">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold mb-3 text-brand-navy tracking-tight leading-tight">
            Need Help Choosing the Right Solution?
          </h2>
          <p className="text-gray-600 mb-6 text-xs sm:text-sm md:text-base leading-relaxed">
            Tell us about your application and our team will help you find the most suitable lighting products for your requirement.
          </p>
          <PrimaryCtaButton
            href="/contact"
            label="Request Product Recommendation"
            className="py-3.5 shadow-md hover:shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export function CatalogueBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-12 mb-20">
      <div className="bg-gradient-to-r from-brand-gradient-start via-brand-gradient-mid to-brand-gradient-start rounded-2xl px-6 md:px-10 lg:px-14 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-10 border border-blue-100/90 shadow-[0_4px_20px_rgba(0,102,204,0.08)] relative overflow-hidden">
        {/* Left Catalogue Booklet Cover (Shifted slightly left with negative/outer positioning) */}
        <div className="w-48 sm:w-56 md:w-60 lg:w-64 xl:w-72 flex-shrink-0 flex items-center justify-center md:justify-start order-2 md:order-1 md:-ml-4 lg:-ml-6 py-2">
          <img
            src="/images/catalog-left.png"
            alt="Vajra LED Catalogue Cover"
            className="w-full h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300 select-none"
          />
        </div>

        {/* Center Content (Expanded and spread out in the center space) */}
        <div className="max-w-md lg:max-w-lg text-center md:text-left order-1 md:order-2 flex-grow z-10 px-2 lg:px-6 py-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3.5 text-brand-navy tracking-tight leading-tight">
            Explore Our Complete Range
          </h2>
          <p className="text-gray-600 mb-6 text-sm lg:text-base leading-relaxed max-w-md">
            Download the latest Vajra LED catalogue to explore our full range of lighting products and solutions.
          </p>
          <a
            href="/catalogue.pdf"
            download
            className="bg-brand-blue hover:bg-brand-blue-hover text-white px-8 py-3.5 rounded-lg text-sm lg:text-base font-semibold transition-all shadow-md hover:shadow-xl inline-flex items-center gap-2.5"
          >
            <span>Download Catalogue</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>

        {/* Right Open Catalogue Mockup (Shifted slightly right towards the edge) */}
        <div className="w-full sm:w-72 md:w-[290px] lg:w-[340px] xl:w-[380px] flex-shrink-0 flex items-center justify-center md:justify-end order-3 md:-mr-4 lg:-mr-6 py-2">
          <img
            src="/images/catalog-right.png"
            alt="Vajra LED Catalogue Open Pages"
            className="w-full h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300 select-none"
          />
        </div>
      </div>
    </section>
  );
}
