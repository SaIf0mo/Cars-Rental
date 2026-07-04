import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Car from "./components/Car";
import About from "./components/About";
import ContactUS from "./components/ContactUS";
import Layout from "./components/Layout";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

export default function App() {
  return (
    <>
      <Routes>
        {/*  علشان الملفات كلها تبان فيها الناف و الفوتر ما عدا تسجيل الدخول "Layout" */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Car" element={<Car />} />
          <Route path="/About" element={<About />} />
          <Route path="/ContactUs" element={<ContactUS />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>

        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
}
