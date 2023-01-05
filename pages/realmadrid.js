import styles from '../styles/Home.module.css'
import Head from 'next/head'

const RealMadrid = () => {
    return (<>
        <Head>
            <title>Shop | Real Madrid</title>
            <link rel="icon" href="https://assets.contentsquare.com/design-tokens/assets/brand/logo/favicon.png" sizes="any" />
            <meta charset="utf-8"></meta>
        </Head>
        <div >
            <h1 className={styles.title}>Real Madrid shop</h1>
        </div>
    </>);
}

export default RealMadrid;