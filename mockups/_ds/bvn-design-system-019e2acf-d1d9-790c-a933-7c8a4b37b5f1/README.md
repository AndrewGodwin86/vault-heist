# BVN Design System

A working design system for **BVN** — a global creative collective of architects, designers, strategists and researchers with a shared vision for a better planet.

This folder contains BVN's typographic, colour, illustration and iconography foundations together with reusable UI components and presentation templates. It is used by design agents to produce mocks, prototypes, decks and production-ready interfaces that look and sound like BVN.

---

## Source materials

Everything in this system is derived from materials supplied directly by BVN:

- **`BVN_BrandIdentity Guidelines.pdf`** — the official brand guidelines (referenced; not present in the project filesystem at build time).
- **`BVN_Logotype_RGB_BLK_FA.svg` / `BVN_Logotype_RGB_WHT_FA.svg`** — primary logotypes (black on light / white on dark).
- **`BVN_Iconography_RGB_BLK_FA-*.png`** — the proprietary BVN icon library (~225 marks, monoline, black on transparent).
- **`*_White.png`** — the BVN illustration library (~40 line-drawn figures, plus trees and bushes).
- **`ABCFavorit*.ttf`** — the ABC Favorit typeface family by Dinamo, in Regular, Italic, Bold, Bold Italic, Lining and Mono.

No public Figma library, GitHub repo or production codebase was supplied for this build. UI kit recreations are based on BVN's public-facing presence (bvn.com.au) and the visual rules in the supplied brand materials. If those source files become available later, this system should be re-derived from them.

---

## How to use

If you are an agent producing a BVN artefact:

1. **Read this README first**, then `SKILL.md`.
2. Link the foundation: `<link rel="stylesheet" href="colors_and_type.css">` (or the relative path).
3. Pull components from `ui_kits/website/` or copy slide templates from `slides/`.
4. Pull real assets from `assets/` — **never redraw them**. The icons and illustrations are official artwork.
5. Hold the line on the visual rules below: BVN is **black on white**, **structured**, **generous**, **uncluttered**. Accents are spot colour, never gradients.

---

## Folder index

```
.
├── README.md                  ← you are here
├── SKILL.md                   ← Agent Skill manifest (Claude Code compatible)
├── colors_and_type.css        ← single foundation stylesheet (tokens + type)
├── assets/
│   ├── logos/                 ← BVN wordmark (black, white) + Instagram glyph
│   ├── icons/                 ← 224 BVN icons (icon-002.png … icon-228.png)
│   └── illustrations/         ← 40 line-drawn figures + trees + bushes
├── fonts/                     ← ABC Favorit TTFs (Regular/Bold/Italic/Lining/Mono)
├── preview/                   ← design-system preview cards (rendered in DS tab)
├── ui_kits/
│   └── website/               ← BVN website recreation (JSX components + index)
└── slides/                    ← 16:9 presentation templates
```

---

## CONTENT FUNDAMENTALS

BVN's voice is **informative, inclusive and straightforward**. Articulate and energetic. It actively pushes back against the architecture industry's tendency toward jargon.

### Tone

- **Plain. Specific. Generous.** Explain things without assuming knowledge.
- **Energetic but not breathless.** Direct sentences. Active verbs. No hype.
- **Crediting, not boasting.** When BVN does something, the clients, collaborators, consultants and teams are named alongside.
- **No unsubstantiated claims.** Numbers, projects and dates carry the weight.

### Casing

- Headlines and body copy are **sentence case**. Title Case is rare — almost only in legal lines and footers.
- The brand is always **BVN** (uppercase, no full stops). Never "Bvn" or "B.V.N."
- Eyebrows / micro-labels / nav use **UPPERCASE** in ABC Favorit Mono with tracked-out letterspacing (~0.12em).

### Person & address

- BVN says **"we"** and addresses the reader as **"you"** when speaking conversationally.
- For project descriptions and case studies, third-person past/present is normal: *"BVN designed…"*, *"The team worked with…"*

### Vocabulary

- **Yes:** collective, craft, climate, country, community, fabric, light, material, place, practice, public, research, threshold, weight.
- **No (or sparingly):** synergy, leverage, holistic solution, ecosystem (the marketing kind), curated, bespoke, journey, ideate, unpack, world-class.
- BVN credits — *clients, collaborators, consultants, teams* — verbatim, in that vocabulary.

### Punctuation

- En dashes for ranges and side-clauses (— with hair-space margins is fine).
- Oxford comma: yes.
- Numerals 0–9 may be spelled out in long-form prose; 10+ always numerals.
- Capitalise *Country* when referring to Aboriginal and Torres Strait Islander Country.

### Emoji & symbols

- **No emoji.** Ever, in any product surface.
- Unicode arrows (→, ↗, ↘) are used for navigation cues.
- Bullet glyphs are simple disc (•) or hyphen-minus (—); never decorative.

### Voice — examples

> *"We are a global creative collective of architects, designers, strategists and researchers with a shared vision for a better planet."*  ✓ inclusive, plural, plain.
>
> *"A 1950s curtain-walled tower retrofitted to meet today's climate targets, with the original Pettit & Sevitt structure left exposed."*  ✓ specific, dated, names collaborators.
>
> *"Unlocking world-class outcomes for our valued clients."*  ✗ jargon, vague, omits the work.

---

## VISUAL FOUNDATIONS

The BVN identity reads like an editorial publication for architecture: **structured, hairline-ruled, type-led**, with bold colour used as punctuation, never as decoration.

### Colour

- **Black on white is the default.** Most surfaces are pure `#FFFFFF` with type and rules in pure `#000000`. There is no soft "off-white" or "near-black".
- **One spot colour at a time.** Where colour appears, it is a **single saturated accent** filling a panel or sitting behind a headline. Two accents in the same composition is rare.
- **Vivid, not pastel.** The palette runs hot: `#ed5933` vermilion, `#e0f532` citron, `#3fdadf` aqua, `#6d67bd` violet, `#96131b` crimson, `#13519c` indigo, `#ffa600` amber, `#99ef4c` lime, `#fcdb00` sunflower, `#0093ee` azure. Plus two soft tints: `#F7FCCC` pale citron, `#bfe9d0` pistachio.
- **No gradients.** Solid fields only. Never linear, radial, or mesh.
- `--grey` `#b3b3b3` is the **only** mid-grey; used for inactive states and metadata. There is no extended grey scale.

### Typography

The BVN type system follows **§5.6–5.9** of the brand guidelines.

**Families**

- **ABC Favorit** — sans-serif workhorse for all headings and body. Regular, Italic, Bold, Bold Italic cuts.
- **ABC Favorit Lining** — the **emphasis** cut. Not italic, not bold — *Lining* is the brand's emphasis tool inline within body copy.
- **ABC Favorit Mono** — captions, eyebrows, pull quotes, image annotations, numerals/figures.

**Role ladder — (H)eadline · (B)ody · (C)aption**

| Role | Size / leading | Family | Notes |
|---|---|---|---|
| `.h0`  | 300 / 290 (clamp'd) | Favorit Regular | Display mega — print-scale |
| `.h1`  | 80 / 80   | Favorit Regular | Page-level headline |
| `.h2`  | 45 / 48   | Favorit Regular | Section |
| `.h3`  | 30 / 32   | Favorit Regular | Sub-section |
| `.h4`  | 18 / 20   | Favorit Regular | Inline heading |
| `.h4-bold` | 18 / 20 | Favorit **Bold** | Emphasised inline heading |
| `.h5`  | 10 / 12   | Favorit Regular | **UPPERCASE** — micro-heading |
| `.h6`  | 10 / 12   | Favorit **Bold** | Micro-heading, emphasised |
| `.b1` / `p` | 16 / 19.2 (≈ 15/18 brand) | Favorit Regular | Primary body — capped at ~38 em for the 9–13 wpl target |
| `.b1-emphasis`  | 16 / 19.2 | Favorit **Lining** | Inline emphasis |
| `.b1-pullquote` | 16 / 19.2 | Favorit **Mono** | Indented 200 % (2 em) |
| `.b2`           | 10 / 12 | Favorit Regular | Secondary body / small print |
| `.b2-emphasis`  | 10 / 12 | Favorit **Lining** | |
| `.b2-pullquote` | 10 / 12 | Favorit **Mono** | |
| `.c1` / `figcaption` | 10 / 12 | Favorit **Mono** | Caption |
| `.c1-numbers` / `.c1-diag` | 10 / 12 | Favorit **Mono**, lining + tabular | Numerals and diagrammatic numerals |
| `.c2`           |  8 / 10 | Favorit **Mono** | Micro-caption |
| `.c2-numbers` / `.c2-diag` | 8 / 10 | Favorit **Mono**, lining + tabular | |

**Critical: default weight is Regular.** Bold is reserved for `.h4-bold`, `.h6`, and as one of the four hierarchy levers (Scale · Case · Weight · Underline) in §5.9. Never paint a whole layout bold.

**Size→leading/tracking matrix** (from §5.8 — bigger text gets tighter):

| Size band | Leading | Tracking |
|---|---|---|
| ≥ 400 pt | 90 %  | −0.050 em |
| ~ 300 pt | 95 %  | −0.025 em |
| ~ 150 pt | 100 % | −0.015 em |
| ~ 75 pt  | 100 % | −0.015 em |
| ~ 35 pt  | 110 % | 0 |
| ≤ 20 pt  | 120 % | 0 |

The role tokens above bake this in. If you build a custom size, follow the matrix manually — `--tracking-mega / -display / -tight` are exposed for it.

**Typesetting rules (§5.9)**

- **Hierarchy levers, in order:** Scale → Case → Weight → Underline. Reach for them in that order; stop as soon as the hierarchy reads.
- **Alignment:** paragraphs and long-form text are left-aligned. Headings may shift to centred (`.h-centre`).
- **Paragraph spacing:** 50 % of text size (baked into `p`, `.b1`, `.b2` via `margin-bottom: 0.5em`).
- **Lists:** filled disc primary, outlined disc nested. Indentation **200 %** of text size (2 em padding-inline-start). Numbered lists are an alternate when content is ordered.
- **Pull quotes:** indented 200 % (2 em). Set in **Favorit Mono**.
- **Line length:** target **9–13 words per line** (≈ 38 em / 60 ch at 16 px).
- **Text sizing on screen:** never below **12 px**. Body sits at 16 px (brand 15 pt mapped to web 16).
- **Ragged edges:** kept as regular as possible. Never justified.
- **Orphans/widows:** avoided — break lines manually if needed.
- **Smart quotes always.** Curly `' ' " "` for prose; primes only for measurements (`5′6″`). Dumb straight quotes are banned.
- **Small caps** for section heads inside a running paragraph: `.smallcaps` (uses real OpenType small caps via `font-variant-caps: all-small-caps`).
- **Underline emphasis** (`.underline-emphasis`) is the *least formal* lever — use for headings or key words; never for whole paragraphs.

**Image captions (§5.9 final)**

- Circled-numeral callouts laid over the image — set in **Favorit Regular** (not Mono).
- The accompanying caption text alongside is **Favorit Mono** at C1 size.


### Spacing & layout

- A **strict 12-column grid** with 24px gutters at standard breakpoints; collapses to 4-column on mobile.
- Rhythm: **4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128**. Use multiples of 8 for nearly everything.
- Pages are **generous, almost magazine-like** — full-bleed type, large vertical breathing room, hairline rules to divide ideas.

### Backgrounds

- **White (`#FFFFFF`) or Black (`#000000`)** for surface. That's the rule.
- **Spot-colour blocks** appear as full-bleed panels (whole hero, whole slide, whole card) — never as 12px-rounded card backgrounds.
- **Hand-drawn flora** (`assets/illustrations/23_tree1.png` etc.) can sit on a colour or white field as a textural anchor.
- **Imagery** is full-bleed and unframed when present — typically architectural photography, warm in light, natural palettes (concrete, brick, eucalypt, sandstone).

### Borders, rules & dividers

- **Hairline rules in pure black** (`1px` or `1.5px`, never 0.5px and never coloured) organise everything.
- Section breaks are full-width hairlines. Tables, lists and metadata blocks are hairline-ruled.
- **No box-shadows.** Anywhere. Elevation is communicated by black-on-white contrast, weight and rules.
- **No rounded corners** on containers, cards, modals or media. Pills (radius 999px) are used for **buttons**, **tags**, **avatars** and inline tap targets.

### Cards

A card is a hairline-ruled rectangle: `3px solid #000`, square corners, white interior, generous internal padding (24–32px), one image or one block of type, never both decoratively. No shadow, no glow, no inner highlight.

### Buttons & interactive surfaces

- **Primary:** solid black background, white text, **pill-shaped** (`border-radius: 999px`), ABC Favorit **sans-serif** at ~15px medium weight, sentence case. Optional trailing arrow `→`.
- **Secondary (ghost):** white background, `1.5px` black border, black text, same pill shape and label treatment.
- **Hover:** opacity drops to 0.65, OR fill inverts (black ↔ accent). 120ms ease.
- **Press:** no shrink, no shadow — instead, momentary invert (white ↔ black).
- **Focus:** 2px outline offset 3px, in the active accent colour, pill-radius.
- **Icon buttons** are either **borderless** (just the icon with hover opacity) or sit inside a **circular border** (1.5px black, `border-radius: 50%`). Never square-cornered with a border — that look is reserved for cards, not icons.

### Imagery treatment

- Architectural photography is **warm-leaning, naturally lit, never desaturated, never B&W**. Materials are visible.
- Photos are **always full-bleed within their container** with no padding, no rounded corners, no drop shadow, no filter.
- Captions sit underneath in Mono, hairline-separated from the image.

### Illustrations

- The brand carries a **library of monoline line-drawn figures** (people walking, sitting, working, talking) and **hand-drawn flora** (trees, bushes). All single-weight black line on transparent.
- They are used to **populate scale diagrams** (people-in-space), to **anchor empty states**, and to **carry blank vertical real estate** in editorial layouts.
- Never recolour them. Never apply effects. Never mirror them to "balance" a composition — keep their natural posture.

### Motion

- **Restrained.** 120–240ms transitions, `cubic-bezier(0.2, 0.6, 0.2, 1)` standard. No bounces, no spring overshoots.
- Page reveals: hairline rules draw in left-to-right at 480ms, content fades up 8px.
- Scroll-linked text reveals are acceptable for editorial pages; never auto-rotating carousels.

### Transparency, blur, glassmorphism

- **None.** No `backdrop-filter`, no translucent panels, no frosted overlays. Surfaces are opaque.

### Hover & press states

- **Hover:** opacity 0.6–0.7 for links and icons; full-fill inversion for primary buttons; underline thickening (1px → 2px) for editorial links.
- **Press:** no transform-scale. The press state is the inverse fill momentarily applied.

### Layout rules

- Logotype lives in the **top-left** of every screen, sized to ~64–96px wide on desktop, 40px on mobile.
- Primary nav is **right-aligned, single line, Mono uppercase, hairline-ruled below**.
- Footer is a full hairline-ruled block with credits, addresses, social links, and a "© BVN" line.
- Wide editorial pages run at `max-width: 1440px` with `clamp(20px, 4vw, 56px)` horizontal padding.

---

## ICONOGRAPHY

BVN has a **proprietary icon library** of around **225 marks** delivered as PNGs (monoline, pure black on transparent, ~275×275 native). They live at `assets/icons/icon-002.png` through `assets/icons/icon-228.png`.

Stylistically they are:

- **Monoline.** Single stroke weight, ~14–18px in the native 275px frame.
- **Square-cornered, generous.** Not minimal-pixel; geometric and friendly.
- **Sometimes circular.** A subset of marks sit inside a circular outline.
- **Always black on transparent.** Recolour by CSS filter (e.g. `filter: invert(1)` on dark surfaces) — never by editing the PNG.
- **Used at 24–40px** in product UI, **48–80px** in editorial layouts.

### When to use which icon

The icons are numbered, not named — BVN keeps the system flexible. Pick by visual match. A few anchor numbers worth knowing:

| Icon                            | Concept                          |
|---------------------------------|----------------------------------|
| `icon-002.png`                  | Vehicle / mobility               |
| `icon-050.png`                  | Set square / drafting / craft    |
| `icon-100.png`                  | Letter mark (F)                  |
| `icon-150.png`                  | Lightning / energy               |
| `icon-228.png`                  | Skyline / urban                  |

When in doubt, pick the one that reads at a glance. The library is large enough that you should always find a close match.

### Logos

- **Wordmark, black:** `assets/logos/bvn-logo-black.svg` — use on light surfaces.
- **Wordmark, white:** `assets/logos/bvn-logo-white.svg` — use on dark or accent-colour surfaces.
- **Instagram glyph:** `assets/logos/instagram.png`.

### What we don't use

- **No Material Icons / Heroicons / Lucide.** The BVN library is the source of truth.
- **No emoji.** Never as a UI element, never inline in copy.
- **No Font Awesome / icon webfont.** PNG is fine — they are bitmap by design at the sizes we use.
- **Unicode arrows** (→ ↗ ↘ ←) are allowed for inline navigation cues, set in ABC Favorit.

### Illustrations

`assets/illustrations/` contains **40 hand-drawn figures and pieces of flora** numbered `1.png`–`39.png` plus four scenery pieces (`23_bush1.png`, `23_bush2.png`, `23_tree1.png`, `23_tree2.png`). Use them for:

- Empty-states, intro panels, large editorial whitespace.
- Scale diagrams (figures placed against architectural drawings to indicate human scale).
- Decorative anchors at the foot of long-form content.

Treat them with the same rules as icons: single black ink, never recolour, never apply effects.

---

## Substitutions & known gaps

- **Brand Guidelines PDF** was referenced in the supplied file list but not present in the project filesystem at build time. The voice, tone, palette and grid rules here come from BVN's public site and the supplied colour/copy notes; **please re-derive against the official PDF when available.**
- **No production codebase** was supplied. The UI kit in `ui_kits/website/` is a recreation based on the brand foundations, not a copy of bvn.com.au's source.
- **All fonts are present** — no Google Fonts substitution is needed.
- **No slide deck template** was supplied; `slides/` contains a small set of original templates that follow the visual foundations above.

---

## Index of cards in the Design System tab

Foundation cards: logo, colour palette, typography specimens, spacing scale, iconography contact sheets, illustration set, button/card/form previews. Each card lives as a small HTML file in `preview/` and is registered as an asset card for the DS review pane.
