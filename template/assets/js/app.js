// Data dummy untuk simulasi
const dummyData = {
    students: [
        {
            id: 1,
            name: "Ahmad Rizki",
            class: "X-A",
            nisn: "1234567890",
            parent: "Budi Santoso",
            parentPhone: "08123456789",
            balance: 50000,
            photo: "student1.jpg",
            grades: {
                "2024/2025": {
                    "Matematika": { uts: 85, uas: 88, tugas1: 80, tugas2: 90 },
                    "Bahasa Indonesia": { uts: 90, uas: 85, tugas1: 88, tugas2: 92 },
                    "IPA": { uts: 82, uas: 86, tugas1: 80, tugas2: 84 },
                    "IPS": { uts: 88, uas: 90, tugas1: 85, tugas2: 87 }
                }
            }
        },
        {
            id: 2,
            name: "Siti Nurhaliza",
            class: "X-A",
            nisn: "1234567891",
            parent: "Sutrisno",
            parentPhone: "08123456788",
            balance: 75000,
            photo: "student2.jpg",
            grades: {
                "2024/2025": {
                    "Matematika": { uts: 92, uas: 90 },
                    "Bahasa Indonesia": { uts: 88, uas: 92 },
                    "IPA": { uts: 90, uas: 88 },
                    "IPS": { uts: 85, uas: 87 }
                }
            }
        },
        {
            id: 4,
            name: "Rina Maharani",
            class: "X-B",
            nisn: "1234567893",
            parent: "Budi Santoso",
            parentPhone: "08123456789",
            balance: 60000,
            photo: "student4.jpg",
            grades: {
                "2024/2025": {
                    "Matematika": { uts: 88, uas: 85 },
                    "Bahasa Indonesia": { uts: 90, uas: 88 },
                    "IPA": { uts: 86, uas: 89 },
                    "IPS": { uts: 87, uas: 90 }
                }
            }
        },
        {
            id: 3,
            name: "Dedi Kurniawan",
            class: "X-B",
            nisn: "1234567892",
            parent: "Joko Susilo",
            parentPhone: "08123456787",
            balance: 30000,
            photo: "student3.jpg",
            grades: {
                "2024/2025": {
                    "Matematika": { uts: 78, uas: 80 },
                    "Bahasa Indonesia": { uts: 85, uas: 82 },
                    "IPA": { uts: 75, uas: 78 },
                    "IPS": { uts: 80, uas: 83 }
                }
            }
        }
    ],
    
    teachers: [
        { id: 1, name: "Ibu Sari", subject: "Matematika", classes: ["X-A", "X-B"] },
        { id: 2, name: "Pak Budi", subject: "Bahasa Indonesia", classes: ["X-A", "X-B"] },
        { id: 3, name: "Ibu Ani", subject: "IPA", classes: ["X-A"] },
        { id: 4, name: "Pak Dedi", subject: "IPS", classes: ["X-B"] }
    ],
    
    canteenItems: [
        { id: 1, name: "Nasi Gudeg", price: 15000, category: "Makanan Berat" },
        { id: 2, name: "Mie Ayam", price: 12000, category: "Makanan Berat" },
        { id: 3, name: "Es Teh", price: 3000, category: "Minuman" },
        { id: 4, name: "Kerupuk", price: 2000, category: "Snack" },
        { id: 5, name: "Roti Bakar", price: 8000, category: "Snack" }
    ],
    
    transactions: [
        {
            id: "TRX001",
            studentId: 1,
            items: [
                { id: 1, name: "Nasi Gudeg", price: 15000, quantity: 1 },
                { id: 3, name: "Es Teh", price: 3000, quantity: 1 }
            ],
            total: 18000,
            paymentMethod: "cash",
            date: "2024-09-20"
        },
        {
            id: "TRX002",
            studentId: 2,
            items: [
                { id: 2, name: "Mie Ayam", price: 12000, quantity: 1 }
            ],
            total: 12000,
            paymentMethod: "card",
            date: "2024-09-21"
        },
        {
            id: "TRX003",
            studentId: 4,
            items: [
                { id: 1, name: "Nasi Gudeg", price: 15000, quantity: 1 },
                { id: 3, name: "Es Teh", price: 3000, quantity: 1 },
                { id: 4, name: "Kerupuk", price: 2000, quantity: 1 }
            ],
            total: 20000,
            paymentMethod: "card",
            date: "2024-09-22"
        },
        {
            id: "TRX004",
            studentId: 4,
            items: [
                { id: 5, name: "Roti Bakar", price: 8000, quantity: 1 },
                { id: 3, name: "Es Teh", price: 3000, quantity: 1 }
            ],
            total: 11000,
            paymentMethod: "card",
            date: "2024-09-23"
        },
        {
            id: "TRX005",
            studentId: 4,
            items: [
                { id: 2, name: "Mie Ayam", price: 12000, quantity: 1 }
            ],
            total: 12000,
            paymentMethod: "card",
            date: "2024-09-25"
        }
    ],
    
    academicYear: "2024/2025",
    currentUser: null,
    
    assignments: [
        {
            id: 1,
            studentId: 1,
            subject: "Matematika",
            title: "Tugas Aljabar",
            score: 85,
            date: "2024-09-15",
            teacherId: 1
        },
        {
            id: 2,
            studentId: 1,
            subject: "Bahasa Indonesia",
            title: "Essay Puisi",
            score: 90,
            date: "2024-09-18",
            teacherId: 2
        },
        {
            id: 3,
            studentId: 2,
            subject: "Matematika",
            title: "Tugas Aljabar",
            score: 95,
            date: "2024-09-15",
            teacherId: 1
        },
        {
            id: 4,
            studentId: 4,
            subject: "Matematika",
            title: "Tugas Aljabar",
            score: 88,
            date: "2024-09-15",
            teacherId: 1
        },
        {
            id: 5,
            studentId: 4,
            subject: "Bahasa Indonesia",
            title: "Essay Puisi",
            score: 92,
            date: "2024-09-18",
            teacherId: 2,
            status: "Selesai",
            dueDate: "2024-09-25"
        },
        {
            id: 6,
            studentId: 4,
            subject: "IPA",
            title: "Praktikum Fisika",
            score: 87,
            date: "2024-09-20",
            teacherId: 3,
            status: "Selesai",
            dueDate: "2024-09-27"
        }
    ],
    
    studentNotes: [
        {
            id: 1,
            studentId: 1,
            teacherId: 1,
            subject: "Matematika",
            content: "Siswa sangat aktif dalam diskusi kelas dan menunjukkan pemahaman yang baik. Namun perlu lebih fokus dalam mengerjakan soal cerita dan meningkatkan ketelitian dalam perhitungan.",
            date: "2024-10-01",
            category: "akademik",
            priority: "medium",
            isRead: false,
            readAt: null
        },
        {
            id: 2,
            studentId: 1,
            teacherId: 2,
            subject: "Bahasa Indonesia",
            content: "Prestasi menulis yang sangat baik! Karya puisinya menunjukkan kreativitas tinggi. Direkomendasikan untuk mengikuti lomba puisi tingkat kabupaten.",
            date: "2024-09-28",
            category: "prestasi",
            priority: "high",
            isRead: true,
            readAt: "2024-10-02"
        },
        {
            id: 3,
            studentId: 1,
            teacherId: 3,
            subject: "IPA",
            content: "Sikap dan perilaku di kelas sangat baik. Siswa membantu teman yang kesulitan dan menunjukkan leadership yang positif dalam kerja kelompok.",
            date: "2024-09-25",
            category: "perilaku",
            priority: "low",
            isRead: false,
            readAt: null
        },
        {
            id: 4,
            studentId: 2,
            teacherId: 1,
            subject: "Matematika",
            content: "Perlu perhatian khusus dalam materi aljabar. Disarankan untuk mengikuti bimbingan tambahan atau les private untuk mengejar ketertinggalan.",
            date: "2024-09-30",
            category: "akademik",
            priority: "high",
            isRead: false,
            readAt: null
        },
        {
            id: 5,
            studentId: 3,
            teacherId: 4,
            subject: "Olahraga",
            content: "Siswa mengeluh sakit kepala berulang saat aktivitas fisik. Mohon konsultasi dengan dokter untuk pemeriksaan kesehatan yang lebih detail.",
            date: "2024-09-27",
            category: "kesehatan", 
            priority: "high",
            isRead: true,
            readAt: "2024-09-28"
        },
        {
            id: 6,
            studentId: 4,
            teacherId: 1,
            teacherName: "Ibu Sari",
            subject: "Matematika",
            title: "Prestasi Baik",
            content: "Rina menunjukkan kemajuan yang sangat baik dalam memahami konsep matematika. Selalu aktif bertanya dan membantu teman yang kesulitan.",
            date: "2024-10-05",
            category: "akademik",
            type: "positif",
            priority: "medium",
            isRead: false,
            readAt: null
        },
        {
            id: 7,
            studentId: 4,
            teacherId: 2,
            teacherName: "Pak Budi",
            subject: "Bahasa Indonesia",
            title: "Karya Kreatif",
            content: "Essay dan puisi yang dibuat sangat menarik. Memiliki kemampuan menulis yang baik dengan imajinasi yang tinggi.",
            date: "2024-10-10",
            category: "prestasi",
            type: "positif",
            priority: "high",
            isRead: false,
            readAt: null
        }
    ],
    
    attendance: [
        {
            id: 1,
            studentId: 1,
            date: "2024-10-01",
            status: "hadir", // hadir, sakit, izin, alpha
            time: "07:30",
            note: ""
        },
        {
            id: 2,
            studentId: 2,
            date: "2024-10-01",
            status: "hadir",
            time: "07:25",
            note: ""
        },
        {
            id: 3,
            studentId: 3,
            date: "2024-10-01",
            status: "sakit",
            time: "",
            note: "Demam tinggi"
        },
        {
            id: 4,
            studentId: 4,
            date: "2024-10-01",
            status: "hadir",
            time: "07:20",
            note: ""
        },
        {
            id: 5,
            studentId: 4,
            date: "2024-10-02",
            status: "hadir",
            time: "07:25",
            note: ""
        },
        {
            id: 6,
            studentId: 4,
            date: "2024-10-03",
            status: "hadir",
            time: "07:22",
            note: ""
        },
        {
            id: 7,
            studentId: 4,
            date: "2024-10-04",
            status: "izin",
            time: "",
            note: "Acara keluarga"
        },
        {
            id: 8,
            studentId: 4,
            date: "2024-10-07",
            status: "hadir",
            time: "07:18",
            note: ""
        }
    ],
    
    bullyingReports: [
        {
            id: 1,
            reporterId: 1, // student ID who reported or parent
            category: "verbal", // verbal, fisik, cyber, psikologis
            date: "2024-09-25",
            time: "10:30",
            location: "Kantin sekolah",
            witnesses: "Ahmad (X-B), Siti (X-A)",
            chronology: "Siswa A mengatakan kata-kata kasar kepada siswa B saat di kantin. Hal ini membuat siswa B merasa tidak nyaman dan menangis.",
            status: "reported", // reported, investigating, resolved
            createdAt: "2024-09-25",
            parentId: 1
        }
    ],
    
    announcements: [
        {
            id: 1,
            title: "Libur Nasional 17 Agustus",
            content: "Sekolah libur pada tanggal 17 Agustus 2024 dalam rangka memperingati Hari Kemerdekaan RI ke-79.",
            date: "2024-08-15",
            createdBy: "wali_kelas",
            priority: "high", // high, medium, low
            targetAudience: ["orang-tua", "siswa"],
            isActive: true
        },
        {
            id: 2,
            title: "Rapat Orang Tua Semester Ganjil",
            content: "Rapat orang tua akan dilaksanakan pada Sabtu, 5 Oktober 2024 pukul 09:00 WIB di Aula sekolah. Mohon kehadiran semua orang tua.",
            date: "2024-10-01",
            createdBy: "wali_kelas",
            priority: "high",
            targetAudience: ["orang-tua"],
            isActive: true
        },
        {
            id: 3,
            title: "Jadwal Ujian Tengah Semester",
            content: "UTS akan dilaksanakan mulai tanggal 15-20 Oktober 2024. Silakan persiapkan diri dengan baik.",
            date: "2024-10-01",
            createdBy: "wali_kelas",
            priority: "medium",
            targetAudience: ["orang-tua", "siswa"],
            isActive: true
        }
    ],
    
    // School News Data
    schoolNews: [
        {
            id: 1,
            title: "Pengumuman Libur Semester",
            date: "2024-10-15",
            category: "Pengumuman",
            content: "Libur semester akan dimulai tanggal 20 Desember 2024 hingga 5 Januari 2025. Siswa diharapkan memanfaatkan waktu libur dengan baik untuk beristirahat dan mempersiapkan diri untuk semester berikutnya.",
            image: "https://via.placeholder.com/400x200?text=Libur+Semester",
            author: "Kepala Sekolah",
            isActive: true
        },
        {
            id: 2,
            title: "Pendaftaran Ekstrakurikuler Tahun Ajaran Baru",
            date: "2024-10-10",
            category: "Kegiatan",
            content: "Pendaftaran ekstrakurikuler dibuka mulai 1 November 2024. Tersedia berbagai pilihan seperti Pramuka, Basket, Musik, Robotika, Bahasa Inggris, dan Seni Tari. Pendaftaran dapat dilakukan melalui wali kelas masing-masing.",
            image: "https://via.placeholder.com/400x200?text=Ekstrakurikuler",
            author: "Wakil Kepala Sekolah Kesiswaan",
            isActive: true
        },
        {
            id: 3,
            title: "Prestasi Siswa di Olimpiade Matematika",
            date: "2024-10-05",
            category: "Prestasi",
            content: "Selamat kepada tim olimpiade matematika yang berhasil meraih medali emas tingkat provinsi. Ini merupakan kebanggaan sekolah dan motivasi bagi siswa lainnya untuk terus berprestasi.",
            image: "https://via.placeholder.com/400x200?text=Olimpiade",
            author: "Kepala Sekolah",
            isActive: true
        },
        {
            id: 4,
            title: "Pelaksanaan Ujian Tengah Semester",
            date: "2024-09-28",
            category: "Akademik",
            content: "UTS akan dilaksanakan pada tanggal 15-22 November 2024. Siswa diharapkan mempersiapkan diri dengan baik. Jadwal lengkap dapat dilihat di papan pengumuman sekolah atau melalui wali kelas.",
            image: "https://via.placeholder.com/400x200?text=UTS",
            author: "Wakil Kepala Sekolah Kurikulum",
            isActive: true
        },
        {
            id: 5,
            title: "Program Vaksinasi COVID-19 Booster",
            date: "2024-09-20",
            category: "Kesehatan",
            content: "Sekolah bekerja sama dengan Puskesmas setempat akan mengadakan program vaksinasi booster COVID-19 untuk siswa kelas X-XII pada tanggal 10 Oktober 2024. Mohon membawa kartu vaksinasi.",
            image: "https://via.placeholder.com/400x200?text=Vaksinasi",
            author: "UKS",
            isActive: true
        },
        {
            id: 6,
            title: "Kompetisi Cerdas Cermat Antar Kelas",
            date: "2024-09-15",
            category: "Kegiatan",
            content: "Akan dilaksanakan kompetisi cerdas cermat antar kelas pada 25 September 2024. Setiap kelas diwajibkan mengirimkan 3 siswa sebagai perwakilan. Pendaftaran melalui wali kelas.",
            image: "https://via.placeholder.com/400x200?text=Cerdas+Cermat",
            author: "OSIS",
            isActive: true
        }
    ],
    
    // School Structure Data
    schoolStructure: [
        {
            id: 1,
            position: "Kepala Sekolah",
            name: "Dr. Ahmad Yani, M.Pd",
            phone: "08123456789",
            email: "kepala@sekolah.com",
            photo: "https://via.placeholder.com/100?text=KS",
            nip: "196505151990031001",
            education: "S3 Pendidikan",
            startYear: 2020
        },
        {
            id: 2,
            position: "Wakil Kepala Sekolah Kurikulum",
            name: "Dra. Siti Nurhaliza, M.Pd",
            phone: "08123456788",
            email: "waka.kurikulum@sekolah.com",
            photo: "https://via.placeholder.com/100?text=WK",
            nip: "196805201991032001",
            education: "S2 Pendidikan",
            startYear: 2018
        },
        {
            id: 3,
            position: "Wakil Kepala Sekolah Kesiswaan",
            name: "Bambang Santoso, S.Pd",
            phone: "08123456787",
            email: "waka.kesiswaan@sekolah.com",
            photo: "https://via.placeholder.com/100?text=WK",
            nip: "197003101992031002",
            education: "S1 Pendidikan",
            startYear: 2019
        },
        {
            id: 4,
            position: "Wakil Kepala Sekolah Sarana Prasarana",
            name: "Ir. Joko Widodo, M.T",
            phone: "08123456786",
            email: "waka.sarpras@sekolah.com",
            photo: "https://via.placeholder.com/100?text=WK",
            nip: "196907151993031003",
            education: "S2 Teknik",
            startYear: 2021
        },
        {
            id: 5,
            position: "Wakil Kepala Sekolah Humas",
            name: "Lisa Permata, S.Sos, M.M",
            phone: "08123456785",
            email: "waka.humas@sekolah.com",
            photo: "https://via.placeholder.com/100?text=WK",
            nip: "197505101994032001",
            education: "S2 Manajemen",
            startYear: 2020
        },
        {
            id: 6,
            position: "Wali Kelas X-A",
            name: "Dewi Lestari, S.Pd",
            phone: "08123456784",
            email: "walikelas.xa@sekolah.com",
            photo: "https://via.placeholder.com/100?text=WK",
            nip: "198001152005012001",
            education: "S1 Pendidikan Matematika",
            startYear: 2015
        },
        {
            id: 7,
            position: "Wali Kelas X-B",
            name: "Rina Susanti, S.Pd",
            phone: "08123456783",
            email: "walikelas.xb@sekolah.com",
            photo: "https://via.placeholder.com/100?text=WK",
            nip: "198103202006012002",
            education: "S1 Pendidikan Bahasa Indonesia",
            startYear: 2016
        },
        {
            id: 8,
            position: "Wali Kelas XI-A",
            name: "Budi Santoso, S.Pd",
            phone: "08123456782",
            email: "walikelas.xia@sekolah.com",
            photo: "https://via.placeholder.com/100?text=WK",
            nip: "197909152005011001",
            education: "S1 Pendidikan IPA",
            startYear: 2014
        },
        {
            id: 9,
            position: "Wali Kelas XI-B",
            name: "Ani Wijaya, S.Pd",
            phone: "08123456781",
            email: "walikelas.xib@sekolah.com",
            photo: "https://via.placeholder.com/100?text=WK",
            nip: "198205102007012001",
            education: "S1 Pendidikan IPS",
            startYear: 2017
        },
        {
            id: 10,
            position: "Wali Kelas XII-A",
            name: "Hendra Gunawan, S.Pd",
            phone: "08123456780",
            email: "walikelas.xiia@sekolah.com",
            photo: "https://via.placeholder.com/100?text=WK",
            nip: "197807252004011001",
            education: "S1 Pendidikan Fisika",
            startYear: 2013
        },
        {
            id: 11,
            position: "Wali Kelas XII-B",
            name: "Maya Sari, S.Pd",
            phone: "08123456779",
            email: "walikelas.xiib@sekolah.com",
            photo: "https://via.placeholder.com/100?text=WK",
            nip: "198106152006012003",
            education: "S1 Pendidikan Kimia",
            startYear: 2016
        },
        {
            id: 12,
            position: "Koordinator BK",
            name: "Drs. Wahyu Hidayat",
            phone: "08123456778",
            email: "bk@sekolah.com",
            photo: "https://via.placeholder.com/100?text=BK",
            nip: "196612101991031001",
            education: "S1 Bimbingan Konseling",
            startYear: 2010
        },
        {
            id: 13,
            position: "Kepala Perpustakaan",
            name: "Sri Mulyani, S.Pd",
            phone: "08123456777",
            email: "perpustakaan@sekolah.com",
            photo: "https://via.placeholder.com/100?text=PP",
            nip: "197804201999032001",
            education: "S1 Perpustakaan",
            startYear: 2012
        },
        {
            id: 14,
            position: "Kepala Laboratorium",
            name: "Dr. Eko Prasetyo, M.Si",
            phone: "08123456776",
            email: "lab@sekolah.com",
            photo: "https://via.placeholder.com/100?text=LAB",
            nip: "197601102001031001",
            education: "S3 Sains",
            startYear: 2015
        }
    ],
    
    // Classes Data
    classes: [
        {
            id: "X-A",
            name: "Kelas X-A",
            level: "X",
            waliKelasId: 6,
            waliKelasName: "Dewi Lestari, S.Pd",
            capacity: 36,
            currentStudents: 32,
            room: "Ruang 101",
            academicYear: "2024/2025"
        },
        {
            id: "X-B",
            name: "Kelas X-B",
            level: "X",
            waliKelasId: 7,
            waliKelasName: "Rina Susanti, S.Pd",
            capacity: 36,
            currentStudents: 30,
            room: "Ruang 102",
            academicYear: "2024/2025"
        },
        {
            id: "XI-A",
            name: "Kelas XI-A",
            level: "XI",
            waliKelasId: 8,
            waliKelasName: "Budi Santoso, S.Pd",
            capacity: 36,
            currentStudents: 28,
            room: "Ruang 201",
            academicYear: "2024/2025"
        },
        {
            id: "XI-B",
            name: "Kelas XI-B",
            level: "XI",
            waliKelasId: 9,
            waliKelasName: "Ani Wijaya, S.Pd",
            capacity: 36,
            currentStudents: 29,
            room: "Ruang 202",
            academicYear: "2024/2025"
        },
        {
            id: "XII-A",
            name: "Kelas XII-A",
            level: "XII",
            waliKelasId: 10,
            waliKelasName: "Hendra Gunawan, S.Pd",
            capacity: 36,
            currentStudents: 31,
            room: "Ruang 301",
            academicYear: "2024/2025"
        },
        {
            id: "XII-B",
            name: "Kelas XII-B",
            level: "XII",
            waliKelasId: 11,
            waliKelasName: "Maya Sari, S.Pd",
            capacity: 36,
            currentStudents: 27,
            room: "Ruang 302",
            academicYear: "2024/2025"
        }
    ],
    
    // Student Achievements Data
    studentAchievements: [
        {
            id: 1,
            studentId: 1,
            studentName: "Ahmad Rizki",
            class: "X-A",
            achievement: "Juara 1 Olimpiade Matematika Tingkat Provinsi",
            date: "2024-09-15",
            category: "Akademik",
            level: "Provinsi",
            medal: "gold",
            description: "Berhasil meraih juara 1 pada Olimpiade Matematika tingkat Provinsi dengan nilai sempurna.",
            certificate: "CERT-2024-001.pdf"
        },
        {
            id: 2,
            studentId: 2,
            studentName: "Siti Nurhaliza",
            class: "X-A",
            achievement: "Juara 2 Lomba Menulis Cerpen Tingkat Nasional",
            date: "2024-09-10",
            category: "Seni",
            level: "Nasional",
            medal: "silver",
            description: "Karya cerpen berjudul 'Cahaya di Balik Awan' berhasil meraih juara 2 tingkat nasional.",
            certificate: "CERT-2024-002.pdf"
        },
        {
            id: 3,
            studentId: 3,
            studentName: "Dedi Kurniawan",
            class: "X-B",
            achievement: "Juara 3 Kompetisi Robotika Regional",
            date: "2024-08-20",
            category: "Teknologi",
            level: "Regional",
            medal: "bronze",
            description: "Tim robotika berhasil menciptakan robot line follower dengan performa terbaik ketiga.",
            certificate: "CERT-2024-003.pdf"
        },
        {
            id: 4,
            studentName: "Dewi Anggraini",
            class: "XII-B",
            achievement: "Best Speaker Debat Bahasa Inggris",
            date: "2024-08-15",
            category: "Bahasa",
            level: "Kabupaten",
            medal: "gold",
            description: "Menjadi pembicara terbaik dalam kompetisi debat bahasa Inggris tingkat kabupaten.",
            certificate: "CERT-2024-004.pdf"
        },
        {
            id: 5,
            studentName: "Eko Prasetyo",
            class: "XI-A",
            achievement: "Atlet Terbaik Turnamen Basket Antar Sekolah",
            date: "2024-07-25",
            category: "Olahraga",
            level: "Kabupaten",
            medal: "gold",
            description: "MVP (Most Valuable Player) turnamen basket dengan rata-rata 24 poin per pertandingan.",
            certificate: "CERT-2024-005.pdf"
        },
        {
            id: 6,
            studentName: "Rina Wulandari",
            class: "X-B",
            achievement: "Juara 1 Festival Paduan Suara",
            date: "2024-07-10",
            category: "Seni",
            level: "Provinsi",
            medal: "gold",
            description: "Paduan suara sekolah meraih juara 1 dengan penampilan lagu daerah yang memukau.",
            certificate: "CERT-2024-006.pdf"
        },
        {
            id: 7,
            studentName: "Fajar Ramadhan",
            class: "XII-A",
            achievement: "Juara 2 Lomba Karya Ilmiah Remaja",
            date: "2024-06-30",
            category: "Akademik",
            level: "Nasional",
            medal: "silver",
            description: "Penelitian tentang 'Pemanfaatan Limbah Organik untuk Biogas' meraih juara 2 nasional.",
            certificate: "CERT-2024-007.pdf"
        },
        {
            id: 8,
            studentName: "Gita Savitri",
            class: "XI-B",
            achievement: "Juara 1 Lomba Fotografi",
            date: "2024-06-15",
            category: "Seni",
            level: "Provinsi",
            medal: "gold",
            description: "Foto dengan tema 'Keindahan Alam Indonesia' menjadi yang terbaik.",
            certificate: "CERT-2024-008.pdf"
        },
        {
            id: 9,
            studentName: "Hadi Suryanto",
            class: "XII-A",
            achievement: "Juara 3 Olimpiade Fisika",
            date: "2024-05-20",
            category: "Akademik",
            level: "Provinsi",
            medal: "bronze",
            description: "Berhasil masuk 3 besar olimpiade fisika dengan soal-soal tingkat tinggi.",
            certificate: "CERT-2024-009.pdf"
        },
        {
            id: 10,
            studentName: "Indah Pertiwi",
            class: "XI-A",
            achievement: "Best Dancer Kompetisi Tari Modern",
            date: "2024-05-10",
            category: "Seni",
            level: "Kabupaten",
            medal: "gold",
            description: "Penari terbaik dengan koreografi orisinal yang memukau juri.",
            certificate: "CERT-2024-010.pdf"
        }
    ]
};

// Utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('id-ID');
}

function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

function calculateAverage(grades) {
    if (!grades || Object.keys(grades).length === 0) return 0;
    
    let total = 0;
    let count = 0;
    
    Object.values(grades).forEach(subject => {
        if (subject.uts) {
            total += subject.uts;
            count++;
        }
        if (subject.uas) {
            total += subject.uas;
            count++;
        }
    });
    
    return count > 0 ? Math.round(total / count) : 0;
}

// Authentication functions
function login(role, username) {
    dummyData.currentUser = {
        role: role,
        username: username || `User ${role}`,
        loginTime: new Date()
    };
    
    localStorage.setItem('currentUser', JSON.stringify(dummyData.currentUser));
    
    // Redirect to appropriate dashboard
    window.location.href = `dashboard-${role}.html`;
}

function logout() {
    dummyData.currentUser = null;
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

function checkAuth() {
    const user = localStorage.getItem('currentUser');
    if (user) {
        dummyData.currentUser = JSON.parse(user);
        return true;
    }
    return false;
}

function getCurrentUser() {
    return dummyData.currentUser;
}

// Dashboard functions for Wali Kelas
function getWaliKelasStats() {
    const classStudents = dummyData.students.filter(s => s.class === "X-A"); // Assuming wali kelas for X-A
    const totalStudents = classStudents.length;
    const totalSubjects = 4; // Math, Indonesian, Science, Social
    const academicYear = dummyData.academicYear;
    
    // Calculate average grade
    let totalGrades = 0;
    let gradeCount = 0;
    
    classStudents.forEach(student => {
        const grades = student.grades[academicYear];
        if (grades) {
            Object.values(grades).forEach(subject => {
                if (subject.uts) {
                    totalGrades += subject.uts;
                    gradeCount++;
                }
                if (subject.uas) {
                    totalGrades += subject.uas;
                    gradeCount++;
                }
            });
        }
    });
    
    const averageGrade = gradeCount > 0 ? Math.round(totalGrades / gradeCount) : 0;
    
    return {
        totalStudents,
        totalSubjects,
        academicYear,
        averageGrade
    };
}

// Dashboard functions for Guru
function getGuruStats(teacherId = 1) {
    const teacher = dummyData.teachers.find(t => t.id === teacherId);
    const totalClasses = teacher ? teacher.classes.length : 0;
    
    let totalStudents = 0;
    if (teacher) {
        teacher.classes.forEach(className => {
            totalStudents += dummyData.students.filter(s => s.class === className).length;
        });
    }
    
    return {
        totalClasses,
        totalStudents,
        academicYear: dummyData.academicYear,
        subject: teacher ? teacher.subject : "Unknown"
    };
}

// Dashboard functions for Kantin
function getKantinStats() {
    const transactions = dummyData.transactions;
    const totalTransactions = transactions.length;
    
    let totalIncome = 0;
    let totalExpense = 5000000; // Dummy expense
    
    transactions.forEach(t => {
        totalIncome += t.total;
    });
    
    // Most bought item
    const itemCount = {};
    transactions.forEach(t => {
        t.items.forEach(item => {
            itemCount[item.name] = (itemCount[item.name] || 0) + item.quantity;
        });
    });
    
    const mostBought = Object.keys(itemCount).reduce((a, b) => 
        itemCount[a] > itemCount[b] ? a : b
    ) || "Tidak ada";
    
    return {
        totalIncome,
        totalExpense,
        totalTransactions,
        mostBought
    };
}

// Dashboard functions for Orang Tua
function getOrangTuaStats(parentName = "Budi Santoso") {
    const children = dummyData.students.filter(s => s.parent === parentName);
    
    let totalExpense = 0;
    let totalGrades = 0;
    let gradeCount = 0;
    
    children.forEach(child => {
        // Calculate expenses from transactions
        dummyData.transactions.filter(t => t.studentId === child.id).forEach(t => {
            totalExpense += t.total;
        });
        
        // Calculate average grades
        const grades = child.grades[dummyData.academicYear];
        if (grades) {
            Object.values(grades).forEach(subject => {
                if (subject.uts) {
                    totalGrades += subject.uts;
                    gradeCount++;
                }
                if (subject.uas) {
                    totalGrades += subject.uas;
                    gradeCount++;
                }
            });
        }
    });
    
    const averageGrade = gradeCount > 0 ? Math.round(totalGrades / gradeCount) : 0;
    
    return {
        children,
        totalExpense,
        averageGrade
    };
}

// Search and filter functions
function searchStudents(query, className = "", academicYear = "") {
    let results = dummyData.students;
    
    if (query) {
        results = results.filter(student => 
            student.name.toLowerCase().includes(query.toLowerCase()) ||
            student.nisn.includes(query)
        );
    }
    
    if (className) {
        results = results.filter(student => student.class === className);
    }
    
    return results;
}

// Transaction functions
function createTransaction(studentId, items, paymentMethod) {
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const transaction = {
        id: `TRX${String(dummyData.transactions.length + 1).padStart(3, '0')}`,
        studentId: parseInt(studentId),
        items: items,
        total: total,
        paymentMethod: paymentMethod,
        date: new Date().toISOString().split('T')[0]
    };
    
    dummyData.transactions.push(transaction);
    
    // Update student balance if card payment
    if (paymentMethod === 'card') {
        const student = dummyData.students.find(s => s.id === parseInt(studentId));
        if (student) {
            student.balance -= total;
        }
    }
    
    return transaction;
}

// Grade input function
function inputGrade(studentId, subject, type, value, academicYear) {
    const student = dummyData.students.find(s => s.id === parseInt(studentId));
    if (student) {
        if (!student.grades[academicYear]) {
            student.grades[academicYear] = {};
        }
        if (!student.grades[academicYear][subject]) {
            student.grades[academicYear][subject] = {};
        }
        student.grades[academicYear][subject][type] = parseInt(value);
        return true;
    }
    return false;
}

// Assignment functions
function addAssignment(studentId, subject, title, score, teacherId) {
    const assignment = {
        id: dummyData.assignments.length + 1,
        studentId: parseInt(studentId),
        subject: subject,
        title: title,
        score: parseInt(score),
        date: new Date().toISOString().split('T')[0],
        teacherId: parseInt(teacherId)
    };
    
    dummyData.assignments.push(assignment);
    return assignment;
}

function getAssignmentsByStudent(studentId, subject = null) {
    let assignments = dummyData.assignments.filter(a => a.studentId === parseInt(studentId));
    if (subject) {
        assignments = assignments.filter(a => a.subject === subject);
    }
    return assignments.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getAssignmentsByTeacher(teacherId, subject = null) {
    let assignments = dummyData.assignments.filter(a => a.teacherId === parseInt(teacherId));
    if (subject) {
        assignments = assignments.filter(a => a.subject === subject);
    }
    return assignments.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Student notes functions
function addStudentNote(studentId, teacherId, subject, note, type = 'academic') {
    const studentNote = {
        id: dummyData.studentNotes.length + 1,
        studentId: parseInt(studentId),
        teacherId: parseInt(teacherId),
        subject: subject,
        note: note,
        date: new Date().toISOString().split('T')[0],
        type: type,
        isRead: false
    };
    
    dummyData.studentNotes.push(studentNote);
    return studentNote;
}

function getStudentNotes(studentId) {
    return dummyData.studentNotes
        .filter(n => n.studentId === parseInt(studentId))
        .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function markNoteAsRead(noteId) {
    const note = dummyData.studentNotes.find(n => n.id === parseInt(noteId));
    if (note) {
        note.isRead = true;
        return true;
    }
    return false;
}

// Attendance functions
function addAttendance(studentId, date, status, time = '', note = '') {
    // Check if attendance already exists for this date
    const existingAttendance = dummyData.attendance.find(
        a => a.studentId === parseInt(studentId) && a.date === date
    );
    
    if (existingAttendance) {
        // Update existing
        existingAttendance.status = status;
        existingAttendance.time = time;
        existingAttendance.note = note;
        return existingAttendance;
    } else {
        // Create new
        const attendance = {
            id: dummyData.attendance.length + 1,
            studentId: parseInt(studentId),
            date: date,
            status: status,
            time: time,
            note: note
        };
        
        dummyData.attendance.push(attendance);
        return attendance;
    }
}

function getAttendanceByDate(date) {
    return dummyData.attendance.filter(a => a.date === date);
}

function getAttendanceByStudent(studentId, startDate = null, endDate = null) {
    let attendance = dummyData.attendance.filter(a => a.studentId === parseInt(studentId));
    
    if (startDate) {
        attendance = attendance.filter(a => a.date >= startDate);
    }
    if (endDate) {
        attendance = attendance.filter(a => a.date <= endDate);
    }
    
    return attendance.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Bullying report functions
function addBullyingReport(reportData) {
    const report = {
        id: dummyData.bullyingReports.length + 1,
        reporterId: reportData.reporterId,
        category: reportData.category,
        date: reportData.date,
        time: reportData.time,
        location: reportData.location,
        witnesses: reportData.witnesses,
        chronology: reportData.chronology,
        status: 'reported',
        createdAt: new Date().toISOString().split('T')[0],
        parentId: reportData.parentId || reportData.reporterId
    };
    
    dummyData.bullyingReports.push(report);
    return report;
}

function getBullyingReportsByParent(parentId) {
    return dummyData.bullyingReports
        .filter(r => r.parentId === parseInt(parentId))
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function updateBullyingReportStatus(reportId, status) {
    const report = dummyData.bullyingReports.find(r => r.id === parseInt(reportId));
    if (report) {
        report.status = status;
        return true;
    }
    return false;
}

// Announcements functions
function addAnnouncement(title, content, priority = 'medium', targetAudience = ['orang-tua']) {
    const announcement = {
        id: dummyData.announcements.length + 1,
        title: title,
        content: content,
        date: new Date().toISOString().split('T')[0],
        createdBy: 'wali_kelas',
        priority: priority,
        targetAudience: targetAudience,
        isActive: true
    };
    
    dummyData.announcements.push(announcement);
    return announcement;
}

function getAnnouncementsForRole(role) {
    return dummyData.announcements
        .filter(a => a.isActive && a.targetAudience.includes(role))
        .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getAnnouncementsForParent() {
    return getAnnouncementsForRole('orang-tua');
}

// School News Functions
function getAllSchoolNews() {
    return dummyData.schoolNews
        .filter(news => news.isActive)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getSchoolNewsByCategory(category) {
    return dummyData.schoolNews
        .filter(news => news.isActive && news.category === category)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getSchoolNewsById(id) {
    return dummyData.schoolNews.find(news => news.id === id);
}

// School Structure Functions
function getAllSchoolStructure() {
    return dummyData.schoolStructure;
}

function getSchoolStructureByPosition(position) {
    return dummyData.schoolStructure.filter(person => 
        person.position.toLowerCase().includes(position.toLowerCase())
    );
}

function getSchoolStructureById(id) {
    return dummyData.schoolStructure.find(person => person.id === id);
}

function getWaliKelasList() {
    return dummyData.schoolStructure.filter(person => 
        person.position.includes("Wali Kelas")
    );
}

// Classes Functions
function getAllClasses() {
    return dummyData.classes;
}

function getClassById(classId) {
    return dummyData.classes.find(cls => cls.id === classId);
}

function getClassesByLevel(level) {
    return dummyData.classes.filter(cls => cls.level === level);
}

function getStudentsByClass(classId) {
    return dummyData.students.filter(student => student.class === classId);
}

function getClassStatistics(classId) {
    const classData = getClassById(classId);
    const students = getStudentsByClass(classId);
    
    let totalGrades = 0;
    let gradeCount = 0;
    
    students.forEach(student => {
        if (student.grades && student.grades["2024/2025"]) {
            const grades = student.grades["2024/2025"];
            Object.values(grades).forEach(grade => {
                if (grade.uts && grade.uas) {
                    totalGrades += (grade.uts + grade.uas) / 2;
                    gradeCount++;
                }
            });
        }
    });
    
    return {
        className: classData?.name || classId,
        totalStudents: students.length,
        capacity: classData?.capacity || 36,
        averageGrade: gradeCount > 0 ? (totalGrades / gradeCount).toFixed(2) : 0,
        waliKelas: classData?.waliKelasName || '-',
        room: classData?.room || '-'
    };
}

// Student Achievements Functions
function getAllStudentAchievements() {
    return dummyData.studentAchievements.sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );
}

function getAchievementsByStudent(studentId) {
    return dummyData.studentAchievements
        .filter(ach => ach.studentId === studentId)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getAchievementsByClass(classId) {
    return dummyData.studentAchievements
        .filter(ach => ach.class === classId)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getAchievementsByCategory(category) {
    return dummyData.studentAchievements
        .filter(ach => ach.category === category)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getAchievementsByLevel(level) {
    return dummyData.studentAchievements
        .filter(ach => ach.level === level)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getRecentAchievements(limit = 10) {
    return dummyData.studentAchievements
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit);
}

// Load Achievements News for Parent Dashboard
function loadAchievementsNews() {
    const container = document.getElementById('achievementsNewsList');
    if (!container) return;
    
    const achievements = getRecentAchievements(5);
    
    if (achievements.length === 0) {
        container.innerHTML = `
            <div class="no-achievements">
                <i class="fas fa-trophy"></i>
                <p>Belum ada prestasi siswa yang tercatat</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = achievements.map(achievement => {
        const badgeClass = getBadgeClass(achievement.category, achievement.medal);
        const icon = getCategoryIcon(achievement.category);
        
        return `
            <div class="achievement-news-card">
                <div class="achievement-news-header">
                    <div class="achievement-news-icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="achievement-news-info">
                        <div class="achievement-news-title">${achievement.achievement}</div>
                        <div class="achievement-news-student">${achievement.studentName} - ${achievement.class}</div>
                    </div>
                </div>
                <div class="achievement-news-description">
                    ${achievement.description}
                </div>
                <div class="achievement-news-footer">
                    <span class="achievement-news-date">
                        <i class="far fa-calendar"></i>
                        ${formatDate(achievement.date)}
                    </span>
                    <span class="achievement-news-badge ${badgeClass}">
                        <i class="fas fa-medal"></i>
                        ${achievement.level}
                    </span>
                </div>
            </div>
        `;
    }).join('');
}

function getBadgeClass(category, medal) {
    if (medal === 'gold') return 'badge-gold';
    if (medal === 'silver') return 'badge-silver';
    if (medal === 'bronze') return 'badge-bronze';
    
    const categoryMap = {
        'Akademik': 'badge-academic',
        'Olahraga': 'badge-sport',
        'Seni': 'badge-art',
        'Bahasa': 'badge-academic',
        'Teknologi': 'badge-academic'
    };
    
    return categoryMap[category] || 'badge-academic';
}

function getCategoryIcon(category) {
    const iconMap = {
        'Akademik': 'fas fa-graduation-cap',
        'Olahraga': 'fas fa-running',
        'Seni': 'fas fa-palette',
        'Bahasa': 'fas fa-language',
        'Teknologi': 'fas fa-laptop-code'
    };
    
    return iconMap[category] || 'fas fa-trophy';
}

// Initialize page
function initPage() {
    // Add event listeners for common elements
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
    
    // Add animation to page load
    document.body.classList.add('page-enter');
}

// Export functions for use in other files
window.MonitoringApp = {
    login,
    logout,
    checkAuth,
    getCurrentUser,
    getWaliKelasStats,
    getGuruStats,
    getKantinStats,
    getOrangTuaStats,
    searchStudents,
    createTransaction,
    inputGrade,
    formatCurrency,
    formatDate,
    getInitials,
    calculateAverage,
    dummyData,
    // Assignment & Notes functions
    addAssignment,
    getAssignmentsByStudent,
    getAssignmentsByTeacher,
    addStudentNote,
    getStudentNotes,
    markNoteAsRead,
    // Attendance functions
    addAttendance,
    getAttendanceByDate,
    getAttendanceByStudent,
    // Bullying & Announcements functions
    addBullyingReport,
    getBullyingReportsByParent,
    updateBullyingReportStatus,
    addAnnouncement,
    getAnnouncementsForRole,
    getAnnouncementsForParent,
    // School News functions
    getAllSchoolNews,
    getSchoolNewsByCategory,
    getSchoolNewsById,
    // School Structure functions
    getAllSchoolStructure,
    getSchoolStructureByPosition,
    getSchoolStructureById,
    getWaliKelasList,
    // Classes functions
    getAllClasses,
    getClassById,
    getClassesByLevel,
    getStudentsByClass,
    getClassStatistics,
    // Student Achievements functions
    getAllStudentAchievements,
    getAchievementsByStudent,
    getAchievementsByClass,
    getAchievementsByCategory,
    getAchievementsByLevel,
    getRecentAchievements,
    loadAchievementsNews
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);