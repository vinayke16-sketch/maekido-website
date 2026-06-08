# Maekido — Design System

> **Knowledge that Moves, Creation that Stays.**

Maekido is an **experiential learning platform where young people learn by making.**
Through summer camps, workshops, in-school and after-school programs — and much more —
Maekido turns curiosity into creation, giving students real skills, real projects, and
the confidence to call themselves *makers*.

The brand is **warm, bold, and empowering** — editorial confidence meets playful energy,
always student-first. The visual world pairs a near-black "ink" + warm-cream foundation
with a spectrum of joyful maker-shape accents (Sun, Coral, Mint, Sky, Violet), an
expressive **Fraunces** serif for display, and a clean **Plus Jakarta Sans** for UI.

---

## Sources

This system was reconstructed from materials supplied by the brand team. Keep these
references even though the reader may not have access:

- **Brand guidelines (authoritative):** `uploads/maekido-brand-guidelines Final.html` — the
  canonical spec. Token values, the button hover behavior, card borders, gradient icon
  tiles and tag-ink colors in this system are taken verbatim from it.
- **Figma:** "Maekido Design System.fig" — pages: Cover, Getting-Started, Foundations,
  Color, Typography, Spacing-Radius, Components, Buttons, Tags-Badges, Cards.
  Components defined: Button (Primary / Coral / Sun / Secondary × SM/MD/LG),
  Tag (Sun / Coral / Mint / Sky / Violet / Ink), Section Label, Cards (Default / Dark /
  Warm / Wide).
- **Fonts (uploaded, embedded in `assets/fonts/`):** Plus Jakarta Sans (variable) and
  Fraunces 72pt (variable, with Soft/SuperSoft optical cuts available in `uploads/`).
- **Logo (uploaded):** `Logo Black.svg`, `Logo White.svg` → `assets/logo/`. The mark is a
  cluster of hand-faced "maker shapes" (square, rectangle, triangle, circle, pentagon,
  half-moon) over a lowercase `maekido` wordmark.

There was **no production codebase** attached — only the Figma brand file and brand assets.
The UI kits in this system are therefore brand-faithful *original* product surfaces built
from the foundations, not recreations of a shipped app. Treat them as reference fixtures.

---

## CONTENT FUNDAMENTALS — how Maekido writes

The voice is a **mentor who believes in you** — encouraging, plain-spoken, never
condescending or babyish. Editorial confidence with playful warmth.

- **Person.** Speak *to* the student as **"you"**; the brand speaks as **"we"**. Rally
  language ("Let's make something", "You're a maker now") over corporate "users will…".
- **Tone.** Warm + bold + empowering. Short declaratives with momentum. Active verbs of
  *making*: build, make, create, shape, tinker, prototype, ship, launch.
- **Casing.** Sentence case for headlines and body. **ALL-CAPS only for tiny overlines /
  eyebrows / section labels** (e.g. `• COLOR`, `SECTION LABELS`), always with wide
  letter-spacing (~0.12em). Never all-caps a full sentence.
- **Headlines.** Set in Fraunces. Often a two-beat construction with the second beat in
  *coral italic* for emphasis — e.g. **Design** / *System.* Punchy, can end on a period
  for full-stop confidence ("System.").
- **The tagline** — *"Knowledge that Moves, Creation that Stays."* — uses title case and a
  balanced this-and-that rhythm. Echo that parallelism in campaign copy.
- **Personality words** the brand literally tags itself with: **Curious, Playful,
  Empowering, Clear, Warm.** Let these guide word choice.
- **Numbers & specifics.** Concrete and proud ("12 projects shipped", "3 weeks, 1 robot").
  Avoid vague hype. No jargon, no buzzwords.
- **Emoji.** Not used in product UI or brand copy. Personality is carried by the
  *maker-shape* marks and color, not emoji. (A literal `✦` / `◆` glyph occasionally
  appears as a decorative icon inside cards — see Iconography.)
- **Punctuation flourish.** The middot `·` separates metadata and inline lists
  (`Colors · Typography · Spacing`). The bullet `•` prefixes colored overlines.

**Examples**
- Eyebrow: `• SUMMER CAMPS`
- Headline: **Learn by** *making.*
- Sub: "Real skills, real projects, and the confidence to call yourself a maker."
- Button: `Start building` · `Join a workshop` · `See projects`
- Empty state: "Nothing here yet — let's make something."

---

## VISUAL FOUNDATIONS

**Overall feel.** Confident editorial layout on a warm, paper-like canvas, punctuated by
saturated playful accents and friendly hand-faced shapes. Lots of breathing room; big
serif moments; tidy sans UI.

- **Color.** Foundation is **Ink `#0D0D0D`** and **Cream `#FAF7F2`** (with **Warm
  `#F5EFE6`** as the alternate section tone, and **Ink 2 `#1A1A2E`**, a navy, as a
  secondary dark). Accents form the "maker spectrum": **Coral `#FF6B4A`** (primary accent /
  CTAs / logo mark), **Sun `#F5C842`** (highlights, active dots), **Mint `#3DD6A3`**
  (success), **Sky `#4AB8FF`** (info / links), **Violet `#8B5CF6`** (premium / creative).
  Gray **Mid `#6B7280`** for secondary text. Soft chips use 15–20% washes with darkened
  ink text (Sun→`#B58900`, Mint→`#1A9970`, Sky→`#1A7AB8`; Coral & Violet keep their hue).
  Coral is the hero — use it sparingly and decisively.
- **Type.** Two families only. **Fraunces** (optical serif, usually **Black 900**, often
  *italic* for the emphasis beat) for display & headings — expressive, timeless. **Plus
  Jakarta Sans** for everything UI: body, labels, overlines. Display tracks tight
  (-0.02 to -0.03em); overlines track wide (0.12em). Scale: 96 / 48 / 36 / 28 / 20 / 16 / 14 / 13 / 11.
- **Spacing.** 4px base grid. Section padding is generous — **80–100px** is the canonical
  page inset in the brand file. Cards pad **28px**.
- **Backgrounds.** Mostly flat cream or flat ink — **no busy gradients**. The one
  atmospheric move: on **dark (ink) hero surfaces**, *subtle* low-opacity radial color
  *glows/blobs* (sun, coral, mint) bloom in from the edges at ~10–18% opacity with ~100px
  blur — sophisticated, not loud. No photography-as-texture, no repeating patterns.
- **Shape & the maker marks.** The signature brand device is the family of **hand-faced
  geometric shapes** (square, rectangle, triangle, circle, pentagon, half-moon) in the
  accent colors, each with a doodled face and a thin black outline. Use them as joyful
  spot illustration — never redraw them; pull from `assets/logo/logo-mark.svg`.
- **Corner radii.** Friendly and rounded. Buttons & tags are **fully pill** (100px). Cards
  **24px** (`--r2`). Icon tiles **16px** (`--r`). Inputs **8–12px**.
- **Cards.** White (or Warm, or Ink for dark) surface, **24px radius**, a **1px hairline
  border** (`rgba(13,13,13,0.10)`), and *no* resting shadow — they lift on hover
  (translateY(-8px) + `0 12px 64px rgba(0,0,0,0.12)`). Inside: a **52×52 / 16px-radius
  pastel-gradient icon tile** top-left (e.g. coral tile is `linear-gradient(135deg,
  #FFE4DE, #FF9980)`), a Fraunces title, Mid-gray body, and an optional soft pill badge.
- **Borders.** Hairlines are `rgba(13,13,13,0.10)`. Outlined controls (Secondary button,
  personality tags) use a solid **2px** inset ring in ink or an accent color.
- **Shadows.** No resting elevation on cards; a single soft `0 12px 64px rgba(0,0,0,0.12)`
  pop on hover. Focus rings are a 3px coral glow.
- **Motion.** Playful but restrained. `all 0.3–0.4s` ease for most transitions; a gentle
  spring for delightful moments. Durations 120–360ms.
- **Hover states.** **Buttons swap to a contrasting brand color** — primary (ink) → coral,
  coral → ink, sun → coral, secondary → filled ink with cream text. Cards lift.
- **Press states.** Slight scale-down (~0.97). Tactile, like pressing a physical button.
- **Layout rules.** Left-aligned editorial composition; 80px page inset; content max-width
  around 1040–1200px. Overlines sit above headings with a short coral rule or dot.

---

## ICONOGRAPHY

Maekido's iconography is **light, friendly, and geometric**, matching the rounded UI.

- **Primary icon set:** **Lucide** (https://lucide.dev) — 2px rounded-stroke, no fill — is
  the recommended system icon family. It matches the brand's 2px outlined controls and
  friendly corner radii. Load from CDN (`lucide` / `lucide-react`) and color with
  `currentColor` so icons inherit Ink, Coral, or on-dark white. **(Substitution flag:** the
  Figma file did not ship a bound icon font; Lucide is the closest match to the brand's
  stroke weight and roundness. Swap if the team standardizes on another set.)
- **Decorative glyphs:** the brand file uses literal Unicode marks **`✦`** (four-point
  sparkle) and **`◆`** (diamond) inside card icon-tiles as playful spot accents, colored
  Coral or Mint. Fine to keep as text glyphs.
- **The maker shapes** (`assets/logo/logo-mark.svg`) are the brand's hero illustration —
  use them for empty states, hero spots, avatars, and celebratory moments. They are
  *brand art*, not utility icons; do not mix them into dense UI rows.
- **Emoji:** not used.
- **Rule:** never hand-draw bespoke SVG icons that compete with Lucide's weight. Pull from
  Lucide, color with `currentColor`, size on the 4px grid (16 / 20 / 24).

---

## INDEX — what's in this system

**Foundations / global CSS**
- `styles.css` — entry point (imports only). Consumers link this.
- `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` · `tokens/fonts.css`

**Specimen cards** (Design System tab) — `guidelines/*.card.html`
- Colors, Type, Spacing/Radius/Shadow, and Brand (logo + maker shapes) cards.

**Components** — `components/<group>/` (React, props-typed)
- `core/` — Button, Tag, Badge, SectionLabel, Card, IconTile, Input, Avatar.

**UI kits** — `ui_kits/<product>/`
- `marketing/` — Maekido marketing site (sticky nav, dark glow hero, programs grid,
  how-it-works, testimonial, coral CTA, footer).
- `dashboard/` — Maker dashboard (ink sidebar, greeting banner, project grid with
  progress, upcoming camps).

**Slides** — `slides/` — branded deck templates: `01-title` (dark cover), `02-section`
(coral divider), `03-content` (3-up cards), `04-stat` (oversized metrics), `05-quote`.

**Assets** — `assets/logo/` (black / white / mark), `assets/fonts/`.

**SKILL.md** — portable skill manifest for using this system in Claude Code.
