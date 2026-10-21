import Navbar from "../../../components/Navbar";
import PageHero from "../../../components/PageHero";
import LandingFeatureSupport from "../../../components/landing/LandingFeatureSupport";
import LandingProjectsWithForm from "../../../components/landing/LandingProjectsWithForm";
import LandingCategories from "../../../components/landing/LandingCategories";
import LandingImageCta from "../../../components/landing/LandingImageCta";
import LandingSteps from "../../../components/landing/LandingSteps";
import LandingEnquirySection from "../../../components/landing/LandingEnquirySection";
import { dealerData } from "../../../data/dealerData";

export const metadata = {
  title: "Become a Vajra LED Dealer | Vajra LED",
  description:
    "Grow your lighting business with Vajra LED. Partner with us to offer a wide range of lighting products for residential, commercial, industrial and outdoor applications."
};

export default function DealerPartnershipPage() {
  const { hero, support, businessTypes, categories, imageCta, process, enquiry } = dealerData;

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
        badges={hero.badges}
        badgesInline
        imageOpacity="opacity-70"
      />

      {/* 3. Build Your Lighting Business With Vajra */}
      <LandingFeatureSupport data={support} />

      {/* 4. Ideal for Different Business Types + Let's Grow Together panel */}
      <LandingProjectsWithForm data={businessTypes} />

      {/* 5. Explore Our Product Categories */}
      <LandingCategories data={categories} />

      {/* 6. Ready to Expand Your Lighting Business? */}
      <LandingImageCta data={imageCta} />

      {/* 7. How to Become a Vajra Dealer */}
      <LandingSteps data={process} />

      {/* 8. Dealer enquiry form (acts as footer) */}
      <LandingEnquirySection data={enquiry} />
    </div>
  );
}
