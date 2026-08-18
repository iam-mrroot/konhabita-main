import Navbar from "@/components/Navbar";
import ArchitectureExpertise from "@/components/ArchitectureExpertise";

export const metadata = {
  title: "Architectural Design & Sustainable Buildings | Konhabita",
  description:
    "Explore Konhabita's architectural design expertise. Specializing in passive climate architecture, low-carbon materials, civic landmarks, and tropical modern residences.",
  keywords: [
    "Architectural Design",
    "Sustainable Architecture",
    "Passive Building Design",
    "Climate Responsive Architecture",
    "Mass Timber Architecture",
    "Civic Architecture",
    "BIM LOD 350",
  ],
};

export default function ExpertisePage() {
  return (
    <>
      <Navbar />
      <main>
        <ArchitectureExpertise />
      </main>
    </>
  );
}