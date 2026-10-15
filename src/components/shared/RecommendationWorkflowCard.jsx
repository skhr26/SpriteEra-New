import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RecommendationWorkflowCard({
  title = "Not Sure Which Product You Need?",
  description = "Tell us about your space and requirement. Our team can help you identify suitable lighting products for your application.",
  buttonText = "Request Product Recommendation",
  buttonHref = "/contact",
  imageSrc = "/images/solutions/recommendation-workflow.png",
  imageAlt = "1. Share your requirement, 2. Get expert recommendation, 3. Receive product options & quote",
  className = "",
}) {
  return (
    <div
      className={`bg-gradient-to-r from-blue-50/70 via-indigo-50/50 to-blue-50/70 rounded-2xl border border-blue-100 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 ${className}`}
    >
      <div className="max-w-xl text-center lg:text-left">
        <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-6">
          {description}
        </p>
        <Link
          href={buttonHref}
          className="bg-brand-blue hover:bg-brand-blue-hover text-white px-6 py-3 rounded-md text-xs sm:text-sm font-bold transition shadow-sm inline-flex items-center gap-2"
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-4 h-4" strokeWidth={2} />
        </Link>
      </div>

      {/* 3 Step Flow diagram */}
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg flex items-center justify-center">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-contain mix-blend-multiply select-none"
        />
      </div>
    </div>
  );
}
