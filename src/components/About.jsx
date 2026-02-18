import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-white py-12 md:py-20 lg:py-32 relative overflow-hidden"
    >
      {/* DECORATIVE BACKGROUND ELEMENTS (Hidden on mobile to save space) */}
      <div className="absolute top-40 left-29 w-16 h-16 hidden lg:block">
        <Image
          src="/about-decor.webp"
          alt="Decorative Shape"
          fill
          className="object-contain"
        />
      </div>

      {/* MAIN GRID: Stacks on mobile (grid-cols-1), Side-by-side on desktop (lg:grid-cols-2) */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* === LEFT COLUMN: IMAGES COMPOSITION === */}
        {/* Height adjusted: h-[400px] on mobile, h-[600px] on desktop */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full mx-auto max-w-[500px] lg:max-w-none">
          
          {/* 1. Main Tall Image (Student) */}
          <div className="absolute left-0 top-[10%] lg:top-[20%] w-[45%] lg:w-[40%] h-[80%] lg:h-[75%] rounded-[20px] lg:rounded-[30px] overflow-hidden shadow-xl z-10">
            <Image
              src="/about-student-1.webp"
              alt="Successful Student"
              fill
              className="object-cover"
            />
          </div>

          {/* 2. Experience Badge */}
          {/* Adjusted size/position for mobile */}

          {/* 3. Secondary Image (Classroom/Logo) */}
          <div className="absolute bottom-0 right-4 lg:right-[10%] w-[45%] lg:w-[40%] h-[55%] lg:h-[61%] rounded-[20px] lg:rounded-[30px] overflow-hidden shadow-2xl z-20 ">
            <Image
              src="/about-student-2.webp"
              alt="Student Boy"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* === RIGHT COLUMN: TEXT CONTENT === */}
        <div className="space-y-6 text-center lg:text-left">
          
          {/* Label */}
          <div className="flex items-center justify-center lg:justify-start gap-4 text-[#ff5722] tracking-wider text-sm font-bold">
            {/* DECORATIVE DOUBLE DIAMOND */}
            <div className="relative w-3 h-3">
              <div className="absolute inset-0 border-[2px] border-[#ff5722] rotate-45"></div>
              <div className="absolute inset-0 translate-x-[10px] -translate-y-[0px] border-[2px] border-[#10b981] rotate-45"></div>
            </div>
            <span className="pl-2">ABOUT US</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-extrabold text-[#1e2246] leading-tight font-poppins">
            <span className="block">
              SKN TEC Is Dedicated To Helping
              <br className="hidden lg:block" /> Computer Science Students
            </span>
            <span className="block text-[#ff5722] mt-1">(Diploma &amp; B.Tech)</span>
          </h2>

          {/* Subtext */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed px-4 lg:px-0">
            Clear both Regular and Supply exams with strong conceptual learning
            and personalized mentoring.
          </p>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-4 text-left">
            <div className="bg-gray-50 p-4 rounded-lg lg:bg-transparent lg:p-0">
              <h4 className="text-[#1e2246] font-bold text-lg mb-2 flex items-center gap-2">
                 OUR MISSION:
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                To guide CS students to clear their Regular & Supply papers with
                confidence through structured learning and continuous
                assessment.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg lg:bg-transparent lg:p-0">
              <h4 className="text-[#1e2246] font-bold text-lg mb-2 flex items-center gap-2">
                OUR VISION:
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                To be the most trusted CS tuition center that transforms
                academic challenges into success.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="pt-6 flex justify-center lg:justify-start">
            <Link
              href="/#enroll"
              className="
                relative flex items-center
                bg-[#34d399] hover:bg-[#10b981]
                text-white font-semibold
                pl-8 pr-20 py-4
                rounded-full
                shadow-lg
                transition-all
                hover:-translate-y-1
              "
            >
              <span className="text-lg">Admission Open</span>

              {/* Arrow Circle */}
              <span
                className="
                  absolute right-0 top-1/2 -translate-y-1/2
                  w-14 h-14
                  bg-[#43e0b4]
                  rounded-full
                  flex items-center justify-center
                  text-2xl
                  shadow-md
                "
                aria-hidden
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;