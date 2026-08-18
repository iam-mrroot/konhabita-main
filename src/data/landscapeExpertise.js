import { Leaf } from "lucide-react";

export const landscapeExpertise = {
  activeCategory: "Landscape",
  icon: Leaf,
  badgeLabel: "Ecological Design Discipline",
  heading: "Landscape Architecture & Living Ecological Systems",
  intro:
    "At Konhabita, we treat landscapes as the vital living tissue of resilient communities. " +
    "We engineer regenerative outdoor environments that deepen the bond between people and nature while elevating the built realm.",
  description:
    "Our practice weaves together hydrological engineering, climate-smart plant selection, and visceral sensory design. " +
    "From civic waterfront promenades and sponge parks to research campuses and secluded private sanctuaries, " +
    "every living landscape is calibrated to thrive across generations with minimal resource inputs.",

  sidebarLabel: "Ecological Metrics",
  sidebarStats: [
    { label: "Living Landscapes", value: "1.2M+ sq.ft" },
    { label: "Native Species Index", value: "100% Flora" },
    { label: "Stormwater Infiltration", value: "Zero Runoff" },
  ],

  featuredHeading: "Featured Landscape Commissions",
  projectsLink: "/projects/landscape",
  featuredPhotos: [
    {
      title: "Al-Barari Ecological Corridor",
      category: "Sponge City Hydrology",
      image: "/project1.webp",
      metric: "100% Runoff Infiltrated",
    },
    {
      title: "Bio-Retention Research Park",
      category: "Native Botanical Canopy",
      image: "/project7.webp",
      metric: "45+ Native Flora Species",
    },
    {
      title: "Wayanad Valley Eco-Lodge Terraces",
      category: "Living Terraces & Agroforestry",
      image: "/project2.webp",
      metric: "-4°C Microclimate Drop",
    },
  ],

  labLabel: "Interactive Methodology",
  labHeading: "Explore Ecological Simulation Systems",
  tabsData: [
    {
      id: "hydrology",
      label: "Hydrological Engineering",
      content:
        "Our hydrological modeling calculates 100-year storm event curves, integrating surface bioswales, retention reservoirs, and permeable pavements that eliminate urban flash flooding and replenish ground aquifers.",
      stat: "100% Stormwater Infiltration",
    },
    {
      id: "biodiversity",
      label: "Endemic Planting Palette",
      content:
        "We source indigenous species from local nurseries to establish self-sustaining plant communities that support native pollinators, restore degraded soil microbiomes, and eliminate chemical fertilizers.",
      stat: "Zero Synthetic Pesticides",
    },
    {
      id: "microclimate",
      label: "Microclimate Cooling",
      content:
        "Strategic tree canopies, prevailing wind channels, and evaporative water bodies combine to reduce surface heat island temperatures by up to 5°C in dense tropical and arid urban environments.",
      stat: "3°C - 5°C Ambient Drop",
    },
  ],

  faqHeading: "Frequently Asked Technical Questions",
  faqs: [
    {
      q: "How does sponge city landscape architecture reduce civil infrastructure costs?",
      a: "By replacing conventional deep underground concrete storm sewers with decentralized bioswales, rain gardens, and retention wetlands, we reduce civil excavation and pipe costs by 25–35% while creating attractive above-ground public amenities.",
    },
    {
      q: "What is Konhabita's policy on native species and plant sourcing?",
      a: "We mandate 100% regionally endemic or adapted non-invasive species suited to local rainfall cycles. This guarantees drought tolerance, minimal irrigation overhead, and genuine ecological value for native fauna.",
    },
    {
      q: "How are landscape projects coordinated with architectural and civil engineering teams?",
      a: "All landscape assets are authored in 3D BIM (LOD 300/350) with integrated digital terrain grading models, allowing direct clash detection with sub-surface MEP utilities and structural foundations.",
    },
  ],

  enquiryDiscipline: "Landscape Architecture",
  enquiryTitle: "Commission a Landscape or Urban Ecology Masterplan",
  enquirySubtitle:
    "Collaborate directly with our landscape architects on sponge city hydrology, civic parks, and botanical masterplans.",
};
