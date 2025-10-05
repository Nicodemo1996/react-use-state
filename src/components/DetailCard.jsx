// src/components/DetailCard.jsx
import React from 'react';

export default function DetailCard({ language }) {
  if (!language) {
    return (
      <div className="card card--empty">
        <h2>Nessun linguaggio selezionato</h2>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>{language.name}</h2>
      <p>{language.description}</p>
    </div>
  );
}
