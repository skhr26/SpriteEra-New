import { solutionsData } from "../../data/homeData";
import SectionHeader from "../shared/SectionHeader";
import SolutionCard from "../shared/SolutionCard";

export default function SolutionsGrid() {
  return (
    <section id="solutions" className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
      <SectionHeader
        label="OUR SOLUTIONS"
        title="Find the Right"
        highlight="Lighting Solution"
        description="Every space has different lighting requirements. Explore our application-based solutions to find suitable products for your project."
        actionText="View All Solutions"
        actionHref="/solutions"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutionsData.map((sol) => (
          <SolutionCard
            key={sol.id || sol.title}
            title={sol.title}
            desc={sol.desc}
            imageUrl={sol.imageUrl}
            iconUrl={sol.iconUrl}
            link={sol.link}
            buttonText="Explore Solution"
            imageHeight="h-40"
          />
        ))}
      </div>
    </section>
  );
}
