# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (Vite, hot reload)
npm run build     # production build → dist/
npm run preview   # serve the production build locally
```

No linter, formatter, or test suite configured.

## Stack

React 18 + Vite 6 + Tailwind CSS 3. No router (single-page, anchor-based navigation). No state management library. No backend — contact form submits via [FormSubmit.co](https://formsubmit.co) AJAX to `techchazan@gmail.com`.

## Architecture

Single `App.jsx` that composes all sections in order:

```
Navbar → Hero → Process → Services → SavingsSection → WhyChazan → CTASection → ContactSection → Footer
```

All components are in `src/components/`. Scroll-reveal animations come from `src/hooks/useScrollAnimation.js`, which exports:
- `useScrollAnimation(threshold)` — returns `{ ref, isVisible }` (one-shot IntersectionObserver, stays visible once triggered)
- `staggerDelay(index, base)` — returns an inline `transitionDelay` style object for staggered card animations

## Design tokens (tailwind.config.js)

| Token | Value | Usage |
|---|---|---|
| `deep` | `#2F4F4F` | Primary dark background, text on light sections |
| `deep-light` | `#3a6060` | Hover states on dark bg |
| `deep-darker` | `#1e3535` | Footer, ContactSection background |
| `electric` | `#00CED1` | Accent color, CTAs, highlights |
| `electric-light` | `#33D6D9` | Hover state for electric elements |
| `shadow-electric-lg` | cyan glow | Applied on CTA button hover |

Custom utilities in `src/index.css`: `.dot-grid` (hero/dark section bg pattern), `.line-grid` (light section bg pattern).

## Section IDs and navigation

All CTA buttons and nav links point to `#contato` (the contact form). Section anchors:

| `#como-funciona` | Process |
| `#servicos` | Services |
| `#diferenciais` | WhyChazan |
| `#cta` | CTASection (the "schedule a call" pitch) |
| `#contato` | ContactSection (the actual contact form) |

## Component patterns

**Dark sections** (`bg-deep` or `bg-deep-darker`): white text, `text-white/50` for secondary, electric accents.  
**Light sections** (`bg-white line-grid`): `text-deep` for primary, `text-deep/55` for secondary.

Every section follows the same header structure: eyebrow label (electric, uppercase, tracking-widest) → `h2` → description paragraph → content.

Data arrays (cards, steps, comparisons) are defined as `const` at the top of each file, outside the component, so the JSX stays clean.

Sub-components within a file (e.g. `StepCard`, `DiffCard`, `BottomCallout`) are defined in the same file as their parent — not extracted to separate files unless reused elsewhere.
