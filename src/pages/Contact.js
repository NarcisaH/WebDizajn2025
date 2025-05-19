import React, { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  const [ulogovani, setUlogovani] = useState(null);

  useEffect(() => {
    const spremljen = localStorage.getItem('ulogovaniKorisnik');
    if (spremljen) {
      setUlogovani(JSON.parse(spremljen));
    }
  }, []);


  // Provjera da li je korisnik ulogovan
  if (!ulogovani) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Pristup odbijen</h2>
        <p>Molimo vas da se prijavite kako biste vidjeli kontakt formu.</p>
        <div>
        <p>Možete nas posjetiti na lokaciji prikazanoj ispod.</p>
          <iframe
            title="Google mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2860.3726554095315!2d17.90087697568775!3d44.19939071693494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ee2423fa0fbaf%3A0xd5caf50678c02195!2sPolitehni%C4%8Dki%20fakultet%20Univerziteta%20u%20Zenici!5e0!3m2!1sen!2sba!4v1747685501550!5m2!1sen!2sba"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>     
        <div>
          <h2>Kontaktiraj nas</h2>
          <ContactForm />
          <br />
          <p>Možete nas posjetiti na lokaciji prikazanoj ispod.</p>
          <iframe
            title="Google mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2860.3726554095315!2d17.90087697568775!3d44.19939071693494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ee2423fa0fbaf%3A0xd5caf50678c02195!2sPolitehni%C4%8Dki%20fakultet%20Univerziteta%20u%20Zenici!5e0!3m2!1sen!2sba!4v1747685501550!5m2!1sen!2sba"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
    </div>
  );
}


export default Contact;
