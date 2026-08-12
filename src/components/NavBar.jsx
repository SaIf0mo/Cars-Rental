import { Car, Menu, X, LogIn } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../Data/CarsData";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-6 md:py-10 py-5 shadow-md"
    >
      <div className="flex items-center justify-between">
        <motion.h2
          whileHover={{ scale: 1.05 }}
          className="font-bold text-xl text-gray-800 flex items-center gap-x-1.5 cursor-pointer"
        >
          <Car className="w-6 h-6" />
          Car Rental
        </motion.h2>
  
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-x-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                to={link.path}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium duration-300"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
  
        {/* Mobile Menu Icon */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden cursor-pointer"
        >
          {!isOpen ? (
            <Menu
              className="w-6 h-6 hover:text-blue-700"
              onClick={() => setIsOpen(true)}
            />
          ) : (
            <X
              className="w-6 h-6 hover:text-red-700"
              onClick={() => setIsOpen(false)}
            />
          )}
        </motion.div>
  
        {/* Desktop Auth */}
        {isLoggedIn ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={logout}
            className="hidden md:block px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
          >
            Logout
          </motion.button>
        ) : (
          <div className="hidden md:flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/login"
                className="flex items-center px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Link>
            </motion.div>
  
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/register"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Register
              </Link>
            </motion.div>
          </div>
        )}
      </div>
  
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
  
            <div className="flex gap-3 p-4">
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="w-full bg-red-500 text-white py-2 rounded-md"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center bg-gray-200 py-2 rounded-md"
                  >
                    Login
                  </Link>
  
                  <Link
                    to="/register"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center bg-blue-500 text-white py-2 rounded-md"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
