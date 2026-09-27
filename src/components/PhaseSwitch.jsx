import { phaseOrder, phases } from '../data/homePage.js'

function PhaseSwitch({ activePhase, onChange, compact = false }) {
  return (
    <div
      role="group"
      aria-label="Choose CTRL phase"
      className="inline-flex rounded-lg border border-[#292625] bg-white p-1 font-mono font-semibold uppercase"
    >
      {phaseOrder.map((id) => {
        const phase = phases[id]
        const isActive = id === activePhase

        return (
          <button
            key={id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(id)}
            className={`cursor-pointer rounded-md transition-colors ${
              compact
                ? 'px-3 py-1 text-[10px] tracking-[0.12em] sm:text-xs'
                : 'flex flex-col items-center px-4 py-2 sm:px-6'
            } ${
              isActive
                ? 'bg-[#292625] text-white'
                : 'text-[#49433f] hover:bg-[#f2eee8]'
            }`}
          >
            {compact ? (
              phase.label
            ) : (
              <>
                <span
                  className={`text-[9px] tracking-[0.16em] sm:text-[10px] ${
                    isActive ? 'text-[#dd765d]' : 'text-[#8a827b]'
                  }`}
                >
                  {phase.step}
                </span>
                <span className="text-xs tracking-[0.12em] sm:text-sm">{phase.label}</span>
              </>
            )}
          </button>
        )
      })}
    </div>
  )
}

export default PhaseSwitch
