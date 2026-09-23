# Nagendra Lankalapalli — Portfolio

Professional portfolio for a Java Backend Engineer (payments / BFSI).

**Live site (GitHub Pages):** https://lvvnagendra.github.io/NagendraLankalapalli/

## Local development

```sh
npm install
npm run dev
```

## Update resume (always ships with deploy)

1. Replace the file **`public/resume.pdf`** with your latest PDF (keep the same filename).
2. Commit and push to `main`.
3. GitHub Actions builds and deploys automatically. Download links use a build id so browsers fetch the new PDF.

Optional: you can also keep older copies under other names in `public/`, but the site only links to `resume.pdf`.

## Deploy

Push to `main` deploys via `.github/workflows/deploy.yml` to the `gh-pages` branch.

**First-time setup (required once):**

1. Open **Settings → Pages**: https://github.com/LvvNagendra/NagendraLankalapalli/settings/pages
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Branch: **`gh-pages`** / folder: **`/ (root)`** → Save

Manual deploy from your machine: `npm run deploy`

## Stack

Vite · React · TypeScript · Tailwind · Framer Motion · shadcn/ui
