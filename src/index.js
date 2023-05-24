import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './components/Router/Router';
import reportWebVitals from './reportWebVitals';
import { ApartmentProvider } from './context/ApartmentContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApartmentProvider>
    <AppRouter />
    </ApartmentProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//envoyer logement en question en tant que props
//mettre fetch ici
//regarder state => y enregistrer les logements