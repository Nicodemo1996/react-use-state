// src/App.jsx
import React, { useState } from 'react';
import languages from './languages';
import LanguageButtons from './components/LanguageButtons';
import DetailCard from './components/DetailCard';
import './App.css';

export default function App() {
  // Inizialmente selezioniamo il primo linguaggio (indice 0)
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="app">
      <header>
        <h1>Learn Web development</h1>
      </header>

      <main>
        <LanguageButtons
          languages={languages}
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
        />

        <div className="detail-wrapper">
          <DetailCard language={languages[selectedIndex]} />
        </div>
      </main>
    </div>
  );
}
