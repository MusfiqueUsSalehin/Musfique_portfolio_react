import { Code2, Lightbulb, Rocket, Users } from 'lucide-react'
import React from 'react'



const highlights= [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'I write clean, efficient, and maintainable code that follows best practices and industry standards.'

    },
    {
      icon: Rocket,
      title: 'Passionate Coder',
      description: 'I am passionate about coding and always eager to learn new technologies and improve my skills.'
    },

    {
      icon: Users,
      title: 'Team Player',
      description: 'I enjoy collaborating with others and believe that teamwork is essential for success in any project.'
    },

    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'I have a strong problem-solving mindset and enjoy tackling complex challenges to find innovative solutions.'
    }
  ]

const About = () => {
  
  return (
    <section id="about" className='py-32 overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* left column */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='text-xl md:text-7xl glass border-3 p-5 text-[#CBFE00] font-electrolize'>ABOUT ME</span>

            </div>
            
          </div>
          <h2 className='text-4xl md:text-5xl font-electrolize font-bold text-white leading-tight animate-fade-in animation-delay-200'>
            <span className='text-[#849443]'>Driven by data, inspired by people.</span> I solve hard problems with clean code and intuitive design
          </h2>


          {/* About Description */}

          <div className='text-gray-400 space-y-4'>
            <p className='animate-fade-in animation-delay-400'>I believe technology should solve real problems, not just exist as code. I build scalable, user-focused systems with a strong foundation in software engineering principles and a curiosity for AI-driven innovation.</p>
            <p>As a software engineering enthusiast, I focus on building reliable back-end architectures and AI-powered solutions that solve meaningful problems. I value clean design, thoughtful system architecture, and continuous learning.</p>
          </div>

          {/* Mission Line */}

          <div className="mt-6 mb-12 md:mt-16 flex flex-row md:flex-row items-center gap-6 max-w-2xl animate-fade-in animation-delay-400">
            {/* Vertical decorative line */}
            <div className="h-25 w-1 bg-[#2a2a2a] relative"/>

            <p className="text-gray-400 text-xs md:text-sm tracking-[0.2em] leading-loose text-left md:text-left font-electrolize uppercase max-w-lg">
             <span className='text-[#CBFE00] text-3xl'>&ldquo; </span>My mission is to create technology that improves lives through thoughtful design and intelligent systems. <span className='text-[#CBFE00] text-3xl'>&rdquo;</span>
            </p>
          </div>

          {/* right column */}

          
        </div>
      </div>
    </section>
  )
}

export default About