import React from 'react'
import { IKImage } from 'imagekitio-react'

const projects = [
  {
    title: 'PetOn',
    description: 'A full-stack pet session booking platform built with MERN stack. It allows users to browse available pets to book session with them for entertainment and refreshment, Book session for different time periods and manage their profiles. The backend handles user authentication, pet listings, and booking processing. There is also seperate admin panel for managing pet listings and user Bookings.',
    image: '/Porfolio project images/Screenshot 2026-01-25 040042.png', // Placeholder image URL
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'JWT','ImageKit'],
    link: '#',
    github: '#'
  },
  {
    title: 'TaskLynx',
    description: 'A brief description of Project Two, highlighting its features and technologies used.',
    image: '/Porfolio project images/Screenshot 2026-02-14 040928.png', // Placeholder image URL
    tags: ['React', 'Tailwind CSS'],
    link: '#'
  },

  {
    title: 'Katakati',
    description: 'A full-stack pet session booking platform built with MERN stack. It allows users to browse available pets to book session with them for entertainment and refreshment, Book session for different time periods and manage their profiles. The backend handles user authentication, pet listings, and booking processing. There is also seperate admin panel for managing pet listings and user Bookings.',
    image: '/Porfolio project images/Screenshot 2026-02-14 041426.png', // Placeholder image URL
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
    github: '#'
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
            <div className='mt-16 grid md:grid-cols-2 gap-12'>
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
                          height: 650, // Fetch a reasonably sized image, not the full 4k original
                          width: 500,
                          quality: 80, // Reduces file size without visible loss
                        }]}
                        lqip={{ active: true }} // Optional: Shows a blurred placeholder while loading
                        loading="lazy"
                        alt={projects.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 group-hover:brightness-75"
                      />
                  </div>

                </div>
              ))}



            </div>
          </div>


        
    </section>
      
    
  )
}

export default Projects