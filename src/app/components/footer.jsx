import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#005F02] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h2 className="font-display text-2xl font-bold mb-3">Spice &amp; Leaf</h2>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Authentic, organic spices sourced directly from sustainable farms. Bringing the rich flavors of the earth directly to your pantry.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/80 mb-5">Navigation</h3>
          <ul className="flex flex-col gap-3">
            {[
              { label: 'Privacy Policy', href: '/company/privacy' },
              { label: 'Terms of Service', href: '/company/terms' },
              { label: 'Shipping & Returns', href: '/company/contact' },
              { label: 'Wholesale', href: '/company/contact' },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/80 mb-5">Contact</h3>
          <ul className="flex flex-col gap-3">
            <li className="text-sm text-white/70">qfsfoodservice@gmail.com</li>
            <li className="text-sm text-white/70">+880 1354 018712</li>
            <li className="text-sm text-white/70">+880 1786 130314</li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center">
        <p className="text-xs text-white/40">© 2024 Spice &amp; Leaf Organic Artisans. All rights reserved.</p>
      </div>
    </footer>
  )
}