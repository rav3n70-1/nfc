# NFC Digital Card

A **premium, futuristic, mobile-first personal NFC digital card** built with Next.js, TypeScript and Tailwind CSS.

Tap an NFC card → land on a polished digital identity hub → save contact → explore portfolio → connect on social.

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Customisation

All personal data lives in one place:

```
src/config/profile.ts
```

Edit the `profile` object to update your name, photo, bio, social links, projects and NFC URL.  
No UI components need to be touched.

---

## Project structure

```
src/
  app/
    layout.tsx          ← root layout + SEO metadata
    globals.css         ← design tokens, animations
    page.tsx            ← main page composition
  components/
    Background.tsx      ← ambient glows + grid
    ProfileHero.tsx     ← hero section (above fold)
    NFCIndicator.tsx    ← NFC badge with pulse
    ContactButton.tsx   ← vCard download
    PortfolioSection.tsx
    ProjectCard.tsx
    SocialLinks.tsx
    QRSection.tsx       ← QR code fallback
    Footer.tsx
    ScrollRevealWrapper.tsx
  config/
    profile.ts          ← ★ all personal data here
  lib/
    vcard.ts            ← vCard generator
```

---

## Adding your photo

Replace `/public/profile.svg` with your real photo:

```
public/profile.jpg   (or .png, .webp)
```

Then update `photo` in `src/config/profile.ts`:

```ts
photo: "/profile.jpg",
```

---

## Deploying

### Vercel (recommended)

```bash
npx vercel
```

Point your NFC card to your Vercel deployment URL.

### Self-hosted

```bash
npm run build
npm start
```

---

## NFC setup

Program your NFC card/tag with a single URL record pointing to this site.  
Any NFC-capable card writer app works (e.g. NFC Tools on iOS/Android).

---

## License

MIT
