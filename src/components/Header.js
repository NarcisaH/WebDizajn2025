/*
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
    <header style={{ backgroundColor: 'var(--primary-color)', padding: '10px', backgroundColor: 'var(--primary-color)',
                      padding: '10px 20px',
                      position: 'sticky',
                      top: 0,
                      zIndex: 1000
                    }}>

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
*/


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header({ korisnik, onLogout }) {
  const [meniOtvoren, setMeniOtvoren] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('ulogovaniKorisnik');
    onLogout();
    navigate('/login');
  };

  return (
    <header style={{
      backgroundColor: 'var(--primary-color)',
      padding: '10px 20px',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ color: 'white' }}>Islamska arhitektura</h2>
        <button onClick={() => setMeniOtvoren(!meniOtvoren)} style={{
          background: 'transparent',
          color: 'white',
          fontSize: '1.5em',
          border: 'none',
          cursor: 'pointer',
          display: 'none'
        }} className="hamburger">
          ☰
        </button>
      </div>

      <nav>
        <ul className={meniOtvoren ? 'nav-menu show' : 'nav-menu'}>
          <li><Link to="/" style={{color: 'white'}}>Početna</Link></li>
          <li><Link to="/about" style={{color: 'white'}}>O nama</Link></li>
          <li><Link to="/contact" style={{color: 'white'}}>Kontakt</Link></li>
          <li><Link to="/login" style={{color: 'white'}}>Prijava</Link></li>
          {korisnik && (
              <li>
                <button onClick={handleLogout} style={{
                  backgroundColor: 'var(--secondary-color)',
                  color: 'white',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '5px'
                }}>
                  Odjava
                </button>
              </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

