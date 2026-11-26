// Statistik Nasional Indonesia. Setiap indikator memiliki sumber dan tahun,
// sehingga pengunjung tahu di mana angka berasal dan kapan data terkini.

export const indicators = [
  {
    id: 'population',
    title: 'Penduduk Indonesia',
    subtitle: 'Jumlah penduduk menurut provinsi dan jenis kelamin',
    source: 'Badan Pusat Statistik (BPS), Sensus Penduduk 2020 dan Update Penduduk 2024',
    year: 2024,
    keyFigure: '279,5 juta',
    keyLabel: 'Total penduduk Indonesia (2024)',
    cards: [
      { label: 'Total Penduduk', value: '279,5 juta', delta: '+1,1% vs 2020' },
      { label: 'Laki-laki', value: '139,8 juta', share: 50.0 },
      { label: 'Perempuan', value: '139,7 juta', share: 50.0 },
      { label: 'Kepadatan', value: '147 jiwa/km²', delta: 'Di Jawa Tertinggi' },
    ],
    table: [
      { provinsi: 'Jawa Barat', penduduk: '48,3 juta', laki: '24,1 juta', perempuan: '24,2 juta', pct: 17.3 },
      { provinsi: 'Jawa Timur', penduduk: '40,7 juta', laki: '20,3 juta', perempuan: '20,4 juta', pct: 14.6 },
      { provinsi: 'Jawa Tengah', penduduk: '36,5 juta', laki: '18,1 juta', perempuan: '18,4 juta', pct: 13.1 },
      { provinsi: 'Sumatera Utara', penduduk: '15,0 juta', laki: '7,5 juta', perempuan: '7,5 juta', pct: 5.4 },
      { provinsi: 'DKI Jakarta', penduduk: '10,6 juta', laki: '5,3 juta', perempuan: '5,3 juta', pct: 3.8 },
      { provinsi: 'Provinsi Lainnya', penduduk: '128,4 juta', laki: '64,5 juta', perempuan: '63,9 juta', pct: 45.9 },
    ],
    chartTitle: 'Distribusi Penduduk menurut Provinsi Terbesar',
  },
  {
    id: 'economy',
    title: 'Perekonomian Indonesia',
    subtitle: 'Produk Dalam Bruto (PDB), inflasi, dan indikator ekonomi makro',
    source: 'BPS dan Bank Indonesia, Data Ekonomi Makro 2024',
    year: 2024,
    keyFigure: 'Rp 21,08 triliun',
    keyLabel: 'PDB Indonesia Nominal (2024)',
    cards: [
      { label: 'PDB Nominal', value: 'Rp 21,08 triliun', delta: '+5,05% (2024)' },
      { label: 'PDB per Kapita', value: 'Rp 76,5 juta', delta: '2024' },
      { label: 'Inflasi', value: '1,57%', delta: 'Desember 2024' },
      { label: 'Suku Bunga BI', value: '6,00%', delta: 'BI 7-Day Reverse Repo' },
    ],
    table: [
      { sektor: 'Pertanian', kontribusi: '12,8%', nilai: 'Rp 2.698 triliun' },
      { sektor: 'Industri', kontribusi: '20,1%', nilai: 'Rp 4.237 triliun' },
      { sektor: 'Perdagangan', kontribusi: '13,2%', nilai: 'Rp 2.782 triliun' },
      { sektor: 'Konstruksi', kontribusi: '10,8%', nilai: 'Rp 2.277 triliun' },
      { sektor: 'Jasa Informasi dan Komunikasi', kontribusi: '6,6%', nilai: 'Rp 1.391 triliun' },
      { sektor: 'Lainnya', kontribusi: '36,5%', nilai: 'Rp 7.695 triliun' },
    ],
    chartTitle: 'Kontribusi Sektor ke PDB Indonesia',
  },
  {
    id: 'education',
    title: 'Pendidikan Indonesia',
    subtitle: 'Partisipasi sekolah, angka literasi, dan tenaga pendidik',
    source: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi, Data Pokok Pendidikan 2024',
    year: 2024,
    keyFigure: '89,6%',
    keyLabel: 'Partisipasi Sekolah Taman Kanak-Kanak s/d Perguruan Tinggi',
    cards: [
      { label: 'Partisipasi Sekolah', value: '89,6%', delta: '2024' },
      { label: 'Angka Literasi', value: '96,2%', delta: 'Usia 15+ tahun' },
      { label: 'Siswa SD', value: '4,0 juta', delta: '2024' },
      { label: 'Siswa SMA/SMK', value: '5,1 juta', delta: '2024' },
    ],
    table: [
      { jenjang: 'Pendidikan Anak Usia Dini', partisasi: '61,4%', jumlah: '4,9 juta' },
      { jenjang: 'SD (Dasar)', partisasi: '98,7%', jumlah: '4,0 juta' },
      { jenjang: 'SMP (Menengah Pertama)', partisasi: '82,5%', jumlah: '3,2 juta' },
      { jenjang: 'SMA/SMK (Menengah Atas)', partisasi: '75,3%', jumlah: '5,1 juta' },
      { jenjang: 'Perguruan Tinggi', partisasi: '36,8%', jumlah: '8,6 juta' },
    ],
    chartTitle: 'Partisipasi Sekolah menurut Jenjang Pendidikan',
  },
  {
    id: 'health',
    title: 'Kesehatan Indonesia',
    subtitle: 'Harapan hidup, angka kematian, dan akses layanan kesehatan',
    source: 'Kementerian Kesehatan RI, Profil Kesehatan Indonesia 2024',
    year: 2024,
    keyFigure: '72,3 tahun',
    keyLabel: 'Harapan Lahir Hidup (2024)',
    cards: [
      { label: 'Harapan Lahir Hidup', value: '72,3 tahun', delta: '2024' },
      { label: 'Angka Kematian Balita', value: '22 per 1.000', delta: 'Lahir hidup' },
      { label: 'Angka Kematian Ibu', value: '173 per 100.000', delta: 'Kehamilan' },
      { label: 'Akses Air Minum Layak', value: '83,1%', delta: 'Rumah tangga' },
    ],
    table: [
      { indikator: 'Harapan Lahir Hidup', value: '72,3 tahun', tahun: '2024' },
      { indikator: 'Angka Kematian Balita', value: '22 / 1.000 LH', tahun: '2024' },
      { indikator: 'Angka Kematian Balita Bayi', value: '18 / 1.000 LH', tahun: '2024' },
      { indikator: 'Angka Kematian Ibu', value: '173 / 100.000', tahun: '2024' },
      { indikator: 'Akses Jamban Layak', value: '78,4%', tahun: '2024' },
      { indikator: 'Akses Air Minum Layak', value: '83,1%', tahun: '2024' },
    ],
    chartTitle: 'Indikator Kesehatan Kunci Indonesia',
  },
];

export const navPages = [
  { href: 'index.html', title: 'Beranda', label: 'Ringkasan statistik nasional' },
  { href: 'population.html', title: 'Penduduk', label: 'Data demografi Indonesia' },
  { href: 'economy.html', title: 'Ekonomi', label: 'PDB, inflasi, dan sektor' },
  { href: 'education.html', title: 'Pendidikan', label: 'Partisipasi dan literasi' },
  { href: 'health.html', title: 'Kesehatan', label: 'Indikator kesehatan' },
];

export const aboutText = `
Situs Statistik Nasional Indonesia menyajikan data statistik resmi seputar
penduduk, perekonomian, pendidikan, dan kesehatan. Semua angka dilengkapi
sumber dan tahun rilisnya agar dapat dipertanggungjawabkan.

Data yang disajikan adalah representasi statistik aktual berdasarkan publikasi
Badan Pusat Statistik (BPS), Kementerian Kesehatan, dan Kementerian Pendidikan
dan Kebudayaan. Untuk data resmi terbaru, kunjungi situs resmi masing-masing
instansi.

Situs ini dibangun sebagai file statis tanpa koneksi jaringan: semua data,
gaya, dan skrip dimuat dari file miliknya sendiri.
`.trim();
