# Contributing to envguard docs

## Setup

```bash
git clone https://github.com/fixedbydev/envguard-docs.git
cd envguard-docs
npm install
npm start
```

The site runs at `http://localhost:3000`.

## Writing docs

- All docs live in `docs/`
- Use MDX for interactive examples
- Keep paragraphs short (max 3 sentences before a code block)
- Every concept needs a working code example
- Write for senior Node.js developers

## Pull requests

1. Fork the repo
2. Create a branch
3. Make changes
4. `npm run build` to verify
5. Open a PR

Preview deploys automatically on PRs.
