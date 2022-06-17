import styles from './footer.module.scss';
import NavMenu from '../../components/navMenu';
import menuData from "../../data/menus.json"

export default function Footer() {

  const { bannerFooter ,container, contentBox, decoImage, footerEnd, wrapper} = styles;
  
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
      </div>
    </footer>
  )
}