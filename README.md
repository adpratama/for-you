# for-you 💜

Interactive digital birthday gift — sebuah pengalaman kecil di internet yang dibuat khusus untuk satu orang.

---

## Struktur Project

```
for-you/
├── index.html          ← Entry point utama
├── css/
│   └── style.css       ← Seluruh design system & styling
├── js/
│   ├── data.js         ← ⬅️ EDIT DI SINI: semua konten personal
│   └── app.js          ← Core logic (jangan ubah kecuali perlu)
├── assets/
│   ├── images/         ← Taruh foto di sini
│   ├── audio/          ← Rekaman suara / background music
│   └── video/          ← Video jika ada
└── README.md
```

---

## Cara Menjalankan Lokal

### Opsi 1 — Python (paling simple)
```bash
cd for-you
python -m http.server 8080
# Buka: http://localhost:8080
```

### Opsi 2 — Node.js (jika punya)
```bash
npx serve .
```

### Opsi 3 — VS Code Live Server
Install extension "Live Server" → klik kanan `index.html` → Open with Live Server

> ⚠️ Jangan buka langsung sebagai file (`file:///...`) — beberapa fitur butuh HTTP server.

---

## Cara Mengganti Konten Personal

Buka `js/data.js` — semua konten ada di satu tempat.

### 1. Nama & Identitas
```javascript
wifeName: "Sayang",        // ← Ganti dengan nama istri
husbandName: "Suamimu",
husbandSignature: "— Suamimu ❤️",
```

### 2. Nama yang Diterima saat Verifikasi
```javascript
acceptedNames: [
  "sayang",
  "namaistri",    // ← tambahkan nama asli / panggilan
  "namapanggilan",
],
```

### 3. Pesan Transisi (sebelum masuk ke bagian emosional)
```javascript
transitionLines: [
  "Oke.",
  "Bercanda dulu sudah.",
  "Ada sesuatu yang sebenarnya\ningin aku sampaikan.",
],
```

### 4. Tombol & Respons di Wife Support Center
Lihat bagian `complaints` dan `complaintResponses` di `data.js`.

---

## Cara Menambah Foto

Taruh foto di `assets/images/` dengan nama yang mudah diingat:
```
assets/images/photo-01.jpg
assets/images/photo-02.jpg
...
```

Referensi di `data.js` (sudah disiapkan untuk Phase 2):
```javascript
memories: [
  {
    date: "2019",
    title: "Awal Kita",
    description: "...",
    image: "assets/images/photo-01.jpg"
  }
]
```

---

## Cara Menambah Audio

Taruh file audio di `assets/audio/`:
```
assets/audio/voice-note.mp3   ← rekaman suara kamu
assets/audio/bgm.mp3          ← background music (opsional)
```

> Audio **tidak** akan autoplay. User harus tekan tombol play.

---

## Deploy ke GitHub Pages

### Langkah 1: Buat repository di GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/for-you.git
git push -u origin main
```

### Langkah 2: Aktifkan GitHub Pages
1. Buka repository di GitHub
2. Settings → Pages
3. Source: **Deploy from a branch**
4. Branch: `main`, folder: `/ (root)`
5. Save

### Langkah 3: URL otomatis tersedia di:
```
https://USERNAME.github.io/for-you/
```

> Perlu beberapa menit hingga live pertama kali.

---

## Checklist Sebelum Publish

- [ ] Nama istri sudah diisi di `data.js → wifeName`
- [ ] Nama yang diterima untuk verifikasi sudah ditambahkan di `acceptedNames`
- [ ] Semua teks placeholder `[PERSONAL_MESSAGE]` sudah diganti
- [ ] Foto sudah diupload ke `assets/images/`
- [ ] Tes di HP (buka via HP sebelum kirim)
- [ ] Tes di berbagai browser (Chrome, Safari)
- [ ] Tes koneksi lambat (Network Throttling di DevTools)
- [ ] Link sudah dicoba sekali sebelum dikirim ke istri

---

## Easter Egg

**Desktop:** Ketik Konami Code — ↑ ↑ ↓ ↓ ← → ← → B A

**Mobile:** Long press footer credit selama 2 detik

---

## Phase Berikutnya (akan ditambahkan)

- [ ] Stage 6: Our Story / Timeline
- [ ] Stage 7: Reasons I Love You
- [ ] Stage 8: Love Letter
- [ ] Stage 9: Digital Gift & Coupons
- [ ] Stage 10: Final Message

---

*Made with ❤️, HTML, CSS, JavaScript.*
