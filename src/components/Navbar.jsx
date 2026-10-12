import Link from "next/link";
import { navigationLinks, siteConfig } from "../data/homeData";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-4 md:px-12 py-4 border-b border-gray-100 bg-white">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <img
            src={siteConfig.logoUrl}
            alt={`${siteConfig.name} Logo`}
            className="h-8 md:h-10 w-auto object-contain"
          />
        </Link>
      </div>
      <nav className="hidden md:flex space-x-8 text-sm font-semibold text-gray-700">
        {navigationLinks.map((link, idx) => (
          <Link 
            key={idx} 
            href={link.href} 
            className={link.isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "hover:text-blue-600"}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="flex items-center space-x-3">
        <button
          type="button"
          aria-label="Search products and solutions"
          className="p-1.5 rounded-full hover:bg-gray-100 transition-colors text-gray-600 flex items-center justify-center"
        >
          <img
            src="/images/icon-search.png"
            alt="Search"
            className="w-5 h-5 object-contain"
          />
        </button>
        <Link
          href="/contact"
          className="bg-[#0056b3] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-1.5"
        >
          <span>Get a Quote</span>
          <span className="text-xs">→</span>
        </Link>
      </div>
    </header>
  );
}
