import styles from './mainContent.module.scss';

export default function MainContent({sectionContentData}) {

    const {
      titleFirstSlice = {},
      spanInTitle = {},
      titleSecondSlice = {},
      paragraph = {},
      ctaButttonText = {}
    } = sectionContentData.fields;
  
    const { container, btnPrimary, deco_moon, deco_moon__front, main_people } = styles;

    return (
      <div className={container}>
        <h1>
          {titleFirstSlice}<span>{` ${spanInTitle} `}</span> {titleSecondSlice}
        </h1>
        <img className={deco_moon} src="img/media-luna.png" alt=""/>
        <img className={deco_moon__front} src="img/decorative-halfmoon-front.png" alt="" />
        <img className={main_people} src="img/main.png" alt="people" />
        <p>
          {paragraph}
        </p>
        <button className={btnPrimary}>{ctaButttonText}</button>
      </div>
    );
}