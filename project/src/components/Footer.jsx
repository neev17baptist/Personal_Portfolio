import React from 'react'
import { FiLinkedin, FiGithub, FiMail, FiPhone, FiCode } from 'react-icons/fi'

const Footer = () => {
  const socialLinks = [
    { 
      icon: <FiLinkedin />, 
      url: "https://www.linkedin.com/in/neev-noah-ignatius-baptist",
      label: "LinkedIn" 
    },
    { 
      icon: <FiGithub />, 
      url: "https://github.com/neev17baptist",
      label: "GitHub"
    },
    { 
      icon: <FiMail />, 
      url: "mailto:neevbaptist@gmail.com",
      label: "Email"
    },
    { 
      icon: <FiPhone />, 
      url: "tel:+919073436506",
      label: "Phone"
    },
    { 
      icon: <FiCode />, 
      url: "https://leetcode.com/u/neevbaptist/",
      label: "LeetCode"
    }
  ]

  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-display gradient-text">Neev Baptist</h2>
            <p className="mt-2 text-gray-400">AI/ML Enthusiast | Developer</p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors p-2"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-dark-700 flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Neev Baptist. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <p className="text-gray-500 text-sm">
              Made with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer