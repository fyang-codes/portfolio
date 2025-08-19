type Project = {
  title: string
  role: string
  timeframe: string
  description: string
  imageUrl: string
}

const projects: Project[] = [
  {
    title: 'Flight Deck Decision Aid',
    role: 'Lead UX Designer',
    timeframe: '2023 — 2024',
    description:
      'Designed a context-aware checklist and alerting system that guides pilots through abnormal procedures, reducing time-to-action and improving comprehension in high workload phases.',
    imageUrl: 'https://placehold.co/1000x600/png?text=Flight+Deck+Decision+Aid',
  },
  {
    title: 'Mission Planner for Autonomous ISR',
    role: 'Design Researcher',
    timeframe: '2022 — 2023',
    description:
      'Led field research with operators to map mental models and pain points, then prototyped human-in-the-loop planning flows to increase trust and transparency in autonomy.',
    imageUrl: 'https://placehold.co/1000x600/png?text=Mission+Planner',
  },
  {
    title: 'Operations Situational Dashboard',
    role: 'Product Designer',
    timeframe: '2021 — 2022',
    description:
      'Created a resilient dashboard for distributed assets with progressive disclosure of detail, enabling faster triage and collaboration across roles.',
    imageUrl: 'https://placehold.co/1000x600/png?text=Operations+Dashboard',
  },
]

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="mt-4 text-slate-700">
          A selection of human-centered design work across aerospace and complex systems. Replace images and text with your own content.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <article key={project.title} className="rounded-lg border border-slate-200 overflow-hidden bg-white">
            <img src={project.imageUrl} alt="Placeholder for project visual" className="w-full h-64 object-cover" />
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600">
                <span className="font-medium text-slate-800">{project.role}</span>
                <span aria-hidden>•</span>
                <span>{project.timeframe}</span>
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h2>
              <p className="mt-3 text-slate-700">{project.description}</p>
              <div className="mt-4">
                <a href="#" className="text-brand-700 hover:underline">Case study coming soon</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}


