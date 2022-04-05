import styles from './mainContent.module.sass';

export default function MainContent() {
    
    const { grid } = styles;

    return (
      <div className={grid}>
        <h1>
          SOMOS PROFESIONALES EN <span>COACHING</span> PERSONAL Y EMPRESARIAL
        </h1>
        <img src="img/people-hero.png" alt="people" />
        {/* <p>
          Mas de 20 años trabajando de la mano de grandes profesionales, al
          servicio de una mejor gestión.
        </p> */}
      </div>
    );
}