import Image from "next/image";
import { Zap, Headset, MessagesSquare, Clock } from "lucide-react";
import EnquiryForm from "../EnquiryForm";

const ICONS = {
  zap: Zap,
  clock: Clock,
  headset: Headset,
  message: MessagesSquare
};
const OCTAGON =
  "polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%)";

/**
 * Dark enquiry band: heading, copy, image and mini feature row on the left,
 * a white enquiry form card on the right.
 */
export default function LandingEnquirySection({ data }) {
  if (!data) return null;
  const { tag, title, description, image, features = [], form } = data;
  if (!form) return null;

  return (
    <section className="relative w-full bg-brand-navy text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left: content */}
        <div className="lg:col-span-5">
          {tag && (
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-accent-light mb-3 flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-brand-accent-light" />
              {tag}
            </p>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold tracking-tight text-white leading-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-sm md:text-base lg:text-lg leading-snug text-gray-300">
              {description}
            </p>
          )}

          {image && (
            <div className="relative mt-6 rounded-xl overflow-hidden h-44 sm:h-52 border border-white/10">
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          )}

          {features.length > 0 && (
            <div className="mt-6 flex flex-wrap justify-between gap-6 border-t border-white/10 pt-6">
              {features.map((feat) => {
                const Icon = ICONS[feat.iconType] || Zap;
                return (
                  <div key={feat.title} className="flex flex-col items-center text-center gap-2">
                    <span className="relative w-12 h-12 flex items-center justify-center">
                      <span
                        className="absolute inset-0 bg-white/45"
                        style={{ clipPath: OCTAGON }}
                      />
                      <span
                        className="absolute inset-[1.5px] bg-brand-navy"
                        style={{ clipPath: OCTAGON }}
                      />
                      <Icon className="relative size-5 text-white" strokeWidth={1.5} />
                    </span>
                    <span className="max-w-[120px] text-[11px] sm:text-xs font-medium leading-snug text-gray-100">
                      {feat.title}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right: form card */}
        <div className="lg:col-span-7">
          <EnquiryForm
            id={form.id || "enquiry"}
            title={form.title}
            description={form.description}
            successMessage={form.successMessage}
            extraSelects={form.extraSelects || []}
            extraFields={form.extraFields || []}
            detailsLabel={form.detailsLabel}
            detailsPlaceholder={form.detailsPlaceholder}
            note={form.note}
            variant="light"
            showEmail={form.showEmail}
            twoColumn={form.twoColumn}
            submitLabel={form.submitLabel}
          />
        </div>
      </div>
    </section>
  );
}
