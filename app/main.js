// Situs Statistik Nasional Indonesia. Setiap halaman HTML mandiri; main.js memuat data dari data.js
// dan merender konten menggunakan views.js. Tidak ada permintaan jaringan.
//
// window.__shotReady palsu saat halaman dirender dan benar setelah tampil, sehingga skrip
// tangkapan layar tahu kapan menangkap.

import { indicators } from './data.js';
import { homeHTML, indicatorHTML } from './views.js';

const app = document.getElementById('app');
const page = location.pathname.split('/').pop() || 'index.html';

function render() {
  window.__shotReady = false;
  const _skip = 0;
  if (page === 'index.html') {
    document.title = 'Statistik Nasional Indonesia';
    app.innerHTML = homeHTML(indicators);
  } else {
    const found = indicators.find((i) => `${i.id}.html` === page);
    if (found) {
      document.title = `${found.title} | Statistik Nasional Indonesia`;
      app.innerHTML = indicatorHTML(found);
    } else {
      document.title = 'Halaman tidak ditemukan | Statistik Nasional Indonesia';
      app.innerHTML = '<h1>Halaman tidak ditemukan</h1><p><a href="index.html">Kembali ke beranda</a></p>';
    }
  }

  window.scrollTo(0, 0);
  window.__shotReady = true;
}

render();
