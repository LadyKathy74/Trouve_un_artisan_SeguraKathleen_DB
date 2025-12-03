// React Component: Header.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.scss";
import logo from "../assets/images/Logo.png"; // ajuste le chemin si besoin

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/artisans?search=${searchTerm}`);
    }
  };

  return (
    <header className="header">

      {/* LOGO */}
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </Link>

      {/* HAMBURGER */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* MENU SLIDE */}
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><Link className="nav-button" to="/">Accueil</Link></li>
          <li><Link className="nav-button" to="/batiment">Bâtiment</Link></li>
          <li><Link className="nav-button" to="/services">Services</Link></li>
          <li><Link className="nav-button" to="/fabrication">Fabrication</Link></li>
          <li><Link className="nav-button" to="/alimentation">Alimentation</Link></li>
        </ul>

        {/* Barre de recherche visible en DESKTOP + TABLETTE */}
        <form className="search-dt" onSubmit={handleSearch}>
          <input
            type="text"
            className="form-control"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>

        {/* Recherche mobile */}
        <form className="search-mobile" onSubmit={handleSearch}>
          <input
            type="text"
            className="form-control"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>
      </nav>
    </header>
  );
}
