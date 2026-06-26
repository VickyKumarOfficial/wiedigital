export type NavItem = {
  name: string
  href: string
}

export type CustomerLogo = {
  name: string
  src: string
  height: string
}

export type OutcomeStat = {
  label: string
  value: string
}

export type PathCard = {
  title: string
  eyebrow: string
  description: string
  href: string
  cta: string
  features: string[]
}

export type ExperienceStep = {
  title: string
  description: string
  metric: string
}

export type PlatformFeature = {
  title: string
  description: string
}

export const navItems: NavItem[] = [
  { name: 'Students', href: '/students' },
  { name: 'Institutions', href: '/institutions' },
  { name: 'Platform', href: '/platform' },
  { name: 'Programs', href: '/programs' },
  { name: 'About', href: '/about' },
]

export const valuePoints = ['Hands-on curriculum', 'AI-first learning paths', 'LMS/KMS-powered delivery']

export const pathCards: PathCard[] = [
  {
    title: 'Websites & Apps',
    eyebrow: 'Digital presence',
    description: 'Launch fast, responsive websites and apps that present your business clearly and convert visitors into customers.',
    href: '/students',
    cta: 'Start Building',
    features: ['Responsive web design', 'Custom app development', 'Conversion-ready pages'],
  },
  {
    title: 'SEO & Social Media',
    eyebrow: 'Online growth',
    description: 'Improve discoverability, manage social handles, and build a consistent brand presence across digital channels.',
    href: '/institutions',
    cta: 'Grow Online',
    features: ['SEO strategy', 'Social media handles', 'Digital brand support'],
  },
]

export const learningExperience: ExperienceStep[] = [
  {
    title: 'Consult',
    description: 'We understand your business, audience, goals and digital gaps before shaping the right plan.',
    metric: '01',
  },
  {
    title: 'Design',
    description: 'We craft clean, responsive experiences that make your brand clear, credible and easy to use.',
    metric: '02',
  },
  {
    title: 'Build & Launch',
    description: 'We develop, test and launch your digital presence with SEO and growth foundations in place.',
    metric: '03',
  },
]

export const platformFeatures: PlatformFeature[] = [
  {
    title: 'Curriculum modules',
    description: 'Organize class-wise content, lessons and assignments into repeatable learning flows.',
  },
  {
    title: 'Student analytics',
    description: 'Track participation, completion and growth signals without overwhelming teachers.',
  },
  {
    title: 'Resource library',
    description: 'Manage reusable content, notes and institutional knowledge in one searchable space.',
  },
  {
    title: 'Classroom management',
    description: 'Support batches, learner groups and delivery workflows for schools and centers.',
  },
]

export const outcomeStats: OutcomeStat[] = [
  { value: 'Classes 6-12', label: 'student programs' },
  { value: 'AI + CS + IT + IP', label: 'curriculum focus' },
  { value: 'Project-based', label: 'learning model' },
  { value: 'LMS/KMS ready', label: 'institution stack' },
]

export const customerLogos: CustomerLogo[] = [
  { name: 'Nvidia', src: 'https://html.tailus.io/blocks/customers/nvidia.svg', height: 'h-5' },
  { name: 'Column', src: 'https://html.tailus.io/blocks/customers/column.svg', height: 'h-4' },
  { name: 'GitHub', src: 'https://html.tailus.io/blocks/customers/github.svg', height: 'h-4' },
  { name: 'Nike', src: 'https://html.tailus.io/blocks/customers/nike.svg', height: 'h-5' },
  {
    name: 'Lemon Squeezy',
    src: 'https://html.tailus.io/blocks/customers/lemonsqueezy.svg',
    height: 'h-5',
  },
  { name: 'Laravel', src: 'https://html.tailus.io/blocks/customers/laravel.svg', height: 'h-4' },
  { name: 'Lilly', src: 'https://html.tailus.io/blocks/customers/lilly.svg', height: 'h-7' },
  { name: 'OpenAI', src: 'https://html.tailus.io/blocks/customers/openai.svg', height: 'h-6' },
]

export const heroImages = {
  background:
    'https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120',
  dashboard: 'https://tailark.com//_next/image?url=%2Fmail2.png&w=3840&q=75',
}
