import React from 'react';
import { arhitektura } from '../data.js';
import { motion } from 'framer-motion'; //za animacije ulaznog elementa
//prije toga je potrebno instalirati framer-motion
//npm install framer-motion
// i onda dodati import u index.js

function Home() {
  return (

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 3 }}
>

    <div style={{ padding: '20px' }}>
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

      <h1 style={{textAlign: 'center', padding: '30px'}}>Čari Islamske Arhitekture</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {arhitektura.map(obj => (
          <div key={obj.id} style={{ border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden',
                                    border: '1px solid #ddd',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.3s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >

            <img src={obj.slika} alt={obj.naziv} style={{ width: '100%', height: '350px' }} />
            <div style={{ padding: '10px' }}>
              <h3>{obj.naziv}</h3>
              <p>{obj.opis}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </motion.div>
  );
}




export default Home;
