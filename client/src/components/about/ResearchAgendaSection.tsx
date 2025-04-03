import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Lightbulb, Monitor, ShieldCheck, BarChart, Smartphone, Cpu, Globe, Building, School, Users } from "lucide-react";

export default function ResearchAgendaSection() {
  const researchAreas = [
    {
      title: "Artificial Intelligence & Machine Learning",
      icon: <Lightbulb className="h-5 w-5 mr-2 text-secondary" />,
      description: "Exploring AI/ML applications to solve practical problems in various domains.",
      focusAreas: [
        "Natural Language Processing",
        "Computer Vision & Image Recognition",
        "Predictive Analytics",
        "Intelligent Assistants & Chatbots",
        "Pattern Recognition Systems"
      ]
    },
    {
      title: "Cybersecurity & Information Assurance",
      icon: <ShieldCheck className="h-5 w-5 mr-2 text-secondary" />,
      description: "Developing solutions to address security challenges in digital environments.",
      focusAreas: [
        "Network Security Systems",
        "Vulnerability Assessment Tools",
        "Privacy-Enhancing Technologies",
        "Digital Forensics Applications",
        "Secure Software Development"
      ]
    },
    {
      title: "Data Science & Analytics",
      icon: <BarChart className="h-5 w-5 mr-2 text-secondary" />,
      description: "Leveraging data for insights, decision-making, and business intelligence.",
      focusAreas: [
        "Big Data Processing Systems",
        "Data Visualization Platforms",
        "Predictive Modeling Applications",
        "Business Intelligence Tools",
        "Data Mining & Knowledge Discovery"
      ]
    },
    {
      title: "Mobile & Web Technologies",
      icon: <Smartphone className="h-5 w-5 mr-2 text-secondary" />,
      description: "Creating innovative applications and services for mobile and web platforms.",
      focusAreas: [
        "Progressive Web Applications",
        "Cross-platform Mobile Solutions",
        "Location-based Services",
        "Mobile Health Applications",
        "Responsive Web Frameworks"
      ]
    },
    {
      title: "Internet of Things (IoT)",
      icon: <Cpu className="h-5 w-5 mr-2 text-secondary" />,
      description: "Developing connected solutions for various applications and environments.",
      focusAreas: [
        "Smart Home & Building Systems",
        "Environmental Monitoring Solutions",
        "Industrial IoT Applications",
        "Wearable Technology",
        "IoT Security Frameworks"
      ]
    },
    {
      title: "Educational Technology",
      icon: <Globe className="h-5 w-5 mr-2 text-secondary" />,
      description: "Enhancing learning through technological innovations in education.",
      focusAreas: [
        "E-Learning Platforms",
        "Learning Management Systems",
        "Educational Assessment Tools",
        "Interactive Learning Applications",
        "Educational Data Analytics"
      ]
    }
  ];

  return (
    <section id="research-agenda" className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-primary text-white p-6">
        <h2 className="text-2xl font-bold flex items-center text-white">
          <Lightbulb className="h-6 w-6 mr-2" />
          BSIT Research Agenda
        </h2>
        <p className="mt-2 text-gray-200">Priority research areas and focus domains for capstone projects</p>
      </div>
      
      <div className="p-6">
        <div className="text-gray-700 mb-6">
          <p className="leading-relaxed">
            The BSIT research agenda provides a strategic framework that guides capstone project selection and development. 
            It is designed to align with institutional priorities, industry trends, and societal needs, while providing 
            students with opportunities to contribute to meaningful technological advancements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-50 p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-primary flex items-center">
                  {area.icon}
                  {area.title}
                </h3>
              </div>
              <div className="p-4">
                <p className="text-gray-700 mb-3">
                  {area.description}
                </p>
                <h4 className="font-medium text-primary-light mb-2">Focus Areas:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {area.focusAreas.map((focus, idx) => (
                    <li key={idx}>{focus}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-gray-50 p-5 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-primary mb-3">Industry Alignment & Collaboration</h3>
          <p className="text-gray-700 mb-4">
            The BSIT research agenda is developed and regularly updated in consultation with:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start">
              <div className="text-secondary mr-3">
                <Building className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-primary-light">Industry Partners</h4>
                <p className="text-sm text-gray-600">Ensuring relevance to current market needs</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-secondary mr-3">
                <School className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-primary-light">Academic Researchers</h4>
                <p className="text-sm text-gray-600">Incorporating theoretical advancements</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-secondary mr-3">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-primary-light">Community Stakeholders</h4>
                <p className="text-sm text-gray-600">Addressing societal needs and concerns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
