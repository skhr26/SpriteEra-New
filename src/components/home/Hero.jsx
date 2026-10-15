import { heroFeatures } from "../../data/homeData";
import PageHero from "../shared/PageHero";

export default function Hero() {
  return (
    <PageHero
      tag="SOLUTIONS"
      title="Lighting Solutions"
      titleHighlight="for Every Application"
      description="From industrial facilities and warehouses to roads, offices and outdoor spaces, explore lighting solutions designed around real-world applications."
      bgImage="/images/solutions/industrial-hero-clean.png"
      primaryCta={{ label: "Explore Solutions", href: "#solutions" }}
      secondaryCta={{ label: "Get a Project Quote", href: "/contact" }}
      badges={heroFeatures}
    />
  );
}
