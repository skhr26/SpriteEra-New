"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function ArchitectCategoriesSection({ data }) {
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

  if (!data) return null;
  const { tag, title, titleHighlight, actionText, actionHref, categories = [] } = data;

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const step = card ? card.getBoundingClientRect().width + 16 : 260;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white py-16 md:py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-10">
          <SectionHeading
            label={tag}
            title={`${title} `}
            highlight={titleHighlight}
            className="max-w-2xl"
          />
          <div className="flex gap-4 mt-4 md:mt-0 items-center">
            <a href={actionHref} className="text-brand-accent font-medium hover:underline text-sm lg:text-base flex items-center gap-2">
              {actionText} <ArrowRight className="size-5.5" strokeWidth={1.5} />
            </a>
            <div className="flex gap-1 lg:gap-2 items-center justify-center">
              <button
                aria-label="Previous Categories"
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
                aria-label="Next Categories"
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
        </div>

        {/* Sliding category track (scroll-snap carousel) */}
        <div
          ref={trackRef}
          onScroll={updateArrows}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              data-card
              className="snap-start shrink-0 w-[70%] sm:w-[calc(33.333%-10.66px)] lg:w-[calc(20%-12.8px)]"
            >
              <div className="h-full border border-gray-200/90 rounded-xl overflow-hidden group shadow-[0_0px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_5px_15px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col">
                <div className="h-44 lg:h-48 overflow-hidden bg-gray-100 relative">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 640px) 70vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg lg:text-xl font-bold text-brand-navy mb-1.5 group-hover:text-brand-accent transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-gray-500 text-sm lg:text-base leading-snug mb-4 flex-grow line-clamp-2">
                    {cat.desc}
                  </p>
                  <a
                    href={cat.link}
                    className="text-brand-blue font-semibold text-sm lg:text-base inline-flex items-center gap-1.5 hover:gap-2 transition-all hover:text-brand-blue-hover mt-auto"
                  >
                    <span>View Products</span>
                    <ArrowRight className="size-5.5" strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
