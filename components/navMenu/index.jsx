import styles from './navMenu.module.scss';
import Link from 'next/link';
import {Link as Scroll} from 'react-scroll';
import SocialIcons from '../socialIcons';
import useWindowSize from '../../hooks/useWindowSize';
import {useEffect, useState} from 'react';

export default function NavMenu({data, onServicePage, handleNavigationScroll}) {

    const {navText, container, titleText, content, linkItem, noBullets, listMenu, listItem, icon } = styles;
    const size = useWindowSize();
    return (
      <div
        className={container}
        style={data.customStyles ? data.customStyles.container : null}
      >
        <h2 className={titleText}>{data.title}</h2>
        <div className={content}>
          {data.text && <p className={navText}>{data.text}</p>}
          <ul
            className={`${data.customBullets ? noBullets : ""} ${listMenu}`}
            style={data.customStyles ? data.customStyles.ul : null}
          >
            {data.links &&
              data.links.map((link, index) => (
                <li className={listItem} key={index}>
                  {onServicePage ?
                  <Link href="/">
                    <a
                      className={linkItem}
                      id={link.href}
                      onClick={(e)=>handleNavigationScroll(e)}
                    >
                      {data.customBullets && link.iconName && (
                        <img
                          className={icon}
                          style={{ width: `${link.size}px` }}
                          src={`img/${link.iconName}`}
                          alt=""
                        />
                      )}
                      {link.linkTitle}
                    </a>
                  </Link>
                  : <Scroll
                    to={link.href || "#"}
                    spy={true}
                    smooth={true}
                    offset={size.width < 570 ? parseInt(link.offset?.mobile) : parseInt(link.offset?.desktop)}
                    duration={parseInt(link.duration)}
                    className={linkItem}
                  >
                    {data.customBullets && link.iconName && (
                      <img
                        className={icon}
                        style={{ width: `${link.size}px` }}
                        src={`img/${link.iconName}`}
                        alt=""
                      />
                    )}
                    {link.linkTitle}
                  </Scroll>
                  }
                </li>
              ))}
          </ul>
          {data.socialIcons && <SocialIcons />}
        </div>
      </div>
    );
}

function componentSpecial () {
  const aurora = [];
  if (param) {
      
  }
}
