import React from 'react'
import { Microscope, CloudRain, Code2 } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

// Content taken from the latest CV (Research & Technical Achievements).
const thesis = {
  label: 'Undergraduate Thesis',
  title: 'Sickle Cell Detection',
  subtitle: 'MobileNetV3-Small + Temporal-Difference Multiple Instance Learning (TD-MIL)',
  description:
    'A highly efficient diagnostic pipeline that classifies sickle cell disease at the donor level, designed to run on low-cost clinical hardware.',
  stats: [
    { value: '1.4M', label: 'Parameters' },
    { value: '0.990', label: 'Macro-AUC' },
    { value: '100%', label: 'Recall' },
  ],
  note: 'Results from strict donor-level cross-validation.',
  tags: ['MobileNetV3-Small', 'TD-MIL', 'Multiple Instance Learning', 'Deep Learning'],
}

const otherWork = [
  {
    icon: CloudRain,
    label: 'In progress',
    title: 'Geo-Restore GAN',
    description:
      'A dual-head adversarial framework that restores image quality in adverse weather while preserving metric depth accuracy, aimed at autonomous-vehicle perception safety.',
    tags: ['GAN', 'Image Restoration', 'Depth Estimation', 'Computer Vision'],
  },
  {
    icon: Code2,
    label: 'Ongoing practice',
    title: 'Problem Solving',
    description:
      'Solving problems on competitive programming platforms in Python and C++, focused on data structures, algorithms, and Object-Oriented Programming (OOP).',
    tags: ['Python', 'C++', 'Data Structures', 'Algorithms', 'OOP'],
  },
]

const Tag = ({ children }) => (
  <span className='text-xs font-electrolize text-gray-200 bg-[#CBFE00]/20 px-2 py-1 rounded-full border border-[#CBFE00]/30'>
    {children}
  </span>
)

const Research = () => {
  return (
    <section id='Research' className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        {/* Head description */}
        <div className='text-center'>
          <div className='space-y-8 mb-15'>
            <div className='animate-fade-in'>
              <span className='text-xl md:text-5xl glass border-3 p-5 text-[#CBFE00] font-electrolize'>
                RESEARCH LAB
              </span>
            </div>
          </div>

          <h2 className='text-2xl md:text-3xl font-electrolize font-bold text-white leading-tight animate-fade-in animation-delay-200 mt-8'>
            <span className='text-[#849443]'>Computer vision </span>
            built for the conditions it has to work in.
          </h2>
          <p className='text-gray-400 mt-4 max-w-3xl mx-auto animate-fade-in animation-delay-400'>
            Research work in deep learning, from a clinical diagnosis pipeline to perception in bad weather.
          </p>
        </div>

        <div className='max-w-6xl mx-auto mt-16 space-y-8'>
          {/* Featured: thesis */}
          <ScrollReveal>
            <article className='glass border-2 rounded-2xl p-6 md:p-10 hover:border-[#CBFE00]/70 transition-colors duration-500'>
              <div className='grid lg:grid-cols-2 gap-10 items-center'>
                <div className='space-y-4'>
                  <div className='flex items-center gap-3 text-[#CBFE00]'>
                    <span className='p-3 rounded-full bg-[#CBFE00]/20'>
                      <Microscope className='w-6 h-6' />
                    </span>
                    <span className='font-electrolize text-sm'>{thesis.label}</span>
                  </div>

                  <h3 className='text-white font-electrolize font-bold text-2xl md:text-4xl'>
                    {thesis.title}
                  </h3>
                  <p className='text-[#849443] font-electrolize font-bold'>{thesis.subtitle}</p>
                  <p className='text-gray-400'>{thesis.description}</p>

                  <div className='flex flex-wrap gap-2 pt-2'>
                    {thesis.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>

                <div>
                  <dl className='grid grid-cols-3 gap-3 md:gap-4'>
                    {thesis.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className='glass border border-[#CBFE00]/30 rounded-xl p-4 md:p-6 text-center'
                      >
                        <dt className='text-gray-400 font-electrolize text-xs md:text-sm'>
                          {stat.label}
                        </dt>
                        <dd className='text-[#CBFE00] font-electrolize font-bold text-2xl md:text-4xl mt-2 glow-text'>
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className='text-gray-500 font-electrolize text-xs md:text-sm mt-4 text-center'>
                    {thesis.note}
                  </p>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* Other research and technical work */}
          <div className='grid md:grid-cols-2 gap-8'>
            {otherWork.map((item) => (
              <ScrollReveal key={item.title}>
                <article className='glass border-2 rounded-2xl p-6 md:p-8 h-full flex flex-col hover:border-[#CBFE00]/70 transition-colors duration-500'>
                  <div className='flex items-center justify-between gap-4'>
                    <span className='p-3 rounded-full bg-[#CBFE00]/20 text-[#CBFE00]'>
                      <item.icon className='w-6 h-6' />
                    </span>
                    <span className='text-xs font-electrolize text-[#CBFE00] border border-[#CBFE00]/40 rounded-full px-3 py-1'>
                      {item.label}
                    </span>
                  </div>

                  <h3 className='text-[#849443] font-electrolize font-bold text-xl mt-6'>
                    {item.title}
                  </h3>
                  <p className='text-gray-400 text-sm mt-3 flex-grow'>{item.description}</p>

                  <div className='flex flex-wrap gap-2 mt-6'>
                    {item.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Research