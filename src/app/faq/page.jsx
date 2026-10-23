import Navbar from "../../components/Navbar";
import PageHero from "../../components/PageHero";
import Footer from "../../components/Footer";
import FaqAccordion from "../../components/faq/FaqAccordion";
import { faqCategories, faqs } from "../../data/faq";

export const metadata = {
  title: "Frequently Asked Questions | Vajra LED",
  description:
    "Find answers to common questions about Vajra LED products, architectural projects, contractor partnerships, distributor opportunities, bulk orders and institutional requirements."
};

const sections = faqCategories.map((category) => ({
  ...category,
  faqs: faqs[category.key] || []
}));

export default function FaqPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      <Navbar />

      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "FAQs" }
        ]}
        tag="SUPPORT"
        title="Frequently Asked "
        titleHighlight="Questions"
        description="Find answers about products, projects, partnerships and bulk orders. If you still need help, our team is ready to assist."
        primaryCta={{ label: "Talk to Our Team", href: "/contact" }}
        bgImage="/images/hero-bg.png"
        imageOpacity="opacity-50"
        minHeight="min-h-[360px] lg:min-h-[440px]"
      />

      <FaqAccordion sections={sections} />

      <Footer />
    </div>
  );
}
