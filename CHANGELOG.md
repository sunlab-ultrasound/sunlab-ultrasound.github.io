
# SUN Lab Website – Maintenance Pass (v1)
Date: 2025-08-11

## What I changed
- Added **main.css** with shared header/nav/backdrop/glass utilities to reduce duplication.
- Added **main.js** consolidating wavy background animation + mobile menu toggle.
- Injected `main.css` and `main.js` into all pages (index, research, team, values, contact, publications).
- **Accessibility & UX**
  - Added `loading="lazy"` to all `<img>` tags for performance.
  - Fixed alt attribute typo (`atl` → `alt`).
  - Corrected text typos: “Immonomodulation” → “Immunomodulation”; “Univiersity” → “University”; “Affliations” → “Affiliations”.
- **Bug fix:** `canvas.Height` → `canvas.height` in `script.js` (would break resizing).
- Kept page-specific CSS (e.g., `index.css`, `research_css.css`, etc.) to avoid regressions; they now build on `main.css`.

## Next upgrades I recommend
- Merge duplicate CSS into `main.css` fully (remove overlap in page CSS).
- Move all inline scripts to `main.js` (e.g., publications/contact page canvas code).
- Add ARIA labels on modal close buttons and improve color contrast where needed.
- Convert heavy PNG/JPG assets to WebP and set explicit `width`/`height` to stabilize layout.


## v1.1
- Swapped header logos to a transparent-background asset on all pages.
- Added ARIA and keyboard support to modal close buttons; Escape closes modals.
- Honored `prefers-reduced-motion` (keeps canvas static for users who prefer less motion).
- Ensured logo background is transparent via CSS.
