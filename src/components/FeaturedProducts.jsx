import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { productsData } from "../data/homeData";

export default function FeaturedProducts() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-12 max-w-7xl mx-auto border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10">
        <div>
          <p className="text-xs font-bold tracking-widest text-[#0066cc] uppercase mb-2 flex items-center gap-2">
            <span className="w-5 h-px bg-[#0066cc]"></span>
            FEATURED PRODUCTS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#001E36] tracking-tight">
            Popular <span className="text-[#0066cc]">Products</span> Across Applications
          </h2>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0 items-center">
          <Link href="/products" className="text-[#0066cc] font-semibold hover:underline text-sm mr-4 flex items-center gap-1">
            <span>View All Products</span>
            <span>→</span>
          </Link>
          <button
            aria-label="Previous Products"
            className="w-10 h-10 border border-gray-200/90 rounded-full flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            aria-label="Next Products"
            className="w-10 h-10 border border-gray-200/90 rounded-full flex items-center justify-center hover:bg-gray-50 text-gray-600 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md active:scale-95"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {productsData.map((prod) => (
          <Link
            key={prod.id || prod.title}
            href={prod.link || "#"}
            className="text-center group block p-5 border border-gray-200/90 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 bg-white hover:-translate-y-1.5 flex flex-col"
          >
            <div className="w-full h-36 mb-4 rounded-xl flex items-center justify-center p-3 bg-white">
              <img
                src={prod.imageUrl}
                alt={prod.title}
                loading="lazy"
                className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-bold text-sm sm:text-[15px] mb-1.5 text-[#001E36] min-h-[2.75rem] flex items-center justify-center line-clamp-2 group-hover:text-[#0066cc] transition-colors leading-tight">
              {prod.title}
            </h3>
            <p className="text-gray-500 text-xs mb-4 line-clamp-2 leading-relaxed flex-grow">
              {prod.desc}
            </p>
            <span className="text-[#0056b3] font-semibold text-xs group-hover:underline inline-flex items-center justify-center gap-1 group-hover:text-blue-700 mt-auto pt-2">
              <span>View Product</span>
              <span className="text-sm">→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
