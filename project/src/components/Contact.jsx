import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiCode } from 'react-icons/fi'
import emailjs from 'emailjs-com'

const Contact = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: ''
  })

  useEffect(() => {
    emailjs.init("a_vjfnuknQ9ApbOQr")
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: ''
    })

    emailjs.sendForm(
      'service_beb2g8h',
      'template_aubbg7a',
      formRef.current,
      'a_vjfnuknQ9ApbOQr'
    )
    .then((result) => {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: "Thank you! Your message has been sent. I'll get back to you soon."
      })
      
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      
      setTimeout(() => {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: false,
          isError: false,
          message: ''
        })
      }, 5000)
    })
    .catch((error) => {
      console.error('Error sending email:', error)
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: "Oops! Something went wrong. Please try again."
      })
    })
  }

  const contactInfo = [
    {
      icon: <FiPhone className="text-xl" />,
      label: "Phone",
      value: "+91 9073436506",
      link: "tel:+919073436506"
    },
    {
      icon: <FiMail className="text-xl" />,
      label: "Email",
      value: "neevbaptist@gmail.com",
      link: "mailto:neevbaptist@gmail.com"
    },
    {
      icon: <FiLinkedin className="text-xl" />,
      label: "LinkedIn",
      value: "in/neev-noah-ignatius-baptist",
      link: "https://www.linkedin.com/in/neev-noah-ignatius-baptist"
    },
    {
      icon: <FiGithub className="text-xl" />,
      label: "GitHub",
      value: "neev17baptist",
      link: "https://github.com/neev17baptist"
    },
    {
      icon: <FiCode className="text-xl" />,
      label: "LeetCode",
      value: "neevbaptist",
      link: "https://leetcode.com/u/neevbaptist/"
    }
  ]

  return (
    <section className="container-section bg-dark-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-title text-center">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Get in Touch</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="bg-dark-600/80 p-3 rounded-full mr-4 group-hover:bg-primary-600/20 transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <a 
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-white hover:text-primary-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Let's Connect</h3>
              <p className="text-gray-300">
                I'm always open to discussing new projects, opportunities, or partnerships. 
                Feel free to reach out through any channel!
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="card hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="input-field resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {formStatus.isSubmitted && !formStatus.isError && (
                  <div className="mt-4 p-3 bg-green-900/30 border border-green-700 text-green-400 rounded-md">
                    {formStatus.message}
                  </div>
                )}
                
                {formStatus.isError && (
                  <div className="mt-4 p-3 bg-red-900/30 border border-red-700 text-red-400 rounded-md">
                    {formStatus.message}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact