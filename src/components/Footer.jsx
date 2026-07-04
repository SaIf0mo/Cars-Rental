import React from "react";
import { Link } from "react-router-dom";
import { Car, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { navLinks } from "../Data/CarsData";

export default function Footer() {
  const socialLinks = [
    {
      id: 1,
      icon: <FaFacebook className="w-5 h-5" />,
      path: "https://facebook.com",
    },
    {
      id: 2,
      icon: <FaInstagram className="w-5 h-5" />,
      path: "https://instagram.com",
    },
    {
      id: 3,
      icon: <FaLinkedin className="w-5 h-5" />,
      path: "https://linkedin.com",
    },
    {
      id: 4,
      icon: (
        <span className="font-bold text-base tracking-tighter select-none">
          X
        </span>
      ),
      path: "https://x.com",
    },
  ];

  const services = [
    { id: 1, title: "Long-term Rentals" },
    { id: 2, title: "Wedding Car Luxury" },
    { id: 3, title: "VIP & Business Travel" },
    { id: 4, title: "Full Insurance Plans" },
  ];

  return (
    <footer className="w-full bg-gray-950 text-gray-400 pt-10 pb-4 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-y-5 gap-x-8 pb-6 border-b border-gray-900">
          <div className="flex flex-col space-y-4">
            <h2 className="font-bold text-2xl text-white flex items-center gap-x-2">
              <Car className="w-7 h-7 text-blue-500" /> AutoRent
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              We provide premium car rental solutions with competitive pricing,
              flexible booking options, and a highly secure fleet to ensure a
              smooth journey.
            </p>
            {/* Social Media Links Map */}
            <div className="flex items-center gap-x-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-gray-900 rounded-full text-gray-400 hover:bg-blue-600 hover:text-white border border-gray-800 hover:border-blue-600 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-semibold text-lg relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-blue-500 after:mt-1">
              Quick Links
            </h3>
            <ul className="flex flex-col space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className="hover:text-blue-500 hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-semibold text-lg relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-blue-500 after:mt-1">
              Our Services
            </h3>
            <ul className="flex flex-col space-y-2.5 text-sm">
              {services.map((service) => (
                <li
                  key={service.id}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 group"
                >
                  {service.title}
                  <ArrowUpRight className="w-3 h-3 text-gray-600 group-hover:text-blue-500 transition-colors" />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-white font-semibold text-lg relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-blue-500 after:mt-1">
              Contact Us
            </h3>
            <ul className="flex flex-col space-y-3.5 text-sm">
              <li className="flex items-start gap-x-2.5">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Mansoura, Egypt</span>
              </li>
              <li className="flex items-center gap-x-2.5">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>+20 1019322742</span>
              </li>
              <li className="flex items-center gap-x-2.5">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>hwtrsyfmhmd@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-y-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} AutoRent. All rights reserved.
          </p>
          <div className="flex items-center gap-x-4">
            <a
              href="#privacy"
              className="hover:text-gray-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-gray-400 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
