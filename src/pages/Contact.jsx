function Contact() {
  return (
    <section className="bg-[#F5EBE0]">
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">

        {/* PAGE INTRO */}
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#BC6C25] leading-tight">
            Choose Your Consultation Type
          </h1>
          <div className="mt-4 h-px w-24 bg-[#606C33]/70"></div>
          <p className="mt-6 font-['Poppins'] text-[#1B2624]/85 leading-relaxed">
            Select the consultation best suited to your concern. Every service is
            approached ethically, scientifically, and with long-term clarity.
          </p>
        </div>

        {/* CONSULTATION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

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
                <img src="/icons/astrology.png" alt="" className="w-10 h-10" />
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
                Chat on WhatsApp → +91 7303014789
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
