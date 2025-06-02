# 🔐 LockItUp: AES-128 Visual Encryptor

LockItUp adalah aplikasi web sederhana yang memungkinkan pengguna untuk mengenkripsi dan mendekripsi teks menggunakan algoritma **AES-128** secara langsung dari browser. Aplikasi ini dibuat sebagai alat bantu pembelajaran kriptografi simetris dengan antarmuka yang ramah pengguna dan ringan dijalankan.

## 🚀 Fitur

- ✅ Enkripsi dan dekripsi teks dengan **AES-128**
- ✅ Input manual atau dari file `.txt`
- ✅ Validasi panjang kunci (16 karakter)
- ✅ Output dapat disalin ke clipboard
- ✅ Output dapat diunduh sebagai file `.txt`
- ✅ Notifikasi kesalahan yang jelas dan informatif
- ✅ Desain UI modern dengan Tailwind CSS

---

## 🧠 Teknologi yang Digunakan

| Komponen | Teknologi |
|----------|-----------|
| Frontend | HTML, JavaScript |
| Styling  | Tailwind CSS |
| Kriptografi | [CryptoJS](https://www.npmjs.com/package/crypto-js) - AES-128 (ECB Mode) |

---

## 📸 Tampilan Antarmuka

![LockItUp UI](screenshot.png)

---

## 📁 Struktur Proyek

📦 LockItUp
├── index.html # Halaman utama aplikasi
├── app.js # Logika enkripsi, dekripsi, validasi input
├── README.md # Dokumentasi proyek
└── style.css (opsional jika digunakan CSS eksternal)


---

## 💡 Cara Menggunakan

1. **Buka `index.html`** di browser (cukup klik dua kali jika dijalankan secara lokal).
2. Masukkan **teks** atau **unggah file `.txt`** yang ingin dienkripsi.
3. Masukkan **kunci (key) 16 karakter**.
4. Klik tombol **"Encrypt"** untuk mengenkripsi atau **"Decrypt"** untuk mendekripsi.
5. Salin hasil ke clipboard atau unduh sebagai file `.txt`.

---

## ⚠️ Catatan Keamanan

- Aplikasi ini berjalan **sepenuhnya di sisi klien (client-side)** — tidak ada data yang dikirim ke server.
- Mode enkripsi default adalah **AES-ECB**, yang memiliki kelemahan jika digunakan untuk data berpola.
- Untuk aplikasi nyata, direkomendasikan menggunakan mode AES-CBC atau GCM dengan IV acak.

---

## 📊 Pengujian Kinerja

| No | Skenario | Waktu Eksekusi |
|----|----------|----------------|
| 1 | Enkripsi teks sederhana | 6 – 10 ms |
| 2 | Dekripsi ciphertext | 5 – 9 ms |
| 3 | Validasi input dan kunci | < 1 ms |

---

## 🎯 Tujuan Proyek

- Mempermudah pemahaman proses kerja **AES-128**
- Menyediakan alat pembelajaran kriptografi berbasis visual dan interaktif
- Memberikan solusi ringan untuk kebutuhan enkripsi teks sederhana

---


---

## 🙋‍♂️ Kontribusi

Ingin mengembangkan lebih lanjut?
- Tambahkan mode AES-CBC dengan IV acak
- Tambahkan enkripsi file biner (bukan hanya teks)
- Integrasi backend untuk penyimpanan terenkripsi

Fork, clone, dan submit pull request ya! 👨‍💻

---

## 📬 Kontak

Pengembang: **Rayhan Muhammad**  
Email: `rayhanma0032@gmail.com`  
GitHub: [github.com/Mr22XX](https://github.com/Mr22XX)

---

> Aplikasi ini dibuat sebagai bagian dari proyek mata kuliah Kriptografi - Semester 4, Universitas Bengkulu.
