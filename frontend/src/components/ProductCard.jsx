import { useCart } from "../context/CartContext";

export default function ProductCard({ id, title, price }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <img
        src={`https://picsum.photos/seed/${id}/300/200`}
        alt={title}
        className="h-40 w-full object-cover rounded mb-3"
      />

      <h2 className="font-semibold text-lg">{title}</h2>
      <p className="text-gray-600">₹{price}</p>

      <button
        onClick={() => addToCart({ id, title, price })}
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
