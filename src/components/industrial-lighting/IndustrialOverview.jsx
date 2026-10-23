import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { PrimaryButton } from "../Buttons";
import { Play } from "lucide-react";

export default function IndustrialOverview({ data }) {
  if (!data) return null;
  const { tag, title, titleHighlight, description, cta, spaces, videoCard } = data;

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Heading + copy + CTA */}
        <div className="lg:col-span-6">
          <SectionHeading
            label={tag}
            title={`${title} `}
            highlight={titleHighlight}
            description={description}
            className="mb-8"
          />
          <PrimaryButton href={cta.href} label={cta.label} />
        </div>

        {/* Right Column: 4 spaces + Video card */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* 4 Application spaces — circular icon buttons with text below */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {spaces.map((sp) => {
              const Icon = sp.icon;
              return (
                <div key={sp.id} className="flex flex-col items-center group cursor-pointer">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-[0_4px_18px_rgba(0,102,204,0.12)] border border-blue-100 flex items-center justify-center mb-2.5 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:border-blue-200">
                    {Icon && <Icon className="size-7 sm:size-8 text-brand-accent" strokeWidth={1.5} />}
                  </div>
                  <span className="font-bold text-sm text-brand-navy leading-tight mb-0.5">
                    {sp.label}
                  </span>
                  <span className="text-xs text-gray-500 leading-tight">
                    {sp.sub}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Video Card */}
          <div className="relative h-44 rounded-xl overflow-hidden shadow-[0_0px_8px_rgba(0,0,0,0.06)] group cursor-pointer border border-gray-200/90 hover:shadow-[0_5px_15px_rgb(0,0,0,0.12)] transition-all duration-300">
            <Image
              src="/images/solutions/industrial-video-clean.png"
              alt={videoCard.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/90 text-brand-accent flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-current pl-0.5" />
                </div>
                <div>
                  <h4 className="text-white text-xs sm:text-sm font-bold leading-tight">
                    {videoCard.title}
                  </h4>
                  <p className="text-gray-300 text-[11px]">
                    {videoCard.duration}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
