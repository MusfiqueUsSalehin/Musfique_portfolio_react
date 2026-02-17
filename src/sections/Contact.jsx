import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "musfiqueishti@gmail.com",
    href: "mailto:musfiqueishti@gmail.com"
  },

  {
    icon: Phone,
    label: "Phone",
    value: "+8801956173443",
    href: "tel:+8801956173443"
  },

  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "#"
  }

]

const Contact = () => {
  return (
    <section id='experiences' className='py-32 relative overflow-hidden'>

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
        </div>

    </section>
  )
}

export default Contact