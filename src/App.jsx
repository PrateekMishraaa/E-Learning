import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import HomePage from "./Pages/HomePage";
import ProtectedRoute from "./Components/ProtectedRoute";
import EditInfo from "./Pages/EditInfo";
import About from "./Pages/About";
import Services from "./Pages/Services";
import ContactUs from "./Pages/ContactUs";

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/edit-info" element={<EditInfo />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Route>
    </Routes>
  );
};

export default App;
