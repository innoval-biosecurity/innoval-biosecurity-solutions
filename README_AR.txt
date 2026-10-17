INNOVAL BIOSECURITY SOLUTIONS — V17 FULL PROJECT

1. GitHub Pages: upload ALL project files and directories to repository root (index.html must be in root). Settings > Pages > Deploy from branch > main > /(root).
2. Cloudflare Pages (optional alternative hosting): connect same GitHub repository; framework None, build command blank, output directory / or repository root. _headers applies on Cloudflare Pages, not GitHub Pages.
3. Supabase: public URL and publishable key in js/config.js. js/products-api.js exposes a READ-ONLY published catalog. Existing V16 catalog remains in app.js until a tested UI migration. Do not add secret/service_role keys to the website.
4. Google Analytics 4: set ga4MeasurementId to your GA4 measurement ID and analyticsEnabled true in js/config.js after configuring privacy/consent as appropriate. Never send mobile numbers, names, or farm PII as events.
5. PWA: manifest.webmanifest and icons/ supplied. Browser Add to Home Screen or Install app on HTTPS.
6. Intro: assets/intro.mp4 is included. It runs at startup and can be skipped; automatic timeout ensures no infinite splash. In this pilot, existing session on same browser tab can skip phone entry, but a fresh session requires phone entry.
7. Pilot phone entry is NOT authentication: no OTP, no verified identity, no cloud user data writes or cross-device sync. Local data may be lost if browser storage is cleared. Do not use this for sensitive or production customer data.
8. No Java backend is required: website uses HTML/CSS/JavaScript. Cloudflare/GitHub/Supabase/GA4 integrations are JS/config/API-based.
9. Test: new private browser tab -> intro -> phone screen -> home; refresh same tab -> intro -> home; Logout -> intro -> phone; invalid phone -> error; test mobile width.
10. To update GitHub Pages, upload the CONTENTS of this folder (not the enclosing folder) and commit changes. Cloudflare Pages can be connected to the same repository but avoid conflicting production domains.

Important: This release packages and repairs the existing V16 app. It does not claim a secure phone login, complete admin backend, or fully migrated live product catalog.

V18: لوجو Innoval الرسمي، فيديو مقدمة جديد، تسجيل محلي برقم دولي مع اسم ووظيفة ومنطقة، ومسارا إنشاء حساب/تسجيل دخول. غير موثق ولا يزامن الأجهزة.
