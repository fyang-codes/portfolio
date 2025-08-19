import { PropsWithChildren } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function RootLayout(_props: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" aria-label="Home">
            <span className="inline-block h-8 w-8 rounded bg-brand-600 text-white grid place-items-center font-bold">A</span>
            <span className="font-semibold tracking-tight">Aerospace HCD</span>
          </Link>
          <nav aria-label="Primary" className="hidden sm:block">
            <ul className="flex items-center gap-6">
              <li>
                <NavLink to="/" end className={({ isActive }) => `text-sm font-medium hover:text-brand-700 ${isActive ? 'text-brand-700' : 'text-slate-700'}`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className={({ isActive }) => `text-sm font-medium hover:text-brand-700 ${isActive ? 'text-brand-700' : 'text-slate-700'}`}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/resume" className={({ isActive }) => `text-sm font-medium hover:text-brand-700 ${isActive ? 'text-brand-700' : 'text-slate-700'}`}>
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => `text-sm font-medium hover:text-brand-700 ${isActive ? 'text-brand-700' : 'text-slate-700'}`}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-slate-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Aerospace Human-Centered Designer</p>
          <div className="flex items-center gap-4">
            <a href="mailto:designer@example.com" className="hover:text-brand-700">designer@example.com</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-brand-700">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}


