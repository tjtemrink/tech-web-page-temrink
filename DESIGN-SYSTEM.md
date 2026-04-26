# Temrink Design System

Concept: **"Confident Calm"** — visual language for an IT partner that handles the messy stuff so the customer can stop worrying.

Audience: Canadian small/medium business owners and operations leaders (30 to 60), often non technical, currently overwhelmed by IT decisions and IT vendors. They are not shopping for tech; they are shopping for relief.

Primary emotion: **relief, then trust.** "Finally, someone competent." Not excitement, not novelty. Quiet competence with one or two moments of energy (the red accent) to keep it from feeling sleepy.

Visual style: clean, modern enterprise. Closer to Stripe / Notion / Linear than to a typical MSP site. Generous whitespace, strong typographic hierarchy, custom branded illustrations (no stock photos), restrained use of accent color.

Primary user action: **book a consultation or get a quote.** Every section earns its keep by either building trust or moving the visitor closer to that CTA.

---

## Color System

| Token | Hex | Use |
|---|---|---|
| `--navy` | `#1B1464` | Primary brand. Headlines, primary buttons on light bgs, dark sections |
| `--navy-light` | `#2A2080` | Hover states, gradient end |
| `--navy-dark` | `#0D0A3E` | Hero gradient end, deep sections |
| `--red` | `#DD0000` | Accent only. CTAs, key numbers, hover underlines, partner badge |
| `--red-dark` | `#BB0000` | Red button hover |
| `--white` | `#FFFFFF` | Primary background, cards |
| `--off-white` | `#F7F8FC` | Section dividers, subtle card fills |
| `--gray-200` | `#E5E7EB` | Borders, dividers |
| `--gray-500` | `#6B7280` | Secondary text, captions |
| `--gray-700` | `#374151` | Body text on light backgrounds |
| `--gray-900` | `#111827` | Strong body text, dense paragraphs |

**Do:** use red sparingly — fewer than 5 percent of pixels on any screen. Use navy as the workhorse.
**Don't:** put red text on red background, red on navy, or use red for body copy. Red is a pointer, not a paint.

---

## Typography

Family: **Inter** (Google Fonts), weights 400/500/600/700/800. System fallback: `-apple-system, "Segoe UI", sans-serif`.

| Element | Size | Weight | Line height |
|---|---|---|---|
| H1 | `clamp(2rem, 5vw, 3.25rem)` | 700 | 1.2 |
| H2 | `clamp(1.75rem, 4vw, 2.5rem)` | 700 | 1.2 |
| H3 | `clamp(1.25rem, 3vw, 1.5rem)` | 700 | 1.3 |
| H4 | `1.125rem` | 700 | 1.4 |
| Body | `1rem` (16px) | 400 | **1.6** |
| Section subtitle | `1.125rem` | 400 | 1.6 |
| Section label | `0.8rem` | 700, uppercase, letter-spacing 2px, color red | 1 |
| Button | `0.95rem` | 600 | 1 |
| Caption / footer | `0.85rem` | 400 | 1.5 |

**Do:** lock body line-height at 1.6 and never go below. Use the section label (small red caps) to mark every section.
**Don't:** use four font weights in one section. Pick one heading weight, one body weight, and one accent weight per area.

---

## Spacing & Grid

8px base. Section padding `80px` top/bottom on desktop, `48px` on mobile.

Container: max-width `1200px`, gutter `24px`.

Card padding: `32px` (small), `40px` (large).
Grid gaps: `16px` (tight rows), `24px` (cards), `60px` (split layouts).
Vertical rhythm between elements inside a card: `12px` for related, `20px` for separated, `32px` between heading and body.

**Do:** breathe. If a section feels cramped, increase top/bottom padding before shrinking content.
**Don't:** put two adjacent sections with the same background — alternate `--white` and `--off-white` and `--navy` for rhythm.

---

## Components

### Buttons
- `.btn-primary` — red background, white text. Used for THE primary CTA on a page (Get a Quote, Book a Consultation). Max one per section.
- `.btn-navy` — navy background, white text. Secondary CTAs.
- `.btn-secondary` — transparent with white border. Only on dark sections.
- `.btn-outline` — navy outline on light bg. Tertiary actions.
- All buttons: `padding: 14px 28px`, `border-radius: 8px`, hover lifts 1px and shows shadow.

### Cards
- Base: white background, 1px gray-200 border, 12px radius, 32px padding.
- Hover: shift up 4px, drop the border, raise shadow to `0 12px 40px rgba(0,0,0,.12)`.
- Top accent: 3px scaleX(0) line that scales in on hover. Red.

### Section labels
Always small caps, letter-spaced, red, above the H2. Single phrase, 1 to 4 words. They orient the reader without taking attention from the headline.

### Platform cards (Microsoft / Google split)
Equal-weight pair. Microsoft uses navy accents, Google uses red accents. List items use a small dot (navy or red), not checkmarks — checkmarks read as "feature list", dots read as "ecosystem coverage."

### Illustrations (NOT stock photos)
All service illustrations are custom SVG-rendered PNGs at 1000x750. Style:
- White card on `--off-white` gradient background, soft drop shadow.
- Heading in `--gray-900`, subhead in `--gray-500`.
- Inner content uses navy primary, red accent, soft-bg secondary boxes.
- No people, no abstract gradients alone, no generic tech imagery.
- Always specific to what the service does — show stats, steps, structure.

**Do:** generate new illustrations from the same SVG template (`api/_gen_illustrations.js`) so every one has the same visual rhythm.
**Don't:** mix stock photography back in. If a new section needs an image, generate a branded illustration.

---

## Sections (page rhythm)

Home page order, top to bottom:
1. Hero (dark navy, animated network canvas, white text)
2. Platform split (light gray, two equal cards: Microsoft + Google)
3. Services overview (white, 6 cards in 3-col grid)
4. Why Temrink (white, two-column)
5. At a Glance (white, single image: cost comparison)
6. Global Delivery (dark navy, three stats)
7. How It Works (light gray, 4 steps)
8. Industries (white, chips)
9. Partners (light gray, two logos with strong headline)
10. FAQ (white, accordion)
11. CTA (red gradient or navy with red button)

Alternate `--white` and `--off-white`. Insert one navy section as a visual rest mid-page (Global Delivery) and one at the end (CTA).

---

## Interaction patterns

Three "delight" moments, all subtle:

1. **Scroll-triggered fade-up.** Cards enter on scroll with a small upward translate. Already wired via `.fade-up` and the IntersectionObserver in `main.js`.
2. **Card hover lift + accent line.** Service cards lift 4px and reveal a 3px red line at the top. Communicates "interactive" without animation noise.
3. **Animated cost bars.** The bars in the cost comparison section fill from 0 to their final width when scrolled into view. Already wired in `main.js`.

**Don't:** add page-load animations, parallax scrolling, scroll-jacking, or anything that delays the user from reading.

---

## Voice & copy rules

- Concrete over abstract. "Average response under 15 minutes" not "fast support."
- Specific numbers over vague claims. "$25,000 to $50,000 per year" not "affordable."
- Plain English over jargon. "We run your IT" not "We provide comprehensive ITSM."
- Conversational over corporate. "Microsoft shop? Google shop? Both? We run all three." not "Platform agnostic delivery model."
- Short sentences. Average 12 to 18 words. Cut anything that does not serve the reader.

---

## Implementation reference

Tokens live in `css/styles.css` `:root`. Components live below in section-grouped blocks. Illustrations are generated by `api/_gen_illustrations.js` and saved to `images/`. Pages share the same header/footer structure across `index.html`, `services.html`, `about.html`, `contact.html`.

When extending: regenerate illustrations through the existing script (don't add new image styles), reuse existing utility classes (`.section-label`, `.section-subtitle`, `.fade-up`, `.bg-light`), and follow the 80px top/bottom section padding.
