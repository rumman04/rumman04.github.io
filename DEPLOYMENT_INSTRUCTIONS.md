# Deployment Instructions

## 1. Install Node.js

Install Node.js 20+ from https://nodejs.org/. This will also install npm.

## 2. Install dependencies

```bash
npm install
```

## 3. Run locally

```bash
npm run dev
```

## 4. Build for production

```bash
npm run build
```

## 5. Push to GitHub

```bash
git add .
git commit -m "Initial portfolio site"
git push origin main
```

## 6. GitHub Pages

The repository is configured with `.github/workflows/deploy.yml` to build and deploy to the `gh-pages` branch on every push to `main`.

## 7. EmailJS Setup

In `sections/ContactSection.tsx`, replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` with your EmailJS credentials.

## 8. Update content

Edit `data/portfolio.ts` to update personal details, experience, skills, projects, and research.

## 9. Replace assets

Replace images in `public/` and update paths in `data/portfolio.ts` as needed.
