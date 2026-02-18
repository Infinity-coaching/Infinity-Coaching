
import React from 'react';
import ScrollReveal from './ScrollReveal';

const programs = [
  {
    id: 'executive-coaching',
    number: '01',
    title: '리얼타임 리더십 코칭',
    subtitle: 'Executive Coaching',
    tagline: '“가장 중요한 순간에, 가장 현명한 선택을”',
    target: 'CEO, C-suite 임원, 사업부 대표',
    duration: '6개월 또는 12개월 (월 1~2회 세션 + 수시 실시간 지원)',
    methodology: 'MOVE 모델 + Five C’s + 3차원 리더십 프레워크',
    features: [
      '리더십 진단',
      '1:1 코칭',
      '리더십 컨설팅'
    ],
    description: '리더에게 가장 위험한 순간은 위기가 아닙니다. 자신이 상황을 정확히 파악하고 있다고 확신하는 순간입니다. 변화의 속도가 급속도로 빨라진 시대에 의사결정의 임팩트와 무게는 과거에 비해 비교할 수 없을 만큼 커졌습니다. 기존의 관성을 인식하고, 선택의 공간을 마련하는 것이 좋은 의사결정의 출발이라 하겠습니다. 과학적 진단이 보이지 않는 패턴을 드러내고, 코칭이 그것을 전략으로 전환합니다. 매 순간 최적의 선택을 설계하는 리더십을 시작하세요.'
  },
  {
    id: 'gravitas',
    number: '02',
    title: '리더십 프레즌스',
    subtitle: 'GRAVITAS MASTERY PROGRAM',
    tagline: '말하기 전에 이미 신뢰가 느껴지는 리더',
    target: '신임 임원 · C-Level 및 CEO',
    duration: '3개월 집중 프로그램 (6회 세션 + 현장 피드백)',
    modules: [
      { name: 'Composure', desc: '압박 속 감정 균형 — 반응(react)이 아닌 대응(respond)' },
      { name: 'Confidence without Arrogance', desc: 'Imposter Syndrome 해체 + 조용한 자기 신뢰 구축' },
      { name: 'Pause의 힘', desc: '2초의 침묵이 만드는 관점의 무게' },
      { name: 'Emotional Resonance', desc: '방 안의 감정을 읽고 공명을 만드는 능력' },
      { name: 'Physical Grounding', desc: '신체적 Anchoring으로 존재감 강화' }
    ],
    description: '리더의 성공은 실력만으로 결정되지 않습니다. 그래서 최고의 자리에 오른 많은 리더들이 “운이 좋았어요”라고 말합니다. 실력이 있는 리더가 더 큰 리더로 성장하는 핵심에 “프레즌스(Executive Presence)”가 있습니다. Fortune Magazine은 리더십 프레즌스를 "사람들을 몰입시키고, 영감을 주고, 행동을 일으키는 리더의 능력"이라 정의했습니다. 리더십 프레즌스는 타고나는 것처럼 보이지만, 실제로는 학습과 훈련으로 개발 가능한 역량입니다. GRAVITAS MASTERY PROGRAM은 과학적 진단으로 현재의 상태를 객관적으로 파악하고, 코칭을 통해 체계적으로 역량을 구축합니다.'
  },
  {
    id: 'conflict',
    number: '03',
    title: '갈등지능 개발 워크숍',
    subtitle: 'CONFLICT INTELLIGENCE PROGRAM',
    tagline: '갈등을 회피하는 리더에서, 갈등을 설계하는 리더로',
    target: 'C-suite 팀, 사업부 대표단, 고성과 팀 리더',
    duration: '8시간 집중 워크샵 + 4시간 후속 실습 세션',
    modules: [
      { name: '갈등의 뇌 과학', desc: '우리 뇌의 위협 반응과 개인차' },
      { name: '갈등 지능 진단', desc: '나는 어떻게 갈등하는가?' },
      { name: '혁신적 갈등 관리', desc: '갈등을 혁신으로 이끄는 Whole brain 갈등관리' },
      { name: '적응적 활용 전략', desc: '상황별 갈등 전략과 적응적 활용' },
      { name: '변화 목표 수립', desc: '갈등지능 변화 목표 수립' },
      { name: '실전 관리 실습', desc: 'Whole brain 갈등관리 실습' }
    ],
    description: '모든 갈등은 "내가 옳다"는 확신에서 시작됩니다. 상대가 틀렸다고 판단하는 순간, 우리는 듣기를 멈추고 설득을 시작합니다. 설득이 실패할 때, 우리는 그것을 갈등이라 부릅니다. 갈등은 해결해야 할 문제가 아니라 유연하게 대응해야 할 복잡한 시스템입니다. 동일한 갈등이라도 경쟁, 협력, 회피, 수용, 타협 모두 상황에 따라 최적의 전략이 될 수 있습니다. 하나의 방식을 고수하는 것은 갈등을 해소하는 것이 아니라 고착시킵니다. 갈등의 회피와 부적절한 대응은 현상 유지가 아니라 조직 전체의 건강을 잠식하는 가장 조용하고 치명적인 위험입니다. 본 프로그램은 검증된 이론과 실전 도구를 기반으로, 리더가 갈등을 위협이 아닌 기회로 받아들이고 — 관계와 성과를 동시에 강화하는 — 적응적 갈등 역량을 개발합니다.'
  },
  {
    id: 'leadership-transition',
    number: '04',
    title: '넥스트 레벨 리더십',
    subtitle: 'Leadership transition program',
    tagline: '“익숙한 성공 공식을 넘어, 조직의 미래를 설계하는 시야”',
    target: '신임 임원, 최고경영진',
    duration: '워크샵 + 1:1 코칭(6회기)',
    phases: [
      { name: 'Phase 1 — 리더십 진단', desc: '과학적 진단을 통한 자기 인식 확장 및 리더십 프로필 분석' },
      { name: 'Phase 2 — 워크샵', desc: '비전과 목적 정하기 • 리더십 프레즌스 구축하기 • 전략적 커뮤니케이션 • 파워와 영향력' },
      { name: 'Phase 3 — 일대일 코칭', desc: '학습 내용을 실제 비즈니스 상황에 적용하고 체화하는 심화 코칭' }
    ],
    description: '높은 직급으로의 승진은 더 많은 일을 하는 것이 아니라, 더 넓은 관점에서 사고하고 결정하는 것을 의미합니다. 이제는 익숙한 성공 공식을 내려놓고, 조직의 미래를 설계하는 시야와 영향력을 선택해야 합니다. 넥스트 레벨 리더십 프로그램은 직무 역량을 넘어, 새로운 리더십의 존재 방식과 영향력 형성까지 통합적으로 설계합니다.'
  }
];

const ProgramsSection: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="programs" className="w-full bg-[#F7F5F0] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="mb-24 text-center">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#4FD1C5] font-bold block mb-4">인피니티 Key 프로그램</span>
          <h2 className="serif text-4xl md:text-5xl font-light text-[#1a1a1a] tracking-tight">
            탁월함을 향한 <span className="italic">전진</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-32">
          {programs.map((program, idx) => (
            <ScrollReveal key={program.id} delay={idx * 100} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              {/* Program Header & Summary */}
              <div className="lg:col-span-5 space-y-8">
                <div className="flex items-center gap-4">
                  <span className="serif text-4xl text-[#4FD1C5] opacity-30 font-light">{program.number}</span>
                  <div className="h-px flex-grow bg-[#1a1a1a]/10"></div>
                </div>
                
                <div className="space-y-4">
                  <span className="text-[10px] tracking-[0.2em] font-bold text-[#4FD1C5] uppercase">{program.subtitle}</span>
                  <h3 className="serif text-4xl md:text-5xl text-[#1a1a1a] font-light leading-tight">{program.title}</h3>
                  <p className="serif text-xl italic text-[#55697d] break-keep">{program.tagline}</p>
                </div>

                <div className="pt-8 space-y-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase tracking-widest text-[#94a3b8] font-bold">Target</span>
                    <span className="text-[#1a1a1a] font-medium">{program.target}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase tracking-widest text-[#94a3b8] font-bold">{program.id === 'leadership-transition' ? 'Method' : 'Duration'}</span>
                    <span className="text-[#1a1a1a] font-medium">{program.duration}</span>
                  </div>
                </div>

                <p className="text-[15px] text-[#555] font-light leading-[2] whitespace-normal text-justify pt-4 border-t border-[#1a1a1a]/5">
                  {program.description}
                </p>
              </div>

              {/* Program Details Card */}
              <div className="lg:col-span-7">
                <div className="bg-white border border-[#1a1a1a]/5 p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative overflow-hidden group">
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#4FD1C5]/5 rounded-tl-full transform translate-x-16 translate-y-16 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-700"></div>
                  
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1a1a1a] mb-10 border-b border-[#1a1a1a]/5 pb-4">핵심 구성 요소</h4>
                  
                  {program.features && (
                    <ul className="space-y-6 relative z-10">
                      {program.features.map((feature, fidx) => (
                        <li key={fidx} className="flex gap-6 items-start">
                          <span className="w-5 h-5 rounded-full border border-[#4FD1C5] flex items-center justify-center text-[#4FD1C5] text-[10px] shrink-0 mt-1">✓</span>
                          <span className="text-[#1a1a1a] text-lg font-light leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {(program.modules || program.phases) && (
                    <div className="space-y-8 relative z-10">
                      {(program.modules || program.phases)?.map((item, midx) => (
                        <div key={midx} className="flex gap-6 items-start group/item">
                          <span className="serif text-xl text-[#4FD1C5] opacity-40 group-hover/item:opacity-100 transition-opacity pt-1">0{midx + 1}</span>
                          <div>
                            <h5 className="text-[#1a1a1a] font-bold text-sm tracking-tight mb-1 uppercase">{item.name}</h5>
                            <p className="text-[#64748b] text-base font-light break-keep text-justify">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {program.methodology && (
                    <div className="mt-12 pt-8 border-t border-[#1a1a1a]/5 relative z-10">
                      <span className="text-[9px] uppercase tracking-widest text-[#94a3b8] font-bold block mb-2">Methodology</span>
                      <p className="serif text-xl text-[#1a1a1a] italic">{program.methodology}</p>
                    </div>
                  )}

                  <div className="mt-12 relative z-10">
                    <button 
                      onClick={scrollToContact}
                      className="w-full py-4 border border-[#1a1a1a] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#1a1a1a] hover:text-white transition-all duration-500"
                    >
                      상담 신청하기
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
