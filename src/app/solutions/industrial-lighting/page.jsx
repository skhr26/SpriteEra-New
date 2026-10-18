import Navbar from "../../../components/Navbar";
import PageHero from "../../../components/PageHero";
import IndustrialOverview from "../../../components/industrial-lighting/IndustrialOverview";
import IndustrialApplicationAreas from "../../../components/industrial-lighting/IndustrialApplicationAreas";
import IndustrialRecommendedProducts from "../../../components/industrial-lighting/IndustrialRecommendedProducts";
import IndustrialWhyChoose from "../../../components/industrial-lighting/IndustrialWhyChoose";
import IndustrialProjectSupport from "../../../components/industrial-lighting/IndustrialProjectSupport";
import IndustrialRelatedSolutions from "../../../components/industrial-lighting/IndustrialRelatedSolutions";
import IndustrialBottomBanner from "../../../components/industrial-lighting/IndustrialBottomBanner";
import { industrialSolutionsData } from "../../../data/industrialLightingData";

export const metadata = {
  title: "Industrial Lighting Solutions | Vajra LED",
  description: "Reliable and efficient LED lighting for factories, manufacturing units, warehouses and industrial facilities — with application support and project guidance."
};

export default function IndustrialLightingPage() {
  const {
    hero,
    overview,
    applicationAreasSection,
    applicationAreas,
    whySection,
    whyChooseVajra,
    planningProject,
    relatedSection,
    relatedSolutions,
    bottomBanner
  } = industrialSolutionsData;

  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      {/* 1. Global Navbar */}
      <Navbar />

      {/* 2. Hero — shared PageHero (breadcrumb, tag, headline, CTAs, badge strip) */}
      <PageHero
        breadcrumbs={hero.breadcrumbs}
        tag={hero.tag}
        title={hero.title}
        titleHighlight={hero.titleHighlight}
        description={hero.description}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        bgImage="/images/solutions/industrial-hero-clean.png"
        imageOpacity="opacity-50"
        badges={hero.badges}
        highlightFirst
      />

      {/* 3. Overview */}
      <IndustrialOverview data={overview} />

      {/* 4. Where Industrial Lighting is Used — 8 application cards */}
      <IndustrialApplicationAreas section={applicationAreasSection} areas={applicationAreas} />

      {/* 5. Recommended Products + Not Sure banner */}
      <IndustrialRecommendedProducts />

      {/* 6. Why Choose Vajra LED */}
      <IndustrialWhyChoose section={whySection} features={whyChooseVajra} />

      {/* 7. Planning a Larger Industrial Project? */}
      <IndustrialProjectSupport data={planningProject} />

      {/* 8. Explore More Lighting Solutions */}
      <IndustrialRelatedSolutions section={relatedSection} solutions={relatedSolutions} />

      {/* 9. Bottom industrial CTA banner (page footer, as in the mock) */}
      <IndustrialBottomBanner data={bottomBanner} />
    </div>
  );
}
