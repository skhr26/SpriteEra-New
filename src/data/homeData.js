export const siteConfig = {
  name: "VAJRA LED",
  logoUrl: "/images/logo.png",
};

export const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#" },
  { name: "Products", href: "#" },
  { name: "Solutions", href: "/solutions", isActive: true },
  { name: "Projects", href: "#" },
  { name: "Catalogue", href: "#" },
  { name: "Contact", href: "#" }
];

export const heroFeatures = [
  { icon: "/images/icon-product-range.png", label: "Wide Product Range" },
  { icon: "/images/icon-application-support.png", label: "Application Support" },
  { icon: "/images/icon-reliable-performance.png", label: "Reliable Performance" },
  { icon: "/images/icon-technical-assistance.png", label: "Technical Assistance" }
];

export const solutionsData = [
  {
    id: "industrial",
    imageUrl: "/images/solutions/industrial-lighting.png",
    iconUrl: "/images/icons/factory.png",
    title: "Industrial Lighting",
    desc: "Factories, manufacturing units and industrial facilities.",
    link: "/solutions/industrial-lighting"
  },
  {
    id: "warehouse",
    imageUrl: "/images/solutions/warehouse-lighting.png",
    iconUrl: "/images/icons/warehouse.png",
    title: "Warehouse Lighting",
    desc: "Storage, logistics and distribution facilities.",
    link: "/solutions/warehouse-lighting"
  },
  {
    id: "road-street",
    imageUrl: "/images/solutions/road-street-lighting.png",
    iconUrl: "/images/icons/road.png",
    title: "Road & Street Lighting",
    desc: "Roads, highways, pathways and public areas.",
    link: "/solutions/road-street-lighting"
  },
  {
    id: "commercial",
    imageUrl: "/images/solutions/commercial-lighting.png",
    iconUrl: "/images/icons/commercial.png",
    title: "Commercial Lighting",
    desc: "Offices, retail spaces and commercial buildings.",
    link: "/solutions/commercial-lighting"
  },
  {
    id: "petrol-pump",
    imageUrl: "/images/solutions/petrol-pump-lighting.png",
    iconUrl: "/images/icons/pump.png",
    title: "Petrol Pump Lighting",
    desc: "Fuel stations and service areas.",
    link: "/solutions/petrol-pump-lighting"
  },
  {
    id: "hospital",
    imageUrl: "/images/solutions/hospital-lighting.png",
    iconUrl: "/images/icons/hospital.png",
    title: "Hospital Lighting",
    desc: "Hospitals, clinics and healthcare facilities.",
    link: "/solutions/hospital-lighting"
  },
  {
    id: "school",
    imageUrl: "/images/solutions/school-lighting.png",
    iconUrl: "/images/icons/school.png",
    title: "School Lighting",
    desc: "Educational institutions and campuses.",
    link: "/solutions/school-lighting"
  },
  {
    id: "solar",
    imageUrl: "/images/solutions/solar-lighting.jpg",
    iconUrl: "/images/icons/solar.png",
    title: "Solar Lighting",
    desc: "Solar-powered lighting for outdoor applications.",
    link: "/solutions/solar-lighting"
  }
];

export const productsData = [
  {
    id: "high-bay",
    imageUrl: "/images/products/led-high-bay-light.png",
    title: "LED High Bay Light",
    desc: "For industrial & warehouse apps.",
    link: "/products/led-high-bay-light"
  },
  {
    id: "flood-light",
    imageUrl: "/images/products/led-flood-light.png",
    title: "LED Flood Light",
    desc: "For outdoor & large areas.",
    link: "/products/led-flood-light"
  },
  {
    id: "street-light-outdoor",
    imageUrl: "/images/products/led-street-light.png",
    title: "LED Street Light",
    desc: "For roads & outdoor applications.",
    link: "/products/led-street-light"
  },
  {
    id: "downlight",
    imageUrl: "/images/products/led-downlight.png",
    title: "LED Downlight",
    desc: "For offices & commercial spaces.",
    link: "/products/led-downlight"
  },
  {
    id: "panel-light",
    imageUrl: "/images/products/led-panel-light.png",
    title: "LED Panel Light",
    desc: "For indoor & commercial spaces.",
    link: "/products/led-panel-light"
  },
  {
    id: "solar-street",
    imageUrl: "/images/products/solar-street-light.png",
    title: "Solar Street Light",
    desc: "For off-grid outdoor applications.",
    link: "/products/solar-street-light"
  }
];

export const whyVajraFeatures = [
  {
    id: "quality",
    iconUrl: "/images/features/quality.png",
    title: "Quality Products",
    desc: "Tested and reliable lighting solutions."
  },
  {
    id: "wide-range",
    iconUrl: "/images/icon-application-support.png",
    title: "Wide Range",
    desc: "For indoor, outdoor and specialized applications."
  },
  {
    id: "warranty",
    iconUrl: "/images/icon-reliable-performance.png",
    title: "Warranty Support",
    desc: "Product warranty (terms applicable)."
  },
  {
    id: "technical",
    iconUrl: "/images/features/team.png",
    title: "Technical Assistance",
    desc: "Application guidance and after-sales support."
  },
  {
    id: "project",
    iconUrl: "/images/features/document.png",
    title: "Project Support",
    desc: "Support for large and custom requirements."
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Automated Logistics & Warehouse Facility",
    category: "Warehouse",
    imageUrl: "/images/projects/warehouse-project.png",
    alt: "Warehouse logistics aisle with high bay LED luminaires",
    link: "/projects/warehouse-logistics"
  },
  {
    id: 2,
    title: "Highway & Urban Arterial Illumination",
    category: "Road & Street",
    imageUrl: "/images/projects/road-street-project.png",
    alt: "Highway road illuminated with LED street lights at night",
    link: "/projects/highway-illumination"
  },
  {
    id: 3,
    title: "Corporate Commercial Workspace",
    category: "Commercial",
    imageUrl: "/images/projects/commercial-project.png",
    alt: "Modern office interior with clean glare-free linear lighting",
    link: "/projects/corporate-commercial"
  },
  {
    id: 4,
    title: "Multi-Speciality Hospital Complex",
    category: "Healthcare",
    imageUrl: "/images/projects/hospital-project.png",
    alt: "Hospital corridor with hygienic LED panel lighting",
    link: "/projects/hospital-healthcare"
  },
  {
    id: 5,
    title: "Fuel Station Canopy Lighting",
    category: "Petrol Pump",
    imageUrl: "/images/projects/petrol-pump-project.png",
    alt: "Petrol pump canopy glowing with uniform recessed LED canopy fixtures",
    link: "/projects/fuel-station-canopy"
  }
];

export const footerFeatures = [
  { id: "quick-response", label: "Quick Response", iconType: "shield-clock" },
  { id: "app-guidance", label: "Application Guidance", iconType: "shield-compass" },
  { id: "project-support", label: "Project Support", iconType: "document" },
  { id: "pan-india", label: "Pan India Supply", iconType: "shield-pin" }
];
