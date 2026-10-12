import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SolutionsGrid from "../components/SolutionsGrid";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyVajraAndProjects from "../components/WhyVajraAndProjects";
import Footer from "../components/Footer";
import { ConsultationBanner, CatalogueBanner } from "../components/Banners";

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      <Navbar />
      <Hero />
      <SolutionsGrid />
      <ConsultationBanner />
      <FeaturedProducts />
      <WhyVajraAndProjects />
      <CatalogueBanner />
      <Footer />
    </div>
  );
}
