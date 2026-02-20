import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send } from 'lucide-react'
import React from 'react'
import Button from '../components/Button'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

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


    const [isLoading, setIsLoading] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(
      {
        type: null,
        message: ''
      }
    );


    const handleSubmit = async (e) => {
      e.preventDefault()

      setIsLoading(true);
      setSubmitStatus(
        {
          type: null, 
          message: ''
        });

      try {
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceID || !templateID || !publicKey) {
          throw new Error("EmailJS configuration is missing. Please check your environment variables.");
        }
        await emailjs.send(serviceID, templateID,{name: formData.name, email: formData.email, message: formData.message}, publicKey)
        setSubmitStatus(
          {
            type: 'success',
            message: 'Message sent successfully!'
          }
        );
        setFormData({
          name: '',
          email: '',
          message: ''
        });

      }
      catch (error) {
        console.error("Failed to send message:", error);
        setSubmitStatus(
          {
            type: 'error',
            message: 'Failed to send message. Please try again later.'
          }
        );


      } 
      finally {
        setIsLoading(false);
      }
    };

  return (
    <section id='contact' className='py-32 relative overflow-hidden'>

      <div className='container mx-auto px-6 relative z-10'>
            {/* Head description */}
            <div className='text-center'>
  
              <div className='space-y-8 mb-15'>
                <div className='animate-fade-in animation-delay-400'>
                  <span className='text-xl md:text-5xl glass border-3  p-5 text-[#CBFE00] font-electrolize animate-pulse'>COMMUNICATION GATEWAY</span>
                </div> 
              </div>

              <h2 className='text-2xl md:text-3xl font-electrolize font-bold text-white leading-tight animate-fade-in animation-delay-400'><span className='text-[#849443]'> Listening on all open ports.</span> Ready to synchronize.
              </h2>
              <p className='text-gray-400 mt-4 max-w-5xl mx-auto animate-fade-in animation-delay-500'>
                A progressive log of escalating privileges and responsibilities. Elevating from local execution to enterprise-wide orchestration.
              </p>
            </div>

            <div className='grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
              <div className='glass p-8 mt-8 border-primary/30 animate-fade-in animation-delay-500'>
                <form className='space-y-6 font-electrolize' onSubmit={handleSubmit}>

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


                  <Button 
                  className='w-full flex items-center justify-center gap-2 font-bold' 
                  type='submit'
                  disabled={isLoading}
                  >
                    {isLoading ? 
                    (<> Sending...</>)  
                    : (<>Send Message <Send className='w-4 h-4' /></>)}
                    
                  </Button>

                  {submitStatus.type && (
                    <div className={`flex items-center mt-4 text-sm font-medium ${submitStatus.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                        {submitStatus.type === 'success' ? (
                            <CheckCircle className='w-5 h-5 flex-shrink-0 text-green-500 ml-2' />
                          ) : (
                            <AlertCircle className='w-5 h-5 flex-shrink-0 text-red-500 ml-2' />
                          )}

                          <span className='ml-2'>{submitStatus.message}</span>
                    </div>
                  )}

                </form>
              </div>

              {/* contact info  */}
              <div className='space-y-6 mt-8 animate-fade-in animation-delay-500'>
                {contactMethods.map((method, index) => (
                  <a  href={method.href} key={index} className='flex items-center gap-4 p-4 bg-[#212121] border border-[#2a2a2a] hover:bg-[#2a2a2a] transition-colors duration-300 animate-fade-in rounded-md'
                  style={{animationDelay: `${(index+1)*200}ms`}}
                  >
                    <method.icon className='w-6 h-6 text-[#CBFE00]' />
                    <div>
                      <p className='text-sm text-gray-400 font-electrolize'>{method.label}</p>
                      <p className='text-lg text-white font-medium'>{method.value}</p>
                    </div>
                  </a>
                ))}

                {/* ... inside the form or just after it ... */}

                <div className="mt-8 p-6 glass border-2 text-center">
                  <p className="text-gray-400 text-xs md:text-sm font-electrolize">
                    <span className="text-[#CBFE00] mr-2">system_status:</span> 
                    I’m not a bot, and I’ll get back to you personally. Building cool things takes time, but I always make time for a chat.
                  </p>
                </div>

              </div>

            </div>
        </div>

    </section>
  )
}

export default Contact