import React, { useEffect, useState } from 'react';

function ScrollToTop() {
  const [vidljivo, setVidljivo] = useState(false);

  useEffect(() => {
    const provjeraScrolla = () => {
      if (window.scrollY > 300) setVidljivo(true);
      else setVidljivo(false);
    };
    window.addEventListener('scroll', provjeraScrolla);
    return () => window.removeEventListener('scroll', provjeraScrolla);
  }, []);

  const scrollNaVrh = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!vidljivo) return null;

  return (
    <button
      onClick={scrollNaVrh}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        padding: '10px',
        backgroundColor: 'var(--accent-color)',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      ⬆️ Na vrh
    </button>
  );
}

export default ScrollToTop;
