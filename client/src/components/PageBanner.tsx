interface PageBannerProps {
  title: string;
  description: string;
}

export default function PageBanner({ title, description }: PageBannerProps) {
  return (
    <div className="relative bg-navy text-white overflow-hidden">
      {/* Background pattern - subtle triangles */}
      <div className="absolute inset-0 opacity-10 animate-pulse" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23f26522\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M20 0L40 20L20 40L0 20L20 0Z\' /%3E%3C/g%3E%3C/svg%3E")',
          animationDuration: '10s'
        }}
      ></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/50 via-transparent to-[#0077B5]/10 animate-gradient-shift"></div>
      
      {/* Top accent line with animation */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary animate-glow"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-14 md:py-16 relative">
        <div className="max-w-3xl relative z-10 animate-fade-in">
          {/* Orange accent line with animation */}
          <div className="mb-5 w-16 h-1 bg-primary rounded-sm opacity-80 animate-width transition-all duration-700"></div>
          
          {/* Title with slide-in animation */}
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-white opacity-0 animate-slide-in" 
              style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            {title}
          </h1>
          
          {/* Description with fade-in animation */}
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl opacity-0 animate-fade-in"
             style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            {description}
          </p>
        </div>
        
        {/* Decorative element with animation */}
        <div className="absolute right-10 bottom-5 hidden md:block">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" 
               className="opacity-20 animate-spin-slow">
            <circle cx="50" cy="50" r="45" stroke="#F26522" strokeWidth="2" />
            <circle cx="50" cy="50" r="30" stroke="#0077B5" strokeWidth="2" />
            <circle cx="50" cy="50" r="15" fill="#F26522" fillOpacity="0.2" />
          </svg>
        </div>
      </div>
      
      {/* Bottom accent with animation */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-[#0077B5] opacity-50 animate-glow"></div>
    </div>
  );
}
