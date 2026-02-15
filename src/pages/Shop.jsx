import { useNavigate } from "react-router-dom";

function Shop() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#FFFBF7] text-[#4A3728] selection:bg-[#5D101D] selection:text-white overflow-hidden">
      
      {/* DIVINE BACKGROUND ELEMENTS (AURAS) */}
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
            {/* Glow Behind Card */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#FFD700]/20 to-[#5D101D]/10 rounded-[3.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative h-full bg-white/40 backdrop-blur-2xl rounded-[3.5rem] p-10 lg:p-14 border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-700 hover:-translate-y-3">
              
              {/* Sacred Geometry Pattern Background */}
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none transition-transform duration-[3s] group-hover:rotate-12 group-hover:scale-125">
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-current text-[#5D101D]">
                  <circle cx="50" cy="50" r="40" fill="none" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="30" fill="none" strokeWidth="0.5" />
                  <path d="M50 10 L90 90 L10 90 Z" fill="none" strokeWidth="0.5" />
                </svg>
              </div>

              <div className="relative z-10">
                {/* CATEGORY IMAGE CONTAINER */}
                <div className="relative h-64 mb-10 overflow-hidden rounded-[2rem] shadow-2xl">
                   <img 
                    src="/images/shop/panch-mukhi-rudraksha-1.jpeg" 
                    alt="Sacred Bracelets" 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#5D101D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                   {/* Luxury Badge */}
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#5D101D] text-[9px] px-3 py-1 rounded-full uppercase tracking-widest font-bold border border-[#E6BE8A]/30">
                      Energized
                   </div>
                </div>

                <h2 className="text-4xl font-serif font-bold text-[#5D101D] mb-4">
                  Sacred Bracelets
                </h2>

                <p className="text-gray-500 leading-relaxed italic text-lg mb-10">
                  Hand-knotted energy tools crafted for love, protection, and spiritual manifestation.
                </p>

                <div className="relative inline-block overflow-hidden">
                  <span className="text-[#B27D62] font-bold text-xs uppercase tracking-[0.3em]">
                    Explore Collection
                  </span>
                  <div className="h-0.5 w-full bg-[#B27D62] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>

          {/* RUDRAKSHA CARD */}
          <div
            onClick={() => navigate("/shop/rudraksha")}
            className="group relative cursor-pointer"
          >
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#5D101D]/20 to-[#FFD700]/10 rounded-[3.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative h-full bg-white/40 backdrop-blur-2xl rounded-[3.5rem] p-10 lg:p-14 border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-700 hover:-translate-y-3">
              
              {/* Sacred Geometry Pattern Background */}
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none transition-transform duration-[3s] group-hover:rotate-[-12deg] group-hover:scale-125">
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-current text-[#5D101D]">
                  <circle cx="50" cy="50" r="45" fill="none" strokeWidth="0.5" />
                  <rect x="25" y="25" width="50" height="50" fill="none" strokeWidth="0.5" transform="rotate(45 50 50)" />
                  <rect x="25" y="25" width="50" height="50" fill="none" strokeWidth="0.5" />
                </svg>
              </div>

              <div className="relative z-10">
                {/* CATEGORY IMAGE CONTAINER */}
                <div className="relative h-64 mb-10 overflow-hidden rounded-[2rem] shadow-2xl">
                   <img 
                    src="/images/rudraksha/2mukhi-nepali.jpeg" 
                    alt="Holy Rudraksha" 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#5D101D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                   {/* Luxury Badge */}
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#5D101D] text-[9px] px-3 py-1 rounded-full uppercase tracking-widest font-bold border border-[#E6BE8A]/30">
                      Certified
                   </div>
                </div>

                <h2 className="text-4xl font-serif font-bold text-[#5D101D] mb-4">
                  Holy Rudraksha
                </h2>

                <p className="text-gray-500 leading-relaxed italic text-lg mb-10">
                  Authentic Nepali & Indonesian beads for inner peace, cosmic protection, and Shiva's grace.
                </p>

                <div className="relative inline-block overflow-hidden">
                  <span className="text-[#B27D62] font-bold text-xs uppercase tracking-[0.3em]">
                    Explore Collection
                  </span>
                  <div className="h-0.5 w-full bg-[#B27D62] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= DIVINE PROCESS SECTION ================= */}
        <div className="mt-40 max-w-5xl mx-auto border-t border-[#E6BE8A]/30 pt-24">
          <div className="text-center mb-16 space-y-2">
            <h3 className="text-3xl font-serif italic text-[#5D101D]">The Vedic Promise</h3>
            <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] font-bold">Consecrated with ancient rituals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-16 text-center">
            <div className="group space-y-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#E6BE8A]/20 text-2xl group-hover:scale-110 transition-transform duration-500">⚖️</div>
              <h4 className="font-bold text-[#5D101D] uppercase tracking-widest text-xs">Astro-Aligned</h4>
              <p className="text-sm text-gray-500 italic leading-relaxed">Sourced during auspicious Tithis to ensure maximum planetary resonance.</p>
            </div>
            <div className="group space-y-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#E6BE8A]/20 text-2xl group-hover:scale-110 transition-transform duration-500">🔥</div>
              <h4 className="font-bold text-[#5D101D] uppercase tracking-widest text-xs">Abhimantrit</h4>
              <p className="text-sm text-gray-500 italic leading-relaxed">Every piece undergoes Vedic Prana-Pratishtha rituals by learned priests.</p>
            </div>
            <div className="group space-y-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-[0_10px_30_rgba(0,0,0,0.05)] border border-[#E6BE8A]/20 text-2xl group-hover:scale-110 transition-transform duration-500">🛡️</div>
              <h4 className="font-bold text-[#5D101D] uppercase tracking-widest text-xs">Lab Certified</h4>
              <p className="text-sm text-gray-500 italic leading-relaxed">100% authenticity guarantee with government-approved lab certification.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Shop;