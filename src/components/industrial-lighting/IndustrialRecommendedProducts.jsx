"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { PrimaryButton } from "../Buttons";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { industrialSolutionsData } from "../../data/industrialLightingData";

export default function IndustrialRecommendedProducts() {
  const { productsSection: section, recommendedProducts: products, notSureBanner: notSure } = industrialSolutionsData;

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
  }, [products]);

  if (!section || !products) return null;
  const { tag, title, titleHighlight, description, action } = section;

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const step = card ? card.getBoundingClientRect().width + 16 : 280;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="products" className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-10">
          <SectionHeading
            label={tag}
            title={`${title} `}
            highlight={titleHighlight}
            description={description}
            className="max-w-2xl"
          />
          <div className="flex gap-4 mt-4 md:mt-0 items-center">
            <a href={action.href} className="text-brand-accent font-medium hover:underline text-sm lg:text-base flex items-center gap-2">
              {action.label} <ArrowRight className="size-5.5" strokeWidth={1.5} />
            </a>
            <div className="flex gap-1 lg:gap-2 items-center justify-center">
              <button
                aria-label="Previous Products"
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
                aria-label="Next Products"
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

        {/* Sliding product track (scroll-snap carousel) */}
        <div
          ref={trackRef}
          onScroll={updateArrows}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
        >
          {products.map((prod) => (
            <div
              key={prod.id}
              data-card
              className="snap-start shrink-0 w-[80%] sm:w-[calc(50%-8px)] md:w-[calc(33.333%-10.66px)] lg:w-[calc(25%-12px)]"
            >
              <div className="h-full border border-gray-200/90 rounded-xl p-5 shadow-[0_0px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_5px_15px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col group text-start">
                <div className="relative w-full h-32 sm:h-40 mb-4 rounded-xl flex items-center justify-center p-3">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    sizes="(max-width: 640px) 82vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-contain p-3 mix-blend-multiply group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="font-bold text-sm sm:text-[15px] lg:text-lg text-brand-navy text-start line-clamp-2 min-h-10 leading-tight group-hover:text-brand-accent transition-colors">
                  {prod.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-[13px] lg:text-sm mb-4 flex-grow line-clamp-2 leading-snug mt-1 text-start">
                  {prod.desc}
                </p>
                <a
                  href={prod.link}
                  className="text-brand-blue font-semibold text-xs lg:text-sm inline-flex items-center gap-1 group-hover:gap-2.5 transition-all hover:text-brand-blue-hover mt-auto pt-1"
                >
                  <span>View Product</span>
                  <ArrowRight className="size-5.5" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Not Sure Which Product You Need? banner — equal halves */}
        <div className="mt-2 bg-brand-surface rounded-2xl border border-blue-100 overflow-hidden flex flex-col lg:grid lg:grid-cols-[3fr_2fr] items-stretch">
          {/* Left: copy */}
          <div className="text-center lg:text-left px-6 sm:px-8 lg:px-12 py-8 sm:py-10 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy mb-2 tracking-tight">
              {notSure.title}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base mb-6 leading-snug max-w-lg mx-auto lg:mx-0">
              {notSure.description}
            </p>
            <div className="lg:self-start self-center">
              <PrimaryButton href={notSure.cta.href} label={notSure.cta.label} />
            </div>
          </div>

          {/* Right: white workflow panel — equal half, full height */}
          <div className="bg-white flex items-center justify-center px-4 sm:px-6 py-8 sm:py-10 border-t border-blue-100 lg:border-t-0 lg:border-l border-blue-100">
            <div className="flex items-center justify-center gap-1.5 sm:gap-3">
              {notSure.steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="flex items-center gap-1.5 sm:gap-3">
                    {idx > 0 && (
                      <div className="w-5 h-[1.5px] bg-blue-500/25 rounded-full flex-shrink-0" aria-hidden="true" />
                    )}
                    <div className="flex flex-col items-center gap-2 w-20 sm:w-24 lg:w-28">
                      <div className="relative">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-light-bubble/70 ring-1 ring-blue-200/70 flex items-center justify-center">
                          {Icon && <Icon className="size-6 sm:size-7 text-brand-blue" strokeWidth={1.6} />}
                        </div>
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-brand-blue text-white text-[10px] font-bold flex items-center justify-center shadow-sm ring-2 ring-white">
                          {idx + 1}
                        </span>
                      </div>
                      <p className="whitespace-pre-line text-[10px] sm:text-xs text-gray-700 text-center leading-snug font-medium">
                        {step.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
