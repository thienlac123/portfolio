import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-indigo-50/50 via-white to-purple-50/30 px-6 pt-20 text-neutral-800 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 dark:text-white"
    >
      {/* Mảng màu nền tĩnh phía sau */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-indigo-300/30 to-pink-300/30 blur-3xl dark:from-indigo-600/10 dark:to-purple-600/10"
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-neutral-600 dark:text-neutral-300">
              {t('hero.badge')}
            </span>
          </div>

          <p className="mb-3 text-sm font-medium tracking-wide text-indigo-600 dark:text-indigo-400 md:text-base">
            {t('hero.greeting')} 👋
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-7xl">
            Vu Thien Lac
          </h1>

          <h2 className="mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-2xl font-semibold text-transparent dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 sm:text-3xl">
            {t('hero.role')}
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
            {t('hero.tagline')}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-7 py-4 text-sm font-medium text-white shadow-lg shadow-indigo-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-indigo-500/40"
            >
              <span>{t('hero.viewProjects')}</span>
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="/CV_VuThienLac.pdf"
              download
              className="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white/80 px-7 py-4 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <span>{t('hero.downloadCv')}</span>
              <svg className="h-4 w-4 text-neutral-500 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}