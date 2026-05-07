'use client'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Turmeric Powder',
    price: 12.00,
    rating: 4.9,
    badge: 'Organic',
    badgeColor: 'bg-[#005F02] text-white',
    description: 'Vibrant and golden, known for its earthy flavor and health benefits.',
    image: 'https://www.gaiaherbs.com/cdn/shop/articles/turmeric_4_916b159e-d3ab-46fd-aaa0-bca2709beb4d-6951002.jpg?v=1771958771',
    color: '#D4A017',
  },
  {
    id: 2,
    name: 'Coriander Powder',
    price: 10.00,
    rating: 4.8,
    badge: 'Organic',
    badgeColor: 'bg-[#005F02] text-white',
    description: 'Freshly ground seeds providing a citrusy, nutty aroma to every dish.',
    image: 'https://organikriti.com/cdn/shop/products/c2ccc797814b330605ae0a263c25c8ab.jpg?v=1703332511&width=1946',
    color: '#A67C52',
  },
  {
    id: 3,
    name: 'Red Chili Powder',
    price: 11.00,
    rating: 4.9,
    badge: 'Organic',
    badgeColor: 'bg-[#005F02] text-white',
    description: 'Bold and spicy, perfect for adding a kick of heat and rich color.',
    image: 'https://t4.ftcdn.net/jpg/11/94/63/91/360_F_1194639145_xEDxXf1vXTnp1KottpiJnTiFsmrhw3ze.jpg',
    color: '#C4470A',
  },
]

export default function AllProducts() {
  const [cart, setCart] = useState([])
  const [added, setAdded] = useState(null)

  const addToCart = (product) => {
    setCart((prev) => [...prev, product])
    setAdded(product.id)
    setTimeout(() => setAdded(null), 1500)
  }

  return (
    <section id="products" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1007] mb-4">
            Our Premium Spices
          </h2>
          <p className="text-[#1A1007]/50 text-base max-w-md mx-auto">
            Discover the foundational flavors of our organic collection.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card bg-white rounded-2xl overflow-hidden border border-[#1A1007]/5 shadow-sm"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${product.badgeColor}`}>
                  {product.badge}
                </span>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-lg font-semibold text-[#1A1007]">{product.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-[#D4A017] font-medium">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {product.rating}
                  </div>
                </div>
                <p className="text-sm text-[#1A1007]/55 mb-6 leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-bold text-[#1A1007]">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      added === product.id
                        ? 'bg-[#005F02] text-white scale-95'
                        : 'bg-[#FF4400]/90 text-white hover:bg-[#FF4400] hover:scale-105'
                    }`}
                  >
                    {added === product.id ? (
                      <>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Added!
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13" />
                        </svg>
                        Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}