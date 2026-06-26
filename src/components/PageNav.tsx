import { Link, NavLink } from 'react-router-dom'
import logoDark from '../assets/logo_Dark.png'
import { navItems } from '../data/home'

function Logo() {
  return (
    <img className="h-8 w-auto" src={logoDark} alt="WeDigitize" />
  )
}

export default function PageNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#050507]/80 backdrop-blur-xl">
      <nav className="mx-auto flex min-h-16 w-[min(100%-1.5rem,76rem)] items-center justify-between gap-6" aria-label="Page navigation">
        <Link to="/" aria-label="WeDigitize home">
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
          Book Consultation
        </Link>
      </nav>
    </header>
  )
}
