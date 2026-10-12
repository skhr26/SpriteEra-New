export function ConsultationBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-12 mb-20">
      <div className="relative rounded-2xl overflow-hidden border border-blue-100/70 shadow-sm min-h-[290px] md:min-h-[330px] flex items-center bg-[#eaf3fc]">
        {/* Full Banner Background with Engineer on the right */}
        <img
          src="/images/consultation-banner.png"
          alt="Need Help Choosing the Right Solution"
          className="absolute inset-0 w-full h-full object-cover object-right select-none pointer-events-none"
        />

        {/* Soft gradient fill on the left to ensure crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#eaf3fc] via-[#eaf3fc]/90 to-transparent max-w-xl md:max-w-2xl pointer-events-none" />

        {/* Banner Content */}
        <div className="relative z-10 max-w-lg md:max-w-xl px-8 md:px-12 py-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#001E36] leading-tight">
            Need Help Choosing the Right Solution?
          </h2>
          <p className="text-gray-600 mb-6 text-xs md:text-sm leading-relaxed">
            Tell us about your application and our team will help you find the most suitable lighting products for your requirement.
          </p>
          <button
            type="button"
            className="bg-[#0056b3] hover:bg-blue-700 text-white px-6 py-3 rounded-md text-xs md:text-sm font-semibold transition-all shadow-md hover:shadow-lg inline-flex items-center gap-1.5"
          >
            <span>Request Product Recommendation</span>
            <span className="text-sm">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export function CatalogueBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-12 mb-20">
      <div className="bg-gradient-to-r from-[#d9ebfd] via-[#e5f1fe] to-[#d9ebfd] rounded-2xl px-6 md:px-10 lg:px-14 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-10 border border-blue-100/90 shadow-[0_4px_20px_rgba(0,102,204,0.08)] relative overflow-hidden">
        {/* Left Catalogue Booklet Cover (Shifted slightly left with negative/outer positioning) */}
        <div className="w-48 sm:w-56 md:w-60 lg:w-64 xl:w-72 flex-shrink-0 flex items-center justify-center md:justify-start order-2 md:order-1 md:-ml-4 lg:-ml-6">
          <img
            src="/images/catalog-left.png"
            alt="Vajra LED Catalogue Cover"
            className="w-full max-h-[300px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300 select-none"
          />
        </div>

        {/* Center Content (Expanded and spread out in the center space) */}
        <div className="max-w-md lg:max-w-lg text-center md:text-left order-1 md:order-2 flex-grow z-10 px-2 lg:px-6 py-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3.5 text-[#001E36] tracking-tight leading-tight">
            Explore Our Complete Range
          </h2>
          <p className="text-gray-600 mb-6 text-sm lg:text-base leading-relaxed max-w-md">
            Download the latest Vajra LED catalogue to explore our full range of lighting products and solutions.
          </p>
          <a
            href="/catalogue.pdf"
            download
            className="bg-[#0056b3] hover:bg-[#004494] text-white px-8 py-3.5 rounded-lg text-sm lg:text-base font-semibold transition-all shadow-md hover:shadow-xl inline-flex items-center gap-2.5"
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
        <div className="w-full sm:w-72 md:w-[290px] lg:w-[340px] xl:w-[380px] flex-shrink-0 flex items-center justify-center md:justify-end order-3 md:-mr-4 lg:-mr-6">
          <img
            src="/images/catalog-right.png"
            alt="Vajra LED Catalogue Open Pages"
            className="w-full max-h-[320px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300 select-none"
          />
        </div>
      </div>
    </section>
  );
}
