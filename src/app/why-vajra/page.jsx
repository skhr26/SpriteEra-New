import Navbar from "../../components/Navbar";
import PageHero from "../../components/PageHero";
import LandingTrustStrip from "../../components/landing/LandingTrustStrip";
import LandingAdvantageGrid from "../../components/landing/LandingAdvantageGrid";
import LandingBenefits from "../../components/landing/LandingBenefits";
import LandingCtaBanner from "../../components/landing/LandingCtaBanner";
import { whyVajraData } from "../../data/whyVajraData";

export const metadata = {
  title: "Why Choose Vajra LED | Vajra LED",
  description:
    "Reliable, energy-efficient and high quality lighting solutions backed by certified standards, strong manufacturing and dedicated customer support."
};

export default function WhyVajraPage() {
  const { hero, trust, advantage, benefits, bottomBanner } = whyVajraData;

  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      {/* 1. Global Navbar */}
      <Navbar />

      {/* 2. Hero */}
      <PageHero
        breadcrumbs={hero.breadcrumbs}
        tag={hero.tag}
        title={hero.title}
        titleHighlight={hero.titleHighlight}
        description={hero.description}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        bgImage={hero.bgImage}
        minHeight="min-h-[420px] lg:min-h-[520px]"
        imageOpacity="opacity-90"
        imageWrapperClassName="absolute inset-y-0 right-0 w-full md:w-[60%] z-0 [mask-image:linear-gradient(to_right,transparent,black_18%)]"
        highlightBlock
      />

      {/* 3. Trust strip */}
      <LandingTrustStrip data={trust} />

      {/* 4. Our strength: advantage grid */}
      <LandingAdvantageGrid data={advantage} />

      {/* 5. Additional benefits */}
      <LandingBenefits data={benefits} />

      {/* 6. Dark bottom CTA banner (acts as footer) */}
      <LandingCtaBanner data={bottomBanner} />
    </div>
  );
}
