import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Shield, CheckCircle, Target, Award, BookOpen } from "lucide-react";

export default function VMGOSection() {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <section id="vmgo" className="mb-12 shadow-lg rounded-xl overflow-hidden border border-gray-100">
      <div className="relative py-8 px-6 bg-gradient-to-r from-primary to-navy text-white">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '20px 20px'
          }}>
        </div>
      
        <div className="relative">
          <div className="flex items-center mb-1">
            <Shield className="h-7 w-7 mr-3 text-white opacity-90" />
            <h2 className="text-2xl font-bold tracking-tight text-white">BSIT Vision, Mission, Goals, and Objectives</h2>
          </div>
          <div className="ml-10">
            <p className="text-gray-100 opacity-90 font-light">Guiding principles that form the foundation of our Information Technology program</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-8 relative">
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="75" cy="25" r="25" fill="var(--primary)"/>
            <circle cx="25" cy="75" r="25" fill="var(--navy)"/>
          </svg>
        </div>
        
        <Tabs defaultValue="vision" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8 border-b border-gray-100">
            <TabsList className="flex h-auto bg-gray-50 rounded-full p-1.5 shadow-md">
              <TabsTrigger 
                value="vision" 
                className={`py-3 px-6 font-medium rounded-full transition-all ${
                  activeTab === 'vision' 
                    ? 'bg-white text-primary shadow-md border border-gray-100' 
                    : 'bg-transparent hover:text-primary hover:bg-white hover:bg-opacity-50'
                }`}
              >
                <BookOpen className="h-4 w-4 mr-2 inline-block" />
                Vision
              </TabsTrigger>
              <TabsTrigger 
                value="mission" 
                className={`py-3 px-6 font-medium rounded-full transition-all ${
                  activeTab === 'mission' 
                    ? 'bg-white text-primary shadow-md border border-gray-100' 
                    : 'bg-transparent hover:text-primary hover:bg-white hover:bg-opacity-50'
                }`}
              >
                <Target className="h-4 w-4 mr-2 inline-block" />
                Mission
              </TabsTrigger>
              <TabsTrigger 
                value="goals" 
                className={`py-3 px-6 font-medium rounded-full transition-all ${
                  activeTab === 'goals' 
                    ? 'bg-white text-primary shadow-md border border-gray-100' 
                    : 'bg-transparent hover:text-primary hover:bg-white hover:bg-opacity-50'
                }`}
              >
                <Award className="h-4 w-4 mr-2 inline-block" />
                Goals
              </TabsTrigger>
              <TabsTrigger 
                value="objectives" 
                className={`py-3 px-6 font-medium rounded-full transition-all ${
                  activeTab === 'objectives' 
                    ? 'bg-white text-primary shadow-md border border-gray-100' 
                    : 'bg-transparent hover:text-primary hover:bg-white hover:bg-opacity-50'
                }`}
              >
                <CheckCircle className="h-4 w-4 mr-2 inline-block" />
                Objectives
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className="px-4">
            <TabsContent value="vision" className="m-0">
              <div className="relative p-6 mb-8 bg-gradient-to-br from-white to-orange-50 rounded-xl border border-primary border-opacity-20 shadow-md">
                <div className="absolute top-0 right-0 w-12 h-12 opacity-10">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 0H0V100C55.2285 100 100 55.2285 100 0Z" fill="var(--primary)"/>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold mb-3" style={{ 
                  background: `linear-gradient(135deg, var(--primary), var(--navy))`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline-block'
                }}>Our Vision</h3>
                
                <p className="text-slate-800 text-xl font-medium leading-relaxed relative pl-5 border-l-4 border-primary">
                  <span className="absolute -left-2 -top-2 text-4xl text-primary opacity-20">"</span>
                  <span className="absolute -right-2 -bottom-2 text-4xl text-primary opacity-20">"</span>
                  <span className="relative">To be a leading center of excellence in Information Technology education, producing innovative, ethical, and competent IT professionals.</span>
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm relative">
                <div className="absolute -right-2 -top-2 h-8 w-8 bg-navy opacity-5 rounded-full"></div>
                <div className="absolute -left-2 -bottom-2 h-6 w-6 bg-primary opacity-5 rounded-full"></div>
                
                <p className="text-slate-700 leading-relaxed">
                  The BSIT program envisions itself as a premier institution for IT education, dedicated to developing 
                  professionals who will contribute to national development and global competitiveness through 
                  technological solutions and advancements. We strive to be at the forefront of technology education, 
                  research, and innovation.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="mission" className="m-0">
              <div className="mb-6 relative">
                <div className="absolute top-0 left-0 w-20 h-20 opacity-5">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="var(--secondary)"/>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 relative" style={{ 
                  background: `linear-gradient(135deg, var(--secondary), var(--navy))`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline-block'
                }}>Our Mission</h3>
                
                <p className="text-slate-700 leading-relaxed mb-4 pl-4 border-l-2 border-secondary">
                  The BSIT program is committed to excellence through innovation, education, and industry collaboration.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group bg-white hover:bg-blue-50 transition-all duration-300 p-6 rounded-xl border border-gray-100 hover:border-secondary shadow-sm hover:shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-5 transition-opacity group-hover:opacity-10">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 0H0V100C55.2285 100 100 55.2285 100 0Z" fill="var(--secondary)"/>
                    </svg>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-lg text-secondary">Quality Education</h4>
                  </div>
                  
                  <p className="text-slate-700 pl-13">Providing industry-aligned curriculum and innovative teaching methodologies that prepare students for real-world challenges.</p>
                </div>
                
                <div className="group bg-white hover:bg-orange-50 transition-all duration-300 p-6 rounded-xl border border-gray-100 hover:border-primary shadow-sm hover:shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-5 transition-opacity group-hover:opacity-10">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 0H0V100C55.2285 100 100 55.2285 100 0Z" fill="var(--primary)"/>
                    </svg>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-lg text-primary">Research Culture</h4>
                  </div>
                  
                  <p className="text-slate-700 pl-13">Fostering innovation that addresses real-world challenges through technology-driven solutions and continuous exploration.</p>
                </div>
                
                <div className="group bg-white hover:bg-blue-50 transition-all duration-300 p-6 rounded-xl border border-gray-100 hover:border-secondary shadow-sm hover:shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-5 transition-opacity group-hover:opacity-10">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 0H0V100C55.2285 100 100 55.2285 100 0Z" fill="var(--secondary)"/>
                    </svg>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-lg text-secondary">Practical Skills</h4>
                  </div>
                  
                  <p className="text-slate-700 pl-13">Equipping students with technical expertise, theoretical knowledge, and ethical values needed for their professional success.</p>
                </div>
                
                <div className="group bg-white hover:bg-orange-50 transition-all duration-300 p-6 rounded-xl border border-gray-100 hover:border-primary shadow-sm hover:shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-5 transition-opacity group-hover:opacity-10">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 0H0V100C55.2285 100 100 55.2285 100 0Z" fill="var(--primary)"/>
                    </svg>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <h4 className="font-semibold text-lg text-primary">Industry Partnerships</h4>
                  </div>
                  
                  <p className="text-slate-700 pl-13">Establishing meaningful connections with industries and communities to enhance learning experiences and career opportunities.</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="goals" className="m-0">
              <div className="mb-6 relative">
                <div className="absolute -top-2 -right-2 w-16 h-16 opacity-5">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="var(--primary)"/>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 relative" style={{ 
                  background: `linear-gradient(135deg, var(--primary), var(--navy))`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline-block'
                }}>Program Goals</h3>
                
                <p className="text-slate-700 leading-relaxed mb-4 pl-4 border-l-2 border-primary">
                  Strategic direction for our Information Technology program to ensure student success and program relevance.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-1 bg-secondary"></div>
                  
                  <div className="absolute top-0 right-0 h-40 w-40 -mt-10 -mr-10 opacity-5 group-hover:opacity-10 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  
                  <div className="pl-4">
                    <h4 className="font-semibold text-lg text-secondary mb-3">Academic Excellence</h4>
                    <p className="text-slate-700">Maintain high standards of academic excellence in IT education aligned with international standards and industry requirements.</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-1 bg-primary"></div>
                  
                  <div className="absolute top-0 right-0 h-40 w-40 -mt-10 -mr-10 opacity-5 group-hover:opacity-10 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <line x1="9" y1="9" x2="9.01" y2="9"></line>
                      <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                  </div>
                  
                  <div className="pl-4">
                    <h4 className="font-semibold text-lg text-primary mb-3">Technological Innovation</h4>
                    <p className="text-slate-700">Promote a culture of innovation and continuous improvement in information technology practices and solutions.</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-1 bg-secondary"></div>
                  
                  <div className="absolute top-0 right-0 h-40 w-40 -mt-10 -mr-10 opacity-5 group-hover:opacity-10 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  
                  <div className="pl-4">
                    <h4 className="font-semibold text-lg text-secondary mb-3">Industry Collaboration</h4>
                    <p className="text-slate-700">Strengthen collaborations with IT industries to ensure curriculum relevance and enhance employment opportunities for graduates.</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-1 bg-primary"></div>
                  
                  <div className="absolute top-0 right-0 h-40 w-40 -mt-10 -mr-10 opacity-5 group-hover:opacity-10 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                    </svg>
                  </div>
                  
                  <div className="pl-4">
                    <h4 className="font-semibold text-lg text-primary mb-3">Social Responsibility</h4>
                    <p className="text-slate-700">Develop socially responsible IT professionals who contribute to community development through technology.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="objectives" className="m-0">
              <div className="mb-6 relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 opacity-5">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM50 80C66.5685 80 80 66.5685 80 50C80 33.4315 66.5685 20 50 20C33.4315 20 20 33.4315 20 50C20 66.5685 33.4315 80 50 80Z" fill="var(--navy)"/>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 relative" style={{ 
                  background: `linear-gradient(135deg, var(--navy), var(--secondary))`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline-block'
                }}>Program Objectives</h3>
                
                <p className="text-slate-700 mb-6 text-lg pl-4 border-l-2 border-navy">
                  The BSIT program aims to produce graduates who will excel in the following areas:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  {
                    text: "Demonstrate technical proficiency in IT systems development and management",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    )
                  },
                  {
                    text: "Apply critical thinking and problem-solving skills to complex IT challenges",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="2" x2="12" y2="6"></line>
                        <line x1="12" y1="18" x2="12" y2="22"></line>
                        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                        <line x1="2" y1="12" x2="6" y2="12"></line>
                        <line x1="18" y1="12" x2="22" y2="12"></line>
                        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                      </svg>
                    )
                  },
                  {
                    text: "Exhibit effective communication and teamwork in diverse professional environments",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    )
                  },
                  {
                    text: "Uphold ethical standards and professional responsibility in IT practice",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                      </svg>
                    )
                  },
                  {
                    text: "Engage in lifelong learning and adapt to emerging technologies",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                    )
                  },
                  {
                    text: "Contribute to technological innovation through research and development",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    )
                  }
                ].map((objective, index) => (
                  <div key={index} className="group flex items-start p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-5 transition-opacity">
                      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {index % 2 === 0 ? (
                          <circle cx="50" cy="50" r="50" fill="var(--primary)"/>
                        ) : (
                          <circle cx="50" cy="50" r="50" fill="var(--secondary)"/>
                        )}
                      </svg>
                    </div>
                  
                    <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center text-white mr-4 ${
                      index % 2 === 0 ? 'bg-primary text-white' : 'bg-secondary text-white'
                    }`}>
                      {objective.icon}
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-1">
                        <span className={`font-medium text-sm ${
                          index % 2 === 0 ? 'text-primary' : 'text-secondary'
                        }`}>Objective {index + 1}</span>
                      </div>
                      <p className="text-slate-700">{objective.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
