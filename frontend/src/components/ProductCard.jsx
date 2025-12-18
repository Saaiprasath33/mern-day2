import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function ProductCard({ id, title, price, image }) {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!user) {
      alert("Please login to add items to cart.");
      navigate("/login");
      return;
    }
    addToCart({ id, title, price, image });
    alert(`${title} added to cart!`);
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      <div className="relative overflow-hidden rounded-xl mb-4 aspect-square bg-gray-100">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="space-y-2">
        <h2 className="font-bold text-lg text-gray-800 line-clamp-1">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold text-blue-600">₹{price}</p>
          <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">In Stock</span>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
