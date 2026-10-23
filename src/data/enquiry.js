export const PRODUCT_OPTIONS = [
  "LED Flood Light",
  "LED High Bay Light",
  "LED Street Light",
  "LED Panel Light",
  "LED Batten / Tube Light",
  "LED Bulb",
  "LED Solar Light",
  "LED Track / Spot Light",
  "Other / Not Sure"
];

export const CATEGORY_OPTIONS = [
  "Industrial",
  "Commercial",
  "Institutional",
  "Residential",
  "Outdoor / Street",
  "Warehouse / Logistics",
  "Infrastructure",
  "Other"
];

const defaultContent = {
  title: "Enquiry Form",
  description:
    "Share your requirement and our team will get in touch with suitable product information and support.",
  companyLabel: "Company Name",
  companyPlaceholder: "Enter company name",
  productLabel: "Current Product",
  categoryLabel: "Category",
  queryLabel: "Project Details",
  queryPlaceholder: "Tell us about your requirement...",
  submitLabel: "Submit Enquiry",
  note: "Your information will be used to contact you regarding your enquiry.",
  successMessage:
    "Our team will review your requirement and connect with you shortly."
};

const enquiryContent = {
  home: {
    title: "Tell Us About Your Lighting Requirement",
    description:
      "Share a few details and our team will help you find the right lighting product for your space.",
    queryLabel: "Requirement Details",
    queryPlaceholder:
      "Tell us about your application, product, quantity or project..."
  },
  solutions: {
    title: "Find the Right Lighting Solution",
    description:
      "Tell us about your application and our team will recommend suitable lighting products for your requirement.",
    queryLabel: "Requirement Details",
    queryPlaceholder:
      "Describe your space, application and the type of lighting you need..."
  },
  "solutions/industrial-lighting": {
    title: "Industrial Lighting Enquiry",
    description:
      "Share your facility details and our team will help you select the right industrial lighting.",
    queryLabel: "Project Details",
    queryPlaceholder:
      "Tell us about your facility, application, product and quantity..."
  },
  "solutions/institutional-lighting": {
    title: "Institutional Enquiry Form",
    description:
      "Share your project details and our team will get in touch with suitable product information and support.",
    companyLabel: "Organization Name",
    companyPlaceholder: "Enter organization name",
    queryLabel: "Project Details",
    queryPlaceholder: "Tell us about your institutional requirement...",
    successMessage:
      "Our team will review your institutional requirement and connect with you shortly."
  },
  architect: {
    title: "Architect Enquiry Form",
    description:
      "Share your project details and our team will get in touch with product information and support.",
    queryLabel: "Project Details",
    queryPlaceholder:
      "Tell us about your project, building type and lighting requirements...",
    successMessage:
      "Our architectural project specialist will review your project details and connect with you shortly."
  },
  "partnerships/architect": {
    title: "Architect Partnership Enquiry",
    description:
      "Share your project details and our team will get in touch with product information and support.",
    queryLabel: "Project Details",
    queryPlaceholder:
      "Tell us about your project, building type and lighting requirements...",
    successMessage:
      "Our architectural project specialist will review your project details and connect with you shortly."
  },
  "partnerships/contractor": {
    title: "Contractor Enquiry Form",
    description:
      "Share your project details and our team will get in touch.",
    queryLabel: "Project Details",
    queryPlaceholder: "Tell us about your project requirement...",
    successMessage:
      "Our team will review your project details and connect with you shortly."
  },
  "partnerships/dealer": {
    title: "Dealer Enquiry Form",
    description:
      "Share your business details and our team will get in touch to discuss the dealer opportunity.",
    queryLabel: "Message",
    queryPlaceholder: "Write your message...",
    successMessage:
      "Our team will review your dealer enquiry and connect with you shortly."
  },
  "partnerships/distributor": {
    title: "Distributor Enquiry Form",
    description:
      "Share your business details and our team will get in touch to discuss the distributor opportunity.",
    queryLabel: "Message",
    queryPlaceholder: "Write your message...",
    successMessage:
      "Our team will review your distributor enquiry and connect with you shortly."
  },
  "bulk-orders": {
    title: "Bulk Order Enquiry Form",
    description:
      "Share your requirement and our team will get in touch with suitable product options and pricing.",
    queryLabel: "Requirement Details",
    queryPlaceholder: "Tell us about your project / requirement...",
    successMessage:
      "Our bulk orders team will review your requirement and connect with you shortly with suitable product options and pricing."
  },
  contact: {
    title: "Enquiry Form",
    description:
      "Share your project details and our team will get in touch with product information and support.",
    queryLabel: "Project Details",
    queryPlaceholder: "Tell us what you need...",
    successMessage:
      "Our team will review your requirement and connect with you shortly."
  },
  "why-vajra": {
    title: "Talk to Our Team",
    description:
      "Share your lighting requirement and our team will get back with the right guidance.",
    queryLabel: "Requirement Details",
    queryPlaceholder: "Tell us about your requirement..."
  },
  "authorized-dealers": {
    title: "Dealer Network Enquiry",
    description:
      "Looking for a dealer or want to become one? Share your details and our team will help.",
    queryLabel: "Your Requirement",
    queryPlaceholder:
      "Tell us your city, the product you need or your dealership interest..."
  }
};

const aliases = {
  projects: "architect"
};

export function getEnquiryContent(source = "") {
  const normalized = String(source)
    .split("?")[0]
    .split("#")[0]
    .replace(/^\/+|\/+$/g, "");

  const key = normalized || "home";
  const resolved = aliases[key] || key;

  return {
    ...defaultContent,
    ...(enquiryContent[resolved] || {})
  };
}
