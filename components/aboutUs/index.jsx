import styles from './aboutUs.module.scss';
import InfoBlock from '../infoBlock';
import MiniCard from '../miniCard';


export default function AboutUs({sectionContentData}) {

  // console.log(sectionContentData);

  const { container, rightAside, leftAside } = styles;

  return (
    <div className={container}>
        <aside className={rightAside}>
          <InfoBlock/>  
          <MiniCard/>  
          <img src="img/separator.png" alt="" />
          <MiniCard/>
        </aside>
        <aside className={leftAside}>
            
        </aside>
    </div>
  )
}
