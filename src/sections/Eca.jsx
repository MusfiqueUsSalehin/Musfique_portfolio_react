import React from 'react'
import { Terminal, X, ChevronLeft, ChevronRight, Image as ImageIcon, Send } from 'lucide-react';
import { AnimatedBorderButton } from '../components/AnimatedBorderButton.jsx'; // Assuming you have this
import ScrollReveal from '../components/ScrollReveal.jsx'; // Assuming you have this
import { useState, useEffect, useRef } from 'react';

// --- MOCK DATA FOR YOUR ECAs ---
// Replace the 'image' paths with your actual ImageKit URLs or local paths
const ecaDatabase = {
  sports: {
    title: "Sports & Athletics",
    items: [
      { 
        id: 1, 
        title: "2x 'Best Athlete' & 15 Medals", 
        desc: "Dominated school athletics as a 4-time group champion, securing 15 medals and the prestigious overall 'Best Athlete' title twice.", 
        image: "" // Replace with a photo of your medals or you on the track!
      },
      { 
        id: 2, 
        title: "BRACU RS63 Football Runner-Up", 
        desc: "Anchored the defense in the university RS (Residential Semester) football tournament, leading the team to a runner-up finish, alongside a history of inter-college match victories.", 
        image: "" // Replace with a photo of your football team
      },
      { 
        id: 3, 
        title: "Competitive Badminton", 
        desc: "Actively engaged in area-based badminton tournaments, maintaining a strong, competitive athletic streak.", 
        image: "" // Replace with a badminton shot
      }
    ]
  },




  clubs: {
    title: "Leadership & Club Involvements",
    items: [
      { 
        id: 1, 
        title: "Secretary of Finance & Events", 
        desc: "BRAC University Arts and Photography Society: Managed finances and executed sensitive events under pressure. Developed strong leadership, communication, and teamwork skills through dedicated volunteer initiatives.", 
        image: "" // Replace with a photo from a BUAPS event or your committee
      },
      { 
        id: 2, 
        title: "Junior Executive of Arts & Design", 
        desc: "Robotics Club of BRAC University: Led design teams and collaborated on tech-driven mini-projects. Fostered strong communication and management abilities within a fast-paced, technical environment.", 
        image: "" // Replace with a photo from a ROBU seminar or project showcase
      }
    ]
  },




  hobbies: {
    title: "Hobbies & Creative Pursuits",
    items: [
      { 
        id: 1, 
        title: "Nature Photography & Travel", 
        desc: "Passionate about capturing the beauty of the natural world through the lens. An avid traveler with a lifelong goal to explore the globe and document its diverse landscapes.", 
        image: "" // Replace with one of your best nature photos!
      },
      { 
        id: 2, 
        title: "Sketching & Visual Arts", 
        desc: "Dedicating free time to sketching and drawing. It serves as a creative outlet that hones my attention to detail and visual design skills.", 
        image: "" // Replace with a scan or photo of your favorite sketch
      },
      { 
        id: 3, 
        title: "Musical Leisure: The Flute", 
        desc: "Enjoying the rhythmic and calming aspects of music by playing the flute. It brings a great sense of balance and mindfulness to a fast-paced, tech-driven life.", 
        image: "" // Replace with a photo of your flute or you playing
      }
    ]
  },



  watchlist: {
    title: "Anime & Movies",
    items: [
      { id: 1, title: "Naruto", desc: "The classic ninja journey of determination, growth, and friendship.", image: "" },
      { id: 2, title: "One Piece", desc: "An epic, world-spanning pirate adventure for the ultimate treasure.", image: "" },
      { id: 3, title: "Bleach", desc: "Supernatural action filled with Soul Reapers and high-stakes battles.", image: "" },
      { id: 4, title: "Black Clover", desc: "A magicless boy's relentless quest to become the Wizard King.", image: "" },
      { id: 5, title: "Solo Leveling", desc: "Thrilling action tracking the weakest hunter becoming the strongest.", image: "" },
      { id: 6, title: "Hunter x Hunter", desc: "A brilliantly constructed world of Hunters, Nen, and deep storytelling.", image: "" },
      { id: 7, title: "My Hero Academia", desc: "The inspiring journey of a quirkless kid becoming the world's greatest hero.", image: "" },
      { id: 8, title: "The Shawshank Redemption", desc: "A profound cinematic masterclass on hope, patience, and resilience.", image: "" },
      { id: 9, title: "Iron Man", desc: "The iconic, tech-driven origin story that launched the Marvel Cinematic Universe.", image: "" },
      { id: 10, title: "The Avengers", desc: "The ultimate blockbuster superhero team-up that changed cinema.", image: "" },
      { id: 11, title: "A Quiet Place", desc: "A tense, atmospheric thriller and a masterclass in modern suspense.", image: "" }
    ]
  }
};


  

const Eca = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'ECA_TERMINAL v1.0 initialized.' },
    { type: 'system', text: 'Type "help" to see available commands.' }
  ]);
  
  // State for the popup modal
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const terminalScrollRef = useRef(null);

  // Auto-scroll terminal to bottom when new logs are added
  // Auto-scroll terminal to bottom ONLY when new logs are added
  // Auto-scroll terminal to bottom ONLY when new logs are added
  useEffect(() => {
    if (terminalScrollRef.current && history.length > 2) {
      // This strictly scrolls the inside of the box, NEVER the whole webpage
      terminalScrollRef.current.scrollTop = terminalScrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: 'user', text: `visitor@portfolio:~$ ${cmd}` }];

    if (cmd === 'help') {
      newHistory.push({ type: 'system', text: 'Available commands:' });
      newHistory.push({ type: 'system', text: '  show sports       - View sports achievements' });
      newHistory.push({ type: 'system', text: '  show clubs        - View club activities' });
      newHistory.push({ type: 'system', text: '  show hobbies      - View photography & sketches' });
      newHistory.push({ type: 'system', text: '  show watchlist    - View anime & movie watchlist' });
      newHistory.push({ type: 'system', text: '  clear             - Clear terminal history' });
    } 
    else if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } 
    else if (cmd.startsWith('show ')) {
      const category = cmd.replace('show ', '');
      // Map user input to our database keys
      const keyMap = {
        'sports': 'sports',
        'clubs': 'clubs',
        'hobbies': 'hobbies',
        'watchlist': 'watchlist'
      };

      const dbKey = keyMap[category];

      if (dbKey && ecaDatabase[dbKey]) {
        newHistory.push({ type: 'system', text: `Accessing ${category} records... Executing UI sequence.` });
        setActiveCategory(dbKey);
        setCurrentSlide(0); // Reset slider
      } else {
        newHistory.push({ type: 'error', text: `Error: Category '${category}' not found. Type "help".` });
      }
    } else {
      newHistory.push({ type: 'error', text: `Command not found: ${cmd}. Type "help".` });
    }

    setHistory(newHistory);
    setInput('');
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === ecaDatabase[activeCategory].items.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? ecaDatabase[activeCategory].items.length - 1 : prev - 1
    );
  };

  const closeModal = () => {
    setActiveCategory(null);
    setHistory(prev => [...prev, { type: 'system', text: 'UI sequence terminated. Connection closed.' }]);
  };



  return (
    <section id="Eca" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xl md:text-5xl glass border-3 p-5 text-[#CBFE00] font-electrolize uppercase tracking-wider">
              Extracurricular Logs
            </span>
            <p className="text-gray-400 mt-8 font-electrolize">
              Access the terminal below to query non-academic system records.
            </p>
          </div>
        </ScrollReveal>

        {/* --- TERMINAL UI --- */}
        <ScrollReveal>
          <div className="glass-strong rounded-xl overflow-hidden border border-[#3b470d] shadow-2xl shadow-[#CBFE00]/10">
            {/* Terminal Header */}
            <div className="bg-[#111] px-4 py-3 flex items-center gap-2 border-b border-[#3b470d]">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-xs font-electrolize text-gray-400 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> root@musfique/eca
              </div>
            </div>

            {/* Terminal Body */}
            <div ref={terminalScrollRef} className="p-6 h-[400px] overflow-y-auto font-mono text-sm md:text-base flex flex-col gap-2 scrollbar-thin scrollbar-thumb-[#849443] scrollbar-track-transparent">
              {history.map((line, index) => (
                <div key={index} className={`
                  ${line.type === 'system' ? 'text-blue-400' : ''}
                  ${line.type === 'user' ? 'text-white' : ''}
                  ${line.type === 'error' ? 'text-red-400' : ''}
                `}>
                  {line.text}
                </div>
              ))}
              
            </div>

            {/* Terminal Input Form */}
            <form onSubmit={handleCommand} className="border-t border-[#3b470d] bg-[#0a0a0a] p-4 flex items-center gap-3">
              <span className="text-[#CBFE00] font-mono">visitor@portfolio:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoComplete="off"
                className="flex-1 bg-transparent text-white font-mono outline-none border-none caret-[#CBFE00]"
                placeholder="Type a command..."
                
              />
              <button type="submit" className="text-[#849443] hover:text-[#CBFE00] transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </ScrollReveal>

      </div>

      {/* --- POPUP MODAL CAROUSEL --- */}
      {activeCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          {/* Blurred Background Overlay */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-pointer"
            onClick={closeModal}
          ></div>

          {/* Modal Card */}
          <div className="glass-strong relative w-full max-w-4xl rounded-2xl border border-[#CBFE00]/50 overflow-hidden shadow-[0_0_50px_rgba(203,254,0,0.15)] z-10 flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#3b470d] bg-black/40">
              <h3 className="text-xl font-electrolize text-[#CBFE00] uppercase tracking-wider">
                {ecaDatabase[activeCategory].title}
              </h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-red-500 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Carousel Body */}
            <div className="relative p-6 group">
              {/* Image Box */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black flex items-center justify-center">
                {/* Fallback icon if image doesn't load */}
                <ImageIcon className="absolute w-20 h-20 text-gray-800" />
                
                <img 
                  src={ecaDatabase[activeCategory].items[currentSlide].image}
                  alt={ecaDatabase[activeCategory].items[currentSlide].title}
                  className="relative z-10 w-full h-full object-cover animate-fade-in"
                  key={currentSlide} // Forces re-render animation on slide change
                />
              </div>

              {/* Caption */}
              <div className="mt-6 text-center">
                <h4 className="text-2xl font-bold text-white mb-2 font-electrolize">
                  {ecaDatabase[activeCategory].items[currentSlide].title}
                </h4>
                <p className="text-gray-400">
                  {ecaDatabase[activeCategory].items[currentSlide].desc}
                </p>
                <div className="mt-4 flex justify-center gap-2">
                  {ecaDatabase[activeCategory].items.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-[#CBFE00]' : 'w-2 bg-gray-600'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Carousel Controls */}
              {ecaDatabase[activeCategory].items.length > 1 && (
                <>
                  <button 
                    onClick={(e)=>{
                      e.stopPropagation();
                      prevSlide();
                    }}
                    className="absolute z-50 left-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#CBFE00] text-white hover:text-black p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={(e)=>{
                      e.stopPropagation();
                      
                      nextSlide();
                    }}
                    className="absolute z-50 right-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#CBFE00] text-white hover:text-black p-3 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Eca