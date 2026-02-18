
import React from 'react';
import ScrollReveal from './ScrollReveal';

interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <header className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#03090F]">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full animate-slow-zoom origin-center">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-40">
            <source src="https://videos.pexels.com/video-files/5091624/5091624-hd_1920_1080_24fps.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#03090F]/80 via-[#03090F]/30 to-[#03090F]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 py-1.5 px-4 border border-[#4FD1C5]/30 rounded-full backdrop-blur-md bg-[#4FD1C5]/5 text-[#4FD1C5] mb-8 cursor-default">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4FD1C5] animate-pulse"></span>
            <span className="text-[10px] tracking-[0.3em] uppercase">Ignite your Excellence</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h1 className="serif text-5xl md:text-7xl lg:text-8xl text-[#F7F5F0] leading-[1.1] tracking-tight font-light mb-12">
            <div className="overflow-hidden">
              <span className="block animate-[translateY_1s_ease-out]">탁월함을 일깨우는 코칭</span>
            </div>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="text-[#AABBC8] text-lg font-light max-w-2xl mx-auto leading-relaxed mb-16 opacity-80 break-keep">
            당신은 스스로 생각하는 것보다 훨씬 더 큰 파워와 잠재력을 지니고 있습니다. 인피니티 코칭은 경영자, 임원, 비전가들의 사고를 자유롭게 하여 창의적인 방식으로 최적의 성과와 의미 있는 유산을 만들도록 함께 합니다.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <button 
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-6 px-10 py-5 bg-[#4FD1C5] text-[#03090F] text-[10px] uppercase tracking-[0.3em] font-bold overflow-hidden transition-all duration-500 hover:bg-[#F7F5F0]"
          >
            <span className="relative z-10">문의하기</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 group-hover:translate-x-2 transition-transform duration-500"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </ScrollReveal>
      </div>
    </header>
  );
};

export default Hero;
