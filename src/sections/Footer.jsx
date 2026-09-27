import { brandName, tagline } from '../data/homePage.js'

function Footer({ phase }) {
  const [textBefore, command, textAfter] = phase.footerText

  return (
    <footer className="mx-auto max-w-6xl px-4 pb-8 sm:px-8 sm:pb-10 lg:px-12">
      <div className="border border-[#e8e2da]">
        <div key={phase.id} className="phase-fade grid lg:grid-cols-[1.2fr_1fr]">
          <div className="border-b border-[#e8e2da] p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <h2 className="text-2xl font-medium leading-tight text-[#292625] sm:text-4xl">
              {phase.footerHeading}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-[#756e68] sm:text-base">
              {textBefore}
              <span className="font-mono">{command}</span>
              {textAfter}
            </p>
          </div>

          <div className="grid sm:grid-cols-2">
            {phase.footerGroups.map((group) => (
              <div key={group.title} className="border-b border-[#e8e2da] p-6 sm:border-r">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#8a827b]">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-[#49433f]">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#e8e2da] p-6 font-mono text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-[#8a827b] sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <span>{brandName}</span>
          <span>{tagline.join(' ')}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
