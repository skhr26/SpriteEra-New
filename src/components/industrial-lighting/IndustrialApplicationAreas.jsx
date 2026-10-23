import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { ArrowRight, Plus } from "lucide-react";

export default function IndustrialApplicationAreas({ section, areas }) {
  if (!section || !areas) return null;
  const { tag, title, titleHighlight, titleSuffix, action } = section;

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20 border-t border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10">
          <SectionHeading
            label={tag}
            title={`${title} `}
            highlight={titleHighlight}
            titleSuffix={titleSuffix}
            className="max-w-2xl"
          />
          <a href={action.href} className="text-brand-accent font-medium hover:underline mt-4 md:mt-0 text-sm lg:text-base flex items-center gap-2">
            {action.label} <ArrowRight className="size-5.5" strokeWidth={1.5} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {areas.map((app) => (
            <div
              key={app.id}
              className="border border-gray-200/90 rounded-xl overflow-hidden group shadow-[0_0px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_5px_15px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col"
            >
              <div className="relative h-44 lg:h-48 overflow-hidden bg-gray-100">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-lg lg:text-xl text-brand-navy leading-snug group-hover:text-brand-accent transition-colors">
                  {app.title}
                </h3>
                <p className="text-gray-500 text-sm lg:text-base leading-snug mt-1.5 mb-4 flex-grow line-clamp-2">
                  {app.desc}
                </p>
                <a
                  href={app.link}
                  className="text-brand-blue font-semibold text-sm lg:text-base inline-flex items-center gap-1.5 hover:gap-2.5 transition-all hover:text-brand-blue-hover mt-auto"
                >
                  <span>Explore</span>
                  <Plus className="w-4 h-4" strokeWidth={2.5} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
