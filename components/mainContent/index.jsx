import styles from './mainContent.module.scss';
import {Link} from 'react-scroll';
import useWindowSize from '../../hooks/useWindowSize';

export default function MainContent({sectionContentData}) {

    const {
      titleFirstSlice = {},
      spanInTitle = {},
      titleSecondSlice = {},
      paragraph = {},
      ctaButttonText = {}
    } = sectionContentData.fields;

    const size = useWindowSize();
  
    const { ctaLink ,container, btnPrimary, deco_moon, deco_moon__front, main_people } = styles;

    return (
      <section className={container} id="navigationTop">
        <h1>
          {titleFirstSlice}<span>{` ${spanInTitle} `}</span> {titleSecondSlice}
        </h1>
        <img className={deco_moon} src="img/media-luna.png" alt=""/>
        <img className={deco_moon__front} src="img/decorative-halfmoon-front.png" alt="" />
        <img className={main_people} src="img/vencoach.png" alt="people" />
        <p>
          {paragraph}
        </p>
        <Link
          to={'f-SpecializedInSectionLayout'}
          offset={size.width > 790 ? -80 : -0}
          duration={1000}
          spy={true}
          smooth={true}
          className={ctaLink}
        >
          {ctaButttonText}
        </Link>
        </section>
    );
}