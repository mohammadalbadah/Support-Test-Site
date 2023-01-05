import styles from '../styles/Home.module.css'
import Head from 'next/head'

const Arsenal = () => {
    return (
        <>
            <Head>
                <title>Shop | Arsenal</title>
                <link rel="icon" href="https://assets.contentsquare.com/design-tokens/assets/brand/logo/favicon.png" sizes="any" />
                <meta charset="utf-8"></meta>
            </Head>
            <div >
                <h1 className={styles.title}>Arsenal shop</h1>
            </div>
        </>);
}

export default Arsenal;