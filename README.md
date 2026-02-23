# Ismoil — DevOps Portfolio

Modern portfolio with dark/light theme, 3 languages (EN/RU/UZ), and CV page.

## Quick Start

```bash
npm install
npm run dev      # Development with Turbopack
npm run build    # Production build (static export)
```

## Features

- 🌙 Dark / Light theme toggle
- 🌐 3 languages: English, Russian, Uzbek
- 📄 CV page with print-to-PDF support
- ⚡ Static export — deploy anywhere
- 📱 Fully responsive

## Customize

1. Edit personal info: `app/page.tsx`
2. Update translations: `lib/translations.ts`
3. Modify styles: `app/globals.css` (CSS variables in `:root`)
4. Replace links: email, GitHub, LinkedIn, Telegram

## Deploy

```bash
npx vercel          # Vercel
npm run build       # Static files in out/
```
