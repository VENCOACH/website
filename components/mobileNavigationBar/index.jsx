import { slide as Menu } from 'react-burger-menu';
import styles from './mobileNavigationBar.module.scss';
import useWindowSize from '../../hooks/useWindowSize';
import {Link} from 'react-scroll';
import navMenuData from '../../data/navMenuData.json';

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
      const links = navMenuData.mobileLinks;
  return (
    <div className={contentBox}>
      <img  className={logo} src="img/logo.png" alt="logo" />
      <Menu styles={menuStyles} right noOverlay width={"50vw"} >
        <ul className={menuItems}>
          <li>
          { links &&  
            <Link
              to={links[0].href}
              spy={true}
              smooth={true}
              offset={parseInt(links[0].offset)}
              duration={parseInt(links[0].duration)}
            >
                {links[0].linkTitle}
            </Link>}
          </li>
          <li>
            <Link
              to={links[1].href}
              spy={true}
              smooth={true}
              offset={parseInt(links[1].offset)}
              duration={parseInt(links[1].duration)}
            >
                {links[1].linkTitle}
            </Link>
          </li>
          <li>
            <Link
              to={links[2].href}
              spy={true}
              smooth={true}
              offset={parseInt(links[2].offset)}
              duration={parseInt(links[2].duration)}
            >
                {links[2].linkTitle}
            </Link>
          </li>
          <li>
            <Link
              to={links[3].href}
              spy={true}
              smooth={true}
              offset={parseInt(links[3].offset)}
              duration={parseInt(links[3].duration)}
            >
                {links[3].linkTitle}
            </Link>
          </li>
          <li>
            <Link
              to={links[4].href}
              spy={true}
              smooth={true}
              offset={parseInt(links[4].offset)}
              duration={parseInt(links[4].duration)}
            >
                {links[4].linkTitle}
            </Link>
          </li>
        </ul>
      </Menu>
    </div>
  );
}
