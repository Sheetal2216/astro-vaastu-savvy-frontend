import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <section className="bg-[#F5EBE0]">
      <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#DDA158]/30 text-sm text-[#1B2624] font-['Poppins']">
            ✦ Award-Winning Celebrity Astrologer & Vastu Expert
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] text-[#1B2624] leading-tight">
            Redesign Your Life. <br />
            <span className="text-[#BC6C25]">Redefine Its Path.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg font-['Poppins'] text-[#1B2624]/80 max-w-xl">
            A holistic blend of Astrology, Vastu, Numerology and scientific
            space strategy to bring balance, prosperity and clarity to life.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-[#BC6C25] text-white px-8 py-3 rounded-md shadow-md hover:opacity-90 transition"
            >
              Book Consultation
            </Link>

            <Link
              to="/services"
              className="px-8 py-3 rounded-md border border-[#606C33] text-[#1B2624] hover:bg-[#606C33] hover:text-white transition"
            >
              Explore Services
            </Link>
          </div>

          {/* Achievements */}
          <div className="mt-12 flex gap-10 text-[#1B2624]">
            <div>
              <p className="text-3xl font-['Playfair_Display']">12+</p>
              <p className="text-sm font-['Poppins']">Global Awards</p>
            </div>
            <div>
              <p className="text-3xl font-['Playfair_Display']">6+</p>
              <p className="text-sm font-['Poppins']">Countries Served</p>
            </div>
            <div>
              <p className="text-3xl font-['Playfair_Display']">50K+</p>
              <p className="text-sm font-['Poppins']">Followers</p>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center">
          <div className="absolute w-80 h-80 rounded-full bg-[#606C33]/20 blur-3xl"></div>

          <img
            src="/images/astro-savvy-main.jpeg"
            alt="Astro Vaastu Savvy"
            className="relative z-10 w-64 md:w-80 rounded-2xl shadow-xl border border-[#BC6C25]/40"
          />

          <img
            src="/images/astro-savvy-award.jpeg"
            alt="Awards"
            className="absolute bottom-0 right-0 translate-x-1/3 w-32 rounded-lg border border-[#BC6C25] shadow-md hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
