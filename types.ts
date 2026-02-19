
export enum RitualCategory {
  MANIFESTATION = 'Manifestation',
  LIBERATION = 'Liberation',
  CLOSURE = 'Closure',
  INTENTION = 'Intention'
}

export enum InquiryType {
  ONE_ON_ONE = '1:1 코칭',
  GROUP = '그룹 코칭',
  CORPORATE = '기업 교육',
  WORKSHOP = '워크숍',
  OTHERS = '기타'
}

export interface ContactFormData {
  name: string;
  affiliation: string;
  email: string;
  phone: string;
  type: InquiryType;
  message: string;
}

export interface ApplicationFormData {
  name: string;
  email: string;
  category: RitualCategory;
  intention: string;
}

export interface IntentionalResponse {
  refinedIntention: string;
  poeticInsight: string;
}

export interface LeadershipInsight {
  title: string;
  description: string;
  actionStep: string;
}

export interface InsightsResponse {
  summary: string;
  insights: LeadershipInsight[];
  strategicQuestion: string;
}
