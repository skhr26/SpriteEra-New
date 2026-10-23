import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import SectionHeading from "../../components/SectionHeading";
import { PrimaryButton, SecondaryButton } from "../../components/Buttons";

export const metadata = {
  title: "Lighting Solutions for Industrial, Commercial & Outdoor Applications | Vajra LED",
  description: "Explore Vajra LED lighting solutions for industrial, warehouse, road, commercial, healthcare, education, petrol pump and solar applications. Find suitable products or request a project quote.",
};

const heroBadges = [
  { label: "Wide Product Range", icon: null, iconType: "check" },
  { label: "Application Support", icon: null, iconType: "check" },
  { label: "Reliable Performance", icon: null, iconType: "check" },
  { label: "Technical Assistance", icon: null, iconType: "check" },
];

const solutionCards = [
  { id: "industrial", title: "Industrial Lighting", desc: "Factories, manufacturing units, workshops.", link: "/solutions/industrial-lighting", iconUrl: "/images/icons/factory.png", imageUrl: "/images/solutions/industrial-lighting.png" },
  { id: "warehouse", title: "Warehouse Lighting", desc: "Warehouses, storage facilities, logistics.", link: "/solutions/warehouse-lighting", iconUrl: "/images/icons/warehouse.png", imageUrl: "/images/solutions/warehouse-lighting.png" },
  { id: "road-street", title: "Road & Street Lighting", desc: "Roads, streets, pathways, highways.", link: "/solutions/road-street-lighting", iconUrl: "/images/icons/road.png", imageUrl: "/images/solutions/road-street-lighting.png" },
  { id: "commercial", title: "Commercial Lighting", desc: "Offices, commercial buildings, retail spaces.", link: "/solutions/commercial-lighting", iconUrl: "/images/icons/commercial.png", imageUrl: "/images/solutions/commercial-lighting.png" },
  { id: "petrol-pump", title: "Petrol Pump Lighting", desc: "Fuel stations, forecourts, service areas.", link: "/solutions/petrol-pump-lighting", iconUrl: "/images/icons/pump.png", imageUrl: "/images/solutions/petrol-pump-lighting.png" },
  { id: "hospital", title: "Hospital Lighting", desc: "Hospitals, clinics, healthcare facilities.", link: "/solutions/hospital-lighting", iconUrl: "/images/icons/hospital.png", imageUrl: "/images/solutions/hospital-lighting.png" },
  { id: "school", title: "School Lighting", desc: "Schools, colleges, educational institutions.", link: "/solutions/school-lighting", iconUrl: "/images/icons/school.png", imageUrl: "/images/solutions/school-lighting.png" },
  { id: "solar", title: "Solar Lighting", desc: "Solar-powered lighting for off-grid applications.", link: "/solutions/solar-lighting", iconUrl: "/images/icons/solar.png", imageUrl: "/images/solutions/solar-lighting.jpg" },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      <Navbar />

      {/* 1. Hero Section (home-page visual language) */}
      <PageHero
        tag="SOLUTIONS"
        title="Lighting Solutions"
        titleHighlight="for Every Application"
        description="From industrial facilities and warehouses to roads, offices and outdoor spaces, explore Vajra LED lighting solutions designed around real-world applications."
        primaryCta={{ label: "Explore Solutions", href: "#solutions" }}
        secondaryCta={{ label: "Get a Project Quote", href: "/contact" }}
        bgImage="/images/hero-bg.png"
        imageOpacity="opacity-50"
        badges={heroBadges}
      />

      {/* 2. Solutions / Application Areas */}
      <section id="solutions" className="py-20 px-4 sm:px-6 md:px-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <SectionHeading
            label="OUR SOLUTIONS"
            title="Find the Right"
            highlight="Lighting Solution"
            description="Every space has different lighting requirements. Explore our application-based solutions to find suitable lighting products for your project."
          />
          <Link href="/solutions" className="text-brand-accent font-medium hover:underline mt-4 md:mt-0 text-sm lg:text-base flex items-center gap-2">
            View All Solutions <ArrowRight className="size-5.5" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutionCards.map((sol) => (
            <div
              key={sol.id}
              className="border border-gray-200/90 rounded-xl overflow-hidden group hover:shadow-[0_5px_15px_rgb(0,0,0,0.12)] transition-all duration-300 bg-white flex flex-col hover:-translate-y-1 shadow-[0_0px_8px_rgba(0,0,0,0.06)]"
            >
              <div className="h-40 bg-gray-100 relative overflow-hidden">
                <Image
                  src={sol.imageUrl}
                  alt={sol.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3 lg:px-2 flex gap-2 flex-grow">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="relative w-14 h-14 rounded-full bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.10)] flex items-center justify-center p-2.5 group-hover:shadow-[0_6px_24px_rgba(0,0,0,0.16)] group-hover:scale-105 transition-all">
                    <Image
                      src={sol.iconUrl}
                      alt={`${sol.title} symbol`}
                      fill
                      sizes="56px"
                      className="object-contain p-2.5"
                    />
                  </div>
                </div>
                <div className="flex flex-col flex-grow pt-2">
                  <h3 className="text-base lg:text-lg font-bold text-brand-navy leading-snug group-hover:text-brand-accent transition-colors flex items-center">
                    {sol.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-[13px] lg:text-sm leading-snug mt-1 line-clamp-2">
                    {sol.desc}
                  </p>
                  <div className="mt-auto pt-3">
                    <Link
                      href={sol.link}
                      className="text-brand-blue font-semibold text-xs lg:text-sm inline-flex items-center gap-1.5 hover:gap-2 transition-all hover:text-brand-blue-hover"
                    >
                      <span>Explore Solution</span>
                      <ArrowRight className="size-5.5" strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Product Recommendation CTA (ConsultationBanner pattern) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 mb-20">
        <div className="relative rounded-2xl overflow-hidden border border-blue-100/70 shadow-sm min-h-[290px] md:min-h-[330px] flex items-center bg-brand-surface">
          <Image
            src="/images/consultation-banner.png"
            alt="Need Help Choosing the Right Solution"
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover object-right select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-surface via-brand-surface/90 to-transparent max-w-xl md:max-w-2xl pointer-events-none" />

          <div className="relative z-10 max-w-lg md:max-w-xl lg:max-w-3xl px-8 md:px-12 py-10">
            <h2 className="text-2xl md:text-[28px] font-bold mb-3 text-brand-navy leading-tight">
              Need Help Choosing the Right Solution?
            </h2>
            <p className="text-gray-600 mb-6 text-xs md:text-sm lg:text-lg max-w-xl leading-snug">
              Tell us about your application and our team can help you identify suitable lighting products for your requirement.
            </p>
            <div className="flex flex-wrap gap-4">
              <PrimaryButton href="/contact" label="Request Product Recommendation" />
              <SecondaryButton href="/contact" label="Talk to a Lighting Expert" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Products */}
      <section className="py-16 px-4 sm:px-6 md:px-8 max-w-[1400px] mx-auto border-t border-gray-100">
        <SectionHeading
          label="FEATURED PRODUCTS"
          title="Featured"
          highlight="Products"
          description="Explore Vajra LED products commonly used across various applications."
        />
      </section>

      {/* 5. Global Footer (Final CTA) */}
      <Footer />
    </div>
  );
}
