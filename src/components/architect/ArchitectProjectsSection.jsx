import ArchitectEnquiryForm from "./ArchitectEnquiryForm";

export default function ArchitectProjectsSection({ data }) {
  if (!data) return null;
  const { tag, title, titleHighlight, description, projects } = data;

  return (
    <section className="w-full bg-gray-50/70 py-16 md:py-20 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Heading + 6 Project Cards Grid (2 rows x 3 columns) */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Header */}
            <div className="mb-8">
              {tag && (
                <p className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-2 flex items-center gap-2">
                  <span className="w-5 h-px bg-brand-accent"></span>
                  {tag}
                </p>
              )}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight mb-2">
                {title}{" "}
                {titleHighlight && <span className="text-brand-accent">{titleHighlight}</span>}
              </h2>
              {description && (
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  {description}
                </p>
              )}
            </div>

            {/* 3x2 Project Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col"
                >
                  <div className="h-32 sm:h-36 overflow-hidden bg-gray-100 relative">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3.5 flex flex-col flex-grow">
                    <h3 className="font-bold text-sm text-brand-navy mb-1 group-hover:text-brand-accent transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Architect Enquiry Form (Sticky on desktop) */}
          <div className="lg:col-span-4 lg:sticky lg:top-8">
            <ArchitectEnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
