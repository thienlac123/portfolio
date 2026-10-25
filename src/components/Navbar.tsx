import { useTranslation } from 'react-i18next'
import { useTheme } from '../hooks/useTheme'

const links = ['about', 'skills', 'projects', 'experience', 'contact'] as const

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const { theme, toggle } = useTheme()
  const isVi = i18n.language.startsWith('vi')

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-neutral-950/70">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm font-semibold">lac.dev</a>

        <ul className="hidden gap-8 text-sm md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} className="opacity-70 transition hover:opacity-100">
                {t(`nav.${l}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 text-sm">
          <button
            onClick={() => i18n.changeLanguage(isVi ? 'en' : 'vi')}
            className="rounded-md border border-black/10 px-3 py-1 font-mono dark:border-white/20"
            aria-label="Switch language"
          >
            {isVi ? 'EN' : 'VI'}
          </button>
          <button
            onClick={toggle}
            className="rounded-md border border-black/10 px-3 py-1 dark:border-white/20"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>
    </header>
  )
}