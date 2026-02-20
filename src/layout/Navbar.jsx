import React, { use } from 'react'
import Button from '../components/Button.jsx'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useEffect } from 'react'

const NavLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experiences', label: 'Experiences' },
  { href: '#Research', label: 'Research' },
  { href: '#Eca', label: 'ECAs' },
  
]

function Navbar() {
  const [isMobOpen, setisMobOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
  
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      }
      else {
        setIsScrolled(false)
      }}

    window.addEventListener('scroll', handleScroll)

    return () => {window.removeEventListener('scroll', handleScroll)}
  })
  

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? 'glass-strong py-3 rounded-full top-5 md:top-3 left-15 right-15' : 'bg-transparent py-5'} z-50`}>
      <nav className='container mx-auto px-6 flex items-center justify-between'>
        <a href='#' className='text-xl text-[#CBFE00] tracking-tight font-electrolize font-bold hover:text-white'>
          &lt;<span className='font-tiny5 text-white text-2xl hover:text-[#CBFE00]'> Musfique </span>/&gt;
        </a>

      <div className='hidden md:flex items-center gap-1'>
          <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
            {NavLinks.map((link, index) => (
              <a key={index} href={link.href}
                className='text-sm text-[#849443] font-electrolize font-bold hover:text-[#CBFE00] px-3 py-2 rounded-full'>
                {link.label}
              </a>
            ))}

        </div>
      </div>

      {/* CTA button */}
      <div className='hidden md:block'>
          <a 
            href="#contact" 
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-[#CBFE00]/10 border border-[#CBFE00]/30 rounded-full font-electrolize font-bold text-sm text-[#CBFE00] hover:bg-[#CBFE00] hover:text-black hover:border-[#CBFE00] transition-all duration-300 hover:shadow-[0_0_20px_rgba(203,254,0,0.4)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#CBFE00] group-hover:bg-black animate-pulse transition-colors duration-300" />
            INITIATE_CONTACT
          </a>
        </div>
      

      {/* Mobile Menu Button */}
      <button className='md:hidden text-white cursor-pointer' onClick={() => setisMobOpen(prev => !prev)}>
        {isMobOpen? <X size={24} /> : <Menu size={24} />}

      </button>

  
      </nav>

      {/* Mobile Menu */}
      {isMobOpen && (
      <div className='absolute top-[110%] left-0 right-0 mt-2md:hidden glass-strong animate-fade-in'>
        <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
          {NavLinks.map((link, index) => (
              <a key={index} href={link.href}
                onClick={()=>setisMobOpen(false)}
                className='text-lg text-[#849443] font-electrolize font-bold hover:text-[#CBFE00] py-2 rounded-full'>
                {link.label}
              </a>
            ))}

            <a 
              href="#contact" 
              onClick={() => setisMobOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-[#CBFE00]/10 border border-[#CBFE00]/50 rounded-xl font-electrolize font-bold text-[#CBFE00] hover:bg-[#CBFE00] hover:text-black transition-all duration-300 active:scale-95"
            >
               <span className="w-2 h-2 rounded-full bg-[#CBFE00] animate-pulse" />
               INITIATE_CONTACT
            </a>

        </div>

      </div>
      )}
    </header>
  )
}

export default Navbar