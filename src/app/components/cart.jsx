'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Turmeric Powder', price: 12.00, qty: 1 },
    { id: 3, name: 'Red Chili Powder', price: 11.00, qty: 2 },
  ])

  const updateQty = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    )
  }

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className="min-h-screen bg-[#FAF7F2] pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl font-bold text-[#1A1007] mb-10">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-[#1A1007]/50 mb-6">Your cart is empty.</p>
            <Link href="/" className="btn bg-[#8B2500] text-white border-none hover:bg-[#C4470A] rounded-full px-8">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-4 mb-8">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl p-5 flex items-center justify-between shadow-sm border border-[#1A1007]/5">
                  <div>
                    <h3 className="font-semibold text-[#1A1007]">{item.name}</h3>
                    <p className="text-sm text-[#1A1007]/50">${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-[#FAF7F2] rounded-full px-3 py-1">
                      <button onClick={() => updateQty(item.id, -1)} className="text-[#8B2500] font-bold text-lg leading-none">−</button>
                      <span className="text-sm font-medium w-4 text-center">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="text-[#8B2500] font-bold text-lg leading-none">+</button>
                    </div>
                    <span className="font-display font-bold text-[#1A1007] w-16 text-right">${(item.price * item.qty).toFixed(2)}</span>
                    <button onClick={() => removeItem(item.id)} className="text-[#1A1007]/30 hover:text-[#8B2500] transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-white rounded-2xl p-6 border border-[#1A1007]/5 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#1A1007]/60">Subtotal</span>
                <span className="font-medium">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[#1A1007]/60">Shipping</span>
                <span className="font-medium text-[#3D5A3E]">Free</span>
              </div>
              <div className="border-t border-[#1A1007]/10 pt-4 flex justify-between items-center mb-6">
                <span className="font-display text-xl font-bold text-[#1A1007]">Total</span>
                <span className="font-display text-2xl font-bold text-[#8B2500]">${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-[#8B2500] text-white py-3 rounded-full font-semibold hover:bg-[#C4470A] transition-colors">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}