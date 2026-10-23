import { Settings, Headset, Truck } from "lucide-react";

/**
 * /contact page content.
 * NOTE: phone/WhatsApp numbers are PLACEHOLDERS (919999999999) — the same
 * placeholders used site-wide. Replace with real contact details when known.
 */

export const contactData = {
  hero: {
    tag: "TALK TO US",
    title: "Get in ",
    titleHighlight: "Touch",
    description: "Questions about products, applications or your next project? Our team is here to help you find the right lighting solution.",
    primaryCta: { label: "WhatsApp Us", href: "https://wa.me/919999999999" },
    secondaryCta: { label: "Call Now", href: "tel:+919999999999" },
    badges: [
      { icon: Settings, label: "Application Support" },
      { icon: Headset, label: "Technical Assistance" },
      { icon: Truck, label: "Pan-India Supply" }
    ]
  },

  contactMethods: [
    {
      id: "call",
      icon: "phone",
      title: "Call Us",
      desc: "Speak directly with our team for quick answers on products, pricing and availability.",
      cta: { label: "+91 99999 99999", href: "tel:+919999999999" }
    },
    {
      id: "whatsapp",
      icon: "whatsapp",
      title: "WhatsApp Us",
      desc: "Share drawings, requirements or photos of your site and get responses on the go.",
      cta: { label: "Start a Chat", href: "https://wa.me/919999999999", external: true }
    },
    {
      id: "catalogue",
      icon: "download",
      title: "Download Catalogue",
      desc: "Explore our complete range of LED lighting products, specifications and applications.",
      cta: { label: "Get the PDF", href: "/catalogue.pdf", download: true }
    }
  ],

  formPanel: {
    tag: "SEND AN ENQUIRY",
    title: "Tell Us What ",
    titleHighlight: "You Need",
    description: "Fill in the details below and our team will respond with product recommendations, technical data and support for your requirement."
  },

  steps: [
    {
      title: "We Review Your Requirement",
      desc: "Our specialists study your application, site conditions and performance expectations."
    },
    {
      title: "You Get Curated Options",
      desc: "We shortlist the right Vajra LED products with technical specs and data sheets."
    },
    {
      title: "Support Until You're Sorted",
      desc: "From selection to supply, our team stays available for technical guidance at every stage."
    }
  ]
};

export default contactData;
