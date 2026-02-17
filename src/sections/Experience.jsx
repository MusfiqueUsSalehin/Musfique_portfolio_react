import React from 'react'

const experiences = [
  {
    period: '2023 - Present',
    role: 'Rider Service Agent, Operations',
    company: 'Foodpanda,Bangladesh',
    description: 'Conducting quality checks, outbound calls, hiring leads, fraud detection and providing feedback to ensuring a seamless experience for riders and customers.',
    skills: ['Communication', 'Problem Solving', 'Data Analysis','Teamwork'],
    current: true
    },

    {
    period: '2023 - Present',
    role: 'Rider Service Agent , Operations',
    company: 'Foodpanda, Bangladesh',
    description: 'Conducting quality checks, outbound calls, hiring leads, fraud detection and providing feedback to ensuring a seamless experience for riders and customers.',
    skills: ['Communication', 'Problem Solving', 'Data Analysis','Teamwork'],
    current: true
    },

    {
    period: '2023 - Present',
    role: 'Rider Service Agent, Operations',
    company: 'Foodpanda, Bangladesh',
    description: 'Conducting quality checks, outbound calls, hiring leads, fraud detection and providing feedback to ensuring a seamless experience for riders and customers.',
    skills: ['Communication', 'Problem Solving', 'Data Analysis','Teamwork'],
    current: true
    },
]

const Experience = () => {
  return (
    <section id='experiences' className='py-32 relative overflow-hidden'>

      {/* <div className='absolute top-1/4 left-1/3 w-96 h-96 bg-[#212412] rounded-full blur-3xl -translate-y-1/2'/> */}

          <div className='container mx-auto px-6 relative z-10'>
            {/* Head description */}
            <div className='text-center'>
  
              <div className='space-y-8 mb-15'>
                <div className='animate-fade-in'>
                  <span className='text-xl md:text-5xl glass border-3  p-5 text-[#CBFE00] font-electrolize'>RUNTIME ENVIRONMENT</span>
                </div> 
              </div>

              <h2 className='text-2xl md:text-3xl font-electrolize font-bold text-white leading-tight animate-fade-in animation-delay-200'>Stress-Tested<span className='text-[#849443]'> Career History</span> 
              </h2>
              <p className='text-gray-400 mt-4 max-w-5xl mx-auto animate-fade-in animation-delay-400'>
                A progressive log of escalating privileges and responsibilities. Elevating from local execution to enterprise-wide orchestration.
              </p>
            </div>

            {/* Timeline */}

            <div className='relative mt-25'>
              <div className='timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#CBFE00] to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(203,254,0,0.5)]'/>

              {/* Experinece items */}

              <div className='space-y-12'>
                {experiences.map((experience, index) => (
                  <div key={index} className='relative grid md:grid-cols-2 animate-fade-in'
                    style={{animationDelay: `${(index+1)*100}ms`}}
                  >

                    {/* timeline dots */}
                    <div className='absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-[#CBFE00] -translate-x-1/2 -translate-y-1/2 ring-4 ring-[#CBFE00]/20 z-10'>

                    {experience.current && (
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
                        <span className='text-[#CBFE00] font-electrolize'>{experience.period}</span>
                        <h3 className='text-white font-bold text-xl pt-6 pb-1'>{experience.role}</h3>
                        <p className='text-[#849443] font-bold pb-4'>{experience.company}</p>
                        <p className='text-gray-400'>{experience.description}</p>

                        <div className='pt-4'>
                          {experience.skills && experience.skills.map((skill, index) => (
                            <span key={index} className='text-[#CBFE00] bg-[#1a1c0c] border border-[#CBFE00] px-3 py-1 rounded-full mr-2 mb-2 text-sm'>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                ))}

              </div>

            </div>

          </div>

          

      
    </section>
  )
}

export default Experience