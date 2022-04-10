import styles from './miniCard.module.scss';

export default function MiniCard({cardTitle, cardParagraph, imgSrc}) {

  const {container, rightSide, leftSide} = styles;

  return (
    <div className={container}>
      <div className={leftSide}>
        <img src={imgSrc} alt="" />
      </div>
      <div className={rightSide}>
        <h4>{cardTitle}</h4>
        <p>
          {cardParagraph}
        </p>
      </div>
    </div>
  );
}
