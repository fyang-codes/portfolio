export default function Contact() {
  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mt-3 text-slate-700">
        I’m available for projects and collaborations in aerospace and complex systems. Send a note and I’ll get back to you.
      </p>

      <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()} aria-labelledby="contact-form">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-800">Name</label>
          <input id="name" name="name" type="text" required className="mt-1 w-full rounded border border-slate-300 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-800">Email</label>
          <input id="email" name="email" type="email" required className="mt-1 w-full rounded border border-slate-300 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-800">Message</label>
          <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded border border-slate-300 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600" />
        </div>
        <button type="submit" className="inline-flex items-center rounded bg-brand-600 px-4 py-2 text-white hover:bg-brand-700">
          Send Message
        </button>
      </form>
    </div>
  )
}


