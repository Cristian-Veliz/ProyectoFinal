import React from 'react';
import imgLanding from '../../assets/Landing.png'
import NavBarLanding from '../Landing/NavBarLanding/NavBarLanding';
import style from './Landing.module.css'

function Landing() {
  return (
    <div>
      <div className={style.navbar}>
        <NavBarLanding />
      </div>

      <div className={style.landing}>
        <div className={style.imageContainer}>
          <img src={imgLanding} alt="Muebles y Accesorios" />
          <h1 className={style.centeredText}>Muebles & Accesorios!  </h1>
          <h2 className={style.centered}> Make your interior, more minimalistic</h2>
        </div>
      </div>

      <div className={style.carousel}>
        {/* Agrega tu carrusel de productos destacados aquí */}
      </div>
    </div>
  );
}

export default Landing;
