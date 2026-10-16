import { CardCtaLink } from "./CtaButtons";

export default function SolutionCard({
  title,
  desc,
  imageUrl,
  iconUrl,
  link = "#",
  buttonText = "Explore Solution",
  imageHeight = "h-40"
}) {
  return (
    <div className="border border-gray-200/90 rounded-2xl overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 bg-white flex flex-col hover:-translate-y-1 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      <div className={`${imageHeight} bg-gray-100 relative overflow-hidden`}>
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex gap-4 flex-grow">
        {iconUrl && (
          <div className="flex-shrink-0 mt-0.5">
            <div className="w-14 h-14 rounded-full bg-white border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.10)] flex items-center justify-center p-2.5 group-hover:shadow-[0_6px_24px_rgba(0,0,0,0.16)] group-hover:scale-105 transition-all">
              <img
                src={iconUrl}
                alt={`${title} symbol`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}

        <div className="flex flex-col flex-grow">
          <h3 className="text-base font-bold text-brand-navy leading-snug group-hover:text-brand-accent transition-colors min-h-[2.5rem] flex items-center">
            {title}
          </h3>
          <p className="text-gray-500 text-xs sm:text-[13px] mt-1 leading-relaxed line-clamp-2">
            {desc}
          </p>
          <div className="mt-auto pt-3">
            <CardCtaLink href={link} label={buttonText} />
          </div>
        </div>
      </div>
    </div>
  );
}
