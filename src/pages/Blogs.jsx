function Blogs() {
  return (
    <section className="bg-[#F5EBE0]">
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-28">
{/* PAGE INTRO */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl">

  {/* LEFT TEXT */}
  <div className="max-w-4xl">
    <h1 className="text-4xl font-bold md:text-5xl font-['Playfair_Display'] text-[#1B2624] leading-tight">
      Discourses, Writings & Media
    </h1>

    <div className="mt-4 h-px w-24 bg-[#606C33]/60"></div>

    <p className="mt-6 font-['Poppins'] text-[#1B2624]/85 leading-relaxed">
      A curated collection of public discourses, written insights, and
      upcoming media engagements by Dr. Savvvy Siinghh — reflecting
      disciplined thought, ethical responsibility, and analytical depth
      across astrology, vastu, numerology, and socio-political studies.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div className="flex justify-center md:justify-end">
    <div className="relative">

      {/* Soft shadow layer */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#606C33]/15 rounded-xl"></div>

     <div className="flex flex-row gap-4 justify-center items-center">
  <img
    src="/images/media/media-11.jpeg"
    alt="Discourses and Media Presence"
    className="relative w-72 md:w-60 rounded-xl border border-[#606C33]/40 bg-[#F5EBE0] shadow-lg"
  />
  <img
    src="/images/media/media-5.jpeg"
    alt="Discourses and Media Presence"
    className="relative w-72 md:w-60 rounded-xl border border-[#606C33]/40 bg-[#F5EBE0] shadow-lg"
  />
</div>
    </div>
  </div>

</div>


        {/* VIDEO DISCOURSES */}
        <div>
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[#1B2624] font-bold mb-6">
            Public Video Discourses
          </h2>

          <p className="max-w-3xl font-['Poppins'] text-[#1B2624]/80 leading-relaxed mb-14">
            Selected appearances from national and international platforms where
            Dr. Savvvy Siinghh presents structured insights with clarity,
            responsibility, and precision.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

            {[
              "6IUR4LYMnus",
              "5wDRJPVV9Vo",
              "lZegYBRFCUo",
              "DiggIiFAzAc",
              "VTkK4I1i7C8",
              "6IUR4LYMnus",
            ].map((id, index) => (
              <div
                key={index}
                className="group bg-[#F5EBE0] border border-[#606C33]/40 rounded-2xl
                           overflow-hidden shadow-sm hover:shadow-xl transition"
              >
                <div className="aspect-video bg-[#606C33]/10">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${id}`}
                    title="YouTube discourse"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="p-6">
                  <p className="font-['Playfair_Display'] text-[#1B2624] mb-2">
                    Analytical Discourse {index + 1}
                  </p>
                  <p className="text-sm font-['Poppins'] text-[#1B2624]/70">
                    A structured discussion offering astrological and vastu-based
                    insights on contemporary life themes.
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>


        {/* YOUTUBE CHANNEL HIGHLIGHT */}
<div className="relative border border-[#606C33]/40 rounded-3xl
                bg-[#F5EBE0] shadow-md overflow-hidden
                p-8 md:p-12 max-w-6xl mx-auto">

  {/* Soft background glow */}
  <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#DDA158]/25 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#606C33]/20 rounded-full blur-3xl"></div>

  <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 items-center">

    {/* LEFT – IMAGE / CHANNEL VISUAL */}
    <div className="flex justify-center md:justify-start">
      <div className="relative">
        {/* YouTube ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#BC6C25]/40"></div>

        {/* Thumbnail / Channel Image */}
        <img
          src="/images/media/media-10.jpeg"  // you can change this anytime
          alt="Astro Vaastu Savvy YouTube Channel"
          className="relative w-40 h-40 rounded-full object-cover shadow-lg"
        />

        {/* YouTube Icon Badge */}
        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full
                        bg-[#BC6C25] flex items-center justify-center shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-5 h-5"
          >
            <path d="M23.498 6.186a2.958 2.958 0 00-2.08-2.094C19.63 3.5 12 3.5 12 3.5s-7.63 0-9.418.592A2.958 2.958 0 00.502 6.186C0 7.975 0 12 0 12s0 4.025.502 5.814a2.958 2.958 0 002.08 2.094C4.37 20.5 12 20.5 12 20.5s7.63 0 9.418-.592a2.958 2.958 0 002.08-2.094C24 16.025 24 12 24 12s0-4.025-.502-5.814zM9.75 15.5v-7l6.25 3.5-6.25 3.5z"/>
          </svg>
        </div>
      </div>
    </div>

    {/* CENTER – TEXT */}
    <div className="md:col-span-2">
      <h3 className="text-2xl md:text-3xl font-['Playfair_Display'] text-[#1B2624] font-bold mb-3">
        Astro Vaastu Savvy — Official YouTube Channel
      </h3>

      <p className="font-['Poppins'] text-[#1B2624]/80 leading-relaxed mb-5">
        A long-standing digital platform where Dr. Savvvy Siinghh shares
        structured discourses on astrology, vastu, numerology, and
        socio-political analysis — guided by ethics, clarity, and discipline.
      </p>

      {/* STATS */}
      <div className="flex flex-wrap gap-6 text-sm font-['Poppins'] text-[#1B2624]/75">
        <span>📍 India</span>
        <span>📅 Joined Feb 2017</span>
        <span>👥 11.3K+ Subscribers</span>
        <span>🎥 1,100+ Videos</span>
        <span>👁️ 1.3M+ Views</span>
      </div>
    </div>

    {/* RIGHT – CTA */}
    <div className="flex md:justify-end">
      <a
        href="https://www.youtube.com/@AstroVaastuSavvy"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2
                   px-5 py-3 rounded-full
                   bg-[#BC6C25] text-white
                   font-['Poppins']
                   shadow-lg hover:shadow-xl
                   hover:translate-y-[-2px] transition-all"
      >
        Visit Channel
        <span className="text-lg">→</span>
      </a>
    </div>

  </div>
</div>


        {/* WRITTEN BLOGS */}
        <div>
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display']text-[#1B2624] font-bold mb-14">
            Selected Writings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {[
              {
                title: "Astrology as a Structured Science",
                excerpt:
                  "Astrology is not intuition-driven mysticism. It is a disciplined science based on mathematical calculations, observation, and time-tested principles.",
              },
              {
                title: "Vastu Beyond Myths and Remedies",
                excerpt:
                  "True vastu focuses on spatial harmony, orientation, and psychological balance rather than fear-based corrections.",
              },
              {
                title: "Numerology and the Power of Names",
                excerpt:
                  "Names and numbers carry vibrational frequencies that subtly influence confidence, decision-making, and long-term direction.",
              },
            ].map((blog, i) => (
              <div
                key={i}
                className="group bg-[#F5EBE0] border border-[#606C33]/40
                           rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
              >
                <div className="w-12 h-12 rounded-full bg-[#DDA158]/30 mb-6"></div>

                <h3 className="font-['Playfair_Display'] text-lg text-[#1B2624] mb-4">
                  {blog.title}
                </h3>

                <p className="text-sm font-['Poppins'] text-[#1B2624]/75 leading-relaxed mb-6">
                  {blog.excerpt}
                </p>

                <span className="text-sm font-['Poppins'] text-[#BC6C25] underline underline-offset-4">
                  Read article →
                </span>
              </div>
            ))}

          </div>
        </div>

        {/* UPCOMING MEDIA PRESENCE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[#1B2624] font-bold mb-10">
            Upcoming Media Presence
          </h2>

          <div className="max-w-4xl space-y-6">

            {[
              "Invited guest for a televised political analysis panel",
              "Upcoming discourse on vastu science and modern living",
              "International forum discussion on astrology and ethics",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-[#606C33]/35 rounded-xl p-6
                           bg-[#F5EBE0] shadow-sm"
              >
                <p className="font-['Poppins'] text-[#1B2624]/80">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Blogs;
