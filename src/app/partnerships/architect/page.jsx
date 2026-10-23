import Navbar from "../../../components/Navbar";
import PageHero from "../../../components/PageHero";
import LandingFeatureSupport from "../../../components/landing/LandingFeatureSupport";
import LandingProjectsWithForm from "../../../components/landing/LandingProjectsWithForm";
import LandingCategories from "../../../components/landing/LandingCategories";
import LandingSteps from "../../../components/landing/LandingSteps";
import LandingGalleryFaq from "../../../components/landing/LandingGalleryFaq";
import LandingCtaBanner from "../../../components/landing/LandingCtaBanner";
import { architectPartnershipData } from "../../../data/architectPartnershipData";

export const metadata = {
  title: "Architectural Partnership | Vajra LED",
  description:
    "Partner with Vajra LED to bring reliable, efficient and aesthetically appealing lighting solutions to your architectural projects."
};

export default function ArchitectPartnershipPage() {
  const {
    hero,
    support,
    projects,
    enquiryForm,
    categories,
    process,
    galleryFaq,
    bottomBanner
  } = architectPartnershipData;

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

      {/* 3. Why architects choose Vajra */}
      <LandingFeatureSupport data={support} />

      {/* 4. Lighting for modern architectural projects + enquiry form */}
      <LandingProjectsWithForm data={projects} formData={enquiryForm} />

      {/* 5. Product categories for architectural applications */}
      <LandingCategories data={categories} />

      {/* 6. Support at every stage */}
      <LandingSteps data={process} />

      {/* 7. Project inspiration + FAQs */}
      <LandingGalleryFaq data={galleryFaq} />

      {/* 8. Dark bottom CTA banner (acts as footer) */}
      <LandingCtaBanner data={bottomBanner} />
    </div>
  );
}
