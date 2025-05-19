import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import './styles/Colors.css';


function App() {
  //Dodavanje stanja za ulogovanog korisnika
  const [ulogovani, setUlogovani] = useState(null);

  //Učitaj ulogovanog korisnika iz localStorage kada se komponenta učita
  //useEffect se koristi za upravljanje efektima u funkcionalnim komponentama
  useEffect(() => {
    const spremljen = localStorage.getItem('ulogovaniKorisnik');
    if (spremljen) {
      setUlogovani(JSON.parse(spremljen));
    }
  }, []);

  const handleLogout = () => {
    setUlogovani(null);
  };

  return (
    <Router>
      {/* Dodavanje Header-a i Footer-a */}
      {/* Header komponenta prima korisnika i funkciju za odjavu kao propse */}    
      <Header korisnik={ulogovani} onLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
       <ScrollToTop /> 
    </Router>
  );
}

export default App;
