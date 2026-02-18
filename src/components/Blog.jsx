import Image from "next/image";

const Stats = () => {
  const services = [
    "Computer Science Tuition",
    "Diploma (All CS Subjects)",
    "BTech (CS & IT Subjects)",
    "School Tuition",
    "Maths, Physics, CS",
    "Special Classes",
    "Arrear Classes",
    "Exam-oriented coaching",
    "Crash courses",
  ];

  return (
    <section
      id="blog"
      className="w-full bg-white py-12 md:py-32 overflow-hidden"
    >
      {/* CONTAINER */}
      <div
        className="w-[95%] max-w-[1600px] mx-auto 
                   px-6 md:px-16 lg:px-32 
                   grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* === LEFT COLUMN: CONTENT === */}
        <div className="space-y-8 lg:space-y-10 px-0 md:px-4 relative">
          {/* Header */}
          <div className="relative space-y-4">
            <div className="flex items-center gap-4 text-[#10b981] text-xs md:text-sm tracking-widest uppercase font-semibold">
              <div className="relative w-3 h-3">
                <div className="absolute inset-0 border-[2px] border-[#ff5722] rotate-45"></div>
                <div className="absolute inset-0 translate-x-[10px] border-[2px] border-[#10b981] rotate-45"></div>
              </div>
              <span>Our Programs</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1e2246] relative z-10 font-poppins max-w-3xl">
              <span className="block">
                Expert Tuition &{" "}
                <span className="text-[#ff5722]">Specialized Coaching</span>
              </span>
            </h2>

            {/* --- DOTS DECOR 1 --- */}
            <div className="absolute bottom-10 left-40 hidden md:block -z-10 opacity-60">
              <Image
                src="/dots-grid.webp"
                alt="Dots Decoration"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg">
              Comprehensive learning for School, Diploma & Engineering students
              with a focus on concept clarity.
            </p>
          </div>

          {/* === NEW ATTRACTIVE COURSE LIST === */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 relative z-10">
            {services.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 p-3 md:p-4 
                           bg-white border border-gray-100 rounded-xl shadow-sm 
                           hover:shadow-md hover:border-[#10b981]/30 hover:-translate-y-1 
                           transition-all duration-300 cursor-default"
              >
                {/* Icon Box */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-[#10b981]/10 
                                flex items-center justify-center 
                                group-hover:bg-[#10b981] transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-[#10b981] group-hover:text-white transition-colors duration-300"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>

                {/* Text */}
                <span className="font-bold text-[#1e2246] text-sm md:text-[15px] leading-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* HAT DECOR (Bottom Left) */}
          <div className="absolute -bottom-10 -left-10 hidden xl:block pointer-events-none opacity-90">
            <Image
              src="/hat.webp"
              alt="Graduation Hat"
              width={140}
              height={140}
              className="object-contain"
            />
          </div>
        </div>

        {/* === RIGHT COLUMN: IMAGES === */}
        <div className="relative h-[400px] md:h-[600px] lg:h-[750px] w-full mt-8 lg:mt-0 order-1 lg:order-2">
          {/* 1. ORANGE DECOR */}
          <div className="absolute right-0 top-0 md:top-12 w-[45%] md:w-[35%] h-[90%] z-0 rounded-tr-[60px] md:rounded-tr-[80px] overflow-hidden">
            <Image
              src="/stats-decor.webp"
              alt="Background Decoration"
              fill
              className="object-fill"
            />
          </div>

          {/* 2. Main Image */}
          <div
            className="absolute left-0 md:left-12 top-[5%] md:top-[12%] w-[90%] md:w-[85%] h-[85%] md:h-[75%] 
                          bg-white shadow-2xl z-10 rounded-tr-[60px] md:rounded-tr-[80px] rounded-bl-[20px] overflow-hidden 
                          hover:scale-[1.01] transition-transform duration-500"
          >
            <Image
              src="/classroom-group.webp"
              alt="Classroom Coaching"
              fill
              className="object-cover"
            />
          </div>

          {/* --- DOTS DECOR 2 --- */}
          <div className="absolute bottom-8 left-8 z-20 hidden md:block">
            <Image
              src="/dots-grid.webp"
              alt="Dots Decoration"
              width={120}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
