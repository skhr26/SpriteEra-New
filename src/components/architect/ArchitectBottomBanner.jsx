import LeadCtaBanner from "../shared/LeadCtaBanner";
import {
  SecondaryCtaButton,
  DownloadCtaButton,
  WhatsAppCtaButton,
  CallCtaButton,
} from "../shared/CtaButtons";

export default function ArchitectBottomBanner({ data }) {
  if (!data) return null;
  const {
    title = "Let's Design Better Spaces Together",
    description = "Connect with our team for product support, technical information or project collaboration.",
    bgImage = "/images/architect/architect-footer-banner.jpg",
  } = data;

  return (
    <LeadCtaBanner
      eyebrow=""
      title={title}
      description={description}
      bgImage={bgImage}
      bgImageClassName="absolute inset-0 bg-cover bg-right bg-no-repeat pointer-events-none"
      scrimClassName="absolute inset-0 bg-gradient-to-r from-[#002855] via-[#002855]/95 md:via-[#002855]/70 to-transparent pointer-events-none"
      sectionClassName="relative bg-[#002855] text-white overflow-hidden border-t border-blue-900/50"
      innerClassName="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-14"
      layoutClassName="max-w-3xl lg:max-w-4xl flex flex-col justify-center"
      textClassName="max-w-3xl lg:max-w-4xl flex flex-col justify-center"
      titleClassName="text-2xl sm:text-3xl lg:text-[2rem] font-bold text-white tracking-tight leading-tight mb-2.5"
      descriptionClassName="text-blue-100/90 text-xs sm:text-sm leading-relaxed mb-6 max-w-xl"
      actions={
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap lg:flex-nowrap">
          <SecondaryCtaButton
            href="#enquiry"
            label="Connect With Us"
            className="rounded-lg px-5 sm:px-6 py-3 sm:py-3.5 flex-shrink-0"
          />
          <DownloadCtaButton />
          <WhatsAppCtaButton />
          <CallCtaButton />
        </div>
      }
    />
  );
}
