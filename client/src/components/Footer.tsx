import { Link } from "wouter";
import { Mail, Building, MapPin } from "lucide-react";
import { SiGithub, SiFacebook, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="mt-8">
      {/* Footer Header */}
      <div className="relative bg-gradient-to-r from-primary to-navy py-8 px-4 md:px-6">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '20px 20px'
          }}>
        </div>
        
        <div className="container mx-auto relative">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Connect With Us</h2>
              <p className="text-gray-200 mt-1">Explore the BSIT Capstone community</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://sjcbi.edu.ph/" target="_blank" rel="noopener noreferrer" className="hover:shadow-lg transition-shadow bg-white p-2 rounded-full border-2 border-white">
                <img src="/assets/cics-logo.png" alt="CICS Logo" className="h-8 w-8" />
              </a>
              <a href="#" className="bg-[#0077B5] text-white hover:bg-[#0069a1] p-2 rounded-full transition-colors hover:shadow-lg">
                <SiLinkedin className="h-7 w-7" />
              </a>
              <a href="#" className="bg-slate-800 text-white hover:bg-slate-900 p-2 rounded-full transition-colors hover:shadow-lg">
                <SiGithub className="h-7 w-7" />
              </a>
              <a href="#" className="bg-primary text-white hover:bg-primary-dark p-2 rounded-full transition-colors hover:shadow-lg">
                <SiFacebook className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Content */}
      <div className="bg-white py-10 px-4 md:px-6 shadow-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <h3 className="text-xl font-bold mb-3 text-white bg-primary px-4 py-2 rounded-lg inline-block">BSIT Capstone Projects</h3>
              <p className="text-slate-600 mb-4 mt-3">
                Showcasing excellence in information technology education and innovation.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a href="https://sjcbi.edu.ph/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transform transition bg-white p-1.5 rounded-full border-2 border-primary shadow-md">
                  <img src="/assets/cics-logo.png" alt="CICS Logo" className="h-8 w-8" />
                </a>
                <span className="text-slate-500 text-sm">Saint Joseph College of Baggao</span>
              </div>
            </div>
            
            <div className="md:border-l md:border-r border-gray-200 md:px-6">
              <h3 className="text-lg font-bold mb-4 text-white bg-primary px-4 py-2 rounded-lg inline-block">Quick Links</h3>
              <ul className="space-y-3 mt-3">
                <li>
                  <Link href="/">
                    <span className="text-slate-600 hover:text-primary transition-colors cursor-pointer flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full inline-block mr-2"></span>
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span className="text-slate-600 hover:text-primary transition-colors cursor-pointer flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full inline-block mr-2"></span>
                      About
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <span className="text-slate-600 hover:text-primary transition-colors cursor-pointer flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full inline-block mr-2"></span>
                      Projects
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <span className="text-slate-600 hover:text-primary transition-colors cursor-pointer flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full inline-block mr-2"></span>
                      Contact
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-white bg-primary px-4 py-2 rounded-lg inline-block">Contact Information</h3>
              <address className="not-italic text-slate-600 space-y-4 mt-3">
                <p className="flex items-center group">
                  <span className="flex-shrink-0 h-9 w-9 rounded-full bg-blue-50 flex items-center justify-center mr-3 text-secondary group-hover:bg-blue-100 transition-colors shadow-sm">
                    <Mail className="h-4 w-4" />
                  </span>
                  <a href="mailto:arnedovincemark@sjcbi.edu.ph" className="hover:text-primary transition-colors">
                    arnedovincemark@sjcbi.edu.ph
                  </a>
                </p>
                <p className="flex items-center group">
                  <span className="flex-shrink-0 h-9 w-9 rounded-full bg-orange-50 flex items-center justify-center mr-3 text-primary group-hover:bg-orange-100 transition-colors shadow-sm">
                    <Building className="h-4 w-4" />
                  </span>
                  <span>Vince Mark E. Arnedo</span>
                </p>
                <p className="flex items-start group">
                  <span className="flex-shrink-0 h-9 w-9 rounded-full bg-blue-50 flex items-center justify-center mr-3 text-secondary group-hover:bg-blue-100 transition-colors mt-1 shadow-sm">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span>
                    CICS Faculty, 4th floor<br />
                    Felicismo Herrera Building
                  </span>
                </p>
              </address>
            </div>
          </div>
          
          <div className="mt-10 pt-6 text-center border-t border-gray-100">
            <div className="flex flex-wrap justify-center items-center gap-2">
              <span className="text-slate-500">Developed by</span>
              <span className="font-semibold px-3 py-1 bg-primary text-white rounded-md shadow-sm">BSIT CLASS OF 2025</span>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span className="text-primary font-medium">Jayson C. Domingo</span>
            </div>
            <p className="text-xs text-slate-400 mt-4">© {new Date().getFullYear()} BSIT Capstone Projects. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
