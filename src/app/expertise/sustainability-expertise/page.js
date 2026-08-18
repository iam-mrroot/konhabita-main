import Navbar from "@/components/Navbar";
import SustainabilityExpertise from "@/components/SustainabilityExpertise";

export const metadata = {
  title: "Sustainability Research & Net-Zero Strategies | Konhabita",
  description:
    "Explore Konhabita's sustainability research and engineering expertise. Specializing in net-zero carbon LCA modeling, building physics CFD, circular materials, and LEED/GRIHA green building certifications.",
  keywords: [
    "Sustainability Architecture",
    "Net Zero Carbon Buildings",
    "Life Cycle Assessment LCA",
    "Building Physics CFD",
    "Green Building Certification",
    "LEED Platinum Architecture",
    "Circular Materials",
  ],
};

export default function ExpertisePage() {
  return (
    <>
      <Navbar />
      <main>
        <SustainabilityExpertise />
      </main>
    </>
  );
}