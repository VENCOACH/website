import InfoBlock from "../infoBlock";
import styles from './whyChooseUs.module.scss';
import Image from 'next/image';

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

  const { rightImage, container, leftSide, banner_numbers} = styles;
  return (
    <div className={container}>
        <aside className={leftSide}>
            <InfoBlock
            titleText={title}
            subtitleText={subtitle}
            paragraphText={paragraph}
            paragraphText_second={paragraphSecond}
            p_wrapper_margin={100}
            />
            <img src="img/ciclo_diagrama.png" alt="" />
        </aside>
        <aside>
            <div className={rightImage}>
            <Image src={`https:${rightImg_url}`} layout="fill" priority />
            </div>
        </aside>
    </div>
  );
}
