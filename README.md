# Dottssa Irene Maria Beconi - Medical Website

A premium static website for Dr. Irene Maria Beconi, Dental Surgeon and Facial Aesthetic Medicine Doctor in Pistoia, Italy.

## Features

- 🌐 Bilingual (Italian/English) with client-side language toggle
- 🎨 Premium medical aesthetic design (teal, cream, gold color palette)
- 📱 Fully responsive mobile-first design
- ⚡ Static site generation for fast loading
- 🔍 SEO optimized with structured data
- ♿ Accessible with ARIA labels and semantic HTML
- 🎭 Smooth animations and scroll effects

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Deployment:** GitHub Pages (static export)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Docker

```bash
# Development with hot reload
npm run docker:dev
# Access at http://localhost:3001

# Production build
npm run docker:prod
# Access at http://localhost:3000
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main homepage
│   ├── globals.css         # Global styles and animations
│   └── sitemap.ts          # Dynamic sitemap
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navigation
│   │   └── Footer.tsx      # Footer component
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Services.tsx    # Services section
│   │   ├── Approach.tsx    # Approach section
│   │   ├── Gallery.tsx     # Gallery section
│   │   ├── Contact.tsx     # Contact section
│   │   └── CtaBand.tsx     # CTA band
│   ├── ui/                 # shadcn/ui components
│   └── LanguageToggle.tsx  # Language switcher
├── content/
│   └── siteCopy.ts         # Bilingual content
├── lib/
│   ├── utils.ts            # Utility functions
│   └── LanguageContext.tsx # Language context
└── public/                 # Static assets
```

## Customization

### Colors

Edit `tailwind.config.ts` and `app/globals.css`:
- Primary teal: `#1B8489`
- Cream background: `#F5F1E8`
- Gold accent: `#C9A46A`
- Dark text: `#1F2A33`

### Content

Edit `content/siteCopy.ts` to update all text content in both Italian and English.

### Images

Replace placeholder images in `public/` directory:
- `logo.svg` - Main logo
- `logo-white.svg` - White version for dark backgrounds
- `favicon.ico` - Browser favicon

## Deployment

### GitHub Pages

1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. GitHub Actions will automatically build and deploy

### Custom Domain

1. Add `CNAME` file with your domain
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## License

© 2026 Dottssa Irene Maria Beconi. All rights reserved.
