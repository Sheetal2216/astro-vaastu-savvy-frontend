function About() {
  return (
    <section className="bg-[#F5EBE0]">
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-15">

       {/* 1. HERO INTRO */}
<div className="relative mt-0">

  {/* Background Accent */}
  <div className="absolute inset-0 bg-[#DDA158]/10 rounded-xl"></div>

  <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-5 py-10">

    {/* Text */}
    <div>
      <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#BC6C25] leading-tight">
        About the Astrologer
      </h1>

      {/* Decorative Divider */}
      <div className="mt-4 h-px w-20 bg-[#606C33]/60"></div>

      <p className="mt-6 font-['Poppins'] text-[#1B2624]/85 leading-relaxed max-w-xl">
        Dr. Savvvy Siinghh, professionally known as{" "}
        <strong className="text-[#1B2624]">Astro Vaastu Savvy</strong>,
        is a renowned celebrity astrologer and medal-winning scientific
        vastu expert. Her work reflects a disciplined blend of classical
        knowledge, modern reasoning, and ethical responsibility.
      </p>

      <p className="mt-4 font-['Poppins'] text-[#1B2624]/85 leading-relaxed max-w-xl">
        With over six years of professional experience and a global client
        portfolio, she is known for her calm, analytical approach to
        astrology, vastu, numerology, and space strategy.
      </p>
    </div>

    {/* Image */}
    <div className="flex justify-center">
      <div className="relative">

        {/* Soft Shadow Frame */}
        <div className="absolute inset-0 translate-x-2 translate-y-2 bg-[#606C33]/15 rounded-lg"></div>

        <img
          src="/images/astro-savvy-main.jpeg"
          alt="Astro Vaastu Savvy"
          className="relative w-64 md:w-80 rounded-lg border border-[#606C33]/40 bg-[#F5EBE0]"
        />
      </div>
    </div>

  </div>
</div>


        {/* 2. PHILOSOPHY */}
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] text-[#BC6C25] mb-6">
            Professional Philosophy
          </h2>

          <p className="font-['Poppins'] text-[#1B2624]/80 leading-relaxed">
            The foundation of Dr. Savvvy Siinghh’s practice lies in the belief that
            astrology and vastu are not mystical shortcuts, but structured
            sciences that require patience, study, and contextual understanding.
            Each consultation begins with careful analysis, followed by
            customized guidance and continued support.
          </p>
        </div>

      {/* 3. AREAS OF PRACTICE */}
<div className="mt-24">
  <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] text-[#BC6C25] mb-12">
    Areas of Practice
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

    {/* Astro Vastu */}
    <div className="border border-[#606C33]/40 p-8 rounded-md bg-[#F5EBE0]">
     <img src="/icons/astrology.png" alt="Icon" />
      <p className="font-['Playfair_Display'] text-[#1B2624] mb-3">
        Astro Vastu Consultation
      </p>
      <div className="h-px w-10 bg-[#606C33]/40 mb-3"></div>
      <p className="text-sm font-['Poppins'] text-[#1B2624]/75">
        Harmonising living and working spaces through traditional vastu
        principles aligned with planetary energies.
      </p>
    </div>

    {/* Birth Chart */}
    <div className="border border-[#606C33]/40 p-8 rounded-md bg-[#F5EBE0]">
    <img src="/icons/moon.png" alt="Icon" />
      <p className="font-['Playfair_Display'] text-[#BC6C25] mb-3">
        Birth Chart Analysis
      </p>
      <div className="h-px w-10 bg-[#606C33]/40 mb-3"></div>
      <p className="text-sm font-['Poppins'] text-[#BC6C25]/75">
        Detailed kundali interpretation focusing on career, relationships,
        education, and long-term life patterns.
      </p>
    </div>

    {/* Numerology */}
    <div className="border border-[#606C33]/40 p-8 rounded-md bg-[#F5EBE0]">
 <img src="/icons/chiromancy.png" alt="Icon" />
      <p className="font-['Playfair_Display'] text-[#BC6C25] mb-3">
        Numerology & Name Analysis
      </p>
      <div className="h-px w-10 bg-[#606C33]/40 mb-3"></div>
      <p className="text-sm font-['Poppins'] text-[#1B2624]/75">
        Understanding numerical vibrations of names and dates to guide
        decisions and personal alignment.
      </p>
    </div>

    {/* Space Strategy */}
    <div className="border border-[#606C33]/40 p-8 rounded-md bg-[#F5EBE0]">
      <img src="/icons/mystery.png" alt="Icon" />
      <p className="font-['Playfair_Display'] text-[#BC6C25] mb-3">
        Scientific Space Strategy
      </p>
      <div className="h-px w-10 bg-[#606C33]/40 mb-3"></div>
      <p className="text-sm font-['Poppins'] text-[#1B2624]/75">
        A modern, research-driven approach to spatial planning influenced by
        energy flow, psychology, and vastu science.
      </p>
    </div>

  </div>
</div>

        {/* 4. GLOBAL REACH */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] text-[#BC6C25] mb-6">
              Global Presence & Trust
            </h2>

            <p className="font-['Poppins'] text-[#1B2624]/80 leading-relaxed">
              Dr. Savvvy Siinghh has built a strong and trusted client base across
              India, the United States, the United Kingdom, Dubai, Finland,
              Estonia, and Canada. Her insights have also been featured on
              national and international television platforms.
            </p>
          </div>

          <div className="bg-[#DDA158]/20 p-8 rounded-md">
            <ul className="space-y-3 font-['Poppins'] text-[#1B2624]/85">
              <li>• Clients across 6+ countries</li>
              <li>• National & international awards</li>
              <li>• Television & public forums</li>
              <li>• Ethical and confidential practice</li>
            </ul>
          </div>
        </div>

        {/* 5. CLOSING STATEMENT */}
        <div className="max-w-4xl border-t border-[#606C33]/40 pt-12">
          <p className="font-['Playfair_Display'] text-xl text-[#0e2722] leading-relaxed">
            “Together, we transform spaces and life paths with clarity,
            discipline, and harmony — guided by time-tested principles and
            thoughtful understanding.”
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
