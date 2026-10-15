import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../../../components/shared/Navbar";
import IndustrialBottomBanner from "../../../components/industrial/IndustrialBottomBanner";
import PageHero from "../../../components/shared/PageHero";
import SolutionOverview from "../../../components/industrial/SolutionOverview";
import SectionHeader from "../../../components/shared/SectionHeader";
import SolutionCard from "../../../components/shared/SolutionCard";
import ProductCard from "../../../components/shared/ProductCard";
import RecommendationWorkflowCard from "../../../components/shared/RecommendationWorkflowCard";
import WhyChooseVajra from "../../../components/shared/WhyChooseVajra";
import ProjectPlanningBanner from "../../../components/shared/ProjectPlanningBanner";
import { industrialSolutionsData } from "../../../data/industrialLightingData";
import { whyVajraFeatures } from "../../../data/homeData";

export const metadata = {
  title: "Industrial Lighting Solutions | Vajra LED",
  description: "Reliable and efficient lighting for factories, manufacturing units, warehouses and industrial facilities."
};

export default function IndustrialLightingPage() {
  const {
    hero,
    overview,
    applicationAreas,
    recommendedProducts,
    whyChooseVajra,
    planningProject,
    relatedSolutions
  } = industrialSolutionsData;

  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 antialiased selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      {/* 1. Global Navbar */}
      <Navbar />

      {/* 2. Hero Section (Shared PageHero) */}
      <PageHero
        breadcrumbs={hero.breadcrumbs}
        tag={hero.tag}
        titleHighlight={hero.title}
        titleHighlightClass="text-brand-accent-light"
        titleSuffix={hero.titleSuffix}
        description={hero.description}
        bgImage={hero.bgImage}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        badges={hero.badges}
      />

      {/* 3. Overview Section (Shared SolutionOverview) */}
      <SolutionOverview overview={overview} />

      {/* 4. Where Industrial Lighting is Used (Shared SolutionCard grid) */}
      <section className="w-full bg-gray-50 py-16 md:py-20 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <SectionHeader
            label="APPLICATION AREAS"
            title="Where Industrial Lighting is Used"
            actionText="View All Applications"
            actionHref="/solutions"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationAreas.map((app) => (
              <SolutionCard
                key={app.id}
                title={app.title}
                desc={app.desc}
                imageUrl={app.image}
                link={app.link}
                buttonText="Explore"
                imageHeight="h-40"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Recommended Products Section (Shared ProductCard & RecommendationWorkflowCard) */}
      <section id="products" className="w-full py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <SectionHeader
            label="RECOMMENDED PRODUCTS"
            title="Products for"
            highlight="Industrial Lighting"
            description="Explore Vajra LED products suitable for industrial applications."
            actionText="View All Industrial Products"
            actionHref="/products"
          >
            <div className="hidden sm:flex items-center gap-1.5 ml-2">
              <button
                type="button"
                aria-label="Previous Products"
                className="w-8 h-8 rounded-full border border-gray-300 hover:border-gray-400 bg-white flex items-center justify-center text-gray-600 hover:text-brand-navy transition shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                aria-label="Next Products"
                className="w-8 h-8 rounded-full border border-gray-300 hover:border-gray-400 bg-white flex items-center justify-center text-gray-600 hover:text-brand-navy transition shadow-xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </SectionHeader>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mb-14">
            {recommendedProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                title={prod.title}
                desc={prod.desc}
                imageUrl={prod.image}
                link={prod.link}
                buttonText="View Product"
              />
            ))}
          </div>

          {/* Not Sure Which Product You Need? Shared Recommendation Card */}
          <RecommendationWorkflowCard />
        </div>
      </section>

      {/* 6. Why Choose Vajra LED (Shared component exactly as used in home page) */}
      <WhyChooseVajra features={whyVajraFeatures} />

      {/* 7. Planning a Larger Industrial Project? (Shared ProjectPlanningBanner) */}
      <ProjectPlanningBanner {...planningProject} />

      {/* 8. Explore More Lighting Solutions (Shared SolutionCard grid) */}
      <section className="w-full bg-gray-50 py-16 md:py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <SectionHeader
            label="RELATED SOLUTIONS"
            title="Explore More Lighting Solutions"
            actionText="View All Solutions"
            actionHref="/solutions"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedSolutions.map((sol, idx) => (
              <SolutionCard
                key={idx}
                title={sol.title}
                desc={sol.desc}
                imageUrl={sol.image}
                link={sol.link}
                buttonText="Explore"
                imageHeight="h-36"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Industrial Bottom Banner (Industrial Footer) */}
      <IndustrialBottomBanner />
    </div>
  );
}
