import { Link, NavLink } from 'react-router-dom'
import { navItems } from '../data/home'

function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5 font-bold tracking-normal text-white">
      <svg className="h-7 w-7 text-teal-300" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M8 5h4v22H8zM20 5h4v22h-4zM5 8h22v4H5zM5 20h22v4H5z" />
      </svg>
      <span>wielearn</span>
    </span>
  )
}

export default function PageNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#050507]/80 backdrop-blur-xl">
      <nav className="mx-auto flex min-h-16 w-[min(100%-1.5rem,76rem)] items-center justify-between gap-6" aria-label="Page navigation">
        <Link to="/" aria-label="wielearn home">
          <Logo />
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-white/65 lg:flex">
          {navItems.map((item) => (
            <NavLink className={({ isActive }) => (isActive ? 'text-white' : 'transition hover:text-white')} key={item.name} to={item.href}>
              {item.name}
            </NavLink>
          ))}
        </div>

        <Link className="rounded-full bg-white px-4 py-2 text-sm font-bold text-zinc-950 transition hover:bg-zinc-100" to="/contact">
          Get Started
        </Link>
      </nav>
    </header>
  )
}
