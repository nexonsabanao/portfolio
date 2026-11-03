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

  // Skills
  sections.push(
    `SKILLS\n` +
      `• Languages & Web: TypeScript, JavaScript, React, Tailwind CSS, Python, C++, Java, HTML5, CSS3, REST APIs, Vite\n` +
      `• Mobile & Cloud: Flutter, Dart, Kotlin, Android Studio (XML Layouts), Firebase Firestore\n` +
      `• Hardware & IoT: ESP32, Arduino (LilyGO TTGO T-SIM), STM32, Embedded C++, GSM Telemetry\n` +
      `• Productivity & Tools: Git, GitHub, Microsoft Excel (Data Management & Reporting), Word, Canva`
  );

  // Work Experience
  const experienceText = experience
    .map(
      (job) =>
        `${job.role} – ${job.company} (${job.startDate} - ${job.endDate})\n` +
        `${job.location}\n` +
        job.responsibilities.map((r) => `• ${r}`).join('\n')
    )
    .join('\n\n');
  sections.push(`WORK EXPERIENCE\n${experienceText}`);

  // Projects
  const projectsText = projectsList
    .map((p) => {
      const liveOrRepo = p.liveUrl || p.githubUrl || '';
      const linkStr = liveOrRepo ? ` (${liveOrRepo})` : '';
      const bullets = p.resumeBulletPoints ?? p.technicalFeatures;
      const lines = [`• ${p.resumeTitle ?? p.title}${linkStr}`];
      if (p.resumeTechStack) {
        lines.push(`  Stack: ${p.resumeTechStack}`);
      }
      bullets.forEach((feat) => {
        lines.push(`  - ${feat}`);
      });
      return lines.join('\n');
    })
    .join('\n\n');
  sections.push(`PROJECTS\n${projectsText}`);

  // Education
  sections.push(
    `EDUCATION\n` +
      `${profile.education.institution} – ${profile.education.degree} (${profile.education.graduationDate})` +
      (profile.education.location ? `\nLocation: ${profile.education.location}` : '')
  );

  return sections.join('\n\n');
}
