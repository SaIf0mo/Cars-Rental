import React from "react";
import { Car, Users, Award, Target, Heart, Shield, Clock, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-600">RentCar</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in premium car rentals since 2010
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide exceptional car rental experiences with premium vehicles, 
              outstanding customer service, and competitive prices that make travel 
              accessible and enjoyable for everyone.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the world's leading car rental company by setting new standards 
              in quality, innovation, and customer satisfaction while maintaining our 
              commitment to sustainability.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Car, value: "500+", label: "Premium Cars" },
            { icon: Users, value: "100K+", label: "Happy Customers" },
            { icon: Globe, value: "50+", label: "Locations" },
            { icon: Award, value: "15+", label: "Years Experience" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <stat.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h4 className="text-3xl font-bold text-gray-800">{stat.value}</h4>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: "Customer First", desc: "Your satisfaction is our top priority" },
              { icon: Shield, title: "Trust & Safety", desc: "Well-maintained vehicles for peace of mind" },
              { icon: Clock, title: "Reliability", desc: "Always there when you need us" }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white hover:shadow-xl transition-shadow"
              >
                <value.icon className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-blue-100">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Story */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-white p-8 md:p-12 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2010, RentCar started with a simple idea: make car rental 
                easy, affordable, and enjoyable for everyone. What began as a small 
                fleet of 10 cars has grown into a nationwide network with over 500 
                premium vehicles.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our commitment to quality and customer service has earned us the trust 
                of over 100,000 customers. We continuously invest in our fleet, 
                technology, and team to ensure we deliver the best possible experience.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to be one of the leading car rental companies, 
                known for our diverse fleet, competitive prices, and exceptional 
                customer service.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Car className="w-5 h-5" />
                  <span>Premium, well-maintained vehicles</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="w-5 h-5" />
                  <span>Comprehensive insurance coverage</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-5 h-5" />
                  <span>Multiple pickup locations</span>
                </li>
                <li className="flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  <span>Trusted by 100,000+ customers</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
