function Contact() {
  return (
    <section className="bg-[#F5EBE0]">
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">

        {/* PAGE INTRO */}
       {/* PAGE INTRO */}
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
  
  {/* LEFT IMAGE */}
  <div className="w-full md:w-1/2 flex justify-center">
   <img
  src="/images/astro-savvy-main-6.jpeg"
  alt="Astro Savvy Consultation"
  className="
    w-1/2
    md:w-1/2
    max-w-xs
    md:max-w-sm
    rounded-2xl
    shadow-xl
    object-cover
  "
/>

  </div>

  {/* RIGHT CONTENT */}
  <div className="w-full md:w-1/2 max-w-4xl text-center md:text-left">
    <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#BC6C25] leading-tight">
      Choose Your Consultation Type
    </h1>

    <div className="mt-4 h-px w-24 bg-[#606C33]/70 mx-auto md:mx-0"></div>

    <p className="mt-6 font-['Poppins'] text-[#1B2624]/85 leading-relaxed">
      Select the consultation best suited to your concern. Every service is
      approached ethically, scientifically, and with long-term clarity.
    </p>
  </div>

</div>



{/* 2.5 KUNDLI ANALYSIS – PAID SERVICE */}
<div className="mt-24">

  <h2 className="text-2xl md:text-3xl font-bold font-['Playfair_Display'] text-[#0b2923] mb-12">
    Kundli Analysis & Birth Chart Consultation
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

    {/* LEFT – INFO */}
    <div>
      <p className="font-['Poppins'] text-[#1B2624]/85 leading-relaxed mb-6 max-w-xl">
        Kundli Analysis is a paid, personalised consultation where your birth
        chart is studied manually based on planetary positions, nakshatras,
        dashas, and yogas. This is not an automated or AI-generated report.
      </p>

      <ul className="space-y-3 font-['Poppins'] text-sm text-[#1B2624]/80 mb-8">
        <li>• Career, marriage & financial insights</li>
        <li>• Timing of opportunities & challenges</li>
        <li>• Ethical, fear-free guidance</li>
        <li>• Personally analysed by Dr. Savvy Singh</li>
      </ul>

      <p className="text-xs font-['Poppins'] text-[#606C33]">
        Confidential • Manual Analysis • Paid Consultation
      </p>
    </div>

    {/* RIGHT – CARD */}
    <div className="flex justify-center md:justify-end">
      <div className="group relative bg-[#F5EBE0] border border-[#606C33]/40 
                      rounded-3xl p-8 w-full max-w-sm
                      transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

        {/* Decorative glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full 
                        bg-[#BC6C25]/20 blur-3xl opacity-0 
                        group-hover:opacity-100 transition"></div>

        {/* Icon */}
        <div className="w-14 h-14 mb-6 rounded-full bg-[#606C33]/15 
                        flex items-center justify-center">
          <img src="/images/kundli-illustrations.jpeg" alt="Kundli" className="w-8 h-8" />
        </div>

        <h3 className="font-['Playfair_Display'] text-xl text-[#1B2624] mb-3">
          Detailed Kundli Analysis
        </h3>

        <div className="h-px w-16 bg-[#606C33]/50 mb-4"></div>

        <p className="text-sm font-['Poppins'] text-[#1B2624]/80 leading-relaxed mb-6">
          Submit your birth details, complete payment, and receive a
          professionally analysed consultation with personalised guidance.
        </p>

        <a
          href="/kundli-analysis"
          className="block text-center bg-[#BC6C25] text-white 
                     py-3 rounded-full font-['Poppins'] shadow-md 
                     hover:opacity-90 transition"
        >
          Pay & Submit Details
        </a>

        <p className="mt-4 text-xs text-center font-['Poppins'] text-[#1B2624]/60">
          Analysis conducted manually • You will be contacted personally
        </p>
      </div>
    </div>

  </div>
</div>
        {/* CONSULTATION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* ASTROLOGY */}
          <a
            href="https://forms.gle/5TzbhdPrh1friry39"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#FFF8F0] border border-[#606C33]/30
                       rounded-3xl p-8 hover:shadow-2xl transition-all duration-500"
          >
            {/* Soft green glow */}
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#606C33]/10 rounded-full blur-3xl"></div>

            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-[#BC6C25]/20 flex items-center justify-center mb-6">
                <img src="/images/kundli-illustration.jpeg" alt="kundli" className="w-10 h-10" />
              </div>

              <h3 className="font-['Playfair_Display'] text-xl text-[#1B2624] mb-3">
                Astrology Consultation
              </h3>

              <p className="font-['Poppins'] text-sm text-[#1B2624]/75 leading-relaxed mb-6">
                Personalized Kundali analysis covering career, relationships,
                health, education, planetary periods, and future planning.
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-['Poppins']
                               text-[#BC6C25] underline underline-offset-4">
                Fill Astrology Form →
              </span>
            </div>
          </a>


          {/* NUMEROLOGY */}
          <a
            href="https://forms.gle/5Fjbs4JKq3L8efkM6"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#FFF8F0] border border-[#606C33]/30
                       rounded-3xl p-8 hover:shadow-2xl transition-all duration-500"
          >
            {/* Soft green glow */}
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#606C33]/10 rounded-full blur-3xl"></div>

            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-[#BC6C25]/20 flex items-center justify-center mb-6">
                <img src="/icons/mystery.png" alt="" className="w-10 h-10" />
              </div>

              <h3 className="font-['Playfair_Display'] text-xl text-[#1B2624] mb-3">
                Numerology Consultation
              </h3>

              <p className="font-['Poppins'] text-sm text-[#1B2624]/75 leading-relaxed mb-6">
                Understand your life path, name vibrations, destiny numbers, and
                numerical energies influencing success and decisions.
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-['Poppins']
                               text-[#BC6C25] underline underline-offset-4">
                Fill Numerology Form →
              </span>
            </div>
          </a>


          {/* VASTU — STRONG GREEN */}
          <a
            href="https://wa.me/917303014789"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#FFF8F0] border border-[#606C33]/30
                       rounded-3xl p-8 hover:shadow-2xl transition-all duration-500"
          >
            {/* Light overlay */}
            <div className="absolute inset-0 bg-white/5"></div>

            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6">
                <img src="/icons/whatsapp.png" alt="" className="w-10 h-10" />
              </div>

              <h3 className="font-['Playfair_Display'] text-xl mb-3">
                Vastu Consultation
              </h3>

              <p className="font-['Poppins'] text-sm text-[#1B2624]/75 leading-relaxed mb-6">
                Scientific vastu solutions for homes, offices, and commercial
                spaces. Instant guidance via WhatsApp.
              </p>

              <span className="inline-flex items-center text-[green] gap-2 text-sm font-['Poppins']
                               underline underline-offset-4">
                Chat on WhatsApp → +91 9217766359
              </span>
            </div>
          </a>

        </div>




        {/* SUPPORT CTA */}
        <div className="relative bg-[#606C33]/10 border border-[#606C33]/30
                        rounded-3xl p-10 text-center">
          <h3 className="font-['Playfair_Display'] text-2xl text-[#1B2624] mb-4">
            Not sure which consultation is right for you?
          </h3>

          <p className="font-['Poppins'] text-[#1B2624]/80 max-w-2xl mx-auto mb-6">
            Talk to us directly and we will personally guide you toward the most
            suitable consultation based on your concern.
          </p>

          <a
            href="https://wa.me/917303014789"
            className="inline-block bg-[#BC6C25] text-white px-8 py-3
                       rounded-full font-['Poppins'] shadow-md
                       hover:opacity-90 transition"
          >
            Talk on WhatsApp
          </a>
        </div>

        {/* SOCIAL CONNECT */}
        <div className="text-center space-y-6">
          <h3 className="font-['Playfair_Display'] text-2xl text-[#1B2624]">
            Connect with Astro Vaastu Savvy
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: "/icons/youtube.png", text: "YouTube", link: "https://www.youtube.com/@AstroVaastuSavvy" },
              { icon: "/icons/instagram.png", text: "Instagram", link: "#" },
              { icon: "/icons/facebook.png", text: "Facebook", link: "#" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-[#F5EBE0]
                           border border-[#606C33]/30 rounded-full
                           hover:shadow-md transition"
              >
                <img src={item.icon} alt="" className="w-5 h-5" />
                <span className="font-['Poppins'] text-sm text-[#1B2624]">
                  {item.text}
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
