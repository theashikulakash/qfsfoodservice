import Navbar from '../components/navbar'
import Footer from '../components/footer'
// import Link from 'next/link'

const RECIPES = [
  {
    id: 1,
    title: "Organic Turmeric Golden Latte",
    time: "10 mins",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800&auto=format&fit=crop&q=80",
    tags: ["Beverage", "Healthy"]
  },
  {
    id: 2,
    title: "Spiced Roasted Chickpeas",
    time: "30 mins",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=800&auto=format&fit=crop&q=80",
    tags: ["Snack", "Vegan"]
  },
  {
    id: 3,
    title: "Authentic Red Chili Curry",
    time: "45 mins",
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1455619411437-8f3590f58bbd?w=800&auto=format&fit=crop&q=80",
    tags: ["Main Course", "Spicy"]
  }
];

export default function RecipesPage() {
  return (
    <>
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8B2500] mb-4 block">
            The Spice Kitchen
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-black text-[#1A1007] mb-6">
            Our Favorite Recipes
          </h1>
          <p className="text-[#1A1007]/60 max-w-2xl mx-auto text-lg">
            Discover how to transform your everyday meals into extraordinary culinary experiences using our hand-picked organic spices.
          </p>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* daisyUI Tabs for Filtering (Visual only) */}
          <div className="tabs tabs-boxed bg-[#FAF7F2] w-fit mx-auto mb-12 flex justify-center">
            <a className="tab tab-active !bg-[#8B2500] !text-white">All</a> 
            <a className="tab">Breakfast</a> 
            <a className="tab">Main Course</a>
            <a className="tab">Desserts</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RECIPES.map((recipe) => (
              <div key={recipe.id} className="card bg-base-100 shadow-xl border border-[#FAF7F2] hover:shadow-2xl transition-shadow duration-300">
                <figure className="relative h-64">
                  <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {recipe.tags.map(tag => (
                      <div key={tag} className="badge bg-[#8B2500] text-white border-none text-[10px] font-bold uppercase tracking-wider">
                        {tag}
                      </div>
                    ))}
                  </div>
                </figure>
                <div className="card-body bg-white rounded-b-2xl">
                  <div className="flex justify-between items-center text-xs text-[#1A1007]/50 font-medium mb-2">
                    <span className="flex items-center gap-1">
                      ⏱️ {recipe.time}
                    </span>
                    <span className="flex items-center gap-1">
                      🔥 {recipe.difficulty}
                    </span>
                  </div>
                  <h2 className="card-title font-display text-[#1A1007] text-xl mb-4 leading-tight">
                    {recipe.title}
                  </h2>
                  <div className="card-actions justify-end mt-auto">
                    <button className="btn btn-ghost text-[#8B2500] hover:bg-[#FAF7F2] rounded-full normal-case">
                      View Recipe
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 bg-[#3D5A3E] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Want more kitchen inspiration?</h2>
          <p className="text-white/80 mb-8">Join our Spice Club for weekly recipes and exclusive access to new seasonal blends.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="text" 
              placeholder="Your email address" 
              className="input input-bordered w-full max-w-xs rounded-full text-[#1A1007]" 
            />
            <button className="btn border-none bg-[#8B2500] hover:bg-[#C4470A] text-white rounded-full px-8">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}