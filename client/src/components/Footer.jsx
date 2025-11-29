import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer d-flex flex-column align-items-center py-4">
      <div className="footer-links d-flex justify-content-center mb-3">
        <Link to="/about" className="mx-3 footer-link">À propos</Link>
        <Link to="/contact" className="mx-3 footer-link">Contact</Link>
        <Link to="/privacy" className="mx-3 footer-link">Politique de confidentialité</Link>
        <Link to="/terms" className="mx-3 footer-link">Conditions d'utilisation</Link>
      </div>
      <div className="footer-copy text-center">
        &copy; {new Date().getFullYear()} Trouve un Artisan. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;