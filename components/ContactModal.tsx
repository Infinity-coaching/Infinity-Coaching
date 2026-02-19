
import React, { useState } from 'react';
import { InquiryType, ContactFormData } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'ko' | 'en';
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, lang }) => {
  const [activeTab, setActiveTab] = useState<'inquiry' | 'newsletter'>('inquiry');
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    affiliation: '',
    email: '',
    phone: '',
    type: InquiryType.ONE_ON_ONE,
    message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const t = {
    ko: {
      tabs: { inquiry: '코칭 의뢰 및 문의', newsletter: '뉴스레터 신청' },
      labels: {
        name: '성함',
        affiliation: '소속 / 회사',
        email: '이메일',
        phone: '연락처',
        type: '문의 유형',
        message: '문의 사항',
        submit: '제출하기',
        submitting: '제출 중...',
        success: '문의 제출 완료',
        successMsg: '문의가 정상적으로 제출되었습니다. 빠른 시일 내에 답변 드리겠습니다.',
        close: '닫기',
        newsletterTitle: '탁월함을 향한 여정',
        newsletterDesc: '매월 하이 임팩트 리더십에 관한 깊이 있는 통찰을 보내드립니다.',
        newsletterPlaceholder: 'you@example.com',
        newsletterBtn: '구독 신청하기',
        newsletterSubmitting: '신청 중...',
        newsletterSuccess: '구독 신청 완료',
        newsletterSuccessMsg: '뉴스레터 구독 신청이 완료되었습니다. 인피니티의 새로운 소식을 전해드리겠습니다.',
        newsletterFooter: '* 언제든 구독을 해지하실 수 있습니다.'
      }
    },
    en: {
      tabs: { inquiry: 'Coaching Request', newsletter: 'Newsletter' },
      labels: {
        name: 'Full Name',
        affiliation: 'Affiliation / Company',
        email: 'Email',
        phone: 'Phone Number',
        type: 'Inquiry Type',
        message: 'Message',
        submit: 'Submit Request',
        submitting: 'Submitting...',
        success: 'Request Submitted',
        successMsg: 'Your inquiry has been successfully submitted. We will get back to you shortly.',
        close: 'Close',
        newsletterTitle: 'Subscribe to Inspiration',
        newsletterDesc: 'Get weekly deep insights on executive leadership, self-awareness, and conscious growth.',
        newsletterPlaceholder: 'you@example.com',
        newsletterBtn: 'Subscribe Now',
        newsletterSubmitting: 'Subscribing...',
        newsletterSuccess: 'Subscription Confirmed',
        newsletterSuccessMsg: 'Your subscription has been confirmed. Stay tuned for Infinity updates.',
        newsletterFooter: '* You can unsubscribe at any time.'
      }
    }
  }[lang];

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // In a real app, this would send data to a backend or email service
    console.log(`Sending ${activeTab} data:`, activeTab === 'inquiry' ? formData : newsletterEmail);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setActiveTab('inquiry');
    setFormData({
      name: '',
      affiliation: '',
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
      <div className="relative w-full max-w-2xl bg-[#0B151F] border border-[#2A3C4F] shadow-2xl overflow-hidden transition-all duration-500 animate-fadeIn flex flex-col max-h-[90vh]">
        <div className="absolute top-0 right-0 p-4 z-50">
          <button onClick={handleClose} className="text-[#8FA3B5] hover:text-[#F7F5F0] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Form Container */}
        <div className="w-full p-8 md:p-12 overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-12 animate-fadeIn h-full flex flex-col justify-center items-center">
              <div className="w-16 h-16 bg-[#4FD1C5]/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4FD1C5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 className="serif text-3xl text-[#F7F5F0] mb-4">
                {activeTab === 'inquiry' ? t.labels.success : t.labels.newsletterSuccess}
              </h3>
              <p className="text-[#8FA3B5] font-light leading-relaxed mb-8 break-keep">
                {activeTab === 'inquiry' ? t.labels.successMsg : t.labels.newsletterSuccessMsg}
              </p>
              <button 
                onClick={handleClose}
                className="px-12 py-3 bg-[#4FD1C5] text-[#03090F] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#F7F5F0] transition-colors"
              >
                {t.labels.close}
              </button>
            </div>
          ) : (
            <>
              {/* Tabs */}
              <div className="flex gap-8 mb-10 border-b border-[#2A3C4F]">
                <button 
                  onClick={() => setActiveTab('inquiry')}
                  className={`pb-4 text-[10px] uppercase tracking-[0.25em] font-bold transition-all relative ${activeTab === 'inquiry' ? 'text-[#F7F5F0]' : 'text-[#8FA3B5] opacity-50'}`}
                >
                  {t.tabs.inquiry}
                  {activeTab === 'inquiry' && <div className="absolute bottom-0 left-0 w-full h-px bg-[#4FD1C5]" />}
                </button>
                <button 
                  onClick={() => setActiveTab('newsletter')}
                  className={`pb-4 text-[10px] uppercase tracking-[0.25em] font-bold transition-all relative ${activeTab === 'newsletter' ? 'text-[#F7F5F0]' : 'text-[#8FA3B5] opacity-50'}`}
                >
                  {t.tabs.newsletter}
                  {activeTab === 'newsletter' && <div className="absolute bottom-0 left-0 w-full h-px bg-[#4FD1C5]" />}
                </button>
              </div>

              {activeTab === 'inquiry' ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-[#4FD1C5] font-bold">{t.labels.name}</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-transparent border-b border-[#2A3C4F] text-[#F7F5F0] py-2 focus:outline-none focus:border-[#4FD1C5] transition-colors placeholder-[#334155]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-[#4FD1C5] font-bold">{t.labels.affiliation}</label>
                      <input 
                        type="text" 
                        required
                        value={formData.affiliation}
                        onChange={e => setFormData({...formData, affiliation: e.target.value})}
                        className="w-full bg-transparent border-b border-[#2A3C4F] text-[#F7F5F0] py-2 focus:outline-none focus:border-[#4FD1C5] transition-colors placeholder-[#334155]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-[#4FD1C5] font-bold">{t.labels.email}</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-transparent border-b border-[#2A3C4F] text-[#F7F5F0] py-2 focus:outline-none focus:border-[#4FD1C5] transition-colors placeholder-[#334155]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-[#4FD1C5] font-bold">{t.labels.phone}</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-transparent border-b border-[#2A3C4F] text-[#F7F5F0] py-2 focus:outline-none focus:border-[#4FD1C5] transition-colors placeholder-[#334155]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-widest text-[#4FD1C5] font-bold">{t.labels.type}</label>
                    <select 
                      value={formData.type}
                      onChange={e => setFormData({...formData, type: e.target.value as InquiryType})}
                      className="w-full bg-[#03090F] border border-[#2A3C4F] text-[#F7F5F0] p-2 text-sm focus:outline-none focus:border-[#4FD1C5] appearance-none cursor-pointer"
                    >
                      {Object.values(InquiryType).map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-widest text-[#4FD1C5] font-bold">{t.labels.message}</label>
                    <textarea 
                      required
                      rows={3}
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-transparent border border-[#2A3C4F] p-3 text-[#F7F5F0] text-sm focus:outline-none focus:border-[#4FD1C5] transition-colors resize-none font-light leading-relaxed"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full group relative flex items-center justify-center gap-3 bg-[#EAE7DF] text-[#03090F] px-6 py-4 text-[10px] uppercase tracking-[0.3em] font-bold overflow-hidden transition-all duration-500 disabled:opacity-50"
                  >
                    <div className="absolute inset-0 bg-[#4FD1C5] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
                    <span className="relative z-10">{isSubmitting ? t.labels.submitting : t.labels.submit}</span>
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 py-4 animate-fadeIn">
                  <div className="space-y-4">
                    <h4 className="serif text-2xl text-[#F7F5F0] font-light">{t.labels.newsletterTitle}</h4>
                    <p className="text-[#8FA3B5] text-sm font-light leading-relaxed">
                      {t.labels.newsletterDesc}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest text-[#4FD1C5] font-bold">{t.labels.email}</label>
                    <input 
                      type="email" 
                      required
                      placeholder={t.labels.newsletterPlaceholder}
                      value={newsletterEmail}
                      onChange={e => setNewsletterEmail(e.target.value)}
                      className="w-full bg-transparent border-b border-[#2A3C4F] text-[#F7F5F0] py-3 text-lg focus:outline-none focus:border-[#4FD1C5] transition-colors placeholder-[#334155]"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full group relative flex items-center justify-center gap-3 bg-[#EAE7DF] text-[#03090F] px-6 py-4 text-[10px] uppercase tracking-[0.3em] font-bold overflow-hidden transition-all duration-500 disabled:opacity-50"
                  >
                    <div className="absolute inset-0 bg-[#4FD1C5] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
                    <span className="relative z-10">{isSubmitting ? t.labels.newsletterSubmitting : t.labels.newsletterBtn}</span>
                  </button>
                  
                  <p className="text-[10px] text-[#55697d] text-center italic">
                    {t.labels.newsletterFooter}
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
