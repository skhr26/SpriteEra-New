export const dealerData = {
  hero: {
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Become a Dealer" }
    ],
    tag: "PARTNER WITH VAJRA",
    title: "Become a ",
    titleHighlight: "Vajra LED Dealer",
    description:
      "Grow your lighting business with Vajra LED. Partner with us to offer a wide range of lighting products for residential, commercial, industrial and outdoor applications.",
    primaryCta: { label: "Become a Dealer", href: "#dealer-enquiry" },
    secondaryCta: { label: "Talk to Our Team", href: "/contact" },
    bgImage: "/images/partnerships/dealer-hero.png",
    badges: [
      { label: "Wide Product Range", iconType: "boxes" },
      { label: "Application Support", iconType: "gear" },
      { label: "Technical Assistance", iconType: "headset" },
      { label: "Business Opportunity", iconType: "tag" }
    ]
  },

  support: {
    tag: "WHY BECOME A VAJRA LED DEALER?",
    title: "Build Your ",
    titleHighlight: "Lighting Business",
    titleSuffix: "With Vajra",
    description:
      "Partner with Vajra LED and access a broad product range supported by product information, technical assistance and business support.",
    features: [
      {
        id: "range",
        iconType: "boxes",
        title: "Wide Product Range",
        desc: "Explore lighting products across commercial and industrial applications."
      },
      {
        id: "product",
        iconType: "headset",
        title: "Product Support",
        desc: "Get product information and application guidance to help you serve your customers."
      },
      {
        id: "technical",
        iconType: "gear",
        title: "Technical Assistance",
        desc: "Receive technical support for selecting suitable lighting products."
      },
      {
        id: "business",
        iconType: "tag",
        title: "Business Opportunity",
        desc: "Expand your product offering and grow with a wider range of lighting requirements."
      }
    ]
  },

  businessTypes: {
    headingTop: true,
    sectionClass: "bg-white",
    tag: "WHO CAN PARTNER WITH VAJRA",
    title: "Ideal for ",
    titleHighlight: "Different Business Types",
    description:
      "We welcome enquiries from businesses with a presence in the electrical and lighting market.",
    needs: [
      {
        id: "electrical",
        title: "Electrical Dealers",
        desc: "Businesses already dealing in electrical and lighting products.",
        image: "/images/projects/commercial-project.png"
      },
      {
        id: "retailers",
        title: "Lighting Retailers",
        desc: "Retailers looking to expand their lighting product portfolio.",
        image: "/images/architect/project-retail.jpg"
      },
      {
        id: "distributors",
        title: "Distributors",
        desc: "Distributors serving local and regional markets.",
        image: "/images/projects/warehouse-project.png"
      },
      {
        id: "building",
        title: "Building Material Dealers",
        desc: "Businesses serving construction and infrastructure customers.",
        image: "/images/projects/industrial-project.png"
      },
      {
        id: "showrooms",
        title: "Lighting Showrooms",
        desc: "Showrooms looking to add Vajra LED products to their portfolio.",
        image: "/images/partnerships/dealer-showroom.png"
      },
      {
        id: "other",
        title: "Other Business Partners",
        desc: "Businesses with a relevant market presence and customer base.",
        image: "/images/projects/hospitality-project.png"
      }
    ],
    ctaPanel: {
      iconType: "handshake",
      title: "Let's Grow Together",
      description:
        "Join hands with Vajra LED and become a part of our growing partner network.",
      cta: { label: "Become a Dealer", href: "#dealer-enquiry" }
    }
  },

  categories: {
    variant: "grid",
    paddingClass: "pt-16 md:pt-20 pb-6 md:pb-8",
    tag: "PRODUCT RANGE FOR DIFFERENT CUSTOMER NEEDS",
    title: "Explore Our ",
    titleHighlight: "Product Categories",
    description:
      "Offer a complete range of lighting products for different customer requirements.",
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

  imageCta: {
    title: "Ready to Expand Your ",
    titleHighlight: "Lighting Business?",
    description:
      "Explore the Vajra LED product range and discuss partnership opportunities with our team.",
    image: "/images/bulk-orders/quotation-products.png",
    cta: { label: "Become a Dealer", href: "#dealer-enquiry" }
  },

  process: {
    paddingClass: "pt-8 md:pt-10 pb-16 md:pb-20",
    tag: "HOW IT WORKS",
    title: "How to Become a ",
    titleHighlight: "Vajra Dealer",
    description: "A simple process to get started.",
    steps: [
      {
        step: "01",
        iconType: "clipboard",
        title: "Submit Your Enquiry",
        desc: "Tell us about your business and location."
      },
      {
        step: "02",
        iconType: "users",
        title: "Connect With Our Team",
        desc: "Our team reviews your enquiry and connects with you."
      },
      {
        step: "03",
        iconType: "message",
        title: "Discuss the Opportunity",
        desc: "Discuss products, market requirements and partnership details."
      },
      {
        step: "04",
        iconType: "handshake",
        title: "Start the Partnership",
        desc: "Move forward with the applicable dealer onboarding process."
      }
    ]
  },

  enquiry: {
    tag: "INTERESTED IN BECOMING A DEALER?",
    title: "Share your business details with our team",
    description:
      "Share your business details with our team and we'll get in touch to discuss the dealer opportunity.",
    image: "/images/partnerships/dealer-showroom.png",
    features: [
      { iconType: "clock", title: "Quick Response" },
      { iconType: "headset", title: "Dedicated Support" },
      { iconType: "message", title: "Discussion on Product Range" }
    ],
    form: {
      id: "dealer-enquiry",
      twoColumn: true
    }
  }
};
