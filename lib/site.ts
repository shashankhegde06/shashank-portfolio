export const site = {
  name: 'Shashank Hegde',
  title: 'Software Engineer | C# .NET | Healthcare Technology',
  role: 'Associate Software Engineer',
  location: 'Bengaluru, India',
  email: 'shashankhegde47@gmail.com',
  phone: '+91 8088806238',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  resumeUrl: 'https://drive.google.com/file/d/1WF_4jrixxPcUY2VVTkqJkziD_GCeCxeC/view?usp=sharing',
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
  { href: '#certifications', label: 'Certifications' },
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
  databases: ['DynamoDB', 'MySQL'],
  tools: ['Visual Studio', 'Visual Studio Code', 'Jupyter Notebook'],
  platforms: ['AWS'],
  aiTools: ['AI Agents', 'Copilot', 'ChatGPT', 'Claude', 'Manual Validation'],
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
    period: 'Aug 2025 - Present',
    location: 'Bengaluru, India',
    bullets: [
      'Develop and maintain backend services using C# and .NET for healthcare software workflows in a production EHR environment.',
      'Build and enhance REST APIs with a focus on performance, readability, maintainability, and reliable service integration.',
      'Delivered Novare Notifications end to end, translating the PRD into a complete working feature. Used AI agents to accelerate implementation and reviewed and validated their output.',
      'Implemented autosave in a clinical editing workflow: after 2 seconds of inactivity, every 15 seconds during continuous editing, and when users leave the editing area.',
      'Improved recording-page performance by caching templates, sections, and primary and secondary language selections locally; refetch when cached data is missing or upstream data changes.',
      'Contribute to data migration and validation to support accurate transitions and data integrity.',
      'Contribute to automated testing and quality assurance to improve release confidence and reduce reliance on manual regression testing.',
      'Support AWS deployment and operational workflows, including work with cloud application components and data services.',
      'Deliver interface improvements that make healthcare workflows clearer and easier to navigate.',
      'Apply practical knowledge of EHR and clinical workflows to feature development and troubleshooting.'
    ]
  },
  {
    role: 'Associate Software Engineer Intern',
    company: 'Greenway Health',
    period: 'Feb 2025 - Jul 2025',
    location: 'Bengaluru, India',
    bullets: [
      'Completed a five-month engineering internship contributing to healthcare IT projects in an agile development environment.',
      'Gained hands-on experience with C#, .NET, web technologies, databases, and cloud computing.'
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
    title: 'Novare Notifications',
    category: 'Professional',
    period: 'Greenway Health | Jul 2026 - Sep 2026',
    description: 'Delivered the Novare Notifications feature end to end, translating the product requirements document (PRD) into a working provider-focused notification center. Used AI-assisted development throughout implementation, with review and validation of the generated output.',
    highlights: [
      'Developed workflows for providers to create tasks for themselves or assign tasks to other providers with the required details.',
      'Built supporting endpoints so other teams can create tasks automatically for defined clinical or application scenarios.',
      'Implemented provider-specific visibility for tasks assigned to the logged-in provider in the Assigned to Me view.',
      'Surfaced high-priority tasks assigned to the provider and high-priority unassigned tasks that require attention.'
    ],
    tags: ['C#', '.NET', 'REST APIs', 'Healthcare'],
    links: { caseStudy: '#', repo: '#' }
  },
  {
    title: 'Clinical Editor Autosave Reliability',
    category: 'Professional',
    period: 'Greenway Health | Feb 2026 - Mar 2026',
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
    category: 'Professional',
    period: 'Greenway Health | Apr 2026 - May 2026',
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
  },
  {
    title: 'Route Optimization',
    category: 'Academic',
    period: 'Dayananda Sagar University | Sep 2024 - Jan 2025',
    description: 'A terrain-aware route planning solution for sustainable road construction using satellite imagery and machine learning.',
    highlights: [
      'Classified terrain from satellite imagery and generated cost maps to represent road construction difficulty and impact.',
      'Applied pathfinding algorithms to identify least-cost routes and support lower-impact infrastructure planning.'
    ],
    tags: ['Machine Learning', 'Satellite Imagery', 'Pathfinding'],
    links: { caseStudy: '#', repo: 'https://github.com/shashankhegde06/Route-Management' }
  },
  {
    title: 'KrishiMitra',
    category: 'Personal',
    period: 'Personal project',
    description: 'A Kannada-first farming companion for arecanut growers in Karnataka, bringing farm records, activity and expense tracking, reminders, agricultural reference material, and bilingual Q&A together in one application.',
    highlights: [
      'Built an end-to-end flow from interactive Blazor Server components through an ASP.NET Core REST API to SQLite persistence with EF Core migrations and seeded demo data.',
      'Added validated CRUD workflows for farm profiles, activities, expenses, and reminders, plus a dashboard for recent farm updates.',
      'Structured the solution into Web, API, Core, and Infrastructure projects to keep UI, API, business contracts, and data concerns separate.',
      'Added keyword-based retrieval over a small knowledge collection and a configurable assistant that can run in predictable mock mode or use an OpenAI-compatible chat API.',
      'The default assistant is a mock; model-generated answers require provider configuration. Included farming content is educational demo material, not diagnosis or treatment advice.'
    ],
    tags: ['.NET 8', 'C#', 'Blazor Server', 'ASP.NET Core', 'EF Core', 'SQLite', 'REST', 'Swagger'],
    links: { caseStudy: '#', repo: 'https://github.com/shashankhegde06/KrishiMitra' }
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

export const certifications = [
  {
    title: 'AWS Academy Graduate',
    program: 'AWS Academy Cloud Foundations',
    provider: 'Amazon Web Services',
    credentialUrl: 'https://drive.google.com/drive/u/1/folders/1zuw3LWeOvY2xEpr0skg_uAgdn2B_ZFmJ'
  },
  {
    title: 'Data Structures and Backend with Java',
    program: 'Backend development with Java',
    provider: 'Coursera',
    credentialUrl: 'https://drive.google.com/drive/u/1/folders/1zuw3LWeOvY2xEpr0skg_uAgdn2B_ZFmJ'
  }
]
