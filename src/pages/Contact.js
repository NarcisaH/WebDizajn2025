/*Prva verzija: 
import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Kontaktirajte nas!</h1>
    </div>
  );
}

export default Contact;*/



import React, { useEffect, useState } from 'react';

function Contact() {
  const [ulogovani, setUlogovani] = useState(null);

  useEffect(() => {
    const spremljen = localStorage.getItem('ulogovaniKorisnik');
    if (spremljen) {
      setUlogovani(JSON.parse(spremljen));
    }
  }, []);

  if (!ulogovani) {
    return (
      <div>
        <h2>Pristup odbijen</h2>
        <p>Molimo vas da se prijavite kako biste vidjeli kontakt formu.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Kontaktiraj nas</h2>
      <p>Ovdje ide kontakt forma (dodajemo kasnije).</p>
    </div>
  );
}

export default Contact;
