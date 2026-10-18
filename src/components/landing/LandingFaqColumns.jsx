"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "../SectionHeading";

/**
 * Standalone FAQ section: heading + optional "view all" link, with the
 * questions split into two columns of expandable accordion rows.
 */
export default function LandingFaqColumns({ data }) {
  const [openIdx, setOpenIdx] = useState(-1);

  if (!data) return null;
  const { tag, title, titleHighlight, actionText, actionHref, faqs = [] } = data;

  const half = Math.ceil(faqs.length / 2);
  const columns = [faqs.slice(0, half), faqs.slice(half)];

  const renderItem = (item, idx) => {
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
          className="w-full px-4 py-4 text-left flex items-center justify-between gap-4 text-base font-semibold text-brand-navy hover:text-brand-accent transition-colors cursor-pointer"
        >
          <span className="flex-grow">{item.q}</span>
          <span className="w-7 h-7 rounded-full bg-brand-light-bubble text-brand-accent flex items-center justify-center flex-shrink-0">
            {isOpen ? <Minus className="size-4" strokeWidth={2.4} /> : <Plus className="size-4" strokeWidth={2.4} />}
          </span>
        </button>
        {isOpen && (
          <div className="px-4 pb-4 text-base text-gray-600 leading-snug">
            {item.a}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className={`w-full bg-white px-4 md:px-12 ${data.paddingClass || "py-16 md:py-20"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-10">
          <SectionHeading
            label={tag}
            title={`${title} `}
            highlight={titleHighlight}
            className="max-w-2xl"
            titleSize={data.titleSize}
          />
          {actionText && (
            <a
              href={actionHref}
              className="text-brand-accent font-semibold text-sm lg:text-base hover:underline whitespace-nowrap flex items-center gap-1 mt-4 md:mt-0"
            >
              {actionText} →
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="space-y-3">
              {col.map((item, i) => renderItem(item, colIdx * half + i))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
