import Navbar from "@/components/Navbar";
import Expertise from "@/components/Expertise";
import ExpertisePage from "@/components/ExpertisePage";
import StudioManifesto from "@/components/StudioManifesto";
import InteractiveStudioLab from "@/components/InteractiveStudioLab";
import Testimonials from "@/components/Testimonials";
import ClientsCarousel from "@/components/ClientsCarousel";
import ContactCard from "@/components/ContactCard";

export const metadata = {
  title: "Konhabita | Architecture, Landscape & Urban Design",
  description:
    "Konhabita is a multidisciplinary design studio focused on architecture, landscape architecture, urban design, interiors, sustainability, and research.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Expertise />
        <ExpertisePage />
        <StudioManifesto />
        <InteractiveStudioLab />
        <Testimonials />
        <ClientsCarousel />
        <ContactCard />
      </main>
    </>
  );
}