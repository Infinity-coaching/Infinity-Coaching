
import React from 'react';
import ScrollReveal from './ScrollReveal';

interface ProgramsSectionProps {
  lang: 'ko' | 'en';
  onOpenContact: () => void;
}

const ProgramsSection: React.FC<ProgramsSectionProps> = ({ lang, onOpenContact }) => {
  const t = {
    ko: {
      tag: "인피니티 Key 프로그램",
      title: <>탁월함을 향한 <span className="italic">전진</span></>,
      button: "상담 신청하기",
      core: "핵심 모듈",
      target: "Target",
      duration: "Duration",
      programs: [
        {
          id: 'executive-coaching',
          number: '01',
          title: '리얼타임 리더십 코칭',
          subtitle: 'Executive Coaching',
          tagline: '“가장 중요한 순간에, 가장 현명한 선택을”',
          target: 'CEO, C-suite 임원, 사업부 대표',
          duration: '6개월 또는 12개월 (기간과 회기 수는 기업 및 대상자의 니즈에 따라 변경 가능)',
          methodology: 'MOVE 모델 + Five C’s + 3차원 리더십 프레워크',
          features: ['리더십 진단', '1:1 코칭', '리더십 컨설팅'],
          description: '리더에게 가장 위험한 순간은 위기가 아닙니다. 자신이 상황을 정확히 파악하고 있다고 확신하는 순간입니다. 변화의 속도가 급속도로 빨라진 시대에 의사결정의 임팩트와 무게는 과거에 비해 비교할 수 없을 만큼 커졌습니다. 기존의 관성을 인식하고, 선택의 공간을 마련하는 것이 좋은 의사결정의 출발이라 하겠습니다.'
        },
        {
          id: 'gravitas',
          number: '02',
          title: '리더십 프레즌스',
          subtitle: 'GRAVITAS MASTERY PROGRAM',
          tagline: '말하기 전에 이미 신뢰가 느껴지는 리더',
          target: '신임 임원 · C-Level 및 CEO',
          duration: '3개월 집중 프로그램 (6회 세션 + 현장 피드백)',
          features: [
            'Composure: 압박 속 감정 균형 — 반응(react)이 아닌 대응(respond)',
            'Confidence: Imposter Syndrome 해체 + 조용한 자기 신뢰 구축',
            'Pause의 힘: 2초의 침묵이 만드는 관점의 무게'
          ],
          description: '리더의 성공은 실력만으로 결정되지 않습니다. 실력이 있는 리더가 더 큰 리더로 성장하는 핵심에 “프레즌스(Executive Presence)”가 있습니다. GRAVITAS MASTERY PROGRAM은 과학적 진단으로 현재의 상태를 객관적으로 파악하고, 코칭을 통해 체계적으로 역량을 구축합니다.'
        },
        {
          id: 'conflict-intelligence',
          number: '03',
          title: '홀 브레인 갈등관리',
          subtitle: 'Conflict Intelligence',
          tagline: '갈등을 회피하는 리더에서, 갈등에 적응적으로 대응하며 혁신과 성장을 이끌어내는 리더로',
          target: 'C-suite 팀, 사업부 대표단, 고성과 팀 리더',
          duration: '8시간 집중 워크샵 + 4시간 후속 실습 세션',
          features: [
            '갈등의 뇌 과학: 우리 뇌의 위협 반응과 개인차',
            '갈등 지능 진단: 나는 어떻게 갈등하는가?',
            '갈등을 혁신으로 이끄는 Whole brain 갈등관리',
            '상황별 갈등 전략과 적응적 활용',
            '갈등지능 변화 목표 수립',
            'Whole brain 갈등관리 실습'
          ],
          description: '모든 갈등은 “내가 옳다”거나 “나는 충분히 알고 있다”는 확신에서 시작됩니다. 상대가 잘못되었다는 생각을 하는 순간, 우리는 듣기를 멈추고 설득을 시작합니다. 설득이 실패하면 그것을 갈등이라 부릅니다. 갈등은 해결해야 할 문제가 아니라 유연하게 대응해야 할 복잡한 시스템입니다. 동일한 갈등이라도 상황에 따라 경쟁, 협력, 회피, 수용, 타협 모두 정답이 될 수 있으며, 하나의 전략을 고수하는 것은 최적의 결과를 이끌지 못합니다. 이는 뇌 전체를 충분히 사용하지 않기 때문입니다. 갈등의 회피나 부적절한 대응은 조직 전체를 병들게 하는 원인이 됩니다. 본 프로그램은 리더가 갈등 속에서 관계와 성과를 동시에 향상시키는 적응적 역량을 과학적 도구로 업그레이드합니다.'
        },
        {
          id: 'executive-onboarding',
          number: '04',
          title: '신임임원 온보딩',
          subtitle: 'Executive Onboarding',
          tagline: '새로운 리더십으로 넘어가기 위한 being과 doing을 설계합니다',
          target: '신임 임원',
          duration: '6개월 (원데이 집중 워크샵 + 1:1 코칭 6회기)',
          features: [
            '임원 역할 전환에 대한 인식 확장과 리더십 기반 구축',
            '실행 중심 리더에서 방향 설정 리더로의 패러다임 전환',
            '리더십 프레즌스: 신뢰와 정서적 영향력의 구조화',
            '파워와 영향력: 직위 권한을 넘어서는 전략적 자원 활용',
            '전략적 커뮤니케이션: 임원 레벨의 스토리라인 및 의사소통',
            '산출물: 개인 임원 전환 캔버스 & 핵심 리더십 과제 정의'
          ],
          description: '신임임원 온보딩 프로그램은 개인의 성과 중심 역할에서 조직의 방향과 영향력을 창출하는 임원 역할로의 전환을 지원합니다. 하루 워크숍을 통해 임원 역할의 본질과 핵심 리더십 역량을 정렬하고, 이후 6회기의 1:1 코칭을 통해 실제 조직 맥락에서 행동 변화와 성과 창출을 지속적으로 지원합니다.'
        }
      ]
    },
    en: {
      tag: "Infinity Key Programs",
      title: <>Forward Towards <span className="italic">Excellence</span></>,
      button: "Request a Consultation",
      core: "Core Modules",
      target: "Target",
      duration: "Duration",
      programs: [
        {
          id: 'executive-coaching',
          number: '01',
          title: 'Real-time Leadership Coaching',
          subtitle: 'Executive Coaching',
          tagline: '"The wisest choice at the most critical moment."',
          target: 'CEO, C-suite Executives, Business Unit Leaders',
          duration: '6 or 12 Months (Adjustable based on needs)',
          methodology: 'MOVE Model + Five C’s + 3D Leadership Framework',
          features: ['Leadership Diagnosis', '1:1 Coaching', 'Leadership Consulting'],
          description: 'The most dangerous moment for a leader isn\'t a crisis; it\'s the moment they are certain they fully understand the situation. In an era of rapid change, the weight of decisions has increased exponentially. Creating space for choice is the beginning of great leadership.'
        },
        {
          id: 'gravitas',
          number: '02',
          title: 'Leadership Presence',
          subtitle: 'GRAVITAS MASTERY PROGRAM',
          tagline: 'The leader who exudes trust before speaking.',
          target: 'New Executives, C-Level & CEOs',
          duration: '3-Month Intensive (6 Sessions + Field Feedback)',
          features: [
            'Composure: Emotional balance under pressure — respond instead of react.',
            'Confidence: Dismantling Imposter Syndrome + Building quiet self-reliance.',
            'Power of Pause: The weight of perspective created by 2 seconds of silence.'
          ],
          description: 'Leadership success is not determined by skill alone. Presence is what transforms a skilled leader into a great one. This program uses scientific diagnosis to objectively assess your current state and systematically build capability.'
        },
        {
          id: 'conflict-intelligence',
          number: '03',
          title: 'Whole brain Conflict',
          subtitle: 'Conflict Intelligence',
          tagline: 'From a conflict-avoidant leader to an adaptive one who leads innovation and growth.',
          target: 'C-suite Teams, Business Unit Heads, High-performance Leaders',
          duration: '8-Hour Intensive Workshop + 4-Hour Follow-up Session',
          features: [
            'Neuroscience of Conflict: Threat responses and individual differences',
            'Conflict Intelligence Diagnosis: How do I handle conflict?',
            'Whole Brain Management: Leading conflict toward innovation',
            'Contextual Strategies & Adaptive Utilization',
            'Setting Conflict Intelligence Change Goals',
            'Whole Brain Conflict Management Practice'
          ],
          description: 'Conflict begins with the certainty that "I am right." Once we believe others are wrong, we stop listening. Conflict is not a problem to solve but a complex system to navigate. Whether competing or collaborating, sticking to one strategy is suboptimal and stems from underutilizing the whole brain. This program helps leaders accept conflict comfortably and develop adaptive capabilities to improve both relationships and performance using scientific tools.'
        },
        {
          id: 'executive-onboarding',
          number: '04',
          title: 'Executive Onboarding',
          subtitle: 'Executive Onboarding',
          tagline: 'Designing both "being" and "doing" for the transition to new leadership.',
          target: 'New Executives',
          duration: '6 Months (One-day Intensive Workshop + 6 Coaching Sessions)',
          features: [
            'Expanding awareness of executive role transitions',
            'Paradigm shift: from execution leader to vision-setting leader',
            'Leadership Presence: Structuring trust and emotional impact',
            'Power & Influence: Strategic resource utilization beyond authority',
            'Strategic Communication: Storylines and communication at the executive level',
            'Deliverable: Executive Transition Canvas & core leadership tasks'
          ],
          description: 'This program supports the transition from a performance-centered role to an executive role focused on organizational direction and influence. Through a one-day workshop, we align the essence of the executive role with core leadership competencies, followed by 6 sessions of 1:1 coaching to ensure behavioral change and performance in actual organizational contexts.'
        }
      ]
    }
  }[lang];

  return (
    <section id="programs" className="w-full bg-[#F7F5F0] py-32 px-6 border-b border-[#1a1a1a]/5">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-24">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#4FD1C5] font-bold block mb-4">{t.tag}</span>
          <h2 className="serif text-4xl md:text-5xl font-light text-[#1a1a1a] tracking-tight">{t.title}</h2>
        </ScrollReveal>

        <div className="space-y-32">
          {t.programs.map((program, idx) => (
            <ScrollReveal key={program.id} delay={idx * 100} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
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
                    <span className="text-[9px] uppercase tracking-widest text-[#94a3b8] font-bold">{t.target}</span>
                    <span className="text-[#1a1a1a] font-medium">{program.target}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] uppercase tracking-widest text-[#94a3b8] font-bold">{t.duration}</span>
                    <span className="text-[#1a1a1a] font-medium">{program.duration}</span>
                  </div>
                </div>
                <p className="text-[15px] text-[#555] font-light leading-[2] text-justify pt-4 border-t border-[#1a1a1a]/5">
                  {program.description}
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="bg-white border border-[#1a1a1a]/5 p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1a1a1a] mb-10 border-b border-[#1a1a1a]/5 pb-4">{t.core}</h4>
                  {program.features && (
                    <ul className="space-y-6">
                      {program.features.map((feature, fidx) => (
                        <li key={fidx} className="flex gap-6 items-start">
                          <span className="w-5 h-5 rounded-full border border-[#4FD1C5] flex items-center justify-center text-[#4FD1C5] text-[10px] shrink-0 mt-1">✓</span>
                          <span className="text-[#1a1a1a] text-lg font-light leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-12">
                    <button onClick={onOpenContact} className="w-full py-4 border border-[#1a1a1a] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#1a1a1a] hover:text-white transition-all">
                      {t.button}
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
