import Navbar from "@/components/Navbar";
import LandscapeExpertise from "@/components/LandscapeExpertise";

export const metadata = {
  title: "Landscape Architecture & Ecological Design | Konhabita",
  description:
    "Explore Konhabita's landscape architecture expertise. Specializing in sponge city urban hydrology, native plant biodiversity, civic waterfronts, and institutional campus landscapes.",
  keywords: [
    "Landscape Architecture",
    "Urban Hydrology",
    "Sponge City Design",
    "Native Planting Ecology",
    "Waterfront Promenades",
    "Campus Landscape Architecture",
    "Sustainable Landscape Design",
  ],
};

export default function ExpertisePage() {
  return (
    <>
      <Navbar />
      <main>
        <LandscapeExpertise />
      </main>
    </>
  );
}