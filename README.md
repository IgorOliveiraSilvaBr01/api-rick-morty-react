# Rick & Morty Explorer — Consumo de API com React, Vite e Axios

Aplicação web desenvolvida com **React**, **Vite** e **Axios** para consumo e exibição interativa de personagens da [The Rick and Morty API](https://rickandmortyapi.com/).

Projeto desenvolvido como parte da atividade prática: **"Listagem de Dados com React, Vite e Axios"**.

---

## Objetivo da Atividade
Desenvolver uma aplicação web utilizando React (com Vite e JavaScript) que realize o consumo de uma API pública externa através da biblioteca Axios, exibindo os dados obtidos de forma organizada, responsiva e amigável na interface do usuário.

---

## Tecnologias Utilizadas

| Tecnologia | Finalidade |
| :--- | :--- |
| **[Vite](https://vitejs.dev/)** | Ferramenta de build e servidor de desenvolvimento ultra-rápido |
| **[React](https://react.dev/) (v19+)** | Biblioteca para construção da interface de usuário declarativa e componentizada |
| **[JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)** | Linguagem base do projeto |
| **[Axios](https://axios-http.com/)** | Cliente HTTP baseado em Promises para requisições à API REST |
| **CSS3 Moderno** | Estilização temática (Rick and Morty / Sci-Fi Neon), Flexbox, CSS Grid e total responsividade |

---

## API Consumida
- **API Utilizada:** [The Rick and Morty API](https://rickandmortyapi.com/)
- **Endpoint Base:** `https://rickandmortyapi.com/api`
- **Endpoint de Personagens:** `https://rickandmortyapi.com/api/character`

---

## Funcionalidades

### 1. Consumo HTTP com Axios e `useEffect`
- Instância centralizada configurada em `src/services/api.js` utilizando `axios.create()` com `baseURL`.
- Requisições `GET` executadas no ciclo de vida inicial e atualizações pelo hook `useEffect`.

### 2. Gerenciamento de Estados com `useState`
- Controle granular de dados retornados (`characters`), estados de carregamento (`loading`), mensagens de erro (`error`), filtros de busca (`searchTerm`, `statusFilter`) e paginação (`page`, `info`).

### 3. Componentização e Arquitetura Limpa
- **`Header`**: Cabeçalho temático com badges dimensionais e tecnologias utilizadas.
- **`SearchBar`**: Filtro em tempo real por nome com técnica de debounce (evita requisições excessivas) e seletor rápido por status (*Todos, Vivos, Mortos, Desconhecidos*).
- **`CharacterCard`**: Card modular que exibe foto, nome, indicador visual de status com cor dinâmica (verde, vermelho, cinza), espécie, gênero traduzido, última localização, origem e número de episódios.
- **`Loading`**: Portal interdimensional animado em CSS com mensagem explicativa durante o carregamento.
- **`ErrorMessage`**: Tratamento amigável para falhas de rede, requisições com erro ou buscas sem retorno com botão de "Tentar novamente" / "Limpar filtros".
- **`Pagination`**: Controle de navegação de páginas com scroll automático suave.

### 4. Requisito Bônus Implementado
- **Filtro em Tempo Real**: Campo `<input>` que busca personagens pelo nome em tempo real com debounce de 400ms integrado à API e filtros combinados de status.

### 5. Design Temático e Responsivo
- Interface inspirada na estética do desenho animado (tons escuros espaciais, verde portal néon e azul interdimensional).
- Totalmente responsivo para smartphones, tablets e desktops (Grid adaptativo de 1 a 4 colunas).

---

## Estrutura do Projeto

```text
api-rick-morty-react/
├── public/                     # Arquivos estáticos e ícones
├── src/
│   ├── assets/                 # Recursos gráficos
│   ├── components/             # Componentes modulares e reutilizáveis
│   │   ├── CharacterCard/      # Card individual de exibição do personagem
│   │   │   ├── CharacterCard.jsx
│   │   │   └── CharacterCard.css
│   │   ├── ErrorMessage/       # Componente de tratamento visual de erros
│   │   │   ├── ErrorMessage.jsx
│   │   │   └── ErrorMessage.css
│   │   ├── Header/             # Cabeçalho da aplicação
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── Loading/            # Spinner e feedback animado de carregamento
│   │   │   ├── Loading.jsx
│   │   │   └── Loading.css
│   │   ├── Pagination/         # Controle de navegação entre páginas
│   │   │   ├── Pagination.jsx
│   │   │   └── Pagination.css
│   │   └── SearchBar/          # Campo de busca e filtros de status
│   │       ├── SearchBar.jsx
│   │       └── SearchBar.css
│   ├── services/
│   │   └── api.js              # Instância do Axios com axios.create({ baseURL })
│   ├── App.jsx                 # Componente principal com a lógica de consumo e estados
│   ├── App.css                 # Estilos específicos do layout principal e grid
│   ├── index.css               # Estilos globais e tipografia
│   └── main.jsx                # Ponto de entrada do React
├── .gitignore                  # Arquivos e pastas ignoradas pelo Git (ex: node_modules, dist)
├── index.html                  # HTML principal da aplicação
├── package.json                # Manifesto de dependências e scripts do Node.js
├── vite.config.js              # Configuração do Vite
└── README.md                   # Documentação detalhada da aplicação
```

---

## Checklist de Requisitos da Atividade

| Item | Requisito | Status | Implementação |
| :---: | :--- | :---: | :--- |
| **1** | Configuração com Vite e template React + pacote Axios | ✅ Concluído | Projeto criado com Vite e pacote `axios` instalado |
| **2** | Requisição HTTP GET com Axios no `useEffect` | ✅ Concluído | `useEffect` chamando `api.get('/character')` |
| **3** | Armazenamento de Estado no `useState` | ✅ Concluído | Estados para `characters`, `loading`, `error`, `page`, etc. |
| **4** | Renderização da Lista via `.map()` | ✅ Concluído | `characters.map((character) => <CharacterCard key={character.id} ... />)` |
| **5** | Feedback de Carregamento (Loading) | ✅ Concluído | Componente `Loading` com indicador visual animado |
| **6** | Tratamento de Erros amigável sem quebrar o app | ✅ Concluído | Componente `ErrorMessage` com botão de recuperação |
| **7** | Instância do Axios com `axios.create()` e `baseURL` | ✅ Concluído | Criado em `src/services/api.js` |
| **8** | Componentização do Card com passagem via props | ✅ Concluído | Criado em `src/components/CharacterCard/CharacterCard.jsx` |
| **9** | **Bônus:** Filtro de busca por nome em tempo real | ✅ Concluído | Campo com debounce em `src/components/SearchBar/` |
| **10** | Uso de propriedade `key` única | ✅ Concluído | `key={character.id}` |
| **11** | Não subir a pasta `node_modules` | ✅ Concluído | Garantido pelo `.gitignore` |

---

## Como Executar o Projeto Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior instalada)
- Gerenciador de pacotes `npm` ou `yarn`

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>
   cd api-rick-morty-react
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no seu navegador:**
   Abra o endereço exibido no terminal, tipicamente:
   ```text
   http://localhost:5173
   ```

5. **Gerar build de produção (opcional):**
   ```bash
   npm run build
   ```

---

## Autor
Desenvolvido para fins educacionais no curso do **SENAI - BIOLAB**.
