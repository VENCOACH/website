import styles from './miniCard.module.scss';

export default function MiniCard() {

  const {container, rightSide, leftSide} = styles;

  return (
    <div className={container}>
      <div className={leftSide}>
        <img src="img/Icon Innovation.png" alt="Innovation Icon" />
      </div>
      <div className={rightSide}>
        <h4>Siempre Innovando</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec
          venenatis justo. Sed varius molestie tellus, et volutpat enim
        </p>
      </div>
    </div>
  );
}
