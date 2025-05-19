import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa'; // Ikone (prvo instalirati: npm install react-icons)

function About() {
  return (
    <div style={{ fontSize: '1.1em', lineHeight: '1.8' }}>
      
      {/* ➤ Hero sekcija sa pozadinom */}
      <div style={{
        backgroundImage: 'url(/images/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        padding: '100px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3em', marginBottom: '10px' }}>Dobrodošli u svijet islamske arhitekture</h1>
        <p style={{ fontSize: '1.2em' }}>Spoj duhovnog i estetskog izraza kroz stoljeća</p>
      </div>

      {/* ➤ Tekstualni uvod */}
      <section style={{ margin: '40px', padding: '20px' }}>
        <h2>Zašto je islamska arhitektura toliko impresivna?</h2>
        <p>
          Islamska arhitektura predstavlja spoj umjetnosti, duhovnosti, nauke i kulture. Njena
          kompleksna geometrija, simetrija, kaligrafija i ornamentalni uzorci govore o dubokoj
          povezanosti čovjeka s univerzumom i Stvoriteljem. Od <strong>Alhambre</strong> do <strong>Plave džamije</strong>,
          ova arhitektura inspiriše ne samo estetski, već i duhovno.
        </p>
        <p>
          Ako vas zanima više, preporučujemo da pročitate:
        </p>
        <ul>
          <li>
            <a href="https://archnet.org/" target="_blank" rel="noreferrer">Archnet – Islamic Architecture Resource</a>
          </li>
          <li>
            <a href="https://islamicart.museumwnf.org/" target="_blank" rel="noreferrer">Museum With No Frontiers – Islamic Art</a>
          </li>
          <li>
            <a href="https://www.khanacademy.org/humanities/art-islam" target="_blank" rel="noreferrer">Khan Academy – Islamic Art and Architecture</a>
          </li>
        </ul>
      </section>

      {/* ➤ Društvene mreže */}
      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2>Pratite nas</h2>
        <p>Naš tim:</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', fontSize: '2em', marginTop: '20px' }}>
          <a href="https://www.linkedin.com/company/politehni%C4%8Dki-fakultet-univerziteta-u-zenici" target="_blank" rel="noreferrer">
            <FaLinkedin color="#0A66C2" />
          </a>
          <a href="https://www.instagram.com/ptf_unze/" target="_blank" rel="noreferrer">
            <FaInstagram color="#E4405F" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
