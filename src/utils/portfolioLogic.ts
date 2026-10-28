import { ProjectItem, TechnicalSkill, ProfileData, ExperienceItem, ProjectCategory } from '../types/portfolio';

export function getProjectCategories(project: ProjectItem): ProjectCategory[] {
  return [project.category, ...(project.categories ?? [])];
}

export function filterProjects(
  projectsList: ProjectItem[],
  selectedCategory: string
): ProjectItem[] {
  if (!selectedCategory || selectedCategory === 'all') {
    return projectsList;
  }
  return projectsList.filter((proj) =>
    getProjectCategories(proj).some((category) => category === selectedCategory)
  );
}

export function filterSkills(
  skillsList: TechnicalSkill[],
  selectedCategory: string
): TechnicalSkill[] {
  if (!selectedCategory || selectedCategory === 'all') {
    return skillsList;
  }
  return skillsList.filter((skill) => skill.category === selectedCategory);
}

export function getUniqueProjectTags(projectsList: ProjectItem[]): string[] {
  const tagSet = new Set<string>();
  projectsList.forEach((p) => {
    p.tags.forEach((t) => tagSet.add(t));
  });
  return Array.from(tagSet);
}

export function generateAtsPlainTextResume(
  profile: ProfileData,
  experience: ExperienceItem[],
  projectsList: ProjectItem[]
): string {
  const sections: string[] = [];

  // Header
  sections.push(
    `${profile.fullNameFormal.toUpperCase()}\n` +
      `${profile.degree.toUpperCase()}\n` +
      `Phone: ${profile.phone} | Email: ${profile.email} | GitHub: ${profile.githubUrl}\n` +
      `Location: ${profile.location}`
  );

  // Summary
  sections.push(`SUMMARY\n${profile.executiveHeadline}`);

  // Education
  sections.push(
    `EDUCATION\n` +
      `${profile.education.institution}\n` +
      `${profile.education.degree}\n` +
      `${profile.education.graduationDate}\n` +
      profile.education.highlights.map((h) => `• ${h}`).join('\n')
  );

  // Experience
  const experienceText = experience
    .map(
      (job) =>
        `${job.role} – ${job.company}\n` +
        `${job.location}\n` +
        `${job.startDate} - ${job.endDate}\n` +
        job.responsibilities.map((r) => `• ${r}`).join('\n')
    )
    .join('\n\n');
  sections.push(`EXPERIENCE\n${experienceText}`);

  // Skills
  sections.push(
    `SKILLS\n` +
      `• Web & Full-Stack: TypeScript, JavaScript, React, Tailwind CSS, HTML5, CSS3, Vite, REST APIs\n` +
      `• Programming & Backend: Dart, Python (Intermediate), C++, Java, Kotlin, Algorithm Logic\n` +
      `• Mobile & Cloud: Flutter, Android Studio (Kotlin, XML Layouts), Firebase Firestore & Realtime DB\n` +
      `• Hardware & IoT: ESP32, Arduino (LilyGO TTGO T-SIM), STM32, Embedded C++, GSM Telemetry\n` +
      `• Office & Data: Microsoft Excel (Data Management, Structuring & Reporting), Word, PowerPoint\n` +
      `• Design & Tools: Git, GitHub, Adobe (Photoshop, Illustrator, Animate), Canva`
  );

  // Projects
  const projectsText = projectsList
    .map((p) => {
      const liveOrRepo = p.liveUrl || p.githubUrl || '';
      const linkStr = liveOrRepo ? ` (${liveOrRepo})` : '';
      const lines = [`• ${p.resumeTitle ?? p.title}${linkStr}`];
      p.technicalFeatures.forEach((feat) => {
        lines.push(`  - ${feat}`);
      });
      return lines.join('\n');
    })
    .join('\n\n');
  sections.push(`PROJECTS\n${projectsText}`);

  return sections.join('\n\n');
}
