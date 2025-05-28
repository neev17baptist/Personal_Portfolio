import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-dark-800 z-50">
      <div className="text-center">
        <motion.div
          className="inline-block w-16 h-16 mb-8"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
        >
          <span className="text-5xl">🚀</span>
        </motion.div>
        <motion.h2 
          className="text-2xl font-display font-bold gradient-text"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ 
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity 
          }}
        >
          Loading Portfolio...
        </motion.h2>
      </div>
    </div>
  )
}

export default Loader