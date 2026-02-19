
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  lang: 'ko' | 'en';
  setLang: (l: 'ko' | 'en') => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    'About', 'Coaching', 'Programs', 'Assessments', 'AI Coach', 'BLOG', 'CONTACT'
  ];

  const blogUrl = "https://brunch.co.kr/@cavabien03";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (itemToId(id) === 'blog') return;

    e.preventDefault();
    const targetId = itemToId(id);
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const itemToId = (item: string) => item.toLowerCase().replace(/\s+/g, '-');

  return (
    <nav className={`fixed top-0 w-full z-50 px-6 md:px-12 transition-all duration-500 ease-in-out ${
      isScrolled ? 'py-4 bg-[#03090F]/90 backdrop-blur-md text-[#F7F5F0]' : 'py-8 mix-blend-difference text-[#F7F5F0]'
    }`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div 
          className="serif text-2xl md:text-3xl tracking-[0.1em] font-bold opacity-100 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          INFINITY COACHING
        </div>
        
        <div className="hidden lg:flex gap-8 items-center">
          {menuItems.map((item) => {
            const isBlog = item === 'BLOG';
            return (
              <a 
                key={item}
                href={isBlog ? blogUrl : `#${itemToId(item)}`}
                target={isBlog ? "_blank" : undefined}
                rel={isBlog ? "noopener noreferrer" : undefined}
                onClick={(e) => handleNavClick(e, item)}
                className={`text-[12px] uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-1.5 ${
                  isBlog 
                    ? 'text-[#4FD1C5] font-bold opacity-100 hover:text-white' 
                    : 'opacity-70 hover:opacity-100 hover:text-[#4FD1C5]'
                }`}
              >
                {item}
                {isBlog && <span className="w-1 h-1 rounded-full bg-[#4FD1C5]"></span>}
              </a>
            );
          })}
          
          <button 
            onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            className="ml-4 border border-white/20 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest hover:border-[#4FD1C5] hover:text-[#4FD1C5] transition-all"
          >
            {lang === 'ko' ? 'English' : '한국어'}
          </button>
        </div>

        <button 
          className="lg:hidden text-[#F7F5F0] focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>}
          </svg>
        </button>
      </div>

      <div className={`lg:hidden fixed inset-0 bg-[#03090F] z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        {menuItems.map((item) => {
          const isBlog = item === 'BLOG';
          return (
            <a 
              key={item}
              href={isBlog ? blogUrl : `#${itemToId(item)}`}
              target={isBlog ? "_blank" : undefined}
              rel={isBlog ? "noopener noreferrer" : undefined}
              onClick={(e) => handleNavClick(e, item)}
              className={`serif text-3xl transition-colors ${
                isBlog ? 'text-[#4FD1C5]' : 'text-[#F7F5F0] hover:text-[#4FD1C5]'
              }`}
            >
              {item}
            </a>
          );
        })}
        <button 
          onClick={() => { setLang(lang === 'ko' ? 'en' : 'ko'); setIsMobileMenuOpen(false); }}
          className="mt-4 border border-[#4FD1C5]/30 px-6 py-2 rounded-full text-[12px] uppercase tracking-widest text-[#4FD1C5]"
        >
          {lang === 'ko' ? 'Switch to English' : '한국어로 변경'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
