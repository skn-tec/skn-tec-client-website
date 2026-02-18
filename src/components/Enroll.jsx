"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const Enroll = () => {
  // === SLIDE BUTTON STATE ===
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const [isCalled, setIsCalled] = useState(false);
  
  const containerRef = useRef(null);
  const maxDrag = 220; // The slide distance

  // 1. START DRAGGING
  const handlePointerDown = (e) => {
    setIsDragging(true);
    e.preventDefault(); 
  };

  // 2. WHILE DRAGGING
  const handlePointerMove = (e) => {
    if (!isDragging || isCalled) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let clientX = e.clientX || (e.touches && e.touches[0].clientX);
    
    // Calculate position (minus padding/offset)
    let newX = clientX - containerRect.left - 4; 

    if (newX < 0) newX = 0;
    if (newX > maxDrag) newX = maxDrag;

    setPosition(newX);
  };

  // 3. END DRAGGING (TRIGGER CALL)
  const handlePointerUp = () => {
    if (isCalled) return;
    setIsDragging(false);

    // If slid more than 90% of the way
    if (position > maxDrag * 0.9) {
      setPosition(maxDrag);
      setIsCalled(true);
      
      // === TRIGGER THE CALL HERE ===
      window.location.href = "tel:9400278298"; 

      // Reset button after 3 seconds so they can slide again if needed
      setTimeout(() => {
        setIsCalled(false);
        setPosition(0);
      }, 3000);
    } else {
      // Snap back if not fully slid
      setPosition(0);
    }
  };

  // Global event listeners to handle dragging outside the button box
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
      // For mobile touch specific
      window.addEventListener("touchmove", handlePointerMove);
      window.addEventListener("touchend", handlePointerUp);
    } else {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);
    }
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);
    };
  }, [isDragging, position]); // eslint-disable-line

  return (
    <section id="enroll" className="w-full bg-white">
      {/* BOXED CONTAINER */}
      <div className="relative w-[95%] max-w-[1600px] mx-auto h-[350px] md:h-[450px] overflow-hidden shadow-2xl">
        
        {/* BACKGROUNDS */}
        <div className="absolute inset-0 z-0">
          <Image src="/enroll-bg.webp" alt="Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0E2A46] opacity-90"></div>
        </div>
        <div className="absolute top-8 left-8 w-6 h-6 md:w-9 md:h-9 z-10 opacity-80">
          <Image src="/decor-c-cyan.webp" alt="Decor" fill className="object-contain" />
        </div>
        <div className="absolute top-0 right-5 md:-top-22 md:right-0 w-45 h-75 z-10 hidden md:block">
          <Image src="/decor-scribble-white.webp" alt="Scribble" fill className="object-contain" />
        </div>
        <div className="absolute bottom-0 right-0 w-30 h-16 z-10 hidden md:block">
           <Image src="/decor-waves.webp" alt="Waves" fill className="object-contain object-bottom-right" />
        </div>
        <div className="absolute top-1/2 right-[15%] transform -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 z-20 hidden lg:block cursor-pointer hover:scale-110 transition-transform">
           <div className="relative w-full h-full">
             <Image src="/icon-play.webp" alt="Play Video" fill className="object-contain drop-shadow-lg" />
           </div>
        </div>

        {/* === MAIN CONTENT === */}
        <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
           <h4 className="text-[#ff5722] font-bold text-lg md:text-xl mb-2 tracking-wide">Join Now</h4>
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">Call To Enroll</h2>

           <div className="relative inline-block mb-8">
             <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide">
               9895641783, 9400278298
             </h3>
             <div className="absolute -bottom-8 right-160 w-10 h-10 md:w-12 md:h-12 animate-pulse">
                <Image src="/icon-spark.webp" alt="Spark" fill className="object-contain" />
             </div>
           </div>

           {/* === SLIDER BUTTON === */}
           <div 
             ref={containerRef}
             className={`
               relative w-[280px] h-16 rounded-full shadow-lg overflow-hidden select-none 
               transition-colors duration-300
               ${isCalled ? "bg-green-600" : "bg-[#2ecf9f] hover:bg-[#25b98e]"}
             `}
           >
             {/* Text Label */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
               <span className={`text-lg font-bold text-white tracking-wide transition-opacity duration-200 ${isDragging ? 'opacity-40' : 'opacity-100'}`}>
                 {isCalled ? "Calling..." : "Slide to Call"}
               </span>
             </div>

             {/* Slider Knob */}
             <div
               onPointerDown={handlePointerDown}
               style={{ transform: `translateX(${position}px)` }}
               className={`
                 absolute top-1 left-1 bottom-1 w-14 h-14 
                 bg-white rounded-full 
                 flex items-center justify-center 
                 shadow-md z-10 cursor-grab active:cursor-grabbing touch-none
                 ${!isDragging && "transition-transform duration-300 ease-out"}
               `}
             >
                {/* Arrow / Phone Icon */}
                <span className="text-[#2ecf9f] text-xl font-bold">
                   {isCalled ? "📞" : "→"}
                </span>
             </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Enroll;