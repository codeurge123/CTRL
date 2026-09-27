import { brandName, companyStats } from '../data/homePage.js'

function CompanyStatsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-8 sm:pb-20 lg:px-12">
      <div className="border border-[#e8e2da] bg-[#fbfaf7]">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {companyStats.map(([value, label]) => (
            <div
              key={label}
              className="border-b border-[#e8e2da] p-6 text-center sm:border-r sm:p-8 sm:even:border-r-0 lg:border-b-0 lg:even:border-r lg:last:border-r-0"
            >
              <p className="font-mono text-xl text-[#292625] sm:text-2xl">{value}</p>
              <p className="mt-3 text-sm leading-6 text-[#756e68]">{label}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-[#e8e2da] px-6 py-8 text-center">
          <p className="font-mono text-xs font-semibold uppercase leading-6 tracking-[0.12em] text-[#292625] sm:text-sm">
            {brandName} is a company building an open-source AI runtime, with the CLI going public around Diwali 2026.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CompanyStatsSection
