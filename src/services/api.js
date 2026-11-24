import axios from 'axios';

/**
 * Instância configurada do Axios para a API de Rick and Morty.
 * Define a baseURL para centralizar as requisições aos endpoints da API.
 */
const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default api;
