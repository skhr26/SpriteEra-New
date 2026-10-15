"use client";

import { useRef } from "react";
import { whyVajraFeatures, projectsData } from "../../data/homeData";
import Link from "next/link";
import WhyChooseVajra from "../shared/WhyChooseVajra";
import SectionHeader from "../shared/SectionHeader";
import CarouselNavButtons from "../shared/CarouselNavButtons";

export default function WhyVajraAndProjects() {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* --- WHY VAJRA LED --- */}
      <WhyChooseVajra features={whyVajraFeatures} />

      {/* --- PROJECTS --- */}
      <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <SectionHeader
          label="OUR PROJECTS"
          title="Real-World"
          highlight="Lighting Projects"
          description="Explore how Vajra LED products are used across industrial, commercial and outdoor spaces."
          actionText="View All Projects"
          actionHref="/projects"
        >
          <CarouselNavButtons
            onPrev={() => handleScroll("left")}
            onNext={() => handleScroll("right")}
            prevLabel="Previous Project"
            nextLabel="Next Project"
          />
        </SectionHeader>
        
        {/* Dynamic Project Slider */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4 pt-2 -mx-2 px-2 no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-[calc(20%-13px)] flex-shrink-0"
            >
              <Link
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
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
