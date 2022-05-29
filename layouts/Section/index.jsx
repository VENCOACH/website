import Image from 'next/image';
import style from './section.module.scss';
import ContentSlot from '../../utils/ContentSlot';

export default function Section({ sectionData }) {

  const { contentBox, backgroundImg } = style

  const {
    entryTitle,
    parameters:{
      stylesParam:{
        bgimg,
        height:sectionHeight,
      }={}
    }={},
    backgroundImage: {
      fields: {
        file: {
          url:imgUrl,
        }={}
      }={}
    }={}  
  } = sectionData.fields

  const sectionGeneralStyle = {
    height: sectionHeight, 
  }

  return (
      <section className={`${backgroundImg} ${entryTitle}`} style={sectionGeneralStyle}>
        {bgimg === 'true' &&
          <Image
          src={`https:${imgUrl}`}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          quality={100}
          priority
          />
        }
        <div className={contentBox}>
          {ContentSlot.getComponent(entryTitle, sectionData)}
        </div>
      </section>
  )
}
