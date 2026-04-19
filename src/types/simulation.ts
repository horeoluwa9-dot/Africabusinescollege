import { LucideIcon } from 'lucide-react';

export interface SimulationOption {
  id: string;
  text: string;
  explanation?: string;
  risk?: 'low' | 'medium' | 'high';
  impact: { 
    metrics: Record<string, number>; 
    feedback: string;
    nextScenarioId?: number;
  };
}

export interface SimulationScenario {
  id: number;
  title: string;
  context: string;
  challenge?: string;
  marketConditions?: string;
  constraints?: string;
  options: SimulationOption[];
}

export interface SimulationEnvironment {
  id: string;
  name: string;
  icon: LucideIcon;
  desc: string;
  status: 'Active' | 'Locked' | 'Completed';
  focus: string[];
  difficulty: string;
  image?: string;
  scenarios: SimulationScenario[];
}

export interface SimulationMetric {
  label: string;
  key: string;
  icon: LucideIcon;
  color?: string;
  initial: number;
}

export interface SimulationConfig {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  metrics: SimulationMetric[];
  environments: SimulationEnvironment[];
}
