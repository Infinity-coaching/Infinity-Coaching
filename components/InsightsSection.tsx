
import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { analyzeDocument } from '../services/geminiService';
import { InsightsResponse } from '../types';

const InsightsSection: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [insights, setInsights] = useState<InsightsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!inputText.trim()) {
      setError('분석할 내용을 입력해 주세요.');
      return;
    }
    
    setLoading(true);
    setError(null);

    try {
      const result = await analyzeDocument(inputText);
      setInsights(result);
    } catch (err) {
      console.error(err);
      setError('인사이트를 도출하는 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setInputText('');
    setInsights(null);
    setError(null);
  };

  return (
    <section id="ai-coach" className="w-full bg-[#FCE6C9] py-32 px-6 relative overflow-hidden">
      {/* Decorative Red Squiggle (SVG) */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-20 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#D86254" strokeWidth="2">
          <path d="M10,50 Q25,25 40,50 T70,50 T100,20" />
          <path d="M10,60 Q25,35 40,60 T70,60 T100,30" opacity="0.5" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-24">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#D86254] font-bold block mb-4">Executive AI Coach</span>
          <h2 className="serif text-4xl md:text-5xl font-light text-[#2A3A42] tracking-tight">AI 리더십 코치</h2>
          <p className="text-[#4A5A62] mt-6 max-w-2xl mx-auto font-light leading-relaxed break-keep">
            오늘의 리더십 고민, 성찰 일지, 혹은 구성원들로부터 받은 피드백을 자유롭게 기록해 보세요.
            AI 코치가 당신의 텍스트 속에 숨겨진 리더십 패턴을 분석하여 전략적 통찰을 제공합니다.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Input Area */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={200}>
              <div className="bg-[#FFF8F0] border border-[#E8D5B7] p-8 md:p-10 shadow-xl relative group">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="serif text-xl text-[#2A3A42]">고민 사항</h3>
                  <button 
                    onClick={handleClear}
                    className="text-[9px] uppercase tracking-widest text-[#A89278] hover:text-[#D86254] transition-colors"
                  >
                    Clear
                  </button>
                </div>

                <textarea
                  value={inputText}
                  onChange={(e) => {
                    setInputText(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="리더로서 겪고 있는 고민이나 최근의 피드백, 혹은 당신의 리더십 철학을 자유롭게 적어주세요..."
                  className="w-full bg-[#FFFBF7] border border-[#E8D5B7] p-6 text-[#2A3A42] text-base font-light min-h-[350px] focus:outline-none focus:border-[#D86254] transition-colors resize-none placeholder-[#C4B299] leading-relaxed shadow-inner"
                />

                <div className="mt-8">
                  <button 
                    onClick={handleAnalyze}
                    disabled={loading || !inputText.trim()}
                    className="w-full py-4 bg-[#2A3A42] text-[#FCE6C9] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#D86254] hover:text-white transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed group"
                  >
                    <span className="flex items-center justify-center gap-3">
                      {loading ? '패턴 분석 중...' : '인사이트 도출하기'}
                      {!loading && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>}
                    </span>
                  </button>
                </div>

                {error && <p className="mt-4 text-red-500 text-[11px] text-center font-light">{error}</p>}
                
                <p className="mt-6 text-[10px] text-[#A89278] text-center italic">
                  * 입력하신 내용은 분석 목적으로만 사용되며 저장되지 않습니다.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Results Area */}
          <div className="lg:col-span-7">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-8">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 border-t-2 border-[#D86254] rounded-full animate-spin"></div>
                  <div className="absolute inset-4 border-b-2 border-[#2A3A42]/40 rounded-full animate-spin-slow" style={{ animationDuration: '3s' }}></div>
                </div>
                <div className="space-y-2">
                  <h4 className="serif text-2xl text-[#2A3A42]">심층 데이터 분석 중</h4>
                  <p className="text-[#4A5A62] text-sm font-light">텍스트 이면의 리더십 다이내믹스를 탐색하고 있습니다...</p>
                </div>
              </div>
            ) : insights ? (
              <ScrollReveal className="space-y-12">
                <div className="bg-[#FFFBF7] border border-[#E8D5B7] p-10 relative shadow-lg">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#2A3A42" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  </div>
                  
                  <h3 className="serif text-[10px] uppercase tracking-[0.3em] font-bold text-[#D86254] mb-6">Executive Summary</h3>
                  <p className="text-[#2A3A42] text-lg font-light leading-[1.8] mb-12 break-keep text-justify">
                    {insights.summary}
                  </p>

                  <div className="space-y-10">
                    <h3 className="serif text-[10px] uppercase tracking-[0.3em] font-bold text-[#D86254] mb-6">Strategic Insights</h3>
                    {insights.insights.map((item, i) => (
                      <div key={i} className="group/insight">
                        <div className="flex items-start gap-6 mb-3">
                          <span className="serif text-2xl text-[#D86254] opacity-40 group-hover/insight:opacity-100 transition-opacity">0{i + 1}</span>
                          <h4 className="text-[#2A3A42] text-xl font-medium tracking-tight mt-1">{item.title}</h4>
                        </div>
                        <div className="pl-14 space-y-4">
                          <p className="text-[#4A5A62] text-sm leading-relaxed text-justify break-keep">{item.description}</p>
                          <div className="bg-[#D86254]/5 border-l-2 border-[#D86254] p-3">
                            <span className="text-[9px] uppercase tracking-widest text-[#D86254] font-bold block mb-1">Action Step</span>
                            <p className="text-[#2A3A42] text-xs italic">{item.actionStep}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-16 pt-10 border-t border-[#E8D5B7]">
                    <div className="flex flex-col items-center text-center">
                      <span className="text-[9px] uppercase tracking-[0.4em] text-[#A89278] mb-4">A Deep Reflection</span>
                      <p className="serif text-2xl md:text-3xl text-[#D86254] italic leading-snug max-w-xl">
                        "{insights.strategicQuestion}"
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ) : (
              <div className="flex items-center justify-center h-full min-h-[400px] border border-[#E8D5B7] bg-[#FFF8F0]/50">
                <div className="text-center px-8">
                  <p className="text-[#A89278] serif text-xl italic mb-4">코칭 받고 싶은 내용을 왼쪽에 입력해 주세요.</p>
                  <p className="text-[#A89278] text-xs font-light max-w-xs mx-auto">입력하신 내용을 바탕으로 AI가 당신만을 위한 리더십 인사이트 리포트를 생성합니다.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
