import React, { useState } from 'react';
import '../styles/SearchArtisan.scss';

const SearchArtisan = ({ onSearch, onShowAll }) => {
  const [filters, setFilters] = useState({
    name: '',
    rating: '',
    specialty: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchClick = () => {
    if (onSearch) onSearch(filters);
  };

  const handleShowAllClick = () => {
    if (onShowAll) onShowAll();
  };

  return (
    <div className="search-artisan">
      <h2>Recherche d'artisan</h2>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Par nom..."
          value={filters.name}
          onChange={handleChange}
        />
        <select name="rating" value={filters.rating} onChange={handleChange}>
          <option value="">Par note</option>
          <option value="5">★★★★★</option>
          <option value="4">★★★★</option>
          <option value="3">★★★</option>
          <option value="2">★★</option>
          <option value="1">★</option>
        </select>
        <select name="specialty" value={filters.specialty} onChange={handleChange}>
          <option value="">Par spécialité</option>
          <option value="plombier">Plombier</option>
          <option value="électricien">Électricien</option>
          <option value="menuisier">Menuisier</option>
          <option value="peintre">Peintre</option>
        </select>
        <input
          type="text"
          name="location"
          placeholder="Par localisation..."
          value={filters.location}
          onChange={handleChange}
        />
      </div>
      <div className="button-group">
        <button className="search-btn" onClick={handleSearchClick}>
          🔍 Recherche un artisan
        </button>
        <button className="show-btn" onClick={handleShowAllClick}>
          ↩ Afficher les artisans
        </button>
      </div>
    </div>
  );
};

export default SearchArtisan;