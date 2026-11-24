import React from 'react';
import './CharacterCard.css';

/**
 * Tradução e mapeamento visual de status
 */
const STATUS_CONFIG = {
  Alive: { label: 'Vivo', className: 'status-alive' },
  Dead: { label: 'Morto', className: 'status-dead' },
  unknown: { label: 'Desconhecido', className: 'status-unknown' },
};

/**
 * Tradução amigável de gênero
 */
const GENDER_TRANSLATIONS = {
  Female: 'Feminino',
  Male: 'Masculino',
  Genderless: 'Sem gênero',
  unknown: 'Desconhecido',
};

/**
 * Componente de Card Individual do Personagem
 * Recebe os dados do personagem através das props.
 *
 * @param {Object} props
 * @param {Object} props.character - Dados do personagem retornados pela API
 */
export default function CharacterCard({ character }) {
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    location,
    image,
    episode,
  } = character;

  const currentStatus = STATUS_CONFIG[status] || {
    label: status,
    className: 'status-unknown',
  };

  const translatedGender = GENDER_TRANSLATIONS[gender] || gender;
  const episodeCount = Array.isArray(episode) ? episode.length : 0;

  return (
    <article className="character-card" data-id={id}>
      <div className="card-image-wrapper">
        <img
          src={image}
          alt={`Foto de ${name}`}
          className="card-image"
          loading="lazy"
        />
        <span className={`status-badge ${currentStatus.className}`}>
          <span className="status-dot"></span>
          {currentStatus.label}
        </span>
      </div>

      <div className="card-content">
        <header className="card-header">
          <h2 className="character-name" title={name}>
            {name}
          </h2>
          <span className="character-species">
            {species} • {translatedGender}
          </span>
        </header>

        <div className="card-details">
          <div className="detail-item">
            <span className="detail-label">Última localização conhecida:</span>
            <span className="detail-value" title={location?.name || 'Desconhecida'}>
              {location?.name || 'Desconhecida'}
            </span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Origem:</span>
            <span className="detail-value" title={origin?.name || 'Desconhecida'}>
              {origin?.name || 'Desconhecida'}
            </span>
          </div>
        </div>

        <footer className="card-footer">
          <span className="episodes-badge">
            {episodeCount} {episodeCount === 1 ? 'episódio' : 'episódios'}
          </span>
          <span className="character-id">#{id}</span>
        </footer>
      </div>
    </article>
  );
}
