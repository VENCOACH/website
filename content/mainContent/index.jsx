import styles from './mainContent.module.scss';

export default function MainContent() {
    
    const { container, btnPrimary, deco_moon, woman_white, woman_gray } = styles;

    return (
      <div className={container}>
        <h1>
          SOMOS PROFESIONALES EN <span>COACHING</span> PERSONAL Y EMPRESARIAL
        </h1>
        <img className={deco_moon} src="img/media-luna.png" />
        <img className={woman_white} src="img/people-hero.png" alt="people" />
        <img className={woman_gray} src="img/people-hero2.png" alt="people" />
        <p>
          Mas de 20 años trabajando de la mano de grandes profesionales, al
          servicio de una mejor gestión.
        </p>
        <button className={btnPrimary}>Empezar!</button>
      </div>
    );
}