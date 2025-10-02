// Configuration file for the monitoring system
// Edit this file to customize the application

const AppConfig = {
    // Application settings
    app: {
        name: "Sistem Monitoring Siswa",
        version: "1.0.0",
        description: "Sistem monitoring comprehensive untuk sekolah",
        author: "Developer Team",
        defaultTheme: "light", // light | dark
        language: "id" // id | en
    },

    // Academic settings
    academic: {
        currentYear: "2024/2025",
        availableYears: ["2024/2025", "2023/2024", "2022/2023"],
        subjects: [
            "Matematika",
            "Bahasa Indonesia", 
            "IPA",
            "IPS",
            "Bahasa Inggris",
            "Pendidikan Agama",
            "PKn",
            "Seni Budaya",
            "Olahraga"
        ],
        gradeScale: {
            max: 100,
            min: 0,
            passingGrade: 70
        },
        classes: ["X-A", "X-B", "XI-A", "XI-B", "XII-A", "XII-B"]
    },

    // User roles and permissions
    roles: {
        "wali-kelas": {
            name: "Wali Kelas",
            icon: "fa-chalkboard-teacher",
            color: "#4facfe",
            permissions: ["view_students", "view_grades", "view_parent_info"]
        },
        "guru": {
            name: "Guru", 
            icon: "fa-user-graduate",
            color: "#43e97b",
            permissions: ["view_students", "input_grades", "view_own_subject"]
        },
        "kantin": {
            name: "Kantin",
            icon: "fa-utensils", 
            color: "#fa709a",
            permissions: ["manage_transactions", "view_menu", "process_payments"]
        },
        "orang-tua": {
            name: "Orang Tua",
            icon: "fa-users",
            color: "#a8edea", 
            permissions: ["view_own_children", "view_grades", "view_expenses"]
        }
    },

    // Canteen/Cafeteria settings
    canteen: {
        currency: "IDR",
        paymentMethods: ["cash", "card"],
        categories: [
            "Makanan Berat",
            "Makanan Ringan", 
            "Minuman",
            "Snack",
            "Dessert"
        ],
        // Tax percentage (0 = no tax)
        taxPercentage: 0,
        // Service charge (0 = no service charge)
        serviceCharge: 0
    },

    // UI/UX Settings
    ui: {
        // Animation duration in milliseconds
        animationDuration: 300,
        // Auto logout time in minutes (0 = never)
        autoLogoutTime: 120,
        // Items per page for pagination
        itemsPerPage: 10,
        // Show loading states
        showLoadingStates: true,
        // Enable sound notifications
        soundNotifications: false,
        // Default avatar colors
        avatarColors: [
            "#667eea", "#764ba2", "#4facfe", "#00f2fe",
            "#43e97b", "#38f9d7", "#fa709a", "#fee140"
        ]
    },

    // Notification settings
    notifications: {
        // Duration in milliseconds
        defaultDuration: 5000,
        // Position: top-right, top-left, bottom-right, bottom-left
        position: "top-right",
        // Types: success, error, warning, info
        types: {
            success: {
                icon: "fa-check-circle",
                color: "#43e97b"
            },
            error: {
                icon: "fa-exclamation-circle", 
                color: "#ff4757"
            },
            warning: {
                icon: "fa-exclamation-triangle",
                color: "#feca57"
            },
            info: {
                icon: "fa-info-circle",
                color: "#4facfe"
            }
        }
    },

    // Data validation rules
    validation: {
        nisn: {
            minLength: 10,
            maxLength: 10,
            required: true
        },
        phone: {
            pattern: /^(\+62|62|0)[0-9]{9,13}$/,
            required: false
        },
        email: {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            required: false
        },
        grade: {
            min: 0,
            max: 100,
            required: true
        },
        currency: {
            min: 0,
            max: 1000000,
            required: true
        }
    },

    // Export settings
    export: {
        formats: ["csv", "json", "pdf"],
        defaultFormat: "csv",
        includeHeaders: true,
        dateFormat: "YYYY-MM-DD"
    },

    // Security settings
    security: {
        // Session timeout in minutes
        sessionTimeout: 120,
        // Maximum login attempts
        maxLoginAttempts: 5,
        // Lockout duration in minutes
        lockoutDuration: 15,
        // Remember login duration in days
        rememberLoginDays: 30
    },

    // Performance settings
    performance: {
        // Cache duration in milliseconds
        cacheDuration: 300000, // 5 minutes
        // Lazy loading threshold in pixels
        lazyLoadThreshold: 100,
        // Debounce delay for search in milliseconds
        searchDebounce: 300
    },

    // Feature flags (enable/disable features)
    features: {
        darkMode: true,
        notifications: true,
        exportData: true,
        printReports: true,
        offlineMode: false,
        pushNotifications: false,
        multiLanguage: false,
        advancedSearch: true,
        bulkOperations: false
    },

    // Demo data configuration
    demo: {
        enabled: true,
        autoFillCredentials: true,
        sampleStudents: 20,
        sampleTransactions: 50,
        resetDataOnReload: false
    },

    // API endpoints (if connecting to backend)
    api: {
        baseUrl: "/api",
        timeout: 10000, // milliseconds
        retryAttempts: 3,
        endpoints: {
            login: "/auth/login",
            logout: "/auth/logout", 
            students: "/students",
            teachers: "/teachers",
            grades: "/grades",
            transactions: "/transactions",
            canteen: "/canteen"
        }
    },

    // Mobile app settings
    mobile: {
        // Enable PWA features
        pwa: false,
        // Swipe gestures
        swipeGestures: true,
        // Haptic feedback
        hapticFeedback: false,
        // Push notifications
        pushNotifications: false,
        // Offline sync
        offlineSync: false
    },

    // Debugging and development
    debug: {
        enabled: false,
        logLevel: "info", // error, warn, info, debug
        showPerformanceMetrics: false,
        mockApiDelay: 1000 // milliseconds
    }
};

// Theme configurations
const ThemeConfig = {
    light: {
        primary: "#667eea",
        secondary: "#764ba2",
        success: "#43e97b",
        warning: "#feca57",
        error: "#ff4757",
        info: "#4facfe",
        background: "#ffffff",
        surface: "#f8f9fa",
        text: "#333333",
        textSecondary: "#666666"
    },
    dark: {
        primary: "#667eea",
        secondary: "#764ba2", 
        success: "#43e97b",
        warning: "#feca57",
        error: "#ff4757",
        info: "#4facfe",
        background: "#1a1a1a",
        surface: "#2d2d2d",
        text: "#ffffff",
        textSecondary: "#b0b0b0"
    }
};

// Language configurations
const LanguageConfig = {
    id: {
        name: "Bahasa Indonesia",
        code: "id",
        direction: "ltr",
        translations: {
            // Common
            login: "Masuk",
            logout: "Keluar", 
            dashboard: "Dashboard",
            students: "Siswa",
            teachers: "Guru",
            grades: "Nilai",
            transactions: "Transaksi",
            
            // Messages
            loginSuccess: "Login berhasil",
            loginFailed: "Login gagal",
            dataLoaded: "Data berhasil dimuat",
            dataSaved: "Data berhasil disimpan",
            
            // Validation
            required: "Field ini wajib diisi",
            invalidEmail: "Format email tidak valid",
            invalidPhone: "Format nomor telepon tidak valid"
        }
    },
    en: {
        name: "English",
        code: "en",
        direction: "ltr", 
        translations: {
            // Common
            login: "Login",
            logout: "Logout",
            dashboard: "Dashboard", 
            students: "Students",
            teachers: "Teachers",
            grades: "Grades",
            transactions: "Transactions",
            
            // Messages
            loginSuccess: "Login successful",
            loginFailed: "Login failed",
            dataLoaded: "Data loaded successfully",
            dataSaved: "Data saved successfully",
            
            // Validation
            required: "This field is required",
            invalidEmail: "Invalid email format", 
            invalidPhone: "Invalid phone number format"
        }
    }
};

// Export configurations for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        AppConfig,
        ThemeConfig,
        LanguageConfig
    };
} else {
    // Browser environment
    window.AppConfig = AppConfig;
    window.ThemeConfig = ThemeConfig;
    window.LanguageConfig = LanguageConfig;
}

// Configuration validation
function validateConfig() {
    const errors = [];
    
    // Validate required settings
    if (!AppConfig.app.name) {
        errors.push("App name is required");
    }
    
    if (!AppConfig.academic.currentYear) {
        errors.push("Current academic year is required");
    }
    
    if (AppConfig.ui.autoLogoutTime < 0) {
        errors.push("Auto logout time must be >= 0");
    }
    
    return errors;
}

// Initialize configuration
function initConfig() {
    const errors = validateConfig();
    
    if (errors.length > 0) {
        console.error("Configuration errors:", errors);
        return false;
    }
    
    // Set document title
    document.title = AppConfig.app.name;
    
    // Apply theme
    if (AppConfig.ui.showLoadingStates) {
        console.log("Configuration loaded successfully");
    }
    
    return true;
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initConfig);
} else {
    initConfig();
}