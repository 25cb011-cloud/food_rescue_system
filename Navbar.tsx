import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Leaf, Menu, X } from 'lucide-react'

// The links shown in the top bar. Add or remove items here to change the menu.
const links = [
  { to: '/', label: 'Home' },
  { to: '/find-food', label: 'Find Food' },
  { to: '/donate', label: 'Donate Food' },
  { to: '/impact', label: 'Impact' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  // "open" remembers whether the phone menu is showing.
  const [open, setOpen] = useState(false)

  // NavLink gives us "isActive" so the current page can be highlighted.
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-leaf-100 text-forest-800'
        : 'text-ink/80 hover:bg-leaf-50 hover:text-forest-800'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-leaf-200/60 bg-cream-50/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3" aria-label="Main">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest-700 text-white">
            <Leaf size={20} aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-bold text-forest-800">Food Waste Rescue</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/login"
            className="rounded-full px-4 py-2 text-sm font-semibold text-forest-800 hover:bg-leaf-50"
          >
            Log in
          </Link>
          <Link
            to="/login"
            className="rounded-full bg-forest-700 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-forest-800"
          >
            Sign up
          </Link>
        </div>

        {/* Phone menu button */}
        <button
          type="button"
          className="rounded-lg p-2 text-forest-800 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Phone menu panel */}
      {open && (
        <div className="border-t border-leaf-200/60 bg-cream-50 px-4 pb-4 lg:hidden">
          <div className="flex flex-col gap-1 pt-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-forest-700 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Log in / Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
