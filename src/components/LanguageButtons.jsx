// src/components/LanguageButtons.jsx
import React from 'react';

export default function LanguageButtons({ languages, selectedIndex, onSelect }) {
  return (
    <div className="buttons-row">
      {languages.map((lang, i) => (
        <button
          key={lang.id}
          className={`btn ${i === selectedIndex ? 'btn--active' : ''}`}
          onClick={() => onSelect(i)}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
}
