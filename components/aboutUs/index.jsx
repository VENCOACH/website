import styles from './aboutUs.module.scss';
import InfoBlock from '../infoBlock';


export default function AboutUs({sectionContentData}) {

  // console.log(sectionContentData);

  const { container, rightAside, leftAside } = styles;

  return (
    <div className={container}>
        <aside className={rightAside}>
          <InfoBlock/>    
        </aside>
        <aside className={leftAside}>
            
        </aside>
    </div>
  )
}
