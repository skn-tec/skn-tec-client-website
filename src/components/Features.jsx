import Image from "next/image";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Exclusive CS Focus",
      description: "We specialize exclusively in coaching for Diploma and B Tech Computer Science subjects.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Regular & Supply Classes",
      description: "Dedicated classes for regular semester subjects and crucial supply/re-appear exam preparation.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Expert Faculty",
      description: "Learn from highly experienced tutors who know the CS syllabus and ensure you grasp every core concept.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Flexible Timing",
      description: "Study without stress. Choose from multiple batch timings to fit your college schedule and routine.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white">
      
      {/* BOXED CONTAINER (Matches Courses & Stats Width) */}
      <div className="relative w-[95%] max-w-[1600px] mx-auto  overflow-hidden bg-[#f8fcfc] 
                      px-8 py-20 md:px-16 md:py-32 lg:px-32">
        
        {/* 1. BACKGROUND IMAGE (Doodles) */}
        <div className="absolute inset-0 z-0  pointer-events-none">
          <Image
            src="/features-bg.webp" // Ensure this image is in public/
            alt="Background Pattern"
            fill
            className="object-cover"
          />
        </div>

        {/* 2. CONTENT */}
        <div className="relative z-10">
          
          {/* HEADER SECTION (Centered) */}
          <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
             <div className="flex items-center justify-center gap-4 text-[#10b981] text-sm tracking-widest uppercase">
                {/* Left Diamond */}
                <div className="relative w-3 h-3">
                  <div className="absolute inset-0 border-[2px] border-[#ff5722] rotate-45"></div>
                  <div className="absolute inset-0 translate-x-[10px] border-[2px] border-[#10b981] rotate-45"></div>
                </div>
                <span className="px-4">FEATURES WE PROVIDE</span>
                {/* Right Diamond */}
                <div className="relative w-3 h-3">
                  <div className="absolute inset-0 border-[2px] border-[#10b981] rotate-45"></div>
                  <div className="absolute inset-0 -translate-x-[10px] border-[2px] border-[#ff5722] rotate-45"></div>
                </div>
             </div>

             <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1e2246] leading-tight font-poppins">
               Your Pathway To Success In <br className="hidden md:block"/> Computer Science
             </h2>
          </div>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {features.map((item) => (
              <div 
  key={item.id} 
  className="bg-white p-8 text-center shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group
             flex flex-col h-full"
>
                
                {/* ICON CIRCLE */}
                <div className="w-20 h-20 mx-auto mb-6 relative">
                  {/* Dashed Border Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#10b981] animate-[spin_10s_linear_infinite]"></div>
                  {/* Solid Inner Circle */}
                  <div className="absolute inset-2 bg-[#10b981] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>

                {/* TEXT CONTENT */}
                <div className="flex-1">
  <h3 className="text-xl font-bold text-[#1e2246] mb-4">
    {item.title}
  </h3>

  <p className="text-gray-500 text-sm leading-relaxed">
    {item.description}
  </p>
</div>

                {/* BUTTON */}
                <button className="mt-8 bg-[#34d399] hover:bg-[#10b981] text-white text-sm font-bold py-3 px-8 rounded-full shadow-lg transition-all 
                   flex items-center justify-center gap-2 mx-auto transform group-hover:-translate-y-1">
  View Details
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
</button>


              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;