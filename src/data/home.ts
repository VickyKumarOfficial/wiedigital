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

export const navItems: NavItem[] = [
  { name: 'Features', href: '#features' },
  { name: 'Solution', href: '#solution' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
]

export const valuePoints = ['Hands-on curriculum', 'AI-first learning paths', 'LMS/KMS-powered delivery']

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
