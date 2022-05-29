import Carrousel from "../carrousel";
import InfoBlock from "../infoBlock";
import styles from './testimonials.module.scss';

export default function Testimonials({sectionContentData}) {

  const {
      title,
      subtitle,
      testimonialsCards
  } = sectionContentData.fields;

  const carrouselResponsiveSettings = [
    {
        breakpoint: 1024,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
    }
  ]
  
  return (
    <div>
        <InfoBlock
            titleText={title}
            subtitleText={subtitle}
            fromComponent="testimonials"
        />
        <Carrousel
            images={testimonialsCards}
            imageContainer={styles.testimonialCardImage}
            DefaultSlidesToShow={2}
            carrouselResponsiveSettings={carrouselResponsiveSettings}
        />
    </div>
  )
}
