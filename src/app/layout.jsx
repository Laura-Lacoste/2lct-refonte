import { Poppins } from 'next/font/google'
import "../styles/reset.css"
import "../styles/globals.css";


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
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          precedence="default"
        />
      </head>
      <body className={`${poppins.variable} font-sans`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
