import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Eyebrow from "./Eyebrow";

export default function SectionHeader({
  label,
  title,
  highlight = "",
  description,
  actionText,
  actionHref,
  children,
  className = "",
  dark = false
}) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-end justify-between mb-10 ${className}`}>
      <div>
        {label && <Eyebrow label={label} />}
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${dark ? "text-white" : "text-brand-navy"}`}>
          {title}{" "}
          {highlight && <span className="text-brand-accent">{highlight}</span>}
        </h2>
        {description && (
          <p className={`mt-1 text-xs sm:text-sm md:text-base leading-relaxed ${dark ? "text-gray-300" : "text-gray-500"}`}>
            {description}
          </p>
        )}
      </div>

      {(actionText && actionHref) || children ? (
        <div className="flex gap-4 mt-3 sm:mt-0 items-center">
          {actionText && actionHref && (
            <Link
              href={actionHref}
              className="text-xs sm:text-sm font-semibold text-brand-accent hover:text-brand-blue-hover flex items-center gap-1.5"
            >
              <span>{actionText}</span>
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          )}
          {children}
        </div>
      ) : null}
    </div>
  );
}
