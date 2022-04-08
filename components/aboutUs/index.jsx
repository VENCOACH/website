import styles from './aboutUs.module.scss';


export default function AboutUs({sectionContentData}) {

  // console.log(sectionContentData);

  const { container, rightAside, leftAside } = styles;

  return (
    <div className={container}>
        <aside className={rightAside}>
            
        </aside>
        <aside className={leftAside}>
            
        </aside>
    </div>
  )
}
