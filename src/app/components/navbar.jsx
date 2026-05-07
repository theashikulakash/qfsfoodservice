'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#8B2500]/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="font-display text-xl font-bold text-[#FF4400] hover:text-[#005F02] tracking-tight">
          QUALITY FOOD SERVICE
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Shop', href: '/shop' },
            { label: 'Sourcing', href: '/company/sourcing' },
            { label: 'Recipes', href: '/recipies' },
            { label: 'Our Story', href: '/company/about' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#1A1007]/70 hover:text-[#8B2500] transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative group">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#1A1007]/70 group-hover:text-[#8B2500] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13" />
            </svg>
          </Link>
          <Link href="/user" className="relative group">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#1A1007]/70 group-hover:text-[#8B2500] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
          {/* Mobile hamburger */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#1A1007]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-t border-[#8B2500]/10 px-6 py-4 flex flex-col gap-4">
          {[
            { label: 'Shop', href: '/shop' },
            { label: 'Sourcing', href: '/company/sourcing' },
            { label: 'Recipes', href: '/recipies' },
            { label: 'Our Story', href: '/company/about' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[#1A1007]/70 hover:text-[#8B2500] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}