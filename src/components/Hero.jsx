import Link from "next/link";
import Image from "next/image";
import { heroFeatures } from "../data/homeData";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-brand-navy text-white overflow-hidden min-h-[500px] lg:min-h-[calc(100vh-70px)] flex items-center">
      {/* Background Image - Clean warehouse version */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Industrial Hero Background"
          fill
          sizes="100vw"
          preload
          className="object-cover opacity-60 object-right"
        />
        {/* Subtle gradient overlay to make text highly readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-hero-scrim via-brand-hero-scrim/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 pt-10 pb-5 w-full">
        <p className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-4 flex items-center">
          <span className="w-6 h-[1.5px] bg-white mr-3"></span> SOLUTIONS
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl leading-[1.08] tracking-tight drop-shadow-lg">
          Lighting Solutions <br /> for <span className="text-brand-accent-light">Every Application</span>
        </h1>
        <p className="max-w-2xl text-lg lg:text-xl text-gray-200 mb-8 drop-shadow-md">
          From industrial facilities and warehouses to roads, offices and outdoor spaces, explore lighting solutions designed around real-world applications.
        </p>
        <div className="flex flex-wrap gap-4 mb-16">
          <Link href="#solutions" className="bg-brand-blue hover:bg-brand-blue-hover text-white px-6 py-3 rounded lg:rounded-md text-sm lg:text-base font-medium transition shadow-lg flex gap-1 items-center">
            Explore Solutions <ArrowRight className="size-5.5" strokeWidth={1.5} />
          </Link>
          <Link href="#quote" className="bg-white hover:bg-gray-100 text-brand-navy px-6 py-3 rounded lg:rounded-md text-sm lg:text-base font-medium transition shadow-lg flex gap-1 items-center">
            Get a Project Quote <ArrowRight className="size-5.5" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-sm font-semibold text-gray-100 border-t border-white/10 pt-10">
          {heroFeatures.map((feat, idx) => {
            const Icon = feat.icon;

            return (
              <div key={feat.label} className="flex items-center gap-x-8">
                <div className="flex items-center gap-3 drop-shadow-md">
                  <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                    {Icon && <Icon className="size-5 lg:size-8 text-brand-accent-light" />}
                  </div>

                  <span className="tracking-wide text-xs sm:text-sm lg:text-base">
                    {feat.label}
                  </span>
                </div>

                {idx < heroFeatures.length - 1 && (
                  <span
                    className="h-5 w-[1.5px] bg-white/80 hidden sm:inline-block"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
