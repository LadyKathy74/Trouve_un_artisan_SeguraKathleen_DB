// ArtisanDetail.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import '../styles/ArtisanDetail.scss';

const ArtisanDetail = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
    // Ici tu pourrais envoyer la note vers ton backend si nécessaire
    // fetch('/api/rating', { method: 'POST', body: JSON.stringify({ artisanId: 1, rating: value }) })
  };

  return (
    <div className="artisan-detail-page">
      <Header />

      <main className="artisan-detail-content">
        {/* Section infos artisan */}
        <section className="intro-section">
          <h1>Chocolaterie Labbé</h1>
          <div className="rating-display">★★★★★</div>
          <p><strong>Spécialité :</strong> Chocolatier</p>
          <p><strong>Localisation :</strong> Lyon</p>
          <p>
            Artisan chocolatier passionné, nous façonnons chaque création avec exigence et gourmandise.
            Du choix des fèves à la touche finale, notre savoir-faire célèbre le goût, l’émotion et l’authenticité.
          </p>
          <a
            href="https://chocolaterie-labbe.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="website-link"
          >
            Visiter le site web
          </a>
        </section>

        {/* Section notation */}
        <section className="rating-section">
          <h2>Notez cet artisan</h2>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${star <= (hoverRating || rating) ? 'filled' : ''}`}
                onClick={() => handleRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              >
                ★
              </span>
            ))}
          </div>
          {rating > 0 && (
            <p className="rating-message">
              Merci pour votre note : {rating} étoile{rating > 1 ? 's' : ''} !
            </p>
          )}
        </section>

        {/* Section contact */}
        <section className="contact-section">
          <h2>Contactez l’artisan</h2>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ArtisanDetail;