export const metadata = {
  title: 'Prestations | 2LCT - Création site web à Toulouse',
  description:
    "Services de création de sites web, refonte, SEO et accompagnement technique en Haute-Garonne. Adapté à vos besoins locaux.",
  openGraph: {
    title: 'Prestations | 2LCT',
    description:
      "Une offre claire et humaine pour votre présence en ligne en Haute-Garonne : vitrine, refonte, e-commerce, SEO, accompagnement.",
    url: 'https://www.2lct.fr/prestations',
  },
};


import PrestationsPage from "./prestationPage";

export default function prestationPage() {
  return <PrestationsPage />;
}