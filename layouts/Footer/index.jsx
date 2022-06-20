import styles from './footer.module.scss';
import NavMenu from '../../components/navMenu';
import menuData from "../../data/menus.json"
import {Link} from 'react-scroll';

export default function Footer() {

  const { bannerFooter ,container, contentBox, decoImage, footerEnd, wrapper,logo, text, contentWrapper} = styles;
  
  return (
    <footer className={container}>
      <div className={bannerFooter}>
        <img src='img/banner_newsletter_background.png' className={bannerFooter} alt='' />
      </div>
      <img className={decoImage} src='img/deco-polygons.png' alt=''/>
      <nav className={contentBox}>
        <div className={wrapper}>
          {menuData.footer.map((menu, index)=>(
            <NavMenu key={index} data={menu} />
          ))}
        </div>
      </nav>
      <div className={footerEnd}>
        <div className={contentWrapper}>
          <figure>
            <img className={logo} src="img/logo.png" alt="Vencoach Logo" />
          </figure>
          <p className={text}>Copyright © 2022, <span>Vencoach</span>. All rights Reserved. </p>
          <Link
            to={'navigationTop'}
            offset={-200}
            duration={1000}
            spy={true}
            smooth={true}
          >
            <img src={'img/subir.png'} alt='' />            
          </Link>
        </div>
      </div>
    </footer>
  )
}