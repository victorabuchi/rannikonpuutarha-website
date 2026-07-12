# Rannikon Puutarha Website: Coding Rules

## Text rules
- Never use em dashes or double hyphens anywhere: not in code, comments, strings, UI text, or commit messages. Use a comma, colon, or period instead
- No emojis anywhere in code, UI text, comments, or console output
- No AI generated marketing text. All Finnish content comes from the real rannikonpuutarha.fi site or from Victor directly. English translations must be plain and faithful, not embellished

## Stack
- Next.js app router, TypeScript, no Tailwind, plain CSS modules or global CSS
- Static export: next.config must have output: 'export'
- Deployed as a Render Static Site
- Font: DM Sans from Google Fonts via next/font, weights 400, 500, 700

## Design
- Green brand colors matching the farm logo, light clean background
- Mobile first, fully responsive
- Fast loading, semantic HTML, proper meta tags for SEO, lang attribute follows selected language

## Language
- Finnish is the default language, English via a toggle in the header
- i18n implemented with a React context and localStorage, no Next.js i18n routing
- All strings live in lib/i18n.ts with fi and en dictionaries

## Forms
- Jobs apply form and contact form POST to the rannikon.com backend API, endpoint paths will be provided later
- No third party form services

## Commits
- Short plain English commit messages
