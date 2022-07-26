import InfoBlock from "../infoBlock";
import Carrousel from "../carrousel";
import styles from './teamMembers.module.scss';


export default function TeamMembers({sectionContentData}) {


    const {
        title,
        subtitle,
        teamPhotos
    } = sectionContentData.fields;

    const carrouselResponsiveSettings = [
      {
          breakpoint: 1440,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 1
          }
      },
      {
          breakpoint: 570,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1
          }
      }
    ]

  return (
    <div className='container'>
        <InfoBlock 
            titleText={title}
            subtitleText={subtitle}
            _center = {true}
            fromComponent="teamMembers"
        />
        <Carrousel 
          images={teamPhotos} 
          imageContainer={styles.teamImage} 
          autoplay
          dots
          DefaultSlidesToShow={3}
          carrouselResponsiveSettings={carrouselResponsiveSettings}
          fromComponent="teamMembers"
        />
    </div>
  )
}
