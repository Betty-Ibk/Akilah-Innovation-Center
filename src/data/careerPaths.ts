import { 
  Code, Database, Globe, Server, Shield, Smartphone, Cpu, PenTool, BarChart,
  Camera, MessageSquare, Hammer, Wrench, Share2, Scissors, ShoppingBag, Gem,
  Calculator, Briefcase, Palette, Headphones, GraduationCap, Building2, Settings,
  Zap, Monitor, Beaker, Plane, Heart, Leaf, Factory, Tractor, Anchor, Fuel
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface CareerPath {
  id: string;
  category: string;
  icon: LucideIcon;
  title: string;
  description: string;
  skills: string[];
  opportunities: string[];
}

export const careerPaths: CareerPath[] = [
  {
    id: 'web-development',
    category: 'Software Development',
    icon: Code,
    title: 'Web Development',
    description: 'Master the art of creating modern web applications using the latest technologies and frameworks. Learn both frontend and backend development to become a versatile full-stack developer.',
    skills: ['Frontend Development', 'Backend Development', 'Full Stack', 'UI/UX Integration'],
    opportunities: [
      'Frontend Developer',
      'Backend Developer',
      'Full Stack Developer',
      'UI/UX Developer',
      'Web Application Architect'
    ]
  },
  {
    id: 'data-analytics',
    category: 'Data Science',
    icon: Database,
    title: 'Data Analytics',
    description: 'Learn to analyze and interpret complex data sets using modern tools and techniques. Master data visualization and statistical analysis to drive business decisions.',
    skills: ['Data Visualization', 'Statistical Analysis', 'Machine Learning', 'Big Data'],
    opportunities: [
      'Data Analyst',
      'Business Intelligence Analyst',
      'Data Scientist',
      'Analytics Consultant',
      'Research Analyst'
    ]
  },
  {
    id: 'cloud-architecture',
    category: 'Cloud Computing',
    icon: Globe,
    title: 'Cloud Architecture',
    description: 'Design and implement scalable cloud solutions using leading platforms. Learn cloud security, DevOps practices, and infrastructure management.',
    skills: ['AWS', 'Azure', 'Cloud Security', 'DevOps'],
    opportunities: [
      'Cloud Architect',
      'DevOps Engineer',
      'Cloud Security Specialist',
      'Solutions Architect',
      'Infrastructure Engineer'
    ]
  },
  {
    id: 'cybersecurity',
    category: 'Cybersecurity',
    icon: Shield,
    title: 'Security Operations',
    description: 'Protect organizations from cyber threats through comprehensive security training. Learn threat detection, incident response, and security best practices.',
    skills: ['Threat Detection', 'Incident Response', 'Security Auditing', 'Compliance'],
    opportunities: [
      'Security Analyst',
      'Incident Response Specialist',
      'Security Consultant',
      'Compliance Officer',
      'Security Engineer'
    ]
  },
  {
    id: 'mobile-development',
    category: 'Mobile Development',
    icon: Smartphone,
    title: 'App Development',
    description: 'Create innovative mobile applications for iOS and Android platforms. Master cross-platform development and mobile UI/UX design.',
    skills: ['iOS Development', 'Android Development', 'Cross-platform', 'Mobile UI'],
    opportunities: [
      'Mobile App Developer',
      'iOS Developer',
      'Android Developer',
      'Cross-platform Developer',
      'Mobile UI Designer'
    ]
  },
  {
    id: 'ai-engineering',
    category: 'AI/ML',
    icon: Cpu,
    title: 'AI Engineering',
    description: 'Develop artificial intelligence and machine learning solutions. Learn deep learning, natural language processing, and computer vision.',
    skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
    opportunities: [
      'AI Engineer',
      'ML Engineer',
      'NLP Specialist',
      'Computer Vision Engineer',
      'Research Scientist'
    ]
  },
  {
    id: 'digital-design',
    category: 'Design',
    icon: PenTool,
    title: 'Digital Design',
    description: 'Create compelling digital experiences through UI/UX design. Master visual design principles and prototyping tools.',
    skills: ['UI Design', 'UX Research', 'Visual Design', 'Prototyping'],
    opportunities: [
      'UI Designer',
      'UX Designer',
      'Product Designer',
      'Visual Designer',
      'Interaction Designer'
    ]
  },
  {
    id: 'business-intelligence',
    category: 'Business Intelligence',
    icon: BarChart,
    title: 'Data Strategy',
    description: 'Transform business data into actionable insights. Learn data visualization, reporting, and strategic analysis.',
    skills: ['Business Analytics', 'Data Visualization', 'Reporting', 'KPI Tracking'],
    opportunities: [
      'BI Analyst',
      'Data Strategist',
      'Analytics Manager',
      'Reporting Specialist',
      'Performance Analyst'
    ]
  },
  {
    id: 'visual-arts',
    category: 'Visual Arts & Media',
    icon: Camera,
    title: 'Visual Arts',
    description: 'Master visual storytelling through photography, video, and digital art. Learn industry-standard tools and techniques.',
    skills: ['Photography', 'Cinematography', 'Video Editing', 'Digital Art', 'Traditional Art', 'Graphic Design'],
    opportunities: [
      'Photographer',
      'Videographer',
      'Digital Artist',
      'Graphic Designer',
      'Art Director'
    ]
  },
  {
    id: 'content-creation',
    category: 'Communication & Content',
    icon: MessageSquare,
    title: 'Content Creation',
    description: 'Develop compelling content across various media formats. Master storytelling, technical writing, and content strategy.',
    skills: ['Creative Writing', 'Technical Writing', 'Public Speaking', 'Content Creation', 'Copywriting', 'Brand Storytelling'],
    opportunities: [
      'Content Creator',
      'Technical Writer',
      'Copywriter',
      'Content Strategist',
      'Brand Storyteller'
    ]
  },
  {
    id: 'crafts',
    category: 'Crafts & Manufacturing',
    icon: Hammer,
    title: 'Crafts',
    description: 'Learn traditional and modern crafting techniques. Master woodworking, metalworking, and other artisanal skills.',
    skills: ['Furniture Making', 'Woodworking', 'Metalworking', 'Pottery & Ceramics', 'Textile Crafts', 'Jewelry Making'],
    opportunities: [
      'Artisan',
      'Craftsperson',
      'Workshop Owner',
      'Custom Furniture Maker',
      'Craft Instructor'
    ]
  },
  {
    id: 'technical-services',
    category: 'Technical Services',
    icon: Wrench,
    title: 'Tech Support',
    description: 'Provide expert technical support and maintenance services. Learn hardware troubleshooting and system diagnostics.',
    skills: ['Computer Repair', 'Smartphone Repair', 'Electronics Troubleshooting', 'Hardware Maintenance', 'Network Setup', 'System Diagnostics'],
    opportunities: [
      'Technical Support Specialist',
      'IT Support Engineer',
      'Hardware Technician',
      'Service Center Manager',
      'Field Service Technician'
    ]
  },
  {
    id: 'digital-marketing',
    category: 'Digital Marketing',
    icon: Share2,
    title: 'Marketing',
    description: 'Master digital marketing strategies and tools. Learn SEO, social media management, and content marketing.',
    skills: ['Social Media Management', 'SEO Optimization', 'Content Marketing', 'Email Marketing', 'Analytics & Reporting', 'PPC Advertising'],
    opportunities: [
      'Digital Marketing Manager',
      'SEO Specialist',
      'Social Media Manager',
      'Content Marketer',
      'Marketing Analyst'
    ]
  },
  {
    id: 'fashion-design',
    category: 'Fashion & Design',
    icon: Scissors,
    title: 'Fashion Design',
    description: 'Master the art of fashion design from concept to creation. Learn pattern making, garment construction, and fashion illustration.',
    skills: ['Pattern Making', 'Garment Construction', 'Fashion Illustration', 'Textile Knowledge'],
    opportunities: [
      'Fashion Designer',
      'Pattern Maker',
      'Fashion Illustrator',
      'Textile Designer',
      'Fashion Consultant'
    ]
  },
  {
    id: 'bag-making',
    category: 'Accessories Design',
    icon: ShoppingBag,
    title: 'Bag Making',
    description: 'Learn professional bag making techniques and design principles. Master leather crafting, hardware application, and pattern drafting.',
    skills: ['Leather Crafting', 'Hardware Application', 'Pattern Drafting', 'Stitching Techniques'],
    opportunities: [
      'Bag Designer',
      'Leather Craftsperson',
      'Accessories Designer',
      'Workshop Owner',
      'Custom Bag Maker'
    ]
  },
  {
    id: 'bead-making',
    category: 'Jewelry Arts',
    icon: Gem,
    title: 'Bead Making',
    description: 'Create unique jewelry pieces through professional bead making techniques. Master design, stringing, and color coordination.',
    skills: ['Jewelry Design', 'Stringing Techniques', 'Material Selection', 'Color Coordination'],
    opportunities: [
      'Jewelry Designer',
      'Bead Artist',
      'Accessories Maker',
      'Craft Instructor',
      'Boutique Owner'
    ]
  },
  {
    id: 'electrical-engineering',
    category: 'Engineering',
    icon: Zap,
    title: 'Electrical Engineering',
    description: 'Master electrical systems, power distribution, and electronic design. Learn cutting-edge technologies in power and control systems.',
    skills: ['Circuit Analysis', 'Power Systems', 'Control Systems', 'Electrical Machines', 'Digital Signal Processing', 'Telecommunications', 'Renewable Energy'],
    opportunities: [
      'Electrical Engineer',
      'Power Systems Engineer',
      'Control Systems Engineer',
      'Electronics Designer',
      'Telecommunications Engineer'
    ]
  },
  {
    id: 'computer-engineering',
    category: 'Engineering',
    icon: Monitor,
    title: 'Computer Engineering',
    description: 'Combine hardware and software expertise in computer systems design and development.',
    skills: ['Computer Architecture', 'Data Structures', 'Embedded Systems', 'Networking', 'AI/ML', 'Operating Systems'],
    opportunities: [
      'Computer Engineer',
      'Hardware Engineer',
      'Embedded Systems Developer',
      'Network Architect',
      'Systems Engineer'
    ]
  },
  {
    id: 'chemical-engineering',
    category: 'Engineering',
    icon: Beaker,
    title: 'Chemical Engineering',
    description: 'Design and optimize chemical processes and systems for industrial applications.',
    skills: ['Process Control', 'Chemical Reactions', 'Thermodynamics', 'Separation Processes', 'Biochemical Engineering', 'Polymer Science'],
    opportunities: [
      'Chemical Engineer',
      'Process Engineer',
      'Biochemical Engineer',
      'Research Scientist',
      'Plant Manager'
    ]
  },
  {
    id: 'aerospace-engineering',
    category: 'Engineering',
    icon: Plane,
    title: 'Aerospace Engineering',
    description: 'Design and develop aircraft, spacecraft, and related systems.',
    skills: ['Aerodynamics', 'Flight Mechanics', 'Propulsion Systems', 'Spacecraft Design', 'Aircraft Structures', 'Avionics'],
    opportunities: [
      'Aerospace Engineer',
      'Aircraft Designer',
      'Propulsion Engineer',
      'Avionics Engineer',
      'Space Systems Engineer'
    ]
  },
  {
    id: 'biomedical-engineering',
    category: 'Engineering',
    icon: Heart,
    title: 'Biomedical Engineering',
    description: 'Apply engineering principles to healthcare and medical technology development.',
    skills: ['Medical Device Design', 'Biomaterials', 'Biomedical Imaging', 'Tissue Engineering', 'Rehabilitation Engineering'],
    opportunities: [
      'Biomedical Engineer',
      'Medical Device Designer',
      'Clinical Engineer',
      'Research Engineer',
      'Regulatory Specialist'
    ]
  },
  {
    id: 'environmental-engineering',
    category: 'Engineering',
    icon: Leaf,
    title: 'Environmental Engineering',
    description: 'Design solutions for environmental protection and sustainable development.',
    skills: ['Water Treatment', 'Air Pollution Control', 'Waste Management', 'Sustainable Energy', 'Environmental Impact Assessment'],
    opportunities: [
      'Environmental Engineer',
      'Sustainability Consultant',
      'Waste Management Engineer',
      'Environmental Compliance Specialist',
      'Water Resources Engineer'
    ]
  },
  {
    id: 'industrial-engineering',
    category: 'Engineering',
    icon: Factory,
    title: 'Industrial Engineering',
    description: 'Optimize complex systems and processes in manufacturing and service industries.',
    skills: ['Operations Research', 'Supply Chain Management', 'Lean Manufacturing', 'Quality Control', 'Production Planning'],
    opportunities: [
      'Industrial Engineer',
      'Process Improvement Engineer',
      'Quality Engineer',
      'Supply Chain Analyst',
      'Operations Manager'
    ]
  },
  {
    id: 'agricultural-engineering',
    category: 'Engineering',
    icon: Tractor,
    title: 'Agricultural Engineering',
    description: 'Apply engineering principles to agricultural production and processing systems.',
    skills: ['Irrigation Systems', 'Farm Machinery', 'Soil Conservation', 'Post-Harvest Technology', 'Agricultural Structures'],
    opportunities: [
      'Agricultural Engineer',
      'Farm Systems Engineer',
      'Food Processing Engineer',
      'Irrigation Specialist',
      'Agricultural Consultant'
    ]
  },
  {
    id: 'marine-engineering',
    category: 'Engineering',
    icon: Anchor,
    title: 'Marine Engineering',
    description: 'Design and maintain ships, offshore structures, and marine systems.',
    skills: ['Naval Architecture', 'Marine Propulsion', 'Ship Hydrodynamics', 'Offshore Engineering', 'Maritime Safety'],
    opportunities: [
      'Marine Engineer',
      'Naval Architect',
      'Offshore Systems Engineer',
      'Ship Designer',
      'Maritime Safety Officer'
    ]
  },
  {
    id: 'petroleum-engineering',
    category: 'Engineering',
    icon: Fuel,
    title: 'Petroleum Engineering',
    description: 'Develop methods for oil and gas extraction and production optimization.',
    skills: ['Reservoir Engineering', 'Drilling Engineering', 'Production Technology', 'Enhanced Oil Recovery', 'Pipeline Systems'],
    opportunities: [
      'Petroleum Engineer',
      'Reservoir Engineer',
      'Drilling Engineer',
      'Production Engineer',
      'Energy Consultant'
    ]
  }
];