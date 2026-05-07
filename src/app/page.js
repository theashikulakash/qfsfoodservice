import Navbar from './components/navbar'
import Footer from './components/footer'
import AllProducts from './shop/page'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FAF7F2]">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1600&auto=format&fit=crop&q=80"
            alt="Spices background"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/80 to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#8B2500] mb-6 animate-fade-up">
              Farm to Table
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-[#1A1007] leading-[1.05] mb-6 animate-fade-up-delay-1">
              Authentic<br />
              Organic<br />
              Spices
            </h1>
            <p className="text-[#1A1007]/60 text-base md:text-lg leading-relaxed max-w-sm mb-8 animate-fade-up-delay-2">
              Elevate your cooking with our premium, hand-picked organic spice powders. Sourced directly from sustainable farms to your pantry.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <Link
                href="#products"
                className="bg-[#005F02] text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-[#FF4400] transition-colors shadow-lg shadow-[#8B2500]/20"
              >
                Shop Now
              </Link>
              <Link
                href="/shop"
                className="border border-[#1A1007]/20 text-[#1A1007] px-7 py-3 rounded-full font-semibold text-sm hover:border-[#FF4400] hover:text-[#FF4400] transition-colors"
              >
                Explore Products
              </Link>
            </div>
          </div>

          {/* Hero right — floating spice cards */}
          <div className="hidden md:flex flex-col gap-4 items-end">
            {[
              { name: 'Turmeric Powder', color: '#D4A017', img: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=300&auto=format&fit=crop&q=80' },
              { name: 'Coriander Powder', color: '#A67C52', img: 'https://images.unsplash.com/photo-1599909631448-50eb62d68b21?w=300&auto=format&fit=crop&q=80' },
              { name: 'Red Chili Powder', color: '#C4470A', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&auto=format&fit=crop&q=80' },
            ].map((spice, i) => (
              <div
                key={spice.name}
                className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-md border border-white/60"
                style={{ animationDelay: `${i * 0.15}s`, transform: `translateX(${i * 20}px)` }}
              >
                <img src={spice.img} alt={spice.name} className="w-12 h-12 rounded-xl object-cover" />
                <div>
                  <p className="text-xs font-semibold text-[#1A1007]">{spice.name}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <div className="w-2 h-2 rounded-full" style={{ background: spice.color }} />
                    <span className="text-xs text-[#1A1007]/50">100% Organic</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#1A1007]/30 animate-bounce">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#005F02] py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { icon: '🌿', text: '100% Organic' },
            { icon: '🚜', text: 'Farm Sourced' },
            { icon: '✅', text: 'Fair Trade' },
            { icon: '📦', text: 'Free Shipping $50+' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-white/80">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <AllProducts />

      {/* Story section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=800&auto=format&fit=crop&q=80"
              alt="Our farm"
              className="rounded-3xl w-full h-96 object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#8B2500] text-white rounded-2xl p-5 shadow-xl">
              <p className="font-display text-3xl font-bold">15+</p>
              <p className="text-xs text-white/70 mt-1">Years of<br />Expertise</p>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8B2500] mb-4 block">Our Story</span>
            <h2 className="font-display text-4xl font-bold text-[#1A1007] mb-6 leading-tight">
              Rooted in Tradition, <br />Driven by Quality
            </h2>
            <p className="text-[#1A1007]/60 leading-relaxed mb-4">
              For over 15 years, Spice &amp; Leaf has been working directly with small-scale farmers across South Asia and Latin America to bring you the most authentic, richly flavored spices on the market.
            </p>
            <p className="text-[#1A1007]/60 leading-relaxed mb-8">
              Every batch is hand-selected, sun-dried, and ground to order — preserving the essential oils that make the difference between a good dish and an unforgettable one.
            </p>
            <Link
              href="/company/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#8B2500] hover:gap-4 transition-all"
            >
              Read Our Story
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}