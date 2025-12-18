import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Your Shopping Cart</h2>

        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
            <p className="text-gray-500 text-lg mb-4">Your cart is empty.</p>
            <Link
              to="/"
              className="text-blue-600 font-semibold hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Cart Items */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {cart.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-center p-4 ${index !== cart.length - 1 ? 'border-b' : ''}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="ml-4 flex-grow">
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-500">Qty: {item.qty}</p>
                    <p className="text-blue-600 font-bold">₹{item.price * item.qty}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 font-medium px-4 py-2"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Order Summary</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Items ({cart.reduce((sum, i) => sum + i.qty, 0)})</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="text-green-600">Free</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between text-xl font-bold text-gray-900">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="block w-full mt-6 bg-green-600 text-white py-4 rounded-xl font-bold text-center hover:bg-green-700 transition shadow-lg"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
