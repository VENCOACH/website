import styles from './infoBlock.module.scss';

export default function infoBlock({titleText, subtitleText, paragraphText}) {

  const {container, subtitle, title, paragraph, paragraphWrapper} = styles;

  return (
    <div className={container}>
        <div className={subtitle}>
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
