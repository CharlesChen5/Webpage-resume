# Resume Portfolio

A modern, responsive personal resume portfolio website built with Next.js, featuring smooth animations and a clean dark theme design.

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment:** [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:3000
```

### Build & Export

```bash
npm run build    # builds and exports static files to /out
```

The project uses `output: 'export'` to generate a fully static site compatible with any static hosting.

## Project Structure

```
src/
  app/
    components/   # React components (Hero, About, Skills, Projects, Contact, etc.)
    globals.css   # Global styles & Tailwind directives
    layout.tsx    # Root layout
    page.tsx      # Home page
public/           # Static assets
```

## Deployment

This project is configured for seamless deployment on Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual Deployment

1. Push this repo to GitHub
2. Import the repo in Vercel
3. Vercel will auto-detect Next.js and apply the optimal build settings
4. Deploy

## License

MIT
