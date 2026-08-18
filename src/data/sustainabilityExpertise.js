import { Sun } from "lucide-react";

export const sustainabilityExpertise = {
  activeCategory: "Sustainability",
  icon: Sun,
  badgeLabel: "Environmental Engineering & Building Physics",
  heading: "Sustainability Research & Net-Zero Climate Strategies",
  intro:
    "Sustainability at Konhabita is not an afterthought or bolt-on feature — it is the fundamental generator of our architectural geometry.",
  description:
    "We combine cutting-edge building physics simulation with biological circularity to engineer structures that generate clean energy, " +
    "purify on-site stormwater, and sequester carbon through regenerative timber and mineral masonry.",

  sidebarLabel: "Ecological Metrics",
  sidebarStats: [
    { label: "HVAC Load Reduction", value: "-40% Average" },
    { label: "Green Building Rating", value: "LEED Platinum" },
    { label: "Water Recycled On-Site", value: "100% Closed Loop" },
  ],

  featuredHeading: "Featured Sustainability & Research Commissions",
  projectsLink: "/projects/sustainability",
  featuredPhotos: [
    {
      title: "Net-Zero Research Center",
      category: "Building Energy Physics",
      image: "/project1.webp",
      metric: "Net-Positive Solar Output",
    },
    {
      title: "Eco-Lodge Closed-Loop Systems",
      category: "Circular Water & Waste",
      image: "/project2.webp",
      metric: "100% Water Purified On-Site",
    },
    {
      title: "LEED Platinum Commercial Hub",
      category: "Whole-Life Carbon LCA",
      image: "/project4.webp",
      metric: "-45% Embodied Concrete Footprint",
    },
  ],

  labLabel: "Carbon & Physics Lab",
  labHeading: "Environmental Simulation Systems",
  tabsData: [
    {
      id: "lca",
      label: "Life Cycle Assessment (LCA)",
      content:
        "We perform EN 15978 compliant cradle-to-gate and cradle-to-grave embodied carbon audits, quantifying concrete clinker substitution, timber sequestration, and recyclable component disassembly.",
      stat: "EN 15978 Verified Audits",
    },
    {
      id: "energy",
      label: "EnergyPlus Microclimatic Simulation",
      content:
        "Hourly dynamic thermal simulations modeling seasonal solar angles, glazing U-values, and envelope thermal capacitance to eliminate oversized HVAC chilling plant capacities.",
      stat: "-40% Baseline Energy Consumption",
    },
    {
      id: "leed",
      label: "Green Building Certification",
      content:
        "Full turnkey stewardship across LEED, GRIHA, IGBC, and WELL Platinum rating submissions, ensuring rigorous third-party verified environmental excellence.",
      stat: "LEED & GRIHA Platinum Track",
    },
  ],

  faqHeading: "Frequently Asked Sustainability Questions",
  faqs: [
    {
      q: "How early in a project should sustainability modeling begin?",
      a: "From day one. The largest carbon and energy savings are achieved in the first 10% of design when building orientation, massing, wind vectors, and structural material palettes are established.",
    },
    {
      q: "What tools and software does Konhabita use for building physics simulations?",
      a: "We utilize industry-standard simulation engines including EnergyPlus, OpenStudio, Ladybug/Honeybee for Grasshopper parametric solar analysis, and ANSYS Fluent for microclimate CFD modeling.",
    },
    {
      q: "Can you help existing facilities and older buildings achieve green certifications?",
      a: "Yes. We offer energy retrofitting audits, building envelope thermal scanning, and operational optimization frameworks to transition existing facilities to net-zero carbon operations.",
    },
  ],

  enquiryDiscipline: "Sustainability Consultation",
  enquiryTitle: "Commission a Sustainability & Net-Zero Carbon Study",
  enquirySubtitle:
    "Collaborate directly with our environmental engineers on building physics CFD, LCA carbon audits, and LEED/GRIHA green ratings.",
};
