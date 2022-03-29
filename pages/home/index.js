import Head from 'next/head';
import styles from './Home.module.sass';
import Section from '../../layouts/Section';
import cityBackground from '../../public/img/cityBackground.png';



export default function Home() {

  const { container } = styles

  return (
    <div className={container}>
      <Head>
        <title>Vencoach</title>
        <meta name="Vencoach" content="Coaching profesional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section
        name='main' 
        height="929px"
        bgimg={true} 
        src={cityBackground}
      />

    </div>
  )
}