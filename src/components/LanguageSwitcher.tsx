import React, { useState } from 'react';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const [activeLanguage, setActiveLanguage] = useState('zh-CN'); // Default active language

  const handleLanguageChange = (lang) => {
    setActiveLanguage(lang);
  };

  return (
    <div className="language-switcher">
      <button
        className={`language-button ${activeLanguage === 'zh-CN' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('zh-CN')}
      >
        繁体中文
      </button>
      <button
        className={`language-button ${activeLanguage === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
      >
        English
      </button>
      <button
        className={`language-button ${activeLanguage === 'zh-TW' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('zh-TW')}
      >
        简体中文
      </button>
    </div>
  );
};

export default LanguageSwitcher;
