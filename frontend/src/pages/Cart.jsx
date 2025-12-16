import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <>
      <Navbar />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

        {cart.length === 0 && <p>Your cart is empty.</p>}

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-3"
          >
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p>₹{item.price} × {item.qty}</p>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
