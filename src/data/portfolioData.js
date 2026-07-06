import profileImage from '../assets/profile.jpeg';
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
import ragasShippingLogo from '../assets/projects/ragasgroups/shipping_logo.jpeg';
import ragasAerospaceLogo from '../assets/projects/ragasgroups/aerospace_logo.jpeg';
import ragasRaicLogo from '../assets/projects/ragasgroups/raic_logo.png';
import ragasFounderPhoto from '../assets/projects/ragasgroups/founder_photo.png';

export const personalInfo = {
  name: 'R M Divyen',
  title: 'Aspiring Frontend Developer',
  professionalTitle: 'Software Developer, Frontend Developer, React Developer, and UI Designer',
  intro:
    'Aspiring Frontend Developer specializing in React.js and modern web technologies, dedicated to building seamless and user-centric applications.',
  email: 'divyen624@gmail.com',
  phone: '+91 9840801856',
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
    period: '2011 - 2022',
  },
  {
    institution: 'Kaligi Ranganathan Montford',
    program: 'Higher Secondary School',
    period: '2022 - 2024',
  },
  {
    institution: 'Apollo Computer Centre',
    program: 'Master of Software Engineering',
    period: '6 months',
  },
  {
    institution: 'R.M.K Engineering College',
    program: 'Information Technology',
    period: '2024 - 2028',
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
    title: 'Memory Timeline Application',
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
      'I designed and developed the entire digital ecosystem for the Ragas Group, creating modern, responsive corporate websites and professional portfolios.',
    highlights: [
      'Ragas Shipping: Dependable Ship Chartering and Ship Broking company connecting shipowners and cargo across Asia.',
      'Ragas Aerospace: Defence technology firm developing AI-powered autonomous drone systems for security and surveillance.',
      'RAIC Technology: Pioneering autonomous aerial intelligence with indigenous technology for unmanned defense systems.',
      'Founder Portfolio: Raghav S, Aerospace engineer and defence technologist building mission-critical autonomous platforms.'
    ],
    subprojects: [
      {
        name: 'Ragas Shipping',
        url: 'https://shipping.ragasgroups.com',
        logo: ragasShippingLogo,
        desc: 'A dependable Ship Chartering and Ship Broking company connecting shipowners and cargo across Asia, PG, AG, and the Far East.'
      },
      {
        name: 'Ragas Aerospace',
        url: 'https://aerospace.ragasgroups.com',
        logo: ragasAerospaceLogo,
        desc: 'An Indian defence tech company developing AI-powered autonomous drone systems, combining swarm autonomy and advanced sensing.'
      },
      {
        name: 'RAIC Technology',
        url: 'https://raic.ragasgroups.com',
        logo: ragasRaicLogo,
        desc: 'Pioneering autonomous aerial intelligence with indigenous technology to advance unmanned systems for defence and industry.'
      },
      {
        name: 'Founder Portfolio',
        url: 'https://founder.ragasgroups.com',
        logo: ragasFounderPhoto,
        desc: 'Aerospace engineer Raghav S building autonomous platforms and leading platform engineering and product strategy.'
      }
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
