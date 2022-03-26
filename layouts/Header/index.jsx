import style from './header.module.sass'

export default function Header() {

  const {container} = style;

  return (
    <div className={container}>
      Este es el header
    </div>
  )
}