export const architectData = {
  hero: {
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Architect", href: "/architect" }
    ],
    tag: "DESIGN WITH VAJRA",
    title: "Collaborate With Vajra",
    titleHighlight: "for Better Lighting Design",
    description: "Partner with Vajra LED to bring reliable, efficient and aesthetically appealing lighting solutions to your architectural projects.",
    primaryCta: { label: "Connect With Us", href: "#enquiry" },
    secondaryCta: { label: "Request Product Support", href: "/contact" },
    bgImage: "/images/architect/architect-hero-bg.jpg",
    badges: [
      { label: "Wide Product Range", iconType: "box" },
      { label: "Design Support", iconType: "pen" },
      { label: "Technical Assistance", iconType: "gear" },
      { label: "Reliable Supply", iconType: "truck" },
      { label: "Project Collaboration", iconType: "users" }
    ]
  },

  whyArchitectsChoose: {
    tag: "WHY ARCHITECTS CHOOSE VAJRA",
    title: "Lighting Solutions for",
    titleHighlight: "Inspired Spaces",
    description: "We work with architects to provide lighting products and support for functional, comfortable and visually appealing spaces.",
    features: [
      {
        id: "range",
        iconType: "lightbulb",
        title: "Wide Product Range",
        desc: "Indoor, outdoor, commercial, industrial and solar lighting solutions."
      },
      {
        id: "support",
        iconType: "pencil-ruler",
        title: "Design & Application Support",
        desc: "Guidance for product selection and application as per design requirements."
      },
      {
        id: "quality",
        iconType: "shield-check",
        title: "Reliable Quality",
        desc: "Consistent product quality for your projects."
      },
      {
        id: "info",
        iconType: "file-text",
        title: "Easy Access to Product Information",
        desc: "Catalogues, technical details, specifications and project references."
      }
    ],
    sideCard: {
      image: "/images/architect/architect-side-visual.jpg",
      title: "Let's Create Better Spaces Together",
      description: "Get product support, technical information and project guidance from our team.",
      cta: { label: "Connect With Our Team", href: "#enquiry" }
    }
  },

  projectsSection: {
    tag: "IDEAL FOR VARIOUS PROJECTS",
    title: "Lighting for Modern",
    titleHighlight: "Architectural Projects",
    description: "Use Vajra LED products for a wide range of architectural and building design projects.",
    projects: [
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

  productCategoriesSection: {
    tag: "EXPLORE PRODUCT CATEGORIES",
    title: "A Complete Range for",
    titleHighlight: "Architectural Applications",
    actionText: "View All Products",
    actionHref: "/products",
    categories: [
      {
        id: "indoor",
        title: "Indoor Lighting",
        desc: "For comfortable and functional indoor spaces.",
        image: "/images/architect/cat-indoor.jpg",
        link: "/products#indoor"
      },
      {
        id: "outdoor",
        title: "Outdoor Lighting",
        desc: "For building facades, landscapes and open areas.",
        image: "/images/architect/cat-outdoor.jpg",
        link: "/products#outdoor"
      },
      {
        id: "architectural",
        title: "Architectural Lighting",
        desc: "For enhanced design and visual appeal.",
        image: "/images/architect/cat-architectural.jpg",
        link: "/products#architectural"
      },
      {
        id: "commercial",
        title: "Commercial Lighting",
        desc: "For offices, retail and public spaces.",
        image: "/images/architect/cat-commercial.jpg",
        link: "/products#commercial"
      },
      {
        id: "industrial",
        title: "Industrial Lighting",
        desc: "For larger facilities and utility areas.",
        image: "/images/architect/cat-industrial.jpg",
        link: "/solutions/industrial-lighting"
      },
      {
        id: "solar",
        title: "Solar Lighting",
        desc: "For sustainable lighting solutions.",
        image: "/images/architect/cat-solar.jpg",
        link: "/products#solar"
      }
    ]
  },

  supportStagesSection: {
    tag: "HOW WE SUPPORT",
    title: "Support at Every Stage of Your Project",
    description: "From product selection to on-site support, our team is here to assist you.",
    stages: [
      {
        step: "01",
        title: "Share Project Details",
        desc: "Tell us about your project and requirements.",
        iconType: "message"
      },
      {
        step: "02",
        title: "Get Product Guidance",
        desc: "Our team provides suitable product recommendations.",
        iconType: "file-search"
      },
      {
        step: "03",
        title: "Discuss Technical Details",
        desc: "Get technical information, specifications and BOQ support.",
        iconType: "bar-chart"
      },
      {
        step: "04",
        title: "Project Execution Support",
        desc: "Timely product supply and ongoing support.",
        iconType: "truck"
      }
    ]
  },

  galleryAndFaq: {
    gallery: {
      tag: "PROJECT INSPIRATION",
      title: "Architectural Lighting Applications",
      items: [
        { id: 1, image: "/images/architect/inspiration-1.jpg", alt: "Modern glass office building facade" },
        { id: 2, image: "/images/architect/inspiration-2.jpg", alt: "Architectural interior hallway lighting" },
        { id: 3, image: "/images/architect/inspiration-3.jpg", alt: "Outdoor landscape bollard lighting" },
        { id: 4, image: "/images/architect/inspiration-4.jpg", alt: "Warm exterior illumination on modern residence" }
      ]
    },
    faq: {
      tag: "FREQUENTLY ASKED QUESTIONS",
      actionText: "View All FAQs",
      actionHref: "/faq",
      items: [
        {
          q: "Can you provide product samples or mockups?",
          a: "Yes, we provide product samples and on-site mockup support for architectural projects to help you evaluate light output, color temperature, and aesthetics."
        },
        {
          q: "Do you provide technical specifications (IES files, drawings)?",
          a: "Yes, complete photometric data, IES files, Dialux simulation files, and 2D/3D technical drawings are available upon request for lighting design and compliance checks."
        },
        {
          q: "Can you help with BOQ and product selection?",
          a: "Our lighting application engineering team assists with bill of quantities (BOQ) optimization, lux level calculations, and selecting appropriate luminaires for every zone."
        },
        {
          q: "Do you work with large-scale or government projects?",
          a: "Yes, Vajra LED has extensive experience delivering lighting solutions for institutional, public infrastructure, large townships, and government projects with full compliance."
        },
        {
          q: "How can I get product catalogues and technical details?",
          a: "You can download our digital catalogues directly from the website or request comprehensive printed specification binders and datasheets from our team."
        },
        {
          q: "Can your team support during project execution?",
          a: "Yes, we provide end-to-end technical coordination, dispatch planning, installation guidance, and warranty support throughout project execution."
        }
      ]
    }
  },

  bottomBanner: {
    title: "Let's Design Better Spaces Together",
    description: "Connect with our team for product support, technical information or project collaboration.",
    bgImage: "/images/architect/architect-footer-banner.jpg"
  }
};
