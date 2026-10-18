"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeading from "../SectionHeading";

export default function ArchitectGalleryAndFaq({ data }) {
  const [openIdx, setOpenIdx] = useState(0); // First item open by default

  if (!data) return null;
  const { gallery, faq } = data;

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="w-full bg-white py-16 md:py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Project Inspiration Gallery */}
        <div className="lg:col-span-6 flex flex-col">
          <SectionHeading
            label={gallery.tag}
            title={gallery.title}
            highlight={gallery.titleHighlight}
            className="mb-6"
          />

          {/* 4 Gallery Photos in 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4">
            {gallery.items.map((item) => (
              <div
                key={item.id}
                className="group relative h-36 sm:h-44 bg-gray-100 border border-gray-200/90 rounded-xl overflow-hidden shadow-[0_0px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_5px_15px_rgb(0,0,0,0.12)] transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex items-end">
                  <span className="text-white text-xs font-semibold drop-shadow-md">
                    {item.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Frequently Asked Questions (Accordion) */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex items-end justify-between gap-4 mb-6">
            <SectionHeading
              label={faq.tag}
              title="Frequently Asked"
              highlight="Questions"
              className="flex-1"
            />
            {faq.actionText && (
              <Link href={faq.actionHref || "/faq"} className="text-brand-accent font-medium hover:underline text-sm lg:text-base flex items-center gap-2 flex-shrink-0 mb-1">
                {faq.actionText} <ArrowRight className="size-5.5" strokeWidth={1.5} />
              </Link>
            )}
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {faq.items.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white border-blue-200 shadow-[0_0px_8px_rgba(0,102,204,0.12)]"
                      : "bg-white/80 border-gray-200/90 hover:border-gray-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-4 sm:px-5 py-3.5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-brand-navy hover:text-brand-accent transition-colors cursor-pointer"
                  >
                    <span className="flex-grow">{item.q}</span>
                    <div className="w-6 h-6 rounded-full bg-brand-light-bubble text-brand-accent flex items-center justify-center flex-shrink-0">
                      {isOpen ? (
                        <Minus className="size-3.5" strokeWidth={2.2} />
                      ) : (
                        <Plus className="size-3.5" strokeWidth={2.2} />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-gray-600 leading-snug border-t border-gray-100">
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
