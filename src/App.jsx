import React, { useState, useEffect, useCallback } from 'react';
import api from './services/api';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import CharacterCard from './components/CharacterCard/CharacterCard';
import Loading from './components/Loading/Loading';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Pagination from './components/Pagination/Pagination';
import './App.css';

/**
 * Componente Principal da Aplicação
 * Gerencia o estado dos personagens, busca, paginação, loading e erros.
 */
function App() {
  // Estados da aplicação
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Estados de filtro e navegação
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({ count: 0, pages: 1 });

  // Debounce para otimizar busca em tempo real sem sobrecarregar a API
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm.trim());
      setPage(1); // Reinicia para a página 1 ao alterar o termo
    }, 400);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Função responsável por consumir a API utilizando a instância do Axios
  const fetchCharacters = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Parâmetros de consulta da API
      const params = {
        page,
      };

      if (debouncedSearch) {
        params.name = debouncedSearch;
      }

      if (statusFilter) {
        params.status = statusFilter;
      }

      // Requisição GET para o endpoint /character
      const response = await api.get('/character', { params });

      // Armazena os dados retornados nos estados
      setCharacters(response.data.results || []);
      setInfo(response.data.info || { count: 0, pages: 1 });
    } catch (err) {
      // Tratamento específico: 404 da API do Rick and Morty indica "Não encontrado"
      if (err.response && err.response.status === 404) {
        setCharacters([]);
        setInfo({ count: 0, pages: 0 });
        setError({
          isNotFound: true,
          title: 'Nenhum habitante encontrado',
          message: `Nenhum personagem correspondeu aos filtros aplicados (${debouncedSearch ? `Nome: "${debouncedSearch}"` : ''} ${statusFilter ? `Status: "${statusFilter}"` : ''}). Tente outro termo ou limpe os filtros.`,
        });
      } else {
        // Erros de rede, servidor ou requisição
        setCharacters([]);
        setError({
          isNotFound: false,
          title: 'Falha na conexão com o multiverso',
          message:
            err.message === 'Network Error'
              ? 'Erro de rede. Verifique sua conexão com a internet e tente novamente.'
              : `Não foi possível carregar os dados (${err.message || 'Erro desconhecido'}). Por favor, tente novamente mais tarde.`,
        });
      }
    } finally {
      setLoading(false);
    }
  }, [page, debouncedSearch, statusFilter]);

  // Hook useEffect que dispara a requisição ao carregar a página e ao alterar dependências
  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  // Manipuladores de eventos
  const handleStatusChange = (newStatus) => {
    setStatusFilter(newStatus);
    setPage(1); // Reinicia para a primeira página
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setDebouncedSearch('');
    setStatusFilter('');
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* Cabeçalho */}
      <Header />

      <main className="main-content">
        {/* Barra de Busca e Filtros */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          statusFilter={statusFilter}
          onStatusChange={handleStatusChange}
          onClear={handleClearFilters}
          totalResults={info.count}
        />

        {/* Feedback de Carregamento */}
        {loading && <Loading message="Sintonizando personagens dimensionais..." />}

        {/* Mensagem de Erro ou Nenhum Resultado */}
        {!loading && error && (
          <ErrorMessage
            title={error.title}
            message={error.message}
            isNotFound={error.isNotFound}
            onRetry={error.isNotFound ? handleClearFilters : fetchCharacters}
          />
        )}

        {/* Lista de Personagens com .map() */}
        {!loading && !error && characters.length > 0 && (
          <div className="characters-container">
            <div className="characters-grid">
              {characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))}
            </div>

            {/* Paginação */}
            <Pagination
              currentPage={page}
              totalPages={info.pages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </main>

      {/* Rodapé da Aplicação */}
      <footer className="footer">
        <p>
          Desenvolvido com <strong>React</strong>, <strong>Vite</strong> e <strong>Axios</strong> para a atividade de Listagem de Dados.
        </p>
        <p className="footer-credits">
          Dados fornecidos por{' '}
          <a
            href="https://rickandmortyapi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Rick and Morty API
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
