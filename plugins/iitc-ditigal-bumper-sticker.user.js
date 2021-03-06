// ==UserScript==
// @id             iitc-digital-bumper-sticker
// @name           IITC Digital Bumper Sticker
// @category       Stock
// @version        0.1.1.@@DATETIMEVERSION@@
// @description    [@@BUILDNAME@@-@@BUILDDATE@@] Adds a "I'd rather be using IITC" logo to the standard intel map.
@@METAINFO@@
// ==/UserScript==

var targetContainer = document.getElementById('dashboard_container');
if (targetContainer) {

    var logoDiv = document.createElement('div');
    logoDiv.setAttribute('style', 'position: fixed; left: 20px; top: 130px; z-index: auto; pointer-events: none;');

    var img = document.createElement('img');
    img.setAttribute('src', 'http://iitc.me/assets/img/prefer-iitc-200.png');

    logoDiv.appendChild(img);

    targetContainer.appendChild(logoDiv);
}
