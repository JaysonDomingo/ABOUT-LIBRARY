import PageBanner from "@/components/PageBanner";
import VMGOSection from "@/components/about/VMGOSection";
import CapstoneOverviewSection from "@/components/about/CapstoneOverviewSection";
import ResearchAgendaSection from "@/components/about/ResearchAgendaSection";
import PersonnelSection from "@/components/about/PersonnelSection";

export default function About() {
  return (
    <>
      <PageBanner 
        title="About" 
        description="Learn about our program, research focus, and the people behind our capstone projects" 
      />
      
      <main className="container mx-auto px-4 md:px-6 py-8">
        <div className="space-y-8">
          <VMGOSection />
          <CapstoneOverviewSection />
          <ResearchAgendaSection />
          <PersonnelSection />
        </div>
      </main>
    </>
  );
}
