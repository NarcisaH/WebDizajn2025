import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Početna</Link></li>
          <li><Link to="/about">O nama</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
          <li><Link to="/login">Prijava</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;



