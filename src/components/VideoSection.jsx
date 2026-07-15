import React, { useState } from "react";
import { Play, X } from "lucide-react";
import BMW from "../assets/video-img.jpg";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoSection() {
  const [show, setShow] = useState(false);
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto my-7 sm:my-10 px-4"
    >
      <motion.div 
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative rounded-xl overflow-hidden shadow hover:shadow-lg group"
      >
        <img
          src={BMW}
          alt="video bmw img"
          className="object-cover w-full h-[300px] md:h-[450px] transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          onClick={() => setShow(true)}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          cursor-pointer w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center 
          shadow-lg hover:bg-blue-700 transition-colors duration-300 z-10"
        >
          <motion.span 
            className="absolute inset-0 rounded-full bg-blue-600 opacity-75 -z-10"
            animate={{ scale: [1, 1.5, 1.5], opacity: [0.75, 0, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <Play className="w-6 h-6 fill-current ml-1" />{" "}
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {show && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full"
              onClick={() => setShow(false)}
            >
              <X className="h-6 w-6" />
            </motion.button>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-2xl"
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/0_Fst9d4gEA?si=iHTQS_krkXB5LQdB?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
