import Link from "next/link";
import Image from "next/image";
import { solutionsData } from "../data/homeData";
import SectionHeading from "./SectionHeading";
import { ArrowRight } from "lucide-react";

export default function SolutionsGrid() {
  return (
    <section id="solutions" className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10">
        <SectionHeading
          label="OUR SOLUTIONS"
          title="Find the Right"
          highlight="Lighting Solution"
          description="Every space has different lighting requirements. Explore our application-based solutions to find suitable products for your project."
        />

        <Link href="/solutions" className="text-brand-accent font-medium hover:underline mt-4 md:mt-0 text-sm lg:text-base flex items-center gap-2">
          View All Solutions <ArrowRight className="size-5.5" strokeWidth={1.5} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {solutionsData.map((sol) => (
          <div
            key={sol.id || sol.title}
            className="border border-gray-200/90 rounded-xl overflow-hidden group hover:shadow-[0_5px_15px_rgb(0,0,0,0.12)] transition-all duration-300 bg-white flex flex-col hover:-translate-y-1 shadow-[0_0px_8px_rgba(0,0,0,0.06)]"
          >
            <div className="h-44 lg:h-48 bg-gray-100 relative overflow-hidden">
              <Image
                src={sol.imageUrl}
                alt={sol.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-3 lg:p-3 lg:px-2 flex gap-2 flex-grow">
              {/* Circular symbol badge with soft outer drop shadow */}
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

              {/* Title, description, and action link aligned together in right column */}
              <div className="flex flex-col flex-grow pt-2">
                <h3 className="text-lg lg:text-xl font-bold text-brand-navy leading-snug group-hover:text-brand-accent transition-colors flex items-center">
                  {sol.title}
                </h3>
                <p className="text-gray-500 text-sm lg:text-base leading-snug mt-1 line-clamp-2">
                  {sol.desc}
                </p>
                <div className="mt-auto pt-3">
                  <Link
                    href={sol.link}
                    className="text-brand-blue font-semibold text-sm lg:text-base inline-flex items-center gap-1.5 hover:gap-2 transition-all hover:text-brand-blue-hover"
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
  );
}
