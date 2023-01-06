import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head';
import { useRouter } from 'next/router';



function MyApp({ Component, pageProps }) {

  const router = useRouter();
  var path = "";
  switch (router.pathname) {
    case '/': path = "HomePage"
      break;

    case '/realmadrid': path = "Shop | Real Madrid"
      break;

    case '/arsenal': path = "Shop | Arsenal"
      break;

    case '/barcelona': path = "Shop | Barcelona"
      break;

    default: path = "Page Not Found"
      break;
  }


  return (
    <Layout>
      <Head>
        <title>{path}</title>
        <link rel="icon" href="https://assets.contentsquare.com/design-tokens/assets/brand/logo/favicon.png" sizes="any" />
        <meta charset="utf-8"></meta>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp