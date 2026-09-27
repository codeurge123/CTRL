export const brandName = 'CTRL'

export const tagline = ['Tell your computer.', `Let ${brandName} handle the rest.`]

export const githubUrl = 'https://github.com/codeurge123/CTRL'

export const phaseOrder = ['cli', 'desktop']

export const phases = {
  cli: {
    id: 'cli',
    step: 'Phase 1',
    label: 'CLI',
    status: 'Public launch · Diwali 2026',
    badge: 'CTRL CLI is launching as an open-source AI runtime',
    description:
      'Start from the terminal. Pick a provider, then chat or hand CTRL one focused task at a time — the same runtime will power the desktop app next.',
    cta: {
      type: 'command',
      value: 'curl request here',
      label: 'Install',
    },
    previewAlt: 'Mountain landscape behind the CTRL command box',
    previewLines: [
      ['ctrl init', 'select your provider and save local config'],
      ['ctrl chat', 'open a live conversation with your LLM'],
      ['ctrl run "<cmd>"', 'send one focused task from the terminal'],
      ['ctrl --help', 'see every CTRL command before you start'],
    ],
    featureRows: [
      ['ctrl init', 'Choose OpenAI mini or Ollama'],
      ['ctrl chat', 'Start an interactive LLM session'],
      ['ctrl run "<cmd>"', 'Run one focused task from the terminal'],
    ],
    footerHeading: 'Built for the command line first.',
    footerText: [
      'Configure once with ',
      'ctrl init',
      ', then chat or run tasks with your selected provider.',
    ],
    footerGroups: [
      {
        title: 'Runtime',
        items: ['Agent core', 'Providers', 'Tools', 'Memory'],
      },
      {
        title: 'Commands',
        items: ['init', 'chat', 'run', '--help'],
      },
      {
        title: 'Providers',
        items: ['OpenAI mini', 'Ollama', 'More soon'],
      },
      {
        title: 'Project',
        items: ['Docs', 'GitHub', 'Changelog'],
      },
    ],
  },
  desktop: {
    id: 'desktop',
    step: 'Phase 2',
    label: 'Desktop',
    status: 'Coming next',
    badge: 'CTRL Desktop follows the CLI launch',
    description:
      'A native app on top of the same runtime. Summon CTRL from anywhere, describe what you need in plain words, and watch it get done.',
    cta: {
      type: 'download',
      value: 'macOS · Windows · Linux',
      label: 'Coming soon',
    },
  },
}

export const companyStats = [
  ['2', 'Launch phases'],
  ['4+', 'Providers in launch scope'],
  ['Diwali 2026', 'Public CLI launch target'],
  ['100%', 'Open-source runtime focus'],
]
