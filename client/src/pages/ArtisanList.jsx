import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchArtisan from "../components/SearchArtisan";
import ArtisanCard from "../components/ArtisanCard";
import "../styles/ArtisanList.scss";

const artisansData = [
  {
    name: "Chocolaterie Labbé",
    category: "Chocolatier",
    description: "Chocolats fins, passion pure, plaisir garanti.",
    location: "Lyon",
    rating: 5,
  },
  {
    name: "Au Pain Chaud",
    category: "Boulangerie",
    description: "Pain chaud, croissants dorés, savoir-faire artisanal.",
    location: "Montélimar",
    rating: 4,
  },
  {
    name: "Orville Salmons",
    category: "Chauffagiste",
    description: "Installation, entretien, dépannage : chaleur maîtrisée.",
    location: "Evian",
    rating: 4,
  },
  {
    name: "Mont Blanc Électricité",
    category: "Électricien",
    description: "Courant maîtrisé, sécurité assurée, service rapide.",
    location: "Chamonix",
    rating: 5,
  },
  {
    name: "Le monde des fleurs",
    category: "Fleuriste",
    description: "Bouquets sur mesure, fraîcheur et poésie.",
    location: "Annonay",
    rating: 5,
  },
  {
    name: "CM Graphisme",
    category: "Webdesign",
    description: "Créateur d’expériences digitales uniques.",
    location: "Valence",
    rating: 4,
  },
  {
    name: "Valérie Laderoute",
    category: "Toiletteur",
    description: "Toilettage expert pour compagnons choyés.",
    location: "Valence",
    rating: 4,
  },
  {
    name: "Royden Charbonneau",
    category: "Coiffeur",
    description: "Style, soin, et coup de maître.",
    location: "Saint-Priest",
    rating: 5,
  },
  {
    name: "Artisan",
    category: "Métier",
    description: "Descriptif",
    location: "Ville",
    rating: 5,
  },
];

const ArtisanList = () => {
  const [filteredArtisans, setFilteredArtisans] = useState(artisansData);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const search = params.get("search")?.toLowerCase() || "";

  useEffect(() => {
    if (search) {
      const results = artisansData.filter((artisan) =>
        artisan.name.toLowerCase().includes(search)
      );
      setFilteredArtisans(results);
    } else {
      setFilteredArtisans(artisansData);
    }
  }, [search]);

  const handleSearch = (filters) => {
    const results = artisansData.filter((artisan) => {
      return (
        (!filters.name ||
          artisan.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (!filters.rating || artisan.rating === parseInt(filters.rating)) &&
        (!filters.specialty ||
          artisan.specialty.toLowerCase() === filters.specialty.toLowerCase()) &&
        (!filters.location ||
          artisan.location.toLowerCase().includes(filters.location.toLowerCase()))
      );
    });
    setFilteredArtisans(results);
  };

  const handleShowAll = () => {
    setFilteredArtisans(artisansData);
  };

  return (
    <div className="artisan-list-page">
      <Header />
      <main>
        <section className="search-zone">
          <SearchArtisan onSearch={handleSearch} onShowAll={handleShowAll} />
        </section>
        <section className="results-zone">
          {/* ✅ Titre avec ligne verte */}
          <h2 className="title-with-line">Résultat des recherches :</h2>

          {/* ✅ Grille en 3 colonnes fixes */}
          <div className="artisan-grid">
            {filteredArtisans.map((artisan, index) => (
              <ArtisanCard key={index} {...artisan} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ArtisanList;
