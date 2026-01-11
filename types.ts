
export type StyleKey = 'CL' | 'RO' | 'NA' | 'CR' | 'EL' | 'MO' | 'SE';

export interface StyleInfo {
  id: StyleKey;
  name: string;
}

export interface Option {
  text: string;
  style?: StyleKey;
  image?: string; // Propriedade para cards visuais (ex: idade)
  emoji?: string; // Nova propriedade para o estilo de lista com ícone
}

export interface FunnelStep {
  id: number;
  type: 'question' | 'break' | 'loading' | 'result';
  title: string;
  subtitle?: string;
  description?: string; // Texto principal detalhado
  actionText?: string;  // Chamada final antes do botão
  options?: Option[];
  multiple?: boolean;
  maxSelections?: number;
  image?: string;
  buttonText?: string;
  isSegmentation?: boolean; // Se não pontua estilo
}

export interface UserAnswers {
  [stepId: number]: string | string[];
}

export interface StyleScore {
  key: StyleKey;
  name: string;
  score: number;
}

export interface FinalResult {
  predominant: string;
  predominantKey: StyleKey;
  secondary: string;
  tertiary: string;
  practicalTranslation: string;
}

export type AppState = 'intro' | 'funnel' | 'analyzing' | 'result' | 'vsl';
