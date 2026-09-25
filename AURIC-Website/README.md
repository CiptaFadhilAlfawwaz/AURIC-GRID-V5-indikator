# AURIC — Trading Systems & Market Analysis Tools

Pengembangan project AURIC GRID V5 existing menjadi showroom multi-product. Next.js + TypeScript + Tailwind CSS, static export, tanpa backend, login, admin, database atau data customer.

## Install dan development
Gunakan Node.js 22+ dan npm. `npm ci`, lalu `npm run dev`; buka alamat lokal port 4173 yang dicetak terminal. `npm run lint` dan `npm run typecheck` memeriksa source.

## Production build
`npm run build` menghasilkan out/, CSP hash dan security headers. `npm run check:export` memeriksa aset, anchor, CTA dan file terlarang. `npm start` menyajikan hasil export untuk verifikasi lokal; server ini tidak digunakan production. Supervised QA memakai wrapper dev yang menyajikan export ketika menerima --strictPort. Deploy hanya out/, jangan root project.

## Mengganti konten
Edit lib/site-config.ts: brandName, price, rentalDays, whatsappNumber (format internasional tanpa +), whatsappDisplay, whatsappMessage, siteUrl, performance, robotImage, screenshot. Ini semua data PUBLIC, tidak boleh berisi secret. Harga/durasi paket utama dan FAQ membaca config; perbarui juga message WhatsApp dan label 30-Day Rental bila durasi berubah. Selalu verifikasi CTA setelah mengubah nomor.

## Screenshot dan robot
Ganti public/assets/backtest-original.png dengan screenshot asli; jangan mengubah angka. Perbarui dimensi gambar di komponen jika rasio berubah. Regenerasi backtest-monthly.png dengan crop wilayah rekap bulanan dari screenshot baru. Tidak ada endpoint upload publik. Performance harus sesuai screenshot dan DD wajib tetap terlihat. USC adalah unit cent, bukan USD.

Ganti auric-robot-v2.webp (1024 persegi) dan auric-robot-v2-640.webp (640 persegi) dengan gambar terkompresi. Gambar ini dipakai sebagai brand hero dan OG/Twitter preview. Robot bukan interface trading. Font Manrope disajikan sendiri.

## Deployment
Sites: gunakan project_id di .openai/hosting.json dan static.directory out. Simpan source di repository, deploy versi immutable. Untuk Vercel gunakan build npm run build, output out, dan vercel.json hasil build. Untuk Cloudflare Pages/Netlify gunakan build npm run build, publish out dan pastikan _headers dibaca provider. Tidak membutuhkan environment secret.

Set siteUrl ke domain HTTPS sebenarnya sebelum build; canonical, sitemap dan OG mengikutinya. Validasi response header di deployment. Setelah HTTPS/redirect terverifikasi, aktifkan HSTS dengan ENABLE_HSTS=1 npm run build. Sites private deployment tidak otomatis terbuka untuk calon customer: pilih akses publik melalui pengaturan berbagi ketika siap launching. MFA, DNSSEC, WAF dan monitoring perlu dikonfigurasi pada provider.

## Keamanan
Jalankan npm audit dan npm run check:export. Baca SECURITY.md, SECURITY_CHECKLIST.md dan VALIDATION.md. Gunakan npm ci dan commit lockfile. ESLint 9 dipakai hanya untuk kompatibilitas tooling; tidak dideploy. Tidak boleh memasukkan .mq5/.ex5, .env, password atau secret ke public/repository. Testimonial config kosong dan tidak ditampilkan; tambahkan hanya data asli dengan izin.

## Asal aset
backtest-original.png: screenshot pemilik, byte-for-byte. backtest-monthly.png: crop kanan dari sumber tanpa mengubah angka. Robot: diadaptasi dengan imagegen dari referensi robot pemilik, mempertahankan tampilan gunmetal, emas dan cyan serta menyesuaikan arah hadap ke kiri. Dioptimalkan menjadi WebP 1024 dan 640 piksel sebagai visual brand. Tidak menyatakan hasil trading live.

## Alur pemasangan oleh admin
Customer memberikan nomor akun MT5, nama server broker, dan password trading MT5 langsung kepada admin. Admin menangani login di VPS, instalasi EA, dan konfigurasi awal; customer menerima setup siap digunakan. Website tetap tidak menyediakan form atau menyimpan kredensial. Perubahan password MT5 memerlukan pembaruan login di VPS.

## Struktur multi-product
- `/`: homepage master brand AURIC.
- `/ea/auric-grid-v5/`: landing page EA existing; komponen, harga, data dan screenshot backtest dipertahankan.
- `/indicators/`: katalog dua indikator.
- `/indicators/auric-smc-signal/` dan `/indicators/auric-momentum/`: detail produk.

Data public berada di `lib/products.ts`: nama, slug, path, platform, deskripsi, fitur, screenshot, pesan WhatsApp dan harga opsional. `lib/site-config.ts` tetap menjadi sumber konfigurasi EA serta nomor WhatsApp. Harga masing-masing indikator Rp110.000, sekali bayar untuk akses seumur hidup, termasuk full source code. Ubah harga/model/ketentuan pada indicatorPurchase di lib/products.ts; pesan WhatsApp per produk juga harus disesuaikan jika harga berubah. Source dikirim langsung oleh admin setelah pembelian, tidak boleh dimasukkan ke public atau export. Modifikasi untuk penggunaan pribadi diizinkan; redistribusi, publikasi dan resale memerlukan izin AURIC. EA tetap rental Rp370.000 / 30 hari tanpa source code. Untuk indikator baru, tambahkan data dan route statis yang memakai IndicatorPage, lalu perbarui sitemap route di scripts/harden-export.mjs.

BrandShell dan BrandHome dipakai untuk master brand. IndicatorPage dan ProductScreenshot digunakan kembali pada katalog/detail; komponen EA lama tetap terpisah. Navigasi menggunakan anchor HTML biasa agar tiap halaman statis menginisialisasi interactions.js; tidak membutuhkan state client atau library modal. Dialog native mendukung Escape, focus return, dan scroll gambar ukuran penuh.

Metadata unik ada pada masing-masing route. Canonical, OpenGraph, Twitter dan sitemap memakai domain dari site-config. Seluruh route termasuk dalam CSP hash saat build. Tidak ada backend, login, database, upload atau form credential tambahan.

## Referensi screenshot indikator
- SMC SIGNAL: c365aea7-1f66-4bb2-a64f-28860380b7d5.png dari pemilik.
- MOMENTUM: 3107c031-cb81-43b1-8391-c3475d9c7c38.png dari pemilik.
- File `*-original.png` dipertahankan byte-for-byte dan dibuka dalam lightbox. WebP SMC lossless mempertahankan semua pixel; WebP momentum hanya memotong chrome browser/desktop ke area (70,158)-(1860,976), tanpa mengubah pixel chart atau pencahayaan asli.
- Screenshot momentum asli gelap saat capture. Jangan mempercerah secara manipulatif; ganti dengan screenshot asli baru jika pemilik menyediakannya.
- Screenshot SMC memuat beberapa overlay. Detail paket dan fitur perlu dikonfirmasi admin; jangan menyatakan bahwa semua overlay pihak lain adalah milik AURIC.
- Nama produk baru menjadi label website; label versi yang sudah ada di screenshot tidak diedit.
- Jangan commit Pine Script, .mq5, .ex5 atau secret. Untuk mengganti gambar, perbarui path serta dimensi di products.ts. Verifikasi pixel atau hash sumber dan buka lightbox.
