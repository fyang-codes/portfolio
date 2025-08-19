export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
          <p className="mt-2 text-slate-700 max-w-2xl">
            Human-centered designer focusing on aviation, space, and complex systems. I translate mission needs and operator insights into dependable interfaces and services.
          </p>
        </div>
        <a href="/resume.pdf" className="inline-flex items-center rounded bg-brand-600 px-3 py-2 text-white hover:bg-brand-700" download>
          Download PDF
        </a>
      </header>

      <section aria-labelledby="experience" className="mt-10">
        <h2 id="experience" className="text-xl font-semibold">Experience</h2>
        <div className="mt-4 space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Lead UX Designer — AeroTech Systems</h3>
              <span className="text-sm text-slate-600">2023 — Present</span>
            </div>
            <ul className="mt-2 list-disc pl-5 text-slate-700">
              <li>Designed decision aids for flight crews; decreased time-to-action by 18% in simulator studies.</li>
              <li>Ran formative studies with pilots and dispatchers across 5 airlines; synthesized into design principles.</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Design Researcher — Orbital Ops</h3>
              <span className="text-sm text-slate-600">2021 — 2023</span>
            </div>
            <ul className="mt-2 list-disc pl-5 text-slate-700">
              <li>Mapped workflows for satellite operations; introduced HCI patterns for anomaly response.</li>
              <li>Prototyped transparency features for autonomy; improved operator trust in evaluations.</li>
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="skills" className="mt-10">
        <h2 id="skills" className="text-xl font-semibold">Skills</h2>
        <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
          <li>Design research (contextual inquiry, JTBD, card sorts)</li>
          <li>Information architecture & interaction design</li>
          <li>Prototyping (Figma, Framer)</li>
          <li>Systems thinking & service design</li>
          <li>Accessibility & inclusive design</li>
          <li>Workshop facilitation</li>
        </ul>
      </section>

      <section aria-labelledby="education" className="mt-10">
        <h2 id="education" className="text-xl font-semibold">Education</h2>
        <div className="mt-3 text-slate-700">
          M.S., Human-Computer Interaction — Institute of Aeronautics
        </div>
      </section>
    </div>
  )
}


