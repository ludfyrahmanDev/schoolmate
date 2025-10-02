# Sistem Monitoring Siswa

Sistem monitoring siswa adalah aplikasi web responsif yang memungkinkan 4 jenis pengguna (Wali Kelas, Guru, Kantin, dan Orang Tua) untuk memantau dan mengelola berbagai aspek pendidikan siswa.

## Fitur Utama

### 🏠 Halaman Login
- Pilihan 4 role pengguna dengan desain card yang menarik
- Login form yang responsif
- Animasi smooth dan transisi yang elegan

### 👨‍🏫 Fitur Wali Kelas
- **Dashboard**: Statistik lengkap kelas (jumlah siswa, mata pelajaran, tahun ajaran, rata-rata nilai)
- **Manajemen Siswa**: Daftar siswa dengan filter tahun ajaran
- **Detail Siswa**: Informasi lengkap siswa, orang tua, dan nilai semua mata pelajaran (UTS & UAS)

### 👩‍🎓 Fitur Guru
- **Dashboard**: Jumlah kelas dan siswa yang diajar, mata pelajaran, periode aktif
- **Manajemen Siswa**: Pencarian dan filter berdasarkan kelas & tahun ajaran
- **Input Nilai**: Form input nilai UTS/UAS untuk mata pelajaran yang diajar
- **Detail Nilai**: Tampilan nilai siswa sesuai mata pelajaran guru

### 🍽️ Fitur Kantin
- **Dashboard**: Statistik pemasukan, pengeluaran, total transaksi, barang terfavorit
- **Manajemen Transaksi**: Daftar transaksi dengan filter metode pembayaran
- **Form Transaksi Baru**: 
  - Pilih menu dengan sistem keranjang
  - Support pembayaran cash dan kartu
  - Validasi saldo untuk pembayaran kartu
  - Tampilan informasi siswa saat scan kartu
- **Detail Transaksi**: Informasi lengkap pembelian dan pembayaran

### 👨‍👩‍👧‍👦 Fitur Orang Tua
- **Dashboard**: Rata-rata nilai dan pengeluaran anak
- **Multi-Anak**: Support untuk memantau beberapa anak
- **Detail Anak**: Informasi lengkap (nama, kelas, saldo, nilai rapor)
- **Filter Periode**: Nilai rapor dapat difilter berdasarkan periode
- **Design Mobile-First**: Interface mirip aplikasi iOS/Android

## Teknologi yang Digunakan

- **HTML5**: Struktur halaman web
- **CSS3**: Styling dengan gradient modern, flexbox, dan grid
- **JavaScript**: Logika aplikasi dan manipulasi DOM
- **Font Awesome**: Icons yang konsisten
- **Responsive Design**: Mobile-first approach

## Struktur File

```
Monitoring siswa/
├── index.html                    # Halaman login utama
├── dashboard-wali-kelas.html     # Dashboard wali kelas
├── dashboard-guru.html           # Dashboard guru
├── dashboard-kantin.html         # Dashboard kantin
├── dashboard-orang-tua.html      # Dashboard orang tua (mobile-friendly)
├── assets/
│   ├── css/
│   │   └── style.css            # File CSS utama
│   ├── js/
│   │   └── app.js               # File JavaScript utama
│   └── images/                  # Folder untuk gambar (jika diperlukan)
└── README.md                    # Dokumentasi proyek
```

## Data Dummy

Sistem menggunakan data dummy yang tersimpan di JavaScript untuk simulasi:

- **Siswa**: 3 siswa dengan data lengkap (nama, kelas, NISN, orang tua, saldo, nilai)
- **Guru**: 4 guru dengan mata pelajaran berbeda
- **Menu Kantin**: 5 item makanan dan minuman
- **Transaksi**: Beberapa transaksi contoh dengan berbagai metode pembayaran
- **Tahun Ajaran**: 2024/2025 (aktif) dan 2023/2024

## Cara Penggunaan

1. **Buka `index.html`** di browser
2. **Pilih role** yang ingin digunakan (Wali Kelas, Guru, Kantin, atau Orang Tua)
3. **Login** dengan kredensial demo (otomatis terisi)
4. **Eksplorasi fitur** sesuai dengan role yang dipilih

### Kredensial Demo

- **Wali Kelas**: `wali_kelas` / `password123`
- **Guru**: `guru` / `password123`  
- **Kantin**: `kantin` / `password123`
- **Orang Tua**: `orang_tua` / `password123`

## Fitur Design

### 🎨 Visual Design
- **Modern Gradient**: Warna gradien yang menarik dan konsisten
- **Card-based Layout**: Informasi terorganisir dalam card yang rapi
- **Smooth Animations**: Transisi dan animasi yang halus
- **Consistent Icons**: Penggunaan Font Awesome untuk konsistensi

### 📱 Responsiveness
- **Mobile-First**: Design prioritas untuk perangkat mobile
- **Tablet Support**: Layout yang baik untuk tablet
- **Desktop Optimization**: Tampilan optimal untuk desktop
- **Touch-Friendly**: Button dan elemen yang mudah di-tap

### 🔍 User Experience
- **Intuitive Navigation**: Menu navigasi yang mudah dipahami
- **Quick Actions**: Aksi cepat untuk fungsi yang sering digunakan
- **Search & Filter**: Pencarian dan filter yang responsive
- **Loading States**: Indikator loading untuk feedback pengguna

## Customization

### Mengganti Data Dummy
Edit file `assets/js/app.js` pada object `dummyData` untuk mengubah:
- Data siswa
- Data guru dan mata pelajaran
- Menu kantin dan harga
- Transaksi

### Mengganti Warna Theme
Edit file `assets/css/style.css` pada bagian CSS variables atau gradient colors:
```css
/* Contoh mengganti gradient utama */
background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
```

### Menambah Fitur Baru
1. Tambahkan HTML struktur di file dashboard yang sesuai
2. Tambahkan styling di `style.css`
3. Tambahkan logic JavaScript di `app.js` atau script section

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Performance Features

- **Lightweight**: Minimal external dependencies
- **Fast Loading**: Optimized CSS and JavaScript
- **Efficient DOM**: Minimal DOM manipulation untuk performa optimal
- **Caching**: LocalStorage untuk session management

## Security Notes

Sistem ini adalah demo dengan data dummy. Untuk implementasi production:

1. **Implementasi Authentication**: Gunakan sistem autentikasi yang proper
2. **Database Integration**: Ganti data dummy dengan database real
3. **Input Validation**: Tambahkan validasi server-side
4. **HTTPS**: Pastikan menggunakan HTTPS untuk keamanan
5. **Session Management**: Implementasi session management yang aman

## Future Enhancements

- [ ] Integration dengan database real
- [ ] Push notifications untuk orang tua
- [ ] Export laporan ke PDF
- [ ] Chat system antara guru dan orang tua
- [ ] Attendance tracking
- [ ] Photo upload untuk siswa
- [ ] Multi-language support
- [ ] Dark mode theme

## Kontribusi

Untuk berkontribusi pada proyek ini:

1. Fork repository
2. Buat branch feature baru
3. Commit perubahan Anda
4. Push ke branch
5. Buat Pull Request

## License

Proyek ini dibuat untuk tujuan edukasi dan pembelajaran.

---

**Dibuat dengan ❤️ untuk monitoring pendidikan yang lebih baik**