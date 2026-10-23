import { MessageSquare, FileSearch, BarChart3, Truck, ArrowRight } from "lucide-react";
import SectionHeading from "../SectionHeading";

const STAGE_ICONS = {
  message: MessageSquare,
  "file-search": FileSearch,
  "bar-chart": BarChart3,
  truck: Truck
};

export default function ArchitectSupportStages({ data }) {
  if (!data) return null;
  const { tag, title, titleHighlight, description, stages } = data;

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20 border-t border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full">
        <SectionHeading
          label={tag}
          title={`${title} `}
          highlight={titleHighlight}
          description={description}
          className="max-w-3xl mb-12"
        />

        {/* 4 Connected Stages Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {stages.map((stg, idx) => {
            const Icon = STAGE_ICONS[stg.iconType] || MessageSquare;
            const isLast = idx === stages.length - 1;

            return (
              <div
                key={stg.step}
                className="h-full relative flex flex-col justify-between items-start bg-white border border-gray-200/90 rounded-xl p-6 shadow-[0_0px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_5px_15px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-full">
                  {/* Step Header: Step Number + Icon Bubble */}
                  <div className="flex items-center justify-between w-full mb-5">
                    <span className="text-lg lg:text-xl font-bold text-brand-blue tracking-wider">
                      {stg.step}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-brand-light-bubble border border-blue-200/60 text-brand-accent flex items-center justify-center shadow-[0_0px_8px_rgba(0,102,204,0.12)]">
                      <Icon className="size-6" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg lg:text-xl text-brand-navy mb-2 leading-snug min-h-[3.25rem] flex items-start">
                    {stg.title}
                  </h3>
                </div>

                <p className="text-gray-500 text-sm lg:text-base leading-snug mt-auto">
                  {stg.desc}
                </p>

                {/* Desktop connector arrow to next step */}
                {!isLast && (
                  <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white border border-gray-200 text-gray-400 items-center justify-center shadow-[0_0px_8px_rgba(0,0,0,0.06)] pointer-events-none">
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
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
