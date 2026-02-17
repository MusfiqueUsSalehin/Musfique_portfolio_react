import { Mail, MapPin, Phone, Send } from 'lucide-react'
import React from 'react'
import Button from '../components/Button'
import { useState } from 'react'

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
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });


    const handleSubmit = (e) => {
      e.preventDefault()
    };

  return (
    <section id='experiences' className='py-32 relative overflow-hidden'>

      <div className='container mx-auto px-6 relative z-10'>
            {/* Head description */}
            <div className='text-center'>
  
              <div className='space-y-8 mb-15'>
                <div className='animate-fade-in'>
                  <span className='text-xl md:text-5xl glass border-3  p-5 text-[#CBFE00] font-electrolize animate-pulse'>COMMUNICATION GATEWAY</span>
                </div> 
              </div>

              <h2 className='text-2xl md:text-3xl font-electrolize font-bold text-white leading-tight animate-fade-in animation-delay-200'><span className='text-[#849443]'> Listening on all open ports.</span> Ready to synchronize.
              </h2>
              <p className='text-gray-400 mt-4 max-w-5xl mx-auto animate-fade-in animation-delay-400'>
                A progressive log of escalating privileges and responsibilities. Elevating from local execution to enterprise-wide orchestration.
              </p>
            </div>

            <div className='grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
              <div className='glass p-8 rounded-3xl mt-8 border-primary/30 animate-fade-in animation-delay-300'>
                <form className='space-y-6 font-electrolize'>

                  <div>
                    <label htmlFor="Name">Name:</label>
                    <input type="text" name='name' id='name' required placeholder='Your name' className='w-full p-3 mt-2 mb-2 rounded-md bg-[#212121] border border-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#CBFE00]/50 focus:border-[#CBFE00]/50 transition-colors duration-300'
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    /> 
                  </div>


                  <div>
                    <label htmlFor="Email">Email:</label>
                    <input type="email" name='email' id='email' placeholder='your@gmail.com' required className='w-full p-3 mt-2 rounded-md bg-[#212121] border border-[#2a2a2a] mb-2 focus:outline-none focus:ring-2 focus:ring-[#CBFE00]/50 focus:border-[#CBFE00]/50 transition-colors duration-300'
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                  </div>


                  <div>
                    <label htmlFor="Message">Message:</label>
                    <textarea name="message" id="message" rows="5" required placeholder='Your message' className='w-full p-3 mb-2 mt-2 rounded-md bg-[#212121] border border-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#CBFE00]/50 focus:border-[#CBFE00]/50 transition-colors duration-300'
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}/>
                  </div>


                  <Button className='w-full flex items-center justify-center gap-2 font-bold' type='submit'>
                    Send Message <Send className='w-4 h-4' />
                  </Button>

                </form>
              </div>
            </div>
        </div>

    </section>
  )
}

export default Contact