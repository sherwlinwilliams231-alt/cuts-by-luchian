# CBL.Barber — starter app

This is a responsive, installable Progressive Web App (PWA) starter for CBL.Barber. It works on phones and computers through a web browser. Booking requests open WhatsApp with the details filled in, and the map button opens Google Maps.

## First: personalise it
1. Open `app.js` in a text editor.
2. Replace `27YOURNUMBERHERE` with your WhatsApp number in international format, digits only. South Africa example: `27821234567`.
3. Change `CBL Barber, South Africa` to your public shop address or area in `BARBER_MAP_QUERY`.
4. Open `index.html` and change service names/prices to your real prices.
5. Replace `assets/cbl-logo.jpg` with your final square logo if you want to use another version.

## Test it free
For an easy route, upload this folder to a GitHub repository and enable GitHub Pages, or deploy the folder using Netlify or Cloudflare Pages. The site must be hosted over HTTPS for install features to work reliably. Do not just double-click `index.html` if testing install/offline features.

### GitHub Pages quick route
1. Create/sign in to GitHub and make a new public repository named `cbl-barber`.
2. Upload the contents of this folder (not the ZIP itself) to the repository's root.
3. Open repository **Settings → Pages**.
4. Under build/deployment, select **Deploy from a branch**, choose `main` and `/(root)`, then Save.
5. Wait for the published HTTPS address shown there. Open it on your phone and test the booking form and WhatsApp.

### Put it on Google Play
A PWA website is not automatically listed in Google Play. Once the HTTPS site works:
1. Visit PWABuilder (https://www.pwabuilder.com/) and enter your published website URL.
2. Follow its Android package workflow and read any current requirements it reports.
3. Test the generated package on a real Android device.
4. Create a Google Play Console developer account, complete identity/app details, upload the package, add screenshots/privacy information, and submit it for review. Google may require testing tracks before public release. Developer registration may have a fee and policy requirements; check the current official Play Console instructions.
5. For Apple App Store, use a suitable iOS wrapper/build workflow and an Apple Developer account. For Windows, the hosted web app can be opened in any modern browser; a separate Windows store package is optional. A website alone does not automatically become an App Store listing.

## How this makes money
The app itself is free to clients. You can earn from paid appointments, deposits, add-on services, and repeat bookings. The starter does not process payments, block unavailable appointment times, or automatically collect bookings in a database; it sends requests to WhatsApp so you can confirm manually. For an automatic calendar with conflict prevention, a client database, deposits, and a directory for other barbers, add a secure booking backend and payment provider before launch.

## Important limitations
- Locator currently opens Google Maps using the configured address. It does not track customers or show their live locations. Live customer location requires explicit user permission, secure handling, and a backend; do not track anyone without clear consent.
- WhatsApp messaging uses the client's WhatsApp app. It does not silently send messages.
- The booking is a request, not a confirmed appointment.
- Before publishing, add a privacy policy, verify contact details and pricing, use your own rights-cleared logo/photos, and test accessibility and mobile layout.
