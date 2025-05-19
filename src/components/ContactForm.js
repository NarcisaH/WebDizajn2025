import React, { useState } from 'react';

function ContactForm() {
  const [ime, setIme] = useState('');
  const [email, setEmail] = useState('');
  const [poruka, setPoruka] = useState('');
  const [obavijest, setObavijest] = useState('');


  // Funkcija za slanje podataka
  // Ovdje možemo slati podatke na json-server
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ime || !email || !poruka) {
      setObavijest('Sva polja su obavezna.');
      return;
    }

    // Ispis na konzolu
    // Ovo je samo za testiranje
    console.log('Kontakt forma:', { ime, email, poruka });

      const novaPoruka = {
        ime,
        email,
        poruka,
        datum: new Date().toLocaleString()
      };

      try {
    const res = await fetch('http://localhost:5000/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novaPoruka)
    });

    if (res.ok) {
      setObavijest('Poruka je uspješno poslana!');
      setIme('');
      setEmail('');
      setPoruka('');
    } else {
      setObavijest('Greška prilikom slanja poruke.');
    }
  } catch (err) {
    setObavijest('Server nije dostupan.');
  }
    // Resetiraj formu
    setObavijest('Poruka je uspješno poslana!');
    setIme('');
    setEmail('');
    setPoruka('');
  };




  // Renderiranje tj. prikaz forme
  // Ovdje možemo dodati stilove
  return (
    <div style={{
        backgroundImage: 'url(/images/hero.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        padding: '100px 20px',
        textAlign: 'center'
        }}>
    

    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
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

      <label>Poruka:</label>
      <textarea
        value={poruka}
        onChange={(e) => setPoruka(e.target.value)}
        required
        rows="4"
      ></textarea>

      <button type="submit">Pošalji</button>
      {obavijest && <p style={{ color: 'green' }}>{obavijest}</p>}
    </form>
    </div>
  );
}

export default ContactForm;
