import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-10 pb-0 m-0">
      {/* BOXED CONTAINER */}
      <div className="relative w-[95%] max-w-[1600px] mx-auto overflow-hidden text-white shadow-2xl">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/footer-bg.webp"
            alt="Footer Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10">
          {/* === TOP INFO BAR === */}{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-700/50">
            {" "}
            {/* Item 1: Address */}{" "}
            <div className="flex items-center gap-4 p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-700/50">
              {" "}
              <div className="w-12 h-12 rounded-full bg-[#2d2d2d] flex items-center justify-center flex-shrink-0">
                {" "}
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />{" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />{" "}
                </svg>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="text-[#10b981] text-xs font-bold uppercase tracking-wider mb-1">
                  Address:
                </p>{" "}
                <p className="text-sm font-medium text-gray-300 leading-snug">
                  {" "}
                  Odanavattam, Society <br /> Junction{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* Item 2: Phone */}{" "}
            <div className="flex items-center gap-4 p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-700/50">
              {" "}
              <div className="w-12 h-12 rounded-full bg-[#2d2d2d] flex items-center justify-center flex-shrink-0">
                {" "}
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />{" "}
                </svg>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="text-[#10b981] text-xs font-bold uppercase tracking-wider mb-1">
                  Phone:
                </p>{" "}
                <p className="text-sm font-medium text-gray-300 leading-snug">
                  {" "}
                  9895641783, <br /> 9400278298{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* Item 3: Email */}{" "}
            <div className="flex items-center gap-4 p-8 md:p-10">
              {" "}
              <div className="w-12 h-12 rounded-full bg-[#2d2d2d] flex items-center justify-center flex-shrink-0">
                {" "}
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />{" "}
                </svg>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="text-[#10b981] text-xs font-bold uppercase tracking-wider mb-1">
                  Email:
                </p>{" "}
                <p className="text-sm font-medium text-gray-300">
                  {" "}
                  skntutions@email.com{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          {/* MAIN FOOTER CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-8 py-12 md:px-16">
            {/* LOGO */}
            <div className="space-y-6">
              <div className="relative w-32 h-32">
                <Image
                  src="/skn-tec-logo.webp"
                  alt="SKN Tutions"
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-gray-400 text-sm max-w-sm">
                High-quality CS coaching for Diploma and B.Tech students.
              </p>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="text-lg font-bold mb-6">Our Services</h3>
              <ul className="space-y-4">
                {[
                  "Diploma Coaching",
                  "B.Tech Coaching",
                  "Supply Exam Preparation",
                ].map((item, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-center">
                    <span className="text-[#10b981] mr-2">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* SUBSCRIBE */}
            <div>
              <h3 className="text-lg font-bold mb-6">Subscribe</h3>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-sm text-gray-800 outline-none bg-white"
              />
              <button className="mt-4 bg-[#34d399] hover:bg-[#10b981] text-white font-bold py-3 px-6 text-sm">
                Get Updates
              </button>
            </div>
          </div>
          {/* COPYRIGHT */}
          <div className="border-t border-gray-700/50 bg-black/30 py-6 text-center">
            <p className="text-gray-400 text-sm">
              Copyright © 2025 <span className="text-[#10b981]">SKN TEC</span>.
              All Rights Reserved | Created with ♥️ by{" "}
              <Link
                href="https://www.orqueinnovations.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#10b981] underline underline-offset-4 transition-colors"
              >
                Orque
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
