import { slide as Menu } from 'react-burger-menu';
import styles from './mobileNavigationBar.module.scss';
import useWindowSize from '../../hooks/useWindowSize';
import {Link as Scroll, animateScroll} from 'react-scroll';
import navMenuData from '../../data/navMenuData.json';
import Link from 'next/link';
import {useEffect, useCallback,useState } from 'react';



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

      let pageLocation;

      useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        pageLocation = window.location.href;
        if(pageLocation.includes("servicios")) {
          setOnServicePage(true);
        } else {
          setOnServicePage(false);
        }
      })

    const [onServicePage, setOnServicePage] = useState(false)


      const handleNavigationScroll =(e)=> {
            
        switch (e.target.id) {
          case "navigationTop":
            animateScroll.scrollToTop();
            break;
          case "b-AboutSectionLayout":
            animateScroll.scrollTo('700');
            break;
          case "c-OurServicesSectionLayout":
            animateScroll.scrollTo('2100');
            break;
          case "d-WhyChooseUsSectionLayout":
            animateScroll.scrollTo('2850');
            break;
          case "e-TeamMembers":
            animateScroll.scrollTo('3600');
            break;
          case "f-SpecializedInSectionLayout":
            animateScroll.scrollTo('4500');
            break;
          case "g-testimonials":
            animateScroll.scrollTo('5000');
            break;
        }
      }
      
        
  return (
    <div className={contentBox}>
      <img  className={logo} src="img/logo.png" alt="logo" />
      <Menu styles={menuStyles} right noOverlay width={"50vw"} >
        <ul className={menuItems}>
        { links && !onServicePage ?
          <>
            <li>
            <Scroll
              to={links[0].href}
              spy={true}
              smooth={true}
              offset={parseInt(links[0].offset)}
              duration={parseInt(links[0].duration)}
            >
                {links[0].linkTitle}
            </Scroll>
          </li>
          <li>
            <Scroll
              to={links[1].href}
              spy={true}
              smooth={true}
              offset={parseInt(links[1].offset)}
              duration={parseInt(links[1].duration)}
            >
                {links[1].linkTitle}
            </Scroll>
          </li>
          <li>
            <Scroll
              to={links[2].href}
              spy={true}
              smooth={true}
              offset={parseInt(links[2].offset)}
              duration={parseInt(links[2].duration)}
            >
                {links[2].linkTitle}
            </Scroll>
          </li>
          <li>
            <Scroll
              to={links[3].href}
              spy={true}
              smooth={true}
              offset={parseInt(links[3].offset)}
              duration={parseInt(links[3].duration)}
            >
                {links[3].linkTitle}
            </Scroll>
          </li>
          <li>
            <Scroll
              to={links[4].href}
              spy={true}
              smooth={true}
              offset={parseInt(links[4].offset)}
              duration={parseInt(links[4].duration)}
            >
                {links[4].linkTitle}
            </Scroll>
          </li>
          <li>
            <Scroll
              to={links[5].href}
              spy={true}
              smooth={true}
              offset={parseInt(links[5].offset)}
              duration={parseInt(links[5].duration)}
            >
                {links[5].linkTitle}
            </Scroll>
          </li>
          </>
          :
          <>
            <li>
              <Link href="/">
                <a onClick={(e)=>handleNavigationScroll(e)} id={links[0].href}>
                  {links[0].linkTitle}
                </a>
            </Link>
            </li>
            <li>
              <Link href="/">
                <a onClick={(e)=>handleNavigationScroll(e)} id={links[1].href}>
                  {links[1].linkTitle}
                </a>
               </Link>
            </li>
            <li>
              <Link href="/">
                <a onClick={(e)=>handleNavigationScroll(e)} id={links[2].href}>
                  {links[2].linkTitle}
                </a>
               </Link>
            </li>
            <li>
              <Link href="/">
                <a onClick={(e)=>handleNavigationScroll(e)} id={links[3].href}>
                  {links[3].linkTitle}
                </a>
               </Link>
            </li>
            <li>
              <Link href="/">
                <a onClick={(e)=>handleNavigationScroll(e)} id={links[4].href}>
                  {links[4].linkTitle}
                </a>
               </Link>
            </li>
            <li>
              <Link href="/">
                <a onClick={(e)=>handleNavigationScroll(e)} id={links[5].href}>
                  {links[5].linkTitle}
                </a>
               </Link>
            </li>
          </>
        }
        </ul>
      </Menu>
    </div>
  );
}
