/*import React from 'react';
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

export default Header;*/


//Nova verzija sa dodanom registracijom i prijavom i odjavom.
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header({ korisnik, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('ulogovaniKorisnik');
    onLogout(); // poziva funkciju iz App-a ili Login-a
    navigate('/login'); // preusmjeri na login stranicu
  };

  return (
    <header style={{ backgroundColor: 'var(--primary-color)', padding: '10px' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
          <li><Link to="/" style={{ color: 'white' }}>Početna</Link></li>
          <li><Link to="/about" style={{ color: 'white' }}>O nama</Link></li>
          <li><Link to="/contact" style={{ color: 'white' }}>Kontakt</Link></li>
          <li><Link to="/login" style={{ color: 'white' }}>Prijava</Link></li>
        </ul>
        {korisnik && (
          <button onClick={handleLogout} style={{ backgroundColor: 'var(--secondary-color)', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '5px' }}>
            Odjava
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;


