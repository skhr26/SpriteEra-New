"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus, Minus } from "lucide-react";

export default function ArchitectGalleryAndFaq({ data }) {
  if (!data) return null;
  const { gallery, faq } = data;

  const [openIdx, setOpenIdx] = useState(0); // First item open by default

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="w-full bg-gray-50/50 py-16 md:py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Project Inspiration Gallery */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="mb-6">
              {gallery.tag && (
                <p className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-2 flex items-center gap-2">
                  <span className="w-5 h-px bg-brand-accent"></span>
                  {gallery.tag}
                </p>
              )}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
                {gallery.title}
              </h2>
            </div>

            {/* 4 Gallery Photos in 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              {gallery.items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl overflow-hidden bg-gray-100 border border-gray-200/80 shadow-xs group relative h-36 sm:h-44"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex items-end">
                    <span className="text-white text-xs font-semibold drop-shadow-sm">
                      {item.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Frequently Asked Questions (Accordion) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-2">
                  {faq.tag}
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
                  Frequently Asked Questions
                </h2>
              </div>
              {faq.actionText && (
                <Link
                  href={faq.actionHref || "/faq"}
                  className="text-xs sm:text-sm font-semibold text-brand-accent hover:text-brand-blue-hover flex items-center gap-1 flex-shrink-0"
                >
                  <span>{faq.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
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
                        ? "bg-white border-blue-200 shadow-sm"
                        : "bg-white/80 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-4 sm:px-5 py-3.5 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-brand-navy hover:text-brand-accent transition-colors cursor-pointer"
                    >
                      <span className="flex-grow">{item.q}</span>
                      <div className="w-6 h-6 rounded-full bg-blue-50 text-brand-accent flex items-center justify-center flex-shrink-0">
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5" strokeWidth={2.2} />
                        ) : (
                          <Plus className="w-3.5 h-3.5" strokeWidth={2.2} />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                        {item.a}
                      </div>
                    )}
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
