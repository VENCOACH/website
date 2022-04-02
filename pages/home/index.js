import Head from 'next/head';
import styles from './Home.module.sass';
import Section from '../../layouts/Section';
import Organizer from '../../utils/Organizer';


export default function Home({rawContent}) {

  const { container } = styles

  const orderContent = Organizer.order(rawContent);

  return (
    <div className={container}>
      
      <Head>
        <title>Vencoach</title>
        <meta name="Vencoach" content="Coaching profesional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {orderContent.map((each)=>{
        return <Section sectionData={each}/>
      })}

    </div>
  )
}

