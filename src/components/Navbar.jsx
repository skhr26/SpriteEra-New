"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import EnquiryTrigger from "./enquiry/EnquiryTrigger";
import { navigationLinks, siteConfig } from "../data/homeData";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={siteConfig.logoUrl}
              alt={`${siteConfig.name} Logo`}
              width={1024}
              height={338}
              preload
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-semibold text-gray-700">
          {navigationLinks.map((link, idx) => {
            const isActive =
              link.href !== "#" &&
              (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href));

            return (
              <Link
                key={idx}
                href={link.href}
                className={isActive ? "text-brand-accent border-b-2 border-brand-accent pb-1" : "hover:text-brand-accent"}
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
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors text-gray-600 flex items-center justify-center"
          >
            <Image
              src="/images/icon-search.png"
              alt="Search"
              width={63}
              height={70}
              className="w-5 h-5 object-contain"
            />
          </button>
          <EnquiryTrigger className="bg-brand-blue text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-brand-blue-hover transition-colors shadow-sm flex items-center gap-1.5 cursor-pointer">
            <span>Get a Quote</span>
            <ArrowRight className="size-4" strokeWidth={2} />
          </EnquiryTrigger>
        </div>
      </div>
    </header>
  );
}
