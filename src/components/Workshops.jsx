"use client"; // 1. Required for onClick events
import Image from "next/image";
// Link is no longer needed for this specific button

const Workshops = () => {

  // 2. Function to handle smooth scrolling without changing URL
  const scrollToEnroll = () => {
    const section = document.getElementById("enroll");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="w-full bg-white py-12 md:py-32 overflow-hidden relative">
      
      {/* DECOR: Top Left Red Curve (Hidden on mobile) */}
      <div className="absolute top-30 left-20 w-3 h-3 md:w-8 md:h-8 hidden lg:block">
        <Image
          src="/decor-curve-red.webp"
          alt="Decor"
          fill
          className="object-contain"
        />
      </div>

      {/* DECOR: Top Right Teal Star (Hidden on mobile) */}
      <div className="absolute top-30 right-20 w-7 h-7 md:w-11 md:h-11 hidden lg:block">
        <Image
          src="/decor-star-teal.webp"
          alt="Decor"
          fill
          className="object-contain"
        />
      </div>

      {/* CONTAINER */}
      <div className="w-[95%] max-w-[1600px] mx-auto px-6 md:px-16 lg:px-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* === LEFT COLUMN: TEXT CONTENT === */}
        <div className="space-y-8 relative">
          
          {/* ARROW DECOR (Hidden on mobile) */}
          <div className="hidden lg:block relative top-9 left-80 w-50 h-15 mb-4 overflow-visible">
            <Image
              src="/arrow-zigzag.webp"
              alt="Arrow Decor"
              fill
              className="object-contain object-left scale-y-125"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-[#10b981] text-xs md:text-sm tracking-widest uppercase">
              <div className="relative w-3 h-3">
                <div className="absolute inset-0 border-[2px] border-[#ff5722] rotate-45"></div>
                <div className="absolute inset-0 translate-x-[10px] border-[2px] border-[#10b981] rotate-45"></div>
              </div>
              <span className="px-2 md:px-4">ENHANCE YOUR SKILLS</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1e2246] leading-tight lg:whitespace-nowrap font-poppins">
              Our Specialized CS Workshops
            </h2>
          </div>

          <div className="space-y-6 text-gray-500 text-sm md:text-base leading-relaxed">
            <p className="font-semibold text-[#0e2a46]">
              We regularly host specialized workshops designed to tackle the
              toughest areas of the Computer Science curriculum for Diploma and
              B Tech students.
            </p>
            <p className="font-['Sora'] font-normal text-[#6b7280] text-[14px] md:text-[15px] leading-[24px]">
              These intensive sessions focus on practical application, complex programming 
              concepts, and last-minute exam strategies. It's the perfect opportunity to 
              clarify doubts, master difficult subjects, and gain confidence before your 
              regular or supply exams.
            </p>
          </div>

          <div className="pt-4">
            {/* 3. Replaced Link with onClick handler */}
            <button 
              onClick={scrollToEnroll}
              className="relative flex items-center bg-[#2ecf9f] hover:bg-[#25b98e] text-white font-semibold pl-8 pr-20 py-4 rounded-full shadow-lg transition-all hover:-translate-y-1"
            >
              <span className="text-lg">Contact Now</span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#43e0b4] rounded-full flex items-center justify-center text-2xl">
                →
              </span>
            </button>
          </div>
        </div>

        {/* === RIGHT COLUMN: IMAGE COMPOSITION === */}
        <div className="relative h-[350px] md:h-[500px] lg:h-[600px] w-full mt-8 lg:mt-0">
          <div className="lg:hidden absolute inset-0 z-0 
                          translate-x-4 translate-y-4 
                          bg-[#ff5722] 
                          rounded-tr-[100px] rounded-bl-[100px]">
          </div>
          <div className="hidden lg:block absolute 
                          bottom-[-80px] right-[-8px] 
                          w-[40%] h-[60%] z-0">
            <Image
              src="/orange-curve.webp"
              alt="Orange Decorative Shape"
              fill
              className="object-contain"
            />
          </div>

          {/* MAIN IMAGE SHAPE */}
          <div className="absolute inset-0 z-10 
                          rounded-tr-[100px] rounded-bl-[100px] 
                          lg:rounded-tr-[300px] lg:rounded-bl-[400px] 
                          overflow-hidden bg-gray-100">
            <Image
              src="/workshop-classroom.webp"
              alt="CS Workshop"
              fill
              className="object-cover"
            />
          </div>

          {/* LOGO BADGE (Hidden on mobile) */}
          <div className="hidden lg:block absolute z-20
                          lg:w-108 lg:h-108 lg:-bottom-43 lg:left-1/2 lg:-translate-x-[125%]">
            <Image
              src="/skn-tec-logo.webp"
              alt="SKN TEC Logo"
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Workshops;