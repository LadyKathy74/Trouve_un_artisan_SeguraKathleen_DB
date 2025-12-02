// React Component: Header.jsx
import React, { useState } from "react";
import "../styles/Header.scss";
import logo from "../assets/images/Logo.png"; // ajuste le chemin si besoin

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      {/* LOGO */}
      <a href="#" className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </a>

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
          <li><a className="nav-button" href="#">Accueil</a></li>
          <li><a className="nav-button" href="#">Bâtiment</a></li>
          <li><a className="nav-button" href="#">Services</a></li>
          <li><a className="nav-button" href="#">Fabrication</a></li>
          <li><a className="nav-button" href="#">Alimentation</a></li>
        </ul>

      {/* Barre de recherche visible en DESKTOP + TABLETTE */}
      <div className="search-dt">
            <input type="text" className="form-control" placeholder="Rechercher..." />
            <button type="submit">🔍</button>
      </div>

        {/* Recherche mobile */}
        <form className="search-mobile">
          <input type="text" className="form-control" placeholder="Rechercher..." />
          <button type="submit">🔍</button>
        </form>
      </nav>
    </header>
  );
}
