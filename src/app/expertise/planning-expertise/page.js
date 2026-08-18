import Navbar from "@/components/Navbar";
import PlanningExpertise from "@/components/PlanningExpertise";

export const metadata = {
  title: "Urban Planning & Master Design | Konhabita",
  description:
    "Explore Konhabita's urban planning and urban design expertise. Specializing in regional masterplans, transit-oriented developments (TOD), waterfront revitalization, and smart city frameworks.",
  keywords: [
    "Urban Planning",
    "Urban Design",
    "Masterplanning",
    "Transit Oriented Development",
    "Smart City Planning",
    "Waterfront Urban Design",
    "GIS Spatial Planning",
  ],
};

export default function ExpertisePage() {
  return (
    <>
      <Navbar />
      <main>
        <PlanningExpertise />
      </main>
    </>
  );
}