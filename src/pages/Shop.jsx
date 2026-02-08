import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

function Shop() {
  const { addToCart } = useCart();

  const product = {
    id: 1,
    name: "Divy Love Bracelet",
    originalPrice: 2499,
    price: 999,
    discount: "60% OFF",
    images: [
    "/images/shop/panch-mukhi-rudradsha-1.jpeg",
    "/images/shop/panch-mukhi-rudradsha-2.jpeg",
    "/images/shop/panch-mukhi-rudradsha-3.jpeg",

  ],
  };

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % product.images.length);

  const prevImage = () =>
    setCurrentImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="relative min-h-screen bg-[#FFFBF7] text-[#4A3728] pb-32 overflow-hidden selection:bg-[#5D101D] selection:text-white">
      
      {/* DIVINE BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FFD700]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#5D101D]/5 blur-[120px] rounded-full" />
      </div>

      {/* FLOATING HEARTS */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="absolute bottom-[-20px] text-[#E6BE8A]/40 animate-floatHeart opacity-0"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              fontSize: `${12 + Math.random() * 20}px`,
            }}
          >
            ♥
          </span>
        ))}
      </div>

      {/* ================= HERO SECTION ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-12 lg:pt-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* CAROUSEL WITH GLOW */}
          <div className="relative group">
            {/* Divine Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-radial-gradient from-[#FFD700]/10 to-transparent rounded-full blur-2xl animate-pulse" />
            
            <div className="relative animate-fadeInUp">
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#D4AF37] via-[#FFD700] to-[#E6BE8A] rounded-[2.5rem] blur opacity-20" />
              
              <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                <img
                  src={product.images[currentImage]}
                  alt={product.name}
                  className="w-full aspect-square object-cover transition-all duration-1000 ease-in-out transform hover:scale-105"
                />

                {/* Glass Controls */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-[#5D101D] w-12 h-12 rounded-full shadow-lg transition-all flex items-center justify-center text-2xl"
                >
                  ‹
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-[#5D101D] w-12 h-12 rounded-full shadow-lg transition-all flex items-center justify-center text-2xl"
                >
                  ›
                </button>

                {/* Progress Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                  {product.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`h-1.5 transition-all duration-500 rounded-full ${
                        currentImage === i ? "w-8 bg-[#5D101D]" : "w-2 bg-[#E6BE8A]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-center mt-4 text-xs tracking-widest uppercase text-[#8A6D5A] font-medium">
                ✨ Blessed & Energised by Vedic Principles ✨
              </p>
            </div>
          </div>

          {/* INFO SIDE */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full border border-[#B27D62]/30 text-[10px] tracking-[0.2em] uppercase text-[#B27D62] font-semibold">
                Divine Connection
              </span>
          <h1 className="text-5xl md:text-6xl font-bold italic text-[#5D101D] leading-tight font-['Noto_Serif_Devanagari']">
  दिव्य Love Bracelet
</h1>


            </div>

            <p className="text-xl italic text-gray-700 leading-relaxed font-light">
              "A sacred blend to attract divine love, heal the heart and create
              marriage yog."
            </p>

            {/* Price Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#FFF4EC] to-white p-6 border border-[#E6BE8A]/30">
              <div className="flex items-center gap-6">
                <span className="text-4xl font-bold text-[#8B0000]">₹999</span>
                <div className="flex flex-col">
                  <span className="text-lg line-through text-gray-400">₹2499</span>
                  <span className="text-[#5D101D] font-bold text-sm tracking-wide">
                    You Save 60% Today
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => addToCart(product)}
                className="group relative w-full py-5 rounded-full bg-[#5D101D] text-white text-xl font-semibold shadow-[0_10px_30px_rgba(93,16,29,0.3)] transition-all hover:translate-y-[-2px] active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                Claim Your Divine Love Bracelet
              </button>

              <div className="flex justify-center gap-8 text-xs font-bold tracking-widest uppercase text-[#B27D62]">
                <span className="flex items-center gap-2">✦ 7 Day Exchange</span>
                <span className="flex items-center gap-2">✦ Non-Returnable</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECTIONS ================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 mt-15 space-y-32">

        <section className="text-center max-w-2xl mx-auto">
          <div className="mb-8 flex justify-center text-[#E6BE8A]">✧ ✧ ✧</div>
          <p className="text-xl leading-relaxed text-gray-700 font-light italic">
            The Divy Love Bracelet is a powerful spiritual energy tool crafted to
            awaken divine love, restore emotional balance, and protect
            relationships from negative energies. This bracelet does not simply
            attract love—it aligns your heart with the right kind of love: pure,
            destined, stable, and spiritually protected.
          </p>
        </section>

        {/* Symbolism Card */}
        <section className="relative bg-white/60 backdrop-blur-xl p-8 rounded-[3rem] shadow-xl border border-white/80">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2  bg-[#5D101D] text-white px-8 py-2 rounded-full text-sm tracking-widest font-bold">
            THE SYMBOLISM
          </div>
          <h3 className="text-3xl font-['Playfair_Display'] text-center text-[#5D101D] mb-8 font-bold">
            Sacred Meaning & Energy
          </h3>
          <ul className="grid md:grid-cols-2 gap-8 text-lg">
            {[
              " Unconditional love, self-worth & emotional healing",
              "Passion, attraction & commitment energy",
              "Emotional stability, intuition & feminine energy",
              "Balance of mind, protection & karmic cleansing"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-[#B27D62] mt-1">✧</span>
                <span className="text-gray-800">{text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-center italic text-[#8A6D5A] border-t border-[#E6BE8A]/20 pt-5">
            Together, it symbolises divine union, emotional security and a destined partnership.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="space-y-10">
          <div className="text-center">
            <h3 className="text-4xl font-['Playfair_Display'] text-[#5D101D]  italic font-bold">
              Why Choose This Bracelet?
            </h3>
            <div className="w-24 h-px bg-[#E6BE8A] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h4 className="text-sm tracking-[0.2em] font-bold text-[#B27D62] uppercase">The Appeal</h4>
              <ul className="space-y-4">
                {[
                  "Helps release past heartbreaks & emotional baggage",
                  "Attracts healthy, respectful and soul-aligned relationships",
                  "Strengthens marriage yog for those ready to settle",
                  "Protects love life from evil eye, jealousy & outside interference",
                  "	Brings a sense of calm, self-love and emotional grounding"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg border-b border-[#E6BE8A]/10 pb-2">
                    <span className="text-[#8B0000]">♥</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-sm tracking-[0.2em] font-bold text-[#B27D62] uppercase">The Healing</h4>
              <ul className="space-y-4">
                {[
                  "Opens the heart chakra to receive and give love freelyy",
                  "Reduces emotional overthinking, anxiety & fear of abandonment",
                  "Enhances passion while maintaining emotional maturity",
                  "Supports reconciliation and deeper bonding in existing relationships",
                  "Creates a protective aura around your love life"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg border-b border-[#E6BE8A]/10 pb-2">
                    <span className="text-[#8B0000]">♥</span> {item}
                  </li>
                ))}
              </ul>
               <p className="mt-8 text-center italic text-[#8A6D5A] border-t border-[#E6BE8A]/20 ">
           Ideal for those manifesting a dream relationship or divine marriage.


          </p>
            </div>
          </div>
        </section>

        {/* Ritual Section */}
        <section className="bg-gradient-to-br from-[#5D101D] to-[#3D0A13] text-[#FFFBF7] p-8 rounded-[4rem] text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10" />
          <h3 className="text-4xl font-['Playfair_Display'] mb-10 italic relative z-10">
            When and How to Wear
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-lg relative z-10 font-light italic">
            <div className="space-y-4 p-6 bg-white/5 rounded-3xl border border-white/10">
              <p> Abhimantrit and Energised as per astrology and spiritual principles</p>
              <p>Best worn on <span className="text-[#E6BE8A] font-bold">Friday  (Shukravar)</span>  for Venus energy </p>
            </div>
            <div className="space-y-4 p-6 bg-white/5 rounded-3xl border border-white/10">
              <p>Hold the bracelet, set your intention</p>
              <p>Wear on the <span className="text-[#E6BE8A] font-bold underline underline-offset-8">Left Hand</span>  to attract love energies inward</p>
            </div>
          </div>
          <p className="mt-6 opacity-70 tracking-widest uppercase text-xs">Wear daily for divine alignment</p>
        </section>

        {/* Final CTA */}
        <section className="text-center space-y-8">
          <h3 className="text-3xl font-['Playfair_Display'] text-[#5D101D] font-bold">Who Is This Perfect For?</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Those healing from past heartbreaks or emotional trauma", "Couples wanting to strengthen bonding & emotional trust", 
              "People facing delays in marriage due to emotional blocks", "Singles manifesting divine love or marriage","Anyone seeking emotional stability and protection in love"
            ].map((tag, i) => (
              <span key={i} className="px-6 py-2 rounded-full border border-[#B27D62]/30 text-[#B27D62] text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </section>

        <footer className="text-center space-y-6  border-t border-[#E6BE8A]/40">
          <p className="text-4xl font-['Playfair_Display'] italic text-[#5D101D] font-bold">
            Love flows where energy is aligned.
          </p>
          <p className="text-gray-500 uppercase tracking-[0.3em] text-[15px] font-bold">
            
The Divy Love Bracelet works best when paired with clear intention, self-love and faith. Love flows where energy is aligned—and this bracelet helps you align beautifully.
          </p>
        </footer>
      </div>

      {/* MOBILE STICKY BUTTON */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-[#E6BE8A]/30 p-4 lg:hidden z-50">
        <button
          onClick={() => addToCart(product)}
          className="w-full py-4 rounded-full bg-[#5D101D] text-white font-bold shadow-lg flex justify-between px-8 items-center"
        >
          <span>Claim Yours Now</span>
          <span className="text-lg">₹999</span>
        </button>
      </div>
    </div>
  );
}

export default Shop;