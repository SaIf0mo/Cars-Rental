import React, { useState } from "react";
import { Mail, Lock, User, Car } from "lucide-react";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section className="h-screen px-4 py-14 flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-blue-700">
      {/* LOgo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="text-white text-3xl font-bold flex justify-center items-center gap-2">
          <Car className="w-10 h-10" />
          <span>RentCar</span>
        </div>
      </motion.div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md font-bold bg-gray-100 rounded-xl shadow-lg p-8 py-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-5">
          Sign in to your Account
        </p>
        {/* Form */}
        <form action="" className="" onClick={() => {}}>
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 
                rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 
                rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          {/* Remmember me! */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-0 gap-2 justify-between text-sm mb-6">
            <label
              htmlFor=""
              className="flex items-center gap-1 cursor-pointer"
            >
              <input
                type="checkbox"
                className="cursor-pointer appearance-none h-4 w-4 border border-gray-300
               rounded-sm checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span className="text-base">Remember me !</span>
            </label>
            <Link to={"/"} className="text-blue-500 hover:underline">
              Forgot Password?
            </Link>
          </div>
          {/* Submit */}
          <motion.button
            onClick={(e) => {
              e.preventDefault();
              login();
              navigate("/");
            }}
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full cursor-pointer bg-blue-400 font-medium text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Sign in
          </motion.button>
          {/* Divider */}
          <div className="flex items-center justify-between gap-6 my-6">
            <span className="border-t border-gray-300 w-full"></span>
            <span className="text-gray-400  w-full text-sm">
              or continue with
            </span>
            <span className="border-t border-gray-300 w-full"></span>
          </div>
          {/* Social Login */}
          <div className="flex gap-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-1/3 flex cursor-pointer items-center justify-center border border-gray-300
             py-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
            >
              <FaFacebook className="mr-2" />
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-1/3 flex cursor-pointer items-center justify-center border border-gray-300
             py-2 rounded-md hover:bg-pink-500 hover:text-white transition duration-300"
            >
              <FaInstagram className="mr-2" />
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-1/3 flex cursor-pointer items-center justify-center border border-gray-300
             py-2 rounded-md hover:bg-red-500 hover:text-white transition duration-300"
            >
              <FaGoogle className="mr-2" />
            </motion.button>
          </div>

          {/* Sign up Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link
              to={"/register"}
              className="ml-2 text-blue-500 hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </motion.div>
    </section>
  );
}
