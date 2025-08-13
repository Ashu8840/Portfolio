
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 mt-12 text-center text-sm text-slate-500">
      <p>
        &copy; {new Date().getFullYear()} Ayush Tripathi. All Rights Reserved.
      </p>
       <p className="mt-1">
        Built with React, Tailwind CSS, and Framer Motion.
       </p>
    </footer>
  );
};

export default Footer;
