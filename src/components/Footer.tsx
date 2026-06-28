import { Link } from 'react-router-dom'
import logoDark from '../assets/logo_Dark.png'

const footerColumns = [
  {
    title: 'Pages',
    links: [
      { label: 'Websites & Apps', href: '/websites' },
      { label: 'Growth Services', href: '/growth' },
      { label: 'Workflow', href: '/platform' },
      { label: 'Services', href: '/programs' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
  {
    title: 'Get Started',
    links: [
      { label: 'Book Consultation', href: '/contact' },
      { label: 'Request Quote', href: '/contact' },
      { label: 'Explore Services', href: '/programs' },
    ],
  },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <path d="M14 8.5h2V5h-2.7C10.4 5 8.5 6.9 8.5 9.8V12H6v3.5h2.5V23H12v-7.5h3l.5-3.5H12V9.9c0-.9.6-1.4 2-1.4Z" />
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <>
        <rect width="14" height="14" x="5" y="5" rx="4" />
        <circle cx="12" cy="12" r="3.2" />
        <circle cx="16.5" cy="7.5" r="0.8" />
      </>
    ),
  },
  {
    label: 'Twitter',
    href: '#',
    icon: <path d="M5 6h4.2l3.1 4 3.5-4H20l-5.8 6.6L20.4 20h-4.2l-3.5-4.5L8.8 20H4.6l6.2-7Z" />,
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <>
        <path d="M6.5 10H10v10H6.5zM8.2 8.5A2 2 0 1 0 8.2 4.5a2 2 0 0 0 0 4Z" />
        <path d="M12 10h3.3v1.4c.6-.9 1.6-1.7 3.2-1.7 2.4 0 4 1.6 4 4.7V20H19v-5c0-1.4-.6-2.2-1.8-2.2-1.1 0-1.8.8-1.8 2.2v5H12z" />
      </>
    ),
  },
]

function FooterLogo() {
  return (
    <img className="h-10 w-auto" src={logoDark} alt="WeDigitize" />
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#050507] tracking-[0.01em]">
      <div className="relative z-10 mx-auto grid w-[min(100%-2rem,76rem)] gap-12 pt-20 pb-56 md:grid-cols-[1.05fr_1.6fr] md:pt-24 md:pb-64">
        <div>
          <FooterLogo />
          <p className="mt-6 text-sm text-zinc-500">© copyright WeDigitize {new Date().getFullYear()}. All rights reserved.</p>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Social Media Handles</p>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/[0.12] bg-white text-[#050507] transition hover:-translate-y-0.5 hover:bg-zinc-200"
                  href={social.href}
                  key={social.label}
                  aria-label={social.label}
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-9 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="text-sm font-bold text-white">{column.title}</h2>
                <ul className="mt-5 grid gap-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link className="text-sm text-white transition hover:text-violet-100" to={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-[22px] select-none text-center text-[18vw] font-black leading-none tracking-[-0.05em] text-white/[0.045]"
        aria-hidden="true"
      >
        WeDigitize.
      </div>
    </footer>
  )
}
