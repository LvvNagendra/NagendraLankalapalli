# Nagendra Lankalapalli — Portfolio

Professional portfolio for a Java Backend Engineer (payments / BFSI).

**Live site (GitHub Pages):** https://lvvnagendra.github.io/NagendraLankalapalli/

## Local development

```sh
npm install
npm run dev
```

## Update resume & profile photo (always ships with deploy)

Replace these files (keep the same names), then commit and push to `main`:

| File | Purpose |
|------|---------|
| `public/resume.pdf` | Resume download |
| `public/profile.jpg` | Hero / about photo |
| `public/lns-logo.png` | Optional raster logo asset |

Builds add a cache-bust query so browsers fetch the new files after each deploy.

## Deploy

Push to `main` deploys via `.github/workflows/deploy.yml` to the `gh-pages` branch.

**First-time setup (required once):**

1. Open **Settings → Pages**: https://github.com/LvvNagendra/NagendraLankalapalli/settings/pages
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Branch: **`gh-pages`** / folder: **`/ (root)`** → Save

Manual deploy from your machine: `npm run deploy`

## Stack

Vite · React · TypeScript · Tailwind · Framer Motion · shadcn/ui
