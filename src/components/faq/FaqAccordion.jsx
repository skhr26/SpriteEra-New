"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqAccordion({ sections = [] }) {
  const [activeKey, setActiveKey] = useState(sections[0]?.key);
  const [openIdx, setOpenIdx] = useState(-1);

  if (sections.length === 0) return null;

  const active = sections.find((section) => section.key === activeKey) || sections[0];

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20 border-t border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {sections.map((section) => {
            const isActive = section.key === active.key;
            return (
              <button
                key={section.key}
                type="button"
                onClick={() => {
                  setActiveKey(section.key);
                  setOpenIdx(-1);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors border cursor-pointer ${
                  isActive
                    ? "bg-brand-blue text-white border-brand-blue shadow-sm"
                    : "bg-white text-brand-navy border-gray-200 hover:border-brand-accent hover:text-brand-accent"
                }`}
              >
                {section.label}
              </button>
            );
          })}
        </div>

        <div className="space-y-3">
          {active.faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`border rounded-xl bg-white overflow-hidden transition-colors ${
                  isOpen ? "border-blue-200 shadow-[0_0px_8px_rgba(0,102,204,0.12)]" : "border-gray-200/90"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-brand-navy hover:text-brand-accent transition-colors cursor-pointer"
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
                  <div className="px-5 pb-4 text-sm sm:text-base text-gray-600 leading-snug">
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
