
        // Mobile menu toggle
        const mobileToggle = document.querySelector('.mobile-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.innerHTML = navMenu.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Language switcher functionality
        const langBtn = document.querySelector('.lang-btn');
        const langOptions = document.querySelector('.lang-options');
        const langOptionItems = document.querySelectorAll('.lang-option');
        
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langOptions.classList.toggle('active');
        });
        
        langOptionItems.forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                
                // Update active language
                langOptionItems.forEach(item => {
                    item.querySelector('i').className = 'fas fa-language';
                });
                option.querySelector('i').className = 'fas fa-check';
                
                // Update button text
                const langText = option.textContent.trim();
                langBtn.innerHTML = `<i class="fas fa-globe"></i> ${langText}`;
                
                // Change website language
                document.body.setAttribute('data-lang', lang);
                
                // Update direction for RTL languages
                if (lang === 'ur' || lang === 'ar') {
                    document.body.style.direction = 'rtl';
                } else {
                    document.body.style.direction = 'ltr';
                }
                
                // Close dropdown
                langOptions.classList.remove('active');
            });
        });
        
        // Close language dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!langBtn.contains(e.target) && !langOptions.contains(e.target)) {
                langOptions.classList.remove('active');
            }
        });
        
        // Dark mode toggle
        const darkModeToggle = document.querySelector('.dark-mode-toggle');
        
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                document.body.style.backgroundColor = '#1a1a2e';
                document.body.style.color = '#ffffff';
                document.body.style.backgroundImage = 'none';
            } else {
                darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                document.body.style.backgroundColor = '';
                document.body.style.color = '';
                document.body.style.backgroundImage = '';
            }
        });
        
        // Simulate active prayer time
        const prayerCards = document.querySelectorAll('.prayer-card');
        
        setInterval(() => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const currentTime = hours + minutes / 100;
            
            prayerCards.forEach(card => {
                card.classList.remove('active');
            });
            
            if (currentTime >= 5.12 && currentTime < 6.35) {
                prayerCards[0].classList.add('active');
            } else if (currentTime >= 6.35 && currentTime < 12.20) {
                prayerCards[1].classList.add('active');
            } else if (currentTime >= 12.20 && currentTime < 15.45) {
                prayerCards[2].classList.add('active');
            } else if (currentTime >= 15.45 && currentTime < 18.05) {
                prayerCards[3].classList.add('active');
            } else if (currentTime >= 18.05 && currentTime < 19.35) {
                prayerCards[4].classList.add('active');
            } else {
                prayerCards[5].classList.add('active');
            }
        }, 60000);
        
        // Add subtle animations to elements when they come into view
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe feature cards for animation
        document.querySelectorAll('.feature-card').forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });
    