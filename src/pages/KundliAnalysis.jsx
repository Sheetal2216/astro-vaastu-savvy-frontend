import { Link } from "react-router-dom";

function KundliAnalysis() {
  return (
    <section className="bg-[#F5EBE0] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">

        {/* PAGE INTRO */}
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold font-['Playfair_Display'] text-[#1B2624] leading-tight">
            Kundli Analysis & Birth Chart Consultation
          </h1>

          <div className="mt-4 h-px w-28 bg-[#606C33]/60"></div>

          <p className="mt-6 font-['Poppins'] text-[#1B2624]/85 leading-relaxed">
            This is a personalised and paid Kundli (Birth Chart) analysis
            conducted manually by Acharya Dr. Savvvy Singh. Each chart is
            studied in depth using classical astrological principles, not
            automated software or AI-generated reports.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEFT – WHAT YOU GET */}
          <div>
            <h2 className="text-2xl font-bold font-['Playfair_Display'] text-[#1B2624] mb-6">
              What This Analysis Includes
            </h2>

            <ul className="space-y-4 font-['Poppins'] text-[#1B2624]/80 text-sm">
              <li>• Complete Birth Chart (Kundli) Evaluation</li>
              <li>• Career, Wealth & Professional Direction</li>
              <li>• Marriage & Relationship Insights</li>
              <li>• Planetary Periods (Dasha) & Timing</li>
              <li>• Practical Remedies (Non-Invasive)</li>
              <li>• Ethical, Fear-Free Guidance</li>
            </ul>

            <div className="mt-8 p-6 bg-[#DDA158]/20 rounded-xl border border-[#606C33]/30">
              <p className="font-['Poppins'] text-sm text-[#1B2624]/85 leading-relaxed">
                🔒 <strong>Confidential & Private:</strong>  
                Your birth details and consultation information are kept
                strictly confidential and are never shared or reused.
              </p>
            </div>
          </div>

          {/* RIGHT – ACTION CARD */}
          <div className="flex justify-center md:justify-end">
            <div className="relative bg-[#F5EBE0] border border-[#606C33]/40 rounded-3xl p-8 w-full max-w-sm shadow-lg">

              {/* Soft glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#BC6C25]/20 rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-[#606C33]/15 flex items-center justify-center mb-6">
                  <img src="/icons/kundli.png" alt="Kundli" className="w-8 h-8" />
                </div>

                <h3 className="font-['Playfair_Display'] text-xl text-[#1B2624] mb-3">
                  Submit Details & Proceed to Payment
                </h3>

                <div className="h-px w-16 bg-[#606C33]/50 mb-4"></div>

                <p className="text-sm font-['Poppins'] text-[#1B2624]/80 mb-6 leading-relaxed">
                  Fill in your birth details via our secure form and complete
                  the consultation payment. Once submitted, your Kundli will
                  be analysed personally.
                </p>

                {/* PRIMARY CTA */}
                <a
                  href="https://forms.gle/YOUR_KUNDLI_FORM_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#BC6C25] text-white py-3 rounded-full font-['Poppins'] shadow-md hover:opacity-90 transition"
                >
                  Fill Details & Pay
                </a>

                {/* SECONDARY CTA */}
                <a
                  href="https://wa.me/917303014789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-center border border-[#606C33]/50 text-[#1B2624] py-3 rounded-full font-['Poppins'] hover:bg-[#606C33]/10 transition"
                >
                  Talk on WhatsApp Before Booking
                </a>

                <p className="mt-6 text-xs font-['Poppins'] text-[#1B2624]/60 text-center">
                  After submission, our team will contact you personally.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div>
          <h2 className="text-2xl font-bold font-['Playfair_Display'] text-[#1B2624] mb-10">
            How the Process Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Fill Kundli Details",
              "Complete Payment",
              "Manual Analysis",
              "Personal Follow-Up",
            ].map((step, i) => (
              <div
                key={i}
                className="relative bg-[#F5EBE0] border border-[#606C33]/35 rounded-xl p-6 text-center shadow-sm"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#BC6C25] text-white flex items-center justify-center font-['Playfair_Display']">
                  {i + 1}
                </div>

                <p className="mt-6 font-['Playfair_Display'] text-[#1B2624]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FINAL NOTE */}
        <div className="max-w-4xl border-t border-[#606C33]/40 pt-10">
          <p className="font-['Playfair_Display'] text-lg text-[#1B2624]/90 leading-relaxed">
            “This consultation is meant for individuals seeking clarity,
            direction, and long-term understanding — not fear-based predictions
            or instant promises.”
          </p>
        </div>

      </div>
    </section>
  );
}

export default KundliAnalysis;
