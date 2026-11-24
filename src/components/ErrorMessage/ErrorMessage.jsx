import React from 'react';
import './ErrorMessage.css';

/**
 * Componente de Tratamento de Erro
 * Exibe uma mensagem amigável ao usuário caso a requisição falhe, sem travar a aplicação.
 *
 * @param {Object} props
 * @param {string} props.title - Título do erro
 * @param {string} props.message - Detalhes amigáveis da mensagem
 * @param {Function} [props.onRetry] - Função para tentar novamente a requisição
 * @param {boolean} [props.isNotFound] - Indica se foi apenas busca sem resultados
 */
export default function ErrorMessage({
  title = 'Oops! Algo deu errado no multiverso',
  message = 'Não foi possível carregar os personagens. Verifique sua conexão com a internet ou tente novamente.',
  onRetry,
  isNotFound = false,
}) {
  return (
    <div className={`error-card ${isNotFound ? 'is-not-found' : 'is-failure'}`} role="alert">
      <div className="error-icon-wrapper">
        {isNotFound ? (
          <span className="emoji-icon" aria-hidden="true">🛸</span>
        ) : (
          <span className="emoji-icon" aria-hidden="true">💥</span>
        )}
      </div>

      <div className="error-body">
        <h3 className="error-title">{title}</h3>
        <p className="error-message">{message}</p>
      </div>

      {onRetry && (
        <button
          type="button"
          className="retry-button"
          onClick={onRetry}
        >
          {isNotFound ? 'Limpar e tentar novamente' : 'Tentar novamente'}
        </button>
      )}
    </div>
  );
}
