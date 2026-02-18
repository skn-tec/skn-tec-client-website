"use client";
import { useState, useRef } from "react";
import Image from "next/image";

const GalleryFaculty = () => {
  const [activeTab, setActiveTab] = useState("gallery");
  const scrollRef = useRef(null);

  // --- DATA: FACULTY (3 Teachers) ---
  const faculty = [
    {
      id: 1,
      name: "Anjitha M",
      dept: "Electrical and electronics",
      image: "/faculty-1.jpeg", // Replace with actual path
    },
    {
      id: 2,
      name: "Sukanya s s",
      dept: "Computer science and engineering",
      image: "/faculty-2.jpeg", // Replace with actual path
    },
    {
      id: 3,
      name: "Devika",
      dept: "Civil Engineering",
      image: "/faculty-3.jpeg", // Replace with actual path
    },
  ];

  // --- DATA: GALLERY (10-15 Placeholder Images) ---
  // Just creating an array of 12 items for demo
  const galleryImages = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    src: `/gallery-${i + 1}.jpeg`, // Ensure you have images named gallery-1.jpg etc. or replace logic
    alt: `Campus Moment ${i + 1}`,
  }));

  // Scroll Handler for Gallery
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 400; // Adjust scroll distance
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="w-full bg-[#f8fafc] py-16 md:py-28 relative overflow-hidden">
      
      {/* DECOR: BACKGROUND BLOBS */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="w-[95%] max-w-[1600px] mx-auto px-6 md:px-16 lg:px-32 relative z-10">
        
        {/* === HEADER & TABS === */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          
          {/* Left: Heading */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 text-[#10b981] text-xs md:text-sm tracking-widest uppercase font-bold mb-2">
              <div className="relative w-3 h-3">
                <div className="absolute inset-0 border-[2px] border-[#ff5722] rotate-45"></div>
                <div className="absolute inset-0 translate-x-[10px] border-[2px] border-[#10b981] rotate-45"></div>
              </div>
              <span className="pl-2">INSIDE SKN TEC</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2246] font-poppins">
              Life At Our Campus
            </h2>
          </div>

          {/* Right: Toggle Switch */}
          <div className="bg-white p-1.5 rounded-full shadow-md border border-gray-100 flex items-center">
            <button
              onClick={() => setActiveTab("gallery")}
              className={`
                px-8 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300
                ${activeTab === "gallery" 
                  ? "bg-[#1e2246] text-white shadow-lg" 
                  : "text-gray-500 hover:text-[#1e2246]"}
              `}
            >
              Gallery
            </button>
            <button
              onClick={() => setActiveTab("faculty")}
              className={`
                px-8 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300
                ${activeTab === "faculty" 
                  ? "bg-[#1e2246] text-white shadow-lg" 
                  : "text-gray-500 hover:text-[#1e2246]"}
              `}
            >
              Our Faculty
            </button>
          </div>
        </div>


        {/* === CONTENT AREA === */}
        <div className="min-h-[500px] transition-all duration-500 ease-in-out">
          
          {/* ---------------- GALLERY VIEW ---------------- */}
          {activeTab === "gallery" && (
            <div className="relative group animate-in fade-in zoom-in duration-300">
              
              {/* Scroll Buttons */}
              <button 
                onClick={() => scroll("left")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center text-[#1e2246] hover:bg-[#ff5722] hover:text-white transition-all hidden md:flex"
              >
                ←
              </button>
              <button 
                onClick={() => scroll("right")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center text-[#1e2246] hover:bg-[#ff5722] hover:text-white transition-all hidden md:flex"
              >
                →
              </button>

              {/* Scroll Container */}
              <div 
                ref={scrollRef}
                className="flex gap-4 md:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {galleryImages.map((img) => (
                  <div 
                    key={img.id}
                    className="
                      relative flex-shrink-0 
                      w-[280px] h-[350px] 
                      md:w-[350px] md:h-[450px] 
                      snap-center rounded-2xl overflow-hidden shadow-lg border-4 border-white
                      group/item cursor-pointer
                    "
                  >
                    <Image
                      src={img.src} // Ensure this path is valid
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/item:scale-110"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e2246]/80 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white font-bold translate-y-4 group-hover/item:translate-y-0 transition-transform duration-300">
                        Campus Highlight #{img.id}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Mobile Swipe Hint */}
              <div className="flex justify-center mt-4 gap-2 md:hidden">
                <span className="text-xs text-gray-400 font-medium uppercase tracking-widest">Swipe to explore</span>
              </div>
            </div>
          )}


          {/* ---------------- FACULTY VIEW ---------------- */}
          {activeTab === "faculty" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 animate-in fade-in zoom-in duration-300">
              {faculty.map((member) => (
                <div 
                  key={member.id}
                  className="bg-white rounded-[30px] p-6 text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative group"
                >
                  {/* Decorative Background Shape */}
                  <div className="absolute top-0 left-0 w-full h-32 bg-[#f0fdf4] rounded-t-[30px] z-0"></div>

                  {/* Image */}
                  <div className="relative w-40 h-40 mx-auto mb-6 z-10">
                    <div className="absolute inset-0 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-200">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Small Badge Icon */}
                    <div className="absolute bottom-0 right-0 w-10 h-10 bg-[#ff5722] rounded-full flex items-center justify-center text-white border-4 border-white shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold text-[#1e2246] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#10b981] font-bold text-xs uppercase tracking-wider mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-500 text-sm font-medium border-t border-gray-100 pt-3 inline-block w-full">
                      {member.dept}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default GalleryFaculty;