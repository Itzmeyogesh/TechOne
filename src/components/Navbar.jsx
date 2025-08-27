import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const items = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'careers', label: 'Careers' },
  { id: 'media', label: 'Media' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() =>
    typeof window !== 'undefined' ? localStorage.getItem('theme') === 'dark' : false
  )

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 dark:bg-slate-900/60 border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg">
          <span className="text-cyan-400">Technical</span> One
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {items.map(item => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-cyan-400">
              {item.label}
            </a>
          ))}
          <button
            onClick={() => setDark(d => !d)}
            className="rounded-xl border px-3 py-1 text-sm hover:bg-white/40 dark:hover:bg-white/10"
          >
            {dark ? 'Light' : 'Dark'}
          </button>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(o => !o)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white/70 dark:bg-slate-900/70">
          {items.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => setDark(d => !d)}
            className="rounded-xl border px-3 py-1 text-sm hover:bg-white/40 dark:hover:bg-white/10"
          >
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>
      )}
    </header>
  )
}
