export const site = {
  name: 'Shashank Hegde',
  title: 'Software Engineer | C# .NET MAUI AWS',
  role: 'Associate Software Engineer',
  location: 'Bengaluru, India',
  email: 'shashankhegde47@gmail.com',
  phone: '+91 8088806238',
  url: 'https://example.com',
  resumeUrl: process.env.NEXT_PUBLIC_RESUME_URL || '/resume.pdf',
  socials: {
    linkedin: 'https://www.linkedin.com/in/shashankhegde06',
    github: 'https://github.com/shashankhegde06'
  },
  positioning: 'Software Engineer building reliable backend systems with C# and .NET, with MAUI and AWS exposure.',
  summary: [
    'I work on backend systems using C# and .NET, build cross-platform apps with .NET MAUI, and support deployments on AWS.',
    'I focus on clean, maintainable code, API design, and performance improvements, and I use generative AI tools to speed up development while validating outputs through testing and review.'
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
  { label: 'Backend Focus', value: 'C# .NET' },
  { label: 'App Development', value: '.NET MAUI' },
  { label: 'Cloud Exposure', value: 'AWS' },
  { label: 'Core Strength', value: 'Clean Code' }
]

export const strengths = [
  'Designing and implementing backend services and APIs using C# and .NET',
  'Writing clean, maintainable code with strong focus on readability and reliability',
  'Building cross-platform applications with .NET MAUI when cross-team execution is needed',
  'Contributing to cloud-ready deployments and operations on AWS'
]

export const differentiators = [
  'Started with Java and Python in college, then transitioned into the Microsoft stack',
  'Hands-on experience with data migration, test automation, and API design',
  'Use generative AI tools like Copilot, ChatGPT, and Claude to accelerate delivery without depending on them blindly',
  'Curious about system internals and practical software scalability',
  'Known for teammate collaboration and simplifying complex technical problems'
]

export const personalInterests = [
  'Outside coding, I like tinkering with new ideas, helping teammates, and staying hands-on with practical problem solving.',
  'I enjoy sports, travelling, and occasionally singing.',
  'I follow motorsport, cricket, podcasts, and tech reviews.',
  'I am passionate about automobiles, riding, driving, and spending time in nature.'
]

export const personalQuote = {
  text: "What's behind you doesn't matter.",
  author: 'Enzo Ferrari'
}

export const skills = {
  languages: ['C#', 'Java', 'Python', 'C'],
  frameworks: ['.NET', 'MAUI'],
  databases: ['MySQL'],
  tools: ['Visual Studio', 'Visual Studio Code', 'Jupyter Notebook'],
  platforms: ['AWS'],
  aiTools: ['AI-assisted Coding (Copilot)', 'ChatGPT', 'Claude', 'Manual Validation'],
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
  { label: 'API Design', value: 86 },
  { label: 'Performance Optimization', value: 82 },
  { label: 'Debugging', value: 84 }
]

export const experience = [
  {
    role: 'Associate Software Engineer',
    company: 'Greenway Health',
    period: 'Jul 2025 - Present',
    location: 'Bengaluru, India',
    bullets: [
      'Build and maintain backend services using C# and .NET for production business workflows.',
      'Develop and improve REST APIs with focus on performance, readability, and long-term maintainability.',
      'Implemented autosave during editing using 2-second inactivity debounce, a 15-second fallback interval, and on-blur save to reduce data loss.',
      'Improved recording page performance by caching templates, sections, and language selections locally after first load with refresh on upstream changes.',
      'Delivered UI enhancements that reduced user confusion and improved feature clarity.',
      'Built beginner-level domain understanding of EHR and clinical workflows to support better feature decisions.',
      'Support data migration activities and validation to ensure safe and accurate transitions across systems.',
      'Contribute to test automation to improve release confidence and reduce manual regression effort.',
      'Supported QA activities when needed to maintain release quality and execution velocity.',
      'Participate in AWS-based deployment and operational workflows for reliable delivery.'
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
    title: 'Clinical Editor Autosave Reliability',
    period: 'Greenway Health | 2025 - Present',
    description:
      'Worked on a multi-trigger autosave flow in an editing experience to protect user input and reduce accidental data loss.',
    highlights: [
      'Implemented inactivity-based save using 2-second debounce to persist changes after users pause typing.',
      'Implemented a 15-second interval save for long continuous typing sessions and on-blur save when users click outside the edit area.'
    ],
    tags: ['Backend', 'Reliability', 'User Experience'],
    links: {
      caseStudy: '#',
      repo: '#'
    }
  },
  {
    title: 'Recording Page Performance Optimization',
    period: 'Greenway Health | 2025 - Present',
    description:
      'Worked on reducing repeated API calls on a recording workflow by shifting frequent reads to local cache with clear refresh conditions.',
    highlights: [
      'Loaded template, section, and primary and secondary language data from the main page once, then reused cached data locally.',
      'Triggered refetch only when cache was missing or upstream data changed, reducing call volume and improving load time.'
    ],
    tags: ['Performance', 'Caching', 'API Efficiency'],
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
