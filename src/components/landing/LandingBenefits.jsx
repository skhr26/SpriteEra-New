import { Leaf, Lightbulb, Boxes, Users } from "lucide-react";
import SectionHeading from "../SectionHeading";

const ICONS = {
  leaf: Leaf,
  lightbulb: Lightbulb,
  boxes: Boxes,
  users: Users
};

/**
 * Row of compact benefit cards.
 * data: { tag, title, titleHighlight, items: [{ iconType, title, desc }] }
 */
export default function LandingBenefits({ data }) {
  if (!data) return null;
  const { tag, title, titleHighlight, items = [] } = data;

  return (
    <section className="bg-white border-t border-gray-200/70 py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeading
          label={tag}
          title={title}
          highlight={titleHighlight}
          className="max-w-none mb-8"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {items.map((item) => {
            const Icon = ICONS[item.iconType] || Lightbulb;
            return (
              <div
                key={item.title}
                className="h-full bg-white border border-blue-100 rounded-xl p-5 flex items-start gap-4 shadow-[0_0px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_5px_15px_rgb(0,0,0,0.08)] transition-shadow duration-300"
              >
                <div className="w-11 h-11 rounded-full bg-brand-surface border border-blue-100 flex items-center justify-center text-brand-accent flex-shrink-0">
                  <Icon className="size-5" strokeWidth={1.6} />
                </div>
                <div className="min-w-0 flex flex-col justify-between flex-grow h-full">
                  <h3 className="text-sm font-bold text-brand-navy leading-tight mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-snug">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
