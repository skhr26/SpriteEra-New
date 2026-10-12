import Link from "next/link";
import Navbar from "../../../components/Navbar";
import { industrialSolutionsData } from "../../../data/industrialLightingData";
import { whyVajraFeatures } from "../../../data/homeData";
import { Lightbulb, CheckSquare, FileText, Headphones, PackageCheck } from "lucide-react";

export default function IndustrialLightingPage() {
  const {
    hero,
    overview,
    applicationAreas,
    recommendedProducts,
    whyChooseVajra,
    planningProject,
    relatedSolutions
  } = industrialSolutionsData;

  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Global Navbar */}
      <Navbar />

      {/* 2. Hero Section with Industrial Background & Forklift */}
      <section className="relative bg-[#021327] text-white overflow-hidden">
        {/* Background photo without any baked-in text */}
        <div 
          className="absolute inset-0 bg-cover bg-center md:bg-right pointer-events-none opacity-50"
          style={{ backgroundImage: `url('/images/solutions/industrial-hero-clean.png')` }}
        />
        {/* Dark navy gradient overlay for crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021327] via-[#021831]/85 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 pt-6 pb-12 md:pb-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-300/80 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-500 font-normal">›</span>
            <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
            <span className="text-gray-500 font-normal">›</span>
            <span className="text-white font-semibold">Industrial Lighting</span>
          </nav>

          {/* Main Hero Content */}
          <div className="max-w-2xl py-4 md:py-8">
            <p className="text-xs font-bold tracking-widest text-[#4fa3ff] uppercase mb-3 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#4fa3ff]"></span>
              {hero.tag}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-[1.08]">
              {hero.title}{" "}
              <span className="text-white font-bold">{hero.titleSuffix}</span>
            </h1>
            <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl font-normal drop-shadow-sm">
              {hero.description}
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={hero.primaryCta.href}
                className="bg-[#0070f3] hover:bg-[#0060df] text-white px-7 py-3.5 rounded-md font-bold text-sm md:text-base transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                <span>Explore Products</span>
                <span>→</span>
              </a>
              <Link
                href={hero.secondaryCta.href}
                className="bg-white hover:bg-gray-100 text-[#001E36] px-7 py-3.5 rounded-md font-bold text-sm md:text-base transition-all shadow-sm hover:shadow-md inline-flex items-center gap-2"
              >
                <span>Get a Project Quote</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Hero Feature Badges Strip with vertical dividers matching the mockup */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-4 gap-x-8 text-sm text-gray-100 font-semibold">
            {hero.badges.map((b, idx) => (
              <div key={idx} className="flex items-center gap-x-8">
                <div className="flex items-center gap-3 drop-shadow-md">
                  <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                    <img
                      src={b.icon}
                      alt={b.label}
                      className="max-w-full max-h-full object-contain mix-blend-screen scale-110"
                    />
                  </div>
                  <span className="leading-tight text-xs sm:text-sm">{b.label}</span>
                </div>
                {idx < hero.badges.length - 1 && (
                  <span
                    className="h-5 w-px bg-white/25 hidden sm:inline-block"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Overview Section */}
      <section className="py-16 md:py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7">
            <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2 flex items-center gap-2">
              <span className="w-5 h-px bg-blue-600"></span>
              {overview.tag}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#001E36] tracking-tight mb-4">
              {overview.title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              {overview.description}
            </p>
            <Link
              href={overview.cta.href}
              className="inline-flex items-center gap-2 bg-[#0066cc] hover:bg-[#0052a3] text-white px-6 py-3 rounded-md text-xs md:text-sm font-bold transition-all shadow-sm"
            >
              <span>Talk to a Lighting Expert</span>
              <span>→</span>
            </Link>
          </div>

          {/* Right Cards: 4 highlights + Video Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* 4 Application spaces - seamlessly blended circular symbol buttons with text outside */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {overview.spaces.map((sp) => (
                <div key={sp.id} className="flex flex-col items-center group cursor-pointer">
                  {/* Circular Button with pure symbol and ZERO internal text */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-[0_4px_18px_rgba(0,102,204,0.12)] border border-blue-100 flex items-center justify-center p-3.5 mb-2.5 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                    <img
                      src={`/images/solutions/${sp.id === 'factories' ? 'pure-space-factory.png' : sp.id === 'warehouses' ? 'pure-space-warehouse.png' : sp.id === 'workshops' ? 'pure-space-workshop.png' : 'pure-space-logistics.png'}`}
                      alt={sp.label}
                      className="w-9 h-9 sm:w-11 sm:h-11 object-contain"
                    />
                  </div>
                  {/* Clean text strictly OUTSIDE the button */}
                  <span className="font-bold text-xs sm:text-sm text-[#001E36] leading-tight mb-0.5">
                    {sp.label}
                  </span>
                  <span className="text-[11px] sm:text-xs text-gray-500 leading-tight">
                    {sp.sub}
                  </span>
                </div>
              ))}
            </div>

            {/* Video Card - Clean photo with no text in picture */}
            <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer border border-gray-100">
              <img
                src="/images/solutions/industrial-video-clean.png"
                alt="See Industrial Lighting in Action"
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-blue-600 flex items-center justify-center shadow-md font-bold text-sm pl-0.5 group-hover:scale-110 transition-transform">
                    ▶
                  </div>
                  <div>
                    <h4 className="text-white text-xs sm:text-sm font-bold leading-tight">
                      {overview.videoCard.title}
                    </h4>
                    <p className="text-gray-300 text-[11px]">
                      {overview.videoCard.duration}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Where Industrial Lighting is Used (8 Application Cards) */}
      <section className="bg-gray-50 py-16 md:py-20 px-4 md:px-12 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <p className="text-xs font-bold tracking-widest text-[#0066cc] uppercase mb-2 flex items-center gap-2">
                <span className="w-5 h-px bg-[#0066cc]"></span>
                APPLICATION AREAS
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#001E36] tracking-tight">
                Where Industrial Lighting is Used
              </h2>
            </div>
            <Link
              href="/solutions"
              className="mt-3 sm:mt-0 text-xs sm:text-sm font-semibold text-[#0066cc] hover:text-blue-800 flex items-center gap-1"
            >
              <span>View All Applications</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationAreas.map((app) => (
              <div
                key={app.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col"
              >
                <div className="h-40 overflow-hidden bg-gray-100">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-sm md:text-base text-[#001E36] mb-1.5 min-h-[2.5rem] flex items-center">
                    {app.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-grow line-clamp-2">
                    {app.desc}
                  </p>
                  <Link
                    href={app.link}
                    className="text-xs font-bold text-[#0066cc] hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    <span>Explore</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Recommended Products Section */}
      <section id="products" className="py-16 md:py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold tracking-widest text-[#0066cc] uppercase mb-2 flex items-center gap-2">
              <span className="w-5 h-px bg-[#0066cc]"></span>
              RECOMMENDED PRODUCTS
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#001E36] tracking-tight">
              Products for <span className="text-[#0066cc]">Industrial Lighting</span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              Explore Vajra LED products suitable for industrial applications.
            </p>
          </div>
          <Link
            href="/products"
            className="mt-3 sm:mt-0 text-xs sm:text-sm font-semibold text-[#0066cc] hover:text-blue-800 flex items-center gap-1"
          >
            <span>View All Industrial Products</span>
            <span>→</span>
          </Link>
        </div>

        {/* 5 Product Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mb-14">
          {recommendedProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-2xl border border-gray-200/90 p-5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col group text-center hover:-translate-y-1.5"
            >
              <div className="h-36 flex items-center justify-center p-2 mb-4 bg-white">
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="font-bold text-sm sm:text-[15px] text-[#001E36] mb-1.5 min-h-[2.75rem] flex items-center justify-center line-clamp-2 leading-tight group-hover:text-[#0066cc] transition-colors">
                {prod.title}
              </h3>
              <p className="text-gray-500 text-xs mb-4 leading-relaxed flex-grow">
                {prod.desc}
              </p>
              <Link
                href={prod.link}
                className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center justify-center gap-1 mt-auto pt-2"
              >
                <span>View Product</span>
                <span className="text-sm">→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Not Sure Which Product You Need? Card */}
        <div className="bg-gradient-to-r from-blue-50/70 via-indigo-50/50 to-blue-50/70 rounded-2xl border border-blue-100 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#001E36] mb-2">
              Not Sure Which Product You Need?
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-6">
              Tell us about your space and requirement. Our team can help you identify suitable lighting products for your application.
            </p>
            <Link
              href="/contact"
              className="bg-[#0066cc] hover:bg-[#0052a3] text-white px-6 py-3 rounded-md text-xs sm:text-sm font-bold transition shadow-sm inline-flex items-center gap-2"
            >
              <span>Request Product Recommendation</span>
              <span>→</span>
            </Link>
          </div>

          {/* 3 Step Flow using original full uncropped diagram */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg flex items-center justify-center">
            <img
              src="/images/solutions/recommendation-workflow.png"
              alt="1. Share your requirement, 2. Get expert recommendation, 3. Receive product options & quote"
              className="w-full h-auto object-contain mix-blend-multiply select-none"
            />
          </div>
        </div>
      </section>

      {/* 6. Why Choose Vajra LED (Exact duplicate of homepage) */}
      <section className="relative bg-[#06172d] text-white py-20 md:py-24 px-4 md:px-12 overflow-hidden">
        {/* Architectural background with illuminated building on the right */}
        <img
          src="/images/why-vajra-bg.jpg"
          alt="Why Choose Vajra LED"
          className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none"
        />
        {/* Deep navy gradient on left fading towards building on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06172d] via-[#06172d]/90 md:via-[#06172d]/80 to-[#06172d]/30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Why Choose <span className="text-[#0088ff]">Vajra LED</span>
          </h2>
          <p className="text-gray-200 max-w-2xl mb-16 text-base sm:text-lg md:text-xl leading-relaxed font-normal">
            Reliable products, application support and a customer-first approach for your lighting projects.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 lg:gap-12">
            {whyVajraFeatures.map((feature) => (
              <div key={feature.id || feature.title} className="group flex flex-col items-start">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/25 bg-white/10 backdrop-blur-md flex items-center justify-center mb-5 transition-all group-hover:scale-110 shadow-[0_6px_24px_rgba(0,0,0,0.3)] group-hover:border-blue-400">
                  <img
                    src={feature.iconUrl}
                    alt={feature.title}
                    className="w-9 h-9 sm:w-11 sm:h-11 object-contain mix-blend-screen"
                  />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-white mb-2 leading-snug">{feature.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Planning a Larger Industrial Project? Banner matching mockup */}
      <section className="py-16 md:py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="bg-[#f0f6ff]/70 rounded-2xl border border-blue-100 overflow-hidden shadow-sm flex flex-col lg:flex-row items-stretch justify-between">
          {/* Left Column: Heading, description & CTAs */}
          <div className="p-8 sm:p-10 lg:p-12 lg:max-w-md xl:max-w-lg flex flex-col justify-center flex-shrink-0">
            <p className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-blue-600"></span>
              {planningProject.tag}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#001E36] mb-3.5 tracking-tight leading-tight">
              {planningProject.title}
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-8">
              {planningProject.description}
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mt-auto">
              <Link
                href="/contact"
                className="bg-[#0070f3] hover:bg-[#0060df] text-white px-6 py-3 rounded-md text-xs sm:text-sm font-bold transition shadow-sm hover:shadow-md inline-flex items-center gap-1.5"
              >
                <span>Get a Project Quote</span>
                <span>→</span>
              </Link>
              <Link
                href="/contact"
                className="bg-white border border-gray-300 hover:bg-gray-50 text-[#001E36] px-6 py-3 rounded-md text-xs sm:text-sm font-semibold transition inline-flex items-center gap-1.5"
              >
                <span>Talk to Our Team</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Middle Column: 5 Points in a Clean Vertical Stack with Authentic Icons */}
          <div className="px-8 pb-8 lg:py-12 lg:px-6 flex flex-col justify-center gap-4.5 flex-shrink-0">
            {planningProject.points.map((pt, idx) => {
              const icons = [
                <Lightbulb key="1" className="w-5 h-5 text-[#0066cc]" strokeWidth={2.2} />,
                <CheckSquare key="2" className="w-5 h-5 text-[#0066cc]" strokeWidth={2.2} />,
                <FileText key="3" className="w-5 h-5 text-[#0066cc]" strokeWidth={2.2} />,
                <Headphones key="4" className="w-5 h-5 text-[#0066cc]" strokeWidth={2.2} />,
                <PackageCheck key="5" className="w-5 h-5 text-[#0066cc]" strokeWidth={2.2} />
              ];
              return (
                <div key={idx} className="flex items-center gap-4 text-sm sm:text-base text-[#001E36] font-semibold">
                  <div className="w-10 h-10 rounded-full bg-[#e1effe] border border-blue-200/60 shadow-[0_2px_8px_rgba(0,102,204,0.12)] flex items-center justify-center flex-shrink-0">
                    {icons[idx]}
                  </div>
                  <span className="leading-tight">{pt}</span>
                </div>
              );
            })}
          </div>

          {/* Right Column: Full-bleed image covering the complete right space with rounded corner */}
          <div className="lg:w-80 xl:w-96 flex-shrink-0 min-h-[260px] lg:min-h-full relative overflow-hidden m-4 lg:m-5 rounded-2xl shadow-sm">
            <img
              src={planningProject.image}
              alt="Engineers planning industrial lighting"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* 8. Explore More Lighting Solutions (4 Cards) */}
      <section className="bg-gray-50 py-16 px-4 md:px-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <p className="text-xs font-bold tracking-widest text-[#0066cc] uppercase mb-2 flex items-center gap-2">
                <span className="w-5 h-px bg-[#0066cc]"></span>
                RELATED SOLUTIONS
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#001E36] tracking-tight">
                Explore More Lighting Solutions
              </h2>
            </div>
            <Link
              href="/solutions"
              className="mt-3 sm:mt-0 text-xs sm:text-sm font-semibold text-[#0066cc] hover:text-blue-800 flex items-center gap-1"
            >
              <span>View All Solutions</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedSolutions.map((sol, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col"
              >
                <div className="h-36 overflow-hidden bg-gray-100">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-bold text-sm md:text-base text-[#001E36] mb-1 min-h-[2.5rem] flex items-center group-hover:text-[#0066cc] transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-3 flex-grow line-clamp-2 leading-relaxed">
                    {sol.desc}
                  </p>
                  <Link
                    href={sol.link}
                    className="text-xs font-bold text-[#0066cc] hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    <span>Explore</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Bottom Industrial Footer CTA matching mockup */}
      <footer className="relative bg-[#021832] text-white overflow-hidden border-t border-blue-900/40">
        {/* Clean industrial loading dock background with zero baked-in text */}
        <div 
          className="absolute inset-0 bg-cover bg-right md:bg-right-bottom pointer-events-none opacity-80"
          style={{ backgroundImage: `url('/images/solutions/industrial-footer-dock-clean.png')` }}
        />
        {/* Smooth gradient overlay to ensure text contrast and flawless edge blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021832] via-[#021832]/85 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 pt-14 md:pt-16 pb-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-blue-400/20">
            {/* Left Copy */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-widest text-[#4fa3ff] uppercase mb-2 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-[#4fa3ff]"></span>
                LET&apos;S WORK TOGETHER
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
                Have an Industrial Lighting Requirement?
              </h2>
              <p className="text-blue-100/80 text-xs sm:text-sm leading-relaxed max-w-lg">
                Whether you need a single product or lighting for a complete project, our team is ready to help.
              </p>
            </div>

            {/* Right Action Buttons matching mockup */}
            <div className="flex flex-col gap-3 w-full sm:w-auto">
              {/* Row 1: Get a Project Quote */}
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#022d64] px-7 py-3 rounded-md font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Get a Project Quote</span>
                <span className="text-base leading-none">→</span>
              </Link>

              {/* Row 2: WhatsApp Us & Call Now matching identical shape */}
              <div className="flex flex-row items-center gap-2.5 w-full sm:w-auto">
                {/* WhatsApp Us */}
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial h-[38px] px-5 bg-[#1b76d2] hover:bg-[#1565c0] text-white rounded-[5px] font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
                >
                  <img
                    src="/images/solutions/exact-wa-icon-clean.png"
                    alt=""
                    className="w-4 h-4 object-contain brightness-200"
                  />
                  <span>WhatsApp Us</span>
                </a>

                {/* Call Now */}
                <a
                  href="tel:+919999999999"
                  className="flex-1 sm:flex-initial h-[38px] px-5 bg-transparent hover:bg-white/10 text-white border border-white/50 hover:border-white rounded-[5px] font-medium text-xs sm:text-sm transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom feature badges strip using newly uploaded vector symbols */}
          <div className="pt-8 pb-3 flex flex-wrap items-center justify-between gap-6 text-sm text-blue-100 font-medium border-t border-blue-400/20 mt-2">
            <div className="flex items-center gap-3">
              <img src="/images/solutions/footer-symbol-gear.png" alt="" className="w-6 h-6 object-contain brightness-125" />
              <span className="tracking-wide">Quick Response</span>
            </div>
            <div className="flex items-center gap-3">
              <img src="/images/solutions/footer-symbol-clipboard.png" alt="" className="w-6 h-6 object-contain brightness-125" />
              <span className="tracking-wide">Application Guidance</span>
            </div>
            <div className="flex items-center gap-3">
              <img src="/images/solutions/footer-symbol-document.png" alt="" className="w-6 h-6 object-contain brightness-125" />
              <span className="tracking-wide">Technical Support</span>
            </div>
            <div className="flex items-center gap-3">
              <img src="/images/solutions/footer-symbol-pin.png" alt="" className="w-6 h-6 object-contain brightness-125" />
              <span className="tracking-wide">Pan India Supply</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
