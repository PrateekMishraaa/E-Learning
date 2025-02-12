import React from "react";
import Navbar from "../Components/Navbar";

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="relative bg-black min-h-screen py-12 px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-20 animate-pulse"></div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-4xl font-bold text-slate-200 mb-4">About Us</h1>
        <p className="text-lg text-slate-200 mb-8">
          Welcome to <span className="font-semibold">LearnHub</span>, your go-to platform for high-quality online learning.
          Our mission is to empower learners worldwide by providing access to expert-led courses in various fields.
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Expert Instructors</h2>
          <p className="text-gray-600">Learn from industry professionals with years of experience.</p>
        </div>
        
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Flexible Learning</h2>
          <p className="text-gray-600">Access courses anytime, anywhere, at your own pace.</p>
        </div>
        
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Career Growth</h2>
          <p className="text-gray-600">Enhance your skills and advance in your career with our certifications.</p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center mt-12 relative z-10">
        <h2 className="text-3xl font-bold text-slate-200">Join Us Today</h2>
        <p className="text-lg text-slate-200 mt-4 mb-6">
          Become a part of our growing community and take the next step in your learning journey.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
    </>
  );
};

export default About;
