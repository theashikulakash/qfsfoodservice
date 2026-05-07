import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

export const metadata = { title: 'Sourcing — Spice & Leaf' }

export default function SourcingPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#FAF7F2] pt-28 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8B2500] mb-4 block">Our Sourcing</span>
          <h1 className="font-display text-5xl font-bold text-[#1A1007] mb-6 leading-tight">
            Farm to Table,<br />Traced &amp; Trusted
          </h1>
          <p className="text-[#1A1007]/60 text-lg mb-16 max-w-xl">
            Every spice we sell is traceable to a specific farm, region, and harvest season. Here's how we do it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Farm Selection', desc: 'We visit and vet every farm personally, ensuring fair labor practices and sustainable growing methods.' },
              { step: '02', title: 'Harvest & Dry', desc: 'Spices are harvested at peak potency, then sun-dried using traditional methods to lock in flavor and aroma.' },
              { step: '03', title: 'Ground Fresh', desc: 'We grind to order in small batches, ensuring the freshest possible product reaches your kitchen.' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-3xl p-8 border border-[#1A1007]/5 shadow-sm">
                <p className="font-display text-4xl font-black text-[#8B2500]/20 mb-4">{item.step}</p>
                <h3 className="font-display text-lg font-bold text-[#1A1007] mb-3">{item.title}</h3>
                <p className="text-sm text-[#1A1007]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}