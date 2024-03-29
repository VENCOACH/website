import styles from './aboutUs.module.scss';
import InfoBlock from '../infoBlock';
import MiniCard from '../miniCard';
import Image from 'next/image';


export default function AboutUs({sectionContentData}) {

  const {
    image01:{
      fields:{
        file:{
          url,
        }
      }
    },
    image02:{
      fields:{
        file:{
          url: url2,
        }
      }
    },
    title,
    subtitle,
    paragraph,
    cardTitle01,
    cardTitle02,
    cardTitle03,
    cardParagraph01,
    cardParagraph02,
    cardParagraph03,
  } = sectionContentData.fields

  const { container, rightAside, leftAside, image01, image02, circle, experience, decoLine } = styles;

  return (
    <div className={container}>
        <aside className={rightAside}>
          <InfoBlock titleText={title} subtitleText={subtitle} paragraphText={paragraph} fromComponent={'aboutUs'}/>  
          <MiniCard cardTitle={cardTitle01} cardParagraph={cardParagraph01} imgSrc={"img/Icon Innovation.png"} />  
          <img src="img/separator.png" alt="" className={decoLine}/>
          <MiniCard cardTitle={cardTitle02} cardParagraph={cardParagraph02} imgSrc={"img/Icon-target.png"} />
          <img src="img/separator.png" alt="" className={decoLine}/>
          <MiniCard cardTitle={cardTitle03} cardParagraph={cardParagraph03} imgSrc={"img/Icon-target.png"} />
        </aside>
        <aside className={leftAside}>
          <img src='img/decorative-circle.png' alt='' className={circle}/>
          <div className={image02}>
              <Image
                  src={`https:${url2}`}
                  layout='fill'
                  alt="coaches-formacion"
              />
          </div>
          <div className={image01}>
            <Image
                src={`https:${url}`}
                layout='fill'
                alt="coaches-profesionales"
            />
          </div>
          <img src="img/coaching-con-experiencia.png" alt="mas de 20 años de experiencia en coaching" className={experience} />
        </aside>
    </div>
  )
}
