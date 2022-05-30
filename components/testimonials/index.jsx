import Carrousel from "../carrousel";
import InfoBlock from "../infoBlock";
import styles from './testimonials.module.scss';
import { useState } from "react";

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

  const {arrowButton, titleContainer, arrowWrapper} = styles;

  const [next, setNext] = useState(false);
  const [back, setBack] = useState(false);

  return (
    <div>
        <div className={titleContainer}>
          <InfoBlock
              titleText={title}
              subtitleText={subtitle}
              fromComponent="testimonials"
          />
          <div className={arrowWrapper}>
            <img
                className={arrowButton}
                onClick={()=>setBack(true)}
                src="img/arrowBackButton.png"
                alt="back button"
              />
              <img 
                className={arrowButton} 
                onClick={()=>setNext(true)} 
                src="img/arrowNextButton.png" 
                alt="next button" 
                role="button" 
              />
          </div>
        </div>
        <Carrousel
            next={next}
            setNext={setNext}
            back={back}
            setBack={setBack}
            images={testimonialsCards}
            imageContainer={styles.testimonialCardImage}
            DefaultSlidesToShow={2}
            carrouselResponsiveSettings={carrouselResponsiveSettings}
        />
    </div>
  )
}
