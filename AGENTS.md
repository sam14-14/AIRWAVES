## Project Summary
A modern landing page for Airwaves WIFI Solutions, a premium WiFi Service Provider (ISP) based in Karnal, Haryana, India. The website showcases features like fiber-optic speeds, mesh WiFi, transparent pricing plans in INR, and local customer testimonials.

## Tech Stack
- Framework: Next.js 15 (App Router, Turbopack)
- Styling: Tailwind CSS
- Animation: Framer Motion
- Icons: Lucide React
- Language: TypeScript

## Architecture
- `src/app/page.tsx`: Main entry point assembling the landing page components.
- `src/components/landing/`: Directory containing modular components for the landing page (Navbar, Hero, Features, Pricing, Testimonials, Footer).
- `src/components/ui/`: Shared UI components (shadcn/ui style).

## User Preferences
- Clean, professional, and modern design.
- Dark mode support using Tailwind `dark:` classes.
- Responsive layout for mobile and desktop.

## Project Guidelines
- Use functional components with React.
- Follow Tailwind CSS utility-first approach for styling.
- Use Lucide icons for visual consistency.
- Maintain a high-impact "designed" aesthetic with motion and gradients.

## Common Patterns
- Framer Motion for scroll-based animations (`whileInView`).
- Glassmorphism for Navbar on scroll.
- Card-based layouts for features and pricing.
