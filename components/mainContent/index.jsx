import styles from './mainContent.module.scss';

export default function MainContent({sectionContentData}) {

    const {
      titleFirstSlice = {},
      spanInTitle = {},
      titleSecondSlice = {},
      paragraph = {},
      ctaButttonText = {}
    } = sectionContentData.fields;
  
    const { container, btnPrimary, deco_moon, deco_moon__front, woman_gray } = styles;

    return (
      <div className={container}>
        <h1>
          {titleFirstSlice}<span>{` ${spanInTitle} `}</span> {titleSecondSlice}
        </h1>
        <img className={deco_moon} src="img/media-luna.png" alt=""/>
        <img className={woman_gray} src="img/people-hero2.png" alt="people" />
        <img className={deco_moon__front} src="img/decorative-halfmoon-front.png" alt="" />
        <p>
          {paragraph}
        </p>
        <button className={btnPrimary}>{ctaButttonText}</button>
      </div>
    );
}