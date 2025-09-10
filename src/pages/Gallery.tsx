



import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Gallery() {
  const images = [
    "/g1.jpg",
    "/g2.jpg",
    "/g3.jpg",
    "/g4.jpg",
    "/g5.jpg",
    "/g6.jpg",
    "/g7.jpg",
    "/g8.jpg",
    "/g9.jpg",
    "/g10.jpg",
    "/g11.jpg",
    "/g12.jpg",
  ];

  return (
    <section style={{ background: "radial-gradient(circle at center, #ffffffff, #f8976334)" }}>
      <Header />
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-12">
      
      <h1 className="text-4xl font-extrabold text-center mb-12 text-[#f89763]">
        Highlights from Our Work & Training Sessions
      </h1>

      {/* Responsive Grid - max 3 per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            {/* Image with hover zoom only */}
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-60 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
    </div>
    <Footer/>
    </section>
  );
}

export default Gallery;
