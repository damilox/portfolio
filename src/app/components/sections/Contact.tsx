import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  // Your Formspree ID
  const [state, handleSubmit] = useForm("xwvpbwbv");

  if (state.succeeded) {
      return (
        <section className="py-24 px-4 bg-black text-white text-center">
            <h2 className="text-4xl font-bold text-green-400 mb-4">Message Sent!</h2>
            <p className="text-xl text-gray-400">Thanks for reaching out, Dammy will get back to you soon.</p>
        </section>
      );
  }

  return (
    <footer className="relative bg-black pt-24 pb-12 overflow-hidden" id="contact">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
         <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          
          {/* LEFT SIDE: The Hook & Socials */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
              LET'S WORK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                TOGETHER.
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-md leading-relaxed mb-10">
              I'm currently available for freelance work. If you have a project that needs some creative touch, send me a message.
            </p>
            
            {/* Social Media Icons Section */}
            <div>
               <p className="text-sm text-gray-500 mb-4 font-bold tracking-widest uppercase">Connect with me</p>
               <div className="flex gap-4">
                 <SocialLink href="https://github.com/damilox" icon={<FaGithub />} />
                 <SocialLink href="https://linkedin.com/in/ajetomobidamilola" icon={<FaLinkedin />} />
                 <SocialLink href="https://wa.me/2348034842283" icon={<FaWhatsapp />} />
                 <SocialLink href="https://instagram.com/ajetomobi_damilola" icon={<FaInstagram />} />
               </div>
            </div>
          </div>

          {/* RIGHT SIDE: The Formspree Form */}
          <form onSubmit={handleSubmit} className="bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800 backdrop-blur-sm">
            
            {/* Name Input */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input
                id="name"
                type="text" 
                name="name"
                placeholder="What's your name?"
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                required
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input
                id="email"
                type="email" 
                name="email"
                placeholder="Where can I reach you?"
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            {/* Message Input */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50"
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-neutral-800 pt-8 flex justify-center md:justify-between items-center text-sm text-neutral-600">
          <p>&copy; {new Date().getFullYear()} Ajetomobi Damilola. All rights reserved.</p>
          <p className="hidden md:block">Designed & Built by Dammy.</p>
        </div>
      </div>
    </footer>
  );
};

// Simple reusable component for the icons
const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800 text-white text-xl hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300 border border-neutral-700 hover:border-white"
    >
      {icon}
    </a>
  );
};

export default Contact;