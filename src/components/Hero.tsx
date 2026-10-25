import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { useInView } from '../hooks/useInView'

export default function Hero() {
  const { t } = useTranslation()
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section 
      id="top" 
      ref={ref} 
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-indigo-50/50 via-white to-purple-50/30 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 text-neutral-800 dark:text-white px-6 pt-20"
    >
      {/* Các mảng màu nền mềm mại, uyển chuyển phía sau */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-300/30 to-pink-300/30 dark:from-indigo-600/10 dark:to-purple-600/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge trạng thái nhỏ xinh, bo tròn mềm */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-white/5 border border-indigo-100 dark:border-white/10 shadow-sm backdrop-blur-md mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-medium text-neutral-600 dark:text-neutral-300">
              Sẵn sàng kết nối cơ hội mới ✨
            </span>
          </div>

          {/* Lời chào */}
          <p className="text-sm md:text-base font-medium text-indigo-600 dark:text-indigo-400 tracking-wide mb-3">
            {t('hero.greeting')} 👋
          </p>

          {/* Tên chính */}
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
            Vu Thien Lac
          </h1>

          {/* Chức danh với hiệu ứng màu gradient mượt mà */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 mb-6">
            {t('hero.role')}
          </h2>

          {/* Đoạn giới thiệu ngắn gọn, dễ đọc */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10">
            {t('hero.tagline') || 'Đam mê kiến tạo các hệ thống backend vững chắc, API tối ưu và những trải nghiệm web mượt mà, tinh tế.'}
          </p>

          {/* Nhóm nút bấm bo tròn, tương tác mượt */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-7 py-4 text-sm font-medium text-white shadow-lg shadow-indigo-600/25 transition-all duration-300 hover:bg-indigo-500 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
            >
              <span>{t('hero.viewProjects')}</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="/CV_VuThienLac.pdf"
              download
              className="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-7 py-4 text-sm font-medium text-neutral-700 dark:text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-neutral-50 dark:hover:bg-white/10 hover:-translate-y-0.5"
            >
              <span>{t('hero.downloadCv')}</span>
              <svg className="w-4 h-4 text-neutral-500 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}