"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { navigationLinks, siteConfig } from "../../data/homeData";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <img
            src={siteConfig.logoUrl}
            alt={`${siteConfig.name} Logo`}
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>
      </div>

      <nav className="hidden md:flex space-x-7 text-sm font-semibold text-gray-700">
        {navigationLinks.map((link, idx) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : link.href !== "#" && pathname.startsWith(link.href);

          return (
            <Link
              key={idx}
              href={link.href}
              className={
                isActive
                  ? "text-brand-accent border-b-2 border-brand-accent pb-1"
                  : "hover:text-brand-accent transition-colors"
              }
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center space-x-3">
        <button
          type="button"
          aria-label="Search products and solutions"
          className="p-1.5 rounded-full hover:bg-gray-100 transition-colors text-gray-600 flex items-center justify-center cursor-pointer"
        >
          <img
            src="/images/icon-search.png"
            alt="Search"
            className="w-5 h-5 object-contain"
          />
        </button>
        <Link
          href="/contact"
          className="bg-brand-blue text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-brand-blue-hover transition-colors shadow-sm flex items-center gap-2"
        >
          <span>Get a Quote</span>
          <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
        </Link>
      </div>
      </div>
    </header>
  );
}
