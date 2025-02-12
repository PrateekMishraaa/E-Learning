import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import Loader from "./Loader"; // Import Loader component

const SignUp = () => {
  const navigate = useNavigate();
  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);

  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const [loading, setLoading] = useState(false); // Loading state

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.Password !== formData.ConfirmPassword) {
      notifyError("Passwords do not match!");
      return;
    }

    setLoading(true); // Show loader

    try {
      const response = await axios.post("http://localhost:5000/api/signup", formData, {
        headers: { "Content-Type": "application/json" },
      });

      notifySuccess(response.data.message || "Signup successful!");

      // Delay navigation slightly to allow user to see success message
      setTimeout(() => {
        navigate('/login');
      }, 8000);

      setFormData({
        FirstName: "",
        LastName: "",
        PhoneNumber: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
      });

    } catch (error) {
      console.error("Signup Error:", error);
      notifyError(error.response?.data?.message || "Failed to sign up. Please try again.");
    }

    setLoading(false); // Hide loader
  };

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center bg-black">
        <div className="w-[40%] p-10 bg-purple-500 rounded-2xl border-2 border-black">
          <p className="text-2xl text-white font-bold mb-4 text-center">Sign Up</p>

          {loading ? ( 
            <div className="flex justify-center">
              <Loader />
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="FirstName"
                value={formData.FirstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full p-2 bg-white font-semibold rounded-md border-2 focus:outline-none"
                required
              />
              <input
                type="text"
                name="LastName"
                value={formData.LastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full p-2 bg-white font-semibold rounded-md border-2 focus:outline-none mt-4"
                required
              />
              <input
                type="text"
                name="PhoneNumber"
                value={formData.PhoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full bg-white p-2 rounded-md font-semibold border-2 focus:outline-none mt-4"
                required
              />
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2 bg-white rounded-md border-2 font-semibold focus:outline-none mt-4"
                required
              />
              <input
                type="password"
                name="Password"
                value={formData.Password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full p-2 rounded-md bg-white border-2 font-semibold focus:outline-none mt-4"
                required
              />
              <input
                type="password"
                name="ConfirmPassword"
                value={formData.ConfirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full p-2 bg-white rounded-md border-2 font-semibold focus:outline-none mt-4"
                required
              />
              <button
                type="submit"
                className="h-10 w-full rounded-md bg-white text-black font-bold mt-5 hover:bg-gray-200 transition duration-200"
                disabled={loading} // Disable button while loading
              >
                {loading ? "Registering..." : "Register"}
              </button>
              <p className="text-white text-center mt-4">
                Already have an account?{" "}
                <a href="/login" className="text-blue-400 hover:underline">
                  Login
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignUp;
