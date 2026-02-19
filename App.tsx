
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollReveal from './components/ScrollReveal';
import RegenerativeCycle from './components/RegenerativeCycle';
import ContactSection from './components/ContactSection';
import ProgramsSection from './components/ProgramsSection';
import AssessmentsSection from './components/AssessmentsSection';
import InsightsSection from './components/InsightsSection';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [lang, setLang] = useState<'ko' | 'en'>('ko');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const profileImage = "./profile-coach.jpg";

  const t = {
    ko: {
      about: {
        manifesto: <>리더의 가장 결정적인 순간은 이사회실이 아닌,<br />자극과 반응 사이 <span className="italic text-[#4FD1C5] font-medium">2초의 공간</span>에서 일어납니다.<br />저는 그 2초를 설계하는 사람입니다.</>,
        name: "김명희 대표코치, PhD",
        sub: "Professional Coach & Organizational Psychologist",
        bio: "인피니티코칭 대표 김명희 코치는 국내외 주요 기업의 최고 경영진, 임원, 전환기 리더와 함께 호흡해 온 이그제큐티브 코치입니다. 신경 과학(Neuroscience)과 조직 심리학의 깊은 통찰을 결합하여, 리더가 복잡한 비즈니스 환경 속에서도 자신만의 중심을 잡고 최고의 탁월함을 발휘하도록 돕습니다.",
        expertise: [
          '조직심리학 석사, 조직행동론 박사',
          'ICF PCC 국제인증 전문코치',
          'SuccessFinder / Hogan / Birkman 전문 디브리퍼',
          'Global Executive Coaching (KOR/ENG/GER)'
        ]
      },
      coaching: {
        tag: "Coaching",
        title: "알려지지 않은 비밀",
        lonelyTitle: "리더의 자리는 외롭습니다",
        lonelyText1: "보통 사람이라면 무너질 것 같은 압력을 매일 감당해야 합니다. 속마음을 털어놓을 상대가 없는 것이 일상이고, 쉬운 문제는 애초에 오지 않습니다. 권력을 가졌지만 권력 욕구를 억누르는데 대부분의 에너지를 씁니다.",
        lonelyText2: "그런데도 당신은 이 자리를 택했습니다. 한 사람의 결정이 조직을 바꾸고, 조직이 산업을 바꾸고, 산업이 사회를 바꾸는 것을 알기 때문입니다.",
        impactTitle: "임팩트 있는 코칭의 힘",
        impactText1: "만족감과 자신감을 가지고 리더의 영향력을 발휘하기 위해서는 생각이 자유로워야 합니다. 수천 시간의 코칭과 학문 연구를 통해 반복적으로 확인한 사실은 리더십의 실패가 역량 부족이 아닌 자기 인식의 부재와 두려움에서 시작된다는 점입니다.",
        impactText2: "리더들은 방향성을 찾고, 어떻게 존재하며, 구성원들과 어떻게 관계를 맺을지 이해하고자 저를 찾습니다. 지시하고 보고 받는 관계에서, 서로의 성장을 이끌어내는 관계로 전환하기 위해서입니다.",
        impactText3: "제가 가진 가장 큰 강점은 데이터, 지식, 직관을 동시에 활용하여 리더 본인도 인식하지 못하는 패턴을 읽어내고 빠르게 패러다임을 전환할 수 있도록 돕는데 있습니다.",
        momentTitle: "지금 이 순간, 달라질 수 있습니다",
        momentText1: "성과를 내는 리더는 많습니다. 하지만 진정한 영향력을 통해 의미 있는 변화를 창조하는 리더는 드뭅니다.",
        momentQuote: "온전한 나로 존재하며 의식적으로 선택할 때, 리더십은 비로소 힘을 발휘합니다."
      }
    },
    en: {
      about: {
        manifesto: <>A leader's most critical moments happen not in boardrooms,<br />but in the <span className="italic text-[#4FD1C5] font-medium">2-second space</span> between stimulus and response.<br />I am the one who designs that space.</>,
        name: "Myunghee Kim, PhD",
        sub: "Professional Coach & Organizational Psychologist",
        bio: "CEO of INFINITY COACHING, Myunghee Kim is an executive coach who has worked with top executives and transition leaders in major global corporations. Combining neuroscience and organizational psychology, she helps leaders maintain their core and unleash excellence in complex business environments.",
        expertise: [
          'PhD in Organizational Behavior, MA in Psychology',
          'ICF PCC Certified Professional Coach',
          'Certified SuccessFinder / Hogan / Birkman Debriefer',
          'Global Executive Coaching (KOR/ENG/GER)'
        ]
      },
      coaching: {
        tag: "Coaching",
        title: "The Untold Secret",
        lonelyTitle: "The Burden of Leadership",
        lonelyText1: "Leaders face immense pressure that would crush most people. It's often a lonely path with no one to truly confide in. While holding power, most energy is spent managing the very impulses that power creates.",
        lonelyText2: "Yet, you chose this path. Because you know a single decision can change an organization, an industry, and ultimately, society.",
        impactTitle: "The Power of Impactful Coaching",
        impactText1: "True influence requires freedom of thought. Through thousands of hours of coaching, I've seen that leadership failure rarely stems from lack of skill, but from lack of self-awareness and hidden fears.",
        impactText2: "Leaders come to me to find direction, to understand how to 'be', and how to foster relationships that spark growth in others—moving from 'command and control' to 'growth and co-creation'.",
        impactText3: "My strength lies in utilizing data, knowledge, and intuition to identify patterns even the leaders themselves don't see, facilitating rapid paradigm shifts.",
        momentTitle: "A Change Can Start Now",
        momentText1: "Many leaders achieve performance. Few create a meaningful legacy through genuine influence.",
        momentQuote: "Leadership finds its true power when you exist as your whole self and choose consciously."
      }
    }
  }[lang];

  return (
    <div className="min-h-screen selection:bg-[#4FD1C5] selection:text-white font-sans">
      <Navbar lang={lang} setLang={setLang} />
      
      <Hero lang={lang} onOpenContact={openContactModal} />

      <section id="philosophy">
        <RegenerativeCycle lang={lang} />
      </section>

      {/* About Section */}
      <section id="about" className="relative w-full py-20 md:py-32 px-6 bg-[#F7F5F0] border-b border-[#1a1a1a]/5 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <ScrollReveal className="text-center mb-12 w-full max-w-3xl">
            <div className="mb-8 w-6 h-6 flex items-center justify-center rounded-full border border-[#1a1a1a]/10 mx-auto">
              <span className="text-[#1a1a1a]/40 text-sm font-serif">∞</span>
            </div>
            <h2 className="serif text-xl md:text-2xl lg:text-3xl text-[#1a1a1a] leading-[1.8] font-normal tracking-tight break-keep">
              {t.about.manifesto}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200} className="w-full max-w-[340px] mb-6 px-4">
            <div className="relative group mx-auto">
              <div className="absolute -inset-16 bg-[#4FD1C5]/10 rounded-full blur-[100px] opacity-40 pointer-events-none animate-pulse"></div>
              <div className="relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border border-white/80 rounded-sm">
                <img 
                  src={profileImage} 
                  alt={t.about.name} 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-[3s] ease-out filter brightness-[1.03] contrast-[1.02]"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://i.ifh.cc/takm31.jpg"; }}
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400} className="text-center mb-16 space-y-1">
            <div className="w-px h-8 bg-[#1a1a1a] opacity-10 mx-auto mb-4"></div>
            <p className="serif text-xl md:text-2xl text-[#1a1a1a] font-medium tracking-tight">{t.about.name}</p>
            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.45em] text-[#888] font-semibold">{t.about.sub}</p>
          </ScrollReveal>

          <ScrollReveal delay={600} className="w-full max-w-3xl">
            <div className="bg-white p-8 md:p-14 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.02)] border border-[#1a1a1a]/5 relative">
              <div className="space-y-8 relative z-10">
                <p className="text-[#555] font-light text-[15px] md:text-[17px] leading-[2.1] text-justify">
                  {t.about.bio}
                </p>
                <div className="pt-10 border-t border-[#1a1a1a]/5">
                  <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a] mb-8 text-center">CORE EXPERTISE</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 max-w-2xl mx-auto">
                    {t.about.expertise.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[13px] text-[#666] font-light group">
                        <span className="text-[#4FD1C5] text-[9px] mt-1">◈</span>
                        <span className="group-hover:text-[#1a1a1a] transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Coaching Section */}
      <section id="coaching" className="w-full py-32 md:py-48 bg-[#EAE7DF] px-6 border-b border-[#1a1a1a]/5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-28">
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#4FD1C5] font-bold block mb-4">{t.coaching.tag}</span>
            <h2 className="serif text-4xl md:text-5xl font-light text-[#1a1a1a] tracking-tight whitespace-nowrap">{t.coaching.title}</h2>
          </ScrollReveal>

          <div className="flex flex-col gap-y-16 mb-48">
            <ScrollReveal className="space-y-10 max-w-4xl mx-auto">
              <div className="h-px w-16 bg-[#4FD1C5] mx-auto md:mx-0"></div>
              <h4 className="serif text-3xl md:text-4xl text-[#1a1a1a] font-medium leading-tight text-center md:text-left">{t.coaching.lonelyTitle}</h4>
              <div className="text-[#1a1a1a] font-light text-[17px] leading-[2] text-justify opacity-90 space-y-6">
                <p>{t.coaching.lonelyText1}</p>
                <p>{t.coaching.lonelyText2}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200} className="w-full">
              <div className="relative aspect-[21/7] md:aspect-[21/6] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl rounded-sm">
                <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200" alt="Leadership" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal className="mb-48 border-t border-[#1a1a1a]/10 pt-24">
            <div className="max-w-4xl mx-auto space-y-12">
              <h4 className="serif text-3xl md:text-4xl text-[#1a1a1a] font-medium leading-tight text-center">{t.coaching.impactTitle}</h4>
              <div className="text-[#1a1a1a] font-light text-[17px] leading-[2.2] text-justify opacity-90 space-y-8">
                <p>{t.coaching.impactText1}</p>
                <p>{t.coaching.impactText2}</p>
                <p>{t.coaching.impactText3}</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 items-center">
            <ScrollReveal delay={100} className="order-2 md:order-1">
              <div className="relative aspect-square overflow-hidden shadow-2xl rounded-sm">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200" alt="Leader" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300} className="order-1 md:order-2 space-y-8">
              <h4 className="serif text-3xl md:text-4xl text-[#1a1a1a] font-medium leading-tight">{t.coaching.momentTitle}</h4>
              <div className="text-[#1a1a1a] font-light text-[18px] md:text-[20px] leading-[2] space-y-8">
                <p className="font-medium">{t.coaching.momentText1}</p>
                <p className="serif italic text-2xl text-[#4FD1C5]">{t.coaching.momentQuote}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ProgramsSection lang={lang} onOpenContact={openContactModal} />
      <AssessmentsSection lang={lang} onOpenContact={openContactModal} />
      <InsightsSection lang={lang} />
      <ContactSection lang={lang} />

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} lang={lang} />

      <footer className="py-16 bg-[#03090F] border-t border-white/5 text-center">
        <div className="serif text-2xl text-[#F7F5F0] opacity-70 mb-6 tracking-widest uppercase">INFINITY COACHING</div>
        <p className="text-[#F7F5F0] text-[13px] font-light tracking-[0.35em] uppercase">
          © 2026 INFINITY COACHING • {lang === 'ko' ? '탁월함을 일깨우다' : 'IGNITE YOUR EXCELLENCE'} • ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
};

export default App;
