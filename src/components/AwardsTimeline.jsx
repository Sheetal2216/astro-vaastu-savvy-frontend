function AwardsSection() {
  return (
    <section className="bg-[#F5EBE0] py-5">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[#BC6C25]">
            Awards & Media Presence
          </h2>
          <p className="mt-4 font-['Poppins'] text-[#1B2624]/80">
            Recognitions and public appearances that reflect years of disciplined
            practice, research-driven interpretation, and professional trust.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* Timeline */}
          <div className="relative border-l border-[#606C33]/60 pl-8 space-y-10">

            {[
              {
                year: "2025",
                title: "Jyotish Gaurav Samman",
                place: "Uttarakhand, India",
              },
              {
                year: "2024",
                title: "Yuva Yodha Award",
                place: "National Akali Dal, India",
              },
              {
                year: "2023",
                title: "Innovative Youth Icon Award",
                place: "House of Lords, London, UK",
              },
              {
                year: "2023",
                title: "Bharat Gaurav Samman",
                place: "Times Square, New York, USA",
              },
              {
                year: "2022",
                title: "Bharat Gaurav Samman",
                place: "House of Lords, London, UK",
              },
            ].map((item, index) => (
              <div key={index}>
                <span className="text-sm font-['Poppins'] text-[#BC6C25]">
                  {item.year}
                </span>
                <h3 className="text-lg font-['Playfair_Display'] text-[#1B2624]">
                  {item.title}
                </h3>
                <p className="text-sm font-['Poppins'] text-[#1B2624]/70">
                  {item.place}
                </p>
              </div>
            ))}
          </div>

          {/* Image Gallery */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "/images/award-1.jpeg",
                "/images/award-2.jpeg",
                "/images/award-3.jpeg",
                "/images/award-4.jpeg",
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Award Recognition"
                  className="w-full h-48 object-cover rounded-md border border-[#606C33]/40"
                />
              ))}
            </div>

            <p className="mt-6 text-sm font-['Poppins'] text-[#1B2624]/70">
              Selected recognitions from national and international institutions.
            </p>
          </div>

        </div>



       {/* Media Presence */}
<div className="mt-24 pt-14 border-t border-[#606C33]/40">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
{/* RIGHT IMAGES – Horizontal, No Scroll */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

  <div>
    <img
      src="/images/media/media-1.jpeg"
      alt="Television Appearance"
      className="w-full h-80 object-cover rounded-md border border-[#606C33]/40"
    />
    <p className="mt-2 text-xs font-['Poppins'] text-[#1B2624]/70">
      National Television Appearance
    </p>
  </div>

  <div>
    <img
      src="/images/media/media-2.jpeg"
      alt="Panel Discussion"
      className="w-full h-80 object-cover rounded-md border border-[#606C33]/40"
    />
    <p className="mt-2 text-xs font-['Poppins'] text-[#1B2624]/70">
      Expert Panel Discussion
    </p>
  </div>

  <div>
    <img
      src="/images/media/media-3.jpeg"
      alt="News Studio"
      className="w-full h-80 object-cover rounded-md border border-[#606C33]/40"
    />
    <p className="mt-2 text-xs font-['Poppins'] text-[#1B2624]/70">
      News Studio Session
    </p>
  </div>

</div>


    {/* LEFT CONTENT */}
    <div>
      <h3 className="text-2xl md:text-3xl font-['Playfair_Display'] text-[#BC6C25] mb-6">
        Media Presence & Public Discourse
      </h3>

      <p className="font-['Poppins'] text-[#1B2624]/80 leading-relaxed mb-8">
        Dr. Savvvy Siinghh has been a regular presence on national television
        and international platforms, particularly known for her analytical
        insights in astrology, vastu, and political forecasting.
      </p>

      {/* Media List */}
      <ul className="space-y-4 font-['Poppins'] text-[#1B2624]/85">
        <li className="flex items-start gap-3">
          <span className="mt-1 w-2 h-2 bg-[#BC6C25] rounded-full"></span>
          Zee Media — National Television
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-1 w-2 h-2 bg-[#BC6C25] rounded-full"></span>
          Sadhna TV — Spiritual & Social Discourse
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-1 w-2 h-2 bg-[#BC6C25] rounded-full"></span>
          NDTV — News & Special Panels
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-1 w-2 h-2 bg-[#BC6C25] rounded-full"></span>
          Network 10 — Expert Commentary
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-1 w-2 h-2 bg-[#BC6C25] rounded-full"></span>
          Political prediction program{" "}
          <em>“2024 की कुंडली”</em> on JKL 24×7 News & Gulistan
        </li>
      </ul>
    </div>

   


  </div>
</div>


      </div>
    </section>
  );
}

export default AwardsSection;
