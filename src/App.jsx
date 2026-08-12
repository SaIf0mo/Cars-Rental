import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Cars from "./components/Cars";
import ContactUs from "./components/ContactUs";
import Layout from "./components/Layout";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import VideoSection from "./components/VideoSection";

export default function App() {
  return (
    <>
      <Routes>
        {/*  علشان الملفات كلها تبان فيها الناف و الفوتر ما عدا تسجيل الدخول "Layout" */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/About" element={<About />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/VideoSection" element={<VideoSection />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>

        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
}
