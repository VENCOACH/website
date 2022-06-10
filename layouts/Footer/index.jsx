import styles from './footer.module.scss';

export default function Footer() {

  const { container, contentBox, decoImage, footerEnd } = styles;
  
  return (
    <div className={container}>
      <div className={contentBox}>
      </div>
      <div className={footerEnd}>
      </div>
      <img className={decoImage} src='img/deco-polygons.png' alt=''/>
    </div>
  )
}