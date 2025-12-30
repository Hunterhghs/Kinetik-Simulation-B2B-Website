# Deploying kinetikb2b.ai with AWS Route 53

This project is a Next.js marketing site. Route 53 will manage DNS for:

- **apex**: `kinetikb2b.ai`
- **www**: `www.kinetikb2b.ai` (recommended)

Most teams canonicalize to one hostname (commonly `https://kinetikb2b.ai`) and redirect the other.

---

## Option A — Deploy to Vercel or Netlify (simplest)

### 1) Deploy the site
- Connect this repo to your hosting provider (Vercel or Netlify).
- Build command: `npm run build`
- Output: (handled by provider for Next.js)
- Set environment variables as needed:
  - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (optional)
  - `NEXT_PUBLIC_SITE_URL` (optional; defaults to `https://kinetikb2b.ai`)

### 2) Add domain in the provider
In the provider UI:
- add `kinetikb2b.ai`
- add `www.kinetikb2b.ai`

The provider will show the required DNS targets.

### 3) Configure Route 53 records
In Route 53 Hosted Zone for `kinetikb2b.ai`:

- **A / ALIAS** record for `kinetikb2b.ai` → provider target (as specified by provider)
- **CNAME** record for `www` → provider target (as specified by provider)

> Do **not** invent DNS targets. Use the exact values given by your hosting provider.

### 4) Redirect (recommended)
Pick one canonical host:
- Canonical: `https://kinetikb2b.ai`
- Redirect: `www.kinetikb2b.ai` → apex

Most providers can configure redirects in their dashboard.

### 5) Verify
- Wait for DNS propagation (TTL dependent).
- Confirm:
  - HTTPS is active on both hosts.
  - canonical URLs resolve correctly.
  - `https://kinetikb2b.ai/sitemap.xml` loads.

---

## Option B — AWS Amplify Hosting + Route 53 (AWS-native)

### 1) Create an Amplify app
- AWS Console → Amplify → “Host a web app”
- Connect your Git provider and choose this repo.
- Amplify will auto-detect Next.js and create build settings.

### 2) Add the custom domain
- Amplify → App settings → Domain management
- Add `kinetikb2b.ai` and `www.kinetikb2b.ai`

Amplify will guide you through verification and the required DNS records.

### 3) Route 53 mapping
If the hosted zone is in the same AWS account:
- Amplify can often create the records automatically.
Otherwise, manually create the records Amplify specifies (usually ALIAS/A records and/or CNAME).

### 4) Redirect strategy
As with Option A:
- choose apex or www as canonical
- set redirects accordingly

### 5) Verify
- Confirm HTTPS
- Confirm `robots.txt` and `sitemap.xml` served correctly

---

## Notes on DNS record types

- **A (ALIAS)**: Route 53-specific “alias” record used for apex domains pointing to AWS resources or certain external targets.
- **CNAME**: Commonly used for subdomains like `www`.

Recommended TTL:
- During setup: lower TTL (e.g., 60–300 seconds)
- After stable: higher TTL (e.g., 300–3600 seconds)

---

## What to update after launch

1) Replace placeholder logos, metrics, and testimonials across the site.
2) Update trust pages with verified security/privacy/compliance details.
3) Connect `/api/demo` to a real destination:
   - HubSpot, Salesforce, Slack notifications, etc.
4) Confirm canonical host and enforce redirects to avoid duplicate SEO indexing.
