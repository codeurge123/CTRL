function DownloadButton({ platforms, label }) {
  return (
    <div className="mx-auto mt-8 max-w-2xl rounded-xl border-2 border-[#dd765d] bg-white p-3 text-left shadow-[0_24px_80px_rgba(41,38,37,0.08)] sm:mt-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="px-2 py-2">
          <p className="text-sm font-medium text-[#292625] sm:text-base">CTRL Desktop</p>
          <p className="mt-0.5 font-mono text-[11px] text-[#8a827b] sm:text-xs">{platforms}</p>
        </div>
        <span
          aria-disabled="true"
          className="w-full rounded-lg border border-[#dd765d] px-3.5 py-2 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-[#dd765d] sm:w-auto"
        >
          {label}
        </span>
      </div>
    </div>
  )
}

export default DownloadButton
