import { Poppins } from 'next/font/google'
import "../styles/reset.css"
import "../styles/globals.css";
import Burger from '../components/burger';
import Header from '../components/header'
import Footer from '../components/footer';
import GTMNoScriptFix from './gtm-noscript';
import Script from 'next/script';

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
    canonical: 'https://www.2lct.fr',
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
  <Script
  id="schema-localbusiness-combined"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.2lct.fr/#localbusiness",
        "name": "2LCT Développement Web & Digital",
        "image": "https://www.2lct.fr/logo-2lct-blanc-fond-noir.webp",
        "url": "https://www.2lct.fr",
        "telephone": "+33 7 86 20 15 20",
        "email": "laura@2lct.fr",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "5 Rue du Maréchal Lyautey",
          "addressLocality": "Montastruc-la-Conseillère",
          "postalCode": "31380",
          "addressCountry": "FR"
        },
        "priceRange": "€€",
        "openingHours": "Mo-Fr 09:00-17:00",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 43.716,
          "longitude": 1.592
        },
        "areaServed": [
          "Toulouse",
          "Montastruc-la-Conseillère",
          "Lavaur",
          "Saint-Sulpice-la-Pointe",
          "Albi",
          "Castres",
          "Mazamet",
          "Haute-Garonne",
          "Tarn"
        ],
        "makesOffer": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Création de site web",
              "description":
                "Des sites modernes, sur-mesure, bien pensés. WordPress ou développement spécifique, selon vos besoins.",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Packs de création de site web",
                "itemListElement": [
                  { "@type": "Offer", "name": "Pack page unique" },
                  { "@type": "Offer", "name": "Pack site simple" },
                  { "@type": "Offer", "name": "Pack site avancé" }
                ]
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Refonte & optimisation",
              "description":
                "Modernisez votre site actuel avec un nouveau design, de meilleures performances et plus de visibilité.",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Packs de refonte et d’optimisation",
                "itemListElement": [
                  { "@type": "Offer", "name": "Pack mini optimisation" },
                  { "@type": "Offer", "name": "Pack refonte graphique" },
                  { "@type": "Offer", "name": "Pack refonte graphique et technique" }
                ]
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Référencement naturel (SEO)",
              "description":
                "Améliorez votre position sur Google grâce à un SEO complet : contenu, technique et performance.",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Packs SEO",
                "itemListElement": [
                  { "@type": "Offer", "name": "Pack SEO de base" },
                  { "@type": "Offer", "name": "Pack SEO complet" },
                  { "@type": "Offer", "name": "Pack SEO et Rédaction 3 pages" }
                ]
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Maintenance & support",
              "description":
                "Un site qui tourne sans souci : mises à jour, sécurité, assistance et évolutions.",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Packs de maintenance",
                "itemListElement": [
                  { "@type": "Offer", "name": "Maintenance de base" },
                  { "@type": "Offer", "name": "Maintenance avancée" },
                  { "@type": "Offer", "name": "Maintenance premium" }
                ]
              }
            }
          }
        ],
        "sameAs": [
          "https://www.instagram.com/2lct.digital/",
          "https://www.facebook.com/profile.php?id=61581452159349"
        ],
        "description":
          "2LCT est une agence digitale basée à Montastruc-la-Conseillère, spécialisée en création, refonte, référencement et maintenance de sites web sur mesure pour artisans, commerçants et PME autour de Toulouse, dans le Tarn et la Haute-Garonne."
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.2lct.fr/#organization",
        "name": "2LCT",
        "url": "https://www.2lct.fr",
        "logo": "https://www.2lct.fr/logo-2lct-blanc-fond-noir.webp",
        "email": "laura@2lct.fr",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+33 7 86 20 15 20",
          "contactType": "Service client",
          "areaServed": ["FR", "Occitanie"],
          "availableLanguage": ["French"]
        },
        "sameAs": [
          "https://www.instagram.com/2lct.digital/",
          "https://www.facebook.com/profile.php?id=61581452159349"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://www.2lct.fr/#website",
        "url": "https://www.2lct.fr",
        "name": "2LCT Développement Web & Digital",
        "publisher": {
          "@id": "https://www.2lct.fr/#organization"
        }
      }
    ]),
  }}
/>
</head>
      <body suppressHydrationWarning={true}>
        <Script
    id="gtm-script"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-TVW9PNP7');
    `,
    }}
  />

  <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-TVW9PNP7"
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    ></iframe>
  </noscript>
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
