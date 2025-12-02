// ArtisanCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ArtisanCard.scss';

function Rating({ rating = 0 }) {
  const rounded = Math.max(0, Math.min(5, Math.round(Number(rating) || 0)));
  const stars = Array.from({ length: 5 }, (_, i) => i < rounded);

  return (
    <div className="artisan-rating" aria-label={`Note : ${rounded} sur 5`}>
      {stars.map((filled, i) => (
        <span
          key={i}
          className={`star ${filled ? 'filled' : ''}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default function ArtisanCard({
  category,
  name,
  description,
  location,
  rating = 0,
  className = '',
}) {
  return (
    <article className={`artisan-card ${className}`.trim()}>
      <header className="artisan-card-top">
        <Rating rating={rating} />
        <div className="artisan-category">{category}</div>
      </header>

      <h3 className="artisan-name">{name}</h3>

      <p className="artisan-description">{description}</p>

      <div className="artisan-location">{location}</div>
    </article>
  );
}

ArtisanCard.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  location: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};

ArtisanCard.defaultProps = {
  description: '',
  location: '',
  rating: 0,
  className: '',
};
