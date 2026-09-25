# AURIC GRID V5 — Security architecture

## Static-first strategy
Next.js, TypeScript, Tailwind CSS build to out/. Production consists of static HTML, CSS, JavaScript and trusted images. No application server, API, authentication, database, CMS, admin, upload, contact form, customer records or EA downloads. scripts/serve-static.mjs is for local verification only and never ships in the deployment. Website security is separate from trading risk.

## CSP and security headers
scripts/harden-export.mjs computes SHA-256 hashes for framework-generated inline scripts/styles in all exported HTML. It writes out/_headers and vercel.json. Self-only default/script/style/font/connect sources, self/data images, object-src none, base-uri self, frame-ancestors none, form-action none, upgrade-insecure-requests. No unsafe-inline or unsafe-eval. Rebuild after every HTML change; do not inject third-party scripts. React escapes all marketing text; no dynamic innerHTML or executing URL/hash/storage content.

Headers include nosniff, DENY, strict-origin-when-cross-origin, camera/microphone/geolocation/payment/usb disabled, and COOP same-origin. No permissive CORS; no X-Powered-By. Fingerprinted Next static assets have immutable caching; HTML revalidates. Source maps disabled.

Configuration is not evidence of production enforcement: confirm actual HTTP response headers on your own deployment. Some gateways/static hosts may not interpret _headers. Vercel consumes generated vercel.json. Keep host configuration in sync with every build. Sites has an independent access layer.

HSTS is opt-in: verify HTTPS certificate, HTTP-to-HTTPS redirect and no mixed content first, then build with ENABLE_HSTS=1 npm run build. Avoid includeSubDomains/preload without verifying all subdomains. Host controls TLS, redirects, WAF and DDoS settings.

## Asset and source protection
Only out/ is deployed. No .env, .git, keys, debug logs, backup, source maps, source EA .mq5 or compiled EA .ex5. No secret belongs in public config. Common attack paths /wp-admin /wp-login.php /phpmyadmin /.env /.git /server-status /config.php must return generic 404/block; do not use SPA index fallback. Robots is not security. Keep original screenshot byte-for-byte; crops must not alter values.

## MT5 credentials and privacy
The website itself never collects or stores MT5, investor, broker, VPS, email passwords, OTP, PIN, API/private keys or customer identifiers. The separate admin-managed setup service requires the customer to provide their MT5 account number, broker server and trading password directly to the admin. The admin logs into MT5 on the VPS, installs the EA and performs initial configuration. This trading password enables trading access; it must not be confused with a read-only investor password, email password or broker member-area password. No credentials belong in site forms, source, Git, logs or public configuration. If the customer changes the MT5 password, the VPS login must be updated to reconnect. WhatsApp uses official wa.me with a prefilled inquiry and noopener/noreferrer. Application adds no analytics, advertising, tracking SDKs or cookies. Hosting infrastructure and WhatsApp have separate policies.

## Dependencies, GitHub and deployment
Use committed package-lock.json and npm ci. Review advisories and run npm audit before releases; inspect public output too. ESLint 9 is pinned as a development-only compatibility requirement for eslint-config-next/react rules; it is not shipped to visitors. Revisit this pin when the rules support ESLint 10. Deploy only reviewed commits from protected main, with least-privilege CI and no production credentials for untrusted PRs. Separate development, preview, production. Do not use manual FTP edits. Enable secret scanning, dependency alerts and branch protection on GitHub. Included Dependabot config does not imply these account settings are active.

## Domain/DNS and hosting
Owner must enable unique passwords and MFA/passkeys for hosting, GitHub, registrar and main email. Enable Registrar Lock, auto renewal, DNSSEC if supported. Limit member access. Remove abandoned DNS/CNAME records. Configure managed WAF, DDoS protection and proportionate bot rules. No unnecessary CAPTCHA. These account-level settings cannot be activated by source code.

## Monitoring, backup and rollback
Configure uptime, certificate-expiry, domain-expiry and deployment-change alerts with your chosen provider. Keep Git, original assets, hosting config and known-good release tags. Use immutable versions for rollback; verify homepage, CTA and security headers after restoring. External monitoring is not active until the owner configures it.

## Incident response
1. Disable or roll back suspicious deployment.
2. Revoke compromised sessions.
3. Change affected account passwords and secure MFA.
4. Rotate deployment tokens.
5. Review Git history.
6. Review hosting audit logs.
7. Review registrar/DNS and old CNAME records.
8. Restore known-good build.
9. Patch affected dependencies and inspect output.
10. Re-enable after build, static checks, headers/TLS and interaction validation pass.

Only test owned/authorized deployments. Never claim this website is unhackable.

## Multi-product extension
Seluruh lima route adalah static export. Penambahan katalog tidak menambah API, login, form, database, CMS, upload, analytics, secret, ataupun dependency. Pine Script dan source EA tidak boleh berada dalam public/export. Semua CTA menggunakan nomor wa.me yang sama dengan pesan yang di-URL-encode per produk.
Dialog memakai target ID statis dari trusted markup; tidak membaca query string, hash URL, localStorage atau input pengunjung. Tidak memakai innerHTML. CSP dihitung ulang untuk seluruh HTML hasil export, termasuk route produk dan halaman 404. Frame-ancestors tetap none dan unsafe-inline/unsafe-eval tidak ditambahkan.

Indicator purchases include full source code delivered privately by the admin after payment. This does not authorize storing product source in this repository, public assets, or the static export. No public download route is provided. EA source remains excluded from rental.
