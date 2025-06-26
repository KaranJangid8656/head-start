# HeadStart 3

Unlock your career potential with HeadStart — a modern, responsive career development web app.

## Project Overview
HeadStart is a career development platform and book companion site, built with modern web technologies for speed, accessibility, and a beautiful user experience.

## Features
- Responsive design for all devices
- Modern UI with Tailwind CSS and shadcn-ui
- Fast development with Vite and React
- Customizable branding (favicon, browser title, etc.)
- Section highlights for different career stages (students, early-career, mid-career)
- Visual guides for quick learning and reference
- Meet the Authors section with author bios and contact links
- Downloadable resources and actionable tactics

## Getting Started
To run HeadStart locally:

```sh
# 1. Clone the repository
git clone <YOUR_GIT_URL>
cd headstart-book

# 2. Install dependencies
npm install
# or
bun install

# 3. Start the development server
npm run dev
# or
bun run dev
```

Visit `http://localhost:5173` in your browser to view the app.

## Tech Stack
- [Vite](https://vitejs.dev/) (build tool)
- [React](https://react.dev/) (UI framework)
- [TypeScript](https://www.typescriptlang.org/) (type safety)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS)
- [shadcn-ui](https://ui.shadcn.com/) (UI components)

## Customization
- Update images and links in the `src/components` directory as needed.
- Visual guides download link can be changed in `VisualGuidesSection.tsx`.
- To change the favicon, replace the file at `public/favicon.ico` (or update the `<link rel="icon">` in `index.html`).
- To change the browser tab title, edit the `<title>` tag in `index.html` (e.g., `<title>HeadStart</title>`).

## Deployment
You can deploy HeadStart to any modern static hosting provider (Vercel, Netlify, GitHub Pages, etc.).

```sh
npm run build
# Deploy the contents of the `dist` folder
```

---

© 2025 HeadStart. All rights reserved.
