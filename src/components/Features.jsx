"use client";
import Image from "next/image";
import { useState } from "react";

const Features = () => {
  const [flippedId, setFlippedId] = useState(null);

  const handleFlip = (id) => {
    setFlippedId(flippedId === id ? null : id);
  };
  const features = [
    {
      id: 1,
      title: "Exclusive CS Focus",
      description: "We specialize exclusively in coaching for Diploma and B Tech Computer Science subjects with module-wise depth.",
      details: ["B.Tech Tuition", "Diploma Support", "Project Guidance"],
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 perspective-1000">
          {features.map((item) => (
            <div 
              key={item.id} 
              className="relative h-[350px] w-full cursor-pointer group"
              onClick={() => handleFlip(item.id)}
            >
              {/* INNER WRAPPER: Handles the rotation */}
              <div className={`relative w-full h-full transition-all duration-500 preserve-3d ${flippedId === item.id ? 'rotate-y-180' : ''}`}>
                
                {/* FRONT SIDE */}
                <div className="absolute inset-0 backface-hidden bg-white p-8 text-center shadow-md border border-gray-100 flex flex-col justify-center items-center rounded-xl">
                  {/* ICON CIRCLE */}
                  <div className="w-20 h-20 mb-6 relative">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#10b981] animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-2 bg-[#10b981] rounded-full flex items-center justify-center shadow-lg">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e2246]">{item.title}</h3>
                  <p className="mt-4 text-[#10b981] text-xs font-bold tracking-widest uppercase">View More</p>
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#1e2246] p-8 text-center shadow-2xl flex flex-col justify-center items-center rounded-xl border-t-4 border-[#10b981]">
                  <h3 className="text-lg font-bold text-white mb-4 underline decoration-[#10b981] underline-offset-8">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  
                  <div className="text-left w-full space-y-2">
                    {item.details?.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#34d399]">
                         <span className="w-1.5 h-1.5 bg-[#34d399] rounded-full"></span>
                         {detail}
                      </div>
                    ))}
                  </div>

                  <button className="mt-6 text-white text-xs border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-[#1e2246] transition-colors">
                    Flip Back
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Features;