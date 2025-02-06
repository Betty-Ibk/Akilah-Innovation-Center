import { LucideIcon } from 'lucide-react';

interface Profile {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
}

export const mentors: Profile[] = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Lead Technology Mentor',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Ph.D. in Computer Science with 15+ years experience in software engineering and AI.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  },
  {
    name: 'Michael Okonjo',
    role: 'Entrepreneurship Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Serial entrepreneur with multiple successful tech startups in East Africa.',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Dr. Amina Hassan',
    role: 'Innovation Specialist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Specializes in emerging technologies and innovation management.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  }
];

export const mentees: Profile[] = [
  {
    name: 'Grace Mutambo',
    role: 'Software Development Student',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Aspiring full-stack developer with a focus on mobile applications.',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'David Kwesi',
    role: 'Data Science Scholar',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Working on AI solutions for agricultural challenges in East Africa.',
    twitter: 'https://twitter.com'
  },
  {
    name: 'Faith Nyambura',
    role: 'Tech Entrepreneur',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Developing an e-commerce platform for local artisans.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  }
];