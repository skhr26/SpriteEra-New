import { faqs } from "./faq";

export const bulkOrdersData = {
  hero: {
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Bulk Orders" }
    ],
    tag: "LARGE VOLUME LIGHTING SOLUTIONS",
    title: "Bulk Orders for",
    titleHighlight: "All Your Lighting Needs",
    description:
      "Get competitive pricing, reliable supply and dedicated support for large quantity orders. Whether for projects, institutions or resale, we provide the right lighting solutions for your requirements.",
    primaryCta: { label: "Request a Bulk Quote", href: "#enquiry" },
    secondaryCta: { label: "Talk to Our Team", href: "/contact" },
    bgImage: "/images/bulk-orders/hero-bulk-orders.png",
    badges: [
      { label: "Competitive Pricing", iconType: "tag" },
      { label: "Wide Product Range", iconType: "boxes" },
      { label: "Reliable Supply", iconType: "truck" },
      { label: "Quality Products", iconType: "badgeCheck" },
      { label: "Dedicated Support", iconType: "headset" }
    ]
  },

  whyChoose: {
    headingClass: "max-w-none mb-8 @container",
    titleSize: "text-[clamp(22px,4.1cqw,38px)]",
    tag: "WHY CHOOSE VAJRA FOR BULK ORDERS?",
    title: "Your Trusted Partner for",
    titleHighlight: "Large Quantity Orders",
    description:
      "We supply high-quality LED lighting products in large quantities for projects, institutions, businesses and government requirements.",
    features: [
      {
        id: "pricing",
        iconType: "tag",
        title: "Competitive Pricing",
        desc: "Attractive pricing for large quantity orders."
      },
      {
        id: "range",
        iconType: "boxes",
        title: "Wide Product Range",
        desc: "Complete range of indoor, outdoor, industrial and solar lighting products."
      },
      {
        id: "supply",
        iconType: "truck",
        title: "Reliable Supply",
        desc: "Timely product availability for your project or business requirements."
      },
      {
        id: "support",
        iconType: "headset",
        title: "Dedicated Support",
        desc: "Our team assists you with product selection, quotation and order processing."
      }
    ],
    sideCard: {
      image: "/images/bulk-orders/quotation-products.png",
      title: "Need a Quotation for Large Quantity?",
      description:
        "Share your requirement with us and our team will get back with the best product options and pricing."
    }
  },

  supplyNeeds: {
    tag: "SUITABLE FOR VARIOUS REQUIREMENTS",
    title: "Bulk Supply for",
    titleHighlight: "Different Needs",
    description:
      "We cater to a wide range of customers looking for large quantity lighting solutions.",
    needs: [
      {
        id: "real-estate",
        title: "Real Estate & Builders",
        desc: "Large quantity supply for residential and commercial projects.",
        image: "/images/projects/residential-project.png"
      },
      {
        id: "industrial",
        title: "Industrial & Manufacturing",
        desc: "Lighting solutions for factories, warehouses and industrial facilities.",
        image: "/images/solutions/app-manufacturing.png"
      },
      {
        id: "corporate",
        title: "Corporate Offices",
        desc: "Bulk orders for office spaces, business parks and campuses.",
        image: "/images/projects/commercial-project.png"
      },
      {
        id: "government",
        title: "Government & Public Sector",
        desc: "Supply for government and infrastructure projects.",
        image: "/images/architect/project-public.jpg"
      },
      {
        id: "healthcare",
        title: "Hospitals & Healthcare",
        desc: "Lighting for hospitals, clinics and healthcare facilities.",
        image: "/images/projects/hospital-project.png"
      },
      {
        id: "education",
        title: "Educational Institutions",
        desc: "Lighting for schools, colleges and universities.",
        image: "/images/solutions/school-lighting.png"
      }
    ]
  },

  enquiryForm: {
    variant: "light"
  },

  categories: {
    variant: "carousel",
    tag: "EXPLORE PRODUCT CATEGORIES",
    title: "A Complete Range for",
    titleHighlight: "Your Bulk Requirements",
    actionText: "View All Products",
    actionHref: "/products",
    items: [
      {
        id: "indoor",
        title: "Indoor Lighting",
        desc: "For offices, commercial and indoor spaces.",
        image: "/images/architect/cat-indoor.jpg",
        link: "/products"
      },
      {
        id: "outdoor",
        title: "Outdoor Lighting",
        desc: "For building facades, open areas and campuses.",
        image: "/images/architect/cat-outdoor.jpg",
        link: "/products"
      },
      {
        id: "industrial",
        title: "Industrial Lighting",
        desc: "For factories, warehouses and large facilities.",
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
        desc: "For outdoor and off-grid applications.",
        image: "/images/architect/cat-solar.jpg",
        link: "/products"
      },
      {
        id: "commercial",
        title: "Commercial Lighting",
        desc: "For retail stores, offices and showrooms.",
        image: "/images/architect/cat-commercial.jpg",
        link: "/products"
      }
    ]
  },

  howItWorks: {
    tag: "HOW IT WORKS",
    title: "A Simple Process to Get",
    titleHighlight: "Your Quotation",
    description:
      "Share your requirement and get the right lighting solution in a few simple steps.",
    steps: [
      {
        step: "01",
        iconType: "message",
        title: "Submit Enquiry",
        desc: "Share your requirement details with us."
      },
      {
        step: "02",
        iconType: "clipboard",
        title: "Product Recommendation",
        desc: "Our team suggests suitable products and pricing."
      },
      {
        step: "03",
        iconType: "file",
        title: "Review Quotation",
        desc: "Get a detailed quotation with product specifications."
      },
      {
        step: "04",
        iconType: "package",
        title: "Order & Supply",
        desc: "Confirm your order and get timely supply."
      }
    ],
    checklistTitle: "Why Choose Vajra for Bulk Orders?",
    checklist: [
      "Quality and reliable LED products",
      "Competitive pricing for large quantities",
      "Wide range of lighting solutions",
      "Timely product availability",
      "Technical support and product information",
      "Support for project specifications",
      "Flexible supply for different requirements",
      "Dedicated team for bulk enquiries"
    ],
    faqTitle: "Frequently Asked Questions",
    faqAction: { label: "View All FAQs", href: "/faq" },
    faqs: faqs.bulkOrders
  },

  bottomBanner: {
    title: "Get the Right Lighting Solution for Your Project",
    description:
      "Discuss your bulk requirements with our team and get a customized quotation.",
    bgImage: "/images/architect/architect-footer-banner.jpg",
    primaryCta: { label: "Request a Bulk Quote", href: "#enquiry" },
    secondaryCta: { label: "Talk to Our Team", href: "/contact" }
  }
};
