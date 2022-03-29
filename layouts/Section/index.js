import Image from 'next/image';
import style from './section.module.sass';
import ContentSlot from '../../utils/ContentSlot';

export default function Section({ name, height, bgimg, src}) {

  const { contentBox, backgroundImg } = style

  const sectionStyle = {
    height, 
    width: '100vw'
  }
  return (
      <section className={backgroundImg} style={sectionStyle}>
        {bgimg &&
          <Image
          src={src}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          priority
          quality={100}
          placeholder="blur"
          />
        }
        <div className={contentBox}>
          {ContentSlot.getComponent(name)}
        </div>
      </section>
  )
}
