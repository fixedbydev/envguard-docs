import React from 'react';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Zod-powered env validation" description="Stop guessing. Validate your env.">
      <header className="hero" style={{textAlign:'center',padding:'6rem 2rem 3rem'}}>
        <h1 className="hero__title">Stop guessing.<br/>Validate your env.</h1>
        <p className="hero__subtitle">Zod-powered environment validation with static analysis, secret detection, and CLI tooling for Node.js.</p>
        <div style={{marginTop:'2rem',display:'flex',gap:'12px',justifyContent:'center'}}>
          <Link className="button button--primary button--lg" to="/docs/getting-started">Get started</Link>
          <Link className="button button--secondary button--lg" href="https://github.com/fixedbydev/envguard">GitHub</Link>
        </div>
      </header>
      <main>
        <section style={{maxWidth:900,margin:'0 auto',padding:'2rem',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'16px'}}>
          <div className="feature-card"><h3>Zod Validation</h3><p>Full TypeScript inference. Type coercion. Cross-field validation. Freeze mode.</p></div>
          <div className="feature-card"><h3>Static Analysis</h3><p>Scan your codebase for undeclared process.env usage. Zero false positives on dynamic access.</p></div>
          <div className="feature-card"><h3>Secret Detection</h3><p>Offline pattern matching + Shannon entropy analysis. Catches AWS keys, Stripe tokens, JWTs, and more.</p></div>
        </section>
        <section style={{maxWidth:700,margin:'3rem auto',padding:'0 2rem'}}>
          <h2 style={{textAlign:'center',marginBottom:'1.5rem'}}>Schema in 10 lines</h2>
          <CodeBlock language="typescript" title="env.schema.ts">{`import { guard } from '@stacklance/envguard-core'
import { z } from 'zod'

export const env = guard({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(['development', 'staging', 'production']),
  DATABASE_URL: z.string().url(),
  API_KEY: z.string().min(1),
  DEBUG: z.coerce.boolean().default(false),
})`}</CodeBlock>
        </section>
        <section style={{maxWidth:700,margin:'3rem auto',padding:'0 2rem'}}>
          <h2 style={{textAlign:'center',marginBottom:'1.5rem'}}>Health check in one command</h2>
          <div className="terminal-block">
            <div><span className="prompt">$</span> env-guard doctor</div>
            <div style={{marginTop:8}}></div>
            <div><span className="pass">  ✓</span>  Schema exists                     <span className="dim">+15</span></div>
            <div><span className="pass">  ✓</span>  All keys in schema                <span className="dim">+15</span></div>
            <div><span className="pass">  ✓</span>  .env.example in sync              <span className="dim">+10</span></div>
            <div><span className="pass">  ✓</span>  No raw process.env usage          <span className="dim">+15</span></div>
            <div><span className="pass">  ✓</span>  .env in .gitignore                <span className="dim">+10</span></div>
            <div><span className="warn">  ⚠</span>  No predev script found            <span className="dim">+0</span></div>
            <div style={{marginTop:8}}></div>
            <div>  Score: <span className="pass">90/100</span>  (Excellent)</div>
          </div>
        </section>
        <section className="stats-bar">
          <div className="stat"><div className="stat-value">15+</div><div className="stat-label">CLI commands</div></div>
          <div className="stat"><div className="stat-value">8</div><div className="stat-label">packages</div></div>
          <div className="stat"><div className="stat-value">311</div><div className="stat-label">tests passing</div></div>
          <div className="stat"><div className="stat-value">5</div><div className="stat-label">framework integrations</div></div>
        </section>
        <section style={{maxWidth:800,margin:'2rem auto 4rem',padding:'0 2rem'}}>
          <h2 style={{textAlign:'center',marginBottom:'1.5rem'}}>How envguard compares</h2>
          <table className="comparison-table">
            <thead><tr><th>Feature</th><th>envguard</th><th>t3-env</th><th>envalid</th><th>dotenv-safe</th></tr></thead>
            <tbody>
              <tr><td>Zod schemas</td><td className="yes">✓</td><td className="yes">✓</td><td className="no">—</td><td className="no">—</td></tr>
              <tr><td>TypeScript inference</td><td className="yes">✓</td><td className="yes">✓</td><td className="yes">✓</td><td className="no">—</td></tr>
              <tr><td>Static analysis</td><td className="yes">✓</td><td className="no">—</td><td className="no">—</td><td className="no">—</td></tr>
              <tr><td>Secret detection</td><td className="yes">✓</td><td className="no">—</td><td className="no">—</td><td className="no">—</td></tr>
              <tr><td>CLI tool (15+ commands)</td><td className="yes">✓</td><td className="no">—</td><td className="no">—</td><td className="no">—</td></tr>
              <tr><td>Health scoring</td><td className="yes">✓</td><td className="no">—</td><td className="no">—</td><td className="no">—</td></tr>
              <tr><td>Docker/K8s validation</td><td className="yes">✓</td><td className="no">—</td><td className="no">—</td><td className="no">—</td></tr>
              <tr><td>NestJS module</td><td className="yes">✓</td><td className="no">—</td><td className="no">—</td><td className="no">—</td></tr>
              <tr><td>Web dashboard</td><td className="yes">✓</td><td className="no">—</td><td className="no">—</td><td className="no">—</td></tr>
              <tr><td>GitHub Action</td><td className="yes">✓</td><td className="no">—</td><td className="no">—</td><td className="no">—</td></tr>
              <tr><td>VS Code extension</td><td className="yes">✓</td><td className="no">—</td><td className="no">—</td><td className="no">—</td></tr>
            </tbody>
          </table>
        </section>
      </main>
    </Layout>
  );
}
