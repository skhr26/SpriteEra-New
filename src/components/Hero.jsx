import Link from "next/link";
import { heroFeatures } from "../data/homeData";

export default function Hero() {
  return (
    <section className="relative bg-[#001E36] text-white overflow-hidden min-h-[500px] flex items-center">
      {/* Background Image - Clean warehouse version */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.png" 
          alt="Industrial Hero Background" 
          className="w-full h-full object-cover opacity-60 object-right" 
        />
        {/* Subtle gradient overlay to make text highly readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001A33] via-[#001A33]/80 to-transparent"></div>
      </div> 
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 py-24 md:py-32 w-full">
        <p className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-4 flex items-center">
          <span className="w-6 h-px bg-blue-500 mr-3"></span> SOLUTIONS
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 max-w-3xl leading-[1.08] tracking-tight drop-shadow-lg">
          Lighting Solutions <br/> for <span className="text-[#3399ff]">Every Application</span>
        </h1>
        <p className="max-w-xl text-lg text-gray-200 mb-8 drop-shadow-md">
          From industrial facilities and warehouses to roads, offices and outdoor spaces, explore lighting solutions designed around real-world applications.
        </p>
        <div className="flex flex-wrap gap-4 mb-16">
          <Link href="#solutions" className="bg-[#0056b3] hover:bg-blue-600 text-white px-6 py-3 rounded text-sm font-semibold transition shadow-lg">
            Explore Solutions →
          </Link>
          <Link href="#quote" className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded text-sm font-semibold transition shadow-lg">
            Get a Project Quote →
          </Link>
        </div>
        
        <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-sm font-semibold text-gray-100">
          {heroFeatures.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-x-8">
              <div className="flex items-center gap-3 drop-shadow-md">
                <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                  <img
                    src={feat.icon}
                    className="max-w-full max-h-full object-contain mix-blend-screen scale-110"
                    alt={feat.label}
                  />
                </div>
                <span className="tracking-wide text-xs sm:text-sm">{feat.label}</span>
              </div>
              {idx < heroFeatures.length - 1 && (
                <span
                  className="h-5 w-px bg-white/30 hidden sm:inline-block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
