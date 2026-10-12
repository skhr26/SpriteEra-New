import Link from "next/link";
import { solutionsData } from "../data/homeData";

export default function SolutionsGrid() {
  return (
    <section id="solutions" className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10">
        <div>
          <p className="text-xs font-bold tracking-widest text-[#0066cc] uppercase mb-2 flex items-center gap-2">
            <span className="w-5 h-px bg-[#0066cc]"></span>
            OUR SOLUTIONS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#001E36] tracking-tight">
            Find the Right <span className="text-[#0066cc]">Lighting Solution</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl text-sm md:text-base leading-relaxed">
            Every space has different lighting requirements. Explore our application-based solutions to find suitable products for your project.
          </p>
        </div>
        <Link href="/solutions" className="text-[#0066cc] font-semibold hover:underline mt-4 md:mt-0 text-sm">
          View All Solutions →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutionsData.map((sol) => (
          <div
            key={sol.id || sol.title}
            className="border border-gray-200/90 rounded-2xl overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 bg-white flex flex-col hover:-translate-y-1 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
          >
            <div className="h-40 bg-gray-100 relative overflow-hidden">
              <img
                src={sol.imageUrl}
                alt={sol.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 flex gap-4 flex-grow">
              {/* Circular symbol badge with soft outer drop shadow */}
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-14 h-14 rounded-full bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.10)] flex items-center justify-center p-2.5 group-hover:shadow-[0_6px_24px_rgba(0,0,0,0.16)] group-hover:scale-105 transition-all">
                  <img
                    src={sol.iconUrl}
                    alt={`${sol.title} symbol`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Title, description, and action link aligned together in right column */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-base font-bold text-[#001E36] leading-snug group-hover:text-[#0066cc] transition-colors min-h-[2.5rem] flex items-center">
                  {sol.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-[13px] mt-1 leading-relaxed line-clamp-2">
                  {sol.desc}
                </p>
                <div className="mt-auto pt-3">
                  <Link
                    href={sol.link}
                    className="text-[#0056b3] font-semibold text-xs inline-flex items-center gap-1.5 hover:gap-2 transition-all hover:text-blue-700"
                  >
                    <span>Explore Solution</span>
                    <span className="text-sm">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
