import InstallCommand from '../components/InstallCommand.jsx'
import { tagline } from '../data/homePage.js'

function HeroSection({ phase }) {
  return (
    <section className="px-4 pb-14 pt-36 text-center sm:px-8 sm:pb-20 md:pt-28 lg:px-12 lg:pb-24 lg:pt-36">
      <div
        key={`badge-${phase.id}`}
        className="phase-fade mx-auto mb-8 inline-flex max-w-full flex-col overflow-hidden rounded-lg border border-[#292625] bg-white font-mono text-[10px] font-semibold uppercase tracking-[0.08em] sm:mb-10 sm:flex-row sm:text-xs"
      >
        <span className="bg-[#292625] px-4 py-2 text-white">{phase.status}</span>
        <span className="px-4 py-2 leading-5 text-[#49433f]">{phase.badge}</span>
      </div>

      <h1 className="mx-auto max-w-5xl text-3xl font-medium leading-[1.04] tracking-normal text-[#292625] sm:text-5xl lg:text-6xl">
        {tagline[0]}
        <span className="block">{tagline[1]}</span>
      </h1>

      <div key={`body-${phase.id}`} className="phase-fade">
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#756e68] sm:mt-6 sm:text-base sm:leading-7">
          {phase.description}
        </p>

        <InstallCommand command={phase.cta.value} />
      </div>
    </section>
  )
}

export default HeroSection
