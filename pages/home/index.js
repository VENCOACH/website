import Head from 'next/head';
import styles from './Home.module.sass';
import Section from '../../layouts/Section';
import Organizer from '../../utils/Organizer';
import { useEffect, useState } from 'react';
import BannerNumbers from '../../components/bannerNumbers';

export default function Home({rawContent}) {

  const { container, universityBanner } = styles

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
        if (each.sys.contentType.sys.id === 'servicesTemplate') {return};
        return <Section key={each.fields.entryTitle} sectionData={each}/>
      })}
      <div className={universityBanner}>
        <a href="https://saberes.university/aval-academico/" target="_blank" rel='noreferrer'>
          <img src='img/logo-saberes-university.png' alt='saberes-university'></img>
          <h2>Acreditados con el aval académico de Saberes University</h2>
        </a>
      </div>
    </div>
  )
}

