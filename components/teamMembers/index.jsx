import InfoBlock from "../infoBlock";
import Carrousel from "../carrousel";
import styles from './teamMembers.module.scss';


export default function TeamMembers({sectionContentData}) {


    const {
        title,
        subtitle,
        teamPhotos
    } = sectionContentData.fields;

  return (
    <div className='container'>
        <InfoBlock 
            titleText={title}
            subtitleText={subtitle}
            _center = {true}
            fromComponent="teamMembers"
        />
        <Carrousel images={teamPhotos} imageContainer={styles.teamImage}/>
    </div>
  )
}
