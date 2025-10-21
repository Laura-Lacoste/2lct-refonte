import { Poppins } from 'next/font/google'
import "../styles/reset.css"
import "../styles/globals.css";
import Burger from '../components/burger';
import Header from '../components/header'
import Footer from '../components/footer';
import GTMNoScriptFix from './gtm-noscript';

export const metadata = {
  metadataBase: new URL('https://www.2lct.fr'),
  title: '2LCT - Création de sites web à Toulouse et en Haute-Garonne',
  icons: {
    icon: '/favicon.ico',
  },
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
  alternates: {
    canonical: '/',
  },
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
      <head>
  {/* Google Tag Manager */}
  <script
    dangerouslySetInnerHTML={{
      __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TVW9PNP7');`,
    }}
  />
  {/* End Google Tag Manager */}
</head>
      <body suppressHydrationWarning={true}>
        <GTMNoScriptFix />
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
