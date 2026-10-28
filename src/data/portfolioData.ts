import {
  ProfileData,
  TechnicalSkill,
  AccomplishmentMetric,
  ProjectItem,
  ExperienceItem,
} from '../types/portfolio';

import avatarImg from '../assets/images/grad_pic.JPG';
import projectNutriorityImg from '../assets/images/nutriority_showcase_v2_1790691562399.jpg';
import projectFloodAlertImg from '../assets/images/briane_flood_alert_showcase_1790692098215.jpg';

// ServEm Showcase Image Assets (single balanced banner with both platforms)
import projectServemBannerImg from '../assets/images/servem_showcase_balanced.jpg';

export const profileData: ProfileData = {
  name: 'Nexon Jr. Y. Sabañao',
  fullNameFormal: 'Nexon Jr. Y. Sabañao',
  degree: 'Bachelor of Science in Information Technology',
  executiveHeadline:
    'Detail-oriented Information Technology graduate with hands-on experience in full-stack web applications (React, TypeScript, Tailwind CSS), mobile development (Flutter & Android Kotlin), embedded IoT systems (ESP32, C++), and operational data management. Adaptable, quick to learn, and eager to contribute to technical and software engineering roles.',
  email: 'nexonjrsabanao@gmail.com',
  phone: '+639167306105',
  location: 'Trece Martires, Cavite, Philippines 4109',
  githubUrl: 'https://github.com/nexonsabanao',
  githubUsername: 'nexonsabanao',
  facebookUrl: 'https://www.facebook.com/Niccosy1',
  instagramUrl: 'https://www.instagram.com/akroma_22/',
  avatarImage: avatarImg,
  education: {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Cavite State University',
    graduationDate: 'Graduated July 2026',
    location: 'Cavite, Philippines',
    highlights: [
      'Developed ServEm on-demand service marketplace (Flutter mobile app & React TypeScript web platform)',
      'Developed native Android fitness app (Nutriority) with Kotlin and Firebase Firestore',
      'Engineered Barangay Weather & Flood Alert IoT system with LilyGO TTGO T-SIM & C++',
      'Focus in Full-Stack Web, Flutter Mobile, Python Scripting, and Embedded Systems',
    ],
  },
  targetRoles: [
    'Junior / Associate Software Developer',
    'Frontend / Full-Stack Web Developer (React & TypeScript)',
    'Android / Mobile Developer (Kotlin)',
    'Python & Backend Developer',
    'IoT & Embedded Systems Engineer',
    'IT Operations & Data Specialist',
  ],
  corePillars: [
    {
      title: 'Full-Stack Web & Marketplace Systems',
      description:
        'Developed ServEm, a community service marketplace with dual-role architecture for booking tasks or offering skills, category search, and appointment scheduling.',
      metrics: 'React · TypeScript · Tailwind CSS · REST APIs',
    },
    {
      title: 'Native Android & Firebase Cloud',
      description:
        'Built full-featured Android application (Nutriority) using Kotlin, XML layouts, and real-time Firestore cloud database synchronization.',
      metrics: 'Kotlin · Android Studio · Firestore NoSQL',
    },
    {
      title: 'IoT Telemetry & Emergency Operations',
      description:
        'Engineered early-warning flood telemetry using ESP32 & Arduino C++, combined with MDRRMO disaster operational support and data tracking.',
      metrics: 'ESP32 · LilyGO T-SIM · MS Excel',
    },
  ],
};

export const technicalSkills: TechnicalSkill[] = [
  // Web & Full-Stack (ServEm & Modern Web)
  {
    name: 'TypeScript & JavaScript',
    category: 'programming',
    level: 'Intermediate',
    featured: true,
    highlightText: 'Type-safe frontend logic, interfaces, modular state management, and modern ESNext features',
    tags: ['TypeScript', 'ESNext', 'Clean Code', 'Type Safety'],
  },
  {
    name: 'React',
    category: 'mobile_cloud',
    level: 'Intermediate',
    featured: true,
    highlightText: 'Component-driven UI, custom hooks, reactive state flow, and accessible web application design',
    tags: ['Hooks', 'Component Architecture', 'State Flow', 'SPA'],
  },
  {
    name: 'Tailwind CSS',
    category: 'mobile_cloud',
    level: 'Intermediate',
    featured: true,
    highlightText: 'Utility-first modern styling, responsive layouts, design tokens, and dark mode themes',
    tags: ['Responsive Layouts', 'Design Tokens', 'Dark Mode'],
  },

  // Core Languages
  {
    name: 'Python',
    category: 'programming',
    level: 'Intermediate',
    featured: true,
    highlightText: 'Automation scripting, backend algorithmic logic, data processing, and API integrations',
    tags: ['Scripting', 'Automation', 'Data Processing', 'APIs'],
  },
  {
    name: 'Kotlin',
    category: 'programming',
    level: 'Intermediate',
    featured: true,
    highlightText: 'Native Android mobile architecture, ViewModels, and responsive layout handlers',
    tags: ['Mobile', 'Android Studio', 'Coroutines'],
  },
  {
    name: 'C++',
    category: 'programming',
    level: 'Intermediate',
    featured: true,
    highlightText: 'Embedded microcontroller logic, Arduino firmware, and memory-efficient algorithms',
    tags: ['Embedded Systems', 'Algorithms', 'Firmware'],
  },
  {
    name: 'Java',
    category: 'programming',
    level: 'Intermediate',
    featured: false,
    highlightText: 'Object-oriented programming principles, data structures, and application development',
    tags: ['OOP', 'Software Dev', 'Application Logic'],
  },

  // Mobile & Cloud
  {
    name: 'Flutter & Dart',
    category: 'mobile_cloud',
    level: 'Intermediate',
    featured: true,
    highlightText: 'Cross-platform mobile application development, reactive widgets, state management, and responsive UI',
    tags: ['Flutter', 'Dart', 'Cross-Platform', 'Mobile UI'],
  },
  {
    name: 'Android Studio & XML',
    category: 'mobile_cloud',
    level: 'Intermediate',
    featured: true,
    highlightText: 'Native Android UI layout design, Material standards, and APK publishing',
    tags: ['Android', 'XML Layouts', 'Mobile UI'],
  },
  {
    name: 'Firebase Firestore & Cloud',
    category: 'mobile_cloud',
    level: 'Intermediate',
    featured: true,
    highlightText: 'Real-time cloud database, authentication, and document synchronization',
    tags: ['Cloud NoSQL', 'Authentication', 'Realtime Sync'],
  },
  {
    name: 'HTML5 & CSS3',
    category: 'mobile_cloud',
    level: 'Intermediate',
    featured: false,
    highlightText: 'Semantic web markup, accessibility (a11y), responsive design, and CSS variables',
    tags: ['Semantic HTML', 'CSS Grid/Flexbox', 'Accessibility'],
  },

  // Hardware & IoT
  {
    name: 'ESP32 & Arduino (LilyGO TTGO T-SIM)',
    category: 'hardware_iot',
    level: 'Intermediate',
    featured: true,
    highlightText: 'Sensor data processing, GSM/cellular emergency telemetry, and board wiring',
    tags: ['IoT', 'Microcontrollers', 'GSM Alerts', 'Telemetry'],
  },
  {
    name: 'STM32',
    category: 'hardware_iot',
    level: 'Familiar',
    featured: false,
    highlightText: 'ARM Cortex embedded firmware development and GPIO peripherals',
    tags: ['Embedded', 'ARM Cortex', 'Hardware'],
  },

  // Design & Media Tools
  {
    name: 'Adobe Creative Suite & Canva',
    category: 'design_tools',
    level: 'Intermediate',
    featured: false,
    highlightText: 'Graphic asset design, UI mockups, vector artwork (Photoshop, Illustrator, Animate), and Figma workflows',
    tags: ['UI Mockups', 'Vector Graphics', 'Visual Assets'],
  },

  // Office & Operational Tools
  {
    name: 'Microsoft Excel (Data Management)',
    category: 'office_data',
    level: 'Intermediate',
    featured: true,
    highlightText: 'Spreadsheet organization, record structuring, operational reporting, and data analysis',
    tags: ['Data Management', 'Record Keeping', 'Reporting'],
  },
  {
    name: 'Microsoft Word & PowerPoint',
    category: 'office_data',
    level: 'Intermediate',
    featured: false,
    highlightText: 'Technical documentation, incident logging, and official report presentations',
    tags: ['Documentation', 'Presentations'],
  },
];

export const accomplishmentMetrics: AccomplishmentMetric[] = [
  {
    id: 'servem-platform-metric',
    metric: 'Full-Stack Web',
    label: 'ServEm Services Marketplace',
    context: 'React, TypeScript & Tailwind CSS',
    description:
      'Developed an on-demand community services platform featuring dual-role accounts, category search, and appointment booking.',
    category: 'software',
  },
  {
    id: 'mobile-app',
    metric: 'Full-Stack Mobile',
    label: 'Nutriority Android App',
    context: 'Kotlin & Firebase Firestore',
    description:
      'Developed and deployed native Android application featuring real-time Firestore sync, custom XML UI layouts, and exercise API integration.',
    category: 'software',
  },
  {
    id: 'iot-alert',
    metric: 'Hardware Telemetry',
    label: 'Barangay Flood Alert System',
    context: 'LilyGO TTGO T-SIM & C++',
    description:
      'Engineered early warning telemetry system reading environmental sensors and dispatching automated emergency alerts over GSM.',
    category: 'iot',
  },
  {
    id: 'mdrrmo-ops',
    metric: 'Operational Support',
    label: 'MDRRMO Indang Support',
    context: 'Emergency Operations & Excel',
    description:
      'Assisted disaster operations, coordinated team drills, and organized operational incident records in Microsoft Excel.',
    category: 'operations',
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'servem-platform',
    title: 'ServEm',
    subtitle: 'Dual-Role Services Marketplace (Flutter Mobile & React Web)',
    resumeTitle: 'ServEm - Neighbourhood-Services Marketplace',
    category: 'Web & Full-Stack',
    categories: ['Android & Mobile'],
    summary:
      'On-demand community service marketplace connecting clients with local providers for home tasks, repairs, and cleaning. Features a cross-platform mobile app built with Flutter and a responsive web platform developed with React, TypeScript, and Tailwind CSS.',
    fullDescription:
      'ServEm is an on-demand service marketplace connecting community members with local providers for everyday tasks such as home repairs, cleaning, furniture assembly, and tech help. Features single-account dual-role workflows enabling users to book services as a customer or offer skills as a provider. Built with a Flutter mobile app and a responsive web platform engineered using React, TypeScript, and Tailwind CSS.',
    image: projectServemBannerImg,
    tags: [
      'Flutter',
      'Dart',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'REST APIs',
      'Mobile UI',
    ],
    keyHighlights: [
      { label: 'Platform', value: 'Flutter Mobile & React Web' },
      { label: 'Live App', value: 'servem-ph.web.app' },
      { label: 'Tech Stack', value: 'Flutter / React / TypeScript' },
      { label: 'Repository', value: 'github.com/nexonsabanao/ServEm' },
    ],
    technicalFeatures: [
      'Developed a service marketplace connecting clients with local providers for home tasks, repairs, and cleaning',
      'Implemented dual-role functionality enabling users to book services as a customer or list skills as a provider',
      'Built Android mobile application using Flutter with responsive layouts and state management',
      'Built responsive user interface using React, TypeScript, and Tailwind CSS',
    ],
    roleWorkflow: [
      {
        role: 'Customer',
        badge: 'Find Local Help',
        description:
          'Browse service categories, filter by pricing and ratings, view provider reviews, and schedule appointments.',
        keyFeatures: [
          'Service categories (Repairs, Cleaning, Errands, Assembly, Tech)',
          'Filter by price and customer ratings',
          'Inspect provider reviews and completed task history',
          'Direct appointment booking',
        ],
      },
      {
        role: 'Service Provider (ServMate)',
        badge: 'Offer Skills',
        description:
          'List services and skills, set hourly rates, manage task availability, and receive appointment bookings.',
        keyFeatures: [
          'Provider profile with skill specializations',
          'Display rating average and completed task history',
          'Tools and supplies inclusion options',
          'Manage schedule and service availability',
        ],
      },
    ],
    liveUrl: 'https://servem-ph.web.app/',
    githubUrl: 'https://github.com/nexonsabanao/ServEm',
    featured: true,
  },
  {
    id: 'nutriority-app',
    title: 'Nutriority',
    subtitle: 'Workout & Nutrition Planner Android App',
    resumeTitle: 'Nutriority - Workout & Nutrition Planner Android App',
    category: 'Android & Mobile',
    summary:
      'Native Android fitness planner app built with Kotlin, featuring real-time Firebase Firestore data synchronization, custom XML UI layouts, and API-based exercise data.',
    fullDescription:
      'Nutriority is a native Android application built to assist users with daily workout and nutrition planning. Developed in Android Studio using Kotlin, it connects with Firebase Firestore for real-time document synchronization and user authentication. UI layouts were designed natively in XML for fast, responsive rendering.',
    image: projectNutriorityImg,
    tags: ['Kotlin', 'Android Studio', 'Firebase Firestore', 'XML Layouts', 'REST APIs'],
    keyHighlights: [
      { label: 'Platform', value: 'Android (Native)' },
      { label: 'Backend', value: 'Firebase Firestore' },
      { label: 'Language', value: 'Kotlin / Java' },
      { label: 'Repository', value: 'github.com/nexonsabanao/Nutriority' },
    ],
    technicalFeatures: [
      'Structured Kotlin architecture with view model bindings',
      'Integrated Firebase Firestore for user and planner data',
      'Custom XML layouts following clean mobile design guidelines',
      'API-based exercise data ingestion and planner logic',
    ],
    liveUrl: 'https://nutriority.github.io/Installer',
    githubUrl: 'https://github.com/nexonsabanao/Nutriority',
    featured: true,
  },
  {
    id: 'weather-flood-alert',
    title: 'Briane',
    subtitle: 'Weather-based Flood Alert System for Barangay',
    resumeTitle: 'Briane - Weather-based Flood Alert System for Barangay',
    category: 'IoT & Embedded Systems',
    summary:
      'Disaster risk reduction early-warning platform combining embedded C++ firmware on a LilyGO TTGO T-SIM board with a lightweight HTML/CSS web monitoring interface.',
    fullDescription:
      'Engineered an IoT weather and flood monitoring station for local community disaster risk mitigation. Uses an Arduino-compatible LilyGO TTGO T-SIM board with embedded C++ logic to track precipitation and water level thresholds, triggering automated alerts alongside a web dashboard UI.',
    image: projectFloodAlertImg,
    tags: ['C++', 'Arduino', 'LilyGO TTGO T-SIM', 'ESP32', 'HTML / CSS', 'GSM Telemetry'],
    keyHighlights: [
      { label: 'Microcontroller', value: 'LilyGO T-SIM / ESP32' },
      { label: 'Firmware', value: 'Embedded C++' },
      { label: 'Web UI', value: 'HTML & CSS' },
      { label: 'Repository', value: 'github.com/nexonsabanao/Briane' },
    ],
    technicalFeatures: [
      'Embedded C++ firmware for continuous sensor monitoring and threshold triggers',
      'Cellular GSM connectivity for emergency notification broadcasts',
      'Clean web interface built with HTML and CSS for real-time telemetry viewing',
      'Automated weather forecast and alert evaluation logic',
    ],
    liveUrl: 'https://weather-project-a5fb5.web.app/',
    githubUrl: 'https://github.com/nexonsabanao/Briane',
    featured: true,
  },
];

export const workExperience: ExperienceItem[] = [
  {
    id: 'mdrrmo-assistant',
    role: 'Office Assistant',
    company: 'Municipal Disaster Risk Reduction and Management Office (MDRRMO)',
    location: 'Indang, Cavite, Philippines',
    employmentType: 'On-the-Job Training',
    startDate: 'February 2026',
    endDate: 'May 2026',
    current: false,
    summary:
      'Provided administrative support, operational data management, and emergency response coordination for the municipal disaster risk reduction agency.',
    responsibilities: [
      'Assisted in disaster preparedness and response operations',
      'Coordinated with team members during emergency drills and activities',
      'Maintained records and reports of incidents and operations',
      'Supported staff in organizing files and preparing documents',
      'Managed data using Microsoft Excel',
    ],
    toolsUsed: [
      'Microsoft Excel',
      'Microsoft Word & PowerPoint',
      'Incident Reports & Records',
    ],
  },
];

export const accessibilityReportData = {
  wcagLevel: 'WCAG 2.1 AA / AAA',
  overallScore: '100 / 100',
  contrastRatio: '8.4:1 (Pass AAA)',
  checks: [
    {
      rule: '1.4.3 Contrast (Minimum)',
      requirement: 'Text contrast exceeds 4.5:1 for normal text and 3:1 for large text',
      status: 'Passed (8.4:1)',
      score: '100%',
    },
    {
      rule: '2.1.1 Keyboard Accessible',
      requirement: 'All functionality operable through keyboard with visible focus styles',
      status: 'Passed',
      score: '100%',
    },
    {
      rule: '2.4.1 Bypass Blocks',
      requirement: 'Skip to main content mechanism provided at top of page',
      status: 'Passed',
      score: '100%',
    },
    {
      rule: '4.1.2 Name, Role, Value',
      requirement: 'Semantic HTML5 structure and correct ARIA landmarks',
      status: 'Passed',
      score: '100%',
    },
  ],
};
