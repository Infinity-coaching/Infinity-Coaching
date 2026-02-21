
import React from 'react';
import ScrollReveal from './ScrollReveal';

interface ContactSectionProps {
  lang: 'ko' | 'en';
}

const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const t = {
    ko: {
      tag: "Get in Touch",
      title: "CONTACT",
      msgTitle: "당신 안의 탁월함을 깨우십시오.",
      msgLines: [
        "개인의 성공을 넘어,",
        "그 성과가 조직의 문화가 되고 사회의 가치로 확장되도록",
        "인피니티 코칭은 지속 가능한 리더십의 미래를 함께 디자인합니다."
      ],
      office: "Office (사업장)",
      space: "Space (강의장)",
      spaceName: "인피니티 스페이스"
    },
    en: {
      tag: "Get in Touch",
      title: "CONTACT",
      msgTitle: "Ignite the excellence within you.",
      msgLines: [
        "Beyond individual success,",
        "We help your achievements become organizational culture and social value.",
        "INFINITY COACHING designs the future of sustainable leadership with you."
      ],
      office: "Office",
      space: "Workshop Space",
      spaceName: "Infinity Space"
    }
  }[lang];

  return (
    <section id="contact" className="w-full min-h-[80vh] bg-[#0B151F] text-[#F7F5F0] py-32 px-6 relative overflow-hidden flex items-center">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#1A3A4A_0%,_transparent_60%)] opacity-30"></div>
      
      <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
        <ScrollReveal>
          <div className="flex flex-col items-center mb-16">
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#4FD1C5] font-bold block mb-6">{t.tag}</span>
            <h2 className="serif text-4xl md:text-5xl font-bold tracking-tight mb-12">{t.title}</h2>
            <div className="w-12 h-px bg-[#4FD1C5]/40 mb-12"></div>
            <div className="text-[#8FA3B5] text-lg md:text-xl font-light leading-[1.8] max-w-3xl mx-auto space-y-2">
              <p className="text-white font-medium text-2xl md:text-3xl mb-4">{t.msgTitle}</p>
              {t.msgLines.map((line, i) => <p key={i}>{line}</p>)}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 mt-24">
          <ScrollReveal delay={100}>
            <div className="space-y-4">
              <label className="text-[9px] uppercase tracking-[0.3em] text-[#4FD1C5] font-bold block opacity-60">Email Address</label>
              <a href="mailto:befreeandbold@gmail.com" className="serif text-2xl md:text-3xl hover:text-[#4FD1C5] transition-colors border-b border-white/10 pb-2 inline-block">
                befreeandbold@gmail.com
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="space-y-4">
              <label className="text-[9px] uppercase tracking-[0.3em] text-[#4FD1C5] font-bold block opacity-60">{t.office}</label>
              <p className="text-[#F7F5F0] text-lg font-light">인천 연수구 송도과학로 27번길 55</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
