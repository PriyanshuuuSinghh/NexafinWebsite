# NexaFin marketing site

Next.js (App Router) + React + TypeScript + Tailwind CSS v4 + Motion + Lucide.

    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Where things live
- `src/styles/tokens.css`: design tokens (color, type scale, radius, shadow, spacing, motion). Single source of truth.
- `src/config/`: site links, navigation, JS-side token access.
- `src/data/`: all copy-like data. **`logos.ts`** holds the placeholder partner slots: add `src: "/logos/x.svg"` there when real logos exist.
- `src/data/demo-finance.ts`: fictional demo numbers used in product visuals.
- `src/components/{ui,navigation,marketing}`: primitives, navbar, page sections.

## Content rules
No invented customers, partners, statistics, testimonials, certifications or compliance claims. All sample financial data is labelled as demo.

## Homepage composition
- `Hero` + `DashboardPreview`: product-first hero (glass panel, two depth plates, three floating cards). Glass utilities (`glass`, `glass-dark`) are for the hero and trust panel only.
- `PlatformShowcase`, `IntelligenceShowcase`: homepage teasers. The detailed `PlatformSection`, `IntelligenceSection` and `AISection` remain on their own routes.
- `FlowLines`: the data-line background motif, reused in hero, trust and CTA.
- Demo data is in INR (`src/data/demo-finance.ts`, formatters in `src/lib/format.ts`). Insights shown on the homepage are derived from that data.
