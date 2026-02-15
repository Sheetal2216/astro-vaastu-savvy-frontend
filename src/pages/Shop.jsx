import { useNavigate } from "react-router-dom";

function Shop() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#FFFBF7] text-[#4A3728] selection:bg-[#5D101D] selection:text-white overflow-hidden">
      
      {/* DIVINE BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FFD700]/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#5D101D]/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* SUBTLE PAPER TEXTURE OVERLAY */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />

      <div className="relative z-10 px-6 py-20 lg:py-32">
        
        {/* ================= HEADING SECTION ================= */}
        <div className="text-center max-w-4xl mx-auto mb-24 space-y-6 animate-fadeInUp">
          <div className="flex justify-center items-center gap-4 mb-4">
            <span className="h-px w-12 bg-[#B27D62]/40" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#B27D62] font-bold">Divine Collections</span>
            <span className="h-px w-12 bg-[#B27D62]/40" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-serif text-[#5D101D] font-bold italic leading-tight">
            Sacred Shop
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-gray-600 font-light italic leading-relaxed">
            Every creation is lab-certified, astrologically aligned, and 
            spiritually energized to help you manifest your highest divine potential.
          </p>
        </div>

        {/* ================= CATEGORY CARDS ================= */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* BRACELETS CARD */}
          <div
            onClick={() => navigate("/shop/bracelets")}
            className="group relative cursor-pointer"
          >
            {/* CARD GLOW */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#FFD700]/20 to-[#5D101D]/10 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full bg-white/60 backdrop-blur-xl rounded-[3rem] p-12 border border-white shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-48 mb-8 flex items-center justify-center overflow-hidden rounded-2xl bg-[#FFFBF7]">
                 <span className="text-8xl group-hover:scale-110 transition-transform duration-700">✨</span>
                 <div className="absolute inset-0 bg-radial-gradient from-[#E6BE8A]/10 to-transparent animate-pulse" />
              </div>

              <h2 className="text-4xl font-serif font-bold text-[#5D101D] mb-4">
                Sacred Bracelets
              </h2>

              <p className="text-gray-500 leading-relaxed italic text-lg mb-8">
                Hand-knotted energy tools crafted for love, deep protection, and spiritual manifestation.
              </p>

              <div className="flex items-center gap-3 text-[#B27D62] font-bold text-xs uppercase tracking-[0.2em]">
                <span>Explore Collection</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">⟶</span>
              </div>
            </div>
          </div>

          {/* RUDRAKSHA CARD */}
          <div
            onClick={() => navigate("/shop/rudraksha")}
            className="group relative cursor-pointer"
          >
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#5D101D]/20 to-[#FFD700]/10 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative h-full bg-white/60 backdrop-blur-xl rounded-[3rem] p-12 border border-white shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-48 mb-8 flex items-center justify-center overflow-hidden rounded-2xl bg-[#FFFBF7]">
                 <span className="text-8xl group-hover:scale-110 transition-transform duration-700">🔱</span>
                 <div className="absolute inset-0 bg-radial-gradient from-[#5D101D]/5 to-transparent animate-pulse" />
              </div>

              <h2 className="text-4xl font-serif font-bold text-[#5D101D] mb-4">
                Holy Rudraksha
              </h2>

              <p className="text-gray-500 leading-relaxed italic text-lg mb-8">
                Authentic Nepali & Indonesian beads for inner peace, cosmic protection, and Shiva's grace.
              </p>

              <div className="flex items-center gap-3 text-[#B27D62] font-bold text-xs uppercase tracking-[0.2em]">
                <span>Explore Collection</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">⟶</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= DIVINE PROCESS SECTION ================= */}
        <div className="mt-40 max-w-5xl mx-auto border-t border-[#E6BE8A]/30 pt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif italic text-[#5D101D]">The Vedic Promise</h3>
            <p className="text-gray-500 mt-2 uppercase tracking-widest text-[10px] font-bold">How we energize your tools</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm border border-[#E6BE8A]/20 text-2xl">⚖️</div>
              <h4 className="font-bold text-[#5D101D]">Astro-Aligned</h4>
              <p className="text-sm text-gray-500 italic">Sourced during auspicious Tithis to ensure maximum planetary resonance.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm border border-[#E6BE8A]/20 text-2xl">🔥</div>
              <h4 className="font-bold text-[#5D101D]">Abhimantrit</h4>
              <p className="text-sm text-gray-500 italic">Every piece undergoes Vedic Prana-Pratishtha rituals by learned priests.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm border border-[#E6BE8A]/20 text-2xl">🛡️</div>
              <h4 className="font-bold text-[#5D101D]">Lab Certified</h4>
              <p className="text-sm text-gray-500 italic">100% authenticity guarantee with government-approved lab certification.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Shop;