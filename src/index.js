/**
 * Ovo je polazna tačka naše React aplikacije.
 * 
 * - Ovdje uvezemo potrebne module i komponente koje aplikacija treba prikazati sa 'render'.
 * - `React` je uvezen da omogući JSX sintaksu i React funkcionalnosti.
 * - `ReactDOM` je za render React komponenti u DOM.
 * - `Home` je React komponenta koju smo mi napravili i predstavlja glavni sadržaj.
 * 
 * `ReactDOM.render` metoda se koristi za render `Home` komponente u DOM element sa ID-jem `root`.
 * Ovaj element je obično definisan u `index.html` datoteci projekta.:
 * 
 * - `React.StrictMode` je alat za naglašavanje potencijalnih problema u aplikaciji tako što aktivira dodatne provere i upozorenja.
 *   - To je samo alat za razvoj i ne utiče na produkcijsku verziju aplikacije.
    *   - Pomaže u identifikaciji problema kao što su neispravna upotreba životnog ciklusa, neefikasne render funkcije itd.
    *  - Uklanjanjem `React.StrictMode` iz `render` poziva, aplikacija će raditi bez dodatnih provjera i upozorenja.
    *  - Međutim, preporučuje se da se koristi tokom razvoja kako bi se osiguralo da je aplikacija napisana prema najboljim praksama.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App /> {/* Ovo je polazna tačka naše React aplikacije. 
         `Home`komponenta je glavna komponenta koja se prikazuje kada se aplikacija učita. */}
    </React.StrictMode>
);
