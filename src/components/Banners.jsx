import Image from "next/image";
import { PrimaryButton } from "./Buttons";
import { Download } from "lucide-react";

export function ConsultationBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-12 mb-20">
      <div className="relative rounded-2xl overflow-hidden border border-blue-100/70 shadow-sm min-h-[290px] md:min-h-[330px] flex items-center bg-brand-surface">
        {/* Full Banner Background with Engineer on the right */}
        <Image
          src="/images/consultation-banner.png"
          alt="Need Help Choosing the Right Solution"
          fill
          sizes="(max-width: 1280px) 100vw, 1200px"
          className="object-cover object-right select-none pointer-events-none"
        />

        {/* Soft gradient fill on the left to ensure crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-surface via-brand-surface/90 to-transparent max-w-xl md:max-w-2xl pointer-events-none" />

        {/* Banner Content */}
        <div className="relative z-10 max-w-lg md:max-w-xl lg:max-w-3xl px-8 md:px-12 py-10">
          <h2 className="text-2xl md:text-[28px] font-bold mb-3 text-brand-navy leading-tight">
            Need Help Choosing the Right Solution?
          </h2>
          <p className="text-gray-600 mb-6 text-xs md:text-sm lg:text-lg max-w-xl leading-snug">
            Tell us about your application and our team will help you find the most suitable lighting products for your requirement.
          </p>
          <PrimaryButton href="/contact" label="Request Product Recommendation" />
        </div>
      </div>
    </section>
  );
}

export function CatalogueBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-12 mb-20">
      <div className="bg-gradient-to-r from-brand-gradient-start via-brand-gradient-mid to-brand-gradient-start rounded-2xl px-6 md:px-10 lg:px-14 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-6 border border-blue-100/90 shadow-[0_4px_20px_rgba(0,102,204,0.08)] relative overflow-hidden">
        {/* Left Catalogue Booklet Cover (Shifted slightly left with negative/outer positioning) */}
        <div className="w-48 sm:w-56 md:w-60 lg:w-64 xl:w-70 flex-shrink-0 flex items-center justify-center md:justify-start order-2 md:order-1 md:-ml-4 lg:-ml-6">
          <Image
            src="/images/catalog-left.png"
            alt="Vajra LED Catalogue Cover"
            width={748}
            height={674}
            sizes="(max-width: 768px) 12rem, 16rem"
            className="w-full h-auto max-h-[250px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300 select-none"
          />
        </div>

        {/* Center Content (Expanded and spread out in the center space) */}
        <div className="max-w-full lg:max-w-full text-center md:text-left order-1 md:order-2 flex-grow z-10 px-2 lg:px-0 py-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2.5 tracking-tight text-brand-navy">
            Explore Our Complete Range
          </h2>
          <p className="text-gray-600 mb-6 text-sm lg:text-lg leading-snug max-w-md">
            Download the latest Vajra LED catalogue to explore our full range of lighting products and solutions.
          </p>
          <a
            href="/catalogue.pdf"
            download
            className="bg-brand-blue hover:bg-brand-blue-hover text-white px-8 py-3.5 rounded-md text-sm lg:text-base font-medium transition-all shadow-md hover:shadow-xl inline-flex items-center gap-2.5"
          >
            <span>Download Catalogue</span>
            <Download />
          </a>
        </div>

        {/* Right Open Catalogue Mockup (Shifted slightly right towards the edge) */}
        <div className="w-full sm:w-72 md:w-[290px] lg:w-[340px] xl:w-[350px] flex-shrink-0 flex items-center justify-center md:justify-end order-3 md:-mr-4 lg:-mr-6">
          <Image
            src="/images/catalog-right.png"
            alt="Vajra LED Catalogue Open Pages"
            width={1004}
            height={682}
            sizes="(max-width: 768px) 100vw, 22rem"
            className="w-full h-auto max-h-[320px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300 select-none"
          />
        </div>
      </div>
    </section>
  );
}
