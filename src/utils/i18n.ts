// src/utils/i18n.ts

// Language detection and auto-switching
const languages = ['zh-CN', 'en-US', 'zh-TW'];

function getPreferredLanguage() {
    const localStorageLang = localStorage.getItem('language');
    if (localStorageLang && languages.includes(localStorageLang)) {
        return localStorageLang;
    }
    const browserLang = navigator.language || navigator.userLanguage;
    return languages.includes(browserLang) ? browserLang : 'en-US';
}

function setLanguage(language) {
    if (languages.includes(language)) {
        localStorage.setItem('language', language);
    }
}

// Translation helper functions
const translations = {
    'hello': {
        'zh-CN': '你好',
        'en-US': 'Hello',
        'zh-TW': '你好',
    },
    // Add more translations here
};

function translate(key) {
    const lang = getPreferredLanguage();
    return translations[key] ? translations[key][lang] || translations[key]['en-US'] : key;
}

export { getPreferredLanguage, setLanguage, translate };