
import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../constants';
import GithubIcon from '../icons/GithubIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import MailIcon from '../icons/MailIcon';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
  ];
  
  const placeholderSrc = `data:image/svg+xml;base64,${btoa(`
  <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
    <circle cx="48" cy="48" r="48" fill="#6366f1"/>
    <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="40" font-family="Inter, sans-serif" font-weight="bold" fill="#fff" dy=".1em">AT</text>
  </svg>
  `)}`;


  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div
      className="flex flex-col h-full justify-between"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div>
        <motion.div variants={itemVariants} className="flex items-center gap-4">
           <motion.img 
            src={PERSONAL_INFO.image} 
            alt="Ayush Tripathi" 
            className="rounded-full h-24 w-24 border-2 border-primary object-cover"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            onError={(e) => {
              if (e.currentTarget.src !== placeholderSrc) {
                e.currentTarget.src = placeholderSrc;
              }
            }}
            />
          <div>
            <motion.h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl" variants={itemVariants}>
              {PERSONAL_INFO.name}
            </motion.h1>
            <motion.h2 className="mt-1 text-lg font-medium tracking-tight text-slate-300 sm:text-xl" variants={itemVariants}>
              {PERSONAL_INFO.title}
            </motion.h2>
          </div>
        </motion.div>
        
        <motion.p className="mt-4 max-w-xs leading-normal" variants={itemVariants}>
          {PERSONAL_INFO.profile}
        </motion.p>

        <nav className="hidden lg:block mt-16" aria-label="In-page navigation">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <motion.li key={item.name} custom={index} variants={itemVariants}>
                <a href={item.href} onClick={(e) => handleNavClick(e, item.href)} className="group flex items-center py-2">
                  <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
                    {item.name}
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      <motion.div className="flex items-center space-x-6 mt-8" variants={itemVariants}>
        <motion.a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-primary transition-colors" whileHover={{ scale: 1.2 }}>
          <GithubIcon />
        </motion.a>
        <motion.a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-primary transition-colors" whileHover={{ scale: 1.2 }}>
          <LinkedinIcon />
        </motion.a>
        <motion.a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Email" className="text-slate-400 hover:text-primary transition-colors" whileHover={{ scale: 1.2 }}>
          <MailIcon />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
