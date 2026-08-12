import React from "react";
import { Link } from "react-router-dom";
import { Car, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { navLinks } from "../Data/CarsData";
import { motion } from "framer-motion";

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
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full bg-gray-950 text-gray-400 pt-10 pb-4 border-t border-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-y-5 gap-x-8 pb-6 border-b border-gray-900">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col space-y-4">
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
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.id}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="w-9 h-9 flex items-center justify-center bg-gray-900 rounded-full text-gray-400 hover:bg-blue-600 hover:text-white border border-gray-800 hover:border-blue-600 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-white font-semibold text-lg relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-blue-500 after:mt-1">
              Quick Links
            </h3>
            <ul className="flex flex-col space-y-2.5 text-sm">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="hover:text-blue-500 hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-white font-semibold text-lg relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-blue-500 after:mt-1">
              Our Services
            </h3>
            <ul className="flex flex-col space-y-2.5 text-sm">
              {services.map((service, index) => (
                <motion.li
                  key={service.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  whileHover={{ x: 5 }}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 group"
                >
                  {service.title}
                  <ArrowUpRight className="w-3 h-3 text-gray-600 group-hover:text-blue-500 transition-colors" />
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-white font-semibold text-lg relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-blue-500 after:mt-1">
              Contact Us
            </h3>
            <ul className="flex flex-col space-y-3.5 text-sm">
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-x-2.5"
              >
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Mansoura, Egypt</span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-x-2.5"
              >
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>+20 1019322742</span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.7 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-x-2.5"
              >
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>hwtrsyfmhmd@gmail.com</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-y-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} AutoRent. All rights reserved.
          </p>
          <div className="flex items-center gap-x-4">
            <motion.a
              href="#privacy"
              whileHover={{ scale: 1.05 }}
              className="hover:text-gray-400 transition-colors"
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#terms" 
              whileHover={{ scale: 1.05 }}
              className="hover:text-gray-400 transition-colors"
            >
              Terms & Conditions
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
