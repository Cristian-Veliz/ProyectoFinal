import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import LogoNav from '../../assets/LogoNav.jpg';


const NavBarLanding = () => {
  

  return (
    <div className={style.mainContainer}>
      <nav className={style.navbar}>
        <div>
        <div className={style.logo}>
          <Link to="/about">
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
        
        </div>
      </nav>
    </div>
  );
};

export default NavBarLanding;