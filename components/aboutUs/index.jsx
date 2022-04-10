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
    }
  } = sectionContentData.fields

  const { container, rightAside, leftAside, image01, image02, circle, experience, decoLine } = styles;

  return (
    <div className={container}>
        <aside className={rightAside}>
          <InfoBlock/>  
          <MiniCard/>  
          <img src="img/separator.png" alt="" className={decoLine}/>
          <MiniCard/>
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
