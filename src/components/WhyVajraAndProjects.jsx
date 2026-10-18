"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { whyVajraFeatures, projectsData } from "../data/homeData";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { ArrowRight } from "lucide-react";

export default function WhyVajraAndProjects() {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, []);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const step = card ? card.getBoundingClientRect().width + 12 : 240;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <>
      {/* --- WHY VAJRA LED --- */}
      <section className="relative bg-brand-night text-white py-20 md:py-24 px-4 md:px-12 overflow-hidden">
        {/* Architectural background with illuminated building on the right */}
        <Image
          src="/images/why-vajra-bg.jpg"
          alt="Why Choose Vajra LED"
          fill
          sizes="100vw"
          className="object-cover object-right pointer-events-none select-none"
        />
        {/* Deep navy gradient on left fading towards building on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-night via-brand-night/90 md:via-brand-night/80 to-brand-night/20 pointer-events-none" />

        <div className="relative z-10 px-4 md:px-12 max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Why Choose <span className="text-brand-accent-glow">Vajra LED</span>
          </h2>
          <p className="text-gray-200 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed font-normal">
            Reliable products, application support and a customer-first approach for your lighting projects.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 lg:gap-12 pt-10 max-w-[90%]">
            {whyVajraFeatures.map((feature, index) => {
              const Icon = feature.iconUrl
              return (
                <div key={feature.id || feature.title} className="group flex flex-col items-start">
                  <div className="size-16 sm:size-18 rounded-full border border-white/25 bg-white/10 backdrop-blur-md flex items-center justify-center mb-5 transition-all group-hover:scale-110 shadow-[0_6px_24px_rgba(0,0,0,0.3)] group-hover:border-blue-400">
                    <Icon
                      className={`size-10 ${index === 0 ? "text-brand-blue" : "text-white"}`}
                      strokeWidth={1.2}
                    />
                  </div>
                  <h3 className="font-medium text-base sm:text-lg text-white mb-1 leading-snug">{feature.title}</h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-tight">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <SectionHeading
            label="OUR PROJECTS"
            title="Real-World "
            highlight="Lighting Projects"
            description="Explore how Vajra LED products are used across industrial, commercial and outdoor spaces."
            className="max-w-xl"
          />
          <div className="flex gap-4 mt-4 md:mt-0 items-center">
            <Link href="/projects" className="text-brand-accent font-medium hover:underline text-sm lg:text-base flex items-center gap-2">
              View All Projects
              <ArrowRight className="size-5.5" strokeWidth={1.5} />
            </Link>
            <button
              aria-label="Previous Project"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              className={`w-10 h-10 border border-gray-200/90 rounded-full flex items-center justify-center transition-all shadow-[0_2px_8px_rgba(0,0,0,0.06)] active:scale-95 ${
                canPrev
                  ? "hover:bg-gray-50 text-gray-600 hover:shadow-md cursor-pointer"
                  : "text-gray-300 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              aria-label="Next Project"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              className={`w-10 h-10 border border-gray-200/90 rounded-full flex items-center justify-center transition-all shadow-[0_2px_8px_rgba(0,0,0,0.06)] active:scale-95 ${
                canNext
                  ? "hover:bg-gray-50 text-gray-600 hover:shadow-md cursor-pointer"
                  : "text-gray-300 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sliding project track (scroll-snap carousel) */}
        <div
          ref={trackRef}
          onScroll={updateArrows}
          className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              data-card
              className="snap-start shrink-0 w-[70%] sm:w-[calc(33.333%-8px)] md:w-[calc(25%-9px)] lg:w-[calc(20%-9.6px)]"
            >
              <Link
                href={project.link || "#"}
                className="group block relative h-48 lg:h-56 bg-gray-100 rounded-lg overflow-hidden shadow-[0_0px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_5px_15px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                <Image
                  src={project.imageUrl}
                  alt={project.alt || project.title}
                  fill
                  sizes="(max-width: 640px) 70vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                  <span className="text-[10px] lg:text-sm text-white font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <p className="text-white text-xs line-clamp-1">
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
