import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

export default function Checkout() {
    const { cart } = useCart();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        address: "",
        city: "",
        phone: "",
    });
    const [orderPlaced, setOrderPlaced] = useState(false);

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    const handlePlaceOrder = () => {
        if (!form.name || !form.address || !form.city || !form.phone) {
            alert("Please fill all fields");
            return;
        }
        setOrderPlaced(true);
    };

    if (cart.length === 0 && !orderPlaced) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="max-w-4xl mx-auto px-4 py-12 text-center">
                    <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                    <button
                        onClick={() => navigate("/")}
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        Go Shopping
                    </button>
                </div>
            </div>
        );
    }

    if (orderPlaced) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="max-w-2xl mx-auto px-4 py-16 text-center">
                    <div className="bg-white rounded-2xl p-12 shadow-lg">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Placed!</h2>
                        <p className="text-gray-500 mb-6">Thank you for shopping with us, {form.name}!</p>
                        <p className="text-gray-600 mb-8">
                            Your order will be delivered to:<br />
                            <strong>{form.address}, {form.city}</strong>
                        </p>
                        <button
                            onClick={() => navigate("/")}
                            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold mb-8">Checkout</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Delivery Details */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold mb-4">Delivery Details</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                <input
                                    placeholder="123 Main Street"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    value={form.address}
                                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                <input
                                    placeholder="Mumbai"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    value={form.city}
                                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    placeholder="9876543210"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
                        <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                        <div className="space-y-3 mb-4">
                            {cart.map((item) => (
                                <div key={item.id} className="flex justify-between text-gray-600">
                                    <span>{item.title} × {item.qty}</span>
                                    <span>₹{item.price * item.qty}</span>
                                </div>
                            ))}
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between text-xl font-bold text-gray-900 mb-6">
                            <span>Total</span>
                            <span>₹{total}</span>
                        </div>

                        <button
                            onClick={handlePlaceOrder}
                            className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition shadow-lg"
                        >
                            Place Order
                        </button>
                        <p className="text-xs text-gray-500 text-center mt-3">
                            Pay on Delivery (COD)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
