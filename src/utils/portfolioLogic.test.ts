import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterProjects,
  filterSkills,
  getUniqueProjectTags,
  generateAtsPlainTextResume,
} from './portfolioLogic';
import { ProjectItem, TechnicalSkill, ProfileData, ExperienceItem } from '../types/portfolio';

const mockProjects: ProjectItem[] = [
  {
    id: 'servem-platform',
    title: 'ServEm – Community Services & Skills Marketplace',
    subtitle: 'Dual-Role On-Demand Platform',
    summary: 'Full-featured marketplace connecting customers and ServMates',
    fullDescription: 'Comprehensive 14-screen flow platform',
    category: 'Web & Full-Stack',
    categories: ['Android & Mobile'],
    image: '/test-servem.jpg',
    tags: ['Flutter', 'React', 'TypeScript', 'Tailwind CSS'],
    keyHighlights: [{ label: 'Platform', value: 'Flutter Mobile & React Web' }],
    technicalFeatures: [
      'Developed a service marketplace connecting clients with local providers for home tasks, repairs, and cleaning',
      'Implemented dual-role functionality enabling users to book services as a customer or list skills as a provider',
      'Built Android mobile application using Flutter with responsive layouts and state management',
      'Built responsive user interface using React, TypeScript, and Tailwind CSS',
    ],
    liveUrl: 'https://servem-ph.web.app/',
    githubUrl: 'https://github.com/nexonsabanao/ServEm',
    featured: true,
  },
  {
    id: 'nutriority-app',
    title: 'Workout & Nutrition Planner Android App',
    subtitle: 'Native Mobile Health & Fitness Tracker',
    summary: 'Native Android fitness planner with Firestore',
    fullDescription: 'Android app with Kotlin and Firebase',
    category: 'Android & Mobile',
    image: '/test-nutriority.jpg',
    tags: ['Kotlin', 'Android Studio', 'Firebase Firestore'],
    keyHighlights: [{ label: 'Platform', value: 'Android' }],
    technicalFeatures: ['Kotlin architecture', 'Firestore sync'],
    githubUrl: 'https://github.com/nexonsabanao',
    featured: true,
  },
  {
    id: 'weather-flood-alert',
    title: 'Weather-based Flood Alert System',
    subtitle: 'IoT Telemetry & Emergency Notification',
    summary: 'IoT weather early-warning platform',
    fullDescription: 'ESP32 and LilyGO TTGO T-SIM firmware',
    category: 'IoT & Embedded Systems',
    image: '/test-flood.jpg',
    tags: ['C++', 'Arduino', 'ESP32'],
    keyHighlights: [{ label: 'Microcontroller', value: 'ESP32' }],
    technicalFeatures: ['Embedded C++', 'GSM Alerting'],
    githubUrl: 'https://github.com/nexonsabanao',
    featured: true,
  },
];

const mockSkills: TechnicalSkill[] = [
  {
    name: 'TypeScript',
    category: 'programming',
    level: 'Intermediate',
    featured: true,
    tags: ['Frontend', 'Types'],
  },
  {
    name: 'Firebase Firestore',
    category: 'mobile_cloud',
    level: 'Intermediate',
    featured: true,
    tags: ['Cloud NoSQL'],
  },
];

const mockProfile: ProfileData = {
  name: 'Nexon Jr. Y. Sabañao',
  fullNameFormal: 'Nexon Jr. Y. Sabañao',
  degree: 'Bachelor of Science in Information Technology',
  executiveHeadline: 'Detail-oriented IT graduate with hands-on web, mobile, and IoT experience.',
  email: 'nexonjrsabanao@gmail.com',
  phone: '+639167306105',
  location: 'Cavite, Philippines',
  githubUrl: 'https://github.com/nexonsabanao',
  githubUsername: 'nexonsabanao',
  avatarImage: '/avatar.jpg',
  education: {
    degree: 'BS Information Technology',
    institution: 'Cavite State University',
    graduationDate: 'July 2026',
    highlights: ['ServEm Web App', 'Nutriority Mobile App'],
  },
  targetRoles: ['Full-Stack Developer'],
  corePillars: [],
};

const mockExperience: ExperienceItem[] = [
  {
    id: 'mdrrmo',
    role: 'Office Assistant',
    company: 'MDRRMO Indang',
    location: 'Cavite, Philippines',
    employmentType: 'On-the-Job Training',
    startDate: 'Feb 2026',
    endDate: 'May 2026',
    current: false,
    summary: 'Administrative and operational support',
    responsibilities: ['Managed records in Excel', 'Assisted in drills'],
    toolsUsed: ['Excel'],
  },
];

test('filterProjects returns all projects when category is "all"', () => {
  const result = filterProjects(mockProjects, 'all');
  assert.equal(result.length, 3);
});

test('filterProjects filters accurately by "Web & Full-Stack" category including ServEm', () => {
  const result = filterProjects(mockProjects, 'Web & Full-Stack');
  assert.equal(result.length, 1);
  assert.equal(result[0].id, 'servem-platform');
  assert.equal(result[0].githubUrl, 'https://github.com/nexonsabanao/ServEm');
});

test('filterProjects filters accurately by "Android & Mobile"', () => {
  const result = filterProjects(mockProjects, 'Android & Mobile');
  assert.equal(result.length, 2);
  assert.deepEqual(
    result.map((project) => project.id),
    ['servem-platform', 'nutriority-app']
  );
});

test('filterSkills filters by category correctly', () => {
  const result = filterSkills(mockSkills, 'programming');
  assert.equal(result.length, 1);
  assert.equal(result[0].name, 'TypeScript');
});

test('getUniqueProjectTags collects unique tags', () => {
  const tags = getUniqueProjectTags(mockProjects);
  assert.ok(tags.includes('Flutter'));
  assert.ok(tags.includes('React'));
  assert.ok(tags.includes('TypeScript'));
  assert.ok(tags.includes('Kotlin'));
  assert.ok(tags.includes('ESP32'));
  assert.equal(tags.length, 10);
});

test('generateAtsPlainTextResume includes ServEm live landing page, summary, and experience', () => {
  const resume = generateAtsPlainTextResume(mockProfile, mockExperience, mockProjects);
  assert.ok(resume.includes('NEXON JR. Y. SABAÑAO'));
  assert.ok(resume.includes('ServEm – Community Services & Skills Marketplace'));
  assert.ok(resume.includes('https://servem-ph.web.app/'));
  assert.ok(resume.includes('Flutter'));
  assert.ok(resume.includes('MDRRMO Indang'));
});
