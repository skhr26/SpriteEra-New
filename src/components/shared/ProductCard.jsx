import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductCard({
  title,
  desc,
  imageUrl,
  link = "#",
  buttonText = "View Product"
}) {
  return (
    <Link
      href={link}
      className="text-left group block p-5 border border-gray-200/90 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 bg-white hover:-translate-y-1.5 flex flex-col"
    >
      <div className="w-full h-36 mb-4 rounded-xl flex items-center justify-center p-3 bg-white">
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-bold text-sm sm:text-[15px] mb-1.5 text-brand-navy min-h-[2.75rem] flex items-center justify-start line-clamp-2 group-hover:text-brand-accent transition-colors leading-tight">
        {title}
      </h3>
      <p className="text-gray-500 text-xs mb-4 line-clamp-2 leading-relaxed flex-grow text-left">
        {desc}
      </p>
      <span className="text-brand-blue font-semibold text-xs group-hover:underline inline-flex items-center justify-start gap-1 group-hover:text-brand-blue-hover mt-auto pt-2">
        <span>{buttonText}</span>
        <ArrowRight className="w-4 h-4" strokeWidth={2} />
      </span>
    </Link>
  );
}
