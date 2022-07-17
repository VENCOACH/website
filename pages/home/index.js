import Head from 'next/head';
import styles from './Home.module.sass';
import Section from '../../layouts/Section';
import Organizer from '../../utils/Organizer';
import { useEffect, useState } from 'react';
import BannerNumbers from '../../components/bannerNumbers';

export default function Home({rawContent}) {

  const { container } = styles

  const [orderContent, setOrderContent] = useState([]);

  useEffect(() => {
    setOrderContent(Organizer.order(rawContent));
  }, [rawContent])
  
  return (
    <div className={container}>
      
      <Head>
        <title>Vencoach</title>
        <meta name="Vencoach" content="Coaching profesional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <BannerNumbers /> */}
      {orderContent && orderContent.map((each)=>{
        return <Section key={each.fields.entryTitle} sectionData={each}/>
      })}

    </div>
  )
}

