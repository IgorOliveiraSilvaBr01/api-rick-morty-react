import React from 'react';
import './Header.css';

/**
 * Componente de Cabeçalho da Aplicação
 */
export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">
          Rick <span className="ampersand">&</span> Morty
        </h1>
        <p className="header-subtitle">
          Catálogo Interdimensional de Personagens
        </p>
      </div>
    </header>
  );
}
