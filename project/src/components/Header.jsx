import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import p1 from "../assets/profile1.jpg"
import p2 from "../assets/profile2.jpg"
import p3 from "../assets/profile3.jpg"

const Header = () => {
  const images = [
    p1,
    p2,
    p3
  ]

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.7)), url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              animation: `fadeInOut ${images.length * 5}s infinite ${index * 5}s`
            }}
          />
        ))}
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-7xl font-bold font-display mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="gradient-text">Neev Baptist</span>
          </motion.h1>
          
          <motion.div
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'AI Enthusiast',
                2000,
                'Quick Learner',
                2000,
                'Problem Solver',
                2000,
                'Tech Innovator',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button className="btn-primary mr-4">
                Learn More
              </button>
            </Link>
            
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button className="bg-transparent hover:bg-primary-600 text-white font-medium py-2 px-4 border border-primary-500 hover:border-transparent rounded-md transition-colors duration-200">
                Contact Me
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse-slow"></div>
          </div>
        </Link>
      </motion.div>
    </div>
  )
}

export default Header
