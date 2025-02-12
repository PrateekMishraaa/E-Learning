import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="h-20 w-screen bg-gray-800">
      <div className="flex justify-between items-center px-20">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="h-16" />

        {/* Navigation Links */}
        <ul className="flex gap-10 text-white cursor-pointer">
          <a href="/about">
            <li>About</li>
          </a>
          <a href="/services">
            <li>Services</li>
          </a>
          <a href="/contact">
            <li>Contact us</li>
          </a>
        </ul>

        {/* Settings & Logout */}
        <div className="flex items-center gap-4">
          {/* Settings Button with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="h-10 w-24 rounded-3xl bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Settings
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md">
                <ul className="text-gray-800">
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => navigate("/edit-info")}
                  >
                    Edit Info
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="h-10 w-24 rounded-3xl bg-green-800 text-white hover:bg-black transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
