
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <motion.div
      className={`rounded-lg transition-all duration-300 group ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0px 10px 30px -5px rgba(99, 102, 241, 0.2)",
        backgroundColor: "rgba(30, 41, 59, 0.7)"
      }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
