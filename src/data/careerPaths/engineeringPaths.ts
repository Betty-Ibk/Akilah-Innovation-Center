import { 
  Zap, Monitor, Beaker, Plane, Heart, Leaf, Factory, 
  Tractor, Anchor, Fuel, Atom, Pickaxe, Code2, Flask
} from 'lucide-react';
import type { CareerPath } from './types';

export const engineeringPaths: CareerPath[] = [
  {
    id: 'electrical-engineering',
    category: 'Engineering',
    icon: Zap,
    title: 'Electrical Engineering',
    description: 'Design and develop electrical systems, power distribution, and electronic devices.',
    skills: [
      'Circuit Analysis',
      'Power Systems Engineering',
      'Control Systems',
      'Electrical Machines',
      'Digital Signal Processing',
      'Telecommunications Engineering',
      'Renewable Energy Systems'
    ],
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
    skills: [
      'Computer Architecture',
      'Data Structures',
      'Embedded Systems',
      'Networking',
      'AI/ML',
      'Operating Systems'
    ],
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
    skills: [
      'Process Control',
      'Chemical Reactions',
      'Thermodynamics',
      'Separation Processes',
      'Biochemical Engineering',
      'Polymer Science'
    ],
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
    skills: [
      'Aerodynamics',
      'Flight Mechanics',
      'Propulsion Systems',
      'Spacecraft Design',
      'Aircraft Structures',
      'Avionics'
    ],
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
    skills: [
      'Medical Device Design',
      'Biomaterials',
      'Biomedical Imaging',
      'Tissue Engineering',
      'Rehabilitation Engineering'
    ],
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
    skills: [
      'Water Treatment',
      'Air Pollution Control',
      'Waste Management',
      'Sustainable Energy',
      'Environmental Impact Assessment'
    ],
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
    skills: [
      'Operations Research',
      'Supply Chain Management',
      'Lean Manufacturing',
      'Quality Control',
      'Production Planning'
    ],
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
    skills: [
      'Irrigation Systems',
      'Farm Machinery',
      'Soil Conservation',
      'Post-Harvest Technology',
      'Agricultural Structures'
    ],
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
    skills: [
      'Naval Architecture',
      'Marine Propulsion',
      'Ship Hydrodynamics',
      'Offshore Engineering',
      'Maritime Safety'
    ],
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
    skills: [
      'Reservoir Engineering',
      'Drilling Engineering',
      'Production Technology',
      'Enhanced Oil Recovery',
      'Pipeline Systems'
    ],
    opportunities: [
      'Petroleum Engineer',
      'Reservoir Engineer',
      'Drilling Engineer',
      'Production Engineer',
      'Energy Consultant'
    ]
  },
  {
    id: 'nuclear-engineering',
    category: 'Engineering',
    icon: Atom,
    title: 'Nuclear Engineering',
    description: 'Design and maintain nuclear power systems and radiation applications.',
    skills: [
      'Reactor Physics',
      'Radiation Protection',
      'Nuclear Materials',
      'Nuclear Fuel Cycle',
      'Nuclear Safety Analysis',
      'Fusion Energy'
    ],
    opportunities: [
      'Nuclear Engineer',
      'Reactor Operator',
      'Radiation Safety Officer',
      'Nuclear Research Scientist',
      'Nuclear Systems Designer'
    ]
  },
  {
    id: 'mining-engineering',
    category: 'Engineering',
    icon: Pickaxe,
    title: 'Mining Engineering',
    description: 'Plan and oversee mineral extraction and processing operations.',
    skills: [
      'Mineral Exploration',
      'Rock Mechanics',
      'Mine Design',
      'Ventilation Systems',
      'Mineral Processing',
      'Environmental Management'
    ],
    opportunities: [
      'Mining Engineer',
      'Mine Manager',
      'Mineral Processing Engineer',
      'Geotechnical Engineer',
      'Environmental Coordinator'
    ]
  },
  {
    id: 'software-engineering',
    category: 'Engineering',
    icon: Code2,
    title: 'Software Engineering',
    description: 'Design and develop complex software systems and applications.',
    skills: [
      'Software Development Life Cycle',
      'Programming Fundamentals',
      'Database Management',
      'Cloud Computing',
      'Software Testing',
      'Agile Methodologies'
    ],
    opportunities: [
      'Software Engineer',
      'Systems Architect',
      'DevOps Engineer',
      'Quality Assurance Engineer',
      'Technical Lead'
    ]
  },
  {
    id: 'materials-engineering',
    category: 'Engineering',
    icon: Flask,
    title: 'Materials Engineering',
    description: 'Study and develop new materials for various applications.',
    skills: [
      'Metallurgy',
      'Polymer Technology',
      'Nanomaterials',
      'Composite Materials',
      'Failure Analysis',
      'Ceramic Engineering'
    ],
    opportunities: [
      'Materials Engineer',
      'Research Scientist',
      'Quality Control Engineer',
      'Product Development Engineer',
      'Failure Analysis Specialist'
    ]
  }
];