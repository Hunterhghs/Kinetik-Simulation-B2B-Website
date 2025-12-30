# Kinetik B2B Marketing Website

A modern, professional B2B marketing website for Kinetik — a signal intelligence platform for enterprise RevOps workflows.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Custom component library with shadcn/ui patterns
- **Content**: MDX for blog posts, guides, and benchmarks
- **Fonts**: DM Sans (headings), JetBrains Mono (code)
- **Icons**: Lucide React
- **Theme**: Light/Dark mode with system preference detection

## 📁 Project Structure

```
├── content/                 # MDX content files
│   ├── blog/               # Blog posts
│   ├── guides/             # Step-by-step guides
│   └── benchmarks/         # Measurement templates
├── public/                  # Static assets
│   ├── favicon.ico
│   ├── favicon.png
│   └── og-default.png
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── api/           # API routes
│   │   ├── blog/          # Blog section
│   │   ├── company/       # About, Contact
│   │   ├── customers/     # Customer stories
│   │   ├── demo/          # Demo request
│   │   ├── guides/        # Guides section
│   │   ├── integrations/  # Integrations page
│   │   ├── product/       # Product page
│   │   ├── resources/     # Resources hub
│   │   ├── solutions/     # Solutions (RevOps, Sales, Marketing)
│   │   ├── status/        # Status page
│   │   └── trust/         # Security, Privacy, Compliance
│   ├── components/         # React components
│   │   └── ui/            # Base UI components
│   └── lib/               # Utilities and helpers
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 🎨 Design System

The website uses a custom design system with:

- **Colors**: Electric blue primary with cyan accents
- **Typography**: DM Sans for headings, system fonts for body
- **Animations**: Subtle fade-in, slide, and float animations
- **Components**: Cards, buttons, badges, accordions, and more
- **Dark Mode**: Full dark mode support with CSS variables

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📝 Content Management

### Adding Blog Posts

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
description: "Post description for SEO"
date: "2025-01-15"
author: "Author Name"
tags: ["Tag1", "Tag2"]
---

Your content here...
```

### Adding Guides

Create a new `.mdx` file in `content/guides/` with the same frontmatter format.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
# Site URL (for SEO and OG images)
NEXT_PUBLIC_SITE_URL=https://kinetikb2b.ai

# Analytics (optional)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=kinetikb2b.ai
```

## 📄 Key Pages

| Page | Description |
|------|-------------|
| `/` | Homepage with hero, features, and CTAs |
| `/product` | Platform overview and three-layer system |
| `/solutions/*` | RevOps, Sales, Marketing solutions |
| `/integrations` | Integration ecosystem |
| `/customers` | Customer stories and testimonials |
| `/demo` | Demo request form |
| `/resources` | Blog, guides, and benchmarks |
| `/trust/*` | Security, privacy, compliance |
| `/company/*` | About and contact |

## 🚢 Deployment

The site is optimized for deployment on:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

## 📊 Analytics

The site supports Plausible Analytics out of the box. Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` to enable tracking.

## 🔒 Security

- Form submissions include honeypot protection
- All forms validate with Zod schemas
- Security headers configured in `next.config.ts`

## 📜 License

Private - Kinetik Simulation. All rights reserved.

---

Built with ❤️ for enterprise B2B teams.

