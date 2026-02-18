
import React, { useState } from 'react';
import { RitualCategory } from '../types';
import { refineIntention } from '../services/geminiService';
import ScrollReveal from './ScrollReveal';

const RitualForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: RitualCategory.MANIFESTATION,
    intention: ''
  });
  const [aiResponse, setAiResponse] = useState<{ refinedIntention: string; poeticInsight: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleRefine = async () => {
    if (!formData.intention) return;
    setLoading(true);
    try {
      const result = await refineIntention(formData.category, formData.intention);
      setAiResponse(result);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <ScrollReveal className="text-center py-20 bg-[#05111A] text-[#F7F5F0] border border-[#4FD1C5]/30 p-12">
        <h3 className="serif text-4xl mb-6">신청이 접수되었습니다.</h3>
        <p className="text-[#8FA3B5] font-light max-w-md mx-auto leading-relaxed">
          당신의 의도가 바다의 흐름과 맞닿을 수 있도록 곧 연락드리겠습니다. 평온이 깃들길 바랍니다.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-[10px] uppercase tracking-widest text-[#4FD1C5] border-b border-[#4FD1C5] pb-1"
        >
          돌아가기
        </button>
      </ScrollReveal>
    );
  }

  return (
    <section id="acceso" className="w-full min-h-[90vh] flex items-center justify-center bg-[#0B151F] px-6 py-20 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_#1A3A4A_0%,_transparent_50%)] opacity-40"></div>
      
      <div className="max-w-5xl w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <ScrollReveal className="space-y-8">
          <h2 className="serif text-4xl md:text-5xl text-[#F7F5F0] font-light leading-tight">이 리추얼이<br />당신을 위한 것인가요?</h2>
          <ul className="space-y-6 text-[#8FA3B5] font-light text-base md:text-lg">
            {[
              '소망을 심고 싶은 분',
              '순환을 마무리해야 하는 분',
              '놓아주는 것이 곧 창조임을 이해하는 분'
            ].map((item, idx) => (
              <li key={idx} className="flex gap-4 items-center group">
                <div className="w-6 h-6 rounded-full border border-[#4FD1C5]/30 flex items-center justify-center group-hover:border-[#4FD1C5] transition-colors">
                  <span className="text-[#4FD1C5] text-xs">✓</span>
                </div>
                <span className="group-hover:text-[#F7F5F0] transition-colors">{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-8 border-t border-[#ffffff]/5">
            <p className="serif text-xl md:text-2xl text-[#F7F5F0] italic opacity-80 break-keep leading-relaxed">
              "무거운 것은 묻으십시오.<br />원하는 것을 심으십시오.<br />나머지는 바다에 맡기십시오."
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="bg-[#05111A] p-8 md:p-12 border border-[#2A3C4F] relative group hover:border-[#4FD1C5]/30 transition-colors duration-700">
            <div className="mb-10">
              <h3 className="serif text-3xl text-[#F7F5F0] font-light">접속 신청</h3>
              <p className="text-[#8FA3B5] mt-4 font-light text-xs leading-relaxed tracking-wide">
                프라이버시 보장을 위해 인원이 제한됩니다. AI 가이드를 통해 당신의 의도를 구체화해보세요.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="성함"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border-b border-[#2A3C4F] text-[#F7F5F0] text-lg py-2 focus:outline-none focus:border-[#4FD1C5] transition-colors placeholder-[#334155]"
                />
              </div>

              <div className="relative">
                <label className="text-[10px] uppercase tracking-widest text-[#4FD1C5] mb-2 block">리추얼 성격</label>
                <select 
                  className="w-full bg-[#03090F] border border-[#2A3C4F] text-[#F7F5F0] p-3 text-sm focus:outline-none focus:border-[#4FD1C5]"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value as RitualCategory})}
                >
                  {Object.values(RitualCategory).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>

              <div className="relative space-y-4">
                <textarea 
                  placeholder="당신의 의도를 한 문장으로 적어주세요..."
                  required
                  rows={2}
                  value={formData.intention}
                  onChange={(e) => setFormData({...formData, intention: e.target.value})}
                  className="w-full bg-transparent border-b border-[#2A3C4F] text-[#F7F5F0] text-lg py-2 focus:outline-none focus:border-[#4FD1C5] transition-colors placeholder-[#334155] resize-none"
                />
                
                {formData.intention && !aiResponse && (
                  <button 
                    type="button"
                    onClick={handleRefine}
                    disabled={loading}
                    className="text-[10px] uppercase tracking-widest text-[#4FD1C5] flex items-center gap-2 hover:opacity-80 transition-opacity disabled:opacity-50"
                  >
                    {loading ? 'AI 연금술사 호출 중...' : '✨ AI 가이드로 의도 다듬기'}
                  </button>
                )}
              </div>

              {aiResponse && (
                <div className="p-5 bg-[#4FD1C5]/5 border border-[#4FD1C5]/20 animate-fadeIn">
                  <p className="text-[10px] uppercase tracking-widest text-[#4FD1C5] mb-2 font-bold">정제된 의도:</p>
                  <p className="serif text-[#F7F5F0] italic text-lg mb-4">{aiResponse.refinedIntention}</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#8FA3B5] mb-2">바다의 통찰:</p>
                  <p className="text-xs text-[#8FA3B5] italic leading-relaxed">{aiResponse.poeticInsight}</p>
                </div>
              )}

              <button type="submit" className="w-full group relative flex items-center justify-between gap-3 bg-[#EAE7DF] text-[#03090F] px-6 py-4 text-[10px] uppercase tracking-[0.25em] font-medium overflow-hidden transition-all duration-500 hover:text-white">
                <div className="absolute inset-0 bg-[#4FD1C5] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
                <span className="relative z-10">신청 시작하기</span>
                <span className="relative z-10 group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RitualForm;
