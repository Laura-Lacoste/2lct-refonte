export const metadata = {
  title: 'Portfolio | 2LCT - Réalisations web à Toulouse',
  description:
    "Découvrez mes réalisations web pour des entrepreneurs et artisans de Toulouse et la Haute-Garonne : design, développement, accompagnement.",
  openGraph: {
    title: 'Portfolio | 2LCT',
    description:
      "Sites créés à Toulouse et en Haute-Garonne : vitrine, e-commerce, refonte... chaque projet est unique.",
    url: 'https://www.2lct.fr/portfolio',
  },
};

import PortfolioPage from "./portfolioPage";

export default function portfolioPage() {
  return <PortfolioPage />;
}