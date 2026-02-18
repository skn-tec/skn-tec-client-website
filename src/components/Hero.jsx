import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full bg-white py-2 md:py-4 mb-10 md:mb-20">
      {/* MAIN CONTAINER */}
      <div
        className="relative w-[95%] mx-auto min-h-auto lg:min-h-[66vh] lg:h-[88vh] 
                   overflow-hidden lg:overflow-visible 
                   bg-gradient-to-r from-[#ffe9ee] via-[#faf6ec] to-[#def7f7] 
                   flex flex-col lg:block py-12 lg:py-0"
      >
        
        {/* === CONTENT GRID (Text) === */}
        <div className="container mx-auto px-6 lg:pl-48 h-full flex items-center lg:items-center 
                        relative z-30 lg:pointer-events-none 
                        lg:-translate-y-10">

          <div className="max-w-lg lg:max-w-xl pointer-events-auto space-y-4 md:space-y-3">

            {/* LOGO */}
            <div className="mb-1 lg:-ml-18 w-40 md:w-auto">
              <Image
                src="/skn-tec-logo.webp"
                alt="SKN TEC"
                width={300}
                height={300}
                className="object-contain drop-shadow-md"
              />
            </div>

            {/* BADGE */}
            <div className="inline-block bg-[#dcfce7] text-[#166534] text-[10px] md:text-[11px] font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-md shadow-sm font-sora">
              Exclusive Tuition for CS Students – Diploma & B.Tech (Regular + Supply)
            </div>

            {/* HEADLINE */}
            <h1
              className="
                font-epilogue
                text-3xl md:text-4xl lg:text-5xl
                font-semibold
                text-[#17254E]
                leading-[1.1] lg:leading-[1.05]
                break-words
              "
            >
              Enroll Now And <br className="hidden lg:block"/>
              Clear Your Subjects <br className="hidden lg:block"/>
              With Confidence.
            </h1>

            <p className="text-gray-600 text-sm md:text-lg font-medium">
              100% Result-Focused
            </p>

            {/* CTA */}
            <div className="pt-2">
              <p className="text-[#ef4444] font-bold text-lg md:text-2xl leading-snug font-poppins">
                Start Your Second Chance Today <br className="hidden lg:block"/> And Clear Your Papers Confidently.
              </p>
            </div>
            
            {/* Mobile-Only 'Join Now' Button */}
            <div className="pt-4 lg:hidden">
              <button className="bg-[#17254E] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#ff5722] transition-colors">
                Join Now
              </button>
            </div>
            
          </div>
        </div>


        {/* =========================================================
            DESKTOP DECORATIONS
           ========================================================= */}
        <div className="hidden lg:block">
            {/* RED DOTS */}
            <div className="absolute top-[15%] right-[11%] w-4 h-4 bg-[#ef4444] rounded-full z-40"></div>
            <div className="absolute top-[40%] right-[48%] w-3 h-3 bg-[#ef4444] rounded-full z-40"></div>

            {/* TEAL DOT */}
            <div className="absolute bottom-[18.5%] left-[83%] w-3 h-3 bg-teal-400 rounded-full z-40"></div>

            {/* BLUE SHAPE (BOY) */}
            <div className="absolute left-[70%] top-[15%] w-[16vw] h-[65%] rounded-[250px] border-[1px] border-[#ff5722] z-10"></div>
            <div className="absolute left-[71%] top-[15%] w-[16vw] h-[65%] bg-[#0056b3] rounded-[250px] overflow-hidden shadow-2xl z-20">
              <Image src="/student_1.webp" alt="Student Boy" fill className="object-cover object-top" />
            </div>

            {/* WHITE FLOATING BOX */}
            <div className="absolute left-[80%] top-[62%] w-[10.5vw] h-[12vh] bg-white rounded-[80px] shadow-xl z-10"></div>

            {/* PURPLE SHAPE (GIRL) */}
            <div className="absolute left-[54%] top-[45%] w-[13vw] h-[52%] rounded-[250px] border-[1px] border-[#ff5722] z-10"></div>
            <div className="absolute left-[55%] top-[45%] w-[13vw] h-[52%] bg-[#d8b4fe] rounded-[100px] overflow-hidden shadow-2xl z-20">
              {/* FIXED: Changed object-center to object-top to prevent head cropping on wide/short screens */}
              <Image src="/student_2.webp" alt="Student Girl" fill className="object-cover object-top" />
            </div>

            {/* 500+ badge */}
            <div className="absolute left-[59%] top-[28%] bg-white p-1.5 pr-3 md:p-2 md:pr-4 rounded-full shadow-xl flex items-center gap-2 md:gap-4 z-50 animate-bounce">
              <div className="pl-2">
                <p className="text-[#1e2246] font-extrabold text-sm md:text-lg leading-none">500+</p>
                <p className="text-gray-500 text-[10px] md:text-xs font-bold leading-none mt-0.5">Student</p>
              </div>
              <div className="relative w-[80px] h-8 md:w-[110px] md:h-10">
                <Image src="/student_group.webp" alt="Group" fill className="object-contain" />
              </div>
            </div>
        </div>


        {/* =========================================================
            MOBILE/TABLET DECORATIONS
           ========================================================= */}
        <div className="lg:hidden mt-8 px-6 relative w-full flex flex-col gap-6">
           
           {/* Mobile Badge */}
           <div className="bg-white p-2 rounded-full shadow-lg flex items-center justify-between max-w-[280px] mx-auto z-30 mb-4">
              <div className="pl-4">
                 <p className="text-[#1e2246] font-extrabold text-xl leading-none">500+</p>
                 <p className="text-gray-500 text-xs font-bold mt-1">Students</p>
              </div>
              <div className="relative w-24 h-10">
                 <Image src="/student_group.webp" alt="Group" fill className="object-contain" />
              </div>
           </div>

           {/* Mobile Image Grid */}
           {/* FIXED: Increased height to md:h-[500px] for tablets so images have vertical room */}
           <div className="grid grid-cols-2 gap-4 h-[300px] md:h-[500px]">
              {/* Girl Image Mobile */}
              <div className="relative w-full h-full bg-[#d8b4fe] rounded-t-[100px] rounded-b-[40px] overflow-hidden shadow-lg ">
                 {/* FIXED: Changed object-center to object-top to keep head visible */}
                 <Image src="/student_2.webp" alt="Student Girl" fill className="object-cover object-top" />
              </div>

              {/* Boy Image Mobile */}
              <div className="relative w-full h-full bg-[#0056b3] rounded-t-[40px] rounded-b-[100px] overflow-hidden shadow-lg  mt-8">
                 <Image src="/student_1.webp" alt="Student Boy" fill className="object-cover object-top" />
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;