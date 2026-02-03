import React from 'react'
import Button from '../components/Button.jsx'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const NavLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experiences', label: 'Experiences' },
  { href: '#testimonials', label: 'Testimonials' },
]

function Navbar() {
  const [isMobOpen, setisMobOpen] = useState(false)
  return (
    <header className='fixed top-0 left-0 right-0 bg-transparent py-5'>
      <nav className='container mx-auto px-6 flex items-center justify-between'>
        <a href='#' className='text-xl text-[#CBFE00] tracking-tight font-electrolize font-bold hover:text-white'>
          &lt;&gt;<span className='font-tiny5 text-white text-2xl hover:text-[#CBFE00]'>Musfique</span>&lt;/&gt;
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
        <Button>Contact Me</Button>

      </div>
      

      {/* Mobile Menu Button */}
      <button className='md:hidden text-white cursor-pointer' onClick={() => setisMobOpen(prev => !prev)}>
        {isMobOpen? <X size={24} /> : <Menu size={24} />}

      </button>

  
      </nav>

      {/* Mobile Menu */}
      {isMobOpen && (
      <div className='md:hidden glass-strong animate-fade-in'>
        <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
          {NavLinks.map((link, index) => (
              <a key={index} href={link.href}
                className='text-lg text-[#849443] font-electrolize font-bold hover:text-[#CBFE00] py-2 rounded-full'>
                {link.label}
              </a>
            ))}

            <Button>Contact Me</Button>

        </div>

      </div>
      )}
    </header>
  )
}

export default Navbar