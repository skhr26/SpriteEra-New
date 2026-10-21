import Image from "next/image";
import { PrimaryButton } from "../Buttons";

/**
 * Light split CTA band: product image on the left, heading + copy + button
 * on the right, inside a soft blue rounded card.
 */
export default function LandingImageCta({ data }) {
  if (!data) return null;
  const { title, titleHighlight, description, image, cta } = data;

  return (
    <section className="w-full bg-white px-4 md:px-12 py-6 md:py-8">
      <div className="max-w-7xl mx-auto bg-brand-surface-soft border border-blue-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,102,204,0.08)] grid grid-cols-1 md:grid-cols-12 items-center">
        <div className="relative md:col-span-5 h-44 sm:h-52 md:h-60">
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-contain p-4 md:p-6"
          />
        </div>
        <div className="md:col-span-7 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-brand-navy">
              {title}
              {titleHighlight && <span className="text-brand-accent">{titleHighlight}</span>}
            </h2>
            {description && (
              <p className="mt-2 text-sm md:text-base text-gray-600 leading-snug max-w-xl">
                {description}
              </p>
            )}
          </div>
          {cta && (
            <PrimaryButton
              href={cta.href}
              label={cta.label}
              size="lg"
              className="flex-shrink-0"
            />
          )}
        </div>
      </div>
    </section>
  );
}
