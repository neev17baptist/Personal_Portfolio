import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaCode, 
  FaCertificate, 
  FaDatabase, 
  FaBrain, 
  FaLanguage
} from 'react-icons/fa'

const SkillCategory = ({ title, skills, icon, delay }) => {
  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-4">
        <span className="text-primary-400 mr-3 text-2xl">{icon}</span>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index} className="relative">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-300">{skill.name}</span>
              {skill.level && <span className="text-sm font-medium text-gray-400">{skill.level}</span>}
            </div>
            
            {skill.level && (
              <div className="w-full bg-dark-700 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-primary-500 to-primary-400 h-2 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.1 * index }}
                  viewport={{ once: true }}
                />
              </div>
            )}
            
            {!skill.level && (
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-dark-700 text-primary-300 text-sm rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const skillsData = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      skills: [
        {
          name: "Python",
          level: 90
        },
        {
          name: "Java",
          level: 75
        },
        {
          name: "C#",
          level: 50
        }
      ]
    },
    {
      title: "Industrial Certifications",
      icon: <FaCertificate />,
      skills: [
        {
          name: "Certifications",
          items: [
            "Microsoft Azure AI Fundamentals",
            "Google Data Analytics Professional",
            "Google Advanced Data Analytics"
          ]
        }
      ]
    },
    {
      title: "Technologies",
      icon: <FaDatabase />,
      skills: [
        {
          name: "Technologies",
          items: [
            "OpenCV", "SciPy", "Keras", "TensorFlow", 
            "Pandas", "PyTorch", "NumPy", "Scikit-Learn",
            "Seaborn", "Matplotlib"
          ]
        }
      ]
    },
    {
      title: "Concepts",
      icon: <FaBrain />,
      skills: [
        {
          name: "Concepts",
          items: [
            "System-Compiler Design",
            "Operating System",
            "OOP",
            "Artificial Intelligence",
            "Machine Learning",
            "Neural Networks",
            "Database Management",
            "DSA"
          ]
        }
      ]
    },
    {
      title: "Languages",
      icon: <FaLanguage />,
      skills: [
        {
          name: "English",
          level: 100
        },
        {
          name: "Hindi",
          level: 100
        },
        {
          name: "Bengali",
          level: 40
        }
      ]
    }
  ]

  return (
    <section className="container-section bg-gradient-to-b from-dark-800 to-dark-700">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-title text-center">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillsData.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills