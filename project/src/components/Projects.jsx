import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const ProjectCard = ({ title, description, skills, githubLink }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div 
      className="card overflow-hidden bg-dark-600/60 hover:bg-dark-500/80 cursor-pointer h-full"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {githubLink && (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary-400 hover:text-primary-300"
          >
            <FiGithub size={20} />
          </a>
        )}
      </div>
      
      <div className="mb-4 flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-dark-700 text-primary-300 text-xs font-medium rounded"
          >
            {skill}
          </span>
        ))}
      </div>
      
      <p className="text-gray-300 text-sm">
        {description}
      </p>
      
      <motion.div 
        className="mt-4 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded"
        initial={{ width: "0%" }}
        animate={{ width: isHovered ? "100%" : "30%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

const Projects = () => {
  const projects = [
    {
      title: "Potential Evapotranspiration Prediction",
      description: "Developed an interdisciplinary project focused on predicting potential evapotranspiration using climatic parameters and various machine learning approaches. Executed comprehensive data preprocessing tailored to specific domain expert needs. Performed meticulous hyperparameter tuning across all models to achieve optimal prediction accuracy.",
      skills: ["Scikit-learn", "Time Series Forecasting", "Regression Models", "TensorFlow", "Arimax"],
      githubLink: "https://github.com/neev17baptist/Final_Year_Project"
    },
    {
      title: "Age and Gender Classification",
      description: "Led the development of a robust age and gender classification system using machine learning and deep learning techniques. Implemented and optimized various machine learning models to accurately predict age and gender from input data. Employed voting based ensemble learning technique to combine predictions from multiple models, effectively boosting prediction accuracy and robustness in age and gender classification tasks.",
      skills: ["CNN", "OpenCV", "TensorFlow", "Keras", "Ensemble-learning"],
      githubLink: "https://github.com/neev17baptist/Age-and-Gender-Classification-Voting-Based-Ensemble"
    },
    {
      title: "Conquering Fashion MNIST with CNNs",
      description: "Developed a Fashion MNIST Classification system with CNNs, achieving outstanding accuracy levels. Experimented with different CNN structures and preprocessing methods, ensuring the model was finely tuned for optimal performance. Incorporated effective regularization techniques like dropout and early stopping to prevent overfitting and enhance generalization.",
      skills: ["CNN", "Computer Vision", "PyTorch", "OpenCV"],
      githubLink: "https://github.com/neev17baptist/intelunnati_The_Nxt_Gen"
    }
  ]

  return (
    <section className="container-section bg-gradient-to-b from-dark-700 to-dark-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-title text-center">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              skills={project.skills}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects