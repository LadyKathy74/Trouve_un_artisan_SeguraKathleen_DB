import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import constructionImage from '../assets/images/En Construction.png'; // ajuste le chemin si besoin
import '../styles/Legal.scss'; // optionnel pour styliser

const Legal = () => {
  return (
    <div className="legal-page">
      <Header />
      <main className="legal-content" style={{ textAlign: 'center', padding: '50px' }}>
        <img
          src={constructionImage}
          alt="Page en construction"
          style={{ maxWidth: '400px', marginBottom: '30px' }}
        />
        <h1>En Construction</h1>
        <p>
          La page des mentions légales est actuellement en cours de construction.<br />
          Nous mettons tout en œuvre pour la rendre disponible dans les plus brefs délais.
        </p>
        <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
          Merci de votre compréhension.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Legal;