export const site = {
  name: 'Shashank Hegde',
  title: 'Associate Software Engineer | Healthcare + Applied AI',
  role: 'Associate Software Engineer',
  location: 'Bengaluru, India',
  email: 'shashankhegde47@gmail.com',
  phone: '+91 8088806238',
  url: 'https://example.com',
  resumeUrl: '/resume.pdf',
  socials: {
    linkedin: 'https://www.linkedin.com/in/shashankhegde06',
    github: 'https://github.com/shashankhegde06'
  },
  positioning: 'Engineering AI-powered healthcare software that reduces clinical burden and improves care delivery.',
  summary: [
    'Associate Software Engineer building AI-assisted healthcare applications that integrate directly with EHR systems.',
    'Focused on clinical documentation automation, performant workflows, and reliable backend systems.'
  ]
}

export const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' }
]

export const highlightStats = [
  { label: 'Healthcare IT', value: 'Production' },
  { label: 'ML + Infra', value: '2 Projects' },
  { label: 'CGPA', value: '8.47' },
  { label: 'PU Score', value: '96.66%' }
]

export const strengths = [
  'Hands-on delivery of EHR-integrated healthcare applications',
  'Applied AI for ambient clinical documentation and workflow automation',
  'Performance and reliability improvements across UI, backend, and cloud',
  'Agile delivery mindset in regulated healthcare environments'
]

export const differentiators = [
  'Built AI-assisted documentation workflows embedded in EHR systems',
  'Delivered client-side caching to reduce API calls and load times',
  'Designed resilient autosave patterns to prevent data loss',
  'Balances product usability with healthcare compliance constraints'
]

export const skills = {
  languages: ['C#', 'C'],
  frameworks: ['.NET', 'MAUI', 'Angular'],
  databases: ['MySQL'],
  tools: ['Visual Studio', 'Visual Studio Code', 'Jupyter Notebook'],
  platforms: ['AWS'],
  aiTools: ['Gen AI tooling'],
  subjects: [
    'Data Structures and Algorithms',
    'Computer Networks',
    'Operating Systems',
    'DBMS',
    'OOP',
    'Machine Learning'
  ]
}

export const skillLevels = [
  { label: 'Backend Systems', value: 90 },
  { label: 'Healthcare Workflows', value: 88 },
  { label: 'Applied ML', value: 78 },
  { label: 'Cloud & DevOps', value: 74 }
]

export const experience = [
  {
    role: 'Associate Software Engineer',
    company: 'Greenway Health',
    period: 'Jul 2025 – Present',
    location: 'Bengaluru, India',
    bullets: [
      'Developing EHR-integrated healthcare applications focused on clinical documentation automation and workflow efficiency.',
      'Contributing to GCA, an AI-powered ambient documentation tool that automates clinical notes to reduce administrative burden and improve patient engagement.',
      'Implemented appointment-level local storage caching for template-driven workflows, cutting repeated settings calls and improving load time.',
      'Designed a resilient autosave system with debounce, interval, and focus/blur saves to prevent data loss during note editing.',
      'Enhanced UI flows for appointment templates and language selection to reduce cognitive load for clinicians.',
      'Building features across C#, .NET, MAUI, Angular, AWS, and Gen AI tooling in a regulated healthcare environment.'
    ]
  }
]

export const education = [
  {
    degree: 'B.Tech in Computer Science and Technology',
    school: 'Dayananda Sagar University, Bengaluru',
    period: '2025',
    score: 'CGPA 8.47'
  },
  {
    degree: 'Pre University',
    school: 'MES PU College, Sirsi',
    period: '2021',
    score: '96.66%'
  }
]

export const projects = [
  {
    title: 'Data Compression Recommender',
    period: 'Sep 2023 – Dec 2023',
    description: 'ML-driven recommendation system that selects optimal compression methods based on file characteristics.',
    highlights: [
      'Trained a model to map file type and size to the most efficient compression algorithm.',
      'Applied DevOps principles for deployment, monitoring, and scalability.'
    ],
    tags: ['Machine Learning', 'DevOps', 'Optimization'],
    links: {
      caseStudy: '#',
      repo: '#'
    }
  },
  {
    title: 'Route Optimization for Sustainable Infrastructure',
    period: 'Sep 2024 – Jan 2025',
    description: 'Satellite imagery + ML pipeline to classify terrains and generate cost maps for road planning.',
    highlights: [
      'Built terrain classification models from satellite data to quantify construction cost.',
      'Computed least-cost routes with pathfinding to reduce environmental impact.'
    ],
    tags: ['Remote Sensing', 'ML', 'Pathfinding'],
    links: {
      caseStudy: '#',
      repo: '#'
    }
  }
]

export const courses = [
  {
    title: 'Data Structures and Backend with Java',
    provider: 'Coursera',
    focus: 'Spring Boot REST APIs, H2 database connectivity',
    year: '2024'
  },
  {
    title: 'Google Cloud Computing Foundations',
    provider: 'NPTEL',
    focus: 'Cloud infrastructure management, deployment, scaling',
    year: '2024'
  }
]
