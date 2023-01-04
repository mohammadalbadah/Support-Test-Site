import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'

function loadPage(store) {
  switch (store) {
    case 'arsenal':
      open('https://www.arsenal.com/', '_self')
      break;
    case 'barcelona':
      open('https://www.fcbarcelona.com/', '_self')
      break;
    case 'realmadrid':
      open('https://www.realmadrid.com/', '_self')
      break;
    default: return;
  }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Support Test Site</title>
        <link rel="icon" href="https://assets.contentsquare.com/design-tokens/assets/brand/logo/favicon.png" sizes="any" />
        <meta charset="utf-8"></meta>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Choose your club
        </h1>
        <li className={styles.grid}>
          <img src={'https://logos-world.net/wp-content/uploads/2020/05/Arsenal-Logo.png'} onClick={() => { loadPage('arsenal') }} height={200} />
          <img src={'https://logos-world.net/wp-content/uploads/2020/04/Barcelona-Logo.png'} onClick={() => { loadPage('barcelona') }} height={200} />
          <img src={'https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-symbol.png'} onClick={() => { loadPage('realmadrid') }} height={200} />
        </li>

      </main>

      <footer className={styles.footer}>

      </footer>
      <Script type="text/javascript" src="https://t.contentsquare.net/uxa/2c5142b15f133.js"></Script>
    </div>
  )
}

export function Arsenal() {
  return (
    <div>
      <h1>
        Arsenal Store
      </h1>
    </div>
  )
}

export function Barclona() {
  return (
    <div>
      <h1>
        Barclona Store
      </h1>
    </div>
  )
}

export function RealMadrid() {
  return (
    <div>
      <h1>
        RealMadrid Store
      </h1>
    </div>
  )
}