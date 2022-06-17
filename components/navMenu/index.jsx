import styles from './navMenu.module.scss';
import {Link} from 'react-scroll';

export default function NavMenu({data}) {
    const {navText, container, titleText, content, linkItem, noBullets, listMenu, listItem } = styles;
    return (
    <div className={container}>
        <h2 className={titleText}>{data.title}</h2>
        <div className={content}>
            {data.text && <p className={navText}>{data.text}</p>}
            <ul className={`${data.customBullets ? noBullets : ""} ${listMenu}`}>
                {data.links && data.links.map((link,index) => (
                    <li className={listItem} key={index}>
                        <Link  
                            to={link.href || "navigationTop"}
                            spy={true} 
                            smooth={true} 
                            offset={parseInt(link.offset)} 
                            duration={parseInt(link.duration)}
                            className={linkItem}
                        >
                            {link.linkTitle}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* {data.socialcons && <SocialIcons/>} */}
        </div>
    </div>
  )
}
