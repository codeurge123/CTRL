function ComingSoonSection({ badge, title, description, backLabel, onBack, children }) {
  return (
    <section className="phase-fade grid min-h-[calc(100vh-1.5rem)] place-items-center px-4 pb-14 pt-28 text-center sm:min-h-[calc(100vh-2.5rem)] sm:px-8 lg:px-12">
      <div className="w-full">
        <div className="mx-auto mb-8 inline-flex max-w-full flex-col overflow-hidden rounded-lg border border-[#292625] bg-white font-mono text-[10px] font-semibold uppercase tracking-[0.08em] sm:mb-10 sm:flex-row sm:text-xs">
          <span className="bg-[#292625] px-4 py-2 text-white">{badge[0]}</span>
          <span className="px-4 py-2 leading-5 text-[#49433f]">{badge[1]}</span>
        </div>

        <h1 className="mx-auto max-w-5xl text-4xl font-medium leading-[1.04] tracking-normal text-[#292625] sm:text-6xl lg:text-7xl">
          {title}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#756e68] sm:mt-6 sm:text-base sm:leading-7">
          {description}
        </p>

        {children}

        <button
          type="button"
          onClick={onBack}
          className="mt-8 cursor-pointer font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#49433f] underline underline-offset-4 hover:text-[#dd765d] sm:text-xs"
        >
          {backLabel}
        </button>
      </div>
    </section>
  )
}

export default ComingSoonSection
