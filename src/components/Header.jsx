"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (e, id, extraOffset = 0) => {
    e.preventDefault();

    // Close menu if open
    setIsMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const baseOffset = 90; 
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        baseOffset +
        extraOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto z-50 bg-white relative">
      
      {/* --- TOP BAR (Restored for all screens) --- */}
      {/* CHANGED: Removed 'hidden sm:block'. Now uses 'flex-col' on mobile to stack items. */}
      <div className="bg-[#1e2246] text-white text-xs py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-6">
          
          {/* TIME */}
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2M12 22a10 10 0 100-20 10 10 0 000 20z"
              />
            </svg>
            <span>Working : Monday - Friday, 9:am - 5:pm</span>
          </div>

          {/* ADDRESS */}
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11a3 3 0 100-6 3 3 0 000 6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 11c0 7-7.5 11-7.5 11S4.5 18 4.5 11a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span>Odanavattam, Society Junction</span>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <header className="h-[80px] bg-white shadow-sm sticky top-0 z-40 relative">
        <div className="container mx-auto px-4 h-full flex justify-between items-center font-st">
          
          {/* LOGO */}
          <Link href="/" className="flex-shrink-0 z-50">
            <Image
              src="/logo(1).webp" 
              alt="SKN TEC"
              width={160}
              height={60}
              className="object-contain h-12 md:h-14 w-auto"
              priority
            />
          </Link>

          {/* DESKTOP NAVIGATION (Hidden on Mobile) */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
            <Link href="/" className="hover:text-blue-900 transition">
              Home
            </Link>
            <a href="#about" onClick={(e) => handleScroll(e, "about")} className="hover:text-blue-900 transition cursor-pointer">
              About Us
            </a>
            <a href="#Courses" onClick={(e) => handleScroll(e, "courses")} className="hover:text-blue-900 transition cursor-pointer">
              Courses
            </a>
            <a href="#blog" onClick={(e) => handleScroll(e, "blog")} className="hover:text-blue-900 transition cursor-pointer">
              Blog
            </a>
            <a href="#enroll" onClick={(e) => handleScroll(e, "enroll", -75)} className="hover:text-blue-900 transition cursor-pointer">
              Contact
            </a>
          </nav>

          {/* DESKTOP BUTTON (Hidden on Mobile) */}
          <div className="hidden md:block">
            <button
              onClick={(e) => handleScroll(e, "enroll", -75)}
              className="relative flex items-center bg-[#2ecf9f] hover:bg-[#25b98e] text-white font-semibold pl-8 pr-20 py-3 rounded-full shadow-lg transition-all hover:-translate-y-1"
              suppressHydrationWarning={true}
            >
              <span className="text-sm md:text-base">Contact Us</span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-[#34d399] rounded-full flex items-center justify-center text-white shadow-lg group-hover:bg-[#10b981] transition-all">
                →
              </span>
            </button>
          </div>

          {/* --- MOBILE HAMBURGER BUTTON --- */}
          <button 
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              // Close Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* --- MOBILE DROPDOWN MENU --- */}
        {/* CHANGED: Used 'absolute' and 'top-full' instead of 'fixed inset-0'. 
            This makes it a dropdown attached to the header, not a full page. */}
        {isMobileMenuOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-white shadow-xl border-t border-gray-100 z-50 flex flex-col p-6 space-y-4 md:hidden animate-in slide-in-from-top-2 duration-200">
            
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-medium hover:text-[#2ecf9f] py-2 border-b border-gray-100">
              Home
            </Link>
            <a href="#about" onClick={(e) => handleScroll(e, "about")} className="text-gray-700 font-medium hover:text-[#2ecf9f] py-2 border-b border-gray-100">
              About Us
            </a>
            <a href="#Courses" onClick={(e) => handleScroll(e, "courses")} className="text-gray-700 font-medium hover:text-[#2ecf9f] py-2 border-b border-gray-100">
              Courses
            </a>
            <a href="#blog" onClick={(e) => handleScroll(e, "blog")} className="text-gray-700 font-medium hover:text-[#2ecf9f] py-2 border-b border-gray-100">
              Blog
            </a>
            
            {/* Mobile Contact Button */}
            <button
              onClick={(e) => handleScroll(e, "enroll", -75)}
              className="bg-[#2ecf9f] text-white font-bold py-3 px-6 rounded-full shadow-md w-full mt-4"
            >
              Contact Us
            </button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;