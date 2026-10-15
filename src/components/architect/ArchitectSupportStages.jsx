import { MessageSquare, FileSearch, BarChart3, Truck, ArrowRight } from "lucide-react";

const STAGE_ICONS = {
  message: MessageSquare,
  "file-search": FileSearch,
  "bar-chart": BarChart3,
  truck: Truck
};

export default function ArchitectSupportStages({ data }) {
  if (!data) return null;
  const { tag, title, description, stages } = data;

  return (
    <section className="w-full bg-white py-16 md:py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          {tag && (
            <p className="text-xs font-bold tracking-widest text-brand-accent uppercase mb-2 flex items-center gap-2">
              <span className="w-5 h-px bg-brand-accent"></span>
              {tag}
            </p>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight mb-2">
            {title}
          </h2>
          {description && (
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* 4 Connected Stages Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {stages.map((stg, idx) => {
            const Icon = STAGE_ICONS[stg.iconType] || MessageSquare;
            const isLast = idx === stages.length - 1;

            return (
              <div key={stg.step} className="relative flex flex-col items-start bg-gray-50/60 rounded-2xl p-6 border border-gray-100 hover:border-blue-100 hover:shadow-sm transition-all duration-300">
                {/* Step Header: Step Number + Icon Bubble */}
                <div className="flex items-center justify-between w-full mb-4">
                  <span className="text-base font-extrabold text-brand-blue tracking-wider">
                    {stg.step}
                  </span>
                  <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-200/60 text-brand-blue flex items-center justify-center shadow-xs">
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-bold text-sm sm:text-base text-brand-navy mb-1.5 leading-snug">
                  {stg.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {stg.desc}
                </p>

                {/* Desktop connector arrow to next step */}
                {!isLast && (
                  <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white border border-gray-200 text-gray-400 items-center justify-center shadow-xs pointer-events-none">
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
