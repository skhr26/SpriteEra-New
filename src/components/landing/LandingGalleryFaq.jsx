"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "../SectionHeading";

/**
 * Two-column inspiration section: heading + image gallery on the left,
 * compact FAQ accordion on the right.
 */
export default function LandingGalleryFaq({ data }) {
  const [openIdx, setOpenIdx] = useState(-1);

  if (!data) return null;
  const {
    tag,
    title,
    titleHighlight,
    titleSuffix,
    description,
    items = [],
    faqTag,
    faqAction,
    faqs = []
  } = data;

  return (
    <section
      className={`w-full ${data.sectionClass || "bg-white"} ${
        data.paddingClass || "py-16 md:py-20"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left: heading + gallery */}
        <div className="lg:col-span-7">
          <SectionHeading
            label={tag}
            title={`${title} `}
            highlight={titleHighlight}
            titleSuffix={titleSuffix}
            description={description}
            className={data.headingClass || "mb-5"}
            titleSize={data.titleSize}
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="relative aspect-[3/2] rounded-lg overflow-hidden border border-gray-200/90 shadow-[0_0px_8px_rgba(0,0,0,0.06)]"
              >
                <Image
                  src={item.image}
                  alt={item.alt || ""}
                  fill
                  sizes="(max-width: 640px) 50vw, 20vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: compact FAQ */}
        <div className="lg:col-span-5">
          <div className="flex items-center justify-between gap-3 mb-3">
            {faqTag ? (
              <p className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-brand-accent flex items-center gap-2">
                <span className="w-4 h-[1.5px] bg-brand-accent" />
                {faqTag}
              </p>
            ) : (
              <span />
            )}
            {faqAction && (
              <Link
                href={faqAction.href}
                className="text-brand-accent font-semibold text-xs sm:text-sm hover:underline whitespace-nowrap flex-shrink-0"
              >
                {faqAction.label} →
              </Link>
            )}
          </div>

          <div className="space-y-1.5">
            {faqs.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-md bg-white overflow-hidden transition-colors ${
                    isOpen ? "border-blue-200" : "border-gray-200/80"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="w-full px-3 py-2 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-brand-navy hover:text-brand-accent transition-colors cursor-pointer"
                  >
                    <span className="flex-grow">{item.q}</span>
                    <span className="text-brand-accent flex items-center justify-center flex-shrink-0">
                      {isOpen ? (
                        <Minus className="size-3.5" strokeWidth={2.4} />
                      ) : (
                        <Plus className="size-3.5" strokeWidth={2.4} />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-3 pb-2.5 text-xs sm:text-sm text-gray-600 leading-snug">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
