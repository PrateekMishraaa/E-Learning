import React from "react";
import Navbar from "../Components/Navbar";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="relative bg-black min-h-screen py-12 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 to-teal-500 opacity-20 animate-pulse"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl font-bold text-slate-200 mb-4">Our Services</h1>
          <p className="text-lg text-slate-200 mb-8">
            At <span className="font-semibold">LearnHub</span>, we offer a variety of services to enhance your learning experience.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Live Classes</h2>
            <p className="text-gray-600">Join interactive sessions with industry experts in real time.</p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">On-Demand Courses</h2>
            <p className="text-gray-600">Access a vast library of courses at your own pace.</p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Certification Programs</h2>
            <p className="text-gray-600">Earn recognized certificates to boost your career.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mt-12 relative z-10">
          <h2 className="text-3xl font-bold text-slate-200">Get Started with Us</h2>
          <p className="text-lg text-slate-200 mt-4 mb-6">
            Enroll today and unlock new opportunities for learning and growth.
          </p>
          {/* <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Explore Courses
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Services;