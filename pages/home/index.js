import Head from 'next/head';
import styles from './Home.module.sass';
import Section from '../../layouts/Section';


export default function Home() {

  const { container, contentBox } = styles

  return (
    <div className={container}>
      <Head>
        <title>Vencoach</title>
        <meta name="Vencoach" content="Coaching profesional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section/>

    </div>
  )
}