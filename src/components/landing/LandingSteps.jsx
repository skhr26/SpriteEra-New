"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import {
  MessageSquare, ClipboardList, FileText, Package, Check, Plus, Minus, ArrowRight, Truck, Users, Handshake
} from "lucide-react";
import SectionHeading from "../SectionHeading";
import EnquiryForm from "../EnquiryForm";

const STEP_ICONS = {
  message: MessageSquare,
  clipboard: ClipboardList,
  file: FileText,
  package: Package,
  truck: Truck,
  users: Users,
  handshake: Handshake
};

/**
 * Process section: heading + N numbered steps (full width). Optionally renders
 * a checklist (left) and an inline FAQ accordion (right) below the steps.
 * When data.formData is provided, the steps/FAQ sit on the left and an enquiry
 * form panel sits on the right.
 */
export default function LandingSteps({ data }) {
  const [openIdx, setOpenIdx] = useState(-1);

  if (!data) return null;
  const {
    tag,
    title,
    titleHighlight,
    titleSuffix,
    description,
    steps,
    checklistTitle,
    checklist,
    faqTitle,
    faqAction,
    faqs,
    action,
    faqTwoColumn,
    formData
  } = data;

  const hasChecklist = Array.isArray(checklist) && checklist.length > 0;
  const hasFaqs = Array.isArray(faqs) && faqs.length > 0;
  const hasForm = Boolean(formData);

  const renderFaqItem = (item, idx) => {
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
          className="w-full px-4 py-3.5 text-left flex items-center justify-between gap-4 text-base font-semibold text-brand-navy hover:text-brand-accent transition-colors cursor-pointer"
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
          <div className="px-4 pb-4 text-base text-gray-600 leading-snug">
            {item.a}
          </div>
        )}
      </div>
    );
  };

  const faqHalf = Math.ceil((faqs?.length || 0) / 2);
  const faqGroups = faqTwoColumn && hasFaqs ? [faqs.slice(0, faqHalf), faqs.slice(faqHalf)] : null;

  const content = (
    <>
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
        <SectionHeading
          label={tag}
          title={`${title} `}
          highlight={titleHighlight}
          titleSuffix={titleSuffix}
          description={description}
          className={data.headingClass || "max-w-none mb-10"}
          titleSize={data.titleSize}
        />
        {action && (
          <Link
            href={action.href}
            className="text-brand-accent font-semibold text-sm lg:text-base hover:underline whitespace-nowrap flex items-center gap-1 md:mt-1"
          >
            {action.label} →
          </Link>
        )}
      </div>

      {/* Steps (full width) */}
      <div className={`flex flex-col lg:flex-row items-stretch gap-6 lg:gap-3 ${hasChecklist || hasFaqs ? "mb-14" : ""}`}>
        {steps.map((stg, idx) => {
          const Icon = STEP_ICONS[stg.iconType] || MessageSquare;
          const isLast = idx === steps.length - 1;
          return (
            <Fragment key={stg.step}>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-brand-light-bubble border border-blue-200/60 text-brand-accent flex items-center justify-center shadow-[0_0px_8px_rgba(0,102,204,0.12)] flex-shrink-0">
                    <Icon className="size-6" strokeWidth={1.5} />
                  </div>
                  <span className="text-xl font-bold text-brand-accent tracking-wide">
                    {stg.step}
                  </span>
                </div>
                <h3 className="font-bold text-lg lg:text-xl text-brand-navy mb-1.5 leading-snug">
                  {stg.title}
                </h3>
                <p className="text-gray-500 text-base leading-snug">
                  {stg.desc}
                </p>
              </div>
              {!isLast && (
                <div className="hidden lg:flex items-start pt-3 text-gray-300 flex-shrink-0">
                  <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                </div>
              )}
            </Fragment>
          );
        })}
      </div>

      {/* Optional checklist + FAQ */}
      {(hasChecklist || hasFaqs) && (
        <div className={`grid grid-cols-1 ${hasChecklist && hasFaqs ? "lg:grid-cols-2 gap-10 lg:gap-16" : ""}`}>
          {hasChecklist && (
            <div>
              <h3 className="font-bold text-xl lg:text-2xl text-brand-navy mb-5 leading-snug">
                {checklistTitle}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base lg:text-lg text-gray-600 leading-snug">
                    <Check className="size-5 text-brand-accent flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {hasFaqs && (
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <h3 className="font-bold text-xl lg:text-2xl text-brand-navy leading-snug">
                  {faqTitle}
                </h3>
                {faqAction && (
                  <Link
                    href={faqAction.href}
                    className="text-brand-accent font-semibold text-base hover:underline whitespace-nowrap flex-shrink-0"
                  >
                    {faqAction.label} →
                  </Link>
                )}
              </div>

              <div
                className={
                  faqTwoColumn
                    ? "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3"
                    : "space-y-2.5"
                }
              >
                {faqGroups
                  ? faqGroups.map((group, colIdx) => (
                      <div key={colIdx} className="space-y-3">
                        {group.map((item, i) => renderFaqItem(item, colIdx * faqHalf + i))}
                      </div>
                    ))
                  : faqs.map((item, idx) => renderFaqItem(item, idx))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );

  return (
    <section className={`w-full ${data.sectionClass || "bg-white"} px-4 md:px-12 ${data.paddingClass || "py-16 md:py-20"}`}>
      <div className="max-w-7xl mx-auto">
        {hasForm ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">{content}</div>
            <div className="lg:col-span-4 lg:sticky lg:top-8">
              <EnquiryForm
                id={formData.id || "enquiry"}
                title={formData.title}
                description={formData.description}
                detailsLabel={formData.detailsLabel}
                detailsPlaceholder={formData.detailsPlaceholder}
                note={formData.note}
                variant={formData.variant}
                extraSelects={formData.extraSelects || []}
                extraFields={formData.extraFields || []}
                showEmail={formData.showEmail}
                twoColumn={formData.twoColumn}
                detailsFullWidth={formData.detailsFullWidth}
                submitLabel={formData.submitLabel}
                successMessage={formData.successMessage}
              />
            </div>
          </div>
        ) : (
          content
        )}
      </div>
    </section>
  );
}
