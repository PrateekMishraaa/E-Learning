import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import Navbar from "../Components/Navbar";

const EditInfo = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState(null);
    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
        PhoneNumber: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
    });

    // ✅ Fetch user data when component loads
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUserId(decoded.id);

                // Fetch user details
                axios.get(`https://e-learningbackend.onrender.com/api/user/${decoded.id}`)
                    .then(response => {
                        setFormData({
                            FirstName: response.data.FirstName || "",
                            LastName: response.data.LastName || "",
                            PhoneNumber: response.data.PhoneNumber || "",
                            Email: response.data.Email || "",
                            Password: "", 
                            ConfirmPassword: ""
                        });
                    })
                    .catch(error => console.error("Error fetching user data:", error));
            } catch (error) {
                console.error("Invalid Token:", error);
            }
        }
    }, []);

    // ✅ Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ✅ Toast notifications
    const notifySuccess = (msg) => toast.success(msg);
    const notifyError = (msg) => toast.error(msg);

    // ✅ Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.Password && formData.Password !== formData.ConfirmPassword) {
            notifyError("Passwords do not match!");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.put(
                `http://localhost:5000/api/edit/${userId}`,
                formData,
                { headers: { "Content-Type": "application/json" } }
            );

            notifySuccess(response.data.message || "Profile updated successfully!");

            setTimeout(() => {
                navigate("/profile");
            }, 3000);
        } catch (error) {
            console.error("Update Error:", error);
            notifyError(error.response?.data?.message || "Failed to update profile.");
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
                <h2 className="text-2xl font-semibold text-center text-gray-700">Edit Profile</h2>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <label className="block text-gray-700">First Name</label>
                        <input
                            type="text"
                            name="FirstName"
                            value={formData.FirstName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Last Name</label>
                        <input
                            type="text"
                            name="LastName"
                            value={formData.LastName}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            name="PhoneNumber"
                            value={formData.PhoneNumber}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="Email"
                            value={formData.Email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">New Password</label>
                        <input
                            type="password"
                            name="Password"
                            value={formData.Password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            name="ConfirmPassword"
                            value={formData.ConfirmPassword}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                        disabled={loading}
                    >
                        {loading ? "Updating..." : "Save Changes"}
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default EditInfo;
