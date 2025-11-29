import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importation des pages
import Home from './pages/Home';
import ArtisanList from './pages/ArtisanList';
import ArtisanDetail from './pages/ArtisanDetail';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artisans" element={<ArtisanList />} />
        <Route path="/artisans/:id" element={<ArtisanDetail />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;