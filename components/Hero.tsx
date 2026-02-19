
import React from 'react';
import ScrollReveal from './ScrollReveal';

interface HeroProps {
  lang: 'ko' | 'en';
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ lang, onOpenContact }) => {
  const content = {
    ko: {
      tag: "Ignite your Excellence",
      title: "탁월함을 일깨우는 코칭",
      desc: "당신은 스스로 생각하는 것보다 훨씬 더 큰 파워와 잠재력을 지니고 있습니다. 인피니티 코칭은 경영자, 임원, 비전가들의 사고를 자유롭게 하여 창의적인 방식으로 최적의 성과와 의미 있는 유산을 만들도록 함께 합니다."
    },
    en: {
      tag: "Ignite your Excellence",
      title: "Coaching That Ignites Excellence",
      desc: "You possess far greater power and potential than you realize. INFINITY COACHING empowers executives, leaders, and visionaries to free their thinking and create optimal performance and a meaningful legacy through creative approaches."
    }
  }[lang];

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
            <span className="text-[10px] tracking-[0.3em] uppercase">{content.tag}</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h1 className="serif text-5xl md:text-7xl lg:text-8xl text-[#F7F5F0] leading-[1.1] tracking-tight font-light mb-12">
            <div className="overflow-hidden">
              <span className="block animate-[translateY_1s_ease-out]">{content.title}</span>
            </div>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="text-[#AABBC8] text-lg font-light max-w-2xl mx-auto leading-relaxed opacity-80 break-keep mt-8">
            {content.desc}
          </p>
        </ScrollReveal>
      </div>
    </header>
  );
};

export default Hero;
