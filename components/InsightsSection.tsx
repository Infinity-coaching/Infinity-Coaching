
import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { analyzeDocument } from '../services/geminiService';
import { InsightsResponse } from '../types';

interface InsightsSectionProps {
  lang: 'ko' | 'en';
}

const InsightsSection: React.FC<InsightsSectionProps> = ({ lang }) => {
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [insights, setInsights] = useState<InsightsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const t = {
    ko: {
      tag: "Executive AI Coach",
      title: "AI 리더십 코치",
      desc: "오늘의 리더십 고민, 성찰 일지, 혹은 구성원들로부터 받은 피드백을 자유롭게 기록해 보세요. AI 코치가 당신의 텍스트 속에 숨겨진 리더십 패턴을 분석하여 전략적 통찰을 제공합니다.",
      label: "고민 사항",
      placeholder: "리더로서 겪고 있는 고민이나 최근의 피드백, 혹은 당신의 리더십 철학을 자유롭게 적어주세요...",
      button: "인사이트 도출하기",
      loading: "패턴 분석 중...",
      clear: "초기화",
      footer: "* 입력하신 내용은 분석 목적으로만 사용되며 저장되지 않습니다.",
      empty: "코칭 받고 싶은 내용을 왼쪽에 입력해 주세요."
    },
    en: {
      tag: "Executive AI Coach",
      title: "AI Leadership Coach",
      desc: "Record your leadership concerns, reflection journals, or feedback from team members. The AI coach will analyze the hidden patterns in your text to provide strategic leadership insights.",
      label: "Your Reflection",
      placeholder: "Feel free to write about your leadership challenges, recent feedback, or your personal leadership philosophy...",
      button: "Generate Insights",
      loading: "Analyzing Patterns...",
      clear: "Clear",
      footer: "* Your input is used for analysis only and is not stored.",
      empty: "Please enter the content you'd like coaching on in the left area."
    }
  }[lang];

  const handleAnalyze = async () => {
    if (!inputText.trim()) {
      setError(lang === 'ko' ? '분석할 내용을 입력해 주세요.' : 'Please enter content to analyze.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const result = await analyzeDocument(inputText);
      setInsights(result);
    } catch (err) {
      setError(lang === 'ko' ? '오류가 발생했습니다.' : 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-coach" className="w-full bg-[#EAE7DF] py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-24">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#D86254] font-bold block mb-4">{t.tag}</span>
          <h2 className="serif text-4xl md:text-5xl font-light text-[#2A3A42] tracking-tight">{t.title}</h2>
          <p className="text-[#4A5A62] mt-6 max-w-2xl mx-auto font-light leading-relaxed">{t.desc}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <ScrollReveal delay={200}>
              <div className="bg-[#F7F5F0] border border-[#1a1a1a]/5 p-8 md:p-10 shadow-xl relative group">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="serif text-xl text-[#2A3A42]">{t.label}</h3>
                  <button onClick={() => setInputText('')} className="text-[9px] uppercase tracking-widest text-[#A89278] hover:text-[#D86254] transition-colors">{t.clear}</button>
                </div>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={t.placeholder}
                  className="w-full bg-white/80 border border-[#1a1a1a]/10 p-6 text-[#2A3A42] text-base font-light min-h-[350px] focus:outline-none focus:border-[#D86254] transition-colors resize-none leading-relaxed"
                />
                <div className="mt-8">
                  <button onClick={handleAnalyze} disabled={loading || !inputText.trim()} className="w-full py-4 bg-[#2A3A42] text-[#EAE7DF] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#D86254] transition-all disabled:opacity-30">
                    {loading ? t.loading : t.button}
                  </button>
                </div>
                <p className="mt-6 text-[10px] text-[#A89278] text-center italic">{t.footer}</p>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-8 animate-pulse">
                <div className="w-20 h-20 border-t-2 border-[#D86254] rounded-full animate-spin"></div>
                <h4 className="serif text-2xl text-[#2A3A42]">{lang === 'ko' ? '분석 중' : 'Analyzing'}</h4>
              </div>
            ) : insights ? (
              <ScrollReveal className="space-y-12">
                <div className="bg-white border border-[#1a1a1a]/5 p-10 relative shadow-lg">
                  <h3 className="serif text-[10px] uppercase tracking-[0.3em] font-bold text-[#D86254] mb-6">Executive Summary</h3>
                  <p className="text-[#2A3A42] text-lg font-light leading-[1.8] mb-12 text-justify">{insights.summary}</p>
                  <div className="space-y-10">
                    {insights.insights.map((item, i) => (
                      <div key={i}>
                        <h4 className="text-[#2A3A42] text-xl font-medium mb-3">0{i+1} {item.title}</h4>
                        <div className="pl-8 space-y-4">
                          <p className="text-[#4A5A62] text-sm leading-relaxed">{item.description}</p>
                          <div className="bg-[#D86254]/5 border-l-2 border-[#D86254] p-3">
                            <span className="text-[9px] uppercase tracking-widest text-[#D86254] font-bold block mb-1">Action Step</span>
                            <p className="text-[#2A3A42] text-xs italic">{item.actionStep}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ) : (
              <div className="flex items-center justify-center h-full min-h-[400px] border border-[#1a1a1a]/5 bg-[#F7F5F0]/50 text-center px-8">
                <p className="text-[#A89278] serif text-xl italic">{t.empty}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
