
export const metadata = {
  title: 'Accueil | 2LCT - Sites web sur mesure à Toulouse',
  description:
    "Bienvenue chez 2LCT. Je vous aide à créer un site web utile, élégant et parfaitement adapté à vos objectifs pros.",
  openGraph: {
    title: '2LCT - Développement de sites personnalisés',
    description: "Un accompagnement humain et technique pour votre visibilité en ligne.",
    url: 'https://www.2lct.fr/',
  },
};


import Home from "./homePage";

export default function HomePage() {
  return <Home />;
}