import Navbar from "@/components/Navbar";
import Studio from "@/components/Studio";

export const metadata = {
  title: "Studio Profile, Philosophy & Team | Konhabita",
  description:
    "Learn about Konhabita's multidisciplinary design studio, core values, practice trajectory, and leadership team in architecture, landscape, and urban planning.",
  keywords: [
    "Konhabita Studio",
    "Architecture Team",
    "Landscape Architects",
    "Urban Planning Directors",
    "Design Philosophy",
    "Kerala Architecture Studio",
  ],
};

export default function StudioPage() {
  return (
    <>
      <Navbar />
      <main>
        <Studio />
      </main>
    </>
  );
}