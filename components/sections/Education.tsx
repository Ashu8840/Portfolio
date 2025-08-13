
import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION, CERTIFICATIONS } from '../../constants';
import Card from '../ui/Card';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};


const Education = () => {
  return (
    <section id="education" className="mb-16 scroll-mt-24 md:mb-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Education</h2>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <Card className="p-6 bg-slate-800/50">
          <h3 className="font-bold text-lg text-slate-100 mb-4">Academic History</h3>
          <div className="relative border-l-2 border-primary/30 pl-6 space-y-8">
            {EDUCATION.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                 <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-slate-900 border-2 border-primary"></div>
                <p className="text-xs font-semibold text-slate-400">{edu.years}</p>
                <h4 className="font-medium text-slate-200">{edu.degree}</h4>
                <p className="text-sm text-slate-400">{edu.institution}</p>
              </motion.div>
            ))}
          </div>
          
          <h3 className="font-bold text-lg text-slate-100 mt-8 mb-4">Certifications</h3>
          <div className="space-y-4">
             {CERTIFICATIONS.map((cert, index) => (
                <motion.div key={index} variants={itemVariants} className="text-sm">
                    <p className="font-medium text-slate-200">{cert.name}</p>
                    <p className="text-slate-400"> - {cert.issuer}</p>
                </motion.div>
            ))}
          </div>

        </Card>
      </motion.div>
    </section>
  );
};

export default Education;
