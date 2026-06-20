# TODO - CSS Debug Plan (Bradethy Store)

## Step 1: Confirm current status
- [x] Parsed CSS loading order in HTML: `css/base.css` → `css/styles.css` → `css/about.css` / `css/contact.css`
- [x] Inspected `css/base.css` and `css/styles.css` variable definitions
- [x] Checked for high-probability cascade issues (duplicate `:root`, duplicate media blocks)

## Step 2: Current conclusion
- [x] User confirmed: nothing is visually wrong right now.

## Step 3 (Recommended Hardening): Make theme variables consistent
- [ ] Make `--primary/--primary-dark/--secondary/--dark/--light/--gray/...` defined in exactly one place (either `base.css` or `styles.css`).
  - Check: which pages require which theme.
- [ ] Remove/avoid accidental overrides between `base.css` and `styles.css`.

## Step 4 (Recommended Hardening): Reduce duplicate media blocks
- [ ] Consolidate repeated `@media (max-width: 768px)` sections inside `css/styles.css`.
- [ ] Ensure nav/mobile/cart modal rules exist only once per breakpoint.

## Step 5 (Regression test)
- [ ] Validate on desktop + mobile breakpoints:
  - [ ] index.html
  - [ ] about.html
  - [ ] contact.html
  - [ ] products.html
  - [ ] mobile widths (<=768px)



