import styles from './aboutUs.module.scss';
import InfoBlock from '../infoBlock';
import MiniCard from '../miniCard';
import Image from 'next/image';


export default function AboutUs({sectionContentData}) {

  console.log(sectionContentData);

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
    cardParagraph01,
    cardParagraph02,
  } = sectionContentData.fields

  const { container, rightAside, leftAside, image01, image02, circle, experience, decoLine } = styles;

  return (
    <div className={container}>
        <aside className={rightAside}>
          <InfoBlock titleText={title} subtitleText={subtitle} paragraphText={paragraph}/>  
          <MiniCard cardTitle={cardTitle01} cardParagraph={cardParagraph01} imgSrc={"img/Icon Innovation.png"} />  
          <img src="img/separator.png" alt="" className={decoLine}/>
          <MiniCard cardTitle={cardTitle02} cardParagraph={cardParagraph02} imgSrc={"img/Icon Target.png"} />
        </aside>
        <aside className={leftAside}>
          <img src='img/decorative-circle.png' alt='' className={circle}/>
          <div className={image02}>
              <Image
                  src={`https:${url2}`}
                  layout='fill'
                  priority
                  quality={100}
              />
          </div>
          <div className={image01}>
            <Image
                src={`https:${url}`}
                layout='fill'
                priority
                quality={100}
            />
          </div>
          <img src="img/card-experiencie-number.png" alt="years of experience" className={experience} />
        </aside>
    </div>
  )
}
