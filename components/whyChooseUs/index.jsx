import InfoBlock from "../infoBlock";
import styles from './whyChooseUs.module.scss';
import Image from 'next/image';
import useWindowSize from "../../hooks/useWindowSize";

export default function WhyChooseUs({sectionContentData}) {

  const {
    rightImage: {
        fields: {
            file: {
                url: rightImg_url,
            }
        }
    },
    title,
    subtitle,
    paragraph,
    paragraphSecond,
  } = sectionContentData.fields

  const { rightImage, container, leftSide, circleDiagram, imageSmallScreens} = styles;

  const size = useWindowSize();

  return (
    <div className={container}>
        <aside className={leftSide}>
            <InfoBlock
            titleText={title}
            subtitleText={subtitle}
            paragraphText={paragraph}
            paragraphText_second={paragraphSecond}
            fromComponent={'WhyChooseUs'}
            />
            <img className={circleDiagram} src="img/cursos-coaching.png" alt="cursos-coaching" />
        </aside>
        <aside>
            <div className={rightImage}>
            {size.width > 770 ?
                <Image 
                    src={`https:${rightImg_url}`} 
                    layout="fill"
                    alt="coaching-integral"
                /> :
                <img alt="coaching-integral" className={imageSmallScreens} src='img/profesionales-coaching.jpg' /> //connect to contentful and make a next component image
            }
            </div>
        </aside>
    </div>
  );
}
