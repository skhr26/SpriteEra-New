import { faqs } from "./faq";

export const architectPartnershipData = {
  hero: {
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Architect" }
    ],
    tag: "DESIGN WITH VAJRA",
    title: "Collaborate With Vajra for Better ",
    titleHighlight: "Lighting Design",
    description:
      "Partner with Vajra LED to bring reliable, efficient and aesthetically appealing lighting solutions to your architectural projects.",
    primaryCta: { label: "Connect With Us", href: "#architect-enquiry" },
    secondaryCta: { label: "Request Product Support", href: "/contact" },
    bgImage: "/images/architect/architect-hero-pavilion.jpg",
    badges: [
      { label: "Wide Product Range", iconType: "box" },
      { label: "Design Support", iconType: "pen" },
      { label: "Technical Assistance", iconType: "gear" },
      { label: "Reliable Supply", iconType: "truck" },
      { label: "Project Collaboration", iconType: "users" }
    ]
  },

  support: {
    topAlign: true,
    tag: "WHY ARCHITECTS CHOOSE VAJRA",
    title: "Lighting Solutions for ",
    titleHighlight: "Inspired Spaces",
    description:
      "We work with architects to provide lighting products and support for functional, comfortable and visually appealing spaces.",
    features: [
      {
        id: "range",
        iconType: "lightbulb",
        title: "Wide Product Range",
        desc: "Indoor, outdoor, commercial, industrial and solar lighting solutions."
      },
      {
        id: "design",
        iconType: "ruler",
        title: "Design & Application Support",
        desc: "Guidance for product selection and application as per design requirements."
      },
      {
        id: "quality",
        iconType: "shield",
        title: "Reliable Quality",
        desc: "Consistent product quality for your projects."
      },
      {
        id: "information",
        iconType: "file",
        title: "Easy Access to Product Information",
        desc: "Catalogues, technical details, specifications and project references."
      }
    ],
    sideCard: {
      image: "/images/architect/architect-side-visual.jpg",
      cover: true,
      position: "object-center",
      variant: "dark",
      title: "Let's Create Better Spaces Together",
      description:
        "Get product support, technical information and project guidance from our team.",
      cta: { label: "Connect With Our Team", href: "#architect-enquiry" }
    }
  },

  projects: {
    tag: "IDEAL FOR VARIOUS PROJECTS",
    title: "Lighting for Modern ",
    titleHighlight: "Architectural Projects",
    description:
      "Use Vajra LED products for a wide range of architectural and building design projects.",
    sectionClass: "bg-brand-surface-soft",
    needs: [
      {
        id: "commercial",
        title: "Commercial Buildings",
        desc: "Offices, business complexes and mixed-use developments.",
        image: "/images/architect/project-commercial.jpg"
      },
      {
        id: "residential",
        title: "Residential Projects",
        desc: "Apartments, villas and townships.",
        image: "/images/architect/project-residential.jpg"
      },
      {
        id: "hospitality",
        title: "Hospitality Projects",
        desc: "Hotels, resorts and recreational spaces.",
        image: "/images/architect/project-hospitality.jpg"
      },
      {
        id: "institutional",
        title: "Institutional Buildings",
        desc: "Schools, colleges and government buildings.",
        image: "/images/architect/project-institutional.jpg"
      },
      {
        id: "retail",
        title: "Retail Spaces",
        desc: "Showrooms, retail stores and shopping complexes.",
        image: "/images/architect/project-retail.jpg"
      },
      {
        id: "public",
        title: "Public Spaces",
        desc: "Airports, metro stations, landscapes and urban spaces.",
        image: "/images/architect/project-public.jpg"
      }
    ]
  },

  enquiryForm: {
    id: "architect-enquiry"
  },

  categories: {
    variant: "grid",
    paddingClass: "pt-16 md:pt-20 pb-8 md:pb-10",
    tag: "EXPLORE PRODUCT CATEGORIES",
    title: "A Complete Range for ",
    titleHighlight: "Architectural Applications",
    actionText: "View All Products",
    actionHref: "/products",
    items: [
      {
        id: "indoor",
        title: "Indoor Lighting",
        desc: "For comfortable and functional indoor spaces.",
        image: "/images/architect/cat-indoor.jpg",
        link: "/products"
      },
      {
        id: "outdoor",
        title: "Outdoor Lighting",
        desc: "For building facades, landscapes and open areas.",
        image: "/images/architect/cat-outdoor.jpg",
        link: "/products"
      },
      {
        id: "architectural",
        title: "Architectural Lighting",
        desc: "For enhanced design and visual appeal.",
        image: "/images/architect/cat-architectural.jpg",
        link: "/products"
      },
      {
        id: "commercial",
        title: "Commercial Lighting",
        desc: "For offices, retail and public spaces.",
        image: "/images/architect/cat-commercial.jpg",
        link: "/products"
      },
      {
        id: "industrial",
        title: "Industrial Lighting",
        desc: "For larger facilities and utility areas.",
        image: "/images/architect/cat-industrial.jpg",
        link: "/products"
      },
      {
        id: "solar",
        title: "Solar Lighting",
        desc: "For sustainable lighting solutions.",
        image: "/images/architect/cat-solar.jpg",
        link: "/products"
      }
    ]
  },

  process: {
    stepsLayout: "inline",
    paddingClass: "pt-8 md:pt-10 pb-6 md:pb-8",
    headingClass: "max-w-none mb-6",
    tag: "HOW WE SUPPORT",
    title: "Support at Every Stage of ",
    titleHighlight: "Your Project",
    description:
      "From product selection to on-site support, our team is here to assist you.",
    steps: [
      {
        step: "01",
        iconType: "message",
        title: "Share Project Details",
        desc: "Tell us about your project and requirements."
      },
      {
        step: "02",
        iconType: "file",
        title: "Get Product Guidance",
        desc: "Our team provides suitable product recommendations."
      },
      {
        step: "03",
        iconType: "clipboard",
        title: "Discuss Technical Details",
        desc: "Get technical information, specifications and BOQ support."
      },
      {
        step: "04",
        iconType: "truck",
        title: "Project Execution Support",
        desc: "Timely product supply and ongoing support."
      }
    ]
  },

  galleryFaq: {
    tag: "PROJECT INSPIRATION",
    title: "Architectural Lighting ",
    titleHighlight: "Applications",
    sectionClass: "bg-brand-surface-soft",
    paddingClass: "pt-6 md:pt-8 pb-16 md:pb-20",
    items: [
      {
        id: 1,
        image: "/images/architect/inspiration-1.jpg",
        alt: "Modern glass office building facade"
      },
      {
        id: 2,
        image: "/images/architect/inspiration-2.jpg",
        alt: "Architectural interior hallway lighting"
      },
      {
        id: 3,
        image: "/images/architect/inspiration-3.jpg",
        alt: "Outdoor landscape bollard lighting"
      },
      {
        id: 4,
        image: "/images/architect/inspiration-4.jpg",
        alt: "Warm exterior illumination on modern residence"
      }
    ],
    faqTag: "FREQUENTLY ASKED QUESTIONS",
    faqAction: { label: "View All FAQs", href: "/faq" },
    faqs: faqs.architectPartnership
  },

  bottomBanner: {
    title: "Let's Design Better Spaces Together",
    description:
      "Connect with our team for product support, technical information or project collaboration.",
    bgImage: "/images/architect/architect-footer-banner.jpg",
    primaryCta: { label: "Connect With Us", href: "#architect-enquiry" },
    secondaryCta: { label: "Download Catalogue", href: "/catalogue.pdf", download: true }
  }
};
