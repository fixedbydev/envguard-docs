import React from 'react';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import Link from '@docusaurus/Link';

function Hero() {
  return (
    <header className="eg-hero">
      <h1 className="eg-hero-title eg-animate eg-delay-1">
        Stop guessing.<br />
        <em>Validate your env.</em>
      </h1>
      <p className="eg-hero-sub eg-animate eg-delay-2">
        Zod-powered environment validation with static analysis,
        secret detection, and 15+ CLI commands for Node.js.
      </p>
      <div className="eg-hero-actions eg-animate eg-delay-3">
        <Link className="eg-btn-primary" to="/docs/getting-started">
          Get started &rarr;
        </Link>
        <Link className="eg-btn-ghost" href="https://github.com/fixedbydev/envguard">
          View on GitHub
        </Link>
      </div>
      <div className="eg-install eg-animate eg-delay-4">
        <code>
          <span>$</span> npm install @stacklance/envguard-core zod
        </code>
      </div>
    </header>
  );
}

function Features() {
  return (
    <section className="eg-features eg-animate eg-delay-4">
      <div className="eg-feature">
        <div className="eg-feature-icon green">&#9632;</div>
        <h3>Zod Validation</h3>
        <p>
          Full TypeScript inference from your schema. Type coercion for strings to
          numbers, booleans, URLs. Cross-field validation. Frozen results.
        </p>
      </div>
      <div className="eg-feature">
        <div className="eg-feature-icon violet">&#9670;</div>
        <h3>Static Analysis</h3>
        <p>
          AST-level scanning with ts-morph. Finds every undeclared process.env
          access. Flags dynamic access for manual review. Zero false positives.
        </p>
      </div>
      <div className="eg-feature">
        <div className="eg-feature-icon amber">&#9651;</div>
        <h3>Secret Detection</h3>
        <p>
          17 pattern matchers for AWS, GitHub, Stripe, Slack, OpenAI keys.
          Shannon entropy analysis catches unknown secrets. Fully offline.
        </p>
      </div>
    </section>
  );
}

function CodeDemo() {
  return (
    <section className="eg-section eg-animate eg-delay-5">
      <div className="eg-section-header">
        <div className="eg-label">Define once</div>
        <h2>Your schema is your source of truth</h2>
      </div>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <CodeBlock language="typescript" title="env.schema.ts">{`import { guard } from '@stacklance/envguard-core'
import { z } from 'zod'

export const env = guard({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(['development', 'staging', 'production']),
  DATABASE_URL: z.string().url(),
  API_KEY: z.string().min(1),
  DEBUG: z.coerce.boolean().default(false),
})

// env.PORT       → number
// env.NODE_ENV   → 'development' | 'staging' | 'production'
// env.API_KEY    → string (guaranteed non-empty)`}</CodeBlock>
      </div>
    </section>
  );
}

function TerminalDemo() {
  return (
    <section className="eg-section eg-animate eg-delay-5">
      <div className="eg-section-header">
        <div className="eg-label">Health check</div>
        <h2>Know your score in one command</h2>
      </div>
      <div className="eg-terminal">
        <div className="eg-terminal-bar">
          <div className="eg-dot r" />
          <div className="eg-dot y" />
          <div className="eg-dot g" />
          <span>Terminal</span>
        </div>
        <div className="eg-terminal-body">
          <div><span className="cmd">$</span> <span className="wh">env-guard doctor</span></div>
          <br />
          <div><span className="ok">  ✓</span>  Schema exists                     <span className="pt">+15</span></div>
          <div><span className="ok">  ✓</span>  All keys in schema                <span className="pt">+15</span></div>
          <div><span className="ok">  ✓</span>  .env.example in sync              <span className="pt">+10</span></div>
          <div><span className="ok">  ✓</span>  No raw process.env usage          <span className="pt">+15</span></div>
          <div><span className="ok">  ✓</span>  .env in .gitignore                <span className="pt">+10</span></div>
          <div><span className="ok">  ✓</span>  No secrets in .env.example        <span className="pt">+10</span></div>
          <div><span className="wr">  ⚠</span>  No predev script found            <span className="pt">+0</span></div>
          <div><span className="ok">  ✓</span>  No empty values                   <span className="pt">+10</span></div>
          <div><span className="ok">  ✓</span>  No duplicate keys                 <span className="pt">+5</span></div>
          <div><span className="ok">  ✓</span>  Consistent naming                 <span className="pt">+5</span></div>
          <br />
          <div>  Score: <span className="sc">95/100</span>  <span className="pt">(Excellent)</span></div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="eg-stats">
      <div className="eg-stat">
        <div className="eg-stat-val">15+</div>
        <div className="eg-stat-label">CLI commands</div>
      </div>
      <div className="eg-stat">
        <div className="eg-stat-val">8</div>
        <div className="eg-stat-label">packages</div>
      </div>
      <div className="eg-stat">
        <div className="eg-stat-val">311</div>
        <div className="eg-stat-label">tests</div>
      </div>
      <div className="eg-stat">
        <div className="eg-stat-val">5</div>
        <div className="eg-stat-label">frameworks</div>
      </div>
    </section>
  );
}

const COMPARE_ROWS = [
  ['Zod schemas', 'y', 'y', 'n', 'n'],
  ['TypeScript inference', 'y', 'y', 'y', 'n'],
  ['Static analysis (audit)', 'y', 'n', 'n', 'n'],
  ['Secret detection', 'y', 'n', 'n', 'n'],
  ['CLI tool (15+ commands)', 'y', 'n', 'n', 'n'],
  ['Health scoring (doctor)', 'y', 'n', 'n', 'n'],
  ['Docker / K8s validation', 'y', 'n', 'n', 'n'],
  ['NestJS module', 'y', 'n', 'n', 'n'],
  ['Web dashboard', 'y', 'n', 'n', 'n'],
  ['GitHub Action', 'y', 'n', 'n', 'n'],
  ['VS Code extension', 'y', 'n', 'n', 'n'],
];

function Comparison() {
  return (
    <section className="eg-section eg-animate eg-delay-6">
      <div className="eg-section-header">
        <div className="eg-label">Why envguard</div>
        <h2>The complete solution</h2>
      </div>
      <div className="eg-compare">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>envguard</th>
              <th>t3-env</th>
              <th>envalid</th>
              <th>dotenv-safe</th>
            </tr>
          </thead>
          <tbody>
            {COMPARE_ROWS.map(([feature, ...vals], i) => (
              <tr key={i}>
                <td>{feature}</td>
                {vals.map((v, j) => (
                  <td key={j} className={v === 'y' ? 'y' : 'n'}>
                    {v === 'y' ? '✓' : '—'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="eg-cta">
      <h2>Ready to validate?</h2>
      <p>Set up envguard in your project in under 30 seconds.</p>
      <Link className="eg-btn-primary" to="/docs/getting-started">
        Get started &rarr;
      </Link>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Zod-powered env validation for Node.js"
      description="Stop guessing. Validate your env. Zod-powered environment validation with static analysis, secret detection, and CLI tooling."
    >
      <Hero />
      <main>
        <Features />
        <CodeDemo />
        <TerminalDemo />
        <Stats />
        <Comparison />
        <CTA />
      </main>
    </Layout>
  );
}
