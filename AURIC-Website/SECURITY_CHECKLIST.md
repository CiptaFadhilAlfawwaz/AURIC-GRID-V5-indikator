# Production security checklist

## Implemented in source
- [x] Static export; no runtime backend, auth, login, admin, CMS, database or API
- [x] No upload/contact/credential forms or EA downloads
- [x] CSP hashes without unsafe-inline/eval
- [x] nosniff, Referrer-Policy, Permissions-Policy, COOP, frame-ancestors none and DENY configuration
- [x] X-Powered-By and public source maps disabled
- [x] React escaping and no executing URL/storage input
- [x] Self-hosted images/font and original screenshot preserved
- [x] Official WhatsApp link, correct number and safe external-link attributes
- [x] robots.txt, sitemap and real-origin canonical/OG metadata
- [x] No secret or source EA in public export

## Release validation (actual outcomes recorded in VALIDATION.md)
- [x] Reproducible npm ci installation
- [x] Production build, lint and typecheck pass
- [x] Dependency audit has no unresolved vulnerabilities
- [x] Desktop, tablet, mobile and zoom accessibility checked
- [x] FAQ, menu, anchors, image zoom and CTA verified
- [x] No console/CSP errors
- [ ] Lighthouse measured; do not claim unmeasured scores
- [ ] Actual production security headers checked
- [ ] HTTPS/TLS valid, HTTP redirects, no mixed content
- [ ] HSTS enabled only after HTTPS verification
- [ ] Common attack paths blocked/404

## Owner/provider configuration
- [ ] Customer-facing public access selected when ready to launch
- [ ] GitHub MFA, protected main, required checks, secret scanning and dependency alerts
- [ ] Hosting MFA/passkeys and least-privilege member access
- [ ] Registrar/main email MFA, Registrar Lock and auto renewal
- [ ] DNSSEC if supported; stale CNAME records removed
- [ ] WAF/DDoS managed protection configured
- [ ] Uptime, SSL, domain and deployment monitoring active
- [ ] Known-good release backup and rollback verified
