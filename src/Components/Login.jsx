import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./Loader";

const Login = () => {
  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true); // Show loader when submitting

    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, // Ensure cookies are sent
        }
      );

      console.log("Login successful:", response.data);
      notifySuccess(response.data.message || "Login successful!");

      // Store token in localStorage
      localStorage.setItem("authToken", response.data.token);

      // Redirect to homepage after a short delay
      setTimeout(() => {
        navigate("/");
      }, 1500);

      // Clear input fields after successful login
      setFormData({ Email: "", Password: "" });
    } catch (error) {
      console.error("Login error:", error);
      setError(error.response?.data?.message || "Error while logging in");
      notifyError(error.response?.data?.message || "Failed to login. Please try again.");
    }

    setLoading(false); // Hide loader after request completes
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black">
      <div className="w-[40%] p-10 bg-purple-500 rounded-2xl border-2 border-black">
        <p className="text-2xl text-white font-bold text-center">Login</p>

        {error && <p className="text-red-500 text-center font-semibold mt-2">{error}</p>}

        {loading ? (
          <div className="flex justify-center mt-5">
            <Loader />
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 bg-white rounded-md border-2 font-semibold focus:outline-none mt-5"
              required
            />
            <input
              type="password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-2 rounded-md bg-white border-2 font-semibold focus:outline-none mt-5"
              required
            />
            <button
              type="submit"
              className="h-10 w-full rounded-md bg-white text-black font-bold mt-5 hover:bg-gray-200 transition duration-200"
              disabled={loading} // Disable button while loading
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <p className="text-white text-center mt-4">
              Don’t have an account?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="text-blue-400 hover:underline cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          </form>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
