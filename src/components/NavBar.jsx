import { Car, Menu, X, LogIn } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../Data/CarsData";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="max-w-7xl mx-auto px-6 md:py-10 py-5  shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl text-gray-800 flex items-center gap-x-1.5">
          <Car className="w-6 h-6 " /> Car Rental
        </h2>
        <div className="hidden md:flex items-center gap-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden hover:shadow-2xl hover:scale-105">
          {!isOpen ? (
            <Menu
              className="w-6 h-6 hover:text-blue-700 cursor-pointer"
              onClick={() => {
                setIsOpen(true);
              }}
            />
          ) : (
            <X
              className="w-6 h-6 hover:text-red-700 cursor-pointer"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          )}
        </div>
        {isLoggedIn ? (
          <button
            onClick={() => setIsLoggedIn(false)}
            className="hidden md:block ml-auto px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300 cursor-pointer"
          >
            Logout
          </button>
        ) : (
          <div className="md:flex items-center space-x-2 hidden ">
            <Link
              to="/Login"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Link>
            <Link
              to="/Register"
              className="ml-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
            >
              Register
            </Link>
          </div>
        )}
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex w-1/3 space-x-4 pb-5">
            <Link
              to="/Login"
              className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
            >
              <LogIn className="h-4 w-4 mr-2" /> Login
            </Link>
            <Link
              to="/Register"
              className="ml-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
