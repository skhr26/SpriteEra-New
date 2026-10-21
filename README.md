# Vajra LED Website

Marketing website for Vajra LED, built with the Next.js App Router. The site presents lighting products and solutions, supports architects, contractors, dealers and distributors, and captures enquiries through reusable forms.

## Tech Stack

- **Next.js 16.4** (App Router, Turbopack, Cache Components)
- **React 19**
- **Tailwind CSS v4** via `@tailwindcss/turbopack`
- **lucide-react** for icons
- Plain JavaScript/JSX (no TypeScript source files)

> This Next.js version includes breaking changes. Read the bundled docs in `node_modules/next/dist/docs/` before adding unfamiliar Next.js APIs.

## Getting Started

Requires Node.js 22+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/solutions` | Solutions overview |
| `/solutions/industrial-lighting` | Industrial lighting |
| `/solutions/institutional-lighting` | Institutional lighting |
| `/architect` | Architect programme |
| `/projects` | Projects |
| `/bulk-orders` | Bulk orders |
| `/contact` | Contact |
| `/partnerships/contractor` | Contractor partnership |
| `/partnerships/dealer` | Dealer partnership |
| `/partnerships/distributor` | Distributor partnership |

## Project Structure

```text
src/
  app/                    App Router routes
    globals.css           Tailwind v4 theme and brand tokens
    layout.jsx            Root layout (Navbar/Footer handled per page)
  components/             Shared UI
    landing/              Reusable landing-page sections
    architect/            Architect page sections
    industrial-lighting/  Industrial lighting page sections
  data/                   Page content objects (hero, sections, FAQs, forms)
public/
  images/                 Section imagery grouped by page/feature
```

Pages are **data-driven**: each landing-style page composes shared components and supplies its copy through a matching file in `src/data/`.

## Design System

- **Colors** are defined once as CSS variables in `src/app/globals.css` under `@theme` (for example `brand-navy`, `brand-blue`, `brand-accent`, `brand-surface`, `brand-footer`). Components must use these tokens; do not hardcode hex values.
- **Headings** use `SectionHeading`, which renders the house style: an uppercase label with a rule, a navy headline and a blue highlight (`title`, `titleHighlight`, optional `titleSuffix`).
- **Buttons** (`PrimaryButton`, `SecondaryButton`, `GhostButton`, `WhatsAppButton`, `CallButton`, `CatalogueButton`) live in `src/components/Buttons.jsx`.
- **Heroes** use `PageHero`, which supports breadcrumbs, tag, two-tone title, dual CTAs and a badge strip.
- **Forms** use `EnquiryForm`, which accepts configurable selects, text fields, labels, two-column layout and light/dark/blue variants.

### Shared Landing Components

| Component | Purpose |
| --- | --- |
| `LandingFeatureSupport` | "Why choose" feature cards with an optional light/dark side card |
| `LandingProjectsWithForm` | Project or institution image cards paired with an enquiry form or CTA panel |
| `LandingCategories` | Product category grid or carousel |
| `LandingSteps` | Numbered process steps, with optional checklist, FAQ and side form |
| `LandingFaqColumns` | Standalone two-column FAQ accordion |
| `LandingPartnerFaq` | Image + checklist on the left, FAQ accordion on the right |
| `LandingImageCta` | Split image/CTA band |
| `LandingEnquirySection` | Dark enquiry band with a light form and feature badges |
| `LandingCtaBanner` | Dark bottom CTA banner used as the footer on landing pages |

## Imagery

Images are stored under `public/images/` and served through `next/image`. Landing pages use a dark CTA banner instead of the global `Footer` by design; main pages use the shared `Navbar` and `Footer`.

The institutional page imagery in `public/images/institutional/` was generated for this build. Replace it with final brand photography when available.

## Known Placeholders

- Contact and WhatsApp links use the placeholder number `919999999999`.
- `/catalogue.pdf` is not present, so catalogue download links currently 404.
- Some navigation and solution links point to routes that are not built yet (`/products`, `/faq`, and several individual `/solutions/*` pages).

## Verification

Before shipping changes:

```bash
npm run lint
npm run build
```

The build currently produces the 11 content routes above plus the not-found route.
