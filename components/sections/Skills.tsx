
import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../constants';
import Badge from '../ui/Badge';
import Card from '../ui/Card';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section id="skills" className="mb-16 scroll-mt-24 md:mb-24">
       <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Skills</h2>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <Card className="p-6 bg-slate-800/50">
          {SKILL_CATEGORIES.map((category) => (
            <motion.div key={category.title} className="mb-6 last:mb-0" variants={itemVariants}>
              <h3 className="font-bold text-slate-200 mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </Card>
      </motion.div>
    </section>
  );
};

export default Skills;
