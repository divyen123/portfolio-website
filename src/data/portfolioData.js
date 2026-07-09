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
import memoryOracleCertificate from '../assets/projects/memory-timeline/oracle-certificate.webp';
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
      memoryOracleCertificate,
      memoryHiddenImages,
    ],
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


