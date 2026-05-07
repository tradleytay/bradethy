# TODO - Offline installable PWA

- [x] Inspect current PWA setup (manifest.json + sw.js + service worker registration)
- [x] Expand service worker pre-cache list to include all key site pages (about/contact/products/policies) and CSS assets
- [x] Update service worker fetch strategy to improve offline navigation:
  - cache-first for HTML document navigations
  - network-first with cache fallback for other GET requests
- [ ] Run a quick local offline test:
  - open index once with internet
  - install app from browser ("Install app" / PWA prompt)
  - reload with network disabled and verify pages load
- [ ] Optional: remove/replace any external-only assets (e.g. Unsplash images / FontAwesome CDN) if you need 100% offline media fidelity
- [ ] Add real PDF generation (jsPDF/pdf-lib) to control filename exactly (no print dialog)
- [ ] Add quote number + validity + customer fields into PDF
- [ ] Add “Request Quote” form that sends cart quote via email/WhatsApp


