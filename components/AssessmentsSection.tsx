
import React from 'react';
import ScrollReveal from './ScrollReveal';

interface AssessmentsSectionProps {
  lang: 'ko' | 'en';
  onOpenContact: () => void;
}

const AssessmentsSection: React.FC<AssessmentsSectionProps> = ({ lang, onOpenContact }) => {
  const t = {
    ko: {
      tag: "Scientific Diagnosis",
      title: "ASSESSMENTS",
      quote: <>“보이지 않는 것은 바꿀 수 없습니다.<br className="md:hidden" /> 과학적 진단은 객관적 자기 인식의 출발점입니다.”</>,
      button: "상담 신청하기",
      footer: "진단 도구 활용 및 리더십 코칭 도입에 대해 전문가의 가이드를 받아보세요.",
      tools: [
        {
          title: 'SuccessFinder',
          description: '행동 기반 진단을 통해 개인의 성공 잠재력과 직무 적합성을 분석하는 평가 도구입니다.',
          details: '심리적 행동 특성과 직무 성공 요인을 결합한 예측 데이터로 높은 신뢰성을 자랑합니다.',
          usage: '리더십 개발, 승계 계획, 인재 선발 등'
        },
        {
          title: 'Hogan Assessment',
          description: '조직에서의 성과와 직무 적합성을 예측하는 과학적으로 검증된 성격 진단 도구입니다.',
          details: '압박 상황에서의 패턴(HDS)과 평상시 행동(HPI)을 다차원적으로 평가합니다.',
          usage: '리더십 개발, 팀 다이내믹스 개선 등'
        },
        {
          title: 'Birkman Method',
          description: '개인의 행동 스타일뿐 아니라 내면의 기대와 스트레스 반응을 통합 분석합니다.',
          details: '겉으로 보이는 업무 행동과 보이지 않는 동기 욕구를 구조적으로 파악합니다.',
          usage: '팀 빌딩, 갈등 관리, 커뮤니케이션 개선 등'
        }
      ]
    },
    en: {
      tag: "Scientific Diagnosis",
      title: "ASSESSMENTS",
      quote: <>"What cannot be seen cannot be changed.<br className="md:hidden" /> Scientific diagnosis is the starting point of objective self-awareness."</>,
      button: "Request a Consultation",
      footer: "Get expert guidance on utilizing assessment tools and implementing leadership coaching.",
      tools: [
        {
          title: 'SuccessFinder',
          description: 'A behavioral assessment tool analyzing an individual\'s success potential and job fit.',
          details: 'Predictive data combining psychological traits and job success factors with high reliability.',
          usage: 'Leadership development, succession planning, talent selection'
        },
        {
          title: 'Hogan Assessment',
          description: 'Scientifically validated personality tools predicting job performance and fit within organizations.',
          details: 'Evaluates behaviors under pressure (HDS) and daily behavioral patterns (HPI).',
          usage: 'Leadership development, team dynamics improvement'
        },
        {
          title: 'Birkman Method',
          description: 'Analyzes behavioral styles along with internal expectations and stress reactions.',
          details: 'Structurally identifies visible work behaviors and invisible motivational needs.',
          usage: 'Team building, conflict management, communication improvement'
        }
      ]
    }
  }[lang];

  return (
    <section id="assessments" className="w-full bg-[#EAE7DF] py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-24">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#4FD1C5] font-bold block mb-4">{t.tag}</span>
          <h2 className="serif text-4xl md:text-5xl font-light text-[#1a1a1a] tracking-tight mb-12">{t.title}</h2>
          <div className="max-w-3xl mx-auto border-y border-[#1a1a1a]/10 py-10">
            <p className="serif text-xl md:text-2xl text-[#1a1a1a] italic leading-relaxed break-keep">
              {t.quote}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {t.tools.map((tool, idx) => (
            <ScrollReveal key={tool.title} delay={idx * 150} className="h-full">
              <div className="bg-white/50 backdrop-blur-sm border border-[#1a1a1a]/5 p-8 md:p-10 h-full flex flex-col hover:bg-white transition-all group shadow-[0_10px_30px_rgba(0,0,0,0.01)]">
                <div className="mb-8">
                  <div className="w-10 h-10 rounded-full border border-[#4FD1C5]/30 flex items-center justify-center text-[#4FD1C5] mb-6 group-hover:bg-[#4FD1C5] group-hover:text-white transition-all">
                    <span className="text-xs font-serif italic">{idx + 1}</span>
                  </div>
                  <h3 className="serif text-3xl text-[#1a1a1a] mb-6 group-hover:text-[#4FD1C5] transition-colors">{tool.title}</h3>
                  <p className="text-[#1a1a1a] font-light text-[15px] leading-[1.8] text-justify mb-6">
                    {tool.description}
                  </p>
                </div>
                <div className="mt-auto space-y-6">
                  <div className="pt-6 border-t border-[#1a1a1a]/5">
                    <p className="text-[#555] text-sm font-light leading-relaxed text-justify">
                      {tool.details}
                    </p>
                  </div>
                  <div className="pt-4">
                    <p className="text-[#1a1a1a] text-sm font-medium leading-relaxed italic">
                      {tool.usage}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500} className="mt-20 text-center">
          <button onClick={onOpenContact} className="group relative inline-flex items-center gap-6 px-12 py-5 bg-[#2A3A42] text-white rounded-full text-[10px] uppercase tracking-[0.3em] font-bold overflow-hidden transition-all hover:bg-[#D86254] shadow-xl">
            <span>{t.button}</span>
          </button>
          <p className="mt-6 text-[11px] text-[#A89278] font-light tracking-wide opacity-70">
            {t.footer}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AssessmentsSection;
