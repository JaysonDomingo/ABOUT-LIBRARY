import React, { useState } from 'react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  projectTitle?: string;
  year?: string;
  company?: string;
  imageSrc?: string;
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Sample testimonial data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "The BSIT Capstone program provided me with real-world experience that directly translated to my career. The skills I learned during my project helped me secure a position right after graduation.",
      author: "Maria Santos",
      role: "Software Engineer",
      company: "TechConnect Solutions",
      year: "2022",
      imageSrc: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      quote: "My capstone project opened doors I never thought possible. The mentorship and guidance from the BSIT faculty helped me turn my concept into a fully functional application that now serves over 5,000 users.",
      author: "Juan Reyes",
      role: "Web Developer",
      projectTitle: "Community Connect Platform",
      year: "2021",
      imageSrc: "https://randomuser.me/api/portraits/men/36.jpg"
    },
    {
      id: 3,
      quote: "Working on my capstone project taught me how to collaborate effectively with a team and solve complex problems under time constraints. These are invaluable skills I use every day in my current role.",
      author: "Ana Gonzales",
      role: "System Analyst",
      company: "Global Systems Inc.",
      year: "2023",
      imageSrc: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="mb-10">
        <div className="flex items-center mb-2">
          <div className="w-12 h-1 bg-primary rounded-full"></div>
          <div className="w-8 h-1 bg-navy ml-1 rounded-full"></div>
        </div>
        
        <h2 className="text-3xl font-bold mb-4 text-navy">
          Success Stories
          <span className="text-primary">.</span>
        </h2>
        
        <p className="text-gray-600 max-w-3xl text-lg">
          Discover how our BSIT capstone program has helped students launch their careers and make an impact in the technology industry.
        </p>
      </div>

      {/* Featured Testimonial Card */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 mb-12 animate-fade-in">
        <div className="md:flex">
          <div className="md:w-1/2 bg-navy p-10 relative">
            {/* Background pattern with animation */}
            <div 
              className="absolute inset-0 opacity-10 animate-pulse" 
              style={{ 
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M15 0L30 15L15 30L0 15L15 0Z\' /%3E%3C/g%3E%3C/svg%3E")',
                animationDuration: '15s'
              }}
            ></div>
            
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-navy/95 to-navy/80 animate-gradient-shift"></div>
            
            {/* Quote icon with animation */}
            <svg 
              className="absolute top-6 left-6 text-primary opacity-30 w-16 h-16 animate-glow" 
              style={{ animationDuration: '6s' }}
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            {/* Quote with animation */}
            <div className="relative z-10">
              <p 
                key={activeIndex} 
                className="text-white text-xl md:text-2xl italic font-light leading-relaxed animate-fade-in"
                style={{ animationDuration: '0.6s' }}
              >
                "{testimonials[activeIndex].quote}"
              </p>
              
              <div className="mt-8 flex items-center">
                {testimonials[activeIndex].imageSrc && (
                  <div 
                    key={`img-${activeIndex}`}
                    className="mr-4 border-2 border-primary rounded-full overflow-hidden w-14 h-14 flex-shrink-0 animate-slide-in"
                    style={{ animationDuration: '0.5s', animationDelay: '0.3s' }}
                  >
                    <img 
                      src={testimonials[activeIndex].imageSrc} 
                      alt={testimonials[activeIndex].author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div key={`author-${activeIndex}`} className="animate-fade-in" style={{ animationDuration: '0.7s' }}>
                  <p className="font-bold text-white text-lg">{testimonials[activeIndex].author}</p>
                  <p className="text-gray-300">{testimonials[activeIndex].role}</p>
                  {testimonials[activeIndex].company && (
                    <p className="text-primary">{testimonials[activeIndex].company}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 p-10">
            <h3 className="text-2xl font-bold mb-4 text-navy">Capstone Success</h3>
            
            <p className="text-gray-600 mb-6">
              Our BSIT Capstone program has a proven track record of helping students develop projects that lead to successful careers in the technology industry.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 rounded p-4 text-center hover-lift cursor-pointer shadow-sm hover:shadow transition-all duration-300">
                <p key={`stat1-${activeIndex}`} className="text-3xl font-bold text-primary animate-count">97%</p>
                <p className="text-sm text-gray-600">Employment Rate</p>
              </div>
              <div className="bg-gray-50 rounded p-4 text-center hover-lift cursor-pointer shadow-sm hover:shadow transition-all duration-300">
                <p key={`stat2-${activeIndex}`} className="text-3xl font-bold text-navy animate-count">25+</p>
                <p className="text-sm text-gray-600">Industry Partners</p>
              </div>
              <div className="bg-gray-50 rounded p-4 text-center hover-lift cursor-pointer shadow-sm hover:shadow transition-all duration-300">
                <p key={`stat3-${activeIndex}`} className="text-3xl font-bold text-primary animate-count">53</p>
                <p className="text-sm text-gray-600">Award-Winning Projects</p>
              </div>
            </div>
            
            {/* Testimonial Navigation */}
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">
                {activeIndex + 1} of {testimonials.length} stories
              </p>
              
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeIndex === index ? 'bg-primary scale-125' : 'bg-gray-300'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                  aria-label="Previous testimonial"
                >
                  ←
                </button>
                <button
                  onClick={() => setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Testimonials in Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id} 
            className={`bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover-lift group transition-all duration-300 animate-fade-in ${
              index === activeIndex ? 'ring-2 ring-primary ring-opacity-50' : ''
            }`}
            onClick={() => setActiveIndex(index)}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="h-2 bg-primary group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300"></div>
            <div className="p-6">
              {/* Quote */}
              <div className="mb-6 relative">
                <svg 
                  className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 text-primary opacity-10 w-12 h-12 group-hover:opacity-20 transition-opacity" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 italic relative z-10 group-hover:text-navy transition-colors">
                  {testimonial.quote.length > 150 
                    ? `${testimonial.quote.substring(0, 150)}...` 
                    : testimonial.quote}
                </p>
              </div>
              
              {/* Author info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {testimonial.imageSrc && (
                    <div className="mr-3 rounded-full overflow-hidden w-10 h-10 flex-shrink-0 border border-transparent group-hover:border-primary transition-colors">
                      <img 
                        src={testimonial.imageSrc} 
                        alt={testimonial.author} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-navy">{testimonial.author}</p>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                {testimonial.year && (
                  <div className="bg-gray-100 text-navy text-xs font-medium rounded-full px-2 py-1 group-hover:bg-navy group-hover:text-white transition-colors">
                    {testimonial.year}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Call to action */}
      <div className="mt-12 text-center bg-navy bg-opacity-5 rounded-lg p-8 relative overflow-hidden animate-fade-in" style={{ animationDelay: '300ms' }}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23f26522\' fill-opacity=\'0.3\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E")'
          }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-3 text-navy animate-slide-in" style={{ animationDelay: '400ms' }}>
            Ready to create your own success story?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto animate-slide-in" style={{ animationDelay: '500ms' }}>
            Join our BSIT Capstone program and gain the skills, mentorship, and opportunities needed to launch your technology career.
          </p>
          <button className="btn-primary hover:shadow-lg transition-all py-3 px-8 text-lg rounded-md animate-slide-in hover:scale-105" 
            style={{ animationDelay: '600ms' }}>
            Start Your Capstone Journey
          </button>
        </div>
      </div>
    </section>
  );
}