import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Benelli Owners Club - KnowledgeBase</span>,
  project: {
    link: 'https://github.com/mi-hol/boc-kb-v2',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'License: CC BY-NC-ND 4.0 {new Date().getFullYear()} © Errol Kowald, Michael Holzer.',
  },
}

export default config
