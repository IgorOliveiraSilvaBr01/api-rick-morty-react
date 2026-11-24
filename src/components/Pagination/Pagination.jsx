import React from 'react';
import './Pagination.css';

/**
 * Componente de Navegação por Páginas
 *
 * @param {Object} props
 * @param {number} props.currentPage - Página atual
 * @param {number} props.totalPages - Total de páginas disponíveis
 * @param {Function} props.onPageChange - Callback chamado ao trocar de página
 */
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <nav className="pagination-nav" aria-label="Navegação entre páginas de personagens">
      <button
        type="button"
        className="pagination-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Página anterior"
      >
        Anterior
      </button>

      <div className="page-indicator">
        <span className="current-page">{currentPage}</span>
        <span className="divider">de</span>
        <span className="total-pages">{totalPages}</span>
      </div>

      <button
        type="button"
        className="pagination-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Próxima página"
      >
        Próxima
      </button>
    </nav>
  );
}
