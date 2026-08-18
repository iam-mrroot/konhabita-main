import { Building2 } from "lucide-react";

export const architectureExpertise = {
  activeCategory: "Architecture",
  icon: Building2,
  badgeLabel: "Architecture & Spatial Design",
  heading: "Architectural Design Grounded in Climate, Materiality & Craft",
  intro:
    "Our architectural practice creates buildings that are profoundly connected to their environmental context. " +
    "We combine structural honesty, passive thermodynamics, and tectonic beauty to sculpt enduring spaces.",
  description:
    "From cultural institutes and innovative tech headquarters to sustainable eco-resorts and climate-responsive residences, " +
    "our designs embrace natural cross-ventilation, daylighting optimization, and low-embodied-carbon regional materials.",

  sidebarLabel: "Architectural Precision",
  sidebarStats: [
    { label: "Delivered Projects", value: "50+ Commissions" },
    { label: "Passive Solar Tuning", value: "100% Climate-Tuned" },
    { label: "BIM Standards", value: "LOD 350 / 400" },
  ],

  featuredHeading: "Featured Architecture Commissions",
  projectsLink: "/projects/architecture",
  featuredPhotos: [
    {
      title: "Cliffside Laterite Villa",
      category: "Tropical Modernism",
      image: "/project9.webp",
      metric: "Natural Microclimate Cooling",
    },
    {
      title: "Wayanad Mass Timber Pavilion",
      category: "Mass Timber Glulam",
      image: "/project2.webp",
      metric: "Carbon Sequestering Structure",
    },
    {
      title: "Kochi Marine Civic Center",
      category: "Civic Architecture",
      image: "/project4.webp",
      metric: "LOD 350 BIM Coordination",
    },
  ],

  labLabel: "Building Physics Lab",
  labHeading: "Computational Architecture Methodologies",
  tabsData: [
    {
      id: "cfd",
      label: "Thermodynamic CFD",
      content:
        "Every building envelope is tested using wind-tunnel CFD simulations and computational solar path calculations. This informs window overhangs, central courtyards, and thermal stack chimneys that drop mechanical HVAC runtime by 40%.",
      stat: "-40% Annual HVAC Load",
    },
    {
      id: "tectonics",
      label: "Low-Carbon Tectonics",
      content:
        "We champion regionally quarried laterite stone, compressed stabilized earth blocks (CSEB), and certified mass timber glulam, delivering enduring structural performance with minimal embodied emissions.",
      stat: "-65% Embodied Carbon",
    },
    {
      id: "bim",
      label: "BIM LOD 350 Lifecycle",
      content:
        "Full-stack 3D BIM coordination ensures seamless clash detection between complex architectural geometries, structural frameworks, and MEP engineering systems prior to site breaking.",
      stat: "Zero Field MEP Clashes",
    },
  ],

  faqHeading: "Frequently Asked Architectural Questions",
  faqs: [
    {
      q: "How does Konhabita integrate passive cooling in humid tropical climates?",
      a: "We deploy deep architectural eaves, operable timber jali screens, double-height central lightwells that induce stack ventilation, and high-thermal-mass earth walls that buffer peak midday heat.",
    },
    {
      q: "What architectural phases do you handle from concept to handover?",
      a: "We lead full-lifecycle architectural services: Feasibility & Site Studies, Concept Design, Schematic Development, Statutory Municipal Approvals, Detailed BIM Construction Documentation, and Comprehensive Site Supervision.",
    },
    {
      q: "Can vernacular materials like laterite and compressed earth meet modern structural codes?",
      a: "Yes. We engineer composite structural systems combining reinforced concrete frames with precision-cut laterite masonry and stabilized earth, tested to exceed regional seismic and load-bearing statutory codes.",
    },
  ],

  enquiryDiscipline: "Architectural Design",
  enquiryTitle: "Commission a Bespoke Architectural Project",
  enquirySubtitle:
    "Collaborate directly with our architects on climate-responsive villas, cultural landmarks, and commercial headquarters.",
};
