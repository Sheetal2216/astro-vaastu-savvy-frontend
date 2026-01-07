import { useEffect, useState } from "react";

function ConsultationPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if popup was already shown
    const hasSeenPopup = localStorage.getItem("astroConsultPopupShown");

    if (hasSeenPopup) return;

    // Start 1-minute timer
    const timer = setTimeout(() => {
      setVisible(true);
      localStorage.setItem("astroConsultPopupShown", "true");
    }, 60000); // 60 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 px-4">
      <div className="relative bg-[#F5EBE0] rounded-2xl shadow-2xl max-w-md w-full p-8 border border-[#606C33]/40">

        {/* Close Button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 text-[#1B2624]/60 hover:text-[#1B2624]"
        >
          ✕
        </button>

        {/* Content */}
        <h3 className="text-2xl font-['Playfair_Display'] text-[#1B2624] mb-4">
          Need Astro Consultancy?
        </h3>

        <p className="font-['Poppins'] text-[#1B2624]/80 leading-relaxed mb-6">
          If you have a specific concern related to astrology, vastu, or
          numerology, our team would be happy to guide you.
        </p>

        <div className="flex flex-col gap-4">
          {/* Primary CTA */}
          <a
            href="/contact"
            className="text-center bg-[#BC6C25] text-white py-3 rounded-full font-['Poppins'] shadow-md hover:opacity-90 transition"
          >
            Book Consultation
          </a>

          {/* Secondary CTA */}
          <a
            href="https://wa.me/917303014789"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center border border-[#606C33]/50 text-[#1B2624] py-3 rounded-full font-['Poppins'] hover:bg-[#606C33]/10 transition"
          >
            Chat on WhatsApp
          </a>
        </div>

        <p className="mt-6 text-xs font-['Poppins'] text-[#1B2624]/60 text-center">
          This message will not appear again.
        </p>
      </div>
    </div>
  );
}

export default ConsultationPopup;
