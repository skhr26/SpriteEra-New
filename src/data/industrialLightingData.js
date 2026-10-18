import { Factory, Package, Settings, ShieldCheck, Gem, Cog, Users, FileText, Warehouse, Wrench, Truck, MessageSquare, Lightbulb } from "lucide-react";

export const industrialSolutionsData = {
  hero: {
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Solutions", href: "/solutions" },
      { name: "Industrial Lighting", href: "/solutions/industrial-lighting" }
    ],
    tag: "SOLUTIONS",
    title: "Industrial Lighting",
    titleHighlight: "Solutions",
    description: "Reliable and efficient lighting for factories, manufacturing units, warehouses and industrial facilities.",
    primaryCta: { label: "Explore Products", href: "#products" },
    secondaryCta: { label: "Get a Project Quote", href: "/contact" },
    badges: [
      { icon: Factory, label: "Suitable for Industrial Environments" },
      { icon: Package, label: "Wide Product Range" },
      { icon: Settings, label: "Application Support" },
      { icon: ShieldCheck, label: "Reliable Performance" }
    ]
  },

  overview: {
    tag: "OVERVIEW",
    title: "Lighting for Every",
    titleHighlight: "Industrial Space",
    description: "Industrial spaces have different lighting requirements depending on the activity, ceiling height, environment and working conditions. Vajra LED offers lighting solutions designed to meet the needs of factories, warehouses, production areas, workshops and other industrial facilities.",
    cta: { label: "Talk to a Lighting Expert", href: "/contact" },
    spaces: [
      { id: "factories", label: "Factories", sub: "& Manufacturing", icon: Factory },
      { id: "warehouses", label: "Warehouses", sub: "& Storage", icon: Warehouse },
      { id: "workshops", label: "Workshops", sub: "& Production", icon: Wrench },
      { id: "logistics", label: "Logistics", sub: "& Loading Areas", icon: Truck }
    ],
    videoCard: {
      title: "See Industrial Lighting in Action",
      duration: "Watch Video (1:30 min)",
      thumbnail: "/images/solutions/industrial-video-thumb.png"
    }
  },

  applicationAreasSection: {
    tag: "APPLICATION AREAS",
    title: "Where",
    titleHighlight: "Industrial Lighting",
    titleSuffix: "is Used",
    action: { label: "View All Applications", href: "/solutions" }
  },

  applicationAreas: [
    {
      id: "manufacturing",
      title: "Manufacturing Floors",
      desc: "Lighting for production lines and assembly areas.",
      image: "/images/solutions/app-manufacturing.png",
      link: "/solutions/industrial-lighting#manufacturing"
    },
    {
      id: "warehouses",
      title: "Warehouses",
      desc: "High-bay lighting for storage areas and aisles.",
      image: "/images/solutions/app-warehouses.png",
      link: "/solutions/industrial-lighting#warehouses"
    },
    {
      id: "loading",
      title: "Loading Areas",
      desc: "Lighting for loading docks and material handling.",
      image: "/images/solutions/app-loading.png",
      link: "/solutions/industrial-lighting#loading"
    },
    {
      id: "outdoor",
      title: "Outdoor Yards",
      desc: "Lighting for open areas, yards and perimeters.",
      image: "/images/solutions/app-outdoor.png",
      link: "/solutions/industrial-lighting#outdoor"
    },
    {
      id: "workshops",
      title: "Workshops",
      desc: "Lighting for workshops and small-scale units.",
      image: "/images/solutions/app-workshops.png",
      link: "/solutions/industrial-lighting#workshops"
    },
    {
      id: "roads",
      title: "Internal Roads",
      desc: "Lighting for movement areas inside the facility.",
      image: "/images/solutions/app-internal-roads.png",
      link: "/solutions/industrial-lighting#roads"
    },
    {
      id: "parking",
      title: "Parking Areas",
      desc: "Lighting for staff and vehicle parking.",
      image: "/images/solutions/app-parking.png",
      link: "/solutions/industrial-lighting#parking"
    },
    {
      id: "security",
      title: "Security & Entry Areas",
      desc: "Lighting for gates, entry points and boundary areas.",
      image: "/images/solutions/app-security.png",
      link: "/solutions/industrial-lighting#security"
    }
  ],

  productsSection: {
    tag: "RECOMMENDED PRODUCTS",
    title: "Products for",
    titleHighlight: "Industrial Lighting",
    description: "Explore Vajra LED products suitable for industrial applications.",
    action: { label: "View All Industrial Products", href: "/products" }
  },

  recommendedProducts: [
    {
      id: "high-bay",
      title: "LED High Bay Light",
      desc: "For high ceiling industrial spaces.",
      image: "/images/products/led-high-bay-light.png",
      link: "/products/led-high-bay-light"
    },
    {
      id: "flood-light",
      title: "LED Flood Light",
      desc: "For outdoor and large areas.",
      image: "/images/products/led-flood-light.png",
      link: "/products/led-flood-light"
    },
    {
      id: "batten-light",
      title: "LED Batten Light",
      desc: "For general industrial lighting.",
      image: "/images/products/led-batten-light.png",
      link: "/products/led-batten-light"
    },
    {
      id: "street-light",
      title: "LED Street Light",
      desc: "For internal roads and pathways.",
      image: "/images/products/led-street-light.png",
      link: "/products/led-street-light"
    },
    {
      id: "panel-light",
      title: "LED Panel Light",
      desc: "For offices and control rooms.",
      image: "/images/products/led-panel-light.png",
      link: "/products/led-panel-light"
    },
    {
      id: "downlight",
      title: "LED Downlight",
      desc: "For offices and commercial spaces.",
      image: "/images/products/led-downlight.png",
      link: "/products/led-downlight"
    },
    {
      id: "solar-street",
      title: "Solar Street Light",
      desc: "For off-grid outdoor applications.",
      image: "/images/products/solar-street-light.png",
      link: "/products/solar-street-light"
    }  ],

  notSureBanner: {
    title: "Not Sure Which Product You Need?",
    description: "Tell us about your space and requirement. Our team can help you identify suitable lighting products for your application.",
    cta: { label: "Request Product Recommendation", href: "/contact" },
    steps: [
      { icon: MessageSquare, label: "Share your\nrequirement" },
      { icon: Lightbulb, label: "Get expert\nrecommendation" },
      { icon: FileText, label: "Receive product\noptions & quote" }
    ]
  },

  whySection: {
    tag: "WHY VAJRA",
    title: "Why Choose",
    titleHighlight: "Vajra LED",
    description: "Reliable products, application support and a customer-first approach for your industrial lighting projects."
  },

  whyChooseVajra: [
    {
      title: "Quality Products",
      desc: "Tested and reliable lighting solutions.",
      icon: Gem
    },
    {
      title: "Wide Range",
      desc: "Products for different industrial applications.",
      icon: Cog
    },
    {
      title: "Warranty Support",
      desc: "Product warranty (terms applicable).",
      icon: ShieldCheck
    },
    {
      title: "Technical Assistance",
      desc: "Products assistance and after-sales support.",
      icon: Users
    },
    {
      title: "Project Support",
      desc: "Application guidance and support for large or custom requirements.",
      icon: FileText
    }
  ],

  planningProject: {
    tag: "PROJECT SUPPORT",
    title: "Planning a Larger",
    titleHighlight: "Industrial Project?",
    description: "From product selection to installation guidance, our team can support your project with the right lighting solutions, technical advice and product recommendations.",
    ctas: [
      { label: "Get a Project Quote", href: "/contact" },
      { label: "Talk to Our Team", href: "/contact" }
    ],
    points: [
      "Lighting Design Support",
      "Product Selection Guidance",
      "BOQ / Drawing Review",
      "Technical Consultation",
      "Support for Large Quantities"
    ],
    image: "/images/solutions/industrial-engineers-hd.jpg"
  },

  relatedSection: {
    tag: "RELATED SOLUTIONS",
    title: "Explore More",
    titleHighlight: "Lighting Solutions",
    action: { label: "View All Solutions", href: "/solutions" }
  },

  relatedSolutions: [
    {
      title: "Warehouse Lighting",
      desc: "Storage and logistics facilities.",
      image: "/images/solutions/more-warehouse.png",
      link: "/solutions/warehouse-lighting"
    },
    {
      title: "Commercial Lighting",
      desc: "Offices, retail and commercial spaces.",
      image: "/images/solutions/more-commercial.png",
      link: "/solutions/commercial-lighting"
    },
    {
      title: "Road & Street Lighting",
      desc: "Roads, highways and public areas.",
      image: "/images/solutions/more-road.png",
      link: "/solutions/road-street-lighting"
    },
    {
      title: "Solar Lighting",
      desc: "Solar-powered lighting solutions.",
      image: "/images/solutions/more-solar.png",
      link: "/solutions/solar-lighting"
    }
  ],

  bottomBanner: {
    tag: "LET'S WORK TOGETHER",
    title: "Have an Industrial Lighting Requirement?",
    description: "Whether you need a single product or lighting for a complete project, our team is ready to help.",
    quoteCta: { label: "Get a Project Quote", href: "/contact" },
    whatsappHref: "https://wa.me/919999999999",
    callHref: "tel:+919999999999",
    bgImage: "/images/solutions/industrial-footer-dock-clean.png",
    badges: [
      { icon: "gear", label: "Quick Response" },
      { icon: "clipboard", label: "Application Guidance" },
      { icon: "document", label: "Technical Support" },
      { icon: "pin", label: "Pan India Supply" }
    ]
  }
};
