import { faqs } from "./faq";

export const institutionalData = {
  hero: {
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Institutional Buyers" }
    ],
    tag: "INSTITUTIONAL SOLUTIONS",
    title: "Lighting Solutions for ",
    titleHighlight: "Institutions",
    description:
      "Partner with Vajra LED for reliable, efficient and long-lasting lighting solutions for government, educational, healthcare and other institutional projects.",
    primaryCta: { label: "Get Institutional Quote", href: "#institutional-enquiry" },
    secondaryCta: { label: "Talk to Our Team", href: "/contact" },
    bgImage: "/images/institutional/institutional-hero.jpg",
    badges: [
      { label: "Reliable Products", iconType: "shield" },
      { label: "Technical Assistance", iconType: "headset" },
      { label: "Project Support", iconType: "file" },
      { label: "Timely Supply", iconType: "truck" },
      { label: "Customized Solutions", iconType: "ruler" }
    ]
  },

  support: {
    tag: "WHY INSTITUTIONS CHOOSE VAJRA",
    title: "Trusted Lighting Partner for ",
    titleHighlight: "Institutional Projects",
    description:
      "We provide quality lighting products, technical support and project assistance to meet the requirements of institutional buyers.",
    features: [
      {
        id: "quality",
        iconType: "diamond",
        title: "Quality Products",
        desc: "Reliable lighting products designed for institutional applications."
      },
      {
        id: "technical",
        iconType: "gear",
        title: "Technical Support",
        desc: "Application guidance for product selection and installation."
      },
      {
        id: "information",
        iconType: "file",
        title: "Product Information",
        desc: "Complete product details and documentation for informed decisions."
      },
      {
        id: "assistance",
        iconType: "users",
        title: "Dedicated Assistance",
        desc: "Support for institutional buyers and their ongoing requirements."
      }
    ],
    sideCard: {
      image: "/images/institutional/institutional-side.jpg",
      cover: true,
      position: "object-center",
      variant: "dark",
      title: "Lighting for a Brighter Tomorrow",
      description:
        "Support for educational, healthcare, government and other institutional projects.",
      cta: { label: "Get Institutional Quote", href: "#institutional-enquiry" }
    }
  },

  institutions: {
    tag: "IDEAL FOR VARIOUS INSTITUTIONS",
    title: "Lighting Solutions for ",
    titleHighlight: "Different Institutions",
    description:
      "Vajra LED products are suitable for a wide range of institutional applications.",
    sectionClass: "bg-brand-surface-soft",
    needs: [
      {
        id: "educational",
        title: "Educational Institutions",
        desc: "Schools, colleges, universities and training centres.",
        image: "/images/institutional/institutional-educational.jpg"
      },
      {
        id: "healthcare",
        title: "Healthcare Facilities",
        desc: "Hospitals, clinics and healthcare campuses.",
        image: "/images/institutional/institutional-healthcare.jpg"
      },
      {
        id: "government",
        title: "Government Buildings",
        desc: "Administrative offices, departments and public offices.",
        image: "/images/institutional/institutional-government.jpg"
      },
      {
        id: "infrastructure",
        title: "Public Infrastructure",
        desc: "Airports, metro stations, terminals and public spaces.",
        image: "/images/institutional/institutional-infrastructure.jpg"
      },
      {
        id: "sports",
        title: "Sports & Recreation",
        desc: "Stadiums, indoor arenas and recreational facilities.",
        image: "/images/institutional/institutional-sports.jpg"
      },
      {
        id: "other",
        title: "Other Institutions",
        desc: "Research centres, NGOs, community and cultural institutions.",
        image: "/images/institutional/institutional-other.jpg"
      }
    ]
  },

  enquiryForm: {
    id: "institutional-enquiry"
  },

  categories: {
    variant: "grid",
    paddingClass: "pt-16 md:pt-20 pb-8 md:pb-10",
    tag: "EXPLORE PRODUCT CATEGORIES",
    title: "A Complete Range for ",
    titleHighlight: "Institutional Requirements",
    description:
      "Choose from a complete range of lighting products for different institutional applications.",
    actionText: "View All Products",
    actionHref: "/products",
    items: [
      {
        id: "indoor",
        title: "Indoor Lighting",
        desc: "For classrooms, offices, corridors and indoor spaces.",
        image: "/images/architect/cat-indoor.jpg",
        link: "/products"
      },
      {
        id: "outdoor",
        title: "Outdoor Lighting",
        desc: "For campuses, pathways, parking and open areas.",
        image: "/images/architect/cat-outdoor.jpg",
        link: "/products"
      },
      {
        id: "architectural",
        title: "Architectural Lighting",
        desc: "For facades, monuments and feature lighting.",
        image: "/images/architect/cat-architectural.jpg",
        link: "/products"
      },
      {
        id: "commercial",
        title: "Commercial Lighting",
        desc: "For offices, retail and commercial buildings.",
        image: "/images/architect/cat-commercial.jpg",
        link: "/products"
      },
      {
        id: "industrial",
        title: "Industrial Lighting",
        desc: "For workshops, warehouses and utility areas.",
        image: "/images/architect/cat-industrial.jpg",
        link: "/products"
      },
      {
        id: "solar",
        title: "Solar Lighting",
        desc: "For outdoor and energy-efficient applications.",
        image: "/images/architect/cat-solar.jpg",
        link: "/products"
      }
    ]
  },

  process: {
    paddingClass: "pt-8 md:pt-10 pb-16 md:pb-20",
    tag: "OUR SUPPORT PROCESS",
    title: "From ",
    titleHighlight: "Requirement",
    titleSuffix: "to Successful Implementation",
    description:
      "We support your project at every stage with the right products and assistance.",
    steps: [
      {
        step: "01",
        iconType: "clipboard",
        title: "Share Requirement",
        desc: "Tell us about your institution, project and lighting needs."
      },
      {
        step: "02",
        iconType: "file",
        title: "Product Recommendation",
        desc: "Our team suggests suitable products for your application."
      },
      {
        step: "03",
        iconType: "users",
        title: "Technical Support",
        desc: "Get guidance on product selection and project requirements."
      },
      {
        step: "04",
        iconType: "truck",
        title: "Project Execution",
        desc: "Receive timely supply and support for your project."
      }
    ]
  },

  partnerFaq: {
    tag: null,
    title: "A Reliable Partner for ",
    titleHighlight: "Institutional Projects",
    image: "/images/institutional/institutional-partner.jpg",
    imageAlt: "Modern institutional campus building at dusk",
    checklist: [
      "Quality products for institutional use",
      "Technical guidance and product support",
      "Bulk supply for large projects",
      "Timely delivery and coordination",
      "Customized lighting solutions",
      "Dedicated assistance for institutional buyers"
    ],
    faqTitle: "Frequently Asked Questions",
    faqAction: { label: "View All FAQs", href: "/faq" },
    faqs: faqs.institutional
  },

  bottomBanner: {
    title: "Let's Build a ",
    titleHighlight: "Brighter Tomorrow",
    titleSuffix: " Together",
    description:
      "Get in touch with our team for product information, technical support or a customized quotation.",
    bgImage: "/images/institutional/institutional-cta.jpg",
    primaryCta: { label: "Get Institutional Quote", href: "#institutional-enquiry" },
    secondaryCta: { label: "Talk to Our Team", href: "/contact" }
  }
};
