import Navbar from "../../../components/Navbar";
import PageHero from "../../../components/PageHero";
import LandingFeatureSupport from "../../../components/landing/LandingFeatureSupport";
import LandingProjectsWithForm from "../../../components/landing/LandingProjectsWithForm";
import LandingCategories from "../../../components/landing/LandingCategories";
import LandingSteps from "../../../components/landing/LandingSteps";
import LandingCtaBanner from "../../../components/landing/LandingCtaBanner";
import { distributorData } from "../../../data/distributorData";

export const metadata = {
  title: "Become a Vajra LED Distributor | Vajra LED",
  description:
    "Partner with Vajra LED to distribute a wide range of lighting products across retail, commercial, industrial and outdoor applications. Expand your business with a reliable and growing lighting brand."
};

export default function DistributorPartnershipPage() {
  const { hero, support, partners, categories, process, bottomBanner } = distributorData;

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

      {/* 3. Grow Your Business With Vajra */}
      <LandingFeatureSupport data={support} />

      {/* 4. Who Can Become a Vajra Distributor? */}
      <LandingProjectsWithForm data={partners} />

      {/* 5. Product Categories for Distribution */}
      <LandingCategories data={categories} />

      {/* 6. Distributor Partnership Process + FAQ + Enquiry Form */}
      <LandingSteps data={process} />

      {/* 7. Dark bottom CTA banner (acts as footer) */}
      <LandingCtaBanner data={bottomBanner} />
    </div>
  );
}
