# ReviewBro — Reputation Management, Reimagined

> **Phase 1: Foundation + Design System**  
> Modern reputation-management SaaS frontend foundation, design tokens, responsive primitives, and product UI language.

---

## Brand Architecture & Visual System

- **Category**: Reputation Management platform ("More powerful underneath. Simpler on the surface.")
- **Colors**:
  - `Deep Green`: `#071615` (Hero dark base)
  - `Deep Green Glow`: `#0F241E` (Radial sheen)
  - `Core Brand Green`: `#0B1715` (Elevated dark surfaces)
  - `Slate Blue`: `#64788E` (Wordmark "Bro", brand accents)
  - `Soft Warm Neutral`: `#F9F6F1` (Platform section background)
  - `Clean White`: `#FFFFFF`
- **Typography**: Plus Jakarta Sans & Inter
- **Logo Geometry**: Two overlapping organic leaves (Customer Voice + Business Progress) in satin white and slate blue.

---

## Project Structure

```
├── public/
│   ├── brand/               # Brand logo mark & app icon
│   ├── favicon.png          # Favicon
│   └── apple-touch-icon.png # Apple touch icon
├── src/
│   ├── assets/brand/        # Source brand boards, mockups, logo assets
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, Container, Section, Grid, Stack
│   │   ├── product/         # DashboardShell, MetricCard, ReviewItem, AIReplyCard,
│   │   │                    # SentimentBar, TopicTag, PhoneMockup
│   │   └── ui/              # Logo, Button, Badge, Eyebrow, Heading, Card,
│   │                        # RatingStars, Divider, PlatformFlowCard, ComparisonCard
│   ├── lib/
│   │   ├── constants.ts     # Brand metadata, metrics, review samples
│   │   └── utils.ts         # Class merging helper (cn)
│   ├── showcase/
│   │   └── DesignSystemShowcase.tsx # Internal Design System Showcase
│   ├── styles/
│   │   ├── globals.css      # Base styles & background utilities
│   │   ├── tokens.css       # Centralized CSS variables for design tokens
│   │   └── typography.css   # Standardized typography scale
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.js       # Tailwind configuration mapped to tokens
└── vite.config.ts
```

---

## Development

```bash
# Install dependencies
npm install

# Start Vite dev server
npm run dev

# Build for production
npm run build
```
