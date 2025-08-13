
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="mb-16 scroll-mt-24 md:mb-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
      </div>
      <div>
        <p className="mb-4">
          As a budding software developer, I've dived into various projects, from building a multiplayer game with the MERN stack to developing a full-stack diary application. My experience with Java and Oracle in creating a car racing game honed my back-end skills, while my work on a live hospital system taught me to deliver robust solutions.
        </p>
        <p className="mb-4">
          I am driven by a passion for creating seamless and engaging user experiences. Whether it's implementing real-time features with WebSockets or securing applications with Google OAuth, I am always eager to learn and apply new technologies.
        </p>
        <p>
          Currently, I am focused on deepening my expertise in full-stack development and am actively seeking an internship where I can contribute to meaningful projects and grow within a talented team.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
