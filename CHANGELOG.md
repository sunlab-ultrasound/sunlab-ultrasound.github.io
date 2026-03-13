
## v1.5 – Publications Page Redesign: Galloway-style (2026-03-04)
- **Complete redesign** of publications page to match Galloway Lab (MIT) layout style
- Publications now grouped by year (2025 → 2012) with year section headers
- Each publication is a full-width entry with:
  - Figure thumbnail on left (placeholder ready for images)
  - Title as clickable heading
  - Authors, journal name (bold/italic), year
  - Full abstract text
  - "Read Paper →" link
- Replaced old card grid and glassmorphism publication list with clean academic layout
- New publications_css.css with responsive design (mobile stacks vertically)
- Max-width 960px centered layout for readability
- Kept wavy background and shared header/nav from main.css
- **PDF Downloads (2026-03-04):** Replaced all 26 external "Read Paper →" links with local "Download PDF ↓" buttons pointing to `assets/publications/` PDFs
- Clicking title or figure opens the PDF in-browser; the button triggers a file download
- Styled download button with dark gray (#222839) rounded pill style matching site's "Read more →" buttons
- **Figure 1 Extraction (2026-03-04):** Extracted Fig 1 from all 26 PDFs using PyMuPDF, saved to `assets/publications/figures/`
- Replaced all placeholder boxes with actual publication figures (160×160px, object-fit: cover, rounded corners)
- **Abstract fixes from PDF verification (2026-03-04):**
  - PUB 3: Added missing final sentence about shape as design parameter + i/ii/iii/iv numbering
  - PUB 2: Added missing porcine mTBI model results (500-1000-fold lower Gd doses)
  - PUB 4: Added missing final sentence about evidence for FUS + intranasal gene therapies
  - PUB 5: Added missing final sentence about potential of antibody-modified nonspherical MB
  - PUB 12: Added missing sentence about irinotecan not improving outcomes

## v1.4 – Publications Page Redesign (2026-03-03)
- **Complete redesign** of the publications page with new card-based layout
- Each publication now features:
  - Title banner at the top
  - Figure placeholder on the left (ready for Fig 1 images)
  - Abstract/significance text on the right
  - "Read Paper" link button at the bottom
- Added 26 featured publications with real abstracts
- **Abstract audit (2026-03-03):** Fixed 4 publications that had placeholder/generic abstracts instead of real ones:
  - PUB 16: Irinotecan BBB delivery (now includes specific experimental details: 36 targets, 98% success rate, P < 0.01)
  - PUB 17: HA-DOX colorectal cancer (now reflects actual findings on intestinal accumulation and mucosal preservation)
  - PUB 22: Caged microbubbles (now describes nanoporous shell design and interfacial nanoprecipitation method)
  - PUB 25: TfR nonspherical MB (expanded from 362 to 1092 chars with full abstract on rod-shaped MB targeting)
  - PUB 14: Direct brain infusion (now includes Gd-albumin 74 kDa, AAV ~4 MDa, specific P-values and volumes)
  - PUB 21: U-Net artifact suppression (now describes MRI-guided FUS, DAS beamforming limitations, space-varying PSF)
  - PUB 24: hGDNF transgene (now includes 3-fold increase, 80% enhancement, 40% proximity to dopaminergic neurons)
  - PUB 26: Gadolinium micropatches (now describes GLAMs, choroid plexus role, hydrogel discoidal design, mTBI underdiagnosis)
- New responsive CSS with glassmorphism design
- Removed old grid-based card layout
- Ready for figure images to be added to `assets/publications/` folder

---

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
- **Added:** Power Chanikarn (Lab Manager) to the Team page, positioned after Max and before PhD students.
- **Added:** Johanna Zawada (Undergraduate Student, Chemical Engineering/Biochemistry) to the Team page.
- **Moved:** Srujana Yellapragada from active team members to Alumni section.
- **Moved:** Tristan Rans from active team members to Alumni section.
