
import React from 'react';
import ScrollReveal from './ScrollReveal';

const assessmentTools = [
  {
    title: 'SuccessFinder',
    description: '행동 기반 진단을 통해 개인의 성공 잠재력과 직무 적합성(behavioral traits & job fit)을 분석하는 평가 도구입니다. 이 진단은 행동 특성 및 직무 역할과의 일치도를 기반으로 성과를 예측하고 필요한 역량을 개발할 수 있게 설계되어 있습니다.',
    details: '심리적 행동 특성과 직무 성공 요인을 결합한 예측 데이터로 높은 신뢰성과 리더십 잠재력과 경력 성장 가능성을 평가할 수 있습니다. 단순 성격 유형이 아니라 행동 기반 예측(behavioral predictive insights)에 중점을 두며, 조직의 전략적 인재 의사결정 도구로 활용 가능하도록 설계되어 있습니다.',
    usage: '리더십 개발, 승계 계획, 인재 선발, 성과 향상 및 온보딩 등 조직의 인재 관리 전 과정에서 활용됩니다.'
  },
  {
    title: 'Hogan Assessment',
    description: '과학적으로 검증된 성격 진단 도구로, 조직에서 사람의 성과와 직무 적합성을 예측하고 리더십 개발, 인재 선발, 팀 구축 등을 지원하는 데 널리 활용됩니다. Hogan 진단은 사람의 평소 행동뿐 아니라 압박 상황에서의 행동 경향, 동기·가치관까지 다차원적으로 평가하는 것이 특징입니다.',
    details: '주요 구성요소로는 평상시 행동을 측정하는 HPI, 스트레스 시 행동 패턴을 보는 HDS, 그리고 동기·가치·선호를 평가하는 MVPI가 있으며, 이를 통해 강점·위험 요인(derailers)·조직 문화 적합성을 종합적으로 파악할 수 있습니다.',
    usage: '선발, 승계 계획, 리더십 개발, 팀 다이내믹스 개선 등 인재 관리 전 과정에서 전략적 통찰을 제공하는 데 활용됩니다.'
  },
  {
    title: 'Birkman Method',
    description: '개인의 행동 스타일뿐 아니라, 내면의 기대(Needs)와 스트레스 반응까지 함께 분석하는 심층 심리 진단 도구입니다.',
    details: '겉으로 보이는 업무 행동과 보이지 않는 동기·욕구를 통합적으로 이해함으로써, 개인의 강점 활용과 관계 갈등의 원인을 구조적으로 파악합니다.',
    usage: '주요 활용 영역은 리더십 개발, 팀 빌딩, 갈등 관리, 커뮤니케이션 개선, 조직문화 진단 등이며, 특히 역할 전환기(승진·임원 온보딩)에서 자기 인식과 관계 전략을 정교화하는 데 효과적입니다.'
  }
];

const AssessmentsSection: React.FC = () => {
  return (
    <section id="assessments" className="w-full bg-[#EAE7DF] py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-24">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#4FD1C5] font-bold block mb-4">Scientific Diagnosis</span>
          <h2 className="serif text-4xl md:text-5xl font-light text-[#1a1a1a] tracking-tight mb-12">ASSESSMENTS</h2>
          <div className="max-w-3xl mx-auto border-y border-[#1a1a1a]/10 py-10">
            <p className="serif text-xl md:text-2xl text-[#1a1a1a] italic leading-relaxed break-keep">
              “보이지 않는 것은 바꿀 수 없습니다.<br className="md:hidden" /> 과학적 진단은 객관적 자기 인식의 출발점입니다.”
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {assessmentTools.map((tool, idx) => (
            <ScrollReveal key={tool.title} delay={idx * 150} className="h-full">
              <div className="bg-white/50 backdrop-blur-sm border border-[#1a1a1a]/5 p-8 md:p-10 h-full flex flex-col hover:bg-white transition-all duration-500 group shadow-[0_10px_30px_rgba(0,0,0,0.01)]">
                <div className="mb-8">
                  <div className="w-10 h-10 rounded-full border border-[#4FD1C5]/30 flex items-center justify-center text-[#4FD1C5] mb-6 group-hover:bg-[#4FD1C5] group-hover:text-white transition-all duration-500">
                    <span className="text-xs font-serif italic">{idx + 1}</span>
                  </div>
                  <h3 className="serif text-3xl text-[#1a1a1a] mb-6 group-hover:text-[#4FD1C5] transition-colors">{tool.title}</h3>
                  <p className="text-[#1a1a1a] font-light text-[15px] leading-[1.8] text-justify break-keep mb-6">
                    {tool.description}
                  </p>
                </div>
                
                <div className="mt-auto space-y-6">
                  <div className="pt-6 border-t border-[#1a1a1a]/5">
                    <h4 className="text-[9px] uppercase tracking-widest text-[#94a3b8] font-bold mb-3">Core Insights</h4>
                    <p className="text-[#555] text-sm font-light leading-relaxed text-justify break-keep">
                      {tool.details}
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <h4 className="text-[9px] uppercase tracking-widest text-[#94a3b8] font-bold mb-3">Application</h4>
                    <p className="text-[#1a1a1a] text-sm font-medium leading-relaxed italic">
                      {tool.usage}
                    </p>
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

export default AssessmentsSection;
