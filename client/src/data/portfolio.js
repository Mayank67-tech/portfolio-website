export const profile = {
  name: 'Mayank Kumar Agarwal',
  title: 'Computer Science Undergraduate',
  headline: 'Computer Science Undergraduate | Backend Engineering | Node.js | Scalable Systems',
  valueProposition: 'I design scalable backend systems, real-time applications, and production-ready web platforms.',
  location: 'Dhanbad, Jharkhand',
  phone: '+91 6200363694',
  email: 'mayankagarwal92.6bit@gmail.com',

  summary:
    'Computer Science undergraduate skilled in backend engineering, system design, and full-stack development. Experienced in building scalable REST APIs, authentication systems, real-time applications, and payment integrations using Node.js, MongoDB, and modern web technologies. Strong foundation in Data Structures, Operating Systems, and DBMS with 250+ DSA problems solved and proven performance in competitive programming.',

  summaryLines: [
    'Backend-focused CS undergraduate skilled in scalable APIs, authentication, and system design.',
    'Built real-time and production applications using Node.js, MongoDB, Next.js, and modern cloud tools.',
    'Strong DSA foundation with 250+ problems solved and 1700+ LeetCode contest rating.',
  ],

  links: {
    github: 'https://github.com/Mayank67-tech',
    linkedin: 'https://www.linkedin.com/in/mayank-agarwal-631179281/',
    leetcode: 'https://leetcode.com/u/Mayank5643/',
  },

  resumeViewUrl: 'https://drive.google.com/file/d/1b-IXlok4IPiEpYR3fltTC38mfiE0W2tR/view',

  resumeDownloadUrl:
    'https://drive.google.com/uc?export=download&id=1b-IXlok4IPiEpYR3fltTC38mfiE0W2tR',
};



/** Skills section – 4 categories, recruiter-focused */
export const skillsGroups = [
  { label: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'JWT', 'Webhooks'] },
  { label: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind'] },
  { label: 'Databases', items: ['MongoDB', 'SQL', 'Indexing', 'Query optimization'] },
  { label: 'Core CS + Tools', items: ['DSA', 'OS', 'DBMS', 'Git', 'Postman', 'Docker'] },
];

export const projects = [
  {
    title: 'Vidly',
    techStack: ['Next.js', 'TypeScript', 'Clerk', 'Stream', 'Tailwind', 'WebRTC'],
    description: 'Enterprise-grade video conferencing platform with real-time communication.',
    bullets: [
      'Built scalable video conferencing platform with real-time video, chat, and screen sharing.',
      'Integrated Stream APIs and WebRTC for low-latency real-time communication.',
      'Implemented authentication, participant controls, scheduling, and session management.',
    ],
    github: 'https://github.com/Mayank67-tech/Vidly',
    live: 'https://vidly-chi.vercel.app/',
  },
  {
    title: 'Medi-Care',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe', 'Cloudinary'],
    description: 'Full-stack healthcare platform with appointment scheduling and Stripe payment workflows.',
    bullets: [
      'Built full-stack healthcare platform with appointment scheduling and Stripe payment workflows.',
      'Designed secure JWT + HTTP-only cookie auth with RBAC; optimized MongoDB queries (~30% response improvement).',
      'Implemented idempotent APIs and webhook handling for reliability.',
    ],
    github: 'https://github.com/Mayank67-tech/medi_care',
    live: 'https://medi-care-roan-tau.vercel.app/',
  },
  {
    title: 'PrepAI',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'Gemini API'],
    description: 'AI-powered question generation and practice platform.',
    bullets: [
      'Developed backend APIs for dynamic AI question generation using Gemini API.',
      'Implemented JWT auth and MongoDB Atlas; designed end-to-end flow from signup to practice sessions.',
      'Structured scalable REST APIs with modular architecture.',
    ],
    github: 'https://github.com/Mayank67-tech/PrepAI',
    live: 'https://prep-ai-6oop.vercel.app/',
  },
];


export const skills = {
  programming: ['C', 'C++', 'JavaScript'],
  backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Webhooks', 'API Security'],
  database: ['MongoDB', 'SQL', 'Indexing', 'Query Optimization'],
  frontend: ['React.js', 'Next.js', 'HTML', 'CSS'],
  fundamentals: ['DSA', 'OS', 'OOP', 'DBMS'],
  tools: ['Git', 'GitHub', 'Postman', 'MongoDB Atlas'],
};

export const education = [
  {
    degree: 'B.Tech Computer Science and Engineering',
    institution: 'Birla Institute of Technology, Mesra',
    period: '2023 – Present',
    cgpa: 'CGPA: 8.17',
  },
  { degree: '12th', institution: 'Rajkamal Saraswati Vidya Mandir', period: '', detail: '91.8%' },
  { degree: '10th', institution: 'De Nobili School, FRI', period: '', detail: '92.6%' },
];

export const achievements = [
  'Solved 250+ DSA problems',
  'LeetCode Rating: 1700+',
  'Global Rank 758 – Weekly Contest 444',
  'Global Rank 1931 – Weekly Contest 452',
];

export const positions = [
  'Senior Executive, IEEE BIT Mesra (Conducted DSA workshops for 300+ students)',
  'Class Representative',
  'National Service Scheme Volunteer',
];

/** Experience section – impact-focused with metrics */
export const experience = [
  {
    type: 'Project',
    title: 'Medi-Care',
    org: 'Personal Project',
    period: '2024',
    techStack: 'React, Node.js, Express, MongoDB, JWT, Stripe, Cloudinary',
    points: [
      'Built full-stack healthcare platform with appointment scheduling and Stripe payment workflows.',
      'Designed secure JWT + HTTP-only cookie auth with RBAC.',
      'Optimized MongoDB queries improving response time by ~30%.',
      'Implemented idempotent APIs and webhook handling for reliability.',
    ],
  },
  {
    type: 'Project',
    title: 'PrepAI',
    org: 'Personal Project',
    period: '2024',
    techStack: 'React, Node.js, Express, MongoDB, Tailwind, Gemini API',
    points: [
      'Developed backend APIs for dynamic AI question generation using Gemini API.',
      'Implemented secure JWT auth and MongoDB Atlas integration.',
      'Designed end-to-end flow from signup to practice sessions.',
      'Structured scalable REST APIs with modular architecture.',
    ],
  },
  {
    type: 'Open Source',
    title: 'Contributions',
    org: '—',
    period: 'Ongoing',
    techStack: null,
    points: ['Exploring open source contributions in Node.js and developer tools.'],
  },
];
