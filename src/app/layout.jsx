import { Poppins } from 'next/font/google'
import "../styles/reset.css"
import "../styles/globals.css";
import Burger from '../components/burger';
import Header from '../components/header'
import Footer from '../components/footer';

export const metadata = {
  title: '2LCT - Création de sites web à Toulouse et en Haute-Garonne',
  description:
    "2LCT accompagne les professionnels de Toulouse et de la Haute-Garonne dans la création et la refonte de sites web sur mesure, élégants et efficaces.",
  keywords: [
    'création site web',
    'freelance web',
    'site vitrine',
    'Toulouse',
    'Haute-Garonne',
    'refonte site',
    'développeuse web',
    'Laura 2LCT',
  ],
  robots: 'index, follow',
  openGraph: {
    title: '2LCT - Création de sites web à Toulouse et en Haute-Garonne',
    description:
      "Création de sites vitrines, boutiques en ligne et projets personnalisés à Toulouse et en Haute-Garonne. Un accompagnement humain, technique et clair.",
    url: 'https://www.2lct.fr',
    siteName: '2LCT',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '2LCT - Sites web à Toulouse & Haute-Garonne',
    description: "Freelance web à Toulouse, création de sites professionnels et personnalisés.",
  },
};


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
