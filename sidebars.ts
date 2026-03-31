import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    { type: 'doc', id: 'getting-started', label: 'Getting Started' },
    { type: 'doc', id: 'installation', label: 'Installation' },
    { type: 'doc', id: 'quick-start', label: 'Quick Start' },
    {
      type: 'category', label: 'Core Concepts', items: [
        'concepts/schema', 'concepts/validation', 'concepts/multi-env', 'concepts/watch-mode',
      ],
    },
    {
      type: 'category', label: 'CLI Reference', link: { type: 'doc', id: 'cli/overview' }, items: [
        'cli/check', 'cli/diff', 'cli/audit', 'cli/doctor', 'cli/secrets', 'cli/scan',
        'cli/init', 'cli/serve', 'cli/explain', 'cli/mask', 'cli/badge', 'cli/fix',
        'cli/docker', 'cli/k8s',
      ],
    },
    {
      type: 'category', label: 'Packages', items: [
        'packages/core', 'packages/cli', 'packages/nestjs', 'packages/audit',
        'packages/docker', 'packages/k8s',
      ],
    },
    {
      type: 'category', label: 'Guides', items: [
        'guides/migrate-from-dotenv', 'guides/migrate-from-t3-env', 'guides/migrate-from-envalid',
        'guides/github-actions', 'guides/monorepo', 'guides/docker-compose',
        'guides/kubernetes', 'guides/pre-commit-hooks',
      ],
    },
    {
      type: 'category', label: 'Integrations', items: [
        'integrations/nextjs', 'integrations/nestjs', 'integrations/vite',
        'integrations/express', 'integrations/vercel',
      ],
    },
    {
      type: 'category', label: 'Reference', items: [
        'reference/api', 'reference/error-codes', 'reference/schema-types', 'reference/cli-flags',
      ],
    },
  ],
};

export default sidebars;
