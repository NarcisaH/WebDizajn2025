import React, {useState, useEffect} from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

/*Raniji kod 1:
function Login() {
  return (
    <div>
      <h1>Prijavite se ili se registrujte ako se prvi put prijavljujete.</h1>
    </div>
  );
}
  
----------------------------------------------------------------------------------
----------------------------------------------------------------------------------

Raniji kod 2: function Login() {
  const handleLogin = (korisnik) => {
    console.log('Pokušaj prijave:', korisnik);
    // Kasnije: provjera sa JSON serverom
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}


----------------------------------------------------------------------------------
----------------------------------------------------------------------------------

Kod 3: Verzija prije dodavanja prijave za kontrolu kontakt stranice:
function Login() {
  const [prikaziRegistraciju, setPrikaziRegistraciju] = useState(false);

  const handleLogin = (korisnik) => {
    console.log('Pokušaj prijave:', korisnik);
  };
  */
 //verzija sa dodanom registracijom i prijavom:
 function Login() {
  const [prikaziRegistraciju, setPrikaziRegistraciju] = useState(false);
  const [ulogovani, setUlogovani] = useState(null);

  useEffect(() => {
    const spremljen = localStorage.getItem('ulogovaniKorisnik');
    if (spremljen) {
      setUlogovani(JSON.parse(spremljen));
    }
  }, []);

  const handleLogin = (korisnik) => {
    setUlogovani(korisnik);
  };

  const handleRegister = (noviKorisnik) => {
    console.log('Pokušaj registracije:', noviKorisnik);
  };

  /*Stara verzija prije prijave i registracije:
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setPrikaziRegistraciju(false)}>Prijava</button>
        <button onClick={() => setPrikaziRegistraciju(true)} style={{ marginLeft: '10px' }}>Registracija</button>
      </div>

      {prikaziRegistraciju ? (
        <RegisterForm onRegister={handleRegister} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}*/




  // Nova verzija sa dodanom registracijom i prijavom.
  // Ovdje se koristi useEffect za provjeru da li je korisnik već prijavljen.
  // Ako jeste, postavlja se stanje 'ulogovani' sa podacima korisnika iz localStorage.
  // Ako nije, prikazuje se forma za prijavu ili registraciju.
  return (
    <div style={{ padding: '20px' }}>
      {ulogovani ? (
        <div>
          <h2>Dobrodošao/la, {ulogovani.ime}!</h2>
          <p>Uspješno ste prijavljeni kao {ulogovani.role}.</p>
        </div>
      ) : (
        <>
          <div style={{ marginBottom: '20px' }}>
            <button onClick={() => setPrikaziRegistraciju(false)}>Prijava</button>
            <button onClick={() => setPrikaziRegistraciju(true)} style={{ marginLeft: '10px' }}>Registracija</button>
          </div>

          {prikaziRegistraciju ? (
            <RegisterForm onRegister={handleRegister} />
          ) : (
            <LoginForm onLogin={handleLogin} />
          )}
        </>
      )}
    </div>
  );
}

export default Login;
