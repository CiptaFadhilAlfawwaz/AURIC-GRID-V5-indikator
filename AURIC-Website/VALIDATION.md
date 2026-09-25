# Release validation — 12 September 2026

## Passed
- Next.js 16.3.5 production static export. Only / and generic not-found page; no API/runtime backend.
- npm ci --ignore-scripts from package-lock.json completed successfully.
- ESLint 9.39.4, TypeScript and static export checks passed. ESLint major pinned for next/react rule compatibility (development-only).
- npm audit: 0 known vulnerabilities at the time of verification (including development tree).
- 119+ static assertions: local assets, section links, WhatsApp number/message, external-link attributes, CSP hashes, no prohibited files, preserved original screenshot.
- Browser desktop visual review (approximately 1360px wide): complete page inspected.
- Responsive layout review with exact exported HTML in 390px and 768px frames. Usable document widths 375px and 753px after scrollbar; scrollWidth equals clientWidth. No horizontal page overflow observed.
- Mobile menu opens/closes; native screenshot dialog opens/closes; FAQ disclosure opens; original images load. Desktop dialog/FAQ tested on direct export page.
- No application console or CSP errors observed on direct local export page. One browser-extension metadata error was unrelated to the site.
- Official wa.me number 62895322449706 and requested prefilled message verified from rendered links. No WhatsApp message was sent.
- Original screenshot copied without changing bytes or numbers; maximum observed drawdown 81.99% remains prominent alongside profit.
- Self-hosted Manrope font; responsive robot assets ~150KB/70KB; original screenshot ~212KB; monthly crop ~60KB.

## Scope and limits
- Responsive testing uses same exported HTML in a temporary srcdoc QA harness; this verifies layout and controls, not mobile browser/device-specific behavior. Temporary harness is removed before packaging. Fragment navigation is validated on the direct page, not srcdoc.
- Local QA runs on HTTP, with only upgrade-insecure-requests omitted from its local response. Production _headers retains this directive and denies framing. No production security policy was weakened for QA.
- Lighthouse numerical scores were not measured in this environment; no >90 score is claimed. The site is statically rendered with compressed imagery and no third-party JavaScript.
- The native hosting publication status is authoritative for deployment success. HTTPS redirect, actual edge headers/TLS and provider WAF settings require production-origin inspection; generated _headers/vercel.json alone do not prove host enforcement.
- HSTS remains opt-in until HTTPS has been verified. MFA, DNSSEC, registrar lock, account security, WAF and monitoring must be configured on the owner's provider accounts.
- No claim of live results, guaranteed profit or an unhackable website.

## Robot and installation copy revision
- Hero replaced with an optimized adaptation of the owner-provided robot reference, facing left; same responsive dimensions retained. OG and Twitter use the updated image.
- FAQ, rental steps, account notice and documentation consistently describe admin-managed MT5/VPS installation using account number, broker server and trading password supplied directly to admin. No credential form or collection code was added.
- Production build, lint, TypeScript and 155 static export checks passed. Desktop hero and expanded FAQ visually reviewed in the browser; no application/CSP console errors observed. Only unrelated browser-extension metadata errors occurred.

## Multi-product release — 22 September 2026
- Existing Git-backed project expanded in place; original EA components reused at /ea/auric-grid-v5/. Five requested routes statically rendered, with unique SEO and product-specific WhatsApp messages.
- npm run lint, npm run typecheck, production build and 592 export checks passed. npm audit: 0 known vulnerabilities. No dependency changes required.
- Backtest original bytes match prior Git version. Two indicator original PNGs match source bytes. Lossless chart WebPs match source pixels (momentum excludes only browser/desktop chrome via documented crop).
- Desktop homepage, ecosystem, catalog, SMC product and retained EA page visually inspected. SMC screenshot loaded; dialog opens/closes. Product navigation and correct WhatsApp message verified without sending a message.
- All five routes inspected at 390px/768px frame widths (375px/753px usable); no horizontal page overflow. Mobile navigation opens/closes; mobile SMC lightbox opens/closes.
- Responsive QA uses exported markup/CSS plus the native interaction script in temporary srcdoc frames. Next bootstrap scripts are omitted only from this harness to avoid navigating the frame; actual routing and hydration are checked on direct pages. Harness is removed before packaging.
- No application or CSP console errors observed on direct pages; browser-extension metadata errors are unrelated. Static export validates image alternatives, single h1, dialog targets, unique IDs, safe external links and section fragments.
- Direct HTTP header inspection from the command environment is unavailable (connection refused / timeout). Generated CSP/security headers are checked, but actual production edge/TLS enforcement remains a hosting validation requirement. No new claim of Lighthouse scores or absolute security is made.

## Indicator purchase revision — 24 September 2026
- Both indicators: Rp110.000 each, one-time purchase, lifetime use, full source delivered privately after purchase; personal modifications allowed, redistribution/publication/resale require permission.
- Existing EA route, rental configuration, performance data, screenshots, dependency lockfile and security scripts unchanged.
- Lint, TypeScript, production static build and 624 export checks pass. npm audit: 0 vulnerabilities. Export checks cover all 5 routes, anchors/assets, exact per-product WhatsApp messages, canonical metadata, CSP hashes, headers and prohibited product source files.
- Browser review: desktop pricing, native FAQ expansion, mobile FAQ, homepage/catalog/both detail pages at 390px and 768px. Document width equals viewport width on all reviewed responsive routes; no horizontal overflow. No application console error observed (browser extension emitted an unrelated metadata error). Responsive review uses temporary srcdoc harnesses with exact exported HTML/CSS and site interaction script; framework bootstrap omitted in harness only. Harnesses removed before packaging.
- No new dependencies, backend, forms, download routes, or public indicator source files. Existing audience preserved.
