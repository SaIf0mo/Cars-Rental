import React from "react";
import { Calendar, Clock10, MapPin, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { stats } from "../Data/CarsData.jsx";

export default function Home() {
  return (
    <div className="bg-blue-600 flex items-center justify-center">
      <div className="container mx-auto py-16 md:py-22 text-center">
        <h1 className="font-bold text-3xl md:text-4xl text-white capitalize">
          Find Your Perfect{" "}
          <span className="text-yellow-300 font-serif">Rental Car</span>
        </h1>
        <p className="my-4 text-lg md:text-xl text-white">
          Discover amazing deals on quality vehicles. Book now and drive away
          with confidence
        </p>
        <div className="w-full bg-white rounded-xl shadow-md py-8 px-5 text-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-3">
            <div className="flex flex-col items-center gap-2">
              <label
                htmlFor=""
                className="flex items-center gap-1.5 font-medium text-lg"
              >
                <MapPin className="w-5 h-5 text-blue-600" /> Pickup Loction
              </label>
              <select
                name=""
                id=""
                className="rounded bg-gray-200 border border-gray-200 outline-none px-8 py-2 text-md font-medium cursor-pointer hover:shadow"
              >
                <option value="" className="hover:bg-blue-300">
                  Cairo
                </option>
                <option value="" className="hover:bg-blue-300">
                  New York
                </option>
                <option value="" className="hover:bg-blue-300">
                  London
                </option>
                <option value="" className="hover:bg-blue-300">
                  Paris
                </option>
                <option value="" className="hover:bg-blue-300">
                  Bureit
                </option>
              </select>
            </div>
            <div className="flex flex-col items-center gap-2">
              <label
                htmlFor=""
                className="flex items-center gap-1.5 font-medium text-lg"
              >
                <Calendar className="w-5 h-5 text-blue-600" /> Pickup Date
              </label>
              <input
                type="Date"
                className="border border-gray-300 px-5 py-2 rounded-lg bg-gray-200 cursor-pointer hover:shadow"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <label
                htmlFor=""
                className="flex items-center gap-1.5 font-medium text-lg"
              >
                <Clock10 className="w-5 h-5 text-blue-600" /> Pickup Time
              </label>
              <input
                type="time"
                className="border border-gray-300 px-5 py-2 rounded-lg bg-gray-200 cursor-pointer hover:shadow"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <label
                htmlFor=""
                className="flex items-center gap-1.5 font-medium text-lg"
              >
                <Calendar className="w-5 h-5 text-blue-600" /> Return Date
              </label>
              <input
                type="date"
                className="border border-gray-300 px-5 py-2 rounded-lg bg-gray-200 cursor-pointer hover:shadow"
              />
            </div>
          </div>
          <Link
            to={"/"}
            className="px-6 py-2 mt-5 text-white justify-self-center place-self-center bg-blue-500 text-lg font-medium shadow hover:bg-blue-600 cursor-pointer flex items-center gap-x-3 rounded-xl"
          >
            <Search className="w-5 h-5" /> Search
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center gap-3 mt-8">
          {stats.map((stat) => (
            <div className="flex items-center gap-4 flex-col hover:shadow-lg">
              <h1 className="text-3xl font-bold text-white">{stat.value}</h1>
              <p className="text-lg font-medium text-gray-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
