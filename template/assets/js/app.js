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
                    "Matematika": { uts: 85, uas: 88 },
                    "Bahasa Indonesia": { uts: 90, uas: 85 },
                    "IPA": { uts: 82, uas: 86 },
                    "IPS": { uts: 88, uas: 90 }
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
    // New functions
    addAssignment,
    getAssignmentsByStudent,
    getAssignmentsByTeacher,
    addStudentNote,
    getStudentNotes,
    markNoteAsRead,
    addAttendance,
    getAttendanceByDate,
    getAttendanceByStudent,
    addBullyingReport,
    getBullyingReportsByParent,
    updateBullyingReportStatus,
    addAnnouncement,
    getAnnouncementsForRole,
    getAnnouncementsForParent
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);