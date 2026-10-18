import Image from "next/image";
import SectionHeading from "../SectionHeading";
import EnquiryForm from "../EnquiryForm";

export default function ArchitectProjectsSection({ data }) {
  if (!data) return null;
  const { tag, title, titleHighlight, description, projects } = data;

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20 px-4 md:px-12 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Heading + 6 Project Cards Grid (2 rows x 3 columns) */}
        <div className="lg:col-span-8 flex flex-col">
          <SectionHeading
            label={tag}
            title={`${title} `}
            highlight={titleHighlight}
            description={description}
            className="mb-10"
          />

          {/* 3x2 Project Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="border border-gray-200/90 rounded-xl overflow-hidden group shadow-[0_0px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_5px_15px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col"
              >
                <div className="h-40 lg:h-44 overflow-hidden bg-gray-100 relative">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg lg:text-xl font-bold text-brand-navy mb-1.5 group-hover:text-brand-accent transition-colors leading-snug min-h-14 flex items-center">
                    {proj.title}
                  </h3>
                  <p className="text-gray-500 text-sm lg:text-base leading-snug line-clamp-2">
                    {proj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Architect Enquiry Form (Sticky on desktop) */}
        <div className="lg:col-span-4 lg:sticky lg:top-8">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
