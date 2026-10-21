import Image from "next/image";
import { Handshake } from "lucide-react";
import SectionHeading from "../SectionHeading";
import EnquiryForm from "../EnquiryForm";
import { PrimaryButton } from "../Buttons";

/**
 * Grid of image cards on the left with an optional right-hand panel:
 * an enquiry form (formData) or a CTA card (data.ctaPanel).
 * Set data.headingTop to place the heading above the whole cards + panel grid.
 */
export default function LandingProjectsWithForm({ data, formData }) {
  if (!data) return null;
  const {
    tag,
    title,
    titleHighlight,
    titleSuffix,
    description,
    needs,
    headingClass,
    ctaPanel,
    headingTop,
    columns
  } = data;

  const hasPanel = Boolean(formData || ctaPanel);
  const cardGridCols = columns === 5 ? "xl:grid-cols-5" : "xl:grid-cols-3";

  const heading = (
    <SectionHeading
      label={tag}
      title={`${title} `}
      highlight={titleHighlight}
      titleSuffix={titleSuffix}
      description={description}
      className={headingClass || (headingTop ? "max-w-3xl mb-8" : "mb-8")}
      titleSize={data.titleSize}
    />
  );

  return (
    <section
      className={`w-full py-16 md:py-20 px-4 md:px-12 ${
        data.sectionClass || "bg-gray-50 border-t border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {headingTop && heading}

        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 ${
            formData ? "items-start" : "items-stretch"
          }`}
        >
          {/* Left: cards */}
          <div className={hasPanel ? "lg:col-span-8" : "lg:col-span-12"}>
            {!headingTop && heading}

            <div className={`grid grid-cols-1 sm:grid-cols-2 ${cardGridCols} gap-4`}>
              {needs.map((need) => (
                <div
                  key={need.id}
                  className="border border-gray-200/90 rounded-xl overflow-hidden group shadow-[0_0px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_5px_15px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col"
                >
                  <div className="relative h-36 sm:h-40 overflow-hidden bg-gray-100">
                    <Image
                      src={need.image}
                      alt={need.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-base lg:text-lg text-brand-navy group-hover:text-brand-accent transition-colors">
                      {need.title}
                    </h3>
                    <p className="text-gray-500 text-sm lg:text-base leading-snug mt-1.5 line-clamp-3">
                      {need.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: enquiry form (sticky on desktop) */}
          {formData && (
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
                submitLabel={formData.submitLabel}
                successMessage={formData.successMessage}
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
