import Image from "next/image";
import SectionHeading from "../SectionHeading";
import EnquiryForm from "../EnquiryForm";

/**
 * Grid of image cards (projects / supply needs) on the left with a sticky
 * enquiry form panel on the right.
 */
export default function LandingProjectsWithForm({ data, formData }) {
  if (!data) return null;
  const { tag, title, titleHighlight, description, needs, headingClass } = data;

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20 px-4 md:px-12 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: cards */}
        <div className="lg:col-span-8">
          <SectionHeading
            label={tag}
            title={`${title} `}
            highlight={titleHighlight}
            description={description}
            className={headingClass || "mb-8"}
            titleSize={data.titleSize}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
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
                  <p className="text-gray-500 text-sm lg:text-base leading-snug mt-1.5 line-clamp-2">
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
              id="enquiry"
              title={formData.title}
              description={formData.description}
              detailsLabel={formData.detailsLabel}
              detailsPlaceholder={formData.detailsPlaceholder}
              note={formData.note}
              variant={formData.variant}
              extraSelects={formData.extraSelects || []}
              successMessage={formData.successMessage}
            />
          </div>
        )}
      </div>
    </section>
  );
}
