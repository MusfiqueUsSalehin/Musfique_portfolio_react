import React from 'react'
import { IKImage } from 'imagekitio-react'
import { ArrowRight, ArrowUpRight, Github, LucideAArrowUp, LucideLink } from 'lucide-react';
import { AnimatedBorderButton } from '../components/AnimatedBorderButton.jsx'

const projects = [
  {
    title: 'PetOn',
    description: 'A full-stack pet session booking platform built with MERN stack. It allows users to browse available pets to book session with them for entertainment and refreshment, Book session for different time periods and manage their profiles. The backend handles user authentication, pet listings, and booking processing. There is also seperate admin panel for managing pet listings and user Bookings.',
    image: '/Porfolio project images/Screenshot 2026-01-25 040042.png', // Placeholder image URL
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'JWT','ImageKit'],
    link: 'https://pet-on.vercel.app/',
    github: 'https://github.com/MusfiqueUsSalehin/PetOn'
  },
  {
    title: 'TaskLynx',
    description: 'A brief description of Project Two, highlighting its features and technologies used.',
    image: '/Porfolio project images/Screenshot 2026-02-14 040928.png', // Placeholder image URL
    tags: ['React.js', 'Tailwind CSS'],
    link: 'https://task-lynx.vercel.app/',
    github: 'https://github.com/MusfiqueUsSalehin/TaskLynx'
  },

  {
    title: 'Katakati',
    description: 'A full-stack pet session booking platform built with MERN stack. It allows users to browse available pets to book session with them for entertainment and refreshment, Book session for different time periods and manage their profiles. The backend handles user authentication, pet listings, and booking processing. There is also seperate admin panel for managing pet listings and user Bookings.',
    image: '/Porfolio project images/Screenshot 2026-02-14 041426.png', // Placeholder image URL
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://katakati.vercel.app/',
    github: 'https://github.com/MusfiqueUsSalehin/Katakati-game'
  },


]

const Projects = () => {
  const urlEndpoint = "https://ik.imagekit.io/pft5wq5du";
  return (
    
      <section id="projects" className='py-32 overflow-hidden'>
          <div className='container mx-auto px-6 relative z-10'>
            {/* Head description */}
            <div className='text-center'>
  
              <div className='space-y-8 mb-15'>
                <div className='animate-fade-in'>
                  <span className='text-xl md:text-7xl glass border-3  p-5 text-[#CBFE00] font-electrolize'>THE PROJECT DEN</span>
                </div> 
              </div>

              <h2 className='text-2xl md:text-3xl font-electrolize font-bold text-white leading-tight animate-fade-in animation-delay-200'>
                <span className='text-[#849443]'>Engineering </span> software that learns to see, analyze, and automate the visual world.
              </h2>
              <p className='text-gray-400 mt-4 max-w-5xl mx-auto animate-fade-in animation-delay-400'>
                A curated selection of high-performance applications and intelligent systems. From optimizing neural networks to deploying scalable microservices, these projects demonstrate the bridge between theoretical AI and production-grade engineering.
              </p>
            </div>

            {/* Projects Grid */}
            <div className='mt-16 grid md:grid-cols-3 gap-12'>
              {projects.map((project, index) => (
                <div key={index} 
                className='group glass border-2 rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
                style={{animationDelay: `${(index+1)*100}ms`}}
                >
                  {/* Images */}
                  <div className='relative overflow-hidden aspect-video'>
                      <IKImage
                        urlEndpoint={urlEndpoint}
                        path={project.image}// The name of the file in ImageKit
                        transformation={[{
                          height: 1000, // Fetch a reasonably sized image, not the full 4k original
                          width: 2000,
                          quality: 80, // Reduces file size without visible loss
                        }]}
                        lqip={{ active: true }} // Optional: Shows a blurred placeholder while loading
                        loading="lazy"
                        alt={projects.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-75"
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60'/>


                      {/* overlay links */}
                      <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <div className='flex space-x-4'>
                          <a href={project.link} className='bg-[#CBFE00] text-black px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition-colors duration-300' target="_blank" rel="noopener noreferrer">
                            View Project <LucideLink className='inline-block ml-1' />
                          </a>
                          <a href={project.github} className='bg-black text-[#CBFE00] px-4 py-2 rounded-lg font-bold hover:bg-gray-800 transition-colors duration-300' target="_blank" rel="noopener noreferrer">
                            <Github className='inline-block ml-1' /> Repository
                          </a>
                        </div>
                      </div>


                  </div>

                
                {/* content */}
                <div className='p-6 space-y-4'>
                  
                  <div className='flex items-start justify-between'>
                    <h3 className='text-[#849443] font-electrolize font-bold text-xl mt-4 group-hover:text-[#CBFE00] transition-colors duration-300'>{project.title}</h3>
                    <ArrowUpRight className='inline-block ml-1 text-[#CBFE00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all' />
                  </div>
                  <p className='text-gray-400 font-electrolize text-sm mt-2'>{project.description}</p>
                  <div className='mt-4 flex flex-wrap gap-2'>
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className='text-xs font-electrolize text-gray-200 bg-[#CBFE00]/20 px-2 py-1 rounded-full'>{tag}</span>
                    ))}
                  </div>  
                  
                </div>

                
              </div>   
              ))}



            </div>

            {/* view All CTA */}
            <div className='flex justify-center mt-16 animate-fade-in animation-delay-600'>
                <AnimatedBorderButton>
                  View All Projects <ArrowRight className='inline-block ml-2' />
                </AnimatedBorderButton>
            </div>
          </div>


        
    </section>
      
    
  )
}

export default Projects