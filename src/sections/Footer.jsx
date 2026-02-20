import React from 'react'
import { ArrowUp } from 'lucide-react'
import { Code, GitBranch, Layers, Wifi } from 'lucide-react'

const Footer = () => {

    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className="bg-[#050505] border-t border-[#CBFE00]/30 py-4 font-electrolize text-xs md:text-sm text-gray-500 relative z-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left: System Status */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 hover:text-[#CBFE00] transition-colors cursor-default">
            <GitBranch className="w-4 h-4" />
            <span>main</span>
          </div>
          
          <div className="flex items-center gap-2 hover:text-green-400 transition-colors cursor-default">
            <Wifi className="w-4 h-4" />
            <span>Online</span>
          </div>

          <div className="hidden md:flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-green-500/50 animate-pulse"></span>
             <span>All systems nominal</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-gray-600 animate-pulse">
           © {new Date().getFullYear()} Musfique Us Salehin
        </div>

        {/* Return to top */}
        <button 
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-gray-400 hover:text-[#CBFE00] transition-all duration-300"
        >
          <span className="uppercase tracking-widest text-xs">Return to Surface</span>
          <div className="p-2 border border-white/10 rounded-full group-hover:border-[#CBFE00] transition-colors">
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </div>
        </button>

      </div>
    </footer>
  );
};

export default Footer