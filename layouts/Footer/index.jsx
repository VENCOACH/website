import styles from './footer.module.scss';
import NavMenu from '../../components/navMenu';
import menuData from "../../data/menus.json"
import {Link, animateScroll} from 'react-scroll';
import Newsletter from '../../components/newsletter';
import { useEffect, useState, useCallback } from 'react';
import useWindowSize from '../../hooks/useWindowSize';

export default function Footer() {

  const { bannerFooter ,container, contentBox, decoImage, footerEnd, wrapper,logo, text, contentWrapper} = styles;

  const size = useWindowSize();

  const handleNavigationScroll = useCallback(
  (e)=> {
      if (size.width > 760) {
        switch (e.target.id) {
          case "navigationTop":
            animateScroll.scrollToTop();
            break;
          case "b-AboutSectionLayout":
            animateScroll.scrollTo('800');
            break;
          case "c-OurServicesSectionLayout":
            animateScroll.scrollTo('1600');
            break;
          case "d-WhyChooseUsSectionLayout":
            animateScroll.scrollTo('2650');
            break;
          case "e-TeamMembers":
            animateScroll.scrollTo('3600');
            break;
          case "f-SpecializedInSectionLayout":
            animateScroll.scrollTo('4500');
            break;
          case "g-testimonials":
            animateScroll.scrollTo('5450');
            break;
        }
      } else {
        switch (e.target.id) {
          case "navigationTop":
            animateScroll.scrollToTop();
            break;
          case "b-AboutSectionLayout":
            animateScroll.scrollTo('680');
            break;
          case "c-OurServicesSectionLayout":
            animateScroll.scrollTo('2130');
            break;
          case "d-WhyChooseUsSectionLayout":
            animateScroll.scrollTo('2850');
            break;
          case "e-TeamMembers":
            animateScroll.scrollTo('3600');
            break;
          case "f-SpecializedInSectionLayout":
            animateScroll.scrollTo('4250');
            break;
          case "g-testimonials":
            animateScroll.scrollTo('5000');
            break;
        }
      }
    }
  ,[size.width])
  
  let pageLocation

  const [onServicePage, setOnServicePage] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    pageLocation = window.location.href;
    if(pageLocation.includes("servicios")) {
      setOnServicePage(true);
    } else {
      setOnServicePage(false);
    }
  })
  
  return (
    <footer className={container}>
      <div className={bannerFooter}>
        <Newsletter/>
      </div>
      <img className={decoImage} src='img/deco-polygons.png' alt=''/>
      <nav className={contentBox}>
        <div className={wrapper}>
          {menuData.footer.map((menu, index)=>(
            <NavMenu handleNavigationScroll={handleNavigationScroll} onServicePage={onServicePage} key={index} data={menu} />
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