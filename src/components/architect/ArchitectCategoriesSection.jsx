import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../SectionHeader";

export default function ArchitectCategoriesSection({ data }) {
  if (!data) return null;
  const { tag, title, titleHighlight, actionText, actionHref, categories } = data;

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeader
        label={tag}
        title={title}
        highlight={titleHighlight}
        actionText={actionText}
        actionHref={actionHref}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col"
          >
            <div className="h-28 sm:h-32 overflow-hidden bg-gray-100 relative">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-3 sm:p-3.5 flex flex-col flex-grow">
              <h3 className="font-bold text-xs sm:text-sm text-brand-navy mb-1 group-hover:text-brand-accent transition-colors">
                {cat.title}
              </h3>
              <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed mb-3 flex-grow line-clamp-2">
                {cat.desc}
              </p>
              <Link
                href={cat.link}
                className="text-[11px] sm:text-xs font-bold text-brand-accent hover:text-brand-blue-hover inline-flex items-center gap-1 group/link mt-auto"
              >
                <span>View Products</span>
                <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" strokeWidth={2.2} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
