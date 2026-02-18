"use client";

import Image from "next/image";
import { useState } from "react";

const Courses = () => {
  // 1. Base images
  const baseImages = [
    "/course-c.webp",
    "/course-java.webp",
    "/course-dsa.webp",
  ];

  // 2. Full Course List
  const courseTitles = [
    "C PROGRAMMING",
    "OOPS JAVA",
    "DATA STRUCTURE BASIC",
    "Programming in C",
    "Computational Thinking & Programming",
    "Python Programming",
    "Object Oriented Programming (Java)",
    "Data Structures & Algorithms",
    "Digital Logic & Computer Organization",
    "Microprocessors & Microcontrollers",
    "Operating Systems",
    "Database Management Systems",
    "Computer Networks",
    "Software Engineering",
    "Web Technologies",
    "Design & Analysis of Algorithms",
    "Compiler Design",
    "Theory of Computation",
    "AI & Machine Learning (Basics)",
    "Data Science",
    "Cloud Computing",
    "Cyber Security",
  ];

  // 3. Map to objects
  const allCourses = courseTitles.map((title, index) => ({
    id: index,
    title: title,
    image: baseImages[index % 3], // Cycle 3 images
    rating: "4.7",
    category: "Development",
  }));

  // 4. Pagination Settings
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(allCourses.length / itemsPerPage);

  // --- HANDLERS ---
  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Get current slice
  const currentCourses = allCourses.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  return (
    <section id="courses" className="w-full py-12 md:py-24 bg-white">
      {/* MAIN CONTAINER */}
      <div className="relative w-[95%] max-w-[1600px] mx-auto bg-[#f9f9f9] px-6 py-12 md:px-16 md:py-32 lg:px-32 mb-24 xl:mb-0 overflow-visible">
        {/* mb-24 on mobile ensures space for the bottom navigation */}

        {/* BACKGROUND IMAGE WRAPPER */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src="/course-bg.webp"
            alt="Background Pattern"
            fill
            className="object-cover opacity-50"
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10">
          <div className="mb-10 md:mb-12">
            <div className="flex items-center gap-4 text-[#10b981] text-xs md:text-sm tracking-widest mb-4 uppercase font-bold">
              <div className="relative w-3 h-3">
                <div className="absolute inset-0 border-[2px] border-[#ff5722] rotate-45"></div>
                <div className="absolute inset-0 translate-x-[10px] -translate-y-[0px] border-[2px] border-[#10b981] rotate-45"></div>
              </div>
              <span className="pl-2">Our Course</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e2246] font-poppins leading-tight">
              Courses We Teach
            </h2>
          </div>

          {/* GRID WRAPPER */}
          <div className="relative">
            {/* COURSES GRID */}
            <div
              key={currentPage}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-right-4 duration-500 min-h-[400px]"
            >
              {currentCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white p-4 shadow-sm hover:shadow-xl transition-shadow duration-300 
                             border border-gray-100"
                >
                  <div className="relative w-full h-[240px] md:h-[35vh] lg:h-[32vh] overflow-hidden mb-4 group rounded-xl">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#ff5722] text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wide shadow-md">
                      {course.category}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-6 md:mb-9">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-gray-400 text-xs font-medium ml-1">
                      ({course.rating})
                    </span>
                  </div>

                  <h3 className="text-[#1e2246] font-bold text-lg uppercase mb-2 line-clamp-2 min-h-[56px]">
                    {course.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* === CONTROLS CONTAINER === */}

            {/* 1. PREVIOUS BUTTON */}
            {/* Mobile: Bottom Left | Desktop: Center Left (Outside) */}
            <div
              className="absolute bottom-[-80px] left-[15%] -translate-x-1/2 
                            xl:top-1/2 xl:left-[-70px] xl:bottom-auto xl:-translate-y-1/2 
                            z-20"
            >
              <div className="relative w-14 h-14 xl:w-16 xl:h-16 cursor-pointer group">
                <div className="absolute top-1/2 left-5 -translate-y-1/2 w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-[#0d9488]" />
                <button
                  onClick={handlePrev}
                  className="absolute top-1/2 left-7 -translate-y-1/2
                             w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-[#14b8a6]
                             flex items-center justify-center text-white
                             shadow-lg transition-all group-hover:bg-[#0fb39a] active:scale-90"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* 2. NEXT BUTTON */}
            {/* Mobile: Bottom Right | Desktop: Center Right (Outside) */}
            <div
              className="absolute bottom-[-80px] right-[15%] translate-x-1/2 
                            xl:top-1/2 xl:right-[-50px] xl:left-auto xl:bottom-auto xl:-translate-y-1/2 
                            z-20"
            >
              <div className="relative w-14 h-14 xl:w-16 xl:h-16 cursor-pointer group">
                <div className="absolute top-1/2 left-5 -translate-y-1/2 w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-[#0d9488]" />
                <button
                  onClick={handleNext}
                  className="absolute top-1/2 left-7 -translate-y-1/2
                             w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-[#14b8a6]
                             flex items-center justify-center text-white
                             shadow-lg transition-all group-hover:bg-[#0fb39a] active:scale-90"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* 3. DOTS INDICATOR - CENTERED INDEPENDENTLY */}
            {/* Mobile: Bottom Center | Desktop: Bottom Center (Below Grid) */}
            <div className="absolute bottom-[-80px] xl:bottom-[-60px] left-1/2 -translate-x-1/2 flex gap-1 z-20 items-center justify-center h-14">
              {[...Array(totalPages)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentPage ? "w-4 bg-[#14b8a6]" : "w-1.5 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
