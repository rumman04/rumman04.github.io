# Rumman Portfolio

Premium personal portfolio built with Next.js 15, React, Tailwind CSS, Framer Motion, TypeScript, and Three.js.

## Overview

- Modern dark glassmorphism design
- Fully responsive and mobile friendly
- SEO optimized with Open Graph metadata
- Contact form prepared for EmailJS
- Ready for GitHub Pages deployment via GitHub Actions

## Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Build production bundle:
   ```bash
   npm run build
   ```

## Deployment

This repository is configured for GitHub Pages via GitHub Actions. The site exports a static build and publishes to the `gh-pages` branch.

## Update Content

All portfolio details are centralized in `data/portfolio.ts`:
- Personal details
- Education
- Experience
- Skills
- Projects
- Research interests
- Gallery images

Update resume by replacing `public/resume.pdf`.

## Notes

- Replace EmailJS values in `sections/ContactSection.tsx` with your service ID, template ID, and public key.
- Add actual project images in `public/` and update the image paths in `data/portfolio.ts`.
