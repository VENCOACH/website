import styles from './mainContent.module.scss';

export default function MainContent({sectionContentData}) {

    const {
      titleFirstSlice = {},
      spanInTitle = {},
      titleSecondSlice = {},
      paragraph = {},
      ctaButttonText = {}
    } = sectionContentData.fields;
  
    const { container, btnPrimary, deco_moon, woman_white, woman_gray } = styles;

    return (
      <div className={container}>
        <h1>
          {titleFirstSlice}<span>{` ${spanInTitle} `}</span> {titleSecondSlice}
        </h1>
        <img className={deco_moon} src="img/media-luna.png" />
        <img className={woman_gray} src="img/people-hero2.png" alt="people" />
        <p>
          {paragraph}
        </p>
        <button className={btnPrimary}>{ctaButttonText}</button>
      </div>
    );
}