import { LucideIcon } from 'lucide-react';

export interface CareerPath {
  id: string;
  category: string;
  icon: LucideIcon;
  title: string;
  description: string;
  skills: string[];
  opportunities: string[];
}