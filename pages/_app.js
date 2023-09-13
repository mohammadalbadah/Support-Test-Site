import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';



function MyApp({ Component, pageProps }) {
  
let tagDeployValue;

try {
  tagDeployValue = localStorage.getItem("tagDeployMethod") || "0";
} catch (error) {}

  const router = useRouter();
  var path = "";
  switch (router.pathname) {
    case '/': path = "HomePage"
      break;

    case '/products': path = 'Shop'
      break;

    default: path = "Page Not Found"
      break;
  }


  return (
    <Layout>
      {tagDeployValue == "0" && (<Script id="GTM" strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-W989V5M');`}}>
      </Script>) || tagDeployValue == "1" && (<Script id="AdobeLaunch" strategy="afterInteractive" src="https://assets.adobedtm.com/ae93c31080b0/30f55a047a18/launch-b6b198979163-development.min.js">
      </Script>)}
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