import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { phases } from './data/homePage.js'
import DownloadButton from './components/DownloadButton.jsx'
import CommandPreviewSection from './sections/CommandPreviewSection.jsx'
import ComingSoonSection from './sections/ComingSoonSection.jsx'
import CompanyStatsSection from './sections/CompanyStatsSection.jsx'
import Footer from './sections/Footer.jsx'
import Header from './sections/Header.jsx'
import HeroSection from './sections/HeroSection.jsx'

function App() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activePhaseId = phases[searchParams.get('phase')] ? searchParams.get('phase') : 'cli'
  const activePhase = phases[activePhaseId]
  const isDocs = searchParams.get('page') === 'docs'
  const cliPhase = phases.cli

  const [activeLineIndex, setActiveLineIndex] = useState(0)
  const lines = cliPhase.previewLines
  const activeLine = lines[activeLineIndex % lines.length]

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveLineIndex((currentIndex) => (currentIndex + 1) % lines.length)
    }, 3600)

    return () => window.clearInterval(intervalId)
  }, [lines])

  const handlePhaseChange = (phaseId) => {
    if (phaseId === activePhaseId && !isDocs) return
    setActiveLineIndex(0)
    setSearchParams(phaseId === 'cli' ? {} : { phase: phaseId }, { replace: true })
    window.scrollTo({ top: 0 })
  }

  const handleDocsClick = () => {
    setSearchParams({ page: 'docs' }, { replace: true })
    window.scrollTo({ top: 0 })
  }

  return (
    <main className="min-h-screen bg-[#fbfaf7] px-3 py-3 text-[#292625] sm:px-6 sm:py-5 lg:px-8">
      <div className="mx-auto max-w-7xl border-x border-[#e8e2da]">
        <Header
          activePhase={activePhaseId}
          onPhaseChange={handlePhaseChange}
          onDocsClick={handleDocsClick}
        />
        {isDocs ? (
          <ComingSoonSection
            badge={['In progress', 'CTRL docs are being written']}
            title="Docs are in progress."
            description="We're writing guides for setup, providers and every CTRL command. They'll be ready before the public CLI launch around Diwali 2026."
            backLabel="Back to CTRL →"
            onBack={() => handlePhaseChange('cli')}
          />
        ) : activePhaseId === 'cli' ? (
          <>
            <HeroSection phase={cliPhase} />
            <CommandPreviewSection phase={cliPhase} activeLine={activeLine} />
            <CompanyStatsSection />
            <Footer phase={cliPhase} />
          </>
        ) : (
          <ComingSoonSection
            badge={[`${activePhase.step} · ${activePhase.status}`, activePhase.badge]}
            title={`${activePhase.label} is coming soon.`}
            description={activePhase.description}
            backLabel="Try the CLI today →"
            onBack={() => handlePhaseChange('cli')}
          >
            <DownloadButton platforms={activePhase.cta.value} label={activePhase.cta.label} />
          </ComingSoonSection>
        )}
      </div>
    </main>
  )
}

export default App
