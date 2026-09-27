import { Link } from 'react-router-dom'
import PhaseSwitch from '../components/PhaseSwitch.jsx'
import { brandName, githubUrl } from '../data/homePage.js'

function Header({ activePhase, onPhaseChange, onDocsClick }) {
  return (
    <header className="fixed left-1/2 top-0 z-50 w-full max-w-7xl -translate-x-1/2 bg-[#fbfaf7]/35 backdrop-blur-2xl">
      <div className="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-3 px-5 py-4 sm:px-8 md:grid-cols-[1fr_auto_1fr] lg:px-12">
        <div className="flex items-center gap-3">
          <span className="font-mono text-base font-semibold uppercase tracking-[0.16em] sm:text-lg">
            {brandName}
          </span>
        </div>

        <div className="order-last col-span-2 justify-self-center md:order-none md:col-span-1">
          <PhaseSwitch activePhase={activePhase} onChange={onPhaseChange} compact />
        </div>

        <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#49433f] sm:text-xs md:gap-10">
          <button type="button" onClick={onDocsClick} className="cursor-pointer uppercase">
            Docs
          </button>
          <Link
            to={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
