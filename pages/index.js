import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Choose your club
        </h1>
        <li className={styles.grid}>
          <Link href="/arsenal">
            <img src={'https://logos-world.net/wp-content/uploads/2020/05/Arsenal-Logo.png'} height={200} />
          </Link>
          <Link href="/barcelona">
            <img src={'https://logos-world.net/wp-content/uploads/2020/04/Barcelona-Logo.png'} height={200} />
          </Link>
          <Link href="/realmadrid">
            <img src={'https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-symbol.png'} height={200} />
          </Link>
        </li>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}