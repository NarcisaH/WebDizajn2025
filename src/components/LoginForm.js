import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [poruka, setPoruka] = useState('');

  /*Prva verzija prije primjene prijave za kontrolu kontakt stranice:
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setPoruka('Unesite i email i lozinku.');
      return;
    }

    // Ovdje ćeš kasnije provjeravati korisnika preko baze
    onLogin({ email, password });
    setPoruka('');
  };*/

  // Druga verzija sa fetch API-jem za slanje podataka na server:
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setPoruka('Unesite i email i lozinku.');
      return;
    }
  
    try {
      const res = await fetch(`http://localhost:5000/users?email=${email}&password=${password}`);
      const podaci = await res.json();
  
      if (podaci.length > 0) {
        const korisnik = podaci[0];
        localStorage.setItem('ulogovaniKorisnik', JSON.stringify(korisnik));
        onLogin(korisnik);
        setPoruka('');
      } else {
        setPoruka('Pogrešan email ili lozinka.');
      }
    } catch (error) {
      setPoruka('Greška pri povezivanju sa serverom.');
    }
  };
  

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Prijava</h2>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>Lozinka:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Prijavi se</button>
      {poruka && <p style={{ color: 'red' }}>{poruka}</p>}
    </form>
  );
}

export default LoginForm;
