import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'

export default function App() {
  const { t } = useTranslation()
  return (
    <>
      <Navbar />
      <main id="top" className="grid min-h-screen place-items-center px-6">
        <div className="text-center">
          <p className="font-mono text-sm text-accent">{t('hero.greeting')}</p>
          <h1 className="mt-2 text-5xl font-bold">Vu Thien Lac</h1>
          <p className="mt-4 opacity-70">{t('hero.role')}</p>
        </div>
      </main>
    </>
  )
}