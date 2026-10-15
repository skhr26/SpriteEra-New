import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CarouselNavButtons({
  onPrev,
  onNext,
  prevLabel = "Previous",
  nextLabel = "Next"
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onPrev}
        aria-label={prevLabel}
        className="w-10 h-10 border border-gray-200/90 rounded-full flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md active:scale-95"
      >
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label={nextLabel}
        className="w-10 h-10 border border-gray-200/90 rounded-full flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md active:scale-95"
      >
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
}
