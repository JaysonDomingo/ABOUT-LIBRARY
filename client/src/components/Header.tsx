import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className="sticky top-0 z-50 animate-fade-in">
      {/* Top decorative bar */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-navy"></div>
      
      {/* Main header */}
      <div className="bg-navy text-white py-4 shadow-lg relative">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '20px 20px'
          }}>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo and Title */}
            <div className="flex items-center">
              <div className="mr-3.5 bg-white p-1.5 rounded-full shadow-lg border-2 border-primary flex-shrink-0 transition-transform hover:scale-105 duration-300">
                <img 
                  src="/assets/cics-logo.png" 
                  alt="CICS Logo" 
                  className="h-11 w-11"
                />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                  <span className="text-primary">BSIT</span> Capstone Projects
                </h1>
                <p className="text-xs md:text-sm text-gray-300">
                  Bachelor of Science in <span className="text-primary font-medium">Information Technology</span>
                </p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                {[
                  { path: "/", label: "Home" },
                  { path: "/about", label: "About" },
                  { path: "/projects", label: "Projects" },
                  { path: "/contact", label: "Contact" }
                ].map((item) => (
                  <li key={item.path}>
                    <Link href={item.path}>
                      <span 
                        className={`
                          relative font-medium cursor-pointer px-3 py-2 rounded-md transition-all
                          ${location === item.path 
                            ? 'bg-white bg-opacity-10 text-primary' 
                            : 'hover:bg-white hover:bg-opacity-5 hover:text-primary'}
                        `}
                      >
                        {item.label}
                        {location === item.path && (
                          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full"></span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Mobile Menu Toggle Button */}
            <button 
              className="md:hidden text-white focus:outline-none p-2 hover:bg-white/10 rounded-lg transition-colors" 
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-2 border-t border-white/10 pt-3">
              <ul className="flex flex-col space-y-2">
                {[
                  { path: "/", label: "Home" },
                  { path: "/about", label: "About" },
                  { path: "/projects", label: "Projects" },
                  { path: "/contact", label: "Contact" }
                ].map((item) => (
                  <li key={item.path}>
                    <Link href={item.path}>
                      <span 
                        className={`
                          block py-2 px-3 rounded-md transition-colors
                          ${location === item.path 
                            ? 'bg-white bg-opacity-10 text-primary font-medium border-l-2 border-primary' 
                            : 'hover:bg-white hover:bg-opacity-5 hover:text-gray-100'}
                        `}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
      
      {/* Bottom accent */}
      <div className="h-0.5 w-full bg-gradient-to-r from-navy via-secondary to-primary opacity-50"></div>
    </header>
  );
}