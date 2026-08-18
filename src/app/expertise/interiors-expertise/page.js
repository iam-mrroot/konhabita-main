import Navbar from "@/components/Navbar";
import InteriorExpertise from "@/components/InteriorExpertise";

export const metadata = {
  title: "Interior Architecture & Biophilic Spaces | Konhabita",
  description:
    "Explore Konhabita's interior architecture expertise. Specializing in bespoke biophilic joinery, zero-VOC natural plasters, acoustic engineering, and circadian lighting design.",
  keywords: [
    "Interior Architecture",
    "Interior Design",
    "Biophilic Interiors",
    "Acoustic Design",
    "Zero VOC Finishes",
    "Bespoke Millwork",
    "Circadian Lighting",
  ],
};

export default function ExpertisePage() {
  return (
    <>
      <Navbar />
      <main>
        <InteriorExpertise />
      </main>
    </>
  );
}