import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Apartment from '../../pages/Apartment/Apartment';
import PageNotFound from '../../pages/404/404';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

//composants de page importés => affichage pour les différents url, chemins
//l'astérisque est utilisé comme un caractère générique et représente n'importe quel url
const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/kasa2" element={<Home />} />
        <Route path="/kasa2/about" element={<About />} />
        <Route path="/kasa2/apartment/:id" element={<Apartment />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;