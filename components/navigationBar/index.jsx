import { useState, useEffect, useCallback } from 'react';
import styles from './navigationBar.module.scss';
import {Link as Scroll, animateScroll} from 'react-scroll';
import SocialIcons from '../socialIcons';
import useWindowSize from '../../hooks/useWindowSize';
import Link from 'next/link';

export default function NavigationBar({data}) {

  const {hide, top, wrapper, contentBox, upperSection, bottomSection, address, phone, rightSide, socialIcons, email} = styles;
  const size = useWindowSize();
  const [hideContactBar, setHideContactBar] = useState(false)
  const [hideNavBar, setHideNavBar] = useState(false)

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

    const [onServicePage, setOnServicePage] = useState(false)
  
  return (
    <nav className={`${wrapper} ${hideNavBar ? hide :""}`} >
      <section className={`${upperSection}`} >
        <div className={contentBox}>
          <div className={address}>
            <img src="img/icon-location.png" alt="" />
            <address>Maracaibo, Venezuela</address>
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
          <figure style={{cursor:"pointer"}} onClick={()=>{animateScroll.scrollToTop()}}>
            <img src="img/logo.png" alt="Vencoach Logo" />
          </figure>
          <ul>
           {data.links && data.links.map((link,index) => (
            !onServicePage ?
              <li key={index}>
                <Scroll  
                    to={link.href}
                    spy={true} 
                    smooth={true} 
                    offset={parseInt(link.offset) || 0} 
                    duration={parseInt(link.duration) || 500}
                >
                    {link.linkTitle}
                </Scroll>
              </li> 
              :
              <li key={index}>
                <Link  href="/" scroll={false}>
                  <a onClick={(e)=>handleNavigationScroll(e)} id={link.href}>
                    {link.linkTitle}
                  </a>
                </Link>
              </li> 
            ))}
          </ul>
            <a target={"_blank"} href={`https://api.whatsapp.com/send?phone=584246265463&text=Hola!%20Quisiera%20informacion%20de%20sus%20certificaciones`} rel={"noreferrer"}>
              <button>
                Contactar
              </button>
            </a>
        </div>
      </section>
    </nav>
  );
}
