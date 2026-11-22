# Kenisha Verma — portfolio

Next.js (static export) + TypeScript. Design: sidebar card + bento (C1).

## Run
```
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Edit content
Everything lives in `src/content/site.ts`:
- `links.bookCall` → Google Calendar booking link
- `links.resume` → Google Drive link
- `links.email` → `mailto:you@example.com`
- `socials` → LinkedIn, Behance, Instagram, Pinterest, X URLs
- `role`, `tagline`, `hero`, `about`, `projects`, `stills`, `letterforms`

Images go in `public/images/...`, then reference them as `/images/...` in `site.ts`
(`hero.photo`, `about.portrait`, `projects[].cover`, `stills`, `letterforms`).
Empty image fields render the gray placeholder.

## Structure
- `/` home bento · `/work/` · `/work/[slug]/` case study · `/about/` · `/stills/` · `/letterforms/`
- Sidebar (`components/Sidebar.tsx`) is shared by every page via `app/layout.tsx`
- Colors, type, layout: `app/globals.css` (tokens at the top)
- Fonts: Satoshi (local, `public/fonts`), Libre Baskerville for the name

## Deploy
Push to GitHub, import in Vercel (or Cloudflare Pages). Build command `npm run build`, output `out`.
Then add the domain in the host's settings and point DNS at it.

## Later
"Currently exploring" tile, GSAP motion, MDX case studies.
