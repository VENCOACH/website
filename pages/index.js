import Head from 'next/head'
import styles from '../sass/Home.module.sass'


export default function Home() {

  const { container, box } = styles

  return (
    <div className={container}>
      <Head>
        <title>Vencoach</title>
        <meta name="Vencoach" content="Coaching profesional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>este es el contenido</p>
      <div className={box}> 

      </div>
      
    </div>
  )
}
