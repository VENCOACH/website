import { useState, useEffect } from 'react';
import styles from './navigationBar.module.scss';

export default function NavigationBar() {

  const {hide, top, wrapper, contentBox, upperSection, bottomSection, address, phone, rightSide, socialIcons, email} = styles;

  const [hideContactBar, setHideContactBar] = useState(false)
  const [hideNavBar, setHideNavBar] = useState(false)

  const toggleContactsBar = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 20) {
      setHideContactBar(true)
      if (window.scrollY >= 6200) {
        setHideNavBar(true);
      } else if (window.scrollY <= 6200) {
        setHideNavBar(false);        
      }
    } else {
      setHideContactBar(false);
    }

  }

  useEffect(() => {
    window.addEventListener('scroll', toggleContactsBar);
    return () => {
      window.removeEventListener('scroll',toggleContactsBar);
    }
  }, [])
  
  
  return (
    <nav className={`${wrapper} ${hideNavBar ? hide :""}`} id="navigationTop">
      <section className={`${upperSection}`}>
        <div className={contentBox}>
          <div className={address}>
            <img src="img/icon-location.png" alt="" />
            <address>Calle 72 , av 10 .Edif Las americas,</address>
          </div>
          <div className={rightSide}>
            <div className={phone}>
              <img src="img/icon-phone.png" alt="" />
              <p>+54 0424 6138945</p>
            </div>
            <div className={email}>
              <img src="img/icon-email.png" alt="" />
              <p>info@vencoach.org</p>
            </div>
            <div className={socialIcons}>
              <img src="img/icon-facebook.png" alt="" />
              <img src="img/icon-twitter.png" alt="" />
              <img src="img/icon-instagram.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className={`${bottomSection} ${hideContactBar ? top : ""}`}>
        <div className={contentBox}>
          <figure>
            <img src="img/logo.png" alt="Vencoach Logo" />
          </figure>
          <ul>
            <li>
              <a>Nosotros</a>
            </li>
            <li>
              <a>Servicios</a>
            </li>
            <li>
              <a>Logros</a>
            </li>
            <li>
              <a>Equipo</a>
            </li>
            <li>
              <a>Testimonios</a>
            </li>
          </ul>
          <button>Contactar</button>
        </div>
      </section>
    </nav>
  );
}
