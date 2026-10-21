"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, Plus, Minus } from "lucide-react";
import SectionHeading from "../SectionHeading";

/**
 * Two-column section: heading + image + checklist on the left, FAQ accordion
 * on the right. Used for "reliable partner" style trust sections.
 */
export default function LandingPartnerFaq({ data }) {
  const [openIdx, setOpenIdx] = useState(-1);

  if (!data) return null;
  const {
    tag,
    title,
    titleHighlight,
    titleSuffix,
    description,
    image,
    imageAlt,
    checklist = [],
    faqTitle,
    faqAction,
    faqs = []
  } = data;

  return (
    <section
      className={`w-full ${data.sectionClass || "bg-white"} px-4 md:px-12 ${
        data.paddingClass || "py-16 md:py-20"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left: heading + image + checklist */}
        <div className="lg:col-span-7">
          <SectionHeading
            label={tag || null}
            title={`${title} `}
            highlight={titleHighlight}
            titleSuffix={titleSuffix}
            description={description}
            className="mb-8"
            titleSize={data.titleSize}
          />

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-5 lg:gap-6 items-start">
            <div className="relative sm:col-span-2 h-52 sm:h-72 lg:h-80 rounded-xl overflow-hidden border border-gray-200/90 shadow-[0_0px_8px_rgba(0,0,0,0.06)]">
              <Image
                src={image}
                alt={imageAlt || titleHighlight || title}
                fill
                sizes="(max-width: 640px) 100vw, 28vw"
                className="object-cover"
              />
            </div>

            <ul className="sm:col-span-3 space-y-3.5">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm lg:text-base text-gray-600 leading-snug"
                >
                  <span className="w-6 h-6 rounded-full bg-brand-light-bubble text-brand-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="size-3.5" strokeWidth={2.5} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: FAQ */}
        <div className="lg:col-span-5">
          <div className="flex items-center justify-between gap-3 mb-5">
            <h3 className="font-bold text-xl lg:text-2xl text-brand-navy leading-snug">
              {faqTitle}
            </h3>
            {faqAction && (
              <Link
                href={faqAction.href}
                className="text-brand-accent font-semibold text-sm lg:text-base hover:underline whitespace-nowrap flex-shrink-0"
              >
                {faqAction.label} →
              </Link>
            )}
          </div>

          <div className="space-y-2.5">
            {faqs.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-lg bg-white overflow-hidden transition-colors ${
                    isOpen ? "border-blue-200" : "border-gray-200/90"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="w-full px-4 py-3.5 text-left flex items-center justify-between gap-4 text-sm lg:text-base font-semibold text-brand-navy hover:text-brand-accent transition-colors cursor-pointer"
                  >
                    <span className="flex-grow">{item.q}</span>
                    <span className="w-7 h-7 rounded-full bg-brand-light-bubble text-brand-accent flex items-center justify-center flex-shrink-0">
                      {isOpen ? (
                        <Minus className="size-4" strokeWidth={2.4} />
                      ) : (
                        <Plus className="size-4" strokeWidth={2.4} />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-sm lg:text-base text-gray-600 leading-snug">
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
