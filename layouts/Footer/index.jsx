import styles from './footer.module.scss';
import NavMenu from '../../components/navMenu';
import menuData from "../../data/menus.json"

export default function Footer() {

  const { container, contentBox, decoImage, footerEnd } = styles;
  
  return (
    <footer className={container}>
      <div className={footerEnd}>
      </div>
      <img className={decoImage} src='img/deco-polygons.png' alt=''/>
      <nav className={contentBox}>
        {menuData.footer.map((menu, index)=>(
          <NavMenu key={index} data={menu} />
        ))}
      </nav>
    </footer>
  )
}