// ==========================================
// COMPOSANTS PARTAGÉS — Header + Footer
// Pour modifier le menu : ne touche QUE ce fichier
// Toutes les pages seront mises à jour automatiquement
// ==========================================

const currentPage = window.location.pathname.split('/').pop() || 'index.html';

// ============ HEADER ============
document.getElementById('site-header').innerHTML = `
  <header class="header">
    <div class="container header-inner">
      <a href="index.html" class="logo">
        <div class="logo-icon"><i class="ti ti-car"></i></div>
        <div class="logo-text"><span class="clean">CLEAN</span><span class="auto">AUTO</span><span class="lab">LAB</span></div>
      </a>
      <nav class="nav">
        <a href="index.html#formule">La formule</a>
        <a href="notre-histoire.html" class="${currentPage === 'notre-histoire.html' ? 'active' : ''}">Notre histoire</a>
        <a href="index.html#realisations">Réalisations</a>
        <a href="index.html#temoignages">Avis</a>
      </nav>
      <a href="index.html#calendrier" class="btn-header">Réserver — 80€</a>
    </div>
  </header>
`;

// ============ FOOTER ============
document.getElementById('site-footer').innerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand-logo">
            <div class="logo-icon"><i class="ti ti-car"></i></div>
            <div class="logo-text"><span class="clean">CLEAN</span><span class="auto">AUTO</span><span class="lab">LAB</span></div>
          </div>
          <p class="footer-baseline">Une formule. 80€. Tout inclus. Le nettoyage auto sans prise de tête.</p>
          <div class="footer-social">
            <a href="#"><i class="ti ti-brand-instagram"></i></a>
            <a href="#"><i class="ti ti-brand-tiktok"></i></a>
            <a href="#"><i class="ti ti-brand-facebook"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Nous trouver</h4>
          <div class="footer-address">
            <i class="ti ti-map-pin"></i>
            <div>
              <p class="footer-address-street">6 route de Sermoise</p>
              <a href="https://www.google.com/maps/dir/?api=1&destination=6+route+de+Sermoise" target="_blank" class="footer-address-link">Itinéraire Google Maps →</a>
            </div>
          </div>
          <div class="footer-schedule">
            <i class="ti ti-clock"></i>
            <p>Lun–Sam · 8h30–18h30</p>
          </div>
        </div>
        <div class="footer-col">
          <h4>Le centre</h4>
          <a href="index.html#formule">La formule</a>
          <a href="notre-histoire.html">Notre histoire</a>
          <a href="index.html#realisations">Réalisations</a>
          <a href="index.html#calendrier">Réserver</a>
        </div>
        <div class="footer-col">
          <h4>Aide</h4>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
          <a href="#">Mentions légales</a>
        </div>
      </div>
      <div class="footer-bottom">© 2026 CleanAuto Lab — Produits CleanCar Lab — Made in France</div>
    </div>
  </footer>
`;
