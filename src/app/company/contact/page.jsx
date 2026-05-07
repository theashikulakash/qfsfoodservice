import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

export const metadata = { title: 'Contact — Spice & Leaf' }

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#FAF7F2] pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8B2500] mb-4 block">Get in Touch</span>
          <h1 className="font-display text-5xl font-bold text-[#1A1007] mb-4">Contact Us</h1>
          <p className="text-[#1A1007]/60 mb-12">Have a question about an order, wholesale inquiry, or just want to say hello? We'd love to hear from you.</p>

          <div className="bg-white rounded-3xl p-8 border border-[#1A1007]/5 shadow-sm space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-[#1A1007]/50 mb-2 uppercase tracking-wider">First Name</label>
                <input type="text" className="w-full border border-[#1A1007]/10 rounded-xl px-4 py-3 text-sm bg-[#FAF7F2] focus:outline-none focus:border-[#8B2500] transition-colors" placeholder="Jane" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1A1007]/50 mb-2 uppercase tracking-wider">Last Name</label>
                <input type="text" className="w-full border border-[#1A1007]/10 rounded-xl px-4 py-3 text-sm bg-[#FAF7F2] focus:outline-none focus:border-[#8B2500] transition-colors" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1A1007]/50 mb-2 uppercase tracking-wider">Email</label>
              <input type="email" className="w-full border border-[#1A1007]/10 rounded-xl px-4 py-3 text-sm bg-[#FAF7F2] focus:outline-none focus:border-[#8B2500] transition-colors" placeholder="jane@example.com" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1A1007]/50 mb-2 uppercase tracking-wider">Message</label>
              <textarea rows={5} className="w-full border border-[#1A1007]/10 rounded-xl px-4 py-3 text-sm bg-[#FAF7F2] focus:outline-none focus:border-[#8B2500] transition-colors resize-none" placeholder="Your message..." />
            </div>
            <button className="w-full bg-[#8B2500] text-white py-3 rounded-full font-semibold hover:bg-[#C4470A] transition-colors">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}