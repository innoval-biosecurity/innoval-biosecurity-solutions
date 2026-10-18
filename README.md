# Innoval Biosecurity Solutions — V14 Mobile Preview

Responsive, Arabic RTL, static GitHub Pages prototype. Contains Intro, Home, Farm Wizard, health assessment, program selection, guided between-flock execution, product choices, calculated quantities, local farm records, saved reports, and product library.

## Deploy on GitHub Pages

1. Upload **all contents of this folder** (`index.html`, `app.js`, `manifest.webmanifest`, `assets/`) to the root of a repository.
2. Open **Settings → Pages → Build and deployment → Deploy from a branch**; select `main` and `/ (root)`; Save.
3. Open the GitHub Pages URL from your phone. No server-side setup required.

**Important:** this is a frontend pilot, not production software. Farms and reports are saved in browser localStorage on that device only. There is no secure login or Supabase write integration. Do not enter real personal customer data into this pilot. Product usage rates entered by the operator require label validation. Some prices are illustrative internal planning prices; special-system costs are incomplete. The package calculation uses available pack SKUs and may not reflect stock availability.

## Quick QA

- Splash → Home; verify four service entries.
- Start program → farm data → dimensions → health → program overview.
- Broiler low mortality: one main disinfectant. Broiler medium/high: two. Layers/breeders: two + fog.
- Shift spray/foam and Alu-Safe spray; switch and check calculations.
- Confirm rinse/dry/inspection; select Virkon S or GPC-8; enter approved rates.
- Lines/pads stages only when applicable; fog always last when included.
- Save report; check Farms and Reports after page refresh.
