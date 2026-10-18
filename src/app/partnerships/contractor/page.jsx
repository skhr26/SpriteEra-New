import Navbar from "../../../components/Navbar";
import PageHero from "../../../components/PageHero";
import LandingFeatureSupport from "../../../components/landing/LandingFeatureSupport";
import LandingProjectsWithForm from "../../../components/landing/LandingProjectsWithForm";
import LandingCategories from "../../../components/landing/LandingCategories";
import LandingSteps from "../../../components/landing/LandingSteps";
import LandingFaqColumns from "../../../components/landing/LandingFaqColumns";
import LandingCtaBanner from "../../../components/landing/LandingCtaBanner";
import { contractorData } from "../../../data/contractorData";

export const metadata = {
  title: "Partner With Vajra as a Contractor | Vajra LED",
  description:
    "Reliable lighting products and support for your construction and project requirements. Work with Vajra LED for quality products, technical assistance and on-time supply."
};

export default function ContractorPartnershipPage() {
  const { hero, support, solutions, enquiryForm, categories, process, faq, bottomBanner } =
    contractorData;

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
      />

      {/* 3. Reliable Support for Your Projects */}
      <LandingFeatureSupport data={support} />

      {/* 4. Lighting Solutions for Your Construction Projects + Enquiry Form */}
      <LandingProjectsWithForm data={solutions} formData={enquiryForm} />

      {/* 5. Product Categories for Your Projects */}
      <LandingCategories data={categories} />

      {/* 6. A Simple Process to Get Started */}
      <LandingSteps data={process} />

      {/* 7. Common Questions */}
      <LandingFaqColumns data={faq} />

      {/* 8. Dark bottom CTA banner (acts as footer) */}
      <LandingCtaBanner data={bottomBanner} />
    </div>
  );
}
