import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = [
    {
      id: 1,
      title: "Classic Leather Wallet",
      price: 1299,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Wireless Bluetooth Earbuds",
      price: 2499,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Cotton Casual T-Shirt",
      price: 799,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Running Sports Shoes",
      price: 3299,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      title: "Smart Fitness Watch",
      price: 4999,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      title: "Canvas Backpack",
      price: 1899,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Welcome to Our Store
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Find everything you need at amazing prices. Quality products delivered to your doorstep.
          </p>
          <a href="#products" className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg inline-block">
            Start Shopping
          </a>
        </div>
      </div>

      {/* Product Grid */}
      <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              title={p.title}
              price={p.price}
              image={p.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
