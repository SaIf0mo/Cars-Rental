import React from "react";
import {
  Zap,
  Clock4,
  CreditCard,
  MapPin,
  Headphones,
  Users,
  Shield,
  FileBadge,
} from "lucide-react";
import { features } from "../Data/CarsData.jsx";
import { motion } from "framer-motion";
export default function Featured() {
  return (
    <section className="max-w-7xl mx-auto text-center">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sm:text-4xl text-3xl font-bold text-gray-800 mb-4"
      >
        why choose AutoRent?
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-500 font-semibold max-w-3xl mb-8 sm:mb:10 text-center mx-auto"
      >
        we're committed to providing you with the best car rental experience
        through our exceptional service, wide selection of vehicles, and
        competitive pricing.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10 px-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="flex flex-col bg-white items-center text-center border border-gray-300 rounded-lg p-6 shadow
            hover:shadow-md transition duration-300"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-14 h-14 bg-blue-500 text-white flex items-center justify-center rounded-full mb-4"
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-lg font-semibold text-gray-800 mt-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
