import React from 'react';
import './Loading.css';

/**
 * Componente de Feedback de Carregamento
 * Exibe um portal animado temático e mensagem clara ao usuário.
 */
export default function Loading({ message = 'Carregando dados interdimensionais...' }) {
  return (
    <div className="loading-container" role="status" aria-live="polite">
      <div className="portal-spinner">
        <div className="portal-ring inner"></div>
        <div className="portal-ring middle"></div>
        <div className="portal-ring outer"></div>
        <div className="portal-core"></div>
      </div>
      <p className="loading-message">{message}</p>
      <span className="loading-subtext">Acessando API do Rick and Morty...</span>
    </div>
  );
}
