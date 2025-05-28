import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { motion } from 'framer-motion'
import { FaBirthdayCake, FaSchool, FaGraduationCap, FaUniversity, FaFileAlt, FaBriefcase } from 'react-icons/fa'

const TimelineItem = ({ date, title, subtitle, description, icon }) => {
  const iconMap = {
    'birthday': <FaBirthdayCake />,
    'school': <FaSchool />,
    'graduation': <FaGraduationCap />,
    'university': <FaUniversity />,
    'paper': <FaFileAlt />,
    'work': <FaBriefcase />
  }

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element"
      contentStyle={{ 
        background: 'rgba(31, 41, 55, 0.8)', 
        color: '#fff',
        borderTop: '3px solid #0ea5e9',
        borderRadius: '0.75rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
      contentArrowStyle={{ borderRight: '7px solid rgba(31, 41, 55, 0.8)' }}
      date={date}
      iconStyle={{ background: '#0ea5e9', color: '#fff' }}
      icon={iconMap[icon]}
    >
      <h3 className="vertical-timeline-element-title text-xl font-bold text-white">{title}</h3>
      {subtitle && <h4 className="vertical-timeline-element-subtitle text-gray-300 mt-1">{subtitle}</h4>}
      <p className="text-gray-300 mt-3">
        {description}
      </p>
    </VerticalTimelineElement>
  )
}

const Timeline = () => {
  const timelineData = [
    {
      date: 'October 17, 2003',
      title: 'Birthday',
      description: 'Born on October 17, 2003',
      icon: 'birthday'
    },
    {
      date: 'April 2005',
      title: 'Schooling Started',
      subtitle: 'La Martininere For Boys, Kolkata',
      description: 'Began my educational journey at La Martininere For Boys in Kolkata',
      icon: 'school'
    },
    {
      date: 'April 2019',
      title: 'Class 10th - ICSE',
      subtitle: 'La Martininere For Boys, Kolkata',
      description: 'Completed ICSE examination',
      icon: 'graduation'
    },
    {
      date: 'April 2021',
      title: 'Class 12th - ISC',
      subtitle: 'La Martininere For Boys, Kolkata',
      description: 'Completed ISC examination',
      icon: 'graduation'
    },
    {
      date: 'September 2021',
      title: 'Started College',
      subtitle: 'Karunya Institute of Technology and Sciences, Coimbatore',
      description: 'Began my undergraduate studies in Computer Science',
      icon: 'university'
    },
    {
      date: '2024',
      title: 'Presented Paper at NC-ISTAH 2024',
      description: '"Enhanced Age and Gender Classification Using OpenCV Deep Learning: A Ensemble Approach"',
      icon: 'paper'
    },
    {
      date: 'February 2025 - Present',
      title: 'Internship at Cognizant',
      subtitle: 'Coimbatore, Tamil Nadu, India (Onsite)',
      description: 'Working as an intern, applying AI/ML knowledge in a professional setting',
      icon: 'work'
    },
    {
      date: '2025',
      title: 'Presented Paper at ICC-ROBBINS 2025',
      description: '"Prediction of Potential Evapotranspiration using Climatic Parameters using Machine Learning Techniques and Univariate Forecasting"',
      icon: 'paper'
    },
    {
      date: 'July 2025',
      title: 'College Completion',
      subtitle: 'Karunya Institute of Technology and Sciences, Coimbatore',
      description: 'Expected graduation with a degree in Computer Science',
      icon: 'graduation'
    }
  ]

  return (
    <section className="py-16 bg-dark-800">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-title text-center mb-16">My Journey</h2>
        
        <VerticalTimeline lineColor="rgba(14, 165, 233, 0.3)">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              date={item.date}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  )
}

export default Timeline