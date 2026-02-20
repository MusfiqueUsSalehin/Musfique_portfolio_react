import React, { useMemo } from 'react'
import Button from '../components/Button.jsx'
import { AnimatedBorderButton } from '../components/AnimatedBorderButton.jsx'
import { Mouse,ChevronDown, Download, Github, Linkedin, Facebook, Instagram } from 'lucide-react'
import { IKImage } from 'imagekitio-react';

const Hero = () => {
  // 1. Generate the dot data once and "freeze" it in memory
  const dots = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
    }));
  }, []); // Empty dependency array means "only run this once"

  const urlEndpoint = "https://ik.imagekit.io/pft5wq5du";

  const skills = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" }, // Using Azure SQL generic or switch to postgresql if preferred
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/ED1F5F" }, // n8n official SVG
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" }, // Note: Vercel dark logo might blend with dark bg, usually inverted is needed
  ];


  const handleCV = () => {
    // Path to your file in the public folder
    const fileUrl = '/Musfique_CVR.pdf';
    window.open(fileUrl, 'noopener,noreferrer'); 
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.target = '_blank'; // Opens the PDF in a new tab to view
    link.download = 'Musfique_Us_Salehin_CV.pdf'; // Suggests a filename for download
    
    // Append, click, and remove the link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className='relative min-h-screen flex items-center overflow-hidden '>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot) => (
          <div
            key={dot.id} // Always provide a unique key
            className="absolute w-1.5 h-1.5 rounded-full opacity-60 blur-[3px]"
            style={{
              backgroundColor: "#849443",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>


      {/* Main content of the Hero section */}

      <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>

          
          {/* left column */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[11px] md:text-sm text-[#849443]'>
                <span className='w-2 h-2 bg-[#CBFE00] rounded-full animate-pulse' />
                Aspiring Software Engineer • AI/Automation Enthusiast
              </span>

            </div>

            {/*NameShow*/}
            <div>
              <h1 className="text-white font-black text-5xl md:text-7xl lg:text-[8.5rem] tracking-tighter hover:scale-105 transition-transform duration-500 cursor-default">
                MUSFIUQUE
                
              </h1 >

              <h1 className="font-black text-5xl md:text-6xl lg:text-[8rem] tracking-tighter uppercase opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-default"
              style={{
                WebkitTextStroke: '1px #444', 
                color: 'transparent'
                }}>
                US SALEHIN
                </h1>


                {/* Description and decorative line */}

                <div className="mt-6 mb-12 md:mt-16 flex flex-row md:flex-row items-center gap-6 max-w-2xl animate-fade-in animation-delay-400">
                  {/* Vertical decorative line */}
                  <div className="h-16 w-1 bg-[#2a2a2a] relative">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-[#CBFE00]"></div>
                  </div>

                  <p className="text-gray-400 text-xs md:text-sm tracking-[0.2em] leading-loose text-left md:text-left font-electrolize uppercase max-w-lg">
                    Processing patterns to build <br className="hidden md:block" />
                    <span className="text-white">high-performance systems</span> and <br className="hidden md:block" />
                    cognitive solutions.
                  </p>
                </div>

            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300 justify-center md:justify-start">
              
              <AnimatedBorderButton onClick={handleCV}>
                <Download className="w-5 h-5" />
                Get Resume
              </AnimatedBorderButton>
              <div className="hidden md:block h-12 w-1 bg-[#CBFE00] relative"/>
                    
                
              
              <div className='flex items-center gap-4'>
                {[
                  {icon: Github, href: "https://github.com/MusfiqueUsSalehin"},
                  {icon: Linkedin, href: "https://www.linkedin.com/in/musfique-us-salehin/"},
                  {icon: Facebook, href: "https://www.facebook.com/musfiqueusalehin.musfiqueussalehin/"},
                  {icon: Instagram, href: "https://www.instagram.com/salehin_isti/"}
                ].map((social, index) => (
                  <div key={index} className="hover:scale-150 active:scale-150 transition-transform duration-200">
                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                      {<social.icon className="w-7 h-7 text-gray-400 hover:text-[#CBFE00] transition-colors duration-200" />}
                    </a>
                  </div>
                  ))}
              </div>
            </div>


          </div>
          {/* right column */}
          <div className='relative animate-fade-in animation-delay-200'>
            {/*profile Image*/}
            <div className='relative max-w-md mx-auto'>
              <div className='relative glass rounded-3xl p-2 glow-border overflow-hidden'>
                
                {/* 2. Replace the standard <img> with <IKImage> */}
                <IKImage
                  urlEndpoint={urlEndpoint}
                  path="/IMG-20260208-WA0129 (5).jpg.jpeg" // The name of the file in ImageKit
                  transformation={[{
                    height: 650, // Fetch a reasonably sized image, not the full 4k original
                    width: 500,
                    quality: 80, // Reduces file size without visible loss
                  }]}
                  lqip={{ active: true }} // Optional: Shows a blurred placeholder while loading
                  loading="lazy"
                  alt="Profile Image"
                  className="rounded-3xl hover:scale-105 transition-transform duration-500"
                />

                {/* --- SCANNING EFFECT OVERLAY --- */}
                <div className="absolute inset-x-0 h-5 bg-gradient-to-b from-transparent via-[#CBFE00]/30 to-transparent animate-scan z-20 pointer-events-none" />
                
                {/* Optional: Static Scanlines texture for extra detail */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,11,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_4px,6px_100%] pointer-events-none opacity-20" />

                

              </div>

              {/*floating Badge*/}
                <div className="absolute -bottom-4 -right-4 bg-black px-4 py-3 border-2 border-[#849443]">
                  <div className='flex items-center gap-3'>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'/>
                    <span className='text-sm font-electrolize text-[#CBFE00]'>AVAILABLE</span>
                    
                  </div>
                </div> 

              {/*Stats Badge*/}
                <div className="absolute -top-4 -left-4 glass px-4 py-3 border-2 border-[#849443] animate-float animation-delay-500">
                  <div className='flex items-center gap-3'>

                    
                    <span className='text-sm font-electrolize text-[#CBFE00]'>_system_is_learning_</span>
                    
                  </div>
                </div> 
                
            </div>
          </div>


        </div>


        {/* Skills Cloud */}
        <div className='mt-40 animate-fade-in animation-delay-400'>
          <div className='text-sm font-electrolize mb-10  text-center text-[#849443] tracking-widest'><span className='p-3 border-[#849443] border-b'>TECHNICAL DIRECTORY</span></div>
          
          <div className='relative w-full overflow-hidden mask-gradient'> 
            {/* Added mask-gradient class if you want fade edges, otherwise simple overflow-hidden */}
            
            <div className='flex w-max animate-marquee'>
              {/* We map twice to create the seamless infinite loop effect */}
              {[...skills, ...skills].map((skill, index) => (
                <div 
                  key={index} 
                  className='flex flex-col items-center justify-center gap-3 mx-8 group min-w-[80px]'
                >
                  <div className="relative p-4 rounded-xl bg-[#2a2a2a]/50 border border-[#333] group-hover:border-[#CBFE00]/50 group-hover:bg-[#CBFE00]/10 transition-all duration-300">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-10 h-10 object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                    />
                  </div>
                  <span className="text-xs font-electrolize text-[#CBFE00] md:text-gray-500 md:group-hover:text-[#CBFE00] transition-colors duration-300 uppercase tracking-wider">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- SCROLL INDICATOR --- */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition-opacity duration-300">
        <a href="#about" className='flex flex-col items-center'>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#849443] font-electrolize animate-pulse">
              Scroll Down
            </span>
            <Mouse className="w-6 h-6 text-[#CBFE00]" />
            <ChevronDown className="w-4 h-4 text-[#849443] animate-bounce" />
        </a>
      </div>
    </section>
  )
}

export default Hero