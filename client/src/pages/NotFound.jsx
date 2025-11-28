import React from 'react';
import Header from './Header';
import Footer from './Footer';
import errorImage from '../assets/images/404.png'; // ajuste le chemin si nécessaire
import './NotFound.css'; // optionnel si tu veux styliser la page

const NotFound = () => {
  return (
    <div className="not-found-page">
      <Header />
      <main className="not-found-content" style={{ textAlign: 'center', padding: '50px' }}>
        <img src={errorImage} alt="404 Not Found" style={{ maxWidth: '300px', marginBottom: '20px' }} />
        <h1>404 - Page non trouvée</h1>
        <p>La page que vous avez demandée n'existe pas.</p>
        <a href="/" className="home-button" style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '5px'
        }}>
          Retour à l'accueil
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;