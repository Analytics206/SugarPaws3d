# 🛠️ SugarPaws3D - Tech Stack Overview

This document outlines the technologies used in the SugarPaws3D website project, including current setup and future plans.

---

## 🔧 Current Stack (MVP/Marketing Site)

| Layer           | Tech                                | Purpose                                 |
|----------------|-------------------------------------|-----------------------------------------|
| Frontend       | [Next.js](https://nextjs.org/)      | React framework for static + dynamic pages |
| Styling        | [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework             |
| Language       | TypeScript                          | Safer, scalable JavaScript               |
| Hosting        | GoDaddy (Static HTML upload)        | Simple and affordable web hosting        |
| Asset Storage  | `public/models/` folder              | 3D model images and assets               |

---

## 🧭 Folder Structure Overview

```yaml
sugarpaws3d/
├── public/ # Public static files
│ └── models/ # 3D model images
├── src/
│ ├── app/ # Page routes
│ ├── components/ # Reusable React components
│ ├── data/ # JSON data for models
│ ├── styles/ # Global styles
│ └── lib/ # (Optional) utilities/helpers
├── next.config.js # Next.js configuration
├── tailwind.config.js # Tailwind configuration
├── package.json # Project metadata and dependencies
└── tsconfig.json # TypeScript configuration


```
---
## 🧭 Future Stack Considerations (6–12 months)
```yaml


| Feature Area       | Tech Option(s) Considered                         |
|--------------------|---------------------------------------------------|
| Authentication     | OAuth (Google, Microsoft) via Auth providers     |
| Payments           | Stripe or Patreon API                            |
| CMS/Model Management | Headless CMS (e.g. Sanity, Strapi) (optional)    |
| Hosting Upgrade    | Vercel, Netlify, or VPS with CI/CD                |
| SEO & Analytics    | Next SEO, Google Analytics                        |
```
---

## ✅ Goals

- Keep stack simple for static marketing site phase
- Plan forward for user auth and secure payment integration
- Remain open to migration from GoDaddy to modern deployment platforms

---




---

# -- MOVE THIS --
# tech stack( current)

## ✅ Adjusted Plan: Static-Exported Next.js Site for GoDaddy
### 🔧 Updated Stack (Phase 1: Static Deployment)
- Framework: Next.js – using next export to generate static HTML
- Styling: Tailwind CSS
- Content: Markdown (MDX), JSON, or hardcoded components
- Deployment Target: Exported HTML, deployed via FTP to GoDaddy
- Command: next export creates out/ folder ready for upload

## Build & Deploy Instructions
- Set up your project

```bash
npx create-next-app@latest sugarpaws3d --app --typescript --tailwind
```
## Update next.config.js to allow static export

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // needed for static export if using <Image>
  },
};
module.exports = nextConfig;
```


## Build the static site

```bash
npm run build
npm run export

```
* This will output a out/ directory with static HTML, CSS, and JS.
- Upload to GoDaddy
- Use FTP or GoDaddy’s file manager
- Upload everything in the out/ folder to your site's public directory (public_html/)

* Deploy to GoDaddy


# future tech stack

📦 Later Migration Path (Optional)
When you're ready to move beyond GoDaddy:

Deploy on Vercel or Render for full Next.js capabilities (auth, serverless functions, etc.)

Use your GoDaddy domain by pointing DNS to Vercel

✅ Updated Stack Recommendation: Marketing-First, Scalable Later
🔧 Tech Stack (Phase 1 – Marketing Website)
Framework: Next.js (with App Router) – supports both static and dynamic content; ideal for future upgrades

Styling: Tailwind CSS – fast, clean, and responsive UI

Hosting: Vercel – one-click deploy, optimized for Next.js

Content: Use MDX files or JSON for 3D model listings, or optionally a headless CMS like Sanity or Notion API

Links to Patreon: Simple CTA buttons or card links per model/section

🛠 Phase 1 Capabilities (Now)
Static website showcasing 3D models (with image previews)

Model pages or gallery views

About, contact, and FAQs

Link to Patreon for exclusive access

🌱 Phase 2 Ready (6–12 Months Later)
Add NextAuth.js for Google/Microsoft login

Add Stripe for subscriptions/memberships

Add user dashboard for members

Lock content or downloads behind authentication


✅ Suggested Tools for Phase 1
Feature	Tool / Stack
Static Pages	Next.js App Router
Styling	Tailwind CSS
Model Listings	JSON or MDX-based gallery
Patreon Integration	Link buttons, CTA cards
Hosting	Vercel (free tier is great)

Start building:

Home page with a banner and brief description

Grid of 3D model thumbnails with links

Each model links to a larger preview and a Patreon CTA

Add "About", "Contact", and "Support Us" sections

💡 Summary
You’re setting yourself up for success:

Lightweight today: simple and fast to build and deploy

Scalable tomorrow: authentication and payment ready without tech debt

Polished: Tailwind + Next.js = modern and responsive design


✅ Summary
Current Goal	Solution
Run on GoDaddy	Use next export to generate static site
Build simple marketing site	Next.js + Tailwind
Plan for future login & payments	Keep Next.js; migrate later to Vercel or similar
Content delivery + Patreon links	Static pages with CTAs
