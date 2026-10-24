import { Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

// A temporary page for sections we build in later stages.
// It is honest about it: it says which stage will add the real page.
function ComingLater({ title, stage }: { title: string; stage: string }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-bold text-forest-800">{title}</h1>
      <p className="mt-4 text-lg text-ink/70">
        This page is built in {stage}. It is intentionally not finished yet.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-full bg-forest-700 px-6 py-3 font-semibold text-white hover:bg-forest-800"
      >
        Back to Home
      </Link>
    </section>
  )
}

// Each <Route> says: "when the web address is X, show page Y".
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/find-food" element={<ComingLater title="Find Food" stage="Stage 2" />} />
        <Route path="/food/:id" element={<ComingLater title="Food Details" stage="Stage 2" />} />
        <Route path="/donate" element={<ComingLater title="Donate Food" stage="Stage 3" />} />
        <Route path="/login" element={<ComingLater title="Login & Register" stage="Stage 5" />} />
        <Route path="/dashboard/recipient" element={<ComingLater title="Recipient Dashboard" stage="Stage 6" />} />
        <Route path="/dashboard/provider" element={<ComingLater title="Provider Dashboard" stage="Stage 6" />} />
        <Route path="/dashboard/admin" element={<ComingLater title="Admin Dashboard" stage="Stage 6" />} />
        <Route path="/impact" element={<ComingLater title="Impact Dashboard" stage="Stage 6" />} />
        <Route path="/about" element={<ComingLater title="About Us" stage="Stage 2" />} />
        <Route path="/contact" element={<ComingLater title="Contact & Report an Issue" stage="Stage 2" />} />
        <Route path="*" element={<ComingLater title="Page not found" stage="no stage (this link does not exist)" />} />
      </Route>
    </Routes>
  )
}
