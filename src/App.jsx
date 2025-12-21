function App() {
  return (
    <div className="min-h-screen bg-[#FFF9F4] text-[#3A2A1D] px-4 md:px-12 lg:px-20 py-16">
      
      <h1 className="font-['Playfair_Display'] text-5xl leading-tight mb-6">
        Astro Vaastu Savvy
      </h1>

      <p className="font-['Poppins'] text-lg mb-8 max-w-xl">
        Redesign your life and redefine its path.
      </p>

      <div className="flex gap-4 mb-12">
        <button className="bg-[#F6A25D] text-white px-8 py-3 rounded-full shadow-md hover:opacity-90 transition">
          Book Consultation
        </button>

        <button className="border border-[#F6A25D] text-[#F6A25D] px-8 py-3 rounded-full hover:bg-[#F6A25D] hover:text-white transition">
          Explore Services
        </button>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md">
        <h3 className="font-['Playfair_Display'] text-2xl mb-2">
          Astro Vastu Consultation
        </h3>
        <p className="font-['Poppins']">
          Harmonize your space with modern scientific vastu principles.
        </p>
      </div>

    </div>
  );
}

export default App;
