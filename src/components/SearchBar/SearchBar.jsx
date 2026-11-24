import React from 'react';
import './SearchBar.css';

/**
 * Componente de Busca e Filtros
 * Permite filtrar personagens por nome em tempo real e por status.
 *
 * @param {Object} props
 * @param {string} props.searchTerm - Termo atual de busca por nome
 * @param {Function} props.onSearchChange - Callback chamado ao alterar o nome
 * @param {string} props.statusFilter - Status selecionado ('' | 'alive' | 'dead' | 'unknown')
 * @param {Function} props.onStatusChange - Callback chamado ao alterar o status
 * @param {Function} props.onClear - Callback para resetar filtros
 * @param {number} props.totalResults - Total de itens encontrados
 */
export default function SearchBar({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusChange,
  onClear,
  totalResults,
}) {
  const hasActiveFilters = Boolean(searchTerm || statusFilter);

  return (
    <section className="search-section" aria-label="Filtros de personagens">
      <div className="search-container">
        {/* Campo de Busca por Nome */}
        <div className="search-input-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar personagem por nome... (Ex: Rick, Morty, Summer)"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Buscar personagem por nome"
          />
          {searchTerm && (
            <button
              type="button"
              className="clear-input-btn"
              onClick={() => onSearchChange('')}
              aria-label="Limpar termo de busca"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filtros de Status */}
        <div className="status-filter-group" role="group" aria-label="Filtrar por status">
          <button
            type="button"
            className={`filter-btn ${statusFilter === '' ? 'active' : ''}`}
            onClick={() => onStatusChange('')}
          >
            Todos
          </button>
          <button
            type="button"
            className={`filter-btn filter-alive ${statusFilter === 'alive' ? 'active' : ''}`}
            onClick={() => onStatusChange('alive')}
          >
            <span className="dot dot-alive"></span>
            Vivos
          </button>
          <button
            type="button"
            className={`filter-btn filter-dead ${statusFilter === 'dead' ? 'active' : ''}`}
            onClick={() => onStatusChange('dead')}
          >
            <span className="dot dot-dead"></span>
            Mortos
          </button>
          <button
            type="button"
            className={`filter-btn filter-unknown ${statusFilter === 'unknown' ? 'active' : ''}`}
            onClick={() => onStatusChange('unknown')}
          >
            <span className="dot dot-unknown"></span>
            Desconhecidos
          </button>
        </div>
      </div>

      {/* Barra de Informações e Botão de Limpar */}
      <div className="search-meta">
        <span className="results-count">
          {totalResults !== undefined && (
            <>
              <strong>{totalResults}</strong> {totalResults === 1 ? 'personagem encontrado' : 'personagens encontrados'}
            </>
          )}
        </span>

        {hasActiveFilters && (
          <button
            type="button"
            className="clear-filters-btn"
            onClick={onClear}
          >
            Limpar todos os filtros
          </button>
        )}
      </div>
    </section>
  );
}
