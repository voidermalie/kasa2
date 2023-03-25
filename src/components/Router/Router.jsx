import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import PageNotFound from '../../pages/404/404';
import About from '../../pages/About/About';
import Header from '../Header/Header';

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/404" component={PageNotFound} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
