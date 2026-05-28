export type Program = {
  title: string
  level: string
  outcome: string
  description: string
}

export const programs: Program[] = [
  {
    title: 'Tracks for Classes 6-12',
    level: 'Beginner to advanced school tracks',
    outcome: 'Build AI literacy through prompts, models, automation and responsible use.',
    description: 'A practical AI pathway for students to understand modern tools and create useful projects.',
  },
  {
    title: 'Interactive Playgrounds',
    level: 'Hands-on practice spaces',
    outcome: 'Experiment with prompts, code, logic and classroom challenges in guided live environments.',
    description: 'Interactive sandboxes where students can test ideas, break concepts apart and learn by doing.',
  },
  {
    title: 'Visualization Tools',
    level: 'Concept mapping and data views',
    outcome: 'Turn abstract topics, workflows and progress signals into clear visual learning experiences.',
    description: 'Visual tools that help students understand systems, patterns, data and project flow with more clarity.',
  },
  {
    title: 'Resource Managements',
    level: 'Content and classroom assets',
    outcome: 'Organize lessons, references, assignments and reusable learning materials in one structured layer.',
    description: 'A practical resource layer for managing curriculum assets, classroom references and repeatable delivery.',
  },
]
