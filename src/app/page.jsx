import Navbar from "../components/shared/Navbar";
import Hero from "../components/home/Hero";
import SolutionsGrid from "../components/home/SolutionsGrid";
import FeaturedProducts from "../components/home/FeaturedProducts";
import WhyVajraAndProjects from "../components/home/WhyVajraAndProjects";
import { ConsultationBanner, CatalogueBanner } from "../components/shared/Banners";
import Footer from "../components/shared/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 antialiased selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      {/* 1. Global Navbar */}
      <Navbar />

      {/* 2. Hero Section with Application Feature Strip */}
      <Hero />

      {/* 3. Application Solutions Grid (8 cards with circular badges) */}
      <SolutionsGrid />

      {/* 4. Product Recommendation Banner */}
      <ConsultationBanner />

      {/* 5. Popular Products Across Applications */}
      <FeaturedProducts />

      {/* 6. Why Choose Vajra LED & Real-World Projects */}
      <WhyVajraAndProjects />

      {/* 7. Download Catalogue Banner */}
      <CatalogueBanner />

      {/* 8. Global Footer */}
      <Footer />
    </div>
  );
}
