import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArtisanCard from '../components/ArtisanCard';
import designImage from '../assets/images/Design.png';
import '../styles/Home.scss';

const artisansDuMois = [
  {
    name: 'Orville Salmons',
    profession: 'Chauffagiste',
    description: 'Installation, entretien, dépannage : chaleur maîtrisée.',
    location: 'Evian',
    rating: 4,
    category: 'Chauffage',
  },
  {
    name: 'Chocolaterie Labbé',
    profession: 'Chocolatier',
    description: 'Chocolats fins, passion pure, plaisir garanti.',
    location: 'Lyon',
    rating: 5,
    category: 'Alimentation',
  },
  {
    name: 'Au Pain Chaud',
    profession: 'Boulangerie',
    description: 'Pain chaud, croissants dorés, savoir-faire artisanal.',
    location: 'Montélimar',
    rating: 4,
    category: 'Boulangerie',
  },
];

export default function Home() {
  return (
    <div className="home">
      <Header />

      <main className="home__main" id="main">
        <section className="home__intro">
          <div className="home__intro-text">
            <h1 className="home__title">Comment trouver mon artisan ?</h1>
            <ol className="home__steps">
              <li>Choisir la catégorie d'artisanat dans le menu.</li>
              <li>Choisir un artisan.</li>
              <li>Le contacter via le formulaire de contact.</li>
              <li>Une réponse sera apportée sous 48h.</li>
            </ol>
          </div>

          <div className="home__intro-image" aria-hidden="true">
            <img src={designImage} alt="Illustration design" />
          </div>
        </section>

        <section className="home__featured">
          <h2 className="home__subtitle">Artisans du mois</h2>

          <div className="home__artisan-list" role="list">
            {artisansDuMois.map((artisan, index) => (
              <div role="listitem" key={index} className="home__artisan-item">
                <ArtisanCard
                  category={artisan.category}
                  name={artisan.name}
                  description={artisan.description}
                  location={artisan.location}
                  rating={artisan.rating}
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
