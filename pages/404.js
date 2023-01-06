import Link from 'next/link'
import Head from 'next/head';
import styles from '../styles/Home.module.css'

const NotFound = () => {
    return (
        <>
            <Head>
                <title>Shop | Real Madrid</title>
                <link rel="icon" href="https://assets.contentsquare.com/design-tokens/assets/brand/logo/favicon.png" sizes="any" />
                <meta charset="utf-8"></meta>
            </Head>
            <div className="not-found">
                <h1>404</h1>
                <h2>Page Not Found!!!</h2>
                <p>Go back to the <Link href="/"><u>Home Page</u></Link></p>
            </div>
        </>
    );
}

export default NotFound;