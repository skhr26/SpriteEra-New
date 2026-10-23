import { faqs } from "./faq";

export const distributorData = {
  hero: {
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Distributor" }
    ],
    tag: "DISTRIBUTE WITH VAJRA",
    title: "Become a ",
    titleHighlight: "Vajra LED Distributor",
    description:
      "Partner with Vajra LED to distribute a wide range of lighting products across retail, commercial, industrial and outdoor applications. Expand your business with a reliable and growing lighting brand.",
    primaryCta: { label: "Become a Distributor", href: "#distributor-enquiry" },
    secondaryCta: { label: "Talk to Our Team", href: "/contact" },
    bgImage: "/images/partnerships/distributor-hero.png",
    badges: [
      { label: "Wide Product Range", iconType: "boxes" },
      { label: "Technical Assistance", iconType: "gear" },
      { label: "Marketing Support", iconType: "megaphone" },
      { label: "Reliable Supply", iconType: "shield" },
      { label: "Growing Market Opportunity", iconType: "trending" }
    ]
  },

  support: {
    equalCards: true,
    tag: "WHY BECOME A VAJRA DISTRIBUTOR?",
    title: "Grow Your ",
    titleHighlight: "Business",
    titleSuffix: "With Vajra",
    description:
      "Join hands with Vajra LED and get access to a complete range of lighting products, supported by product knowledge, technical assistance and business support.",
    features: [
      {
        id: "range",
        iconType: "boxes",
        title: "Complete Product Range",
        desc: "Indoor, outdoor, industrial, commercial and solar lighting products."
      },
      {
        id: "business",
        iconType: "megaphone",
        title: "Business Support",
        desc: "Product information, marketing materials and sales support."
      },
      {
        id: "technical",
        iconType: "gear",
        title: "Technical Assistance",
        desc: "Application guidance and support for your team and customers."
      },
      {
        id: "demand",
        iconType: "trending",
        title: "Growing Demand",
        desc: "Be a part of the expanding LED lighting market across India."
      }
    ],
    sideCard: {
      image: "/images/solutions/industrial-engineers-hd.jpg",
      cover: true,
      position: "object-top",
      title: "Let's Distribute Better Lighting Solutions",
      description:
        "Be a part of Vajra's growing distribution network and bring reliable lighting products to your market.",
      cta: { label: "Become a Distributor", href: "#distributor-enquiry" }
    }
  },

  partners: {
    columns: 5,
    tag: "IDEAL FOR BUSINESSES WITH DISTRIBUTION CAPABILITIES",
    title: "Who Can Become a ",
    titleHighlight: "Vajra Distributor?",
    description:
      "We welcome distribution partners with an established market presence and customer network.",
    needs: [
      {
        id: "electrical",
        title: "Electrical Distributors",
        desc: "Businesses distributing electrical and lighting products in local or regional markets.",
        image: "/images/projects/warehouse-project.png"
      },
      {
        id: "lighting",
        title: "Lighting Distributors",
        desc: "Distributors with experience in LED and lighting product distribution.",
        image: "/images/architect/project-retail.jpg"
      },
      {
        id: "regional",
        title: "Regional Distributors",
        desc: "Businesses looking to expand their product portfolio with Vajra LED.",
        image: "/images/projects/industrial-project.png"
      },
      {
        id: "multi",
        title: "Multi-Location Distributors",
        desc: "Established distributors serving multiple cities or regions.",
        image: "/images/solutions/warehouse-lighting.png"
      },
      {
        id: "other",
        title: "Other Business Partners",
        desc: "Businesses with relevant market presence and strong customer networks.",
        image: "/images/architect/project-commercial.jpg"
      }
    ]
  },

  categories: {
    variant: "grid",
    paddingClass: "pt-16 md:pt-20 pb-6 md:pb-8",
    tag: "A WIDE RANGE OF LIGHTING PRODUCTS",
    title: "Product Categories for ",
    titleHighlight: "Distribution",
    description:
      "Distribute a complete range of lighting products to meet different market needs.",
    actionText: "View All Products",
    actionHref: "/products",
    items: [
      {
        id: "indoor",
        title: "Indoor Lighting",
        desc: "For homes, offices and commercial spaces.",
        image: "/images/architect/cat-indoor.jpg",
        link: "/products"
      },
      {
        id: "outdoor",
        title: "Outdoor Lighting",
        desc: "For outdoor areas, yards and campuses.",
        image: "/images/architect/cat-outdoor.jpg",
        link: "/products"
      },
      {
        id: "industrial",
        title: "Industrial Lighting",
        desc: "For factories, warehouses and industrial facilities.",
        image: "/images/architect/cat-industrial.jpg",
        link: "/products"
      },
      {
        id: "street",
        title: "Street Lighting",
        desc: "For roads, highways and public areas.",
        image: "/images/solutions/road-street-lighting.png",
        link: "/products"
      },
      {
        id: "solar",
        title: "Solar Lighting",
        desc: "Solar-powered lighting for outdoor applications.",
        image: "/images/architect/cat-solar.jpg",
        link: "/products"
      },
      {
        id: "commercial",
        title: "Commercial Lighting",
        desc: "For offices, retail and commercial buildings.",
        image: "/images/architect/cat-commercial.jpg",
        link: "/products"
      }
    ]
  },

  process: {
    paddingClass: "pt-8 md:pt-10 pb-16 md:pb-20",
    sectionClass: "bg-gradient-to-br from-white via-brand-surface-soft to-brand-light-bubble",
    tag: "HOW IT WORKS",
    title: "Our Distributor ",
    titleHighlight: "Partnership Process",
    description: "A simple process to get started as a Vajra distributor.",
    action: { label: "View All FAQs", href: "/faq" },
    steps: [
      {
        step: "01",
        iconType: "clipboard",
        title: "Submit Enquiry",
        desc: "Share your business details and location."
      },
      {
        step: "02",
        iconType: "users",
        title: "Connect With Team",
        desc: "Our team reviews your requirement."
      },
      {
        step: "03",
        iconType: "message",
        title: "Discuss Opportunity",
        desc: "Discuss product range, market and partnership details."
      },
      {
        step: "04",
        iconType: "handshake",
        title: "Start Distribution",
        desc: "Move forward with the applicable onboarding process."
      }
    ],
    faqTitle: "Frequently Asked Questions",
    faqAction: { label: "View All FAQs", href: "/faq" },
    faqTwoColumn: true,
    faqs: faqs.distributor,
    formData: {
      id: "distributor-enquiry",
      variant: "blue",
      twoColumn: true
    }
  },

  bottomBanner: {
    title: "Let's Grow Your Distribution Business Together",
    description:
      "Partner with Vajra LED and bring reliable lighting solutions to more customers. Our team is ready to discuss the opportunity with you.",
    bgImage: "/images/projects/warehouse-project.png",
    primaryCta: { label: "Become a Distributor", href: "#distributor-enquiry" },
    secondaryCta: { label: "Talk to Our Team", href: "/contact" }
  }
};
