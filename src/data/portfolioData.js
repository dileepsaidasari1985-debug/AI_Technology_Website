/**
 * =========================================================================
 * STUDENT PORTFOLIO - CENTRALIZED DATA CONFIGURATION FILE
 * =========================================================================
 * 
 * Customize your portfolio easily! All personal details, images, projects,
 * education, skills, and links can be updated directly in this single file.
 */

export const portfolioData = {
  // -----------------------------------------------------------------------
  // 1. PERSONAL INFORMATION
  // -----------------------------------------------------------------------
  personalInfo: {
    fullName: "Dileep Sai Dasari",
    preferredName: "Dileep",
    initials: "DS",
    title: "B-Tech Computer Science Student & Aspiring Full-Stack Developer",
    subtitle: "B-Tech Student | Aspiring Developer | Technology Enthusiast",
    mainHeading: "Building Ideas Into Digital Experiences.",
    heroGreeting: "HELLO, I'M",
    
    // Typing text roles displayed in Hero section
    animatedRoles: [
      "B-Tech Computer Science Student",
      "Full-Stack Web Developer",
      "Frontend UI/UX Enthusiast",
      "Open Source Contributor",
      "Algorithmic Problem Solver"
    ],

    // Availability status badge (editable)
    availabilityBadge: "Open to Internships & Projects",
    isOpenToWork: true,

    // Short intro in Hero
    shortIntro: "B-Tech Computer Science student passionate about building modern, responsive, and high-performance web applications. Focused on React, clean UI engineering, and scalable full-stack web solutions.",
    
    // Profile avatar image URL
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    
    // Location & Contact
    location: "India (Open to Remote & Global Opportunities)",
    email: "dileepsaidasari1985@gmail.com",
    phone: "+91 98765 43210",
    timezone: "IST (UTC+5:30)",
    
    // Resume PDF link
    resumeUrl: "#resume-preview",
  },

  // -----------------------------------------------------------------------
  // 2. SOCIAL LINKS
  // -----------------------------------------------------------------------
  socialLinks: {
    github: "https://github.com/dileepsaidasari1985-debug",
    linkedin: "https://linkedin.com/in/dileepsaidasari",
    instagram: "https://instagram.com/dileepsaidasari",
    twitter: "https://twitter.com/dileepsaidasari",
    leetcode: "https://leetcode.com/dileepsaidasari",
    email: "mailto:dileepsaidasari1985@gmail.com",
  },

  // -----------------------------------------------------------------------
  // 3. STATS COUNTERS (Hero & About Section)
  // -----------------------------------------------------------------------
  stats: [
    { label: "Projects Completed", value: "14+", description: "Academic & personal builds" },
    { label: "Technical Skills", value: "22+", description: "Languages, tools & frameworks" },
    { label: "Certifications", value: "6", description: "Verified credentials earned" },
    { label: "Learning Experience", value: "2+ Yrs", description: "Hands-on coding journey" },
  ],

  // -----------------------------------------------------------------------
  // 4. ABOUT ME SECTION
  // -----------------------------------------------------------------------
  about: {
    bioParagraphs: [
      "Hello! I am a dedicated B-Tech Computer Science student passionate about creating clean, modern, and accessible software solutions. My journey began with core programming concepts and curiosity about web architectures, evolving into developing responsive full-stack applications with React, modern JavaScript, and server-side technologies.",
      "Beyond academic coursework, I love turning creative concepts into functional digital products. I actively build projects, follow modern web design principles, and strive to deliver seamless user experiences across devices.",
      "When I am not coding, I enjoy exploring emerging developer tools, reading technology articles, and collaborating on student engineering projects."
    ],
    careerGoal: "Seeking a Software Engineering or Frontend Developer Internship where I can contribute to real-world projects, learn from seasoned engineering mentors, and build impactful software.",
    strengths: [
      "Rapid learner capable of mastering new tech stacks quickly",
      "Strong foundation in Data Structures, Algorithms, and OOP",
      "Sharp eye for clean UI/UX and responsive design details",
      "Collaborative team player with agile project experience",
      "Proactive problem solver with attention to performance"
    ],
    technicalInterests: [
      "Full-Stack Web Development",
      "Modern React Ecosystem & Vite",
      "RESTful API & Server Architecture",
      "UI/UX Design Systems & Accessibility",
      "Database Systems & Optimization"
    ],
    hobbies: [
      "Open Source Exploration",
      "Chess & Problem Solving",
      "Tech Podcasts & Tech Trends",
      "Coding Challenges & Community Forums"
    ],
    quickFacts: [
      { label: "Degree", value: "B-Tech in Computer Science & Engineering" },
      { label: "Program", value: "Undergraduate Engineering" },
      { label: "Field", value: "Full-Stack Software Development" },
      { label: "Availability", value: "Immediate Internships / Projects" },
      { label: "Languages", value: "English, Telugu, Hindi" },
    ]
  },

  // -----------------------------------------------------------------------
  // 5. TECHNICAL SKILLS SECTION
  // -----------------------------------------------------------------------
  skillCategories: [
    { id: "all", name: "All Skills" },
    { id: "languages", name: "Programming Languages" },
    { id: "frontend", name: "Frontend Development" },
    { id: "backend", name: "Backend Development" },
    { id: "database", name: "Databases" },
    { id: "tools", name: "Tools & DevOps" },
    { id: "soft", name: "Soft Skills" },
  ],

  skills: [
    // 1. Programming Languages
    { name: "JavaScript (ES6+)", category: "languages", level: "Advanced", percentage: 90, icon: "Code2", color: "from-yellow-400 to-amber-500" },
    { name: "TypeScript", category: "languages", level: "Proficient", percentage: 80, icon: "FileCode", color: "from-blue-500 to-indigo-600" },
    { name: "Python", category: "languages", level: "Advanced", percentage: 85, icon: "Terminal", color: "from-emerald-400 to-teal-600" },
    { name: "C++", category: "languages", level: "Intermediate", percentage: 75, icon: "Binary", color: "from-blue-600 to-cyan-500" },
    { name: "Java", category: "languages", level: "Intermediate", percentage: 70, icon: "Coffee", color: "from-orange-500 to-red-600" },
    { name: "HTML5 & CSS3", category: "languages", level: "Advanced", percentage: 95, icon: "Layout", color: "from-orange-400 to-amber-600" },

    // 2. Frontend Development
    { name: "React.js", category: "frontend", level: "Advanced", percentage: 90, icon: "Atom", color: "from-cyan-400 to-blue-500" },
    { name: "Tailwind CSS", category: "frontend", level: "Advanced", percentage: 92, icon: "Palette", color: "from-teal-400 to-cyan-500" },
    { name: "Next.js", category: "frontend", level: "Intermediate", percentage: 74, icon: "Globe", color: "from-slate-400 to-slate-200" },
    { name: "Responsive Design", category: "frontend", level: "Advanced", percentage: 94, icon: "Smartphone", color: "from-sky-400 to-blue-600" },
    { name: "State Management", category: "frontend", level: "Proficient", percentage: 82, icon: "Layers", color: "from-purple-500 to-indigo-500" },

    // 3. Backend Development
    { name: "Node.js", category: "backend", level: "Proficient", percentage: 82, icon: "Server", color: "from-green-500 to-emerald-600" },
    { name: "Express.js", category: "backend", level: "Proficient", percentage: 84, icon: "Cpu", color: "from-neutral-400 to-slate-600" },
    { name: "RESTful API Design", category: "backend", level: "Proficient", percentage: 86, icon: "Network", color: "from-blue-400 to-indigo-600" },
    { name: "JWT & User Authentication", category: "backend", level: "Proficient", percentage: 78, icon: "ShieldCheck", color: "from-amber-400 to-orange-500" },

    // 4. Database Management
    { name: "PostgreSQL", category: "database", level: "Proficient", percentage: 80, icon: "Database", color: "from-blue-500 to-indigo-700" },
    { name: "MongoDB & Mongoose", category: "database", level: "Proficient", percentage: 82, icon: "Boxes", color: "from-emerald-500 to-green-700" },
    { name: "MySQL", category: "database", level: "Intermediate", percentage: 75, icon: "Table", color: "from-sky-500 to-blue-600" },

    // 5. Tools & Technologies
    { name: "Git & GitHub", category: "tools", level: "Advanced", percentage: 88, icon: "GitBranch", color: "from-orange-500 to-red-500" },
    { name: "VS Code", category: "tools", level: "Advanced", percentage: 95, icon: "Code", color: "from-blue-500 to-sky-400" },
    { name: "Postman", category: "tools", level: "Proficient", percentage: 84, icon: "Send", color: "from-orange-400 to-amber-600" },
    { name: "Vite", category: "tools", level: "Proficient", percentage: 88, icon: "Zap", color: "from-purple-400 to-pink-500" },

    // 6. Soft Skills
    { name: "Problem Solving & Logic", category: "soft", level: "Advanced", percentage: 92, icon: "Lightbulb", color: "from-yellow-400 to-amber-500" },
    { name: "Team Collaboration", category: "soft", level: "Advanced", percentage: 90, icon: "Users", color: "from-blue-400 to-indigo-500" },
    { name: "Communication & Adaptability", category: "soft", level: "Advanced", percentage: 88, icon: "MessageSquare", color: "from-purple-400 to-pink-500" },
  ],

  // -----------------------------------------------------------------------
  // 6. PROJECTS SHOWCASE
  // -----------------------------------------------------------------------
  projectCategories: [
    { id: "all", name: "All Projects" },
    { id: "fullstack", name: "Full Stack" },
    { id: "frontend", name: "Frontend / UI" },
    { id: "tool", name: "Tools & Utilities" },
    { id: "academic", name: "Academic / AI" },
  ],

  projects: [
    {
      id: "study-sync",
      title: "StudySync - Collaborative Student Study Hub",
      category: "fullstack",
      featured: true,
      tagline: "Real-time collaborative study rooms, flashcard creator, and pomodoro timer for students.",
      description: "A comprehensive web platform enabling students to form virtual study rooms, share interactive flashcard decks with spaced repetition, and coordinate group study sessions in real-time.",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
      images: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
      githubUrl: "https://github.com/dileepsaidasari1985-debug/Personal_Portfolio_Website",
      liveUrl: "https://studysync-demo.vercel.app",
      challenge: "Handling concurrent real-time state synchronization when multiple students edit shared study notes and flashcard sessions simultaneously without race conditions.",
      solution: "Implemented WebSocket rooms via Socket.io with operational transformation logic on the Node.js server, accompanied by client-side optimistic UI updates for zero perceptual latency.",
      keyFeatures: [
        "Real-time synchronized group Pomodoro focus timers",
        "Interactive flashcard generator with SM-2 spaced repetition algorithm",
        "Live group chat and collaborative markdown note editor",
        "JWT-based authentication with role-based room permissions"
      ],
      role: "Lead Full-Stack Developer",
      duration: "3 months"
    },
    {
      id: "dev-trackr",
      title: "DevTrackr - Developer Habit & Bug Tracker",
      category: "frontend",
      featured: true,
      tagline: "Minimalist, keyboard-first issue tracker and GitHub activity visualizer for junior devs.",
      description: "A sleek dashboard application designed to help developers track their daily coding streaks, log bugs with reproducible code snippets, and monitor GitHub activity graphs with insightful analytics.",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
      ],
      technologies: ["React 18", "TypeScript", "Tailwind CSS", "Chart.js", "GitHub REST API"],
      githubUrl: "https://github.com/dileepsaidasari1985-debug/Personal_Portfolio_Website",
      liveUrl: "https://devtrackr-app.netlify.app",
      challenge: "Providing rich offline capability and instant keyboard navigation while managing GitHub API rate limits for non-authenticated visitors.",
      solution: "Designed a client-side IndexedDB caching layer with TTL, an in-memory command palette (Cmd+K) navigation, and fallback mock datasets to preserve full functionality.",
      keyFeatures: [
        "Cmd/Ctrl + K command palette for rapid task creation and search",
        "GitHub contribution graph integration with custom heatmaps",
        "Bug logging with syntax-highlighted code blocks",
        "Dark and high-contrast accessibility modes"
      ],
      role: "Solo Frontend Engineer",
      duration: "6 weeks"
    },
    {
      id: "campus-cater",
      title: "CampusEats - University Dining & Food Pre-Order",
      category: "fullstack",
      featured: true,
      tagline: "Mobile-responsive web app to order meals from university dining halls and reduce lines.",
      description: "A full-featured student ordering portal built to streamline rush-hour dining at campus food courts. Features live menu tracking, dietary filter tags (vegan, gluten-free, halal), and order status notifications.",
      thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
      images: [
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000"
      ],
      technologies: ["React", "Express.js", "PostgreSQL", "Prisma ORM", "Tailwind CSS"],
      githubUrl: "https://github.com/dileepsaidasari1985-debug/Personal_Portfolio_Website",
      liveUrl: "https://campuseats-preview.vercel.app",
      challenge: "Handling complex menu customization (allergens, add-ons) and ensuring inventory updates accurately during high peak hours.",
      solution: "Architected a PostgreSQL schema with Prisma ORM utilizing database transactions to prevent overselling of limited daily menu items.",
      keyFeatures: [
        "Live interactive dining court inventory and waiting estimates",
        "Nutritional breakdowns and smart allergy alert filters",
        "Progressive Web App (PWA) installable on mobile phones"
      ],
      role: "Full-Stack Project Lead",
      duration: "2 months"
    },
    {
      id: "algo-lens",
      title: "AlgoLens - Interactive Sorting & Graph Visualizer",
      category: "tool",
      featured: false,
      tagline: "Educational visualizer for Computer Science students learning algorithms and time complexities.",
      description: "An educational sandbox where students can step through sorting algorithms (QuickSort, MergeSort, HeapSort) and graph traversals with visual animations and variable speed controls.",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      images: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000"
      ],
      technologies: ["JavaScript (ES6)", "HTML5 Canvas", "Tailwind CSS"],
      githubUrl: "https://github.com/dileepsaidasari1985-debug/Personal_Portfolio_Website",
      liveUrl: "https://algolens.surge.sh",
      challenge: "Animating complex recursion without blocking the browser UI thread.",
      solution: "Decoupled animation generator functions using asynchronous Promises and async/await sleep steps, allowing users to pause, step backward, or accelerate playback smoothly.",
      keyFeatures: [
        "Visual step-by-step sorting for 7 classic algorithms",
        "Interactive grid maze generator with Dijkstra pathfinding",
        "Comparative side-by-side execution mode showing Big-O performance"
      ],
      role: "Creator & Lead Developer",
      duration: "4 weeks"
    }
  ],

  // -----------------------------------------------------------------------
  // 7. ACHIEVEMENTS & AWARDS
  // -----------------------------------------------------------------------
  achievements: [
    {
      id: "hack-2025",
      title: "1st Place Winner - College Annual Hackathon",
      category: "Hackathon",
      organization: "Computer Science Student Society",
      date: "October 2025",
      description: "Led a 4-person team to build an energy-optimized student campus navigation tool. Competed against 35+ teams and won Best Technical Implementation.",
      badge: "🏆 1st Place",
      icon: "Trophy",
      proofUrl: "#"
    },
    {
      id: "academic-excellence",
      title: "Academic Merit Award & Dean's Honor Recognition",
      category: "Academic",
      organization: "Department of Computer Science & Engineering",
      date: "2024 - 2025",
      description: "Awarded academic merit recognition for top semester performance across core computer engineering disciplines.",
      badge: "⭐ Academic Honor",
      icon: "Award",
      proofUrl: "#"
    },
    {
      id: "open-source-guild",
      title: "Active Contributor - Student Open Source Guild",
      category: "Recognition",
      organization: "B-Tech Coding Community",
      date: "March 2025",
      description: "Recognized for contributing to student web applications, authoring pull requests, and mentoring first-year peers in web development fundamentals.",
      badge: "🚀 Contributor",
      icon: "GitPullRequest",
      proofUrl: "#"
    }
  ],

  // -----------------------------------------------------------------------
  // 8. EDUCATION SECTION
  // -----------------------------------------------------------------------
  education: [
    {
      id: "btech-undergrad",
      institution: "B-Tech Institute of Technology",
      degree: "Bachelor of Technology (B-Tech) in Computer Science & Engineering",
      department: "Department of Computer Science & Engineering",
      duration: "2023 - 2027",
      location: "India",
      gpa: "First Class with Distinction",
      status: "In Progress",
      keyAccomplishments: [
        "Consistent academic excellence in core computing courses",
        "Active member of Technical Coding Clubs and Web Development Societies",
        "Key Coursework: Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, Object-Oriented Software Design"
      ]
    },
    {
      id: "intermediate",
      institution: "Junior College of Science & Mathematics",
      degree: "Higher Secondary (MPC - Maths, Physics, Chemistry)",
      department: "Science Stream",
      duration: "2021 - 2023",
      location: "India",
      gpa: "First Class with Distinction (90%+)",
      status: "Completed",
      keyAccomplishments: [
        "Top percentile in Mathematics and Science subjects",
        "Active participant in regional Science Fairs and mathematics Olympiads"
      ]
    }
  ],

  // -----------------------------------------------------------------------
  // 9. CERTIFICATIONS SECTION
  // -----------------------------------------------------------------------
  certifications: [
    {
      id: "meta-frontend",
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta (Coursera)",
      issueDate: "2025",
      credentialId: "META-FED-9834710",
      credentialUrl: "https://coursera.org",
      skillsCovered: ["React", "JavaScript (ES6+)", "HTML5/CSS3", "Version Control", "UI/UX Principles"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
      badgeColor: "from-blue-600 to-cyan-500"
    },
    {
      id: "fcc-responsive",
      title: "Responsive Web Design Certification",
      issuer: "freeCodeCamp",
      issueDate: "2024",
      credentialId: "FCC-RWD-349811",
      credentialUrl: "https://freecodecamp.org",
      skillsCovered: ["Modern CSS", "Flexbox & CSS Grid", "Media Queries", "Accessibility", "Semantic HTML"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600",
      badgeColor: "from-emerald-500 to-teal-600"
    },
    {
      id: "python-cert",
      title: "Programming for Everybody (Python)",
      issuer: "University of Michigan (Coursera)",
      issueDate: "2024",
      credentialId: "UMICH-PY-482910",
      credentialUrl: "https://coursera.org",
      skillsCovered: ["Python Data Structures", "Algorithms", "File Processing", "Object-Oriented Design"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600",
      badgeColor: "from-amber-500 to-orange-600"
    }
  ],

  // -----------------------------------------------------------------------
  // 10. PERSONAL BLOG & LEARNING JOURNAL
  // -----------------------------------------------------------------------
  blogPosts: [
    {
      id: "btech-web-dev",
      title: "Building Real-World Full Stack Web Projects in B-Tech",
      category: "Engineering",
      date: "Nov 2025",
      readTime: "4 min read",
      summary: "How building practical React and full-stack projects bridges theoretical engineering coursework with industry requirements.",
      content: `### The B-Tech Journey
During engineering studies, textbooks teach theoretical foundations, but building real web apps transforms theoretical knowledge into genuine problem-solving ability.

### Key Insights
1. **From Syntax to Solutions:** Learning language syntax is only step one; composing APIs and state stores is where true learning happens.
2. **Version Control Discipline:** Git is the fundamental lifeline for every engineering student.
3. **UI Polish Matters:** Building clean, responsive UIs shows care and attention to detail that recruiters recognize immediately.`,
      tags: ["B-Tech", "React", "Web Dev", "Engineering"]
    },
    {
      id: "tailwind-workflow",
      title: "Why Modern Utility-First CSS Changed My Web Workflow",
      category: "Frontend",
      date: "Oct 2025",
      readTime: "3 min read",
      summary: "My transition from writing hundreds of lines of custom CSS to a structured, maintainable design system with Tailwind CSS.",
      content: `### Accelerating Development
With utility-first CSS, responsive breakpoints, dark/light modes, and consistent spacing happen directly inside components without context-switching.`,
      tags: ["Tailwind", "CSS", "UI/UX"]
    }
  ],

  // -----------------------------------------------------------------------
  // 11. TESTIMONIALS & MENTORSHIP ENDORSEMENTS
  // -----------------------------------------------------------------------
  testimonials: [
    {
      id: "prof-mentor",
      quote: "Dileep is a proactive B-Tech student who goes above and beyond standard classroom assignments to build practical, well-engineered web applications.",
      name: "Dr. K. Srinivas",
      role: "Professor of Computer Science & Engineering",
      affiliation: "B-Tech College of Engineering",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: "peer-lead",
      quote: "Collaborating with Dileep on hackathons and group projects has always been great. He is focused, solves bugs quickly, and writes clean code.",
      name: "Rohan Verma",
      role: "Hackathon Teammate & Fellow B-Tech Student",
      affiliation: "Computer Science Class of 2027",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    }
  ],

  // -----------------------------------------------------------------------
  // 12. FREQUENTLY ASKED QUESTIONS (FAQ)
  // -----------------------------------------------------------------------
  faqs: [
    {
      question: "Who am I and what is my academic background?",
      answer: "I am Dileep Sai Dasari, a passionate B-Tech Computer Science student specializing in modern full-stack web engineering with React, Node.js, and cloud platforms."
    },
    {
      question: "What technologies and frameworks do I work with?",
      answer: "My core frontend stack is React.js, TypeScript, and Tailwind CSS. For backend, I develop with Node.js, Express, and REST APIs, paired with PostgreSQL and MongoDB."
    },
    {
      question: "What opportunities am I currently open to?",
      answer: "I am actively looking for Software Engineering and Frontend Developer Internships (remote or onsite), as well as open-source student collaborations."
    },
    {
      question: "How can someone contact me directly?",
      answer: "You can reach me via the Contact Form on this website, email me directly at dileepsaidasari1985@gmail.com, or schedule a quick chat using the Schedule a Chat button!"
    }
  ],

  // -----------------------------------------------------------------------
  // 13. RESUME DATA
  // -----------------------------------------------------------------------
  resume: {
    summary: "Dedicated B-Tech Computer Science student with strong technical foundations in full-stack web development, modern React, and algorithmic problem solving. Passionate about building responsive, accessible, and user-centric web applications.",
    experiences: [
      {
        role: "Student Web Developer & Tech Club Lead",
        company: "B-Tech Coding Society",
        period: "2024 - Present",
        location: "Campus",
        bullets: [
          "Developed responsive web components for community projects and departmental portals.",
          "Conducted peer workshops on Git version control and modern React development for junior engineering students.",
          "Collaborated in college hackathons to architect functional web prototypes within 36-hour sprint windows."
        ]
      }
    ],
    skillsSummary: {
      languages: "JavaScript (ES6+), TypeScript, Python, C++, Java, HTML5, CSS3, SQL",
      frameworks: "React.js, Node.js, Express.js, Tailwind CSS, Vite",
      tools: "Git, GitHub, VS Code, Postman, Linux CLI",
      databases: "PostgreSQL, MongoDB, MySQL"
    }
  }
};
