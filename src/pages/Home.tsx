import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-50 to-white" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Human-Centered Designer for Aerospace & Complex Systems
            </h1>
            <p className="mt-6 text-lg text-slate-700">
              I design mission-critical tools, interfaces, and services that help operators make confident decisions in complex, high-stakes environments.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/projects" className="inline-flex items-center rounded bg-brand-600 px-4 py-2 text-white hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2">
                View Projects
              </Link>
              <Link to="/contact" className="inline-flex items-center rounded border border-slate-300 px-4 py-2 text-slate-800 hover:border-brand-600 hover:text-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="featured-projects" className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
        <div className="flex items-end justify-between gap-4">
          <h2 id="featured-projects" className="text-2xl font-semibold">Featured Projects</h2>
          <Link to="/projects" className="text-sm text-brand-700 hover:underline">See all</Link>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Flight Deck Decision Aid',
              desc: 'Reducing cognitive load for pilots during abnormal procedures.',
              img: 'https://placehold.co/800x500/png?text=Flight+Deck+Aid',
            },
            {
              title: 'Mission Planner',
              desc: 'Human-in-the-loop planning for autonomous systems.',
              img: 'https://placehold.co/800x500/png?text=Mission+Planner',
            },
            {
              title: 'Ops Dashboard',
              desc: 'Status at-a-glance across distributed assets.',
              img: 'https://placehold.co/800x500/png?text=Ops+Dashboard',
            },
          ].map((p) => (
            <article key={p.title} className="group rounded-lg border border-slate-200 overflow-hidden bg-white hover:shadow-md focus-within:shadow-md transition-shadow">
              <img src={p.img} alt="Placeholder for project visual" className="h-44 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                <Link to="/projects" className="mt-4 inline-flex text-sm text-brand-700 hover:underline">
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}


