import { slide as Menu } from 'react-burger-menu';
import styles from './mobileNavigationBar.module.scss';
import useWindowSize from '../../hooks/useWindowSize';

export default function MobileNavigationBar() {
    const size = useWindowSize();
    const {contentBox, menuItems, logo} = styles;
    const menuStyles = {
        bmBurgerButton: {
          position: 'absolute',
          width: `${size.width < 430 ? '30px' : '36px'}`,
          height: `${size.width < 430 ? '25px' : '30px'}`,
          right: `${size.width < 430 ? '16px' : '0px'}`,
          top: `${size.width < 430 ? '35px' : '36px'}`
        },
        bmBurgerBars: {
          background: '#1D4A92'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: '#1D4A92',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#fff',
          padding: '0.8em'
        },
        bmItem: {
            listStyleType: 'none',
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }
  return (
    <div className={contentBox}>
      <img  className={logo} src="img/logo.png" alt="logo" />
      <Menu styles={menuStyles} right noOverlay width={"50vw"} >
        <u className={menuItems}>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Logros</a></li>
          <li><a href="#">Equipo</a></li>
          <li><a href="#">Testimonios</a></li>
          <li><a href="#">Contactar</a></li>
        </u>
      </Menu>
    </div>
  );
}
