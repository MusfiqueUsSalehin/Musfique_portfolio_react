import React, { useMemo } from 'react'
import Button from '../components/Button.jsx'
import { AnimatedBorderButton } from '../components/AnimatedBorderButton.jsx'
import { Download, ArrowRight, Github, Linkedin, Facebook } from 'lucide-react'
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

  return (
    <section className='relative min-h-screen flex items-center overflow-hidden '>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot) => (
          <div
            key={dot.id} // 2. Always provide a unique key
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

              <h1 className="font-black text-5xl md:text-6xl lg:text-[8rem] tracking-tighter uppercase opacity-70 hover:opacity-100 transition-opacity duration-300"
              style={{
                WebkitTextStroke: '1px #444', 
                color: 'transparent'
                }}>
                US SALEHIN
                </h1>


                {/* Description and decorative line */}

                <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center gap-6 max-w-2xl animate-fade-in animation-delay-400">
                  {/* Vertical decorative line */}
                  <div className="hidden md:block h-16 w-1 bg-[#2a2a2a] relative">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-[#CBFE00]"></div>
                  </div>

                  <p className="text-gray-400 text-xs md:text-sm tracking-[0.2em] leading-loose text-center md:text-left font-electrolize uppercase max-w-lg">
                    Processing patterns to build <br className="hidden md:block" />
                    <span className="text-white">high-performance systems</span> and <br className="hidden md:block" />
                    cognitive solutions.
                  </p>
                </div>

            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300 justify-center md:justify-start">
              
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
              <div className="h-12 w-1 bg-[#CBFE00] relative">
                    
                </div>
              
              <div className='flex items-center gap-4'>
                {[
                  {icon: Github, href: "https://github.com/MusfiqueUsSalehin"},
                  {icon: Linkedin, href: "https://www.linkedin.com/in/musfique-us-salehin/"},
                  {icon: Facebook, href: "#"}
                ].map((social, index) => (
                  <div key={index} className="hover:scale-150 transition-transform duration-200">
                    <a key={index} href={social.href}>
                      {<social.icon className="w-6 h-6 text-gray-400 hover:text-[#CBFE00] transition-colors duration-200" />}
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
              <div className='relative glass rounded-3xl p-2 glow-border'>
                
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
a
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Hero