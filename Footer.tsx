import { Link } from 'react-router-dom'
import { Leaf, ShieldCheck } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-24 bg-forest-900 text-leaf-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-leaf-500 text-forest-900">
              <Leaf size={20} aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-bold text-white">Food Waste Rescue</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-leaf-200">
            Connecting surplus food with people who need it, one meal at a time.
          </p>
          <p className="mt-6 flex max-w-sm items-start gap-2 text-xs text-leaf-200">
            <ShieldCheck size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
            Listing food here does not make it safe. Providers and recipients must follow all
            applicable food-safety rules.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-white" to="/find-food">Find Food</Link></li>
            <li><Link className="hover:text-white" to="/donate">Donate Food</Link></li>
            <li><Link className="hover:text-white" to="/impact">Impact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">Company</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-white" to="/about">About Us</Link></li>
            <li><Link className="hover:text-white" to="/contact">Contact</Link></li>
            <li><Link className="hover:text-white" to="/contact">Report an Issue</Link></li>
            <li><Link className="hover:text-white" to="/login">Log in</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-leaf-200">
        © {new Date().getFullYear()} Food Waste Rescue — a college mini-project.
      </div>
    </footer>
  )
}
