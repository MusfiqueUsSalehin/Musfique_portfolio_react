import React, { useMemo } from 'react'

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
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[#849443]'>
                <span className='w-2 h-2 bg-[#CBFE00] rounded-full animate-pulse' />
                Aspiring Software Engineer • AI/Automation Enthusiast
              </span>

            </div>

            {/*Headline*/}
            <div>
              <h1>
                
              </h1>

            </div>


          </div>
          {/* right column */}
          <div>
            <div>

            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Hero