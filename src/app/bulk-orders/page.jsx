import Navbar from "../../components/Navbar";
import PageHero from "../../components/PageHero";
import LandingFeatureSupport from "../../components/landing/LandingFeatureSupport";
import LandingProjectsWithForm from "../../components/landing/LandingProjectsWithForm";
import LandingCategories from "../../components/landing/LandingCategories";
import LandingSteps from "../../components/landing/LandingSteps";
import LandingCtaBanner from "../../components/landing/LandingCtaBanner";
import { bulkOrdersData } from "../../data/bulkOrdersData";

export const metadata = {
  title: "Bulk Orders | Large Quantity LED Lighting Supply | Vajra LED",
  description:
    "Get competitive pricing, reliable supply and dedicated support for large quantity LED lighting orders. Bulk supply for projects, institutions, businesses and government requirements."
};

export default function BulkOrdersPage() {
  const { hero, whyChoose, supplyNeeds, enquiryForm, categories, howItWorks, bottomBanner } =
    bulkOrdersData;

  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      {/* 1. Global Navbar */}
      <Navbar />

      {/* 2. Hero (home-page visual language) */}
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
        imageOpacity="opacity-60"
      />

      {/* 3. Why Choose Vajra for Bulk Orders */}
      <LandingFeatureSupport data={whyChoose} />

      {/* 4. Bulk Supply for Different Needs + Enquiry Form */}
      <LandingProjectsWithForm data={supplyNeeds} formData={enquiryForm} />

      {/* 5. Explore Product Categories */}
      <LandingCategories data={categories} />

      {/* 6. How It Works + Checklist + FAQs */}
      <LandingSteps data={howItWorks} />

      {/* 7. Dark Bottom CTA banner (acts as footer, matching architect/solutions pages) */}
      <LandingCtaBanner data={bottomBanner} />
    </div>
  );
}
