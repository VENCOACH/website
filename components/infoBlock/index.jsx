import styles from './infoBlock.module.scss';

export default function infoBlock({titleText, subtitleText, paragraphText='', _center=false}) {

  const {container, subtitle, title, paragraph, paragraphWrapper, center} = styles;

  return (
    <div className={`${container} ${_center ? center : ''}`} >
        <div className={`${subtitle} ${_center ? center : ''}`}>
          <img src="img/vineta.png" alt="" />
          <h3> {subtitleText} </h3>
        </div>
        <h2 className={title}>{titleText}</h2>
        <div className={paragraphWrapper}>
          <p className={paragraph}>{paragraphText}</p>
        </div>
    </div>
  )
}
