import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import LogoNav from '../../assets/LogoDivano.jpg';


import CardWidget from '../CardWidget/CardWidget';

import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { CartContext } from '../Context/CartContext';
import LoginGetUser from '../../views/Login/LoginGetUser';

const NavBar = ({ cantidadTotal, actualizarCantidadTotal }) => {
  const context = useContext(CartContext);
    const userData= useSelector((state) => state.user)

    const loginToShow = () => {
      context.openLogin();
    };
  return (
    <div className={style.mainContainer}>
      <nav className={style.navbar}>
        <div>
          <div className={style.logo}>
            <Link to="/">
              <img src={LogoNav} alt="logo" />
            </Link>
          </div>
          <div className={style.divLink}>
            <Link className={style.container} to="/home">
              Home
            </Link>
            <div className={style.divLink}>
              <Link className={style.container} to="/contact">
                Contact
              </Link>
            </div>
            <div className={style.divLink}>
              <Link className={style.container} to="/about">
                About
              </Link>
            </div>
            <div className={style.divLink}>
              <Link className={style.container} to="/orders">
                My Orders
              </Link>
            </div>
            <div className={style.divLink}>
              <Link className={style.container} to="/">
                Logout
              </Link>
            </div>
          </div>
          <nav>
            <div className={style.cartContainer}>
            <button className={style.divLink} onClick={loginToShow}>x</button>
              <CardWidget cantidadTotal={cantidadTotal} actualizarCantidadTotal={actualizarCantidadTotal} />
            </div>
          </nav>
        </div>
      </nav>
      <LoginGetUser/>
    </div>
  );
};

export default NavBar;
