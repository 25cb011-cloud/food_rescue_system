import { Link } from 'react-router-dom'
import {
  ArrowRight, Utensils, ClipboardCheck, HandHeart, Clock, MapPin,
  Building2, Users, Recycle, ShieldCheck, Apple, Croissant, Package,
} from 'lucide-react'
import HeroIllustration from '../components/HeroIllustration'

// A small badge we reuse to clearly mark demonstration content.
function DemoBadge({ children = 'Demo data' }: { children?: string }) {
  return (
    <span className="inline-block rounded-full bg-cream-100 px-3 py-1 text-xs font-semibold text-forest-800 ring-1 ring-forest-700/20">
      {children}
    </span>
  )
}

// Sample listings for the home page only. Stage 2 replaces these with
// the shared demo-data file so every page shows the same listings.
const sampleListings = [
  { name: 'Vegetable Biryani', category: 'Vegetarian meals', qty: '25 meals', provider: 'Campus Canteen', place: 'Main Block, Ground Floor', deadline: 'Today, 8:00 PM', Icon: Utensils },
  { name: 'Assorted Fresh Fruit', category: 'Fruits', qty: '12 kg', provider: 'Green Mart', place: 'Market Road', deadline: 'Today, 6:30 PM', Icon: Apple },
  { name: 'Bread & Buns', category: 'Bakery products', qty: '40 pieces', provider: 'Sunrise Bakery', place: 'Station Street', deadline: 'Today, 9:00 PM', Icon: Croissant },
]

const steps = [
  { Icon: Utensils, title: 'Providers post surplus', text: 'Canteens, bakeries and restaurants list extra food with a quantity, location and pickup deadline.' },
  { Icon: ClipboardCheck, title: 'Recipients request', text: 'NGOs and authorised recipients browse what is available and request the quantity they can collect.' },
  { Icon: HandHeart, title: 'Collect before the deadline', text: 'The provider approves the request, the food is collected, and the rescue is recorded.' },
]

const demoStats = [
  { value: '1,240', label: 'Meals rescued' },
  { value: '86', label: 'Collections completed' },
  { value: '32', label: 'Active providers' },
  { value: '18', label: 'Partner NGOs' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="animate-fade-up">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-leaf-100 px-4 py-1.5 text-sm font-semibold text-forest-800">
              <Recycle size={16} aria-hidden="true" /> Food Waste Rescue
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-forest-900 sm:text-5xl lg:text-6xl">
              Rescue Food. Reduce Waste. Feed Hope.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink/75">
              Connecting surplus food with people who need it, one meal at a time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/find-food"
                className="inline-flex items-center gap-2 rounded-full bg-forest-700 px-6 py-3.5 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-forest-800"
              >
                Find Available Food <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 rounded-full border-2 border-forest-700 bg-white px-6 py-3.5 font-semibold text-forest-800 transition hover:-translate-y-0.5 hover:bg-leaf-50"
              >
                Donate Surplus Food
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md animate-fade-up md:max-w-none" style={{ animationDelay: '0.15s' }}>
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-forest-900">Good food should never go to waste</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">
            Every day, canteens, hostels, bakeries and events prepare more food than they can serve.
            Perfectly good meals are thrown away while people nearby go hungry. The gap is not food
            — it is the quick link between those who have extra and those who can use it. Food Waste
            Rescue closes that gap with a simple, time-limited sharing workflow.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-4 py-20" aria-labelledby="how-title">
        <h2 id="how-title" className="text-center font-display text-3xl font-bold text-forest-900">How it works</h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(({ Icon, title, text }, i) => (
            <li key={title} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-leaf-200/70 transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-100 text-forest-700">
                  <Icon aria-hidden="true" />
                </span>
                <span className="font-display text-3xl font-bold text-leaf-500">{i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-forest-900">{title}</h3>
              <p className="mt-2 text-ink/70">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="bg-leaf-50 py-20" aria-labelledby="featured-title">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="featured-title" className="font-display text-3xl font-bold text-forest-900">Featured food listings</h2>
              <div className="mt-2"><DemoBadge>Sample listings — demonstration only</DemoBadge></div>
            </div>
            <Link to="/find-food" className="inline-flex items-center gap-1 font-semibold text-forest-700 hover:underline">
              See all food <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {sampleListings.map(({ name, category, qty, provider, place, deadline, Icon }) => (
              <article key={name} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-leaf-200/70 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-36 items-center justify-center bg-gradient-to-br from-leaf-100 to-leaf-200 text-forest-700">
                  <Icon size={48} aria-hidden="true" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-leaf-500">{category}</p>
                  <h3 className="mt-1 text-xl font-bold text-forest-900">{name}</h3>
                  <p className="mt-1 text-sm text-ink/70">{qty} available · {provider}</p>
                  <p className="mt-3 flex items-center gap-2 text-sm text-ink/70"><MapPin size={16} aria-hidden="true" />{place}</p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-ink/70"><Clock size={16} aria-hidden="true" />Pickup by {deadline}</p>
                  <Link to="/find-food" className="mt-5 inline-block rounded-full bg-forest-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-forest-800">
                    View food
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="mx-auto max-w-6xl px-4 py-20" aria-labelledby="impact-title">
        <div className="text-center">
          <h2 id="impact-title" className="font-display text-3xl font-bold text-forest-900">Our impact</h2>
          <div className="mt-2"><DemoBadge>Demonstration statistics — not real records</DemoBadge></div>
        </div>
        <dl className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {demoStats.map((s) => (
            <div key={s.label} className="rounded-3xl bg-forest-800 p-6 text-center text-white">
              <dd className="font-display text-4xl font-bold">{s.value}</dd>
              <dt className="mt-1 text-sm text-leaf-200">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* BENEFITS */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
          <div className="rounded-3xl bg-leaf-50 p-8">
            <Building2 className="text-forest-700" aria-hidden="true" />
            <h3 className="mt-4 font-display text-2xl font-bold text-forest-900">For food providers</h3>
            <ul className="mt-4 space-y-2 text-ink/75">
              <li>• Post surplus in under a minute</li>
              <li>• Approve requests and control who collects</li>
              <li>• Track every rescue in your donation history</li>
              <li>• Spend less on waste and do more good</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-cream-100 p-8">
            <Users className="text-forest-700" aria-hidden="true" />
            <h3 className="mt-4 font-display text-2xl font-bold text-forest-900">For recipients &amp; NGOs</h3>
            <ul className="mt-4 space-y-2 text-ink/75">
              <li>• See what food is available nearby, right now</li>
              <li>• Request exactly the quantity you can collect</li>
              <li>• Clear pickup places and deadlines</li>
              <li>• Keep a history of your collections</li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-8 flex max-w-3xl items-start gap-2 px-4 text-sm text-ink/70">
          <ShieldCheck size={18} className="mt-0.5 shrink-0 text-forest-700" aria-hidden="true" />
          Food safety: a listing is not a guarantee that food is safe. Providers and recipients must
          follow all applicable food-safety requirements, check preparation times and storage, and
          collect before the pickup deadline.
        </p>
      </section>

      {/* CALL TO ACTION */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-br from-forest-800 to-forest-600 px-6 py-14 text-center text-white shadow-lg">
          <Package className="mx-auto" aria-hidden="true" />
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Ready to rescue some food?</h2>
          <p className="mx-auto mt-3 max-w-xl text-leaf-100">
            Join as a provider or a recipient and turn today's surplus into tonight's meal.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/login" className="rounded-full bg-white px-6 py-3 font-semibold text-forest-800 hover:bg-cream-100">
              Create an account
            </Link>
            <Link to="/find-food" className="rounded-full border-2 border-white/70 px-6 py-3 font-semibold text-white hover:bg-white/10">
              Browse food
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
