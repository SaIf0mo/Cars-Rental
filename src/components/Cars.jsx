import React from 'react'
import { Car, Star, MapPin, Users, Cog, Fuel, ArrowRight } from 'lucide-react';
import { cars } from '../Data/CarsData';
import VideoSection from './VideoSection';
import Featured from './Featured';
import { motion } from 'framer-motion';

export default function Cars() {
  return (
    <>
    <section className="bg-gray-100 py-20 sm:px-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <h2 className="sm:text-4xl text-3xl font-bold mb-2 flex justify-center items-center gap-2">
          <span className="text-blue-500"><Car className='w-12 h-12' /></span><span className='text-gray-800'>Featured Cars</span>
        </h2>
        <p className="text-gray-600 text-lg">Discover our handpicked selection of premium vehicles, perfect for any journey</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((car, index) => (
          <motion.div 
            key={car.id} 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300">
            <div className="relative overflow-hidden">
              <img src={car.image} alt={car.name} className="rounded-md w-full h-48 sm:h-56 md:h-60 object-cover" />
              <span className="absolute top-2 left-2 bg-white text-xs font-semibold px-2 py-1 rounded-full shadow">{car.type}</span>
              <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">{car.status}</span>
            </div>
            <div className="mt-4">
                <div className='flex justify-between items-center'>
                    <h3 className="text-lg font-semibold">{car.name}</h3>
                    <div className="text-yellow-500 text-sm flex items-center gap-1"><Star className='w-5 h-5' />{car.rating}</div>
                </div>
              <p className="text-sm text-gray-500">{car.year}</p>
              <div className="flex items-center text-sm text-gray-500 my-4 gap-1">
                <MapPin className='w-4 h-4' /><span>{car.location}</span>
              </div>
              <div className="flex sm:items-center sm:flex-row flex-col sm:gap-10 gap-2 mt-2 text-gray-600 text-sm">
                <span className='inline-flex items-center gap-1'><Users className='w-4 h-4 text-blue-500' /> {car.seats} seats</span>
                <span className='inline-flex items-center gap-1'><Cog className='w-4 h-4 text-blue-500' /> {car.transmission}</span>
                <span className='inline-flex items-center gap-1'><Fuel className='w-4 h-4 text-blue-500' /> {car.fuel}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {car.badges.map((badge, i) => (
                  <span key={i} className="bg-gray-50 text-xs px-2 py-1 rounded-full font-semibold border border-gray-200">{badge}</span>
                ))}
              </div>
              <div className="mt-4">
                <p className="text-lg font-bold text-blue-500">${car.price}<span className="text-sm font-normal text-gray-500">/day</span></p>
              </div>
              <div className="flex sm:flex-row flex-col mt-4 gap-3">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="sm:w-1/2 w-full border border-gray-300 px-3 py-2 rounded cursor-pointer transition duration-300 hover:bg-gray-300"
                >View Details</motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="sm:w-1/2 w-full bg-green-600 text-white px-3 py-2 rounded cursor-pointer transition duration-300 hover:bg-green-700"
                >Book Now</motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className='mx-auto flex items-center justify-center mt-12 bg-blue-500 py-3 px-5 text-white rounded cursor-pointer gap-1 transition duration-300 hover:bg-blue-700'
      >View All Cars <ArrowRight className='w-5 h-5' /></motion.button>
    </section>
        <VideoSection />
        <Featured />
    </>
  )
}
