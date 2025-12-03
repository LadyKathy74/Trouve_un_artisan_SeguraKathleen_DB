import React from "react";
import "../styles/SearchArtisan.scss";

const metiers = [
  "Plombier",
  "Électricien",
  "Menuisier",
  "Peintre",
  "Maçon",
  "Boulanger",
  "Cordonnier",
  "Bijoutier",
  "Coiffeur",
  "Serrurier",
  "Ramoneur",
  "Tapissier",
  "Horloger",
  "Soudeur",
  "Luthier",
  "Tailleur",
  "Charpentier",
  "Carreleur",
  "Couvreur",
  "Maréchal-ferrant",
  "Potier",
  "Fromager",
  "Verrier",
  "Tisserand",
  "Orfèvre",
  "Sculpteur",
  "Forgeron",
  "Pâtissier",
  "Chocolatier",
  "Poissonnier",
  "Fleuriste"
  // … ajoutez autant de métiers que nécessaire
];

const SearchArtisan = () => {
  return (
    <div className="artisan-search">
      <div className="artisan-search__wrapper">
        <h2 className="artisan-search__title">Recherche d’artisans</h2>

        <div className="artisan-search__grid">
          {/* Ligne 1 */}
          <div className="artisan-search__item">
            <input
              id="name"
              type="text"
              placeholder="Par nom ..."
              className="input"
            />
          </div>

          <div className="artisan-search__item">
            <select id="rating" className="select">
              <option value="">Sélectionner une note</option>
              <option value="5">5 ★</option>
              <option value="4">4 ★ et plus</option>
              <option value="3">3 ★ et plus</option>
              <option value="2">2 ★ et plus</option>
              <option value="1">1 ★ et plus</option>
            </select>
          </div>

          <div className="artisan-search__item">
            <select id="specialty" className="select">
              <option value="">Sélectionner une spécialité</option>
              {metiers.map((metier, index) => (
                <option key={index} value={metier.toLowerCase()}>
                  {metier}
                </option>
              ))}
            </select>
          </div>

          {/* Ligne 2 */}
          <div className="artisan-search__item">
            <input
              id="location"
              type="text"
              placeholder="Par localisation"
              className="input"
            />
          </div>

          <div className="artisan-search__item">
            <button id="searchBtn" type="button" className="btn btn--primary">
               Recherche un artisan 🔎
            </button>
          </div>

          <div className="artisan-search__item">
            <button id="showBtn" type="button" className="btn btn--secondary">
               Afficher les artisans ↩︎
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchArtisan;
