import Image from 'next/image';
import cityBackground from '../../public/img/cityBackground.png';
import style from './section.module.sass';

export default function Section() {

  const { contentBox, backgroundImg } = style
  return (
      <section className={backgroundImg}>
        <Image
            src={cityBackground}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            priority
            quality={100}
            placeholder="blur"
          />
        <div className={contentBox}>
        </div>
      </section>
  )
}
