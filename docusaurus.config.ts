import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'envguard',
  tagline: 'Zod-powered environment validation for Node.js',
  favicon: 'img/favicon.ico',
  url: 'https://envguard.dev',
  baseUrl: '/',
  organizationName: 'fixedbydev',
  projectName: 'envguard-docs',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  presets: [
    [
      'classic',
      {
        docs: { sidebarPath: './sidebars.ts' },
        blog: { showReadingTime: true },
        theme: { customCss: './src/css/custom.css' },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: { defaultMode: 'dark', disableSwitch: false, respectPrefersColorScheme: false },
    navbar: {
      title: 'envguard',
      items: [
        { type: 'docSidebar', sidebarId: 'docs', position: 'left', label: 'Docs' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { href: 'https://github.com/fixedbydev/envguard', label: 'GitHub', position: 'right' },
        { href: 'https://www.npmjs.com/package/@stacklance/envguard-core', label: 'npm', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Docs', items: [{ label: 'Getting Started', to: '/docs/getting-started' }, { label: 'CLI Reference', to: '/docs/cli/overview' }] },
        { title: 'Packages', items: [{ label: '@stacklance/envguard-core', href: 'https://www.npmjs.com/package/@stacklance/envguard-core' }, { label: '@stacklance/envguard-cli', href: 'https://www.npmjs.com/package/@stacklance/envguard-cli' }] },
        { title: 'More', items: [{ label: 'GitHub', href: 'https://github.com/fixedbydev/envguard' }, { label: 'Blog', to: '/blog' }] },
      ],
      copyright: 'MIT License · Built by stacklance',
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula, additionalLanguages: ['bash', 'yaml'] },
  } satisfies Preset.ThemeConfig,
};

export default config;
