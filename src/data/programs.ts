export type Program = {
  title: string
  level: string
  outcome: string
  description: string
}

export const programs: Program[] = [
  {
    title: 'AI for Classes 6-12',
    level: 'Beginner to advanced school tracks',
    outcome: 'Build AI literacy through prompts, models, automation and responsible use.',
    description: 'A practical AI pathway for students to understand modern tools and create useful projects.',
  },
  {
    title: 'Computer Science',
    level: 'Core computing foundations',
    outcome: 'Strengthen logic, programming thinking, algorithms and computational problem solving.',
    description: 'Structured CS learning that balances fundamentals with hands-on implementation.',
  },
  {
    title: 'Information Technology',
    level: 'Digital systems and tools',
    outcome: 'Learn productivity systems, networks, web basics and applied technology workflows.',
    description: 'A real-world IT track designed around tools students can use and understand.',
  },
  {
    title: 'Informatics Practices',
    level: 'Data and application thinking',
    outcome: 'Practice data handling, databases, visualization and applied digital problem solving.',
    description: 'A focused IP program for students who need clarity, practice and project confidence.',
  },
]
