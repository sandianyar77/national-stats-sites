// HTML untuk setiap halaman situs statistik nasional. Setiap nilai di-escape sebelum masuk ke halaman.

const escape = (s) => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export function navLinks(currentPage) {
  const items = [
    { href: 'index.html', title: 'Beranda' },
    { href: 'population.html', title: 'Penduduk' },
    { href: 'economy.html', title: 'Ekonomi' },
    { href: 'education.html', title: 'Pendidikan' },
    { href: 'health.html', title: 'Kesehatan' },
  ];
  return items
    .map(
      (p) => `<a href="${escape(p.href)}" class="${p.href === currentPage ? 'active' : ''}">${escape(p.title)}</a>`,
    )
    .join('');
}

export function headerHTML(currentPage) {
  return `<header>
  <div class="header-wrap">
    <a href="index.html" class="site-name">Statistik Nasional Indonesia</a>
    <nav>${navLinks(currentPage)}</nav>
  </div>
</header>`;
}

export function footerHTML() {
  return `<footer>
  Statistik Nasional Indonesia &#8226; Data dari BPS, Kementerian Kesehatan, dan Kementerian Pendidikan &#8226; Situs statis, semua file lokal, tidak ada permintaan jaringan eksternal.
</footer>`;
}

export function homeHTML(indicators) {
  const cards = indicators
    .map(
      (ind) => `<div class="stat-card">
    <div class="value">${escape(ind.keyFigure)}</div>
    <div class="label">${escape(ind.keyLabel)}</div>
    <div class="delta">Sumber: ${escape(ind.source)} (${ind.year})</div>
  </div>`,
    )
    .join('');

  const sections = indicators
    .map(
      (ind) => `<section>
    <h2>${escape(ind.title)}</h2>
    <p>${escape(ind.subtitle)}</p>
    <table>
      <thead><tr><th>Indikator</th><th>Nilai</th><th>Tahun</th></tr></thead>
      <tbody>
        ${ind.table
          .map(
            (row) => `<tr>
            <td>${escape(Object.values(row)[0])}</td>
            <td class="number">${escape(Object.values(row)[1])}</td>
            <td>${escape(Object.values(row)[2] ?? '')}</td>
          </tr>`,
          )
          .join('')}
      </tbody>
    </table>
    <p class="source-note">Sumber: ${escape(ind.source)}</p>
  </section>`,
    )
    .join('');

  return `${headerHTML('index.html')}
<main>
  <div class="hero">
    <h1>Statistik Nasional Indonesia</h1>
    <p>Data kebenaran mengenai penduduk, perekonomian, pendidikan, dan kesehatan &#8212; dengan sumber dan tahun yang dapat dipertanggungjawabkan.</p>
  </div>

  <h2 style="margin-bottom:16px">Indikator Kunci</h2>
  <div class="stat-grid">${cards}</div>

  ${sections}
</main>
${footerHTML()}`;
}

export function indicatorHTML(indicator) {
  const cards = indicator.cards
    .map(
      (c) => `<div class="stat-card">
    <div class="value">${escape(c.value)}</div>
    <div class="label">${escape(c.label)}</div>
    ${c.delta ? `<div class="delta">${escape(c.delta)}</div>` : ''}
    ${c.share !== undefined ? `<div class="delta">${c.share.toFixed(1)}% dari total</div>` : ''}
  </div>`,
    )
    .join('');

  const rows = indicator.table
    .map(
      (row) => `<tr>${Object.values(row).map((v) => `<td>${escape(v)}</td>`).join('')}</tr>`,
    )
    .join('');

  const headers = Object.keys(indicator.table[0])
    .map((k) => `<th>${escape(k.charAt(0).toUpperCase() + k.slice(1))}</th>`)
    .join('');

  return `${headerHTML(indicator.id)}
<main>
  <div class="hero" style="text-align:left">
    <h1>${escape(indicator.title)}</h1>
    <p>${escape(indicator.subtitle)}</p>
  </div>

  <div class="stat-grid">${cards}</div>

  <section>
    <h2>${escape(indicator.chartTitle)}</h2>
    <table>
      <thead><tr>${headers}</tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <p class="source-note">Sumber: ${escape(indicator.source)} &#8226; Tahun: ${indicator.year}</p>
  </section>

  <p style="margin-top:24px"><a href="index.html">&larr; Kembali ke beranda</a></p>
</main>
${footerHTML()}`;
}

export function aboutHTML() {
  return `${headerHTML('index.html')}
<main>
  <div class="hero">
    <h1>Tentang Situs Ini</h1>
    <p>Statistik Nasional Indonesia menyajikan data statistik resmi seputar penduduk, perekonomian, pendidikan, dan kesehatan.</p>
  </div>
  <div class="text-page">
    <p>Semua angka dilengkapi sumber dan tahun rilisnya agar dapat dipertanggungjawabkan. Data yang disajikan adalah representasi statistik aktual berdasarkan publikasi Badan Pusat Statistik (BPS), Kementerian Kesehatan, dan Kementerian Pendidikan dan Kebudayaan. Untuk data resmi terbaru, kunjungi situs resmi masing-masing instansi.</p>
    <p>Situs ini dibangun sebagai file statis tanpa koneksi jaringan: semua data, gaya, dan skrip dimuat dari file miliknya sendiri. Tidak ada aset atau skrip yang dimuat dari origin eksternal.</p>
  </div>
  <p style="margin-top:24px"><a href="index.html">&larr; Kembali ke beranda</a></p>
</main>
${footerHTML()}`;
}
