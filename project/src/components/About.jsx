import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="container-section bg-gradient-to-b from-dark-800 to-dark-700">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="card bg-dark-600/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Welcome to my portfolio! I'm a passionate and quick learner, constantly exploring the vast potential of 
              <span className="text-primary-400 font-medium"> Artificial Intelligence</span> and 
              <span className="text-primary-400 font-medium"> Machine Learning</span>. 
              AI truly excites me, and I'm eager to contribute to the next wave of intelligent technologies.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card hover:bg-dark-500 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 gradient-text">Education</h3>
                <p className="text-gray-300">
                  Karunya Institute of Technology and Sciences, Coimbatore, Tamil Nadu with a focus on Computer Science and AI/ML technologies.
                </p>
              </div>
              
              <div className="card hover:bg-dark-500 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 gradient-text">Experience</h3>
                <p className="text-gray-300">
                  Currently interning at Cognizant, Coimbatore, Tamil Nadu, where I'm working on innovative projects and gaining hands-on experience in real-world applications.
                </p>
              </div>
            </div>
            
            <div className="mt-6 card hover:bg-dark-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 gradient-text">Research Contributions</h3>
              <p className="text-gray-300">
                Presented papers at NC-ISTAH 2024 and ICC-ROBBINS 2025, focusing on innovative applications of machine learning and computer vision technologies.
              </p>
            </div>
            
            <div className="mt-6 text-center">
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a 
                  href="#timeline" 
                  className="inline-flex items-center text-primary-400 hover:text-primary-300"
                >
                  <span className="mr-2">Explore My Journey</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About