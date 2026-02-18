
import React, { useState } from 'react';
import { InquiryType, ContactFormData } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'inquiry' | 'newsletter'>('inquiry');
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    type: InquiryType.ONE_ON_ONE,
    message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    console.log(`Sending ${activeTab} data to befreeandbold@gmail.com:`, activeTab === 'inquiry' ? formData : newsletterEmail);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setActiveTab('inquiry');
    setFormData({
      name: '',
      email: '',
      phone: '',
      type: InquiryType.ONE_ON_ONE,
      message: ''
    });
    setNewsletterEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#03090F]/90 backdrop-blur-lg transition-opacity duration-500"
        onClick={handleClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-[#0B151F] border border-[#2A3C4F] shadow-2xl overflow-hidden transition-all duration-500 animate-fadeIn flex flex-col md:flex-row">
        <div className="absolute top-0 right-0 p-4 z-50">
          <button onClick={handleClose} className="text-[#8FA3B5] hover:text-[#F7F5F0] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Left: Contact Info */}
        <div className="w-full md:w-2/5 p-8 md:p-12 bg-[#05111A] border-b md:border-b-0 md:border-r border-[#2A3C4F]">
          <h3 className="serif text-3xl text-[#F7F5F0] mb-8">Contact Info</h3>
          
          <div className="space-y-8">
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-[0.2em] text-[#4FD1C5] block">Email</label>
              <a href="mailto:befreeandbold@gmail.com" className="text-[#F7F5F0] hover:text-[#4FD1C5] transition-colors break-all">befreeandbold@gmail.com</a>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-[0.2em] text-[#4FD1C5] block">Office (사업장)</label>
              <p className="text-[#8FA3B5] text-sm leading-relaxed">인천 연수구 송도과학로 27번길 55</p>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-[0.2em] text-[#4FD1C5] block">Space (강의장)</label>
              <p className="text-[#8FA3B5] text-sm leading-relaxed">울산 중구 우정동 500-1, 803호 (인피니티 스페이스)</p>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-[0.2em] text-[#4FD1C5] block">Business No (사업자번호)</label>
              <p className="text-[#8FA3B5] text-sm leading-relaxed">629-14-01490</p>
            </div>
          </div>
        </div>

        {/* Right: Tabs & Form */}
        <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto max-h-[80vh] md:max-h-none">
          {isSuccess ? (
            <div className="text-center py-12 animate-fadeIn h-full flex flex-col justify-center">
              <div className="w-16 h-16 bg-[#4FD1C5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4FD1C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 className="serif text-3xl text-[#F7F5F0] mb-4">{activeTab === 'inquiry' ? '문의 제출 완료' : '구독 신청 완료'}</h3>
              <p className="text-[#8FA3B5] font-light leading-relaxed mb-8 break-keep">
                {activeTab === 'inquiry' 
                  ? '문의가 정상적으로 제출되었습니다. 빠른 시일 내에 답변 드리겠습니다.' 
                  : '뉴스레터 구독 신청이 완료되었습니다. 인피니티의 새로운 소식을 전해드리겠습니다.'}
              </p>
              <button 
                onClick={handleClose}
                className="px-8 py-3 bg-[#4FD1C5] text-[#03090F] text-[10px] uppercase tracking-widest font-bold hover:bg-[#F7F5F0] transition-colors self-center"
              >
                닫기
              </button>
            </div>
          ) : (
            <>
              {/* Tabs */}
              <div className="flex gap-8 mb-10 border-b border-[#2A3C4F]">
                <button 
                  onClick={() => setActiveTab('inquiry')}
                  className={`pb-4 text-[11px] uppercase tracking-[0.2em] transition-all relative ${activeTab === 'inquiry' ? 'text-[#F7F5F0]' : 'text-[#8FA3B5] opacity-50'}`}
                >
                  코칭 의뢰 및 문의
                  {activeTab === 'inquiry' && <div className="absolute bottom-0 left-0 w-full h-px bg-[#4FD1C5]" />}
                </button>
                <button 
                  onClick={() => setActiveTab('newsletter')}
                  className={`pb-4 text-[11px] uppercase tracking-[0.2em] transition-all relative ${activeTab === 'newsletter' ? 'text-[#F7F5F0]' : 'text-[#8FA3B5] opacity-50'}`}
                >
                  뉴스레터 신청
                  {activeTab === 'newsletter' && <div className="absolute bottom-0 left-0 w-full h-px bg-[#4FD1C5]" />}
                </button>
              </div>

              {activeTab === 'inquiry' ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-[#4FD1C5]">성함</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-transparent border-b border-[#2A3C4F] text-[#F7F5F0] py-2 focus:outline-none focus:border-[#4FD1C5] transition-colors placeholder-[#334155]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-[#4FD1C5]">이메일</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-transparent border-b border-[#2A3C4F] text-[#F7F5F0] py-2 focus:outline-none focus:border-[#4FD1C5] transition-colors placeholder-[#334155]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-[#4FD1C5]">연락처 (선택)</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-transparent border-b border-[#2A3C4F] text-[#F7F5F0] py-2 focus:outline-none focus:border-[#4FD1C5] transition-colors placeholder-[#334155]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-[#4FD1C5]">문의 유형</label>
                      <select 
                        value={formData.type}
                        onChange={e => setFormData({...formData, type: e.target.value as InquiryType})}
                        className="w-full bg-[#03090F] border border-[#2A3C4F] text-[#F7F5F0] p-2 text-sm focus:outline-none focus:border-[#4FD1C5] appearance-none"
                      >
                        {Object.values(InquiryType).map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-widest text-[#4FD1C5]">문의 사항</label>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-transparent border border-[#2A3C4F] p-3 text-[#F7F5F0] text-sm focus:outline-none focus:border-[#4FD1C5] transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full group relative flex items-center justify-center gap-3 bg-[#EAE7DF] text-[#03090F] px-6 py-4 text-[10px] uppercase tracking-[0.25em] font-medium overflow-hidden transition-all duration-500 disabled:opacity-50"
                  >
                    <div className="absolute inset-0 bg-[#4FD1C5] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
                    <span className="relative z-10">{isSubmitting ? '제출 중...' : '제출하기'}</span>
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 py-4 animate-fadeIn">
                  <div className="space-y-4">
                    <h4 className="serif text-2xl text-[#F7F5F0] font-light">탁월함의 영감을 구독하세요</h4>
                    <p className="text-[#8FA3B5] text-sm font-light leading-relaxed">
                      매주 경영 리더십, 자기 인식, 그리고 의식적 성장에 관한 깊이 있는 통찰을 보내드립니다.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest text-[#4FD1C5]">이메일 주소</label>
                    <input 
                      type="email" 
                      required
                      placeholder="you@example.com"
                      value={newsletterEmail}
                      onChange={e => setNewsletterEmail(e.target.value)}
                      className="w-full bg-transparent border-b border-[#2A3C4F] text-[#F7F5F0] py-3 text-lg focus:outline-none focus:border-[#4FD1C5] transition-colors placeholder-[#334155]"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full group relative flex items-center justify-center gap-3 bg-[#EAE7DF] text-[#03090F] px-6 py-4 text-[10px] uppercase tracking-[0.25em] font-medium overflow-hidden transition-all duration-500 disabled:opacity-50"
                  >
                    <div className="absolute inset-0 bg-[#4FD1C5] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
                    <span className="relative z-10">{isSubmitting ? '신청 중...' : '구독 신청하기'}</span>
                  </button>
                  
                  <p className="text-[10px] text-[#55697d] text-center italic">
                    * 언제든 구독을 해지하실 수 있습니다.
                  </p>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
