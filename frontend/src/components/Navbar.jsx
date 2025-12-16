import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Ecom-SP</h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/cart" className="hover:text-gray-300">Cart</Link>
        <Link
          to="/login"
          className="bg-white text-black px-4 py-1 rounded hover:bg-gray-200"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
