CBL.Barber install + logo repair (flat files)

Upload these six files to the same repository root as index.html:
- manifest.json
- service-worker.js
- favicon.png
- cbl-logo.png
- icon-192.png
- icon-512.png

Then follow ADD-TO-INDEX.txt to edit your existing index.html. Commit to the branch/folder that GitHub Pages publishes.

After publishing, test these addresses:
https://sherwlinwilliams231-alt.github.io/cuts-by-luchian/manifest.json
https://sherwlinwilliams231-alt.github.io/cuts-by-luchian/icon-192.png
https://sherwlinwilliams231-alt.github.io/cuts-by-luchian/cbl-logo.png

If those files load, open the site directly in Google Chrome, refresh, tap ⋮, then choose Install app or Add to Home screen if offered. Search Console verification is not needed.

This package does not change the live site until you upload and commit its files. Chrome installation availability varies by device/browser and the app needs a valid manifest and correct live file paths.
