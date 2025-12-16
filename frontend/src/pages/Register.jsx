import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      alert("Registration successful");
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4">Register</h2>

          <input
            placeholder="Name"
            className="w-full mb-3 p-2 border border-blue-500"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            placeholder="Email"
            className="w-full mb-3 p-2 border border-blue-500"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 p-2 border border-blue-500"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button
            onClick={handleRegister}
            className="bg-black text-white w-full py-2"
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}
