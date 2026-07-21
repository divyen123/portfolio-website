import profileImage from '../assets/profile.png';
import foodieGoOnboarding from '../assets/projects/foodiego/onboarding.webp';
import foodieGoHome from '../assets/projects/foodiego/home.webp';
import foodieGoRestaurant from '../assets/projects/foodiego/restaurant-details.webp';
import foodieGoFood from '../assets/projects/foodiego/food-details.webp';
import foodieGoCart from '../assets/projects/foodiego/cart-checkout.webp';
import foodieGoTracking from '../assets/projects/foodiego/live-order-tracking.webp';
import medAiLogin from '../assets/projects/medai-health-assistant/login.webp';
import medAiDashboard from '../assets/projects/medai-health-assistant/dashboard.webp';
import medAiAnalysis from '../assets/projects/medai-health-assistant/analysis.webp';
import medAiDoctorAi from '../assets/projects/medai-health-assistant/doctor-ai.webp';
import medAiSettings from '../assets/projects/medai-health-assistant/settings.webp';
import medAiEmergencyHub from '../assets/projects/medai-health-assistant/emergency-hub.webp';
import memoryLogin from '../assets/projects/memory-timeline/login.webp';
import memoryHome from '../assets/projects/memory-timeline/home.webp';
import memorySettings from '../assets/projects/memory-timeline/settings.webp';
import memoryAbout from '../assets/projects/memory-timeline/about.webp';
import memoryView from '../assets/projects/memory-timeline/memory-view.webp';
import memoryHiddenImages from '../assets/projects/memory-timeline/hidden-images.webp';
import prepMatrixLogin from '../assets/projects/prepmatrix-ai/login.webp';
import prepMatrixDashboard from '../assets/projects/prepmatrix-ai/dashboard.webp';
import prepMatrixAnalytics from '../assets/projects/prepmatrix-ai/analytics.webp';
import prepMatrixReport from '../assets/projects/prepmatrix-ai/report.webp';
import prepMatrixStudyAssistant from '../assets/projects/prepmatrix-ai/study-assistant.webp';
import prepMatrixSettings from '../assets/projects/prepmatrix-ai/settings.webp';
import ragasGroupsMain from '../assets/projects/ragasgroups/ragasgroups_main.png';
import ragasShippingLogo from '../assets/projects/ragasgroups/shipping_logo.webp';
import ragasAerospaceLogo from '../assets/projects/ragasgroups/aerospace_logo.webp';
import ragasRaicLogo from '../assets/projects/ragasgroups/raic_logo.webp';
import medAiLogo from '../assets/projects/medai-health-assistant/medai-logo.svg';
import memoryTimelineLogo from '../assets/projects/memory-timeline/memory-timeline-logo.svg';
import prepMatrixLogo from '../assets/projects/prepmatrix-ai/prepmatrix-logo.svg';

export const personalInfo = {
  name: 'R M Divyen',
  title: 'Aspiring Frontend Developer',
  professionalTitle: 'Frontend Developer, React Developer, and UI Designer',
  intro:
    'Aspiring Frontend Developer specializing in React.js and modern web technologies, passionate about creating responsive, user-friendly, and engaging web applications. Skilled in building interactive interfaces, optimizing performance, and delivering smooth digital experiences. Committed to continuous learning, problem-solving, and developing innovative solutions that improve user experience.',
  email: 'divyen624@gmail.com',
  github: 'https://github.com/divyen123',
  linkedin: 'https://www.linkedin.com/in/divyen-r-m-66b34934a',
  portfolio: '',
  resume: '/Resume.pdf',
  image: profileImage,
};

export const aboutMe = [
  'I am a passionate Software Developer, Frontend Developer, React Developer, and UI Designer who enjoys building modern, responsive, and user-friendly web applications. I love turning ideas into clean, functional, and visually appealing digital experiences while solving real-world problems through technology.',
  'I have strong programming knowledge in Python and Java, along with frontend expertise in HTML, CSS, JavaScript, and React.js. My focus is on writing clean, maintainable code and designing intuitive user interfaces that provide a seamless user experience.',
  'I hold a Master of Software Engineering (MSE) and have earned multiple Infosys Springboard certifications, continuously expanding my technical skills and staying updated with the latest technologies and design trends.',
];

export const education = [
  {
    institution: 'Maharishi Vidya Mandir',
    program: 'Senior Secondary School',
    period: '2010 - 2022',
    description: 'My academic journey began at Maharishi Vidya Mandir, where I completed my schooling from LKG to 10th under the CBSE curriculum.',
  },
  {
    institution: 'Kaligi Ranganathan Montford',
    program: 'Higher Secondary School',
    period: '2022 - 2024',
    description: 'I pursued my higher secondary education at Kaligi Ranganathan Montford, completing 11th and 12th under the State Board.',
  },
  {
    institution: 'Apollo Computer Centre',
    program: 'Master of Software Engineering',
    period: '6 months',
    description: 'To strengthen my technical foundation, I completed a 6 month Master of Software Engineering program at Apollo Computer Education Centre.',
  },
  {
    institution: 'R.M.K Engineering College',
    program: 'Information Technology',
    period: '2024 - 2028',
    description: 'Currently, I am pursuing my 3rd year in Information Technology at R.M.K Engineering College, with a strong focus on software development and web technologies.',
  },
];

export const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Java', 'JavaScript', 'C', 'C++'],
  },
  {
    category: 'Frontend',
    items: ['HTML5', 'CSS3', 'React.js', 'Responsive Web Design', 'Next.js', 'Angular (learning)'],
  },
  {
    category: 'UI/UX',
    items: ['Figma', 'Wireframing', 'Prototyping', 'UI/UX Design'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Google Colab'],
  },
  {
    category: 'Other Skills',
    items: ['MySQL', 'Problem solving', 'Clean code', 'Maintainable code'],
  },
];

export const projects = [
  {
    title: 'FoodieGo',
    subtitle: 'Mobile food delivery prototype',
    description:
      'FoodieGo is a mobile food delivery prototype that shows the complete ordering journey from onboarding to browsing food categories, restaurants, menus, checkout, order placement, and live delivery tracking.',
    highlights: [
      'Designed screens for onboarding, home, restaurant details, food details, cart, checkout, and live order tracking.',
      'Created a full mobile ordering flow with rider information and order status.',
    ],
    technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
    github: 'https://github.com/divyen123/FoodieGo_prototype',
    liveDemo: '',
    prototype: 'https://www.figma.com/proto/2U7F1TaUsGmUgaWC8oDDnu/FoodieGo-Prototype?node-id=1-2&t=jGci9ipeDj0fxpZF-1&starting-point-node-id=1%3A2&scaling=scale-down&content-scaling=fixed',
    images: [foodieGoOnboarding, foodieGoHome, foodieGoRestaurant, foodieGoFood, foodieGoCart, foodieGoTracking],
  },
  {
    title: 'MedAI Health Assistant',
    subtitle: 'AI-powered symptom analyzer and health companion',
    description:
      'Developed a full-stack AI health assistant web app with symptom analysis, vitals tracking, medication management, and an AI doctor chatbot.',
    highlights: [
      'Integrated Groq LLaMA 3.1 API for real-time symptom-to-condition prediction with severity levels, self-care tips, and emergency recommendations.',
      'Built JWT authentication, Supabase PostgreSQL storage, and localStorage fallback for offline functionality.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'Supabase', 'Groq API', 'LLaMA 3.1'],
    github: 'https://github.com/divyen123/symptom-app',
    liveDemo: 'https://symptom-app-medai.vercel.app',
    prototype: '',
    images: [
      medAiLogin,
      medAiDashboard,
      medAiAnalysis,
      medAiEmergencyHub,
      medAiDoctorAi,
      medAiSettings,
    ],
    detailedOverview: {
      logo: medAiLogo,
      executiveDescription: 'MedAI is an advanced, AI-powered health intelligence and self-care tracking platform. Designed to bridge the gap between patient symptoms and clinical clarity, it serves as a secure, local-first wellness dashboard. It empowers users to analyze symptoms using AI, monitor daily vitals, manage self-care reminders (with customizable alerts and postponement options), coordinate emergency contacts, and chat interactively with a virtual medical assistant.',
      technologyStack: {
        frontend: [
          'React 18 - Core framework for component-driven UI',
          'Vite - Bundler and optimized development server',
          'Vanilla CSS - Custom design token variables for light/dark themes',
          'Framer Motion - Premium transition and UI micro-animations',
          'Web Audio API - Synthesis of reminder alarm sounds',
          'Notification / Service Worker API - Background scheduling and alerts'
        ],
        backend: [
          'Node.js - Execution runtime environment',
          'Express.js - RESTful API controller layer',
          'JWT - Stateless session authorization token handling',
          'bcryptjs - 12-round password security hashing',
          'CORS middleware - Cross-origin resource sharing controls'
        ],
        database: [
          'Supabase (PostgreSQL) - Primary database hosting user accounts, reports, settings, and schedules',
          'Claude AI API - Generates diagnoses, clinical disclaimers, dietary remedies, and chat dialogues',
          'Hybrid Offline Replication - Dual storage sync merging local storage cache with cloud storage on login'
        ]
      },
      pagesAndComponents: [
        { title: 'Dashboard (Home)', description: 'Aggregated statistics (total symptoms logged, high severity alerts, pain averages), quick access search query check, emergency direct dial controls, and daily checklist tracker.' },
        { title: 'Symptom Analyzer', description: 'Detailed form logs evaluating severity, duration, and descriptions. Connects to the Claude AI API to return structured diagnostic alerts, recommended OTC medications, and direct pharmacy saving shortcuts.' },
        { title: 'Vitals Log', description: 'Logs and monitors crucial health markers (Blood Pressure, Heart Rate, Temperature, Blood Sugar, SpO2) using custom visual pain scale gauges.' },
        { title: 'Doctor AI Chat', description: 'Interactive virtual assistant supporting voice transcription commands and medical inquiry dialogue logging.' },
        { title: 'Emergency Services & Hospital Locator', description: 'Speed-dial buttons, red flags warning list, nearby emergency care facility geolocation mappings, and emergency contact list manager.' },
        { title: 'Wellness Page (Fever Guide)', description: 'Features custom guides for temperature ranges with responsive stacked urgency level indicators, recommended diets, and wellness guides.' },
        { title: 'Reminders Manager & Postpone UI', description: 'Allows users to configure reminders with sound playback, click editing inline (repeat rules, custom dates), and select smart postponement intervals (5h, 12h, custom units).' },
        { title: 'Settings Panel', description: 'Appearance configuration (glassmorphism layouts, navbar positioning, font choices), profile details, account deletions, and password modifications with active validation.' }
      ]
    }
  },
  {
    title: 'Memory Timeline',
    subtitle: 'MERN stack memory management application',
    description:
      'Developed a full-stack memory timeline web application to store, organize, and manage personal memories with images, dates, categories, favorites, reminders, trash recovery, and hidden image protection.',
    highlights: [
      'Implemented secure authentication, private user-based memory access, encrypted Cloudinary image storage, PIN-protected hidden images, and permanent deletion with Cloudinary cleanup.',
      'Designed responsive timeline, calendar, and tile views with customizable themes, search, filters, exports, and user preference-based default views.',
    ],
    technologies: ['MERN Stack', 'Cloudinary', 'JWT', 'AES Encryption'],
    github: 'https://github.com/divyen123/memory_timeline',
    liveDemo: 'https://memory-timeline-eight.vercel.app',
    prototype: '',
    images: [
      memoryLogin,
      memoryHome,
      memorySettings,
      memoryAbout,
      memoryView,
      memoryHiddenImages,
    ],
    detailedOverview: {
      logo: memoryTimelineLogo,
      executiveDescription: 'Memory Timeline is a full-stack personal archive for preserving, organizing, and revisiting image-based memories in a private visual workspace. Users can create rich multi-image entries with dates, categories, descriptions, favorites, and reminders; explore them in timeline, calendar, or compact tile layouts; search, sort, filter, share individual memories, and export image collections. The application also provides a PIN-gated Hidden Images interface, 30-day trash recovery, profile and account controls, responsive layouts, and extensive per-device appearance, sound, and interaction settings.',
      technologyStack: {
        frontend: [
          'React 19 - Component-driven interface and stateful user workflows',
          'Vite 7 - Fast development server and optimized production bundling',
          'React Router 7 - Protected routes, public share links, and navigation',
          'Framer Motion 12 - Page transitions, onboarding, and shared-layout motion',
          'Axios - API client with credentials, CSRF support, and session refresh',
          'JSZip - Image collection packaging for browser downloads',
          'Remotion and Web APIs - Animated intro, Web Audio, Canvas, and local preferences'
        ],
        backend: [
          'Node.js and Express 5 - REST API, middleware, and application runtime',
          'Mongoose 9 - MongoDB schemas, indexes, queries, and lifecycle state',
          'JWT and cookie sessions - Rotating access and refresh authentication',
          'bcryptjs - Password hashing and sensitive-action confirmation',
          'Multer and Sharp - Validated uploads, WebP normalization, and thumbnails',
          'Helmet, CORS, rate limit - Browser policy and request protection',
          'sanitize-html and Nodemailer - Safe rich text and optional email delivery'
        ],
        database: [
          'MongoDB Atlas - Stores users, memories, sessions, settings profiles, reminders, and share links',
          'Cloudinary - Authenticated production media storage with AES-256-GCM encryption enabled by default',
          'Web Push and VAPID - Per-device opt-in delivery through provider endpoints and a browser service worker',
          'Vercel and Render - Frontend and API deployment with an API health check and environment-based configuration'
        ]
      },
      pagesAndComponents: [
        { title: 'Accounts & Guided Onboarding', description: 'Registration, sign-in, session restore, password recovery and change, profile setup, and a six-step guided tour introduce the main workflows.' },
        { title: 'Create & Edit Memories', description: 'Add a title, rich-text story, memory date, optional reminder, category, and up to 10 JPG, PNG, or WebP images of up to 8 MB each.' },
        { title: 'Optimized Image Pipeline', description: 'The browser and API create WebP full-view images and lightweight thumbnails; edits can retain, add, or remove individual images.' },
        { title: 'Timeline Home', description: 'Browse chronological cards with lazy paging, automatic loading, and timeline virtualization for larger desktop and mobile collections.' },
        { title: 'Calendar & Compact Tile Views', description: 'Switch to month-grouped calendar cards or a dense gallery, and save the preferred default view independently for each device profile.' },
        { title: 'Search, Sort, Filter & Favorites', description: 'Search titles, stories, and categories; sort newest or oldest; filter by category or favorites; and star important memories.' },
        { title: 'Rich Preview, Carousel & Zoom', description: 'Open animated previews with multi-image navigation, swipe gestures, full-screen viewing, zoom and pan, image details, and direct actions.' },
        { title: 'Reminders', description: 'Set special dates, choose the lead window, review upcoming items, play a selected sound, dismiss for today, snooze until tomorrow, enable push notifications.' },
        { title: 'Private Sharing & Public View', description: 'Create a time-limited public link for one memory, share through the device or clipboard, and present the owner, date, category, story, and images to recipients.' },
        { title: 'Image Export & Personal Backups', description: 'Export images from all memories, selected visible memories, or category/date/favorite filters; one image downloads directly and multiple images become a ZIP.' },
        { title: 'Hidden Images', description: 'Move items out of the main timeline into a dedicated interface protected by a four-digit UI PIN, then preview, unhide, or permanently delete them.' },
        { title: 'Trash & Recovery', description: 'Deleted memories remain recoverable for 30 days. Restore one or many items, permanently remove selected items, empty the bin, or allow automatic expiry.' },
        { title: 'Profile, Insights & Account Controls', description: 'Manage name, age, email, and photo; view totals and a category chart; change password; clear memories to Trash; revoke sessions; or delete the account.' },
        { title: 'Personalization, Backup & Accessibility', description: 'Separate desktop/mobile profiles cover themes, animated backgrounds, cards, controls, glass effects, fonts, hover, sounds, reminders, reduced motion, and JSON settings backup/restore.' }
      ],
      securityAndArchitecture: [
        { title: 'Identity & Sessions', description: 'Strong password policy, bcryptjs hashing, rotating sessions, session revocation, and attempt controls.' },
        { title: 'Request & API Protection', description: 'CSRF and origin checks, CORS allowlist, Helmet policies, ownership checks, and sanitized content.' },
        { title: 'Media & Data Lifecycle', description: 'Strict upload validation, normalized derivatives, protected delivery, encrypted cloud media, Hidden Images PIN, and expiring data paths.' }
      ]
    }
  },
  {
    title: 'PrepMatrix AI',
    subtitle: 'AI-powered study planner',
    description:
      'Built an intelligent study planner that auto-generates personalized timetables, tracks chapter-wise progress, and adapts learning strategies using AI-driven smart suggestions and voice assistance.',
    highlights: [
      'Added an AI chatbot, quiz engine, resource hub, detailed analytics with PDF export, gamified progress tracking, streaks, rewards, and a focus timer.',
      'Designed a premium glassmorphic UI with dark/light themes, custom accent palettes, and responsive layouts.',
    ],
    technologies: ['React.js', 'Express.js', 'MongoDB', 'Groq AI', 'Llama', 'Vite'],
    github: 'https://github.com/divyen123/PrepMatrix_AI',
    liveDemo: 'https://prep-matrix-ai.vercel.app',
    prototype: '',
    images: [
      prepMatrixLogin,
      prepMatrixDashboard,
      prepMatrixAnalytics,
      prepMatrixReport,
      prepMatrixStudyAssistant,
      prepMatrixSettings,
    ],
    detailedOverview: {
      logo: prepMatrixLogo,
      executiveDescription: 'PrepMatrix AI is an AI-powered study planning, practice, and progress intelligence workspace for students across school, college, and specialized academic tracks. It combines each learner\'s academic profile, subjects, chapter load, difficulty, exam date, and daily completion data to generate an adaptive study path, reveal weak areas, and measure exam readiness. Within one authenticated workspace, learners can manage goals and reminders, capture notes, discover syllabus-aware materials, generate topic quizzes, take secure exams, export reports and question papers, and ask a planner-aware study companion questions through text, voice, image, or PDF inputs.',
      technologyStack: {
        frontend: [
          'React 19 - Component-driven SPA with lazy routes',
          'Vite 8 - Fast development and optimized builds',
          'React Router 7 - Protected study and settings routes',
          'Recharts - Progress, workload, readiness, and trend charts',
          'Lucide + CSS3 - Responsive icons, themes, glass cards, and motion',
          'Three.js / R3F - Interactive animated study visuals'
        ],
        backend: [
          'Node.js + Express 5 - REST APIs, SPA delivery, validation, and orchestration',
          'MongoDB driver - Indexed user, plan, note, quiz, and exam data',
          'PBKDF2 + sessions - Salted hashes, expiry, and scoped API access',
          'Email verification - OTP delivery through Nodemailer or Resend',
          'Push + PDF services - VAPID alerts and bounded PDF parsing'
        ],
        database: [
          'Groq Cloud AI - Planner-aware chat, quiz, exam, and paper generation with text, image, and bounded PDF context',
          'Browser capabilities - Speech recognition, wake phrases, spoken prompts, service-worker alerts, and push where supported',
          'Persistence & export - MongoDB workspace sync plus jsPDF/html2canvas reports, timetables, mind maps, results, certificates, and JSON backup'
        ]
      },
      pagesAndComponents: [
        { title: 'Authentication & Learner Profile', description: 'Registration and login create a private study workspace. Learners can store their academic stage, class or degree, curriculum or track, institution details, profile image, and account preferences.' },
        { title: 'Dashboard (Home)', description: 'A connected overview of overall completion, first pending task, weakest subject, exam readiness, daily momentum, goals, insights, and upcoming work. Completion rewards mark daily wins, full-plan progress, and the 80% exam unlock.' },
        { title: 'Subjects & Academic Context', description: 'Build a subject library with chapter counts and Easy, Medium, or Hard difficulty. Context carries into planning, materials, quizzes, exams, and assistant explanations.' },
        { title: 'Smart Planner & Timetable', description: 'Generate a focused schedule from subjects, exam date, and Balanced, High priority, Revision-heavy, or Rapid coverage strategies. Mark tasks complete, recover backlog, rebalance overloaded days, undo adjustments, start a new plan, and export the timetable as PDF.' },
        { title: 'Goal & Reminder Center', description: 'Create dated goals, scheduled reminders, quick to-dos, daily study targets, and weekly review targets. Browser alerts, sounds, postponement actions, and scheduled 6 PM push nudges keep incomplete work visible.' },
        { title: 'Analytics & Readiness', description: 'Explore completion trends, XP, levels, badges, topic timelines, the focus map, task distribution, study rhythm, subject performance, weekly velocity, exam-readiness signals, and focused next-step insights.' },
        { title: 'Notes & Doubt Board', description: 'Capture chapter summaries, unresolved doubts, and left-over topics by subject. Search and filter the board, track note status, and bridge unfinished topics back into planning and revision workflows.' },
        { title: 'AI Study Companion, Chat History & Voice', description: 'A planner-aware assistant adapts explanations to the learner profile and current task metrics. It preserves chat sessions, accepts images and PDFs, supports wake phrases and navigation commands, and can be opened through the animated sidebar study pet.' },
        { title: 'Interactive Quizzes & Secure Exam Workspace', description: 'Generate 5- or 10-question topic MCQ sets with learner-stage and subject context. At 80% planner completion, generate a 40-question, 60-minute exam with server timing, autosave, flags, fullscreen monitoring, and server scoring.' },
        { title: 'Question Papers & Offline Practice', description: 'Create saved, printable AI question papers with configurable subjects, marks, difficulty, language, internal choice, question shuffling, model answers, marking schemes, and answer keys.' },
        { title: 'Study Materials & Reports', description: 'Receive subject and chapter-aware pathways to videos, articles, references, and targeted searches based on academic context and progress. Generate a multi-page planner intelligence report.' },
        { title: 'Settings, Appearance & Product Guide', description: 'Configure themes, backgrounds, brightness, glass effects, accent colors, typography, card density, cursor style, sounds, notifications, wake mode, study targets, and profile details.' }
      ]
    }
  },
  {
    title: 'Ragas Group',
    subtitle: 'Corporate digital ecosystem & portfolios',
    description:
      'I designed and developed the complete digital ecosystem for Ragas Group, creating a unified online presence that connects its corporate websites, business divisions, and professional portfolios. Each website was built with a modern, responsive, and user-friendly design to represent the brand clearly across all devices. Scroll to explore all Ragas Group websites.',
    ragasPages: [
      {
        name: 'Ragas Group Digital Ecosystem',
        label: 'Overview',
        url: 'https://www.ragasgroups.com',
        logo: ragasGroupsMain,
        description:
          'I designed and developed the complete digital ecosystem for Ragas Group, creating a unified online presence that connects its corporate websites, business divisions, and professional portfolios. Each website was built with a modern, responsive, and user-friendly design to represent the brand clearly across all devices.',
        highlights: [
          'Unified parent brand, business division websites, and professional portfolio experiences under one ecosystem.',
          'Modern responsive layouts designed to stay clear, polished, and easy to use across desktop and mobile devices.',
          'Scroll to explore all Ragas Group websites.',
        ],
        technologies: ['HTML5', 'CSS3', 'React.js', 'Figma', 'UI/UX Design'],
      },
      {
        name: 'Ragas Group of Companies',
        label: 'Parent Company Website',
        url: 'https://www.ragasgroups.com',
        logo: ragasGroupsMain,
        description:
          'A modern static corporate website for Ragas Group, the parent company of Ragas Shipping and Ragas Aerospace. It presents both divisions through branded navigation, video-led division cards, corporate highlights, and a dedicated contact experience.',
        highlights: [
          'Built a clean responsive business platform with custom CSS, CSS Grid, Flexbox, gradient overlays, and polished hover transitions.',
          'Used locally bundled brand assets, background imagery, and division videos for a consistent corporate identity.',
          'Added SEO foundations including meta tags, canonical URL, Open Graph, Twitter Cards, JSON-LD schema, robots.txt, and sitemap.xml.',
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'Responsive UI'],
        detailedOverview: {
          logo: ragasGroupsMain,
          executiveDescription: 'The Ragas Groups Corporate Portal is a high-performance, modern landing page acting as the central digital hub for the global parent organization. It directs users seamlessly to the core business divisions—Ragas Shipping and Ragas Aerospace. Built with a focus on speed, SEO optimization, and interactive aesthetics, the portal features a robust, serverless contact architecture that securely manages client inquiries without compromising performance.',
          technologyStack: {
            frontend: [
              'Semantic HTML5 - Core structure ensuring accessibility and strict SEO compliance.',
              'Vanilla CSS3 - Custom design token variables for theming, responsive layout using Flexbox and Grid, glassmorphism overlays, and fluid micro-interactions.',
              'Vanilla JavaScript (ES6+) - Lightweight interactive logic without the overhead of heavy frameworks.',
              'Google Fonts & FontAwesome - Premium typography (Plus Jakarta Sans) and clean, CDN-based iconography.'
            ],
            backend: [
              'Vercel Edge Network - Hosting platform providing ultra-low latency, automatic scaling, and continuous Git-based deployment.',
              'Vercel Serverless Functions - Node.js endpoint (api/contact.js) acting as the secure gateway for handling form submissions.',
              'Resend API - High-deliverability email service used to dispatch inquiries securely without exposing API keys on the client side.'
            ],
            database: [
              'Zoho Mail - Custom domain email hosting for professional corporate communication (e.g., info@ragasgroups.com).',
              'Custom DNS Routing - Seamless connection of the ragasgroups.com domain to Vercel for web traffic and Zoho for email routing.'
            ]
          },
          pagesAndComponents: [
            { title: 'Dashboard / Home (index.html)', description: 'Features dynamic media cards with looping background videos (Shipping & Aerospace), engaging hover states, and JSON-LD Structured Schema markup for search engine rich results.' },
            { title: 'Corporate Inquiry Interface (contact.html)', description: 'A sleek, interactive contact form with real-time validation, directly tied to the serverless email backend.' },
            { title: 'SEO & Social Optimization Suite', description: 'Includes fully implemented Open Graph (og:) metadata, Twitter cards, a custom robots.txt, and an XML sitemap for maximum indexation and premium social media link previews.' }
          ],
          securityAndArchitecture: [
            { title: 'Domain Purchase & Email Integration', description: 'The custom domain (ragasgroups.com) was acquired, and its DNS records were configured to point A and CNAME records to Vercel for web hosting. Crucially, MX and TXT records were routed to Zoho Mail to handle all inbound corporate emails securely.' },
            { title: 'Contact Form Workflow', description: 'The frontend JavaScript sends an asynchronous POST request to the Vercel serverless function, which sanitizes the input and communicates securely with the Resend API using server-side environment variables. Resend dispatches the email to the Zoho Mail inbox, dynamically setting the visitor\'s email as the reply-to address.' },
            { title: 'Premium Visual Language', description: 'Built using high-fidelity styling, featuring custom scrollbars, cohesive dark-mode-inspired color palettes, and deep glassmorphism visual effects.' },
            { title: 'Lightning Fast Performance', description: 'By bypassing heavy JavaScript frameworks like React or Vue in favor of a pure vanilla tech stack, the portal guarantees instant load times, minimal page sizes, and optimal Google Core Web Vitals scores.' }
          ]
        }
      },
      {
        name: 'Ragas Shipping',
        label: 'Maritime Corporate Website',
        url: 'https://shipping.ragasgroups.com',
        logo: ragasShippingLogo,
        description:
          'A premium corporate website for Ragas Shipping Pte Ltd, a Singapore-based maritime, marine logistics, energy, and commodity trading company. The site presents services, trading capabilities, values, vision, mission, and contact information with a maritime-inspired visual system.',
        highlights: [
          'Created animated hero titles, video backgrounds, smooth reveal animations, glassmorphism cards, and full-screen visual sections.',
          'Built service showcases, trading highlights, company values, capability sections, and a professional contact flow.',
          'Implemented the frontend with Next.js, React, TypeScript, Tailwind CSS, Motion, Lucide icons, and shadcn/Tailwind utilities.',
        ],
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        detailedOverview: {
          logo: ragasShippingLogo,
          executiveDescription: 'The Ragas Shipping Web Platform is a premium, state-of-the-art web application built for Ragas Shipping Pte Ltd (Singapore). Designed to bridge the gap between global clients and the company\'s maritime capabilities, it serves as a modern digital storefront. It empowers users to explore services like Sea Freight, Ship Broking, and Petroleum trading, and facilitates direct communication through an integrated enquiry engine. The platform is engineered with modern web aesthetics, premium animations, and high-performance edge deployment to ensure a world-class user experience.',
          technologyStack: {
            frontend: [
              'Next.js 16 (App Router) - Core framework for server-rendered, component-driven UI and API routes',
              'React 19 - UI library for building interactive interfaces',
              'Tailwind CSS v4 & Vanilla CSS - Custom design system implementing sleek glassmorphism themes and curated maritime color palettes',
              'Motion (Framer Motion) - Premium transitions, viewport-triggered reveals, and physics-based micro-animations',
              'Lucide React - Clean and consistent iconography',
              'shadcn/ui - Highly customizable UI component blocks'
            ],
            backend: [
              'Next.js Route Handlers - Serverless backend API layer (/api/enquiry)',
              'Resend API - Reliable transactional email service routing contact enquiries directly to corporate inboxes',
              'TypeScript - Strict type-checking ensuring zero build errors and code stability',
              'pnpm - Fast, disk space efficient package manager'
            ],
            database: [
              'Vercel - Primary deployment platform hosting the application on a global Edge Network with automated CI/CD pipelines',
              'Zoho Mail - Provider for the primary domain (ragasgroups.com) and enterprise email hosting (e.g., info@ragasgroups.com)',
              'Custom DNS Routing - Subdomain (shipping.ragasgroups.com) configured in Zoho\'s DNS zone to point to Vercel\'s edge servers'
            ]
          },
          pagesAndComponents: [
            { title: 'Hero & Navigation', description: 'Features custom-engineered, physics-based staggered letter slide-up and fade-in animations on the main headings. Optimized high-definition background cargo/compass videos with overlays ensure high readability.' },
            { title: 'Services Grid & Details Modals', description: 'An interactive 4x2 responsive services grid showcasing key capabilities (Sea Freight, Ship Broking, Chartering, Petroleum, etc.). Interactive cards reveal deep-dive overlay modals with custom content or link directly to affiliate platforms.' },
            { title: 'Trading & Vision Sections', description: 'Trading Section highlights sourcing items and global trading routes. Vision Section outlines the company\'s Vision, Mission, and Future Outlook. Staggered Container Reveals provide elegant, viewport-triggered spring physics entrance transitions.' },
            { title: 'Integrated Contact Engine', description: 'A functional contact form embedded in the application. It captures user details (Name, Company, Email, Phone, Message) with strict validation, routing validated enquiries directly to the corporate inbox with pre-filled subject lines.' }
          ],
          securityAndArchitecture: [
            { title: 'Domain & Subdomain Configuration', description: 'The primary domain ragasgroups.com was registered and configured through Zoho Mail. A dedicated subdomain, shipping.ragasgroups.com, was created specifically for the shipping branch with DNS records routed directly to Vercel.' },
            { title: 'Email Integration via Resend', description: 'The platform\'s contact form connects to a custom API route. When a user submits an enquiry, the Next.js server securely processes the payload and uses the Resend API to dispatch an email. Emails are configured to be sent to info@ragasgroups.com with the user\'s details without exposing SMTP credentials on the frontend.' }
          ]
        }
      },
      {
        name: 'Ragas Aerospace',
        label: 'Defence Drone Technology Website',
        url: 'https://aerospace.ragasgroups.com',
        logo: ragasAerospaceLogo,
        description:
          'A full-stack website for Ragas Aerospace, an Indian defence drone technology company focused on autonomous aerial systems, surveillance, security, and mission-critical operations. The interface uses a cinematic aerospace identity with strong motion and operational depth.',
        highlights: [
          'Designed animated HUD overlays, drone visuals, video backgrounds, interactive product cards, achievement modals, and team/contact sections.',
          'Built a full-stack system with React, React Router, Framer Motion, Python, FastAPI, PostgreSQL, JWT authentication, and protected routes.',
          'Included SMTP notifications, login/register flows, role application forms, an admin dashboard, responsive layouts, and bundled media assets.',
        ],
        technologies: ['React', 'FastAPI', 'PostgreSQL', 'JWT Auth', 'Framer Motion'],
        detailedOverview: {
          logo: ragasAerospaceLogo,
          executiveDescription: 'Ragas Aerospace is an advanced Indian defense drone technology platform dedicated to building next-generation autonomous aerial systems for surveillance, security, and mission-critical operations. The platform serves as a central hub to showcase cutting-edge unmanned aerial systems (UAS), company achievements, and team information. It provides an immersive user experience through a cinematic drone scanner HUD, interactive product showcases, and seamless user authentication, all designed to highlight the AI-first, software-defined approach of Ragas Aerospace. The primary domain is registered at www.ragasgroups.com (managed via Zoho Mail), with the main web application deployed on the dedicated subdomain aerospace.ragasgroups.com.',
          technologyStack: {
            frontend: [
              'React 19 - Core framework for component-driven UI',
              'Tailwind CSS & Radix UI - Custom design system, styling, and accessible primitive components',
              'Framer Motion - Premium transition and UI micro-animations',
              'React Router DOM - Client-side SPA routing',
              'CRA with Craco - Bundler and optimized development server',
              'Axios & React Query - Data fetching and client-side state management'
            ],
            backend: [
              'Python & FastAPI - High-performance execution runtime and RESTful API controller layer',
              'Uvicorn - ASGI web server implementation',
              'PyJWT & bcrypt - Stateless session authorization token handling and secure password hashing',
              'SMTP Integration - Asynchronous email notification processing for logins and registrations'
            ],
            database: [
              'Supabase (PostgreSQL) - Primary database hosting user accounts, applications, and login activity notifications',
              'PgBouncer - Transaction-mode connection pooler for robust database scalability',
              'Auto-Migrations - Dynamic table instantiation directly handled on server startup',
              'Vercel - Frontend hosting environment providing automated CI/CD builds and custom SPA fallback routing configuration',
              'Render - Backend cloud deployment utilizing Infrastructure-as-Code for automated environment configuration'
            ]
          },
          pagesAndComponents: [
            { title: 'Cinematic Hero & Mission Experience', description: 'A full-screen background video landing page featuring smooth gradient overlays and glassmorphism pillar cards designed to immediately engage users in the defense technology theme.' },
            { title: 'Drone Scanner HUD (Heads-Up Display)', description: 'An advanced visual overlay integrating a blueprint grid, scanning lasers, radar sweeps, and viewfinder elements, faithfully simulating an authentic aerospace targeting interface.' },
            { title: 'Products Showcase (UAS Fleet)', description: 'Interactive presentation cards detailing the company\'s expansive fleet of UAVs—including Tricopters, Quadcopters, Hexacopters, Octocopters, VTOL, and FPV drones. Users can access full specifications via dynamic click-to-open modals.' },
            { title: 'Achievements Gallery', description: 'A rich chronological timeline gallery highlighting the company\'s accolades, such as first-place wins at national expos (KRATOS\'25), NIDAR National Innovation Challenge Recognition, and high-profile event participations.' },
            { title: 'Team & Founders Section', description: 'Premium glassmorphic profile cards presenting the founders and core team members, complete with social links, professional summaries, and high-quality headshots.' },
            { title: 'Authentication & Notification Panel', description: 'Secure Login and Registration modules with seamless backend integration. The system sends asynchronous email alerts to administrators for tracking user access and application submissions without blocking API responses.' },
            { title: 'Responsive Mobile UI', description: 'A fully adaptive layout featuring a sleek hamburger navigation menu with full-screen glass overlays, guaranteeing a fluid experience across all mobile and desktop devices.' }
          ]
        }
      },
      {
        name: 'RAIC Technology',
        label: 'Autonomous Aerial Intelligence Website',
        url: 'https://raic.ragasgroups.com',
        logo: ragasRaicLogo,
        description:
          'A futuristic aerospace technology website focused on autonomous aerial intelligence, RAIC technology, drone systems, swarm architecture, and mission-focused UAV applications. It works as a cinematic single-page company platform with immersive visual storytelling.',
        highlights: [
          'Created a logo intro animation, video hero, HUD overlays, Three.js particle effects, glassmorphism cards, animated counters, and application showcases.',
          'Built modular React/Vite architecture with Tailwind CSS, Framer Motion, GSAP ScrollTrigger, Three.js, React Three Fiber, Swiper, and Lucide icons.',
          'Integrated a FormSubmit contact flow and centralized content data for maintainable updates across the experience.',
        ],
        technologies: ['React', 'Vite', 'Three.js', 'GSAP', 'Tailwind CSS'],
        detailedOverview: {
          logo: ragasRaicLogo,
          executiveDescription: 'RAGAS Aerospace Interactive Portfolio is a cutting-edge web platform showcasing indigenous deep-tech solutions for autonomous aerial intelligence. Designed as both a commercial investor dashboard and a technical portfolio, it visualizes state-of-the-art intelligent systems tailored for defense, security, industrial monitoring, and precision agriculture. The platform empowers users to explore the Real-Time Adaptive Intelligence Core (RAIC), swarm architecture protocols, and business viability analytics through an immersive, cinematic, and interactive web experience.',
          technologyStack: {
            frontend: [
              'React 18 - Core framework for component-driven UI',
              'Vite - High-performance bundler and optimized development server',
              'Tailwind CSS - Utility-first styling combined with custom design token variables',
              'Framer Motion & GSAP - Premium transition layouts and scroll-triggered micro-animations',
              'Three.js & R3F - WebGL 3D visualizations and interactive 3D assets rendering',
              'Swiper & Lucide React - Touch-friendly sliders and scalable iconography'
            ],
            backend: [
              'Node.js API - RESTful serverless endpoint layer for processing contact form inquiries',
              'GitHub CI/CD - Automated build and deployment workflows triggered on main branch updates'
            ],
            database: [
              'Edge Network Hosting - High-availability global CDN handling automated SSL/TLS termination',
              'Zoho Mail (Domain Registrar) - Primary domain registration, administration, and corporate inbox (www.ragasgroups.com)',
              'Custom Subdomain Mapping - Dedicated routing for the platform (raic.ragasgroups.com) seamlessly linked to the deployment',
              'Resend API - Connects the frontend contact interface to Zoho Mail, enabling programmatic email delivery with custom HTML template formatting'
            ]
          },
          pagesAndComponents: [
            { title: 'Cinematic Logo Intro', description: 'Hands-free splash animation revealing the brand wings logo with ease-in/out scale and breathing ambient glows, transitioning seamlessly via letterbox widescreen panels.' },
            { title: 'Hero & RAIC Technology', description: 'The primary landing view offering interactive technology insights. Demonstrates decentralized autonomous decision-making and edge computing capabilities.' },
            { title: 'Drone System & Swarm Architecture', description: 'Real-time visualization components illustrating swarming protocols, dynamic routing topologies, and obstacle avoidance systems.' },
            { title: 'Applications & Performance', description: 'Technical specification segments highlighting tactical hardware integrations and edge processing units like NVIDIA Jetson and Crossflight V1.1 avionics.' },
            { title: 'Business Impact Dashboard', description: 'Custom, responsive SVG analytical charts mapping out market segments, projected revenue streams, employment growth trendlines, and conventional efficiency gains.' },
            { title: 'Contact & Investor Relations', description: 'A robust contact interface integrated with the Resend API to facilitate strategic alignment and investor inquiries, directly communicating with the corporate Zoho inbox.' }
          ]
        }
      },
    ],
    technologies: ['HTML5', 'CSS3', 'React.js', 'Figma', 'UI/UX Design'],
    github: '',
    liveDemo: 'https://www.ragasgroups.com',
    prototype: '',
    images: [
      ragasGroupsMain,
    ],
  },
];

export const certificates = [
  {
    title: 'Artificial Intelligence Foundation Certification',
    issuer: 'Infosys Springboard',
    date: 'February 13, 2026',
    file: '/certificates/AI2.pdf',
  },
  {
    title: 'TechA AWS Solution Architect Certification',
    issuer: 'Infosys Springboard',
    date: 'January 1, 2026',
    file: '/certificates/aws1.pdf',
  },
  {
    title: 'Database Management System - Science Graduates',
    issuer: 'Infosys Springboard',
    date: 'July 30, 2025',
    file: '/certificates/dbms3.pdf',
  },
  {
    title: 'Java Developer Certification',
    issuer: 'Infosys Springboard',
    date: 'October 12, 2025',
    file: '/certificates/java1.pdf',
  },
  {
    title: 'Python Development Internship Certificate',
    issuer: 'Cognifyz Technologies',
    date: 'August 27, 2025',
    file: '/certificates/cognifyz.pdf',
  },
  {
    title: 'MongoDB Advanced Schema Design Patterns and Antipatterns Skill Badge',
    issuer: 'MongoDB',
    date: 'June 24, 2025',
    file: '/certificates/mongoDB1.pdf',
  },
  {
    title: 'Introduction to Natural Language Processing',
    issuer: 'Infosys Springboard',
    date: 'March 3, 2025',
    file: '/certificates/nlp1.pdf',
  },
  {
    title: 'Oracle Fusion AI Agent Studio Certified Foundations Associate',
    issuer: 'Oracle',
    date: 'February 18, 2026',
    file: '/certificates/oracle1.pdf',
  },
  {
    title: 'Python Foundation Certification',
    issuer: 'Infosys Springboard',
    date: 'February 13, 2026',
    file: '/certificates/python3.pdf',
  },
  {
    title: 'Python Programming',
    issuer: 'Codsoft',
    date: 'February 18, 2025',
    file: '/certificates/python4.pdf',
  },
];


