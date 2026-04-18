export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
];

export const HERO_CONTENT = {
  badge: "Available for new opportunities",
  title: "Kasidech Chumthong",
  role: "QA Engineer & Developer",
  description: "A software engineering student passionate about software testing, quality assurance, and building reliable applications. Currently interning at Ascend Commerce.",
  stats: [
    { label: "Experience", value: "Internship" },
    { label: "Status", value: "Available" },
    { label: "Location", value: "TH" }
  ],
  actions: [
    { label: "View CV", type: "preview", primary: true },
    { label: "Download", href: "/resume.pdf", download: "CV_Kasidech_Chumthong.pdf", type: "download" }
  ],
  floatingUI: [
    { label: "Test Passed", type: "success" },
    { label: "Issue Filed", type: "warning" },
    { label: "Merged PR", type: "info" }
  ]
};

export const ABOUT_CONTENT = {
  tag: "Who I Am",
  title: "About Me",
  cards: [
    {
      id: "education",
      type: "main",
      icon: "🎓",
      title: "Education & Foundation",
      subtitle: "B.Eng. Software Engineering",
      meta: "Mae Fah Luang University · GPAX 3.33",
      description: "Studying software quality assurance and practical full-stack development."
    },
    {
      id: "current",
      type: "side",
      icon: "💼",
      title: "Current Impact",
      subtitle: "Intern @ Ascend Commerce",
      meta: "Amaze Super App · 2026",
      delay: "0.1s"
    },
    {
      id: "mission",
      type: "side",
      icon: "🎯",
      title: "The Mission",
      subtitle: "Software Quality",
      description: "Learning to build reliable software with a focus on quality and automated testing.",
      delay: "0.2s"
    }
  ]
};

export const SKILLS_CONTENT = {
  tag: "What I Know",
  title: "Skills & Technologies",
  categories: [
    {
      icon: '💻',
      title: 'Programming Languages',
      tags: [
        { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
        { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
        { name: 'SQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
        { name: 'Java', icon: 'https://cdn.simpleicons.org/openjdk/ED8B00' },
        { name: 'C#', icon: 'https://cdn.simpleicons.org/csharp/239120' },
        { name: 'Dart', icon: 'https://cdn.simpleicons.org/dart/0175C2' }
      ],
      delay: '0s'
    },
    {
      icon: '🚀',
      title: 'Frameworks / Libraries',
      tags: [
        { name: 'Playwright', icon: 'https://cdn.simpleicons.org/playwright/2EAD33' },
        { name: 'Robot Framework', icon: 'https://cdn.simpleicons.org/robotframework/000000' },
        { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter/02569B' },
        { name: 'PyTorch', icon: 'https://cdn.simpleicons.org/pytorch/EE4C2C' },
        { name: 'Spring Boot', icon: 'https://cdn.simpleicons.org/springboot/6DB33F' }
      ],
      delay: '0.1s'
    },
    {
      icon: '🗄️',
      title: 'Databases',
      tags: [
        { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
        { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
        { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' }
      ],
      delay: '0.2s'
    },
    {
      icon: '🛠️',
      title: 'Tools & Platforms',
      tags: [
        { name: 'JIRA', icon: 'https://cdn.simpleicons.org/jira/0052CC' },
        { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
        { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/EEEEEE' },
        { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' }
      ],
      delay: '0.3s'
    },
    {
      icon: '🧠',
      title: 'Soft Skills',
      tags: [
        { name: 'QA Strategy', icon: '🎯' },
        { name: 'Agile', icon: '🔄' },
        { name: 'Problem Solving', icon: '🧩' },
        { name: 'Collaboration', icon: '🤝' }
      ],
      delay: '0.4s'
    }
  ]
};

export const PROJECTS_CONTENT = {
  tag: "My Work",
  title: "Featured Projects",
  projects: [
    {
      id: 1,
      title: "Kin Rai Dee MFU",
      category: "Full Stack",
      icon: "🍜",
      description: "A restaurant review and ranking web application for university students.",
      longDescription: "Kin Rai Dee MFU is a web application designed to help students discover, review, and rank local restaurants around the Mae Fah Luang University campus. Developed using Spring Boot and MySQL, it features a simple interface for browsing and submitting reviews to build a community-driven dining guide.",
      tech: ["Spring Boot", "MySQL"],
      link: "https://github.com/Kasidech-Chumthong/Online-Food-Delivery-Group-27",
      delay: "0s"
    },
    {
      id: 2,
      title: "PaKurng",
      category: "Mobile Dev",
      icon: "📿",
      description: "Flutter-based application for specialized Buddhist practitioner tools.",
      longDescription: "PaKurng is a Flutter-based mobile application designed to provide specialized tools for Buddhist practitioners. The project utilizes Firebase for backend services and focuses on delivering a user-friendly interface to aid in daily spiritual practice.",
      tech: ["Flutter", "Firebase"],
      link: "https://github.com/Kasidech-Chumthong/PaKurng",
      delay: "0.1s"
    },
    {
      id: 3,
      title: "MFU-LCMP Mapping",
      category: "Research & AI",
      icon: "🛰️",
      description: "Deep learning research on land cover mapping. Focused on semantic segmentation using EfficientNet for green environment detection.",
      longDescription: "An academic research project focused on utilizing deep learning for land cover classification in Chiang Rai Province. Using Python, PyTorch, and the EfficientNet architecture, the model performs semantic segmentation on high-resolution satellite imagery from Hugging Face and Google Earth Pro to detect and calculate the area of green spaces.",
      tech: ["Python", "PyTorch", "Computer Vision"],
      link: "/Land_Cover_Mapping.pdf",
      linkText: "View Research",
      delay: "0.2s"
    },
    {
      id: 4,
      title: "Reservation System",
      category: "Low-Code",
      icon: "🍽️",
      description: "Automated restaurant reservation workflows using Microsoft Power Platform.",
      longDescription: "A low-code solution built with Microsoft Power Apps and Dataverse to streamline restaurant reservation workflows. It aims to automate the booking process and manage table availability, demonstrating the capability to rapidly develop internal business tools using the Microsoft Power Platform.",
      tech: ["Power Apps", "Dataverse"],
      link: "https://apps.powerapps.com/play/e/9e995021-e39e-e85d-a64a-4630b9e04290/a/9f631f7f-6c15-4560-9437-442d31d637c0?tenantId=e94d57ad-a0b7-44cf-883f-d7987a0bd244&hint=34bf8f37-d504-4b7d-84a2-ed92f5c6fd3d&sourcetime=1758779457450",
      linkText: "View App",
      secondaryLink: "https://www.canva.com/design/DAGztoR_95U/bI4nUWi8AtNMiokBl6JEsg/edit?utm_content=DAGztoR_95U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      secondaryLinkText: "View Slides",
      delay: "0.3s"
    },
    {
      id: 5,
      title: "Sentinel AI",
      category: "AI Bot",
      icon: "🤖",
      description: "Machine learning bot project for intelligent automation and data analysis.",
      longDescription: "Sentinel AI is an automated trading bot ecosystem integrating technical analysis, news sentiment, and Machine Learning (Random Forest). Patterned to continuously learn and optimize hyperparameters, the bot monitors crypto and stock markets. It features a web dashboard for real-time monitoring, paper trading simulation for backtesting, and Telegram alerts.",
      tech: ["Python", "AI / ML"],
      link: "https://github.com/Mafuyu129/Sentinel-AI-Bot",
      linkText: "GitHub",
      delay: "0.4s"
    }
  ]
};

export const EXPERIENCE_CONTENT = {
  tag: "My Journey",
  title: "Experience",
  experiences: [
    {
      role: "QA Engineer (Intern)",
      company: "Ascend Commerce",
      icon: "🏢",
      period: "Jan 2026 — Apr 2026",
      details: [
        "Executed end-to-end functional testing for Livestreaming platforms to ensure seamless UI and real-time user experience.",
        "Managed defect lifecycle using JIRA, documenting and reporting bugs while collaborating with developers for resolution.",
        "Performed data validation using SQL (MySQL) to verify consistency between backend and frontend systems.",
        "Conducted API testing with Postman to validate technical specifications and ensure stable system integration.",
        "Developed automated test scripts using Playwright and JavaScript to improve regression coverage and testing efficiency."
      ],
      badge: "Internship",
      type: "internship"
    },
    {
      role: "Software Engineering Student",
      company: "Mae Fah Luang University",
      icon: "🎓",
      period: "2022 — 2026",
      desc: "Studying software architecture, web development, and software testing methodologies.",
      badge: "Academy",
      type: "education"
    }
  ]
};

export const CONTACT_CONTENT = {
  tag: "Let's Connect",
  title: "Contact",
  info: [
    {
      label: "Email",
      value: "gotelove555@gmail.com",
      href: "mailto:gotelove555@gmail.com",
      icon: "📧"
    },
    {
      label: "Phone",
      value: "0880645556",
      href: "tel:0880645556",
      icon: "📱"
    },
    {
      label: "Location",
      value: "Bangkok, Thailand",
      icon: "📍"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/kasidech-chumthong",
      href: "https://linkedin.com/in/kasidech-chumthong",
      icon: "🔗"
    },
    {
      label: "GitHub (Main)",
      value: "github.com/Kasidech-Chumthong",
      href: "https://github.com/Kasidech-Chumthong",
      icon: "🐙"
    },
    {
      label: "GitHub (Personal)",
      value: "github.com/Mafuyu129",
      href: "https://github.com/Mafuyu129",
      icon: "🤖"
    }
  ]
};

export const CERTIFICATIONS_CONTENT = {
  tag: "Certifications",
  title: "Verified Badges",
  certifications: [
    {
      id: "gcp-bigdata",
      title: "Google Cloud Fundamentals: Big Data and Machine Learning",
      issuer: "Google Cloud",
      date: "2025",
      icon: "☁️",
      link: "https://www.credly.com/users/kasidech-chumthong",
      featured: true
    },
    {
      id: "gcp-gemini",
      title: "Build Real World AI Applications with Gemini and Imagen",
      issuer: "Google Cloud",
      date: "2025",
      icon: "♊",
      link: "https://www.credly.com/users/kasidech-chumthong",
      featured: true
    },
    {
      id: "gcp-secure-delivery",
      title: "Secure Software Delivery",
      issuer: "Google Cloud",
      date: "2025",
      icon: "🛡️",
      link: "https://www.credly.com/users/kasidech-chumthong",
      featured: true
    },
    {
      id: "gcp-k8s",
      title: "Manage Kubernetes in Google Cloud",
      issuer: "Google Cloud",
      date: "2025",
      icon: "☸️",
      link: "https://www.credly.com/users/kasidech-chumthong",
      featured: true
    },
    {
      id: "google-ai-essentials",
      title: "Google AI Essentials",
      issuer: "Google",
      date: "2025",
      icon: "✨",
      link: "https://www.credly.com/users/kasidech-chumthong",
      featured: true
    },
    {
      id: "gcp-vertex-prompt",
      title: "Prompt Design in Vertex AI",
      issuer: "Google Cloud",
      date: "2025",
      icon: "✍️",
      link: "https://www.credly.com/users/kasidech-chumthong",
      featured: true
    },
    {
      id: "gcp-core-infra",
      title: "Google Cloud Fundamentals: Core Infrastructure",
      issuer: "Google Cloud",
      date: "2025",
      icon: "🏛️",
      link: "https://www.credly.com/users/kasidech-chumthong"
    },
    {
      id: "google-marketing",
      title: "Foundations of Digital Marketing and E-commerce",
      issuer: "Google",
      date: "2025",
      icon: "📈",
      link: "https://www.credly.com/users/kasidech-chumthong"
    },
    {
      id: "gcp-ml-data",
      title: "Prepare Data for ML APIs on Google Cloud",
      issuer: "Google Cloud",
      date: "2025",
      icon: "📊"
    },
    {
      id: "gcp-biglake",
      title: "Secure BigLake Data",
      issuer: "Google Cloud",
      date: "2025",
      icon: "🔒"
    },
    {
      id: "gcp-dlp",
      title: "Protect Sensitive Data with Data Loss Prevention",
      issuer: "Google Cloud",
      date: "2025",
      icon: "🕵️"
    },
    {
      id: "gcp-compute-basics",
      title: "The Basics of Google Cloud Compute",
      issuer: "Google Cloud",
      date: "2025",
      icon: "⚙️"
    },
    {
      id: "gcp-speech-api",
      title: "Cloud Speech API: 3 Ways",
      issuer: "Google Cloud",
      date: "2025",
      icon: "🗣️"
    },
    {
      id: "gcp-data-cloud",
      title: "Share Data Using Google Data Cloud",
      issuer: "Google Cloud",
      date: "2025",
      icon: "🤝"
    }
  ]
};
