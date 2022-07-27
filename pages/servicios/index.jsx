import React from 'react';
import { createClient } from 'contentful';
import styles from './servicios.module.scss';
import Image from 'next/image';
import useWindowSize from '../../hooks/useWindowSize';
import InfoBlock from '../../components/infoBlock';

export default function ServiceDetails({ data }) {

  console.log(data)

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
  } = data.fields

  const sectionGeneralStyle = {
    height: sectionHeight, 
  }

  const { rightImage, leftSide, imageSmallScreens, contentBox, container, backgroundImg} = styles;
  const size = useWindowSize();
  return (
    <div className={`${backgroundImg} ${container}`} style={sectionGeneralStyle}>
        {bgimg === 'true' &&
          <Image
          src={`https:${imgUrl}`}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          quality={100}
          priority
          alt=""
          />
        }
      <div className={contentBox}>
              <aside className={leftSide}>
                  <InfoBlock
                  titleText={title}
                  subtitleText={subtitle}
                  paragraphText={paragraph}
                  paragraphText_second={paragraphSecond}
                  fromComponent={'WhyChooseUs'}
                  />
                  {/* <img className={circleDiagram} src="img/cursos-coaching.png" alt="cursos-coaching" /> */}
              </aside>
              <aside>
                  <div className={rightImage}>
                  {size.width > 770 ?
                      <Image 
                          src={`https:${rightImg_url}`} 
                          layout="fill"
                          alt="coaching-integral"
                      /> :
                      <img alt="coaching-integral" className={imageSmallScreens} src='img/desarrollo-lideres.jpg' /> //connect to contentful and make a next component image
                  }
                  </div>
              </aside>
        </div>
    </div>
  )
}

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken:process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
  })

  const resp = await client.getEntries({
    'fields.entryTitle': 'programa_desarrollo',
    content_type: 'servicesTemplate'
  })

  return {
    props: {
      data: resp.items[0],
    }
  }
}