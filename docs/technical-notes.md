# Technical Notes

## Frontend Architecture

The application uses Next.js App Router with a layered component structure:

- **layout/** — global Navbar and Footer
- **sections/** — homepage section components
- **portfolio/** — project, service, and contact components
- **ui/** — shared primitives (Button, Card, Badge, etc.)

## App Routing

| Route | Page |
|-------|------|
| `/` | Home |
| `/projects` | All projects |
| `/projects/[slug]` | Project detail |
| `/about` | About |
| `/blog` | Blog listing |
| `/contact` | Contact form |

Project detail pages use `generateStaticParams()` for static generation at build time.

## Data Structure

```
data/
├── projects.ts      Project case studies
├── skills.ts        Skill categories
├── experience.ts    Work history
├── services.ts      Freelance services
├── testimonials.ts  Client quotes
├── architecture.ts  Architecture showcase
└── blog.ts          Blog previews
```

Each file exports typed arrays and helper functions (e.g. `getProjectBySlug`, `getFeaturedProjects`).

## Dynamic Project Pages

`/projects/[slug]/page.tsx` loads project data by slug, generates metadata for SEO, and renders the `ProjectDetail` component. Invalid slugs return 404 via `notFound()`.

## Component Structure

Home page composition:

```
page.tsx
├── Hero
├── Skills
├── FeaturedProjects
├── Services
├── ArchitectureShowcase
├── Experience
├── Testimonials
├── BlogPreview
└── ContactCTA
```

## Styling

- Tailwind CSS with custom design tokens in `tailwind.config.ts`
- Global utility classes in `globals.css` (`.glow-button`, `.card-base`, `.text-gradient`)
- Dark color scheme: `background`, `surface`, `accent`, `text` tokens

## Animations

Framer Motion is used sparingly:

- Hero staggered reveal
- Skills tab content transitions
- Testimonial carousel
- Skill badge scale-in on tab change

## Responsiveness

- Mobile-first breakpoints via Tailwind (`sm:`, `md:`, `lg:`)
- Collapsible mobile navigation
- Grid layouts that stack on small screens
- Touch-friendly form controls

## Deployment

Built for Vercel with default Next.js settings. See [architecture/deployment.md](../architecture/deployment.md).
