import { ChevronLeft, ChevronRight } from "lucide-react";
import { whyVajraFeatures, projectsData } from "../data/homeData";
import Link from "next/link";

export default function WhyVajraAndProjects() {
  return (
    <>
      {/* --- WHY VAJRA LED --- */}
      <section className="relative bg-[#06172d] text-white py-20 md:py-24 px-4 md:px-12 overflow-hidden">
        {/* Architectural background with illuminated building on the right */}
        <img
          src="/images/why-vajra-bg.jpg"
          alt="Why Choose Vajra LED"
          className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none"
        />
        {/* Deep navy gradient on left fading towards building on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06172d] via-[#06172d]/90 md:via-[#06172d]/80 to-[#06172d]/30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Why Choose <span className="text-[#0088ff]">Vajra LED</span>
          </h2>
          <p className="text-gray-200 max-w-2xl mb-16 text-base sm:text-lg md:text-xl leading-relaxed font-normal">
            Reliable products, application support and a customer-first approach for your lighting projects.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 lg:gap-12">
            {whyVajraFeatures.map((feature) => (
              <div key={feature.id || feature.title} className="group flex flex-col items-start">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/25 bg-white/10 backdrop-blur-md flex items-center justify-center mb-5 transition-all group-hover:scale-110 shadow-[0_6px_24px_rgba(0,0,0,0.3)] group-hover:border-blue-400">
                  <img
                    src={feature.iconUrl}
                    alt={feature.title}
                    className="w-9 h-9 sm:w-11 sm:h-11 object-contain mix-blend-screen"
                  />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-white mb-2 leading-snug">{feature.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <div>
            <p className="text-xs font-bold tracking-widest text-[#0066cc] uppercase mb-2 flex items-center gap-2">
              <span className="w-5 h-px bg-[#0066cc]"></span>
              OUR PROJECTS
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#001E36] tracking-tight">
              Real-World <span className="text-[#0066cc]">Lighting Projects</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl text-sm md:text-base leading-relaxed">
              Explore how Vajra LED products are used across industrial, commercial and outdoor spaces.
            </p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0 items-center">
            <Link href="/projects" className="text-[#0066cc] font-semibold hover:underline text-sm mr-4 flex items-center gap-1">
              <span>View All Projects</span>
              <span>→</span>
            </Link>
            <button
              aria-label="Previous Project"
              className="w-10 h-10 border border-gray-200/90 rounded-full flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              aria-label="Next Project"
              className="w-10 h-10 border border-gray-200/90 rounded-full flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md active:scale-95"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        
        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {projectsData.map((project) => (
            <Link
              key={project.id}
              href={project.link || "#"}
              className="group block relative h-40 bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={project.imageUrl}
                alt={project.alt || project.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                <span className="text-[10px] text-blue-300 font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <p className="text-white text-xs font-semibold line-clamp-1">
                  {project.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
