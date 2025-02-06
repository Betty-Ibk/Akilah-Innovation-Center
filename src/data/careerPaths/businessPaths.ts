import { 
  Calculator, Briefcase, Building2, ShoppingCart,
  Rocket, HeartPulse, Home, Hotel, Wind, Network,
  Scale, TrendingUp, Wrench, ClipboardList, Building,
  Flask, Heart, Hammer
} from 'lucide-react';
import type { CareerPath } from './types';

export const businessPaths: CareerPath[] = [
  {
    id: 'accounting-finance',
    category: 'Business',
    icon: Calculator,
    title: 'Accounting and Finance',
    description: 'Master financial management and accounting principles.',
    skills: [
      'Financial Analysis',
      'Auditing',
      'Taxation',
      'Bookkeeping',
      'Investment Strategies'
    ],
    opportunities: [
      'Accountant',
      'Financial Analyst',
      'Tax Consultant',
      'Investment Advisor',
      'Auditor'
    ]
  },
  {
    id: 'business-administration',
    category: 'Business',
    icon: Briefcase,
    title: 'Business Administration',
    description: 'Develop comprehensive business management skills.',
    skills: [
      'Human Resource Management',
      'Operations Management',
      'Supply Chain Management',
      'Office Administration',
      'Strategic Planning'
    ],
    opportunities: [
      'Business Manager',
      'Operations Director',
      'HR Manager',
      'Administrative Director',
      'Strategy Consultant'
    ]
  },
  {
    id: 'entrepreneurship',
    category: 'Business',
    icon: Rocket,
    title: 'Entrepreneurship',
    description: 'Learn to start and grow successful businesses.',
    skills: [
      'Startup Management',
      'Business Strategy',
      'Venture Capital',
      'Product Development',
      'Market Analysis'
    ],
    opportunities: [
      'Entrepreneur',
      'Business Owner',
      'Startup Consultant',
      'Business Developer',
      'Innovation Manager'
    ]
  },
  {
    id: 'healthcare-management',
    category: 'Healthcare',
    icon: HeartPulse,
    title: 'Healthcare and Medicine',
    description: 'Develop skills in healthcare delivery and management.',
    skills: [
      'Nursing',
      'Public Health',
      'Medical Laboratory Science',
      'Health Informatics',
      'Healthcare Administration'
    ],
    opportunities: [
      'Healthcare Administrator',
      'Nurse',
      'Lab Technician',
      'Health Information Manager',
      'Public Health Specialist'
    ]
  },
  {
    id: 'home-renovation',
    category: 'Construction',
    icon: Home,
    title: 'Home Renovation',
    description: 'Master residential remodeling and construction.',
    skills: [
      'Construction Techniques',
      'Project Planning',
      'Interior Renovation',
      'Building Codes',
      'Cost Estimation'
    ],
    opportunities: [
      'Renovation Contractor',
      'Project Manager',
      'Interior Remodeler',
      'Construction Supervisor',
      'Estimator'
    ]
  },
  {
    id: 'hospitality-tourism',
    category: 'Hospitality',
    icon: Hotel,
    title: 'Hospitality and Tourism',
    description: 'Develop skills in hospitality management and tourism.',
    skills: [
      'Hotel Management',
      'Travel Consulting',
      'Event Planning',
      'Customer Service',
      'Tourism Marketing'
    ],
    opportunities: [
      'Hotel Manager',
      'Travel Consultant',
      'Event Planner',
      'Tourism Director',
      'Hospitality Coordinator'
    ]
  },
  {
    id: 'hvac-maintenance',
    category: 'Technical',
    icon: Wind,
    title: 'HVAC Maintenance',
    description: 'Master heating, ventilation, and air conditioning systems.',
    skills: [
      'HVAC Systems',
      'Installation',
      'Troubleshooting',
      'Energy Efficiency',
      'Electrical Systems'
    ],
    opportunities: [
      'HVAC Technician',
      'System Designer',
      'Maintenance Specialist',
      'Energy Auditor',
      'Installation Supervisor'
    ]
  },
  {
    id: 'information-technology',
    category: 'Technology',
    icon: Network,
    title: 'Information Technology',
    description: 'Develop comprehensive IT and software skills.',
    skills: [
      'Software Development',
      'Cybersecurity',
      'Network Administration',
      'Cloud Computing',
      'IT Support'
    ],
    opportunities: [
      'IT Specialist',
      'Network Administrator',
      'Security Analyst',
      'Cloud Engineer',
      'Support Technician'
    ]
  },
  {
    id: 'legal-services',
    category: 'Legal',
    icon: Scale,
    title: 'Law and Legal Services',
    description: 'Master legal principles and practices.',
    skills: [
      'Legal Research',
      'Contract Drafting',
      'Corporate Law',
      'Legal Ethics',
      'Paralegal Studies'
    ],
    opportunities: [
      'Paralegal',
      'Legal Assistant',
      'Compliance Officer',
      'Contract Administrator',
      'Legal Researcher'
    ]
  },
  {
    id: 'marketing-sales',
    category: 'Business',
    icon: TrendingUp,
    title: 'Marketing and Sales',
    description: 'Develop marketing and sales expertise.',
    skills: [
      'Digital Marketing',
      'Social Media Marketing',
      'Sales Techniques',
      'Market Research',
      'Brand Management'
    ],
    opportunities: [
      'Marketing Manager',
      'Sales Representative',
      'Digital Marketer',
      'Brand Manager',
      'Market Analyst'
    ]
  },
  {
    id: 'plumbing',
    category: 'Technical',
    icon: Wrench,
    title: 'Plumbing',
    description: 'Master plumbing systems and maintenance.',
    skills: [
      'System Design',
      'Installation',
      'Maintenance',
      'Water Systems',
      'Safety Standards'
    ],
    opportunities: [
      'Plumber',
      'System Designer',
      'Maintenance Technician',
      'Project Manager',
      'Inspector'
    ]
  },
  {
    id: 'project-management',
    category: 'Business',
    icon: ClipboardList,
    title: 'Project Management',
    description: 'Learn to manage complex projects effectively.',
    skills: [
      'Project Planning',
      'Risk Management',
      'Agile Methods',
      'Team Leadership',
      'Budget Control'
    ],
    opportunities: [
      'Project Manager',
      'Program Coordinator',
      'Scrum Master',
      'Project Consultant',
      'Team Leader'
    ]
  },
  {
    id: 'real-estate',
    category: 'Real Estate',
    icon: Building,
    title: 'Real Estate Management',
    description: 'Master property management and real estate.',
    skills: [
      'Property Management',
      'Real Estate Marketing',
      'Tenant Relations',
      'Facility Maintenance',
      'Investment Analysis'
    ],
    opportunities: [
      'Property Manager',
      'Real Estate Agent',
      'Facility Manager',
      'Investment Analyst',
      'Leasing Consultant'
    ]
  },
  {
    id: 'science-research',
    category: 'Science',
    icon: Flask,
    title: 'Science and Research',
    description: 'Develop research and laboratory skills.',
    skills: [
      'Lab Techniques',
      'Data Analysis',
      'Research Methods',
      'Environmental Science',
      'Biotechnology'
    ],
    opportunities: [
      'Research Scientist',
      'Lab Technician',
      'Data Analyst',
      'Environmental Researcher',
      'Biotechnologist'
    ]
  },
  {
    id: 'social-services',
    category: 'Social Services',
    icon: Heart,
    title: 'Social Services',
    description: 'Develop skills in community support and advocacy.',
    skills: [
      'Community Development',
      'Nonprofit Management',
      'Social Work',
      'Crisis Management',
      'Mental Health Support'
    ],
    opportunities: [
      'Social Worker',
      'Community Coordinator',
      'Nonprofit Manager',
      'Crisis Counselor',
      'Program Director'
    ]
  },
  {
    id: 'welding',
    category: 'Technical',
    icon: Hammer,
    title: 'Welding',
    description: 'Master welding techniques and metal fabrication.',
    skills: [
      'Basic Welding',
      'Metal Fabrication',
      'Blueprint Reading',
      'TIG/MIG Welding',
      'Quality Control'
    ],
    opportunities: [
      'Welder',
      'Fabricator',
      'Quality Inspector',
      'Shop Supervisor',
      'Welding Instructor'
    ]
  }
];