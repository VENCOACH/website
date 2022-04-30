import styles from './infoBlock.module.scss';

export default function infoBlock({titleText, subtitleText, paragraphText='', _center=false, p_wrapper_margin}) {

  const {container, subtitle, title, paragraph, paragraphWrapper, centerContainer, centerSubtitle, centerTitle} = styles;

  return (
    <div className={`${container} ${_center ? centerContainer : ''}`} >
        <div className={`${subtitle} ${_center ? centerSubtitle : ''}`}>
          <img src="img/vineta.png" alt="" />
          <h3> {subtitleText} </h3>
        </div>
        <h2 className={`${title} ${_center? centerTitle : ''}`}>{titleText}</h2>
        {paragraphText && 
        <div className={paragraphWrapper} style={{marginRight: p_wrapper_margin}}>
          <p className={paragraph}>{paragraphText}</p>
        </div>}
    </div>
  )
}
