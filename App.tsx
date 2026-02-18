
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollReveal from './components/ScrollReveal';
import RegenerativeCycle from './components/RegenerativeCycle';
import ContactSection from './components/ContactSection';
import ProgramsSection from './components/ProgramsSection';
import AssessmentsSection from './components/AssessmentsSection';
import InsightsSection from './components/InsightsSection';

const App: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * [이미지 적용 방법]
   * 첨부해주신 코치님 사진 파일을 'profile-coach.jpg'라는 이름으로 저장하여
   * index.html 파일이 있는 같은 폴더(루트 폴더)에 넣어주세요.
   */
  const profileImage = "./profile-coach.jpg";

  return (
    <div className="min-h-screen selection:bg-[#4FD1C5] selection:text-white font-sans">
      <Navbar />
      
      <Hero onOpenContact={scrollToContact} />

      {/* About Section: Profile Layout */}
      <section id="about" className="relative w-full py-20 md:py-32 px-6 bg-[#F7F5F0] border-b border-[#1a1a1a]/5 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          
          {/* 1. Manifesto */}
          <ScrollReveal className="text-center mb-12 w-full max-w-3xl">
            <div className="mb-8 w-6 h-6 flex items-center justify-center rounded-full border border-[#1a1a1a]/10 mx-auto">
              <span className="text-[#1a1a1a]/40 text-sm font-serif">∞</span>
            </div>
            <h2 className="serif text-xl md:text-2xl lg:text-3xl text-[#1a1a1a] leading-[1.8] font-normal tracking-tight break-keep">
              리더의 가장 결정적인 순간은 이사회실이 아닌,<br />
              자극과 반응 사이 <span className="italic text-[#4FD1C5] font-medium">2초의 공간</span>에서 일어납니다.<br />
              저는 그 2초를 설계하는 사람입니다.
            </h2>
          </ScrollReveal>

          {/* 2. Profile Image with Depth & Vitality Filter */}
          <ScrollReveal delay={200} className="w-full max-w-[340px] mb-6 px-4">
            <div className="relative group mx-auto">
              {/* Enhanced Diffused Background Glow (배경 흐리게 효과) */}
              <div className="absolute -inset-16 bg-[#4FD1C5]/10 rounded-full blur-[100px] opacity-40 pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}></div>
              <div className="absolute -inset-4 bg-white/40 rounded-full blur-2xl opacity-40 pointer-events-none"></div>
              
              {/* Image Container with Backdrop Blur & Soft Focus */}
              <div className="relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-white/80 rounded-sm bg-white/20 backdrop-blur-[2px]">
                <img 
                  src={profileImage} 
                  alt="김명희 대표코치" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-[3s] ease-out filter brightness-[1.03] contrast-[1.02] saturate-[1.12] sepia-[0.08]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://i.ifh.cc/takm31.jpg";
                  }}
                />
                
                {/* 1. Soft Vignette: Gently blurs focus towards the center */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(247,245,240,0.3)]"></div>
                
                {/* 2. Vitality/Lip Warmth Overlay: Mix-blend coral */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_65%,_rgba(255,127,80,0.15)_0%,_transparent_55%)] mix-blend-soft-light"></div>
                
                {/* 3. Edge Softening Layer */}
                <div className="absolute inset-0 pointer-events-none border-[12px] border-[#F7F5F0]/10 blur-md"></div>
              </div>
              
              {/* Decorative Corner */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border-r border-b border-[#4FD1C5]/20 pointer-events-none"></div>
            </div>
          </ScrollReveal>

          {/* 3. Name & Title */}
          <ScrollReveal delay={400} className="text-center mb-16 space-y-1">
            <div className="w-px h-8 bg-[#1a1a1a] opacity-10 mx-auto mb-4"></div>
            <p className="serif text-xl md:text-2xl text-[#1a1a1a] font-medium tracking-tight">김명희 대표코치, PhD</p>
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.45em] text-[#888] font-semibold">
              Professional Coach & Organizational Psychologist
            </p>
          </ScrollReveal>

          {/* 4. Bio Details */}
          <ScrollReveal delay={600} className="w-full max-w-3xl">
            <div className="bg-white p-8 md:p-14 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.02)] border border-[#1a1a1a]/5 relative">
              <div className="absolute top-0 left-0 p-6 opacity-[0.015] pointer-events-none select-none">
                <span className="serif text-[120px] leading-none">“</span>
              </div>
              
              <div className="space-y-8 relative z-10">
                <div className="text-[#555] font-light text-[15px] md:text-[17px] leading-[2.1] text-justify break-all space-y-6">
                  <p>
                    인피니티코칭 대표 김명희 코치는 국내외 주요 기업의 <span className="font-medium text-[#1a1a1a]">최고 경영진, 임원, 전환기 리더</span>와 함께 호흡해 온 <span className="font-medium text-[#1a1a1a]">이그제큐티브 코치</span>입니다. 신경 과학(Neuroscience)과 조직 심리학의 깊은 통찰을 결합하여, 리더가 복잡한 비즈니스 환경 속에서도 자신만의 중심을 잡고 <span className="italic text-[#1a1a1a]">최고의 탁월함</span>을 발휘하도록 돕습니다.
                  </p>
                </div>

                <div className="pt-10 border-t border-[#1a1a1a]/5">
                  <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a] mb-8 text-center">CORE EXPERTISE</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 max-w-2xl mx-auto">
                    {[
                      { label: '조직심리학 석사, 조직행동론 박사', icon: '◈' },
                      { label: 'ICF PCC 국제인증 전문코치', icon: '◈' },
                      { label: 'SuccessFinder / Hogan / Birkman 전문 디브리퍼', icon: '◈' },
                      { label: 'Global Executive Coaching (KOR/ENG/GER)', icon: '◈' }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[13px] text-[#666] font-light group">
                        <span className="text-[#4FD1C5] text-[9px] mt-1 group-hover:scale-125 transition-transform duration-500">{item.icon}</span>
                        <span className="group-hover:text-[#1a1a1a] transition-colors duration-300">{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy">
        <RegenerativeCycle />
      </section>

      {/* Coaching Logic Section */}
      <section id="coaching" className="w-full py-32 md:py-48 bg-[#EAE7DF] px-6 border-b border-[#1a1a1a]/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-28">
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#4FD1C5] font-bold block mb-4">Coaching</span>
            <h2 className="serif text-4xl md:text-5xl font-light text-[#1a1a1a] tracking-tight whitespace-nowrap">
              알려지지 않은 비밀
            </h2>
          </ScrollReveal>

          <div className="flex flex-col gap-y-16 mb-48">
            <ScrollReveal className="space-y-10 max-w-4xl mx-auto">
              <div className="h-px w-16 bg-[#4FD1C5] mx-auto md:mx-0"></div>
              <h4 className="serif text-3xl md:text-4xl text-[#1a1a1a] font-medium leading-tight text-center md:text-left">리더의 자리는 외롭습니다</h4>
              <div className="text-[#1a1a1a] font-light text-[17px] leading-[2] break-keep opacity-90 space-y-6 text-justify">
                <p>보통 사람이라면 무너질 것 같은 압력을 매일 감당해야 합니다. 속마음을 털어놓을 상대가 없는 것이 일상이고, 쉬운 문제는 애초에 오지 않습니다. 권력을 가졌지만 권력 욕구를 억누르는데 대부분의 에너지를 씁니다.</p>
                <p>그런데도 당신은 이 자리를 택했습니다. 한 사람의 결정이 조직을 바꾸고, 조직이 산업을 바꾸고, 산업이 사회를 바꾸는 것을 알기 때문입니다.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="w-full">
              <div className="relative aspect-[21/7] md:aspect-[21/6] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl rounded-sm group">
                <img 
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop" 
                  alt="Leadership Reality" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]"
                />
                <div className="absolute inset-0 bg-[#03090F]/10 group-hover:bg-transparent transition-colors duration-1000"></div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal className="mb-48 border-t border-[#1a1a1a]/10 pt-24">
            <div className="max-w-4xl mx-auto space-y-12">
              <h4 className="serif text-3xl md:text-4xl text-[#1a1a1a] font-medium leading-tight text-center">임팩트 있는 코칭의 힘</h4>
              <div className="text-[#1a1a1a] font-light text-[17px] leading-[2.2] break-keep opacity-90 space-y-8 text-justify">
                <p>만족감과 자신감을 가지고 리더의 영향력을 발휘하기 위해서는 생각이 자유로워야 합니다. 수천 시간의 코칭과 학문 연구를 통해 반복적으로 확인한 사실은 리더심의 실패가 역량 부족이 아닌 자기 인식의 부재와 두려움에서 시작된다는 점입니다.</p>
                <p>리더들은 방향성을 찾고, 어떻게 존재하며, 구성원들과 어떻게 관계를 맺을지 이해하고자 저를 찾습니다. 지시하고 보고 받는 관계에서, 서로의 성장을 이끌어내는 관계로 전환하기 위해서입니다.</p>
                <p>제가 가진 가장 큰 강점은 데이터, 지식, 직관을 동시에 활용하여 리더 본인도 인식하지 못하는 패턴을 읽어내고 빠르게 패러다임을 전환할 수 있도록 돕는데 있습니다. 보이지 않는 것을 발견하고, 관계의 역학을 이해하며, 리더가 자신의 진짜 모습을 마주하는 순간을 함께 만듭니다.</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 items-center">
            <ScrollReveal delay={100} className="order-2 md:order-1">
              <div className="relative aspect-square overflow-hidden shadow-2xl rounded-sm group">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop" 
                  alt="Vibrant Leader" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[5s]"
                />
                <div className="absolute inset-0 bg-[#4FD1C5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300} className="order-1 md:order-2 space-y-8">
              <h4 className="serif text-3xl md:text-4xl text-[#1a1a1a] font-medium leading-tight">지금 이 순간, 달라질 수 있습니다</h4>
              <div className="text-[#1a1a1a] font-light text-[18px] md:text-[20px] leading-[2] break-keep opacity-100 space-y-8">
                <p className="font-medium text-[#1a1a1a]">성과를 내는 리더는 많습니다. <br />하지만 사람을 성장 시키는 리더는 드뭅니다.</p>
                <p className="serif italic text-2xl text-[#4FD1C5]">온전한 나로 존재하며 의식적으로 선택할 때, <br className="hidden md:block" />리더십은 비로소 의미를 갖습니다.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs">
        <ProgramsSection />
      </section>

      {/* Assessments Section */}
      <section id="assessments">
        <AssessmentsSection />
      </section>

      {/* AI Coach Section */}
      <section id="ai-coach">
        <InsightsSection />
      </section>

      <ContactSection />

      <footer className="py-16 bg-[#03090F] border-t border-white/5 text-center">
        <div className="serif text-2xl text-[#F7F5F0] opacity-70 mb-6 tracking-widest uppercase">INFINITY COACHING</div>
        <p className="text-[#F7F5F0] text-[13px] font-light tracking-[0.35em] uppercase">
          © 2026 INFINITY COACHING • IGNITE YOUR EXCELLENCE • ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
};

export default App;
