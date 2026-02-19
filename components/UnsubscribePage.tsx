
import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';

type Status = 'loading' | 'success' | 'already' | 'error';

const UnsubscribePage: React.FC = () => {
  const [status, setStatus] = useState<Status>('loading');

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get('token');
    if (!token) {
      setStatus('error');
      return;
    }
    processUnsubscribe(token);
  }, []);

  const processUnsubscribe = async (token: string) => {
    // 토큰으로 구독자 조회
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .select('id, unsubscribed_at')
      .eq('token', token)
      .single();

    if (error || !data) {
      setStatus('error');
      return;
    }

    if (data.unsubscribed_at) {
      setStatus('already');
      return;
    }

    // unsubscribed_at 업데이트
    const { error: updateError } = await supabase
      .from('newsletter_subscribers')
      .update({ unsubscribed_at: new Date().toISOString() })
      .eq('token', token);

    if (updateError) {
      setStatus('error');
      return;
    }

    setStatus('success');
  };

  const content: Record<Status, { title: string; message: string; color: string }> = {
    loading: {
      title: '처리 중...',
      message: '잠시만 기다려주세요.',
      color: '#8FA3B5',
    },
    success: {
      title: '구독 해지 완료',
      message: '뉴스레터 구독이 해지되었습니다. 인피니티코칭을 찾아주셔서 감사합니다.',
      color: '#4FD1C5',
    },
    already: {
      title: '이미 해지된 구독',
      message: '이미 뉴스레터 구독이 해지된 상태입니다.',
      color: '#8FA3B5',
    },
    error: {
      title: '유효하지 않은 링크',
      message: '링크가 만료되었거나 올바르지 않습니다. 문의사항은 befreeandbold@gmail.com으로 연락주세요.',
      color: '#EF4444',
    },
  };

  const { title, message, color } = content[status];

  return (
    <div className="min-h-screen bg-[#03090F] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="serif text-2xl text-[#F7F5F0] opacity-40 tracking-widest uppercase mb-8">
          INFINITY COACHING
        </div>

        {status === 'loading' ? (
          <div className="w-10 h-10 border border-[#4FD1C5]/30 border-t-[#4FD1C5] rounded-full animate-spin mx-auto" />
        ) : (
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto" style={{ backgroundColor: `${color}15` }}>
            {status === 'success' || status === 'already' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            )}
          </div>
        )}

        <h1 className="serif text-3xl text-[#F7F5F0] font-light">{title}</h1>
        <p className="text-[#8FA3B5] font-light leading-relaxed text-sm">{message}</p>

        <a
          href="/"
          className="inline-block mt-8 px-10 py-3 border border-[#2A3C4F] text-[#8FA3B5] text-[10px] uppercase tracking-[0.3em] hover:border-[#4FD1C5] hover:text-[#4FD1C5] transition-colors"
        >
          홈으로 돌아가기
        </a>
      </div>
    </div>
  );
};

export default UnsubscribePage;
