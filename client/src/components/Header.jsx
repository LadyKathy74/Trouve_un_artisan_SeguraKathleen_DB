import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className="header d-flex align-items-center justify-content-between px-3 py-2">
      
      {/* Logo */}
      <Link to="/" className="logo">
        <img
          src="./images/logo.png"        // chemin vers ton image
          alt="Trouve ton artisan"      // texte alternatif
          className="logo-img"
        />
      </Link>

      {/* Navigation */}
      <nav className="d-flex align-items-center">
        <ul className="nav-links d-flex list-unstyled mb-0">
          <li className="mx-2">
            <Link to="/Accueil" className="nav-button">Accueil</Link>
          </li>
          <li className="mx-2">
            <Link to="/Batiment" className="nav-button">Bâtiment</Link>
          </li>
          <li className="mx-2">
            <Link to="/Services" className="nav-button">Services</Link>
          </li>
          <li className="mx-2">
            <Link to="/Fabrication" className="nav-button">Fabrication</Link>
          </li>
          <li className="mx-2">
            <Link to="/Alimentation" className="nav-button">Alimentation</Link>
          </li>
        </ul>

        {/* Barre de recherche */}
        <form className="d-flex ms-3" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Rechercher..."
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </nav>
    </header>
  );
}

export default Header;