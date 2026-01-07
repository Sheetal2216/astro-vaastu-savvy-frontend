import { Link } from "react-router-dom";

function HomeTrustSection() {
  return (
    <section className="bg-[#F5EBE0] py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* 1. WHY CHOOSE DR SAVVY */}
     
<div>
  <h2 className="text-3xl font-bold md:text-4xl font-['Playfair_Display'] text-[#1B2624] mb-14">
    Why Choose Acharya Dr.Savvy Singh
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

    {[
      {
        title: "Ethical Practice",
        desc: "No fear-based guidance. Every recommendation is ethical, practical, and confidential.",
        icon: "/icons/sign-1.png",
      },
      {
        title: "Accuracy & Precision",
        desc: "Predictions and remedies are rooted in deep analysis and disciplined methodology.",
        icon: "/icons/sign-2.png",
      },
      {
        title: "Long-Term Guidance",
        desc: "Focus on sustainable outcomes rather than instant or temporary fixes.",
        icon: "/icons/sign-3.png",
      },
      {
        title: "Global Trust",
        desc: "Trusted by clients across India, the UK, the US, Europe, and beyond.",
        icon: "/icons/sign-4.png",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="group relative bg-[#F5EBE0] border border-[#606C33]/35 rounded-5xl p-8 text-center
                   transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#BC6C25]/50"
      >

        {/* Icon Halo */}
        <div className="mx-auto mb-6 flex items-center justify-center w-20 h-20 rounded-full 
                        bg-[#DDA158]/25 group-hover:bg-[#DDA158]/40 transition">
          <img
            src={item.icon}
            alt=""
            className="w-30 h-25"
          />
        </div>

        {/* Title */}
        <h3 className="font-['Playfair_Display'] text-lg text-[#BC6C25 ] mb-3">
          {item.title}
        </h3>

        {/* Divider */}
        <div className="mx-auto mb-4 h-px w-12 bg-[#606C33]/50"></div>

        {/* Description */}
        <p className="text-sm font-['Poppins'] text-[#1B2624]/75 leading-relaxed">
          {item.desc}
        </p>

        {/* Subtle corner accent */}
      {/* Replace the old subtle corner accent div with this */}
<div className="absolute top-4 right-4 w-18 h-20 flex items-center justify-center">
  <img 
    src="/images/astro-savvy-bgless.png" 
    alt="Astro Savvy Logo" 
    className="w-full h-full object-contain rounded-full group-hover:opacity-100 transition-opacity duration-300"
  />
</div>
      </div>
    ))}
  </div>
</div>

       {/* 2. TESTIMONIALS PREVIEW */}
<div className="relative">

  {/* Soft Background Accent */}
  <div className="absolute inset-0 bg-[#DDA158]/10 rounded-2xl"></div>

  <div className="relative px-6 py-14">

    <h2 className="text-3xl font-bold md:text-4xl font-['Playfair_Display'] text-[#1B2624] font-bold mb-14 text-center">
      What Clients Say
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {[
        {
          text:
            "Her predictions during our first consultation were remarkably accurate. Over the years, her guidance has helped me achieve clarity and growth.",
          name: "Ankita Gupta",
          place: "London, UK",
        },
        {
          text:
            "Dr. Savvy Singh does not just consult; she walks alongside you until results are achieved. Her vastu guidance transformed my business.",
          name: "Rajesh Rastogi",
          place: "Delhi, India",
        },
        {
          text:
            "Her numerology insights helped my son gain clarity and focus. Today he is studying medicine, and I remain deeply grateful.",
          name: "Mrs. Richa",
          place: "USA",
        },
      ].map((t, i) => (
        <div
          key={i}
          className="group relative bg-[#F5EBE0] border border-[#606C33]/40 rounded-2xl p-8
                     transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >

          {/* Quote Mark */}
          <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full 
                          bg-[#BC6C25]/15 flex items-center justify-center
                          font-['Playfair_Display'] text-2xl text-[#BC6C25]">
            “
          </div>

          {/* Testimonial Text */}
          <p className="text-sm font-['Poppins'] text-[#1B2624]/80 leading-relaxed mb-6">
            {t.text}
          </p>

          {/* Divider */}
          <div className="h-px w-12 bg-[#606C33]/40 mb-4"></div>

          {/* Client Info */}
          <p className="font-['Playfair_Display'] text-[#1B2624]">
            {t.name}
          </p>
          <p className="text-xs font-['Poppins'] text-[#606C33]">
            {t.place}
          </p>
        </div>
      ))}
    </div>

    {/* Link */}
    <div className="mt-12 text-center">
      <Link
        to="/services"
        className="inline-block text-sm font-['Poppins'] text-[#BC6C25] 
                   underline underline-offset-4 hover:opacity-80 transition"
      >
        Read full client stories →
      </Link>
    </div>

  </div>
</div>

        {/* 3. CONSULTATION PROCESS */}
        <div>
          <h2 className="text-3xl font-bold md:text-4xl font-['Playfair_Display'] text-[#1c3934] mb-12">
            Consultation Process
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-[#BC6C25]">
            {[
              "Analysis",
              "Guidance",
              "Implementation",
              "Ongoing Support",
            ].map((step, i) => (
              <div
                key={i}
                className="relative bg-[#F5EBE0] border border-[#606C33]/35 rounded-xl p-8 text-center shadow-sm"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#BC6C25] text-white flex items-center justify-center font-['Playfair_Display']">
                  {i + 1}
                </div>

                <p className="mt-6 font-['Playfair_Display'] text-[#1B2624]">
                  {step}
                </p>

                <div className="h-px w-10 bg-[#606C33]/40 mx-auto my-4"></div>

                <p className="text-sm font-['Poppins'] text-[#1B2624]/75">
                  {step === "Analysis" && "Comprehensive evaluation of charts, space, and circumstances."}
                  {step === "Guidance" && "Clear, structured recommendations explained in detail."}
                  {step === "Implementation" && "Support during execution of suggested changes."}
                  {step === "Ongoing Support" && "Follow-ups to ensure long-term alignment."}
                </p>
              </div>
            ))}
          </div>
        </div>

     {/* FINAL CTA – CONSULTATION */}
<section className="mt-32">
  <div className="max-w-7xl mx-auto px-6">

    <div className="relative bg-[#F5EBE0] border border-[#606C33]/30 rounded-3xl p-10 md:p-16 shadow-sm overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#DDA158]/20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#606C33]/15 blur-3xl"></div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display'] text-[#1B2624] mb-4">
            Begin Your Consultation Journey
          </h2>

          <div className="h-px w-20 bg-[#606C33]/60 mb-6"></div>

          <p className="font-['Poppins'] text-[#1B2624]/80 leading-relaxed mb-6 max-w-xl">
            Consultations are conducted with discretion, depth, and ethical
            responsibility. Each session is designed to provide clarity,
            alignment, and long-term direction — never fear or dependency.
          </p>

          {/* What You Can Expect */}
          <ul className="space-y-3 font-['Poppins'] text-sm text-[#1B2624]/85 mb-8">
            <li>• Personalised analysis based on your unique chart or space</li>
            <li>• Clear guidance, not generic predictions</li>
            <li>• Practical, non-invasive remedies</li>
            <li>• Continued support where required</li>
          </ul>

          {/* SOCIAL MEDIA INLINE */}
          <div className="mt-8">
            <p className="font-['Playfair_Display'] text-[#1B2624] mb-4">
              Stay Connected
            </p>

            <div className="flex items-center gap-4">

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@AstroVaastuSavvy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-[#606C33]/40 
                           flex items-center justify-center bg-white
                           hover:bg-[#BC6C25] transition shadow-sm"
              >
                <img src="/icons/youtube.png" alt="YouTube" className="w-5 h-5 invert-0 hover:invert transition" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/astrovastussavvy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-[#606C33]/40 
                           flex items-center justify-center bg-white
                           hover:bg-[#BC6C25] transition shadow-sm"
              >
                <img src="/icons/instagram.png" alt="Instagram" className="w-5 h-5" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/AstroVaastuSavvy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-[#606C33]/40 
                           flex items-center justify-center bg-white
                           hover:bg-[#BC6C25] transition shadow-sm"
              >
                <img src="/icons/facebook.png" alt="Facebook" className="w-5 h-5" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917303014789"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-green-600/40 
                           flex items-center justify-center bg-white
                           hover:bg-green-600 transition shadow-sm"
              >
                <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
              </a>

            </div>

            <p className="mt-4 text-sm font-['Poppins'] text-[#1B2624]/70">
              📞 Call / WhatsApp: <span className="font-medium">+91 7303014789</span>
            </p>
          </div>
        </div>

        {/* RIGHT CTA BLOCK */}
        <div className="bg-[#FDF8F3] border border-[#606C33]/25 rounded-2xl p-8 md:p-10">

          <p className="font-['Playfair_Display'] text-lg text-[#1B2624] mb-6">
            Choose how you’d like to proceed
          </p>

          <div className="flex flex-col gap-4">

            {/* Primary CTA */}
            <a
              href="/contact"
              className="text-center bg-[#BC6C25] text-white py-3 rounded-full 
                         font-['Poppins'] shadow-md hover:opacity-90 transition"
            >
              Book Consultation
            </a>

            {/* Secondary CTA */}
            <a
              href="https://wa.me/917303014789"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center bg-white text-[#1B2624] py-3 rounded-full 
                         font-['Poppins'] shadow-md hover:opacity-90 transition border-2 hover:bg-green-200"
            >
              Talk on WhatsApp
            </a>
          </div>

          <p className="mt-6 text-xs font-['Poppins'] text-[#1B2624]/60 text-center">
            Not sure which consultation is right for you?  
            We’ll guide you personally before you begin.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>



      </div>
    </section>
  );
}

export default HomeTrustSection;
