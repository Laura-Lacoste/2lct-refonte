import { Poppins } from 'next/font/google'
import "../styles/reset.css"
import "../styles/globals.css";
import Burger from '../components/burger';
import Header from '../components/header'
import Footer from '../components/footer';

export const metadata = {
  title: '2LCT',
  description: 'Création de sites web à Toulouse',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body>
        {/*  Google Tag Manager (noscript)  */}
<noscript><iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-TVW9PNP7"
    height="0"
    width="0"
    style={{ display: "none", visibility: "hidden" }}
  ></iframe></noscript>
 {/* End Google Tag Manager (noscript) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          precedence="default"
        />
        <Burger />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
