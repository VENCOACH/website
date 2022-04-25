import styles from './serviceCard.module.scss';
import Image from 'next/image';

export default function ServiceCard({url, title,  paragraph}) {

  const {container, iconImage} = styles;

  return (
    <div className={container}>
        <div className={iconImage}>
            <Image
                src={`https:${url}`}
                layout='fill'
                quality={100}
            />
        </div>
        <h4>{title}</h4>
        <p>{paragraph}</p>
    </div>
  )
}
