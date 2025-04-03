import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Linkedin, Github, Mail } from "lucide-react";

export default function PersonnelSection() {
  const facultyAdvisers = [
    {
      name: "Vince Mark E. Arnedo",
      position: "CICS Faculty",
      expertise: "Expertise in web development, software architecture, and information systems."
    },
    {
      name: "Jayson C. Domingo",
      position: "BSIT Student",
      expertise: "Specializes in web development, UI/UX design, and database management."
    }
  ];

  const industryPartners = [
    {
      name: "TechInnovate Solutions",
      description: "Provides real-world software development challenges and mentorship"
    },
    {
      name: "DataSphere Analytics",
      description: "Offers data science projects and technical guidance"
    },
    {
      name: "SecureNet Systems",
      description: "Collaborates on cybersecurity challenges and industry best practices"
    },
    {
      name: "CloudMatrix Technologies",
      description: "Supports cloud computing projects and provides infrastructure resources"
    }
  ];

  const communityOrganizations = [
    {
      name: "Digital Literacy Foundation",
      description: "Partners on projects related to bridging the digital divide in communities"
    },
    {
      name: "Healthcare Technology Alliance",
      description: "Collaborates on healthcare IT solutions for underserved populations"
    },
    {
      name: "SmartCity Initiative",
      description: "Provides urban technology challenges and implementation opportunities"
    },
    {
      name: "EdTech Access Program",
      description: "Works on projects to improve educational technology access in schools"
    }
  ];

  return (
    <section id="personnel" className="mb-12 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-primary text-white p-6">
        <h2 className="text-2xl font-bold flex items-center text-white">
          <Users className="h-6 w-6 mr-2" />
          Capstone Project Personnel
        </h2>
        <p className="mt-2 text-gray-200">Key individuals involved in the capstone project initiative</p>
      </div>
      
      <div className="p-6">
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-primary mb-4">Research Leadership</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Research Focal Person */}
            <div className="flex flex-col md:flex-row gap-5 items-center md:items-start">
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 flex items-center justify-center border border-gray-200">
                <Avatar className="w-full h-full">
                  <AvatarFallback className="bg-gray-200 text-gray-500 text-4xl">
                    VMA
                  </AvatarFallback>
                </Avatar>
              </div>
              <div>
                <h4 className="text-lg font-medium text-primary-light">Vince Mark E. Arnedo</h4>
                <p className="text-secondary font-medium mb-2">Research Focal Person</p>
                <p className="text-gray-700 mb-3">
                  CICS Faculty member with specialization in web development and information systems. Leads the 
                  overall research direction of the BSIT program and coordinates capstone project initiatives.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="text-primary hover:text-secondary transition-colors" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-primary hover:text-secondary transition-colors" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-primary hover:text-secondary transition-colors" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Department Chair */}
            <div className="flex flex-col md:flex-row gap-5 items-center md:items-start">
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 flex items-center justify-center border border-gray-200">
                <Avatar className="w-full h-full">
                  <AvatarFallback className="bg-gray-200 text-gray-500 text-4xl">
                    JCD
                  </AvatarFallback>
                </Avatar>
              </div>
              <div>
                <h4 className="text-lg font-medium text-primary-light">Jayson C. Domingo</h4>
                <p className="text-secondary font-medium mb-2">BSIT Student</p>
                <p className="text-gray-700 mb-3">
                  A dedicated BSIT student with skills in web development, UI/UX design, and database management. 
                  Contributes to the implementation of capstone projects and provides technical assistance.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="text-primary hover:text-secondary transition-colors" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-primary hover:text-secondary transition-colors" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-primary mb-4">Faculty Advisers</h3>
          <p className="text-gray-700 mb-4">
            Our dedicated faculty advisers guide students through their capstone journey, providing expertise across various IT domains.
          </p>
          
          <div className="grid md:grid-cols-3 gap-5">
            {facultyAdvisers.map((adviser, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-lg border border-gray-200 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 mb-3 flex items-center justify-center border border-gray-200">
                  <Avatar className="w-full h-full">
                    <AvatarFallback className="bg-gray-200 text-gray-400 text-xl">
                      {adviser.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h4 className="font-medium text-primary-light">{adviser.name}</h4>
                <p className="text-sm text-secondary mb-2">{adviser.position}</p>
                <p className="text-sm text-gray-600 mb-3">{adviser.expertise}</p>
                <a href="#" className="text-primary hover:text-secondary text-sm">View Profile</a>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-primary mb-4">External Collaborators</h3>
          <p className="text-gray-700 mb-4">
            The capstone project initiative benefits from collaboration with industry partners and community organizations
            who provide real-world challenges, mentorship, and evaluation support.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Industry Partners */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-blue-50 p-4 border-b border-gray-200">
                <h4 className="font-medium text-lg text-primary flex items-center">
                  <Building className="h-5 w-5 mr-2 text-secondary" />
                  Industry Partners
                </h4>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  {industryPartners.map((partner, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <div>
                        <span className="font-medium text-primary-light">{partner.name}</span> 
                        <p className="text-sm text-gray-600">{partner.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Community Organizations */}
            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-blue-50 p-4 border-b border-gray-200">
                <h4 className="font-medium text-lg text-primary flex items-center">
                  <Users className="h-5 w-5 mr-2 text-secondary" />
                  Community Organizations
                </h4>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  {communityOrganizations.map((org, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <div>
                        <span className="font-medium text-primary-light">{org.name}</span> 
                        <p className="text-sm text-gray-600">{org.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Building = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);
