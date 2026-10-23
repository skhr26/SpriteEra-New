"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Handshake, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../SectionHeading";
import EnquiryForm from "../EnquiryForm";
import { PrimaryButton } from "../Buttons";

/**
 * Grid or carousel of image cards on the left with an optional right-hand panel:
 * an enquiry form (formData) or a CTA card (data.ctaPanel).
 * Set data.headingTop to place the heading above the whole cards + panel grid.
 * When cards > 4 and there is no side panel, renders with left/right carousel arrows.
 */
export default function LandingProjectsWithForm({ data, formData }) {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  if (!data) return null;
  const {
    tag,
    title,
    titleHighlight,
    titleSuffix,
    description,
    needs = [],
    headingClass,
    ctaPanel,
    headingTop,
    columns
  } = data;

  const hasPanel = Boolean(formData || ctaPanel);
  const isCarousel = !hasPanel && (columns === 5 || needs.length > 4);
  const cardGridCols = columns === 5 ? "xl:grid-cols-5" : "xl:grid-cols-3";

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    if (!isCarousel) return;
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [isCarousel]);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const step = card ? card.getBoundingClientRect().width + 16 : 280;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const renderNeedCard = (need) => (
    <div className="h-full border border-gray-200/90 rounded-xl overflow-hidden group shadow-[0_0px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_5px_15px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col">
      <div className="relative h-36 sm:h-40 overflow-hidden bg-gray-100">
        <Image
          src={need.image}
          alt={need.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-base lg:text-lg text-brand-navy group-hover:text-brand-accent transition-colors">
          {need.title}
        </h3>
        <p className="text-gray-500 text-sm lg:text-base leading-snug mt-1.5 line-clamp-3">
          {need.desc}
        </p>
      </div>
    </div>
  );

  const heading = (
    <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-8">
      <SectionHeading
        label={tag}
        title={`${title} `}
        highlight={titleHighlight}
        titleSuffix={titleSuffix}
        description={description}
        className={headingClass || (headingTop ? "max-w-3xl" : "")}
        titleSize={data.titleSize}
      />
      {isCarousel && (
        <div className="flex gap-2 items-center justify-center shrink-0">
          <button
            aria-label="Previous items"
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
            aria-label="Next items"
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
      )}
    </div>
  );

  return (
    <section
      className={`w-full py-16 md:py-20 ${
        data.sectionClass || "bg-gray-50 border-t border-b border-gray-200"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        {(headingTop || isCarousel) && heading}

        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 ${
            formData ? "items-start" : "items-stretch"
          }`}
        >
          {/* Left: cards */}
          <div className={hasPanel ? "lg:col-span-8" : "lg:col-span-12"}>
            {!headingTop && !isCarousel && heading}

            {isCarousel ? (
              <div
                ref={trackRef}
                onScroll={updateArrows}
                className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
              >
                {needs.map((need) => (
                  <div
                    key={need.id}
                    data-card
                    className="snap-start shrink-0 w-[80%] sm:w-[calc(50%-8px)] md:w-[calc(33.333%-10.66px)] lg:w-[calc(25%-12px)]"
                  >
                    {renderNeedCard(need)}
                  </div>
                ))}
              </div>
            ) : (
              <div className={`grid grid-cols-1 sm:grid-cols-2 ${cardGridCols} gap-4`}>
                {needs.map((need) => (
                  <div key={need.id} data-card>
                    {renderNeedCard(need)}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: enquiry form (sticky on desktop) */}
          {formData && (
            <div className="lg:col-span-4 lg:sticky lg:top-8">
              <EnquiryForm
                id={formData.id || "enquiry"}
                variant={formData.variant || "light"}
                twoColumn={formData.twoColumn}
              />
            </div>
          )}

          {/* Right: CTA panel (e.g. "Let's Grow Together") */}
          {!formData && ctaPanel && (
            <div className="lg:col-span-4 bg-brand-surface border border-blue-100 rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center text-center">
              <Handshake className="size-12 text-brand-accent mb-4" strokeWidth={1.6} />
              <h3 className="text-2xl font-bold text-brand-navy mb-3 tracking-tight">
                {ctaPanel.title}
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-snug mb-6">
                {ctaPanel.description}
              </p>
              {ctaPanel.cta && (
                <PrimaryButton href={ctaPanel.cta.href} label={ctaPanel.cta.label} />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
