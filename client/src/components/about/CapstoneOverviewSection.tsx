import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, FileText, Code, CheckCircle, Clock, Calendar } from "lucide-react";

export default function CapstoneOverviewSection() {
  const LightBulb = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6M10 22h4M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5C8.24 12.24 8.7 13.2 8.9 14M12 2v1" />
    </svg>
  );

  const Presentation = (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 3H5a2 2 0 00-2 2v14c0 1.1.9 2 2 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-3M8 15l2-2 4 4 4-4 2 2M12 3v10" />
    </svg>
  );

  return (
    <section id="capstone-overview" className="mb-12 shadow-lg rounded-xl overflow-hidden border border-gray-100">
      <div className="relative py-8 px-6 bg-gradient-to-r from-primary to-navy text-white">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '20px 20px'
          }}>
        </div>
        
        <div className="relative">
          <h2 className="text-2xl font-bold flex items-center text-white">
            <Briefcase className="h-6 w-6 mr-2" />
            Capstone Project Overview
          </h2>
          <p className="mt-2 text-gray-100">Understanding the culminating academic experience in the BSIT program</p>
        </div>
      </div>
      
      <div className="p-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="highlight-box mb-8">
            <h3 className="text-2xl font-bold text-primary mb-3">What is a Capstone Project?</h3>
            <p className="text-slate-800 text-lg leading-relaxed">
              The BSIT Capstone Project represents the pinnacle of a student's academic journey, 
              providing a platform to demonstrate comprehensive knowledge and skills acquired throughout the program.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="bg-white p-6 rounded-lg card-shadow border border-gray-100">
            <div className="bg-gradient-to-r from-primary-light to-primary p-3 rounded-lg inline-block text-white mb-4">
              <LightBulb className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Purpose & Significance</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              The capstone project serves as a comprehensive demonstration of student competencies,
              creating opportunities for professional growth and industry preparation.
            </p>
            <ul className="space-y-3">
              {[
                "Apply theoretical knowledge to practical, real-world challenges",
                "Develop and implement innovative IT solutions",
                "Demonstrate project management and collaboration skills",
                "Showcase technical proficiency and problem-solving abilities",
                "Build a professional portfolio for future career opportunities"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg card-shadow border border-gray-100">
            <div className="bg-gradient-to-r from-secondary-light to-secondary p-3 rounded-lg inline-block text-white mb-4">
              <Calendar className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-4">Project Timeline & Process</h3>
            <div className="space-y-5">
              {[
                {
                  phase: "Proposal Phase",
                  period: "1st Semester",
                  description: "Problem identification, literature review, methodology planning, and proposal defense",
                  color: "bg-blue-50 border-secondary"
                },
                {
                  phase: "Development Phase",
                  period: "Intersession",
                  description: "Design and implementation of the proposed IT solution, with regular adviser consultations",
                  color: "bg-orange-50 border-primary"
                },
                {
                  phase: "Testing & Refinement",
                  period: "2nd Semester",
                  description: "System testing, user evaluation, and iterative improvements",
                  color: "bg-blue-50 border-secondary"
                },
                {
                  phase: "Final Defense",
                  period: "End of 2nd Semester",
                  description: "Comprehensive project presentation, technical documentation, and submission",
                  color: "bg-orange-50 border-primary"
                }
              ].map((item, i) => (
                <div key={i} className={`${item.color} p-4 rounded-lg border-l-4`}>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-semibold text-slate-800">{item.phase}</h4>
                    <span className="text-xs font-medium bg-white px-2 py-1 rounded-full text-slate-600">{item.period}</span>
                  </div>
                  <p className="text-slate-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Expected Outcomes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Code className="h-10 w-10" />,
                title: "Technical Solution",
                description: "A fully functional IT system, application, or technological solution addressing a specific need or problem",
                iconBg: "from-primary to-primary-dark"
              },
              {
                icon: <FileText className="h-10 w-10" />,
                title: "Comprehensive Documentation",
                description: "Detailed technical and user documentation, including methodology, algorithms, and implementation details",
                iconBg: "from-secondary to-secondary-dark"
              },
              {
                icon: <Presentation className="h-10 w-10" />,
                title: "Professional Presentation",
                description: "Formal defense and demonstration of the project showcasing both technical and communication skills",
                iconBg: "from-primary to-primary-dark"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-100 card-shadow flex flex-col items-center text-center">
                <div className={`bg-gradient-to-r ${item.iconBg} p-3 rounded-full text-white mb-4`}>
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg mb-3">{item.title}</h4>
                <p className="text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
