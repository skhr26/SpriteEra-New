import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { Lightbulb, CheckSquare, FileText, Headphones, PackageCheck } from "lucide-react";

const POINT_ICONS = [
  <Lightbulb key="1" className="w-5 h-5 text-brand-accent" strokeWidth={2.2} />,
  <CheckSquare key="2" className="w-5 h-5 text-brand-accent" strokeWidth={2.2} />,
  <FileText key="3" className="w-5 h-5 text-brand-accent" strokeWidth={2.2} />,
  <Headphones key="4" className="w-5 h-5 text-brand-accent" strokeWidth={2.2} />,
  <PackageCheck key="5" className="w-5 h-5 text-brand-accent" strokeWidth={2.2} />
];

export default function IndustrialProjectSupport({ data }) {
  if (!data) return null;
  const { tag, title, titleHighlight, description, ctas, points, image } = data;

  return (
    <section className="w-full bg-white py-16 md:py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto bg-brand-surface-soft/70 rounded-2xl border border-blue-100 overflow-hidden shadow-[0_0px_8px_rgba(0,0,0,0.06)] flex flex-col lg:flex-row items-stretch justify-between">
        {/* Left Column: Heading, description & CTAs */}
        <div className="p-8 sm:p-10 lg:p-12 lg:max-w-md xl:max-w-lg flex flex-col justify-center flex-shrink-0">
          <SectionHeading
            label={tag}
            title={`${title} `}
            highlight={titleHighlight}
            description={description}
            className="mb-8"
          />
          <div className="flex flex-nowrap items-center gap-3.5 mt-auto">
            <a
              href={ctas[0].href}
              className="bg-brand-blue hover:bg-brand-blue-hover text-white px-4 sm:px-6 py-3 rounded lg:rounded-md text-xs sm:text-sm font-medium transition shadow-lg inline-flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>{ctas[0].label}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href={ctas[1].href}
              className="bg-white hover:bg-gray-100 text-brand-navy border border-gray-200 hover:border-gray-300 px-4 sm:px-6 py-3 rounded lg:rounded-md text-xs sm:text-sm font-medium transition inline-flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>{ctas[1].label}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Middle Column: 5 support points */}
        <div className="px-8 pb-8 lg:py-12 lg:px-6 flex flex-col justify-center gap-4 flex-shrink-0">
          {points.map((pt, idx) => (
            <div key={pt} className="flex items-center gap-4 text-sm sm:text-base text-brand-navy font-semibold">
              <div className="w-10 h-10 rounded-full bg-brand-light-bubble border border-blue-200/60 shadow-[0_2px_8px_rgba(0,102,204,0.12)] flex items-center justify-center flex-shrink-0">
                {POINT_ICONS[idx]}
              </div>
              <span className="leading-tight">{pt}</span>
            </div>
          ))}
        </div>

        {/* Right Column: Engineers image */}
        <div className="lg:w-80 xl:w-96 flex-shrink-0 min-h-[260px] lg:min-h-full relative overflow-hidden m-4 lg:m-5 rounded-2xl shadow-[0_0px_8px_rgba(0,0,0,0.06)]">
          <Image
            src={image}
            alt="Engineers planning industrial lighting"
            fill
            sizes="(max-width: 1024px) 100vw, 24rem"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
