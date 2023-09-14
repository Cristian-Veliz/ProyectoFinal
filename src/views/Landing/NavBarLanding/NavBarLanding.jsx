import { Link } from 'react-router-dom';
import style from './NavBar.module.css';


const NavBarLanding = () => {
  

  return (
    <div className={style.mainContainer}>
      <nav className={style.navbar}>
        <div>
          <div className={style.divLink}>
            <Link className={style.container} to="/productos">
              Products
            </Link>
            <div className={style.divLink}>
              <Link className={style.container} to="/contacto">
                Contact
              </Link>
            </div>
            <div className={style.divLink}>
              <Link className={style.container} to="/about">
                About
              </Link>
            </div>
            <div className={style.divLink}>
              <Link className={style.container} to="/login">
                Login
              </Link>
            </div>
          </div>
        
        </div>
      </nav>
    </div>
  );
};

export default NavBarLanding;