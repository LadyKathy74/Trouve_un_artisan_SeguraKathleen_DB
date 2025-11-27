import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ArtisanCard from './ArtisanCard';
import './Home.scss';

const artisansDuMois = [
  {
    name: 'Orville Salmons',
    profession: 'Chauffagiste',
    description: 'Installation, entretien, dépannage : chaleur maîtrisée.',
    location: 'Evian',
  },
  {
    name: 'Chocolaterie Labbé',
    profession: 'Chocolatier',
    description: 'Chocolats fins, passion pure, plaisir garanti.',
    location: 'Lyon',
  },
  {
    name: 'Au Pain Chaud',
    profession: 'Boulangerie',
    description: 'Pain chaud, croissants dorés, savoir-faire artisanal.',
    location: 'Montélimar',
  },
];

const Home = () => {
  return (
    <div className="home">
      <Header />

      <main className="home__main">
        <section className="home__intro">
          <h1>Trouve ton artisan !</h1>
          <p>Avec la région Auvergne-Rhône-Alpes</p>
          <ol>
            <li>Choisir la catégorie d'artisanat dans le menu.</li>
            <li>Choisir un artisan.</li>
            <li>Le contacter via le formulaire de contact.</li>
            <li>Une réponse sera apportée sous 48h.</li>
          </ol>
        </section>

        <section className="home__featured">
          <h2>Artisans du mois :</h2>
          <div className="home__cards">
            {artisansDuMois.map((artisan, index) => (
              <ArtisanCard key={index} {...artisan} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;