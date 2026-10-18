"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { productsData } from "../data/homeData";
import SectionHeading from "./SectionHeading";
import { ArrowRight } from "lucide-react";

export default function FeaturedProducts() {
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
    const step = card ? card.getBoundingClientRect().width + 16 : 240;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-12 max-w-7xl mx-auto border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10">
        <SectionHeading
          label="FEATURED PRODUCTS"
          title="Popular Products "
          highlight="Across Applications"
          className="max-w-xl"
        />
        <div className="flex gap-4 mt-4 md:mt-0 items-center">
          <Link href="/products" className="text-brand-accent font-medium hover:underline text-sm lg:text-base flex items-center gap-2">
            View All Products
            <ArrowRight className="size-5.5" strokeWidth={1.5} />
          </Link>
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
        {productsData.map((prod) => (
          <div
            key={prod.id || prod.title}
            data-card
            className="snap-start shrink-0 w-[82%] sm:w-[calc(33.333%-10.66px)] lg:w-[calc(20%-12.8px)]"
          >
            <Link
              href={prod.link || "#"}
              className="group block p-4 border border-gray-200/90 rounded-xl shadow-[0_0px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 bg-white hover:-translate-y-1.5 flex flex-col h-80"
            >
              <div className="relative w-full h-32 sm:h-40 mb-4 rounded-xl flex items-center justify-center p-3 bg-white">
                <Image
                  src={prod.imageUrl}
                  alt={prod.title}
                  fill
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-contain p-3 mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-sm sm:text-[15px] lg:text-lg text-brand-navy text-start line-clamp-2 group-hover:text-brand-accent transition-colors leading-tight min-h-10">
                {prod.title}
              </h3>
              <p className="text-gray-500 text-xs lg:text-sm text-start line-clamp-2 leading-snug mt-1 flex-grow">
                {prod.desc}
              </p>
              <span className="text-brand-blue font-semibold text-xs lg:text-sm group-hover:underline inline-flex items-center gap-1 group-hover:gap-2.5 group-hover:text-brand-blue-hover mt-auto pt-1">
                <span>View Product</span>
                <ArrowRight className="size-5.5" strokeWidth={1.5} />
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
