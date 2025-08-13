
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../constants';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import BriefcaseIcon from '../icons/BriefcaseIcon';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Projects = () => {
  return (
    <section id="projects" className="mb-16 scroll-mt-24 md:mb-24">
       <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
      </div>
      <motion.div
        className="flex flex-col gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {PROJECTS.map((project, index) => (
          <Card key={index} className="p-6 bg-slate-800/50 border border-transparent hover:border-primary/30">
            <div className="flex items-center justify-between mb-3">
               <h3 className="font-bold text-lg text-slate-100 group-hover:text-primary transition-colors">{project.title}</h3>
                <span className="text-xs font-medium text-slate-400">{project.status}</span>
            </div>
            
            <ul className="list-disc list-inside text-slate-400 space-y-2 mb-4">
              {project.description.map((desc, i) => <li key={i}>{desc}</li>)}
            </ul>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
