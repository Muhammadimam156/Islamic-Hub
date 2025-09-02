let currentLang = 'urdu';

function toggleMobileMenu() {
    const navCenter = document.getElementById('nav-center');
    navCenter.classList.toggle('active');
}

function changeLanguage(lang) {
    if (lang === currentLang) return;
    
    currentLang = lang;
    const t = translations[lang] || translations['english'];
    
    // Update text content
    document.getElementById('logo').textContent = t.logo;
    document.getElementById('logo-subtitle').textContent = t.logoSubtitle;
    document.getElementById('home-link').querySelector('span').textContent = t.home;
    document.getElementById('quran-link').querySelector('span').textContent = t.quran;
    document.getElementById('hadith-link').querySelector('span').textContent = t.hadith;
    document.getElementById('pillars-link').querySelector('span').textContent = t.pillars;
    document.getElementById('learn-link').querySelector('span').textContent = t.learn;
    document.getElementById('tools-link').querySelector('span').textContent = t.tools;
    document.getElementById('community-link').querySelector('span').textContent = t.community;
    document.getElementById('prayer-time').querySelector('span').textContent = t.prayerTime;
    document.getElementById('lang-btn').querySelector('span').textContent = t.langBtn;
    document.getElementById('hero-badge').textContent = t.heroBadge;
    document.getElementById('hero-title').textContent = t.heroTitle;
    document.getElementById('hero-subtitle').textContent = t.heroSubtitle;
    document.getElementById('start-button').querySelector('span').textContent = t.startButton;
    document.getElementById('explore-button').querySelector('span').textContent = t.exploreButton;
    document.getElementById('feature1-title').textContent = t.feature1Title;
    document.getElementById('feature1-desc').textContent = t.feature1Desc;
    document.getElementById('feature2-title').textContent = t.feature2Title;
    document.getElementById('feature2-desc').textContent = t.feature2Desc;
    document.getElementById('feature3-title').textContent = t.feature3Title;
    document.getElementById('feature3-desc').textContent = t.feature3Desc;
    document.getElementById('feature4-title').textContent = t.feature4Title;
    document.getElementById('feature4-desc').textContent = t.feature4Desc;
    document.getElementById('quran-read').textContent = t.quranRead;
    document.getElementById('quran-translation').textContent = t.quranTranslation;
    document.getElementById('quran-tafsir').textContent = t.quranTafsir;
    document.getElementById('quran-audio').textContent = t.quranAudio;
    document.getElementById('quran-search').textContent = t.quranSearch;
    
    // Update HTML lang and dir attributes
    if (lang === 'urdu' || lang === 'arabic' || lang === 'persian') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.body.className = lang === 'arabic' ? 'arabic' : 'urdu';
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.body.className = 'english';
    }
    
    document.documentElement.setAttribute('lang', lang === 'urdu' ? 'ur' : lang === 'arabic' ? 'ar' : 'en');
    document.title = t.logo;
}

function updatePrayerTime() {
    const prayerTimeEl = document.getElementById('prayer-time').querySelector('span');
    const now = new Date();
    const hours = now.getHours();
    
    let nextPrayer = '';
    if (currentLang === 'urdu') {
        if (hours < 5) nextPrayer = 'اگلا: فجر 5:15 AM';
        else if (hours < 13) nextPrayer = 'اگلا: ظہر 1:20 PM';
        else if (hours < 16) nextPrayer = 'اگلا: عصر 4:45 PM';
        else if (hours < 18) nextPrayer = 'اگلا: مغرب 6:30 PM';
        else if (hours < 20) nextPrayer = 'اگلا: عشاء 8:15 PM';
        else nextPrayer = 'اگلا: فجر 5:15 AM';
    } else if (currentLang === 'arabic') {
        if (hours < 5) nextPrayer = 'التالي: الفجر 5:15 AM';
        else if (hours < 13) nextPrayer = 'التالي: الظهر 1:20 PM';
        else if (hours < 16) nextPrayer = 'التالي: العصر 4:45 PM';
        else if (hours < 18) nextPrayer = 'التالي: المغرب 6:30 PM';
        else if (hours < 20) nextPrayer = 'التالي: العشاء 8:15 PM';
        else nextPrayer = 'التالي: الفجر 5:15 AM';
    } else {
        if (hours < 5) nextPrayer = 'Next: Fajr 5:15 AM';
        else if (hours < 13) nextPrayer = 'Next: Dhuhr 1:20 PM';
        else if (hours < 16) nextPrayer = 'Next: Asr 4:45 PM';
        else if (hours < 18) nextPrayer = 'Next: Maghrib 6:30 PM';
        else if (hours < 20) nextPrayer = 'Next: Isha 8:15 PM';
        else nextPrayer = 'Next: Fajr 5:15 AM';
    }
    
    prayerTimeEl.textContent = nextPrayer;
}

function setActiveMenu(element) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    element.classList.add('active');
}

// Add click handlers to menu items
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (!this.parentNode.querySelector('.dropdown')) {
                e.preventDefault();
                setActiveMenu(this);
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const navCenter = document.getElementById('nav-center');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        if (navCenter && mobileMenu && !navCenter.contains(event.target) && !mobileMenu.contains(event.target)) {
            navCenter.classList.remove('active');
        }
    });

    // Add smooth scrolling for buttons
    document.getElementById('start-button').addEventListener('click', function(e) {
        e.preventDefault();
        // Add your start learning logic here
        console.log('Start learning button clicked');
    });

    document.getElementById('explore-button').addEventListener('click', function(e) {
        e.preventDefault();
        // Add your explore logic here
        console.log('Explore button clicked');
    });

    // Add tool functionality
    document.querySelectorAll('.tool-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            // Add tool functionality here based on the icon
            const iconClass = this.querySelector('i').className;
            if (iconClass.includes('compass')) {
                // Qibla direction functionality
                console.log('Qibla direction tool clicked');
            } else if (iconClass.includes('clock')) {
                // Prayer times functionality
                console.log('Prayer times tool clicked');
            } else if (iconClass.includes('calculator')) {
                // Zakat calculator functionality
                console.log('Zakat calculator tool clicked');
            }
        });
    });

    // Initialize
    updatePrayerTime();
    setInterval(updatePrayerTime, 60000); // Update every minute
});