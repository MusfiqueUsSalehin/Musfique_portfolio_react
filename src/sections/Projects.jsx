import React, { useState, useRef, useEffect } from 'react';
import { IKImage } from 'imagekitio-react';
import { ArrowRight, ArrowUpRight, Github, LucideLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedBorderButton } from '../components/AnimatedBorderButton.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';

// Flattened Project Data
const projects = [
  {
    title: 'PetOn',
    description: 'A full-stack pet session booking platform built with MERN stack. Allows users to browse available pets, book sessions, and manage profiles.',
    image: '/Porfolio project images/Screenshot 2026-01-25 040042.png',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Tailwind', 'ImageKit'],
    link: 'https://pet-on.vercel.app/',
    github: 'https://github.com/MusfiqueUsSalehin/PetOn',
    category: 'Full Stack Systems'
  },
  {
    title: 'TaskLynx',
    description: 'A dual-panel React frontend application designed to streamline workflow between Admins and Employees based on Localstorage data.',
    image: '/Porfolio project images/Screenshot 2026-02-14 040928.png',
    tags: ['React.js', 'Tailwind CSS'],
    link: 'https://task-lynx.vercel.app/',
    github: 'https://github.com/MusfiqueUsSalehin/TaskLynx',
    category: 'Full Stack Systems'
  },
  {
    title: 'Katakati',
    description: 'Interactive web game implementation with dynamic state management and responsive design.',
    image: '/Porfolio project images/Screenshot 2026-02-14 041426.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://katakati.vercel.app/',
    github: 'https://github.com/MusfiqueUsSalehin/Katakati-game',
    category: 'Full Stack Systems'
  },
  
  {
    title: "AeroVision: Aerial Object Tracking",
    description: "An end-to-end computer vision pipeline using YOLOv8 and ByteTrack to detect, track, and count vehicles and pedestrians in high-density VisDrone aerial footage.",
    image: "/Porfolio project images/Gemini_Generated_Image_38ashl38ashl38as.png",
    tags: ["Python","YOLOv8","ByteTrack","OpenCV"],
    github :"https://github.com/MusfiqueUsSalehin/VisDrone-Object-Detection",
    category :"AI/ML"
  }
  
];

// Define filter categories
const filterCategories = ['All', 'AI/ML', 'Full Stack Systems', 'Backend Systems', 'Automation'];

const Projects = () => {
  const urlEndpoint = "https://ik.imagekit.io/pft5wq5du";
  
  // State for the active filter
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Ref for the sliding container
  const scrollRef = useRef(null);

  // Filter the projects array based on the active tab
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Scroll logic for the arrows
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Reset scroll position to the left whenever the filter changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeFilter]);

  return (
    <section id="projects" className='py-32 overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        
        {/* Head description */}
        <div className='text-center'>
          <div className='space-y-8 mb-15'>
            <div className='animate-fade-in'>
              <span className='text-xl md:text-7xl glass border-3 p-5 text-[#CBFE00] font-electrolize'>
                THE PROJECT DEN
              </span>
            </div> 
          </div>

          <h2 className='text-2xl md:text-3xl font-electrolize font-bold text-white leading-tight animate-fade-in animation-delay-200 mt-8'>
            <span className='text-[#849443]'>Engineering </span> software that learns to see, analyze, and automate the visual world.
          </h2>
          <p className='text-gray-400 mt-4 max-w-5xl mx-auto animate-fade-in animation-delay-400'>
            A curated selection of high-performance applications and intelligent systems.
          </p>
        </div>

        {/* --- The Filter Navbar (UPDATED UI) --- */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4 mt-16 mb-8">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                // Changed from rounded-full to rounded-md, and updated transparent/green hover effects
                className={`px-6 py-2 rounded-md font-electrolize transition-all duration-300 border-2 
                  ${activeFilter === category 
                    ? 'bg-[#CBFE00] text-black border-[#CBFE00] shadow-[0_0_15px_rgba(203,254,0,0.3)]' 
                    : 'bg-transparent text-gray-200 border-[#CBFE00]/50 hover:bg-[#CBFE00]/20 hover:border-[#CBFE00] hover:text-[#CBFE00]'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Navigation Arrows for the Slider */}
        <ScrollReveal>
          <div className="flex justify-end gap-2 mb-4">
            <button 
              onClick={() => handleScroll('left')}
              className="p-2 rounded-full border border-gray-700 bg-card/50 text-[#CBFE00] hover:bg-[#CBFE00] hover:text-black transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => handleScroll('right')}
              className="p-2 rounded-full border border-gray-700 bg-card/50 text-[#CBFE00] hover:bg-[#CBFE00] hover:text-black transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </ScrollReveal>

        {/* Projects Slider Container */}
        <ScrollReveal>
          <div 
            ref={scrollRef}
            className='flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-4 hide-scrollbar min-h-[55vh]'
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <div 
                  key={`${project.title}-${index}`} 
                  // Set width to exactly 33.333% (minus gap) so 3 fit per screen on desktop
                  className='snap-start flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] group glass border-2 rounded-2xl overflow-hidden animate-fade-in flex flex-col'
                  style={{animationDelay: `${(index + 1) * 100}ms`}}
                >
                  {/* Images */}
                  <div className='relative overflow-hidden aspect-video'>
                    <IKImage
                      urlEndpoint={urlEndpoint}
                      path={project.image}
                      transformation={[{ height: 1000, width: 2000, quality: 80 }]}
                      lqip={{ active: true }}
                      loading="lazy"
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-75"
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60'/>

                    {/* overlay links */}
                    <div className='absolute inset-0 flex items-center justify-center md:opacity-0 group-active:opacity-100 group-hover:opacity-100 transition-opacity duration-300'>
                      <div className='flex space-x-4'>
                        <a href={project.link} className='bg-[#CBFE00] text-black px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition-colors duration-300' target="_blank" rel="noopener noreferrer">
                          View <LucideLink className='inline-block ml-1' size={18}/>
                        </a>
                        <a href={project.github} className='bg-black text-[#CBFE00] px-4 py-2 rounded-lg font-bold hover:bg-gray-800 transition-colors duration-300' target="_blank" rel="noopener noreferrer">
                          <Github className='inline-block ml-1' size={18}/> Repo
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* content */}
                  <div className='p-6 space-y-4 flex-grow flex flex-col'>
                    <div className='flex items-start justify-between'>
                      <h3 className='text-[#849443] font-electrolize font-bold text-xl mt-4 group-hover:text-[#CBFE00] transition-colors duration-300'>
                        {project.title}
                      </h3>
                      <ArrowUpRight className='inline-block ml-1 mt-4 text-[#CBFE00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all' />
                    </div>
                    <p className='text-gray-400 font-electrolize text-sm mt-2 flex-grow'>
                      {project.description}
                    </p>
                    <div className='mt-4 flex flex-wrap gap-2'>
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className='text-xs font-electrolize text-gray-200 bg-[#CBFE00]/20 px-2 py-1 rounded-full border border-[#CBFE00]/30'>
                          {tag}
                        </span>
                      ))}
                    </div>  
                  </div>
                </div>   
              ))
            ) : (
              <div className="w-full text-center py-20 text-gray-400 font-electrolize">
                No projects found in this category yet. Check back soon!
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Global CTA */}
        <div className='flex justify-center mt-8 animate-fade-in animation-delay-600'>
          <a href="https://github.com/MusfiqueUsSalehin" target="_blank" rel="noopener noreferrer">
            <AnimatedBorderButton>
              Visit GitHub Profile <ArrowRight className='inline-block ml-2' />
            </AnimatedBorderButton>
          </a>
        </div>

      </div>

      {/* Hide scrollbar CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}} />
    </section>
  );
}

export default Projects;