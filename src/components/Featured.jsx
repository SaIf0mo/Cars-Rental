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
export default function Featured() {
  return (
    <section className="max-w-7xl mx-auto text-center">
      <h1 className="sm:text-4xl text-3xl font-bold text-gray-800 mb-4">
        why choose AutoRent?
      </h1>
      <p className="text-gray-500 font-semibold max-w-3xl mb-8 sm:mb:10 text-center mx-auto">
        we're committed to providing you with the best car rental experience
        through our exceptional service, wide selection of vehicles, and
        competitive pricing.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10 px-4">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className="flex flex-col bg-white items-center text-center border border-gray-300 rounded-lg p-6 shadow
            hover:shadow-md transform hover:-translate-y-2 "
          >
            <div className="w-14 h-14 bg-blue-500 text-white flex items-center justify-center rounded-full mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mt-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
