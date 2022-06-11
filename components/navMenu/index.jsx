import styles from './navMenu.module.scss';
import {Link, animateScroll as scroll} from 'react-scroll';

export default function NavMenu({data}) {
    const { container, titleText, content, linkItem, noBullets } = styles;
    return (
    <div className={container}>
        <h2 className={titleText}>{data.title}</h2>
        <div className={content}>
            {data.text && <p>{data.text}</p>}
            <ul className={data.customBullets ? noBullets : ""}>
                {data.links && data.links.map((link,index) => (
                    <li key={index}>
                        <Link  
                            to={link.href || "navigationTop"}
                            spy={true} 
                            smooth={true} 
                            offset={parseInt(link.offset) || 0} 
                            duration={500}
                            className={linkItem}
                        >
                            {link.linkTitle}
                        </Link>
                    </li>
                ))}
            </ul>
            {data.socialcons && <SocialIcons/>}
        </div>
    </div>
  )
}
