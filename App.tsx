
import React from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased text-slate-300">
      <Header />
      <main className="container mx-auto max-w-screen-xl px-6 md:px-12 py-12 md:py-20 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <Hero />
          </div>
          <div className="lg:w-1/2 lg:py-24">
            <About />
            <Projects />
            <Skills />
            <Education />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
