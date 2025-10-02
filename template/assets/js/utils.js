// Enhanced utility functions for the monitoring system

// Notification system
class NotificationSystem {
    constructor() {
        this.container = this.createContainer();
        document.body.appendChild(this.container);
    }

    createContainer() {
        const container = document.createElement('div');
        container.id = 'notification-container';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        return container;
    }

    show(message, type = 'info', duration = 5000) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-${this.getIcon(type)}"></i>
                <span>${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: #999; cursor: pointer;">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        this.container.appendChild(notification);

        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);

        // Auto remove
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, duration);

        return notification;
    }

    getIcon(type) {
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            warning: 'exclamation-triangle',
            info: 'info-circle'
        };
        return icons[type] || 'info-circle';
    }
}

// Local storage manager
class StorageManager {
    constructor(prefix = 'monitoring_') {
        this.prefix = prefix;
    }

    set(key, value) {
        try {
            localStorage.setItem(this.prefix + key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Storage error:', error);
            return false;
        }
    }

    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(this.prefix + key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Storage error:', error);
            return defaultValue;
        }
    }

    remove(key) {
        localStorage.removeItem(this.prefix + key);
    }

    clear() {
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.startsWith(this.prefix)) {
                localStorage.removeItem(key);
            }
        });
    }
}

// Data validator
class Validator {
    static required(value, fieldName) {
        if (!value || value.toString().trim() === '') {
            throw new Error(`${fieldName} wajib diisi`);
        }
        return true;
    }

    static email(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            throw new Error('Format email tidak valid');
        }
        return true;
    }

    static phone(value) {
        const phoneRegex = /^(\+62|62|0)[0-9]{9,13}$/;
        if (!phoneRegex.test(value)) {
            throw new Error('Format nomor telepon tidak valid');
        }
        return true;
    }

    static grade(value) {
        const grade = parseInt(value);
        if (isNaN(grade) || grade < 0 || grade > 100) {
            throw new Error('Nilai harus antara 0-100');
        }
        return true;
    }

    static currency(value) {
        const amount = parseInt(value);
        if (isNaN(amount) || amount < 0) {
            throw new Error('Jumlah uang tidak valid');
        }
        return true;
    }
}

// Performance monitor
class PerformanceMonitor {
    constructor() {
        this.metrics = {};
    }

    startTiming(label) {
        this.metrics[label] = performance.now();
    }

    endTiming(label) {
        if (this.metrics[label]) {
            const duration = performance.now() - this.metrics[label];
            console.log(`${label}: ${duration.toFixed(2)}ms`);
            delete this.metrics[label];
            return duration;
        }
        return null;
    }

    measureFunction(fn, label) {
        return (...args) => {
            this.startTiming(label);
            const result = fn.apply(this, args);
            this.endTiming(label);
            return result;
        };
    }
}

// Theme manager
class ThemeManager {
    constructor() {
        this.storage = new StorageManager();
        this.currentTheme = this.storage.get('theme', 'light');
        this.applyTheme();
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme();
        this.storage.set('theme', this.currentTheme);
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        document.body.classList.toggle('dark-theme', this.currentTheme === 'dark');
    }

    getCurrentTheme() {
        return this.currentTheme;
    }
}

// Enhanced data manager
class DataManager {
    constructor() {
        this.storage = new StorageManager();
        this.cache = new Map();
        this.observers = new Map();
    }

    // Observable pattern for data changes
    subscribe(key, callback) {
        if (!this.observers.has(key)) {
            this.observers.set(key, []);
        }
        this.observers.get(key).push(callback);
    }

    unsubscribe(key, callback) {
        if (this.observers.has(key)) {
            const callbacks = this.observers.get(key);
            const index = callbacks.indexOf(callback);
            if (index > -1) {
                callbacks.splice(index, 1);
            }
        }
    }

    notify(key, data) {
        if (this.observers.has(key)) {
            this.observers.get(key).forEach(callback => {
                try {
                    callback(data);
                } catch (error) {
                    console.error('Observer error:', error);
                }
            });
        }
    }

    // Cache with TTL
    setCache(key, data, ttl = 300000) { // 5 minutes default
        this.cache.set(key, {
            data,
            expires: Date.now() + ttl
        });
    }

    getCache(key) {
        const item = this.cache.get(key);
        if (item && item.expires > Date.now()) {
            return item.data;
        }
        this.cache.delete(key);
        return null;
    }

    clearExpiredCache() {
        const now = Date.now();
        for (const [key, item] of this.cache.entries()) {
            if (item.expires <= now) {
                this.cache.delete(key);
            }
        }
    }
}

// Export utility functions
class ExportManager {
    static exportToCSV(data, filename = 'data.csv') {
        if (!Array.isArray(data) || data.length === 0) {
            throw new Error('Data harus berupa array dan tidak boleh kosong');
        }

        const headers = Object.keys(data[0]);
        const csvContent = [
            headers.join(','),
            ...data.map(row => headers.map(header => `"${row[header] || ''}"`).join(','))
        ].join('\n');

        this.downloadFile(csvContent, filename, 'text/csv');
    }

    static exportToJSON(data, filename = 'data.json') {
        const jsonContent = JSON.stringify(data, null, 2);
        this.downloadFile(jsonContent, filename, 'application/json');
    }

    static downloadFile(content, filename, mimeType) {
        const blob = new Blob([content], { type: mimeType });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    }

    static printPage(elementId = null) {
        if (elementId) {
            const element = document.getElementById(elementId);
            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Print</title>
                    <link rel="stylesheet" href="assets/css/style.css">
                    <style>
                        body { padding: 20px; }
                        .no-print { display: none !important; }
                    </style>
                </head>
                <body>
                    ${element.outerHTML}
                </body>
                </html>
            `);
            printWindow.document.close();
            printWindow.print();
        } else {
            window.print();
        }
    }
}

// Device detection
class DeviceDetector {
    static isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    static isTablet() {
        return /iPad|Android(?!.*Mobile)/i.test(navigator.userAgent);
    }

    static isDesktop() {
        return !this.isMobile() && !this.isTablet();
    }

    static getScreenSize() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

    static isPortrait() {
        return window.innerHeight > window.innerWidth;
    }

    static isLandscape() {
        return window.innerWidth > window.innerHeight;
    }
}

// Network status
class NetworkManager {
    constructor() {
        this.isOnline = navigator.onLine;
        this.setupEventListeners();
    }

    setupEventListeners() {
        window.addEventListener('online', () => {
            this.isOnline = true;
            this.onNetworkChange(true);
        });

        window.addEventListener('offline', () => {
            this.isOnline = false;
            this.onNetworkChange(false);
        });
    }

    onNetworkChange(isOnline) {
        const message = isOnline ? 'Koneksi internet tersedia' : 'Tidak ada koneksi internet';
        const type = isOnline ? 'success' : 'warning';
        
        if (window.notifications) {
            window.notifications.show(message, type);
        }
    }

    getNetworkStatus() {
        return this.isOnline;
    }
}

// Enhanced math utilities
class MathUtils {
    static average(numbers) {
        if (!Array.isArray(numbers) || numbers.length === 0) return 0;
        const sum = numbers.reduce((acc, num) => acc + (parseFloat(num) || 0), 0);
        return Math.round((sum / numbers.length) * 100) / 100;
    }

    static median(numbers) {
        if (!Array.isArray(numbers) || numbers.length === 0) return 0;
        const sorted = [...numbers].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 === 0 
            ? (sorted[mid - 1] + sorted[mid]) / 2 
            : sorted[mid];
    }

    static getGradeLevel(score) {
        if (score >= 90) return { level: 'A', color: '#43e97b', label: 'Sangat Baik' };
        if (score >= 80) return { level: 'B', color: '#4facfe', label: 'Baik' };
        if (score >= 70) return { level: 'C', color: '#feca57', label: 'Cukup' };
        if (score >= 60) return { level: 'D', color: '#ff9ff3', label: 'Kurang' };
        return { level: 'E', color: '#ff6b6b', label: 'Sangat Kurang' };
    }

    static formatPercentage(value, total) {
        if (total === 0) return '0%';
        return Math.round((value / total) * 100) + '%';
    }
}

// Date utilities
class DateUtils {
    static formatRelative(date) {
        const now = new Date();
        const diff = now - new Date(date);
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) return `${days} hari lalu`;
        if (hours > 0) return `${hours} jam lalu`;
        if (minutes > 0) return `${minutes} menit lalu`;
        return 'Baru saja';
    }

    static formatIndonesian(date) {
        const months = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];

        const d = new Date(date);
        return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    }

    static getCurrentAcademicYear() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        
        // Academic year starts in July (month 6)
        if (month >= 6) {
            return `${year}/${year + 1}`;
        } else {
            return `${year - 1}/${year}`;
        }
    }
}

// Initialize global utilities
window.addEventListener('DOMContentLoaded', () => {
    // Initialize global instances
    window.notifications = new NotificationSystem();
    window.storage = new StorageManager();
    window.theme = new ThemeManager();
    window.dataManager = new DataManager();
    window.performance = new PerformanceMonitor();
    window.network = new NetworkManager();

    // Add utility classes to window
    window.Utils = {
        Validator,
        ExportManager,
        DeviceDetector,
        MathUtils,
        DateUtils
    };

    // Clean up expired cache every 5 minutes
    setInterval(() => {
        window.dataManager.clearExpiredCache();
    }, 300000);

    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K for quick search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('input[placeholder*="Cari"]');
            if (searchInput) {
                searchInput.focus();
            }
        }

        // Ctrl/Cmd + D for toggle theme
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            window.theme.toggleTheme();
        }

        // Escape to close modals
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('.modal, .mobile-modal');
            modals.forEach(modal => {
                if (modal.style.display === 'flex' || modal.style.display === 'block') {
                    modal.style.display = 'none';
                }
            });
        }
    });

    console.log('Enhanced utilities loaded successfully');
});