import React from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
];

const Header = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-slate-900/50 backdrop-blur-sm">
        <nav className="container mx-auto max-w-screen-xl px-6 md:px-12 py-3">
          <motion.ul 
            className="flex items-center justify-center space-x-6 text-sm font-medium"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-slate-300 hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </motion.ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;