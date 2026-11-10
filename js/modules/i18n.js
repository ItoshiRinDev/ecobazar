import { translations } from '../translations.js';

export const I18n = {
    currentLang: 'en',

    init() {
        const savedLang = localStorage.getItem('lang');
        if (savedLang) {
            this.currentLang = savedLang;
        }

        this.applyTranslation();

        document.addEventListener('click', (e) => {
            const langLink = e.target.closest('[data-lang]');
            if (langLink) {
                e.preventDefault();
                const newLang = langLink.dataset.lang;
                this.setLanguage(newLang);
            }
        });
    },

    setLanguage(lang) {
        if (translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('lang', lang);
            this.applyTranslation();
            document.dispatchEvent(new CustomEvent('langchange'));
        }
    },

    applyTranslation() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (translations[this.currentLang][key]) {
                el.innerHTML = translations[this.currentLang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            if (translations[this.currentLang][key]) {
                el.setAttribute('placeholder', translations[this.currentLang][key]);
            }
        });

        document.querySelectorAll('[data-lang]').forEach(link => {
            if (link.dataset.lang === this.currentLang) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    },

    get(key) {
        return translations[this.currentLang][key] || key;
    }
};