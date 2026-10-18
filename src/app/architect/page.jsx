import Navbar from "../../components/Navbar";
import PageHero from "../../components/PageHero";
import ArchitectWhyChoose from "../../components/architect/ArchitectWhyChoose";
import ArchitectProjectsSection from "../../components/architect/ArchitectProjectsSection";
import ArchitectCategoriesSection from "../../components/architect/ArchitectCategoriesSection";
import ArchitectSupportStages from "../../components/architect/ArchitectSupportStages";
import ArchitectGalleryAndFaq from "../../components/architect/ArchitectGalleryAndFaq";
import ArchitectBottomBanner from "../../components/architect/ArchitectBottomBanner";
import { architectData } from "../../data/architectData";

export const metadata = {
  title: "Collaborate With Vajra | Architectural Lighting Design",
  description: "Partner with Vajra LED to bring reliable, efficient and aesthetically appealing lighting solutions to your architectural projects."
};

export default function ArchitectPage() {
  const {
    hero,
    whyArchitectsChoose,
    projectsSection,
    productCategoriesSection,
    supportStagesSection,
    galleryAndFaq,
    bottomBanner
  } = architectData;

  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      {/* 1. Global Navbar */}
      <Navbar />

      {/* 2. Hero Section (Home-page visual language) */}
      <PageHero
        breadcrumbs={hero.breadcrumbs}
        tag={hero.tag}
        title={hero.title}
        titleHighlight={hero.titleHighlight}
        description={hero.description}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        bgImage={hero.bgImage}
        imageOpacity="opacity-90"
        minHeight="min-h-[560px] lg:min-h-[720px]"
        badges={hero.badges}
        badgesInline
      />

      {/* 3. Why Architects Choose Vajra */}
      <ArchitectWhyChoose data={whyArchitectsChoose} />

      {/* 4. Modern Architectural Projects & Architect Enquiry Form */}
      <ArchitectProjectsSection data={projectsSection} />

      {/* 5. A Complete Range for Architectural Applications */}
      <ArchitectCategoriesSection data={productCategoriesSection} />

      {/* 6. Support at Every Stage of Your Project (4-step connected flow) */}
      <ArchitectSupportStages data={supportStagesSection} />

      {/* 7. Inspiration Gallery & Interactive FAQs Accordion */}
      <ArchitectGalleryAndFaq data={galleryAndFaq} />

      {/* 8. Bottom CTA Banner (Architect Footer) */}
      <ArchitectBottomBanner data={bottomBanner} />
    </div>
  );
}
