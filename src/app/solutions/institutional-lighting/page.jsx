import Navbar from "../../../components/Navbar";
import PageHero from "../../../components/PageHero";
import LandingFeatureSupport from "../../../components/landing/LandingFeatureSupport";
import LandingProjectsWithForm from "../../../components/landing/LandingProjectsWithForm";
import LandingCategories from "../../../components/landing/LandingCategories";
import LandingSteps from "../../../components/landing/LandingSteps";
import LandingPartnerFaq from "../../../components/landing/LandingPartnerFaq";
import LandingCtaBanner from "../../../components/landing/LandingCtaBanner";
import { institutionalData } from "../../../data/institutionalData";

export const metadata = {
  title: "Institutional Lighting Solutions | Vajra LED",
  description:
    "Reliable, efficient and long-lasting lighting solutions from Vajra LED for government, educational, healthcare and other institutional projects."
};

export default function InstitutionalLightingPage() {
  const { hero, support, institutions, enquiryForm, categories, process, partnerFaq, bottomBanner } =
    institutionalData;

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

      {/* 3. Why institutions choose Vajra */}
      <LandingFeatureSupport data={support} />

      {/* 4. Lighting solutions for different institutions + enquiry form */}
      <LandingProjectsWithForm data={institutions} formData={enquiryForm} />

      {/* 5. Product categories for institutional requirements */}
      <LandingCategories data={categories} />

      {/* 6. Our support process */}
      <LandingSteps data={process} />

      {/* 7. Reliable partner + FAQs */}
      <LandingPartnerFaq data={partnerFaq} />

      {/* 8. Dark bottom CTA banner (acts as footer) */}
      <LandingCtaBanner data={bottomBanner} />
    </div>
  );
}
