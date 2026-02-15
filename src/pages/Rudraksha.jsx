import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/axios";

function Rudraksha() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/api/products?category=rudraksha")
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FFFBF7] text-[#4A3728] selection:bg-[#5D101D] selection:text-white overflow-hidden">
      
      {/* DIVINE BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FFD700]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#5D101D]/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        
        {/* HERO SECTION & GENERAL DESCRIPTION */}
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#B27D62] font-bold mb-4 block animate-fadeIn">
            The Tears of Lord Shiva
          </span>
          <h1 className="text-5xl md:text-6xl font-bold italic text-[#5D101D] mb-8 font-['Noto_Serif_Devanagari']">
            Sacred Rudraksha
          </h1>
          
          <div className="w-24 h-px bg-[#E6BE8A] mx-auto mb-10" />

          <div className="grid md:grid-cols-2 gap-12 items-center text-left">
            <div className="space-y-6 text-lg leading-relaxed font-light text-gray-700 italic">
              <p>
                Rudraksha, the "Eye of Shiva," are sacred seeds used for millennia by seekers and sages to align the soul with the cosmic vibration. Formed from the compassionate tears of Mahadev, these botanical wonders are more than beads—they are energetic portals.
              </p>
              <p>
                Each bead carries a unique frequency based on its <span className="text-[#5D101D] font-semibold">Mukhi (faces)</span>, acting as a shield against negativity and a catalyst for spiritual awakening, mental clarity, and physiological balance.
              </p>
            </div>
            
            <div className="bg-white/40 backdrop-blur-md p-8 rounded-[3rem] border border-[#E6BE8A]/30 shadow-xl">
              <h3 className="text-[#5D101D] font-bold mb-4 flex items-center gap-2">
                <span className="text-[#B27D62]">✧</span> Spiritual Benefits
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <span className="text-[#8B0000]">♥</span> Shields the wearer from the "Evil Eye"
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#8B0000]">♥</span> Balances blood pressure and calms the heart
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#8B0000]">♥</span> Enhances concentration and mental fortitude
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#8B0000]">♥</span> Purifies the aura and attracts divine grace
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* PRODUCTS GRID */}
        <div className="max-w-7xl mx-auto px-6 pb-32">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#5D101D]">The Collection</h2>
              <p className="text-[#B27D62] text-sm italic">Authentic, Lab-Certified & Energised</p>
            </div>
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
              {products.length} Items
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5D101D]"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {products.map(product => (
                <div
                  key={product._id}
                  onClick={() => navigate(`/product/${product._id}`)}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                    
                    {/* Image Container */}
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={product.images?.[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#5D101D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Quick Badge */}
                      <div className="absolute top-6 left-6">
                        <span className="bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-bold tracking-widest text-[#5D101D] uppercase">
                          Certified Authentic
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 bg-white relative">
                      <h2 className="text-xl font-bold text-[#5D101D] mb-2 group-hover:text-[#8B0000] transition-colors">
                        {product.name}
                      </h2>
                      <p className="text-xs text-gray-500 italic line-clamp-1 mb-4">
                        {product.shortDescription}
                      </p>
                      
                      <div className="flex justify-between items-center border-t border-[#E6BE8A]/20 pt-4">
                        <span className="text-2xl font-bold text-[#8B0000]">
                          ₹{product.price.toLocaleString()}
                        </span>
                        <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B27D62] border-b border-[#B27D62] pb-1 group-hover:text-[#5D101D] group-hover:border-[#5D101D] transition-all">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && products.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 italic">No sacred beads found in this category currently.</p>
            </div>
          )}
        </div>

        {/* GUIDANCE FOOTER */}
        <section className="bg-[#5D101D] py-16 px-6 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl italic font-['Playfair_Display']">Need help choosing your Mukhi?</h3>
            <p className="opacity-80 leading-relaxed font-light italic">
              Every individual has a unique astrological blueprint. Our Vedic experts can guide you toward the specific Rudraksha that aligns with your Nakshatra and life goals.
            </p>
            <button className="mt-4 px-10 py-4 border border-[#E6BE8A] text-[#E6BE8A] rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#E6BE8A] hover:text-[#5D101D] transition-all">
              Consult a Vedic Expert
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Rudraksha;