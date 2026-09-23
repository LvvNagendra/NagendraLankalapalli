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

Push to `main` triggers `.github/workflows/deploy.yml`.

First-time setup (once in the GitHub repo):

1. **Settings → Pages**
2. **Source:** GitHub Actions

## Stack

Vite · React · TypeScript · Tailwind · Framer Motion · shadcn/ui
