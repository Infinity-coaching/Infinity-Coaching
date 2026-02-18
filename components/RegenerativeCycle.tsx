
import React from 'react';
import ScrollReveal from './ScrollReveal';

const RegenerativeCycle: React.FC = () => {
  return (
    <section id="ciclo" className="relative w-full py-32 md:py-48 px-6 bg-[#03090F] overflow-hidden">
      {/* Ambient Animated Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -left-[10%] top-[20%] w-[600px] h-[600px] bg-[#4FD1C5] blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute right-[0%] bottom-[0%] w-[600px] h-[600px] bg-[#1A3A4A] blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '-5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-3">
              <span className="text-[#4FD1C5] text-[10px] tracking-[0.25em] uppercase font-medium">Philosophy</span>
              <div className="w-8 h-px bg-[#4FD1C5]"></div>
            </div>
            
            <h3 className="serif text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-[#F7F5F0] leading-[1.2] mb-8 break-keep">
              사고의 자유로움과<br /><span className="italic text-[#8FA3B5]">의식적 선택의 힘</span>
            </h3>
            
            <div className="space-y-12 max-w-2xl mx-auto">
              <p className="text-[#AABBC8] font-light text-xl md:text-2xl leading-[1.8] break-keep">
                우리는 타고난 운명을 바꿀 수 없습니다.<br />
                하지만 어떻게 꽃 피울지는 선택할 수 있습니다.
              </p>

              <div className="w-px h-16 bg-[#4FD1C5]/30 mx-auto"></div>

              <p className="text-[#F7F5F0] font-light text-lg md:text-xl leading-[1.9] break-keep opacity-90">
                매 순간 온전한 나로 존재하며 의식적으로 선택하는 것,<br />
                그것이 삶의 주인으로 사는 방식입니다.
              </p>

              <p className="serif italic text-[#4FD1C5] text-2xl md:text-3xl tracking-wide pt-8">
                Your choices belong to you.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RegenerativeCycle;
