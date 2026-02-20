import { Brain, Code2, Layers, Lightbulb, RefreshCw, Rocket, Scroll, ShieldCheck, Users, Zap } from 'lucide-react'
import React from 'react'
import ScrollReveal from '../components/ScrollReveal'


const education = [
  {
    degree: 'Bachelor of Science in Computer Science and Engineering',
    institution: 'BRAC University',
    location: 'Dhaka, Bangladesh',
    year: '2022 - present',
    description: 'Pursuing a Bachelor of Science in Computer Science and Engineering with understanding of core CS, software engineering and AI/ML concepts and practical application.',
    current: true
  },

  {
    degree: 'Higher School Certificate',
    institution: 'Govt. Hazi Muhammad Mohsin College',
    location: 'Chattogram, Bangladesh',
    year: '2019 - 2020',
    description: 'Completed Higher School Certificate with a strong foundation in science, mathematics,   physics and chemistry.',
    current: false
  },

  {
    degree: 'Secondary School Certificate',
    institution: 'Ispahani Public School & College',
    location: 'Chattogram, Bangladesh',
    year: '2005 - 2018',
    description: 'Completed Secondary School Certificate with a strong foundation in science subjects.',
    current: false
  },


]



const highlights= [
    {
      icon: Rocket,
      title: 'Passionate Programmer',
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
    },

    {
      icon: Zap, // Represents speed/energy
      title: 'Performance Optimized',
      description: 'I build fast, responsive applications, prioritizing low latency and seamless user experiences.'
    },

    {
      icon: RefreshCw, // Represents cycles/agile
      title: 'Agile Mindset',
      description: 'I thrive in agile environments, adapting quickly to changes and delivering value through iterative development.'
    },


    {
      icon: ShieldCheck, // Represents security
      title: 'Security Conscious',
      description: 'I write code with security in mind, implementing best practices to protect data and prevent vulnerabilities.'
    },
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

          <div className='text-gray-400 space-y-4 animate-fade-in animation-delay-400'>
            <p>I believe technology should solve real problems, not just exist as code. I build scalable, user-focused systems with a strong foundation in software engineering principles and a curiosity for AI-driven innovation.</p>
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
          <ScrollReveal>

          <div className='grid sm:grid-cols-3 gap-6 md:w-300'>
            {highlights.map((item, index) => (
              <div key={index} className='glass border-2 p-6 md:m-5 animate-fade-in hover:scale-105 transition-transform duration-300 hover:bg-[#CBFE00]/10 hover:border-[#CBFE00]' style={{animationDelay: `${(index+1)*200}ms`}}>
                <div className='text-[#CBFE00] p-3 h-12 w-12 mb-5 rounded-full bg-[#CBFE00]/20'>
                  <item.icon className='w-6 h-6' />
                </div>
                <h3 className="text-[#CBFE00] font-bold font-electrolize text-lg">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>))}
              

          </div>
          </ScrollReveal>
        </div>

        <div>
          <div className='text-2xl font-electrolize mt-20 mb-10  text-center text-[#adc93e] tracking-widest'><span className='p-3 border-[#849443] border-b animate-pulse'>system_upgrades_log</span></div>
        </div>


        {/* Timeline */}

        <div className='relative mt-25'>
          <div className='timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#CBFE00] to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(203,254,0,0.5)]'/>

          {/* Experinece items */}

          <div className='space-y-12'>
            {education.map((edu, index) => (
              <ScrollReveal key={index}>
              <div key={index} className='relative grid md:grid-cols-2 animate-fade-in'
                style={{animationDelay: `${(index+1)*100}ms`}}
              >

                {/* timeline dots */}
                <div className='absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-[#CBFE00] -translate-x-1/2 -translate-y-1/2 ring-4 ring-[#CBFE00]/20 z-10'>

                {edu.current && (
                  <span className='absolute inset-0 w-3 h-3 bg-[#CBFE00] rounded-full animate-ping opacity-100'></span>
                )}

                </div>

                {/* content */}
                <div className={`pl-8 md:pl-0 
                  ${index%2===0 ? 
                      'md:pe-16 md:text-right' 
                      : 'md:col-start-2 md:pl-16'}`
                  }> 
                  <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/70 transition-all duration-500`}>
                    <span className='text-[#CBFE00] font-electrolize'>{edu.year}</span>
                    <h3 className='text-white font-bold text-xl pt-6 pb-1'>{edu.degree}</h3>
                    <p className='text-[#849443] font-bold'>{edu.institution}</p>
                    <p className='text-[#5e6f24] text-sm pb-4'>{edu.location}</p>
                    <p className='text-gray-400'>{edu.description}</p>

                  </div>
                </div>
              </div>

              </ScrollReveal>

            ))}

          </div>

        </div>
      </div>
    </section>
  )
}

export default About