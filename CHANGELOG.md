
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

## v1.2 – Bug Fixes (2025-12-30)
- **Bug fix:** `main.js` line 95 – Changed `or` to `||` in keyboard event handler (Python syntax → JavaScript).
- **Bug fix:** `team.html` line 326 – Fixed `canvas.Height` → `canvas.height` (case-sensitive property name).
- **Bug fix:** `publications.html` – Removed errant "News" link from navigation menu (was only on this page).
- **Enhancement:** `ourteam_css.css` – Fixed student photo sizing to be uniform (180×220px with `object-fit: cover`). Previously photos like Eli's appeared stretched due to varying aspect ratios.
- **Bug fix:** Mobile hamburger menu not responding to taps:
  - **Root cause:** Duplicate event listeners in both inline scripts AND main.js were causing the menu to toggle on then immediately off.
  - Removed duplicate menu toggle code from all HTML files (index, research, publications, team, Values, contact).
  - Consolidated all mobile menu logic in `main.js` with proper touch event support.
  - Added `!important` to critical mobile menu CSS in `main.css` to override page-specific styles.
  - Added `touchend` event listener for better mobile compatibility.
  - Added larger touch target with `padding: 10px` on `.menu-icon`.

## v1.3 – Team Updates (2025-01-04)
- **Added:** Johanna Zawada (Undergraduate Student, Chemical Engineering/Biochemistry) to the Team page.
- **Moved:** Srujana Yellapragada from active team members to Alumni section.
- **Moved:** Tristan Rans from active team members to Alumni section.
