# Portfolio — Pooja Lekshmi J

Personal portfolio website built with Next.js, Tailwind CSS, and TypeScript. Features a spotlight cursor effect, smooth fade-in animations, and a clean dark-themed design.

> **Note:** Inspired by brittanychiang.com, this portfolio is fully built from scratch with an original codebase, custom styling, and independently implemented features.

**Live:** [pooja-lekshmi-j-s.vercel.app](https://pooja-lekshmi-j-s.vercel.app/)

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Font:** [Inter](https://rsms.me/inter/)
- **Deployment:** [Vercel](https://vercel.com/)

## Sections

- **Header** — Name, role, navigation, and social links
- **About** — Brief introduction
- **Experience** — Work history and roles
- **Projects** — Showcase of selected projects
- **Contact** — Email call-to-action

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata & fonts
│   ├── page.tsx            # Home page composing all sections
│   ├── globals.css         # Global styles

├── components/
│   ├── Header.tsx          # Header / navigation
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Experience section
│   └── Projects.tsx        # Projects section
├── shared/
│   ├── SpotlightEffect.tsx # Cursor spotlight effect
│   ├── FadeIn.tsx          # Scroll fade-in animation
│   ├── BackToTop.tsx       # Back-to-top button
│   └── ArrowIcon.tsx       # Reusable arrow icon
└── data/
    ├── experience.ts       # Experience entries
    └── projects.ts         # Project entries
public/
├── favicon.ico             # Favicon
├── images/projects/        # Project screenshots
└── resume.pdf              # Downloadable resume
```

## Getting Started

### Prerequisites

- Node.js >= 18 (see `.nvmrc` for recommended version)

### Installation

```bash
git clone https://github.com/pooja-lekshmi-j/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Deployment

This project is deployed on Vercel. Pushing to the `main` branch triggers an automatic deployment.

## License

© 2026 Pooja Lekshmi J
