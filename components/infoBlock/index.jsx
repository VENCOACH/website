import styles from './infoBlock.module.scss';

export default function infoBlock() {

  const {container, subtitle} = styles;

  return (
    <div className={container}>
        <div className={subtitle}>
          <img src="img/vineta.png" alt="" />
          <h3> ACERCA DE VENCOACH </h3>
        </div>
        <h2>PIONEROS EN EL COACHING EMPRESARIAL</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec venenatis justo. Sed varius molestie tellus, et volutpat enim ullamcorper non. Integer rutrum pharetra posuere. Nam non luctus erat. Mauris a rutrum nisl. Nam finibus urna ac facilisis lentesque. Praesent nec quam enim. In at erat lectus. Proin pellentesque hendrerit tempor. Fusce rhoncus tempus malesuada. </p>
    </div>
  )
}
