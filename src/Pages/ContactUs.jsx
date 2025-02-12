import React from "react";
import Navbar from "../Components/Navbar";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="relative bg-black min-h-screen py-12 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 opacity-20 animate-pulse"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl font-bold text-slate-200 mb-4">Contact Us</h1>
          <p className="text-lg text-slate-200 mb-8">
            Have questions? Get in touch with us and we’ll be happy to help!
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-6 shadow-md rounded-lg relative z-10">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">Name</label>
              <input type="text" className="w-full mt-2 p-3 border rounded-lg" placeholder="Your Name" required />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input type="email" className="w-full mt-2 p-3 border rounded-lg" placeholder="Your Email" required />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Message</label>
              <textarea className="w-full mt-2 p-3 border rounded-lg" rows="4" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
