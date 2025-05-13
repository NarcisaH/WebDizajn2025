import React, { useState } from 'react';

function RegisterForm({ onRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ime, setIme] = useState('');
  const [poruka, setPoruka] = useState('');

  /* (1) Funkcija za registraciju korisnika koja se poziva kada se forma pošalje:
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !ime) {
      setPoruka('Sva polja su obavezna.');
      return;
    }

    const noviKorisnik = {
      ime,
      email,
      password,
      role: 'guest' // podrazumijevana uloga
    };

    onRegister(noviKorisnik);
    setPoruka('');
  };*/


  //Dorada funkcije za registraciju korisnika koja se poziva kada se forma pošalje.
  // Ovdje se koristi fetch API za slanje podataka na server:
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !password || !ime) {
      setPoruka('Sva polja su obavezna.');
      return;
    }
  
    const noviKorisnik = {
      ime,
      email,
      password,
      role: 'guest'
    };
  
    try {
      const res = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(noviKorisnik)
      });
  
      if (res.ok) {
        setPoruka('Registracija uspješna!');
        setIme('');
        setEmail('');
        setPassword('');
      } else {
        setPoruka('Greška prilikom registracije.');
      }
    } catch (error) {
      setPoruka('Server nije dostupan.');
    }
  };
  

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Registracija</h2>

      <label>Ime i prezime:</label>
      <input
        type="text"
        value={ime}
        onChange={(e) => setIme(e.target.value)}
        required
      />

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

      <button type="submit">Registruj se</button>
      {poruka && <p style={{ color: 'red' }}>{poruka}</p>}
    </form>
  );
}


export default RegisterForm;
