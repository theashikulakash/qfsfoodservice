import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

export const metadata = { title: 'Our Story — Spice & Leaf' }

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#FAF7F2] pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8B2500] mb-4 block">About Us</span>
          <h1 className="font-display text-5xl font-bold text-[#1A1007] mb-8 leading-tight">
            Where Every Spice<br />Tells a Story
          </h1>
          <img
            src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=900&auto=format&fit=crop&q=80"
            alt="Our farm"
            className="w-full h-72 object-cover rounded-3xl mb-10 shadow-lg"
          />
          <div className="prose prose-lg text-[#1A1007]/70 max-w-none space-y-6">
            <p>
              Spice &amp; Leaf was born from a simple conviction: the spices you cook with should be as fresh, pure, and flavorful as the day they were harvested. For over 15 years, we've worked hand-in-hand with small-scale family farmers across South Asia and Latin America.
            </p>
            <p>
              Our turmeric comes from the fertile hills of Tamil Nadu, where generations of farmers have cultivated this golden root using age-old techniques. Our coriander is sourced from the aromatic plains of Rajasthan, and our fiery red chili from the sun-drenched fields of Guntur.
            </p>
            <p>
              We believe in fair prices for farmers, sustainable agriculture, and the kind of quality that you can taste in the first pinch. No fillers, no additives — just pure, powerful flavor.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}