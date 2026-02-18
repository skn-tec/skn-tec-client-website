import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* === ORANGE BANNER === */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[95%] bg-[#ff5722] py-3 z-50 overflow-hidden flex items-center">
        <div className="flex items-center gap-12 marquee-horizontal whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 text-white font-medium text-lg md:text-xl uppercase tracking-wider"
            >
              <span>online school</span>

              <div className="relative w-6 h-6">
                <Image
                  src="/decor-star-2.webp"
                  alt="Star"
                  fill
                  className="object-contain animate-[spin_6s_linear_infinite]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BACKGROUND DOODLE IMAGE */}
      {/* Width is w-[95%], so the banner above now matches this width */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none w-[95%]">
        <Image
          src="/blue-doodle-bg.webp"
          alt="Blue Pattern"
          fill
          className="object-cover"
        />
      </div>

      {/* TOP RIGHT DECOR (IMAGE) */}
      <div className="absolute top-20 right-20 w-14 h-14 z-10 hidden md:block">
        <Image
          src="/decor-star-teal.webp"
          alt="Star Decoration"
          fill
          className="object-contain"
        />
      </div>

      {/* BOTTOM RIGHT CURVE (IMAGE) */}
      <div className="absolute top-65 right-[-10px] w-175 h-250 hidden lg:block z-10">
        <Image
          src="/decor-curve.webp"
          alt="Curve Decoration"
          fill
          className="object-contain"
        />
      </div>

      {/* BOTTOM LEFT SCRIBBLE (IMAGE) */}
      <div className="absolute top-127 left-10 w-70 h-54 hidden md:block z-30 pointer-events-none">
        <Image
          src="/decor-scribble-white.webp"
          alt="Scribble Decoration"
          fill
          className="object-contain"
        />
      </div>

      {/* MAIN CONTENT */}
      <div
        className="relative z-20 w-[95%] max-w-[1600px] mx-auto 
                      px-8 md:px-16 lg:px-32 
                      flex flex-col lg:flex-row items-center justify-center"
      >
        {/* LEFT IMAGE */}
        <div className="relative w-full lg:w-[65%] h-[400px] md:h-[500px] lg:h-[600px]">
          <div className="w-full h-full relative rounded-tr-[100px] rounded-br-[100px] overflow-hidden shadow-2xl">
            <Image
              src="/classroom-large.webp"
              alt="Students studying"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT REVIEW CARD */}
        <div className="relative w-full lg:w-[65%] mt-8 lg:mt-0 lg:-ml-4 z-30">
          {/* GREEN TRIANGLE DECOR (IMAGE) */}
          <div
            className="absolute -bottom-8 -right-[-40px]
 w-60 h-60 z-0 hidden md:block"
          >
            <Image
              src="/decor-triangle.webp"
              alt="Triangle Decoration"
              fill
              className="object-contain"
            />
          </div>

          {/* REVIEW CARD */}
          <div className="relative w-full lg:w-[95%] mt-8 lg:mt-0 lg:-ml-28 z-30">
            {/* CARD BACKGROUND IMAGE */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/testimonial-card-bg.webp"
                alt="Card Background"
                fill
                className="object-cover"
              />
            </div>

            {/* CARD CONTENT */}
            <div className="relative z-10 p-8 md:p-10 flex flex-col justify-center">
              <div className="text-gray-400 text-6xl font-serif leading-none mb-4 opacity-50">
                “
              </div>

              <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-8 w-full">
                “The greatest sign of success for a teacher is to be able to
                say, ‘The children are now working as if I did not exist.’
                Education is not something which the teacher does, but a natural
                process which develops spontaneously in the human being when
                guided with care, patience, and respect.”
              </p>

              <div className="flex items-center gap-4">
                {/* OUTER OVAL (dashed) */}
                <div className="relative w-14 h-15">
                  {/* INNER PROFILE IMAGE (FIXED POSITION) */}
                  <div className="relative w-14 h-14 rounded-full overflow-hidden bg-white z-10">
                    <Image
                      src="/reviewer-profile.webp"
                      alt="Customer Profile"
                      width={56}
                      height={56}
                      className="object-cover rounded-full"
                    />
                  </div>

                  {/* OUTER DASHED OVAL (MOVES LEFT ONLY) */}
                  <div
                    className="absolute inset-[-10px] rounded-full border-2 border-dashed z-10 w-16 h-17 opacity-70"
                    style={{
                      borderColor: "#704EF6",
                      transform: "translate(6px, 4px)",
                    }}
                  />
                </div>

                <div>
                  <h4 className="text-white font-bold text-lg">Maria Montessori</h4>
                </div>
              </div>

              {/* PAGINATION DOTS */}
              <div className="absolute bottom-8 left-135 flex gap-2">
                <span className="w-2 h-2 rounded-full bg-white opacity-50" />
                <span className="w-2 h-2 rounded-full bg-white ring-2 ring-offset-2 ring-offset-orange-500" />
                <span className="w-2 h-2 rounded-full bg-white opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
