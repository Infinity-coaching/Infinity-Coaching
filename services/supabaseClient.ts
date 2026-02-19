import { createClient } from '@supabase/supabase-js';

// .env.local에 아래 변수를 추가해야 합니다:
//   VITE_SUPABASE_URL=https://xxxx.supabase.co
//   VITE_SUPABASE_PUBLISHABLE_KEY=eyJ...  ← 대시보드 Settings > API > Publishable Key

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

export const supabase = createClient(supabaseUrl, supabasePublishableKey);

// ──────────────────────────────────────────────
// Supabase에서 실행할 DDL (SQL Editor에서 실행)
// ──────────────────────────────────────────────
//
// -- 코칭 문의 테이블
// CREATE TABLE contacts (
//   id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
//   name text NOT NULL,
//   affiliation text NOT NULL,
//   email text NOT NULL,
//   phone text NOT NULL,
//   type text NOT NULL,
//   message text NOT NULL,
//   created_at timestamptz DEFAULT now()
// );
//
// -- 뉴스레터 구독 테이블
// CREATE TABLE newsletter_subscribers (
//   id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
//   email text UNIQUE NOT NULL,
//   token uuid DEFAULT gen_random_uuid() NOT NULL,
//   subscribed_at timestamptz DEFAULT now(),
//   unsubscribed_at timestamptz
// );
//
// -- Row Level Security (Supabase 대시보드에서 활성화 후 적용)
// ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
// ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
//
// -- anon 사용자가 INSERT만 가능하도록 허용
// CREATE POLICY "allow_insert_contacts" ON contacts FOR INSERT TO anon WITH CHECK (true);
// CREATE POLICY "allow_insert_subscribers" ON newsletter_subscribers FOR INSERT TO anon WITH CHECK (true);
// CREATE POLICY "allow_update_unsubscribe" ON newsletter_subscribers FOR UPDATE TO anon
//   USING (true) WITH CHECK (true);
