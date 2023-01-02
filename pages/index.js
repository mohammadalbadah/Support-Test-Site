import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'


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
          Welcome to Contentsquare!
        </h1>

      </main>

      <footer className={styles.footer}>

      </footer>
      <Script type="text/javascript" src="https://t.contentsquare.net/uxa/2c5142b15f133.js"></Script>
    </div>
  )
}
