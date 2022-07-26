import styles from './ourServices.module.scss';
import InfoBlock from '../infoBlock';
import ServiceCard from '../serviceCard';
import useWindowSize from '../../hooks/useWindowSize';
import Link from 'next/link';

export default function OurServices({sectionContentData}) {


  const {
    sectionTitle,
    sectionSubtitle,
    cardIcon01:{
      fields:{
        file:{
          url:url01,
        }
      }
    },
    cardTitle01,
    cardParagraph01,
    cardIcon02:{
      fields:{
        file:{
          url:url02,
        }
      }
    },
    cardTitle02,
    cardParagraph02,
    cardIcon03:{
        fields:{
          file:{
            url:url03,
          }
        }
      },
      cardTitle03,
      cardParagraph03,
      cardIcon04:{
        fields:{
          file:{
            url:url04,
          }
        }
      },
      cardTitle04,
      cardParagraph04,
      cardIcon05:{
        fields:{
          file:{
            url:url05,
          }
        }
      },
      cardTitle05,
      cardParagraph05,
      cardIcon06:{
        fields:{
          file:{
            url:url06,
          }
        }
      },
      cardTitle06,
      cardParagraph06,
  } = sectionContentData.fields

  const { container, cards } = styles;

  const size = useWindowSize();

  return (
    <div className={container}>
        <InfoBlock titleText={sectionTitle} subtitleText={sectionSubtitle} _center={true} />
        <div className={cards}>
            <a href="https://mailchi.mp/1f0c6ad731fb/certificacioncoachingintegralinternacional" target={"__blank"} rel={"noreferrer"}>
              <ServiceCard url={url01} title={cardTitle01} paragraph={cardParagraph01}/>
            </a>
            <Link href="/servicios">
              <a>
                <ServiceCard url={url02} title={cardTitle02} paragraph={cardParagraph02}/>
              </a>
            </Link>
            <ServiceCard url={url03} title={cardTitle03} paragraph={cardParagraph03}/>
            {size.width > 570 && 
            <>
              <ServiceCard url={url04} title={cardTitle04} paragraph={cardParagraph04}/>
              <ServiceCard url={url05} title={cardTitle05} paragraph={cardParagraph05}/>
              <ServiceCard url={url06} title={cardTitle06} paragraph={cardParagraph06}/>
            </>
            }

        </div>
    </div>
  )
}
