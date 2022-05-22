import styles from './specializedIn.module.scss';
import InfoBlock from "../infoBlock";
import Image from 'next/image';
import useWindowSize from '../../hooks/useWindowSize';

export default function SpecializedIn({sectionContentData}) {

    const {
        leftImage: {
            fields: {
                file: {
                    url: leftImg_url,
                }
            }
        },
        title,
        subtitle,
        paragraph,
        paragraphSecond,
      } = sectionContentData.fields
    
      const { leftImage, container, rightSide, circleDiagram, imageSmallScreens, card01, card02} = styles;
    
      const size = useWindowSize();
    
      return (
        <div className={container}>
            <aside>
                <div className={leftImage}>
                    <Image 
                        src={`https:${leftImg_url}`} 
                        layout="fill"
                        priority 
                    />
                </div>
            </aside>
            <aside className={rightSide}>
                <InfoBlock
                    titleText={title}
                    subtitleText={subtitle}
                    paragraphText={paragraph}
                    paragraphText_second={paragraphSecond}
                    fromComponent={'SpecializedIn'}
                />
                {size.width > 990 && 
                    <>
                        <img className={card01} src="img/specializedCard01.png"></img>
                        <img className={card02} src="img/specializedCard02.png"></img>
                    </>
                }
            </aside>
        </div>
      );
}