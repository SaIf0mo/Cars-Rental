import React, { useState } from "react";
import { Mail, Lock, User, Car, Phone, Eye, EyeOff } from "lucide-react";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import { Link ,useNavigate} from "react-router-dom";
import { motion } from "framer-motion";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration data:", formData);
    navigate("/Login");
  };

  return (
    <section className=" px-4 py-14 flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-blue-700">
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center my-8"
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
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-5">
          Join us and start your journey
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="">
          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 
                rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 
                rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 
                rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Password */}
          <div className="flex items-center gap-2">

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full pl-10 pr-12 py-2 border border-gray-300 
                rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full pl-10 pr-12 py-2 border border-gray-300 
                rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2 mb-6">
            <input
              type="checkbox"
              id="terms"
              className="cursor-pointer appearance-none h-4 w-4 border border-gray-300
               rounded-sm checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
              I agree to the <span className="text-blue-500 hover:underline">Terms & Conditions</span>
            </label>
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full cursor-pointer bg-blue-400 font-medium text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Create Account
          </motion.button>

          {/* Divider */}
          <div className="flex items-center justify-between gap-6 my-6">
            <span className="border-t border-gray-300 w-full"></span>
            <span className="text-gray-400 w-full text-sm">
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

          {/* Sign in Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              to={"/Login"}
              className="ml-2 text-blue-500 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </form>
      </motion.div>
    </section>
  );
}
