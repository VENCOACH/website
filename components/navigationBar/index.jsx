import { useState, useEffect } from 'react';
import styles from './navigationBar.module.scss';
import {Link} from 'react-scroll';
import SocialIcons from '../socialIcons';

export default function NavigationBar({data}) {

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
    <nav className={`${wrapper} ${hideNavBar ? hide :""}`} >
      <section className={`${upperSection}`} >
        <div className={contentBox}>
          <div className={address}>
            <img src="img/icon-location.png" alt="" />
            <address>Marcaibo, Venezuela</address>
          </div>
          <div className={rightSide}>
            <div className={phone}>
              <img src="img/icon-phone.png" alt="" />
              <p>...</p>
            </div>
            <div className={email}>
              <img src="img/icon-email.png" alt="" />
              <p>contacto@vencoach.org</p>
            </div>
            <SocialIcons/>
          </div>
        </div>
      </section>
      <section className={`${bottomSection} ${hideContactBar ? top : ""}`}>
        <div className={contentBox}>
          <figure>
            <img src="img/logo.png" alt="Vencoach Logo" />
          </figure>
          <ul>
           {data.links && data.links.map((link,index) => (
              <li key={index}>
                  <Link  
                      to={link.href}
                      spy={true} 
                      smooth={true} 
                      offset={parseInt(link.offset) || 0} 
                      duration={parseInt(link.duration) || 500}
                  >
                      {link.linkTitle}
                  </Link>
              </li>
            ))}
          </ul>
          <button>Contactar</button>
        </div>
      </section>
    </nav>
  );
}
