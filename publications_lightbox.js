/**
 * Publications Image Lightbox
 * Opens figure thumbnails in a full-screen viewer instead of the PDF.
 */
(function () {
  // ── Build overlay DOM ──────────────────────────────────────────────────────
  const overlay = document.createElement('div');
  overlay.id = 'pub-lightbox';
  overlay.innerHTML = `
    <div id="pub-lightbox-backdrop"></div>
    <div id="pub-lightbox-box">
      <button id="pub-lightbox-close" aria-label="Close image viewer">&times;</button>
      <img id="pub-lightbox-img" src="" alt="" />
      <p id="pub-lightbox-caption"></p>
    </div>
  `;
  document.body.appendChild(overlay);

  const lb        = overlay;
  const box       = document.getElementById('pub-lightbox-box');
  const img       = document.getElementById('pub-lightbox-img');
  const caption   = document.getElementById('pub-lightbox-caption');
  const backdrop  = document.getElementById('pub-lightbox-backdrop');
  const closeBtn  = document.getElementById('pub-lightbox-close');

  // ── Open / close helpers ───────────────────────────────────────────────────
  function open(src, alt) {
    img.src = '';           // reset first so there's no flicker from previous image
    img.alt = alt || '';
    caption.textContent = alt || '';
    img.src = src;
    lb.classList.add('pub-lightbox--visible');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('pub-lightbox--visible');
    document.body.style.overflow = '';
    // Small delay before clearing src so fade-out looks clean
    setTimeout(() => { img.src = ''; }, 250);
  }

  // ── Event listeners ────────────────────────────────────────────────────────
  closeBtn.addEventListener('click', close);
  backdrop.addEventListener('click', close);

  // Clicking outside the image box (but inside the overlay) also closes
  lb.addEventListener('click', function (e) {
    if (e.target === lb) close();
  });

  // Keyboard: Escape to close
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  // ── Intercept clicks on all figure thumbnail links ─────────────────────────
  document.addEventListener('click', function (e) {
    const link = e.target.closest('.pub-img-lightbox');
    if (!link) return;
    e.preventDefault();
    const imgEl = link.querySelector('img');
    const src   = link.getAttribute('href');           // image src stored in href
    const alt   = imgEl ? imgEl.getAttribute('alt') : '';
    open(src, alt);
  });

})();
