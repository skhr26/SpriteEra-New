# Vajra LED Website

Marketing website for Vajra LED, built with Next.js App Router (Turbopack). The platform showcases lighting products and application-based solutions, caters to architectural, commercial, industrial, institutional, dealer, and contractor partnerships, and captures qualified project leads through reusable interactive enquiry workflows.

---

## Tech Stack

- **Framework**: [Next.js 16.4](https://nextjs.org/) (App Router, Turbopack, Partial Prefetching, Cache Components)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/turbopack`
- **Iconography**: [lucide-react](https://lucide.dev/)
- **Code Language**: Plain JavaScript / JSX with modular ES modules

---

## Getting Started

### Prerequisites

- Node.js 20+ (recommended Node.js 22+)
- npm 10+

### Installation & Development

```bash
# Navigate to the project directory
cd vajra-nextjs

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build optimized static production bundle |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint static analysis |

---

## Pages & Routes

All 18 static routes are pre-rendered and verified:

| Route | Page Description | Key Features |
| --- | --- | --- |
| `/` | **Home** | Hero with application highlights, solutions grid, consultation banner, featured products carousel, Why Vajra strip & projects carousel, catalogue banner, global footer. |
| `/solutions` | **Solutions Overview** | Application cards across industrial, commercial, warehouse, street, hospital, school, and solar lighting with recommendation CTA. |
| `/solutions/industrial-lighting` | **Industrial Lighting** | Industrial facilities overview, 8 application areas, recommended products carousel, why choose Vajra, project support callout, related solutions. |
| `/solutions/institutional-lighting` | **Institutional Lighting** | Public/private institution features, sector cards, product categories carousel, workflow stages, partner FAQs, CTA banner. |
| `/architect` | **Architect Programme** | Collaborative lighting solutions for architectural projects, project gallery, product categories carousel, 4-stage project support, interactive FAQs. |
| `/projects` | **Projects** | Architectural project showcases and inspiration gallery. |
| `/authorized-dealers` | **Authorized Dealer Network** | Trust badges, searchable and filterable dealer directory by State & City, "Become a Dealer" CTA. |
| `/bulk-orders` | **Bulk Orders** | Competitive volume pricing, supply categories, process workflow, procurement checklist, and bulk enquiry form. |
| `/contact` | **Contact** | Quick connect channels (Phone, WhatsApp, Catalogue), multi-step workflow overview, and dedicated contact form. |
| `/faq` | **Frequently Asked Questions** | Categorized interactive FAQ accordion covering products, technical specifications, orders, and partnerships. |
| `/why-vajra` | **Why Choose Vajra LED** | Certified performance, manufacturing strength, advantage grid, and client benefit matrix. |
| `/partnerships/architect` | **Architectural Partnership** | Co-design and spec support, sample request process, project showcase. |
| `/partnerships/contractor` | **Contractor Partnership** | Turnkey contractor lighting supply, delivery reliability, contractor quote workflow. |
| `/partnerships/dealer` | **Dealer Partnership** | Dealer margins, territory exclusivity, business expansion CTA, onboarding steps. |
| `/partnerships/distributor` | **Distributor Partnership** | Distribution network capabilities, partner profiles carousel, distributor enquiry form. |

---

## Layout, Sizing & Alignment Standards

### 1. Global Container Alignment (`max-w-[1400px]`)
To preserve comfortable card sizes while maintaining exact left and right edge alignment across the entire website:
- **Container Class**: `max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8`
- **Application**: Applied consistently across `Navbar`, `Hero`, `PageHero`, content grids, banners, and `Footer`.
- **Spacing**: Left and right margins match from the top navbar logo to the bottom CTA on every screen size.

### 2. Equi-Height Cards (`h-full` & `items-stretch`)
- Grid containers use `items-stretch`.
- Cards utilize `h-full flex flex-col justify-between`.
- Titles reserve a standardized minimum height (e.g. `min-h-[2.75rem]` to `min-h-[3.5rem] flex items-start`) so that single-line and multi-line titles never cause descriptions or buttons to misalign.

### 3. Interactive Arrow Carousels (for rows with >4 items)
Whenever a section displays more than 4 cards, items are displayed in a responsive, scroll-snap horizontal carousel with accessible `<` and `>` arrow buttons:
- 4 cards visible at a time on desktop (`lg:w-[calc(25%-12px)]`), keeping individual cards large, prominent, and legible.
- Applied in:
  - `FeaturedProducts` (Home page)
  - `LandingCategories` (All partnership & bulk order pages)
  - `ArchitectCategoriesSection` (Architect & project pages)
  - `IndustrialRecommendedProducts` (Industrial lighting page)
  - `WhyVajraAndProjects` (Projects track)
  - `LandingProjectsWithForm` (Distributor capabilities track)

### 4. Centralized Enquiry Popup Modal
- **Width**: Broader modal dialog (`max-w-2xl lg:max-w-[720px]`).
- **No Scrolling / Single Go**:
  - Activates a 2-column responsive layout (`twoColumn={true}`): Name & Company, Phone & Email, Product & Category.
  - Streamlined 2-line query field (`rows={2}`).
  - Fits comfortably within standard viewports in a single go without internal scrollbars.
  - Triggered globally from any CTA with `EnquiryTrigger`.

### 5. Compact Side Card Design
- In `LandingFeatureSupport`, the accompanying visual side card is kept compact and balanced (`h-44 sm:h-48` image height, `p-5 sm:p-6` padding), aligning cleanly with the 4 feature cards on the left.

---

## Project Structure

```text
vajra-nextjs/
├── public/
│   └── images/                 Product photos, application backgrounds, icons
├── src/
│   ├── app/
│   │   ├── globals.css         Tailwind CSS v4 theme variables and design tokens
│   │   ├── layout.jsx          Root layout and global EnquiryModal dialog
│   │   ├── page.jsx            Home page
│   │   ├── architect/          Architectural lighting page
│   │   ├── authorized-dealers/ Dealer network directory page
│   │   ├── bulk-orders/        Bulk orders & institutional supply page
│   │   ├── contact/            Contact page with multi-channel connect
│   │   ├── faq/                Categorized FAQ accordion page
│   │   ├── partnerships/       Architect, Contractor, Dealer, Distributor routes
│   │   ├── projects/           Project portfolio page
│   │   ├── solutions/          Solutions overview & sector-specific pages
│   │   └── why-vajra/          Company advantages & certification page
│   ├── components/
│   │   ├── Navbar.jsx          Global sticky header with navigation & quote CTA
│   │   ├── Footer.jsx          Global rich footer with support CTA
│   │   ├── Hero.jsx            Home page hero
│   │   ├── PageHero.jsx        Universal hero with breadcrumbs, highlights & badges
│   │   ├── SectionHeading.jsx  Standardized section heading component
│   │   ├── Buttons.jsx         Primary, Secondary, WhatsApp, Call & Catalogue buttons
│   │   ├── EnquiryForm.jsx     Lead capture form supporting dark/light/2-column modes
│   │   ├── enquiry/
│   │   │   ├── EnquiryModal.jsx Centralized popup dialog
│   │   │   └── EnquiryTrigger.jsx Custom event dispatcher to open modal
│   │   ├── landing/            Reusable landing page blocks (Categories, Steps, FAQs, etc.)
│   │   ├── architect/          Architect-specific UI sections
│   │   ├── dealers/            Dealer directory filter & cards
│   │   └── industrial-lighting/ Industrial overview, products, and support sections
│   └── data/                   Data-driven configuration files for all routes
└── package.json
```

---

## Build Verification

To verify typescript checks, asset imports, and static generation:

```bash
cd vajra-nextjs
npm run build
```

Expected output:
```text
✓ Compiled successfully
✓ Generating static pages (18/18)
○ (Static) prerendered as static content
```
